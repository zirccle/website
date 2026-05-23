import { SiteFooter, SiteHeader } from "../site-components";

const sections = [
  [
    "Introduction",
    "This Privacy Policy explains how Zirccle collects, uses, and protects information when you join first access or use our wardrobe services.",
  ],
  [
    "Information We Collect",
    "We may collect account details, waitlist information, wardrobe content you choose to upload, device data, and support messages.",
  ],
  [
    "How We Use Your Data",
    "We use data to provide wardrobe organization, generate outfit suggestions, improve product quality, and communicate beta access updates.",
  ],
  [
    "Contract Performance",
    "Some processing is necessary to provide the Zirccle product features you request.",
  ],
  [
    "Legal Obligation",
    "We may process or retain information where required by applicable law.",
  ],
  [
    "Legitimate Interests",
    "We may use limited data to protect the service, improve reliability, and understand product usage.",
  ],
  [
    "Your Choices",
    "You can request access, correction, or deletion of your information by contacting us.",
  ],
  ["Contact Us", "For privacy questions, email hello@zirccle.app."],
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="legalHero">
        <h1>Privacy Policy</h1>
        <p>Last updated: May 23, 2026</p>
      </section>
      <section className="legalContent">
        {sections.map(([title, text]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
