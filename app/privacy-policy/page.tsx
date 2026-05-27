import Link from "next/link";
import { PageShell, Pill } from "../site-components";

const sections = [
  ["Introduction", "Welcome to Zirccle. We value your privacy and are committed to protecting personal data when you visit our website or join the waitlist."],
  ["Information we collect", "We may collect contact details, waitlist metadata, browser information, and communication preferences when you submit forms or contact us."],
  ["How we use your data", "We use submitted information to operate the waitlist, respond to messages, improve the product, and comply with legal obligations."],
  ["Your choices", "You can request access, correction, deletion, or unsubscribe from marketing communication by contacting admin@zirccle.com."],
  ["Contact us", "Questions about this policy can be sent to admin@zirccle.com."],
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="pt-28">
        <div className="mx-auto max-w-container px-5 py-16 md:px-10 lg:px-20">
          <div className="max-w-3xl">
            <Pill>Legal</Pill>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-primary md:text-7xl">Privacy Policy</h1>
            <p className="mt-6 text-lg leading-8 text-muted-strong">We keep this policy clear so you can understand how Zirccle handles website and waitlist information.</p>
          </div>

          <article className="mt-10 rounded-3xl bg-white p-6 shadow-soft md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Meta label="Last updated" value="May 23, 2026" />
              <Meta label="Scope" value="Website and waitlist submissions" />
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
