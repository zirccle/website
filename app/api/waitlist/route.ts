import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Store waitlist data in a server-only directory that is gitignored (.data/)
const dataDir = path.join(process.cwd(), ".data");
const waitlistFilePath = path.join(dataDir, "waitlist-emails.json");

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Ensure data directory exists (server-only)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Load existing emails
    let emails: any[] = [];
    if (fs.existsSync(waitlistFilePath)) {
      try {
        const fileContent = fs.readFileSync(waitlistFilePath, "utf8");
        emails = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error reading waitlist file:", err);
      }
    }

    // Check if email already exists
    const emailExists = emails.some((item: any) => item.email.toLowerCase() === email.toLowerCase());

    if (emailExists) {
      return NextResponse.json(
        { success: true, message: "Email is already on the waitlist." },
        { status: 200 }
      );
    }

    // Add new entry
    emails.push({
      email,
      source: source || "zirccle-website",
      timestamp: new Date().toISOString(),
    });

    // Save back to file (server-only, gitignored)
    fs.writeFileSync(waitlistFilePath, JSON.stringify(emails, null, 2), "utf8");

    return NextResponse.json(
      { success: true, message: "Successfully added to waitlist!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
