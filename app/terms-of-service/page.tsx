import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Pill } from "../site-components";

export const metadata: Metadata = {
  title: "Terms of Service | Zirccle",
  description: "The terms that govern use of the Zirccle app and website.",
};

// A section is a paragraph, or a list of points when the text is an array.
const terms: [string, string | string[]][] = [
  [
    "Acceptance of terms",
    "These terms govern your use of the Zirccle website and the Zirccle app (together, the \"Service\"). By creating an account or using the Service you agree to them. If you do not agree, do not use the Service.",
  ],
  [
    "Who can use Zirccle",
    "You must be at least 13 years old. If you are under the age of majority where you live, you may use the Service only with the consent of a parent or guardian.",
  ],
  [
    "Your account",
    "Give accurate information when you sign up, keep your sign-in details to yourself, and tell us if you think someone else has used your account. You are responsible for what happens under your account.",
  ],
  [
    "Your content",
    "Photos, posts, comments, messages and wardrobe details you add remain yours. You give Zirccle permission to store, process and display them as needed to run the Service: for example, to show your posts to other users, to deliver your messages, and to have an AI model describe a clothing photo. This permission ends when you delete the content or your account. Only upload content you have the right to share.",
  ],
  [
    "Rules for posts, comments and messages",
    [
      "No content that is illegal, hateful, harassing, threatening, sexually explicit, or that exploits or endangers children.",
      "No content that infringes someone else's copyright, trademark or privacy, including photos of people who have not agreed to be posted.",
      "No spam, scams, impersonation, or attempts to collect other users' information.",
      "No attempts to break, overload, scrape or reverse engineer the Service, or to get around its limits.",
    ],
  ],
  [
    "Reporting and moderation",
    "You can report a post and block a user from inside the app. We review reports and may remove content, limit features, or suspend or close an account that breaks these terms, with or without notice. To report something the app does not let you report, email admin@zirccle.com.",
  ],
  [
    "AI styling features",
    "Zirccle uses AI to describe clothing photos, suggest outfits and answer styling questions. The results are suggestions: they can be wrong or not to your taste, and they are not professional advice. The AI features have usage limits and may be unavailable at times.",
  ],
  [
    "Privacy",
    "Our Privacy Policy explains what we collect and how we use it. It forms part of these terms.",
  ],
  [
    "Deleting your account",
    "You can stop using the Service and delete your account at any time in the app under Settings, Privacy & Security, Delete account. Deleting your account deletes your content. This cannot be undone.",
  ],
  [
    "Intellectual property",
    "Zirccle owns the Service itself: the app, website, design, name and logo. These terms do not give you any right to them beyond using the Service as intended.",
  ],
  [
    "Changes to the Service",
    "Zirccle is new and still changing. We may add, change or remove features, and we may end the Service. Where we can, we will tell you in advance about changes that matter.",
  ],
  [
    "Disclaimers and limitation of liability",
    "The Service is provided \"as is\" and \"as available\", without warranties of any kind, to the extent the law allows. We do not promise that it will be uninterrupted or error-free, or that you will like every suggestion. To the extent the law allows, Zirccle is not liable for indirect or consequential losses, for content posted by other users, or for loss of content. Nothing in these terms limits rights you have under consumer law that cannot be limited.",
  ],
  [
    "Changes to these terms",
    "We may update these terms. We will post the new version here and change the \"Last updated\" date. If you keep using the Service after a change, you accept the new terms.",
  ],
  [
    "Contact",
    "Questions about these terms: admin@zirccle.com.",
  ],
];

export default function TermsOfServicePage() {
  return (
    <PageShell>
      <section className="pt-12 md:pt-16">
        <div className="mx-auto max-w-container px-5 py-16 md:px-10 lg:px-20">
          <div className="max-w-3xl">
            <Pill>Agreement</Pill>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-primary md:text-7xl">Terms of Service</h1>
            <p className="mt-6 text-lg leading-8 text-muted-strong">Clear service terms for a product that respects your time, wardrobe, and data.</p>
          </div>

          <article className="mt-10 rounded-3xl bg-white p-6 shadow-soft md:p-10">
            <div className="rounded-2xl bg-surface-container-low p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Last updated</p>
              <p className="mt-2 text-lg text-muted-strong">2026-10-11</p>
            </div>
            <div className="mt-10 space-y-8">
              {terms.map(([title, text]) => (
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
            <Link className="mt-4 ml-4 inline-flex rounded-lg border border-outline-variant px-5 py-3 font-semibold text-primary" href="/privacy-policy">
              Privacy Policy
            </Link>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
