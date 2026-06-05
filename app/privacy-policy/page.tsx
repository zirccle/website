import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Pill } from "../site-components";

export const metadata: Metadata = {
  title: "Privacy Policy | Zirccle",
  description: "Read how Zirccle handles your data, emails, and account information.",
};

const sections = [
  [
    "Introduction",
    "This Privacy Policy describes how Zirccle (\"we\", \"us\", \"our\") collects, uses, shares, and protects information when you use our website or the Zirccle Fashion App (the \"App\"). By using the website or the App you agree to the collection and use of information in accordance with this policy.",
  ],
  [
    "Information We Collect",
    "We may collect: account information (name, email, profile data), content and media you provide (for example photos you upload or save), device & usage data (device model, OS version, unique device identifiers, app and browser version, feature interactions, crash reports, and performance metrics), and aggregated or pseudonymized analytics to understand usage patterns.",
  ],
  [
    "How We Use Information",
    "We use information to provide and operate the website and App (including account management and storage of your photos/media), to improve and personalize the service, to develop new features, to monitor and fix bugs and security issues, and to communicate with you about your account and updates where you have opted in.",
  ],
  [
    "Sharing and Disclosure",
    "We share data with trusted third-party service providers who perform services on our behalf (for example cloud storage, analytics, crash reporting, and payment processors). These providers are contractually limited to using data only to provide those services. We may disclose information to comply with applicable law or respond to lawful requests by public authorities. We may also share aggregated or de-identified information that cannot reasonably be used to identify you. We do not sell your personal information.",
  ],
  [
    "Data Retention",
    "We retain personal data only as long as necessary to provide the website and App, to comply with legal obligations, and to resolve disputes. If you request deletion of your account and data, we will delete or anonymize personal data within a reasonable timeframe subject to legal and operational constraints.",
  ],
  [
    "Security",
    "We use reasonable administrative, technical, and physical measures to protect personal data. No system can be guaranteed 100% secure; if a security incident occurs we will take appropriate measures and notify affected users when required by law.",
  ],
  [
    "Children",
    "The website and App are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child under 13 has provided us with personal information, contact us and we will take steps to delete the information.",
  ],
  [
    "Your Rights and Choices",
    "You may review or update certain account information by signing into your account and editing your profile. Where applicable you may opt out of certain communications; we may still send transactional messages related to your account. You can request deletion of your account and personal data by contacting us; some data may remain in backups or logs for a limited period.",
  ],
  [
    "Third-Party Links and Services",
    "The website or App may contain links to third-party sites or services. This Privacy Policy does not apply to those third parties; please review their privacy policies before providing personal information.",
  ],
  [
    "Changes to This Policy",
    "We may update this Privacy Policy from time to time. We will post the updated policy on the website (and in the App where applicable) and update the \"Last updated\" date above.",
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
            <p className="mt-6 text-lg leading-8 text-muted-strong">We keep this policy clear so you can understand how Zirccle handles website and waitlist information.</p>
          </div>

          <article className="mt-10 rounded-3xl bg-white p-6 shadow-soft md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Meta label="Last updated" value="2026-06-05" />
              <Meta label="Scope" value="Website and App" />
            </div>
            <div className="mt-10 space-y-8">
              {sections.map(([title, text]) => (
                <section className="scroll-mt-28 border-t border-outline-variant pt-8" id={title.toLowerCase().replaceAll(" ", "-")} key={title}>
                  <h2 className="text-2xl font-semibold text-primary">{title}</h2>
                  <p className="mt-3 text-base leading-7 text-muted-strong">{text}</p>
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
