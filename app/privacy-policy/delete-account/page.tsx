import type { Metadata } from "next";
import { PageShell, Pill } from "../site-components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request account deletion | Zirccle",
  description: "Request deletion of your Zirccle account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <PageShell>
      <section className="pt-12 md:pt-16">
        <div className="mx-auto max-w-container px-5 py-16 md:px-10 lg:px-20">
          <div className="max-w-3xl">
            <Pill>Legal</Pill>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-primary md:text-7xl">Request account & data deletion</h1>
            <p className="mt-6 text-lg leading-8 text-muted-strong">Follow the instructions below to request deletion of your Zirccle account and any associated personal data.</p>
          </div>

          <article className="mt-10 rounded-3xl bg-white p-6 shadow-soft md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-surface-container-low p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Last updated</p>
                <p className="mt-2 text-lg text-muted-strong">2026-06-05</p>
              </div>
              <div className="rounded-2xl bg-surface-container-low p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Developer</p>
                <p className="mt-2 text-lg text-muted-strong">Zirccle</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-primary">How to request deletion</h2>
                <ol className="mt-3 list-decimal pl-6 text-base leading-7 text-muted-strong">
                  <li>Sign in to the Zirccle app (or include the email you used to register when contacting us).</li>
                  <li>Email privacy@zirccle.com with the subject: "Account deletion request" and include your account email and a short confirmation that you authorize deletion.</li>
                  <li>We will verify ownership of the account and process the deletion within 30 days. You will receive a confirmation when the deletion completes.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary">What will be deleted</h2>
                <p className="mt-3 text-base leading-7 text-muted-strong">We will delete the following personal data associated with your account upon successful verification: account profile (name, email), uploaded photos and media, saved outfits and wardrobes, and any user-generated content. Aggregated or de-identified analytics that cannot reasonably be used to identify you will be retained.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary">What may be retained</h2>
                <p className="mt-3 text-base leading-7 text-muted-strong">We may retain limited information where required by law or to comply with legal obligations (for example, records related to financial transactions). Backups and logs may persist for a limited period (up to 90 days) before being removed.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary">Contact and support</h2>
                <p className="mt-3 text-base leading-7 text-muted-strong">Send deletion requests to privacy@zirccle.com. If you have questions about what is deleted or need assistance, reply to that email.</p>
              </section>
            </div>

            <div className="mt-8">
              <Link className="inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white" href="/">
                Return to home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
