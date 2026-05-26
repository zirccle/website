"use client";

import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-components";

const sections = [
  {
    title: "Introduction",
    content: "Welcome to Zirccle. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.",
  },
  {
    title: "Information We Collect",
    content: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:",
    bullets: [
      "Identity Data includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.",
      "Contact Data includes billing address, delivery address, email address and telephone numbers.",
      "Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.",
      "Profile Data includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses."
    ]
  },
  {
    title: "How We Use Your Data",
    content: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
    cards: [
      {
        icon: "contract",
        title: "Contract Performance",
        desc: "Where we need to perform the contract we are about to enter into or have entered into with you."
      },
      {
        icon: "gavel",
        title: "Legal Obligation",
        desc: "Where we need to comply with a legal or regulatory obligation."
      },
      {
        icon: "monitoring",
        title: "Legitimate Interests",
        desc: "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests."
      }
    ]
  },
  {
    title: "Your Choices",
    content: "You have choices regarding the collection, use, and sharing of your data:",
    bullets: [
      "Opt-out of marketing communications: You can unsubscribe from our marketing emails at any time by clicking the 'unsubscribe' link at the bottom of the emails.",
      "Accessing and updating your information: You may review and update your account information by logging into your account settings.",
      "Cookies: You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies."
    ]
  },
  {
    title: "Contact Us",
    content: "If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager at admin@zirccle.com."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <SiteHeader />

      <section className="hero-gradient pt-16 pb-8 md:pt-20 md:pb-12">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-white/78 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md">
              Legal
            </span>
            <h1 className="text-display-lg font-semibold leading-tight text-primary">Privacy Policy</h1>
            <p className="text-body-lg leading-relaxed text-on-surface-variant max-w-2xl">
              We value your privacy and are committed to protecting your personal data while you explore Zirccle.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/85 p-5 shadow-[0_18px_40px_rgba(89,17,98,0.08)]">
                <div className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">Last updated</div>
                <p className="mt-2 text-body-lg text-on-surface-variant">May 23, 2026</p>
              </div>
              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/85 p-5 shadow-[0_18px_40px_rgba(89,17,98,0.08)]">
                <div className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">Scope</div>
                <p className="mt-2 text-body-lg text-on-surface-variant">Website and waitlist submissions.</p>
              </div>
            </div>
          </div>

          <article className="mt-8 rounded-[1.5rem] border border-outline-variant/35 bg-white/88 p-6 shadow-[0_22px_55px_rgba(89,17,98,0.08)] backdrop-blur-md md:p-8">
            <nav className="mb-6 flex flex-wrap gap-2">
              {sections.map((s, i) => (
                <a key={i} href={`#section-${i}`} className="text-sm text-on-surface-variant hover:text-primary">{s.title}</a>
              ))}
            </nav>

            <div className="space-y-8">
              {sections.map((sec, idx) => (
                <section key={idx} id={`section-${idx}`} className="space-y-4">
                  <h2 className="text-headline-sm font-semibold text-primary">{sec.title}</h2>
                  <p className="text-body-md leading-relaxed text-on-surface-variant">{sec.content}</p>

                  {sec.bullets && (
                    <ul className="space-y-3 pt-2 text-body-md text-on-surface-variant">
                      {sec.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.cards && (
                    <div className="grid gap-4 md:grid-cols-3">
                      {sec.cards.map((card, cIdx) => (
                        <div key={cIdx} className="rounded-[1.5rem] border border-outline-variant/35 bg-surface-container-low p-5 shadow-[0_14px_30px_rgba(89,17,98,0.06)]">
                          <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {card.icon}
                          </span>
                          <h3 className="mt-4 text-body-lg font-semibold text-primary">{card.title}</h3>
                          <p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">{card.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-8 border-t border-outline-variant/25 pt-6 flex items-center justify-between">
              <a className="inline-flex items-center gap-2 text-label-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:text-primary" href="/">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Return to home
              </a>
              <button onClick={() => window.print()} className="rounded-full bg-primary px-6 py-3 text-label-sm font-semibold uppercase tracking-[0.18em] text-on-primary transition-all duration-200 hover:bg-primary-container active:scale-95">Print policy</button>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
