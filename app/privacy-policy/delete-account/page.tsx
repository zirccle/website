import type { Metadata } from "next";
import { PageShell, Pill } from "../../site-components";
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
            <p className="mt-6 text-lg leading-8 text-muted-strong">You can delete your Zirccle account and its data yourself in the app, or ask us to do it.</p>
          </div>

          <article className="mt-10 rounded-3xl bg-white p-6 shadow-soft md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-surface-container-low p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Last updated</p>
                <p className="mt-2 text-lg text-muted-strong">2026-10-11</p>
              </div>
              <div className="rounded-2xl bg-surface-container-low p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Developer</p>
                <p className="mt-2 text-lg text-muted-strong">Zirccle</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-primary">Delete it yourself in the app</h2>
                <ol className="mt-3 list-decimal pl-6 text-base leading-7 text-muted-strong">
                  <li>Open the Zirccle app and sign in.</li>
                  <li>Open the menu, then Settings, then Privacy &amp; Security.</li>
                  <li>Tap Delete account, confirm, and type DELETE.</li>
                </ol>
                <p className="mt-3 text-base leading-7 text-muted-strong">Your account and its data are deleted straight away. This cannot be undone.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary">Or ask us to delete it</h2>
                <ol className="mt-3 list-decimal pl-6 text-base leading-7 text-muted-strong">
                  <li>Email admin@zirccle.com from the address you registered with, using the subject &quot;Account deletion request&quot;.</li>
                  <li>We will confirm the account is yours and delete it within 30 days. You will get an email when it is done.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary">What is deleted</h2>
                <p className="mt-3 text-base leading-7 text-muted-strong">Your profile (name and email), your sign-in identity, every photo you uploaded, your wardrobe and outfits, your posts, comments and ratings, your saved posts and follows, your style profile, and the messages you sent.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary">What is kept</h2>
                <p className="mt-3 text-base leading-7 text-muted-strong">Server logs are kept for 7 days and error reports for up to 90 days. These do not contain your name or email. We may keep limited information where the law requires it.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary">Delete some data without deleting your account</h2>
                <p className="mt-3 text-base leading-7 text-muted-strong">You can delete a post or a wardrobe item in the app at any time. To have other data removed without closing your account, email admin@zirccle.com.</p>
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
