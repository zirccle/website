import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const fromEmail = process.env.WAITLIST_FROM_EMAIL ?? "admin@zirccle.com";
const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME ?? "Waitlist";
const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const serviceAccountPrivateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isValidEmailAddress(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function getSpreadsheetId() {
  if (!spreadsheetId) {
    throw new Error(
      "Google Sheets configuration is missing. Set GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY."
    );
  }

  return spreadsheetId;
}

function createSheetsClient() {
  if (!serviceAccountEmail || !serviceAccountPrivateKey) {
    throw new Error(
      "Google Sheets configuration is missing. Set GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY."
    );
  }

  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: serviceAccountPrivateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

async function ensureWaitlistSheetExists() {
  const sheets = createSheetsClient();
  const resolvedSpreadsheetId = getSpreadsheetId();

  let spreadsheet;

  try {
    spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: resolvedSpreadsheetId,
      includeGridData: false,
    });
  } catch (error) {
    throw new Error(
      `Google Sheets spreadsheet was not found or is not shared with the service account. Share the sheet with ${serviceAccountEmail} and verify GOOGLE_SHEETS_SPREADSHEET_ID.`
    );
  }

  const existingSheet = spreadsheet.data.sheets?.some((sheet) => sheet.properties?.title === sheetName);

  if (existingSheet) {
    return;
  }

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: resolvedSpreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: {
              title: sheetName,
            },
          },
        },
      ],
    },
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId: resolvedSpreadsheetId,
    range: `${sheetName}!A1:C1`,
    valueInputOption: "RAW",
    requestBody: {
      values: [["Email", "Source", "Timestamp"]],
    },
  });
}

async function loadSheetEmails(): Promise<string[]> {
  await ensureWaitlistSheetExists();

  const sheets = createSheetsClient();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: getSpreadsheetId(),
    range: `${sheetName}!A2:A`,
  });

  const values = response.data.values ?? [];
  return values
    .map((row) => row[0])
    .filter((value): value is string => typeof value === "string" && value.trim().length > 0)
    .map((value) => normalizeEmail(value));
}

async function appendSheetRow(email: string, source: string) {
  await ensureWaitlistSheetExists();

  const sheets = createSheetsClient();
  await sheets.spreadsheets.values.append({
    spreadsheetId: getSpreadsheetId(),
    range: `${sheetName}!A:C`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[email, source, new Date().toISOString()]],
    },
  });
}

function createMailTransport() {
  if (!gmailUser || !gmailAppPassword) {
    throw new Error("Gmail configuration is missing. Set GMAIL_USER and GMAIL_APP_PASSWORD.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
}

async function sendConfirmationEmail(email: string) {
  const transport = createMailTransport();

  await transport.sendMail({
    from: `Zirccle <${fromEmail}>`,
    to: email,
    subject: "You are on the Zirccle beta list",
    text:
      "You have successfully signed up for Zirccle beta access. We will reach out with launch updates and early access details.",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2c1831;">
        <h1 style="margin: 0 0 16px; font-size: 24px;">You are on the Zirccle beta list</h1>
        <p style="margin: 0 0 12px;">You have successfully signed up for Zirccle beta access.</p>
        <p style="margin: 0;">We will send early access updates and launch notes to this email address.</p>
      </div>
    `,
  });
}

async function trySendConfirmationEmail(email: string) {
  try {
    await sendConfirmationEmail(email);
    return { sent: true as const };
  } catch {
    return { sent: false as const };
  }
}

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();
    const trimmedEmail = typeof email === "string" ? email.trim() : "";

    if (!isValidEmailAddress(trimmedEmail)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const normalizedEmail = normalizeEmail(trimmedEmail);
    const emails = await loadSheetEmails();
    const emailExists = emails.includes(normalizedEmail);

    if (emailExists) {
      return NextResponse.json({ success: true, message: "You are already signed up for beta access." }, { status: 200 });
    }

    const waitlistSource = typeof source === "string" && source.trim() ? source.trim() : "zirccle-website";
    await appendSheetRow(normalizedEmail, waitlistSource);

    const emailResult = await trySendConfirmationEmail(trimmedEmail);

    if (!emailResult.sent) {
      return NextResponse.json(
        {
          success: true,
          message:
            "You are signed up for beta access. Your signup was saved, but the confirmation email could not be sent right now.",
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { success: true, message: "You are signed up for beta access. Check your inbox for a confirmation email." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
