import { SiteFooter, SiteHeader } from "../site-components";

const sections = [
  [
    "Acceptance of Terms",
    "By accessing Zirccle, joining first access, or using the app, you agree to these Terms of Service.",
  ],
  [
    "User Accounts",
    "You are responsible for the accuracy of account information and for keeping access to your account secure.",
  ],
  [
    "Intellectual Property",
    "Zirccle, its interface, branding, and product systems are owned by Zirccle or its licensors.",
  ],
  [
    "Platform Content",
    "You retain rights to wardrobe content you upload, while granting Zirccle permission to process it to provide the service.",
  ],
  [
    "Limitation of Liability",
    "Zirccle is provided as-is during first access and beta periods, subject to the limits permitted by law.",
  ],
];

export default function TermsOfServicePage() {
  return (
    <main>
      <SiteHeader />
      <section className="legalHero">
        <h1>Terms of Service</h1>
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
