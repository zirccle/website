import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Pill } from "../site-components";

export const metadata: Metadata = {
  title: "Terms of Service | Zirccle",
  description: "Review the terms that govern use of Zirccle and its early access experiences.",
};

const terms = [
  ["Acceptance of terms", "By accessing or using Zirccle, you agree to these terms. If you do not agree, you may not use the service."],
  ["User accounts", "You are responsible for accurate account information and for maintaining the confidentiality of your account credentials."],
  ["Intellectual property", "Zirccle owns the platform content, interface, and original product functionality. User-uploaded wardrobe images remain the property of the user."],
  ["Limitation of liability", "Zirccle provides AI-driven styling suggestions as is and does not guarantee personal satisfaction with every outfit combination."],
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
              <p className="mt-2 text-lg text-muted-strong">October 24, 2026</p>
            </div>
            <div className="mt-10 space-y-8">
              {terms.map(([title, text]) => (
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
