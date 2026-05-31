import type { Metadata } from "next";
import { PageShell, Pill, WaitlistForm } from "../site-components";

export const metadata: Metadata = {
  title: "Contact | Zirccle",
  description: "Reach the Zirccle team for support, partnerships, feedback, or early access.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="pt-28">
        <div className="mx-auto max-w-container px-5 py-16 md:px-10 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Pill>Contact</Pill>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-primary md:text-7xl">
              Reach Zirccle directly.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-strong">
              For support, partnerships, product feedback, or launch coordination, email the team directly or join the first-access list.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-[1fr_0.85fr]">
            <article className="rounded-3xl bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-strong">Email</p>
              <a className="mt-3 block text-3xl font-semibold text-primary transition hover:text-primary-container" href="mailto:admin@zirccle.com">
                admin@zirccle.com
              </a>
              <p className="mt-5 text-base leading-7 text-muted-strong">Typical response window: 1 business day.</p>
            </article>

            <article className="rounded-3xl bg-surface-container-low p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Get first access</p>
              <WaitlistForm placement="footer" />
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
