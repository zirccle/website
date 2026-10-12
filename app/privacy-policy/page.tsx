import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Pill } from "../site-components";

export const metadata: Metadata = {
  title: "Privacy Policy | Zirccle",
  description: "What the Zirccle app and website collect, who it is shared with, and how to delete it.",
};

// A section is a paragraph, or a list of points when the text is an array.
const sections: [string, string | string[]][] = [
  [
    "Introduction",
    "This Privacy Policy describes how Zirccle (\"we\", \"us\", \"our\") collects, uses, shares, and protects information when you use our website or the Zirccle app (the \"App\"). By using the website or the App you agree to the collection and use of information as described here.",
  ],
  [
    "Information We Collect",
    [
      "Account details: your name and email address. If you sign in with Google, we receive your name and email from Google. Passwords are handled by our sign-in provider and are never stored on Zirccle's servers.",
      "Photos: pictures of clothing you add to your wardrobe and pictures you post. The App reads a photo only when you pick it or take it; it does not scan your photo library.",
      "Content you create: wardrobe items and their details, outfits, posts, captions, comments, ratings, saved posts, follows, your style profile, and messages you send to other users or to the AI stylist.",
      "Approximate location: only if you allow it, and only to fetch the local weather for outfit suggestions. The coordinates are used for the weather lookup and are not tied to your profile or shown to other users.",
      "Push notification token: if you turn notifications on, a token that lets us send them to your device.",
      "Diagnostics: crash and error reports, with your name and email left out, plus the device model and OS version needed to fix the problem.",
      "Website: the email address you give us if you join the waitlist or contact us.",
    ],
  ],
  [
    "How We Use Information",
    "We use this information to run the App: to sign you in, store and show your wardrobe, describe a clothing photo with AI, suggest outfits, show your posts to other users, deliver your messages, send notifications you have turned on, and find and fix errors. We do not use your information for advertising, and we do not build advertising profiles.",
  ],
  [
    "AI Features",
    "When you add a clothing photo, the photo is sent to an AI model provider so it can describe the item (type, colour, fit). When you chat with the AI stylist, your messages are sent to the same provider to produce a reply. These are processed to answer your request and are not used by us to train models.",
  ],
  [
    "Sharing and Disclosure",
    [
      "We do not sell your personal information, and we do not share it with advertisers.",
      "Other users can see what you choose to publish: your name, profile, posts, comments and ratings. Messages are visible to the people in the conversation. Your wardrobe is private unless you post from it.",
      "Service providers that process data for us, only to provide their service: Amazon Web Services (hosting, database and photo storage), Clerk (sign-in and account security), Google (only if you use Google sign-in), Groq (AI photo descriptions and stylist replies), Open-Meteo (weather for the coordinates you allow), Expo (delivery of push notifications), and Sentry (crash and error reports).",
      "We may disclose information when the law requires it.",
    ],
  ],
  [
    "Data Safety Summary",
    [
      "Collected: name, email address, photos, messages and other content you create, approximate location (optional), and crash diagnostics.",
      "Shared with third parties for advertising or sale: none.",
      "All data is encrypted in transit (HTTPS). Photos and the database are encrypted at rest.",
      "You can delete your account and its data at any time, in the App or by request. See the account deletion page linked below.",
    ],
  ],
  [
    "Data Retention and Deletion",
    "We keep your data for as long as your account exists. When you delete your account, your profile, photos, wardrobe, posts, comments, ratings, messages and sign-in identity are deleted straight away. Server logs are kept for 7 days and error reports for up to 90 days; these do not contain your name or email.",
  ],
  [
    "Security",
    "We use reasonable administrative, technical, and physical measures to protect personal data, including encrypted connections, encrypted storage, and restricted access to our systems. No system can be guaranteed 100% secure; if a security incident occurs we will take appropriate measures and notify affected users when required by law.",
  ],
  [
    "Children",
    "The website and App are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child under 13 has provided us with personal information, contact us and we will delete it.",
  ],
  [
    "Your Rights and Choices",
    "You can view and edit your profile in the App, make your profile private, turn notifications off, and refuse or withdraw location access in your device settings. You can delete your account and its data in the App under Settings, Privacy & Security, Delete account, or by emailing us. You may also ask us for a copy of your data or to correct it.",
  ],
  [
    "Third-Party Links and Services",
    "The website or App may contain links to third-party sites or services. This Privacy Policy does not apply to those third parties; please review their privacy policies before providing personal information.",
  ],
  [
    "Changes to This Policy",
    "We may update this Privacy Policy from time to time. We will post the updated policy on the website and update the \"Last updated\" date above.",
  ],
  [
    "Contact Us",
    "If you have questions or requests regarding this Privacy Policy, contact Zirccle at admin@zirccle.com.",
  ],
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="pt-12 md:pt-16">
        <div className="mx-auto max-w-container px-5 py-16 md:px-10 lg:px-20">
          <div className="max-w-3xl">
            <Pill>Legal</Pill>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-primary md:text-7xl">Privacy Policy</h1>
            <p className="mt-6 text-lg leading-8 text-muted-strong">We keep this policy clear so you can understand what Zirccle collects in the app and on the website, and what happens to it.</p>
          </div>

          <article className="mt-10 rounded-3xl bg-white p-6 shadow-soft md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Meta label="Last updated" value="2026-10-11" />
              <Meta label="Scope" value="Website and App" />
            </div>
            <div className="mt-10 space-y-8">
              {sections.map(([title, text]) => (
                <section className="scroll-mt-28 border-t border-outline-variant pt-8" id={title.toLowerCase().replaceAll(" ", "-")} key={title}>
                  <h2 className="text-2xl font-semibold text-primary">{title}</h2>
                  {Array.isArray(text) ? (
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-7 text-muted-strong">
                      {text.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-base leading-7 text-muted-strong">{text}</p>
                  )}
                </section>
              ))}
            </div>
            <Link className="mt-10 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white" href="/">
              Return to home
            </Link>
            <Link className="mt-4 ml-4 inline-flex rounded-lg border border-outline-variant px-5 py-3 font-semibold text-primary" href="/privacy-policy/delete-account">
              Request account & data deletion
            </Link>
          </article>
        </div>
      </section>
    </PageShell>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface-container-low p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">{label}</p>
      <p className="mt-2 text-lg text-muted-strong">{value}</p>
    </div>
  );
}
