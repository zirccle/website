import { SiteHeader, SiteFooter } from "../site-components";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="hero-gradient pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-[860px] px-margin-mobile md:px-margin-desktop">
          <div className="space-y-6 text-center">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-white/78 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md mx-auto">
              Contact
            </span>
            <h1 className="mx-auto max-w-xl text-display-lg-mobile font-semibold leading-[1.02] tracking-tight text-primary md:text-display-lg">
              Reach Zirccle directly.
            </h1>
            <p className="mx-auto max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
              For support, partnerships, or product feedback, email the team directly. There is one inbox and one response path.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-outline-variant/35 bg-white/90 p-6 shadow-[0_22px_55px_rgba(89,17,98,0.08)] backdrop-blur-md md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="rounded-[1.75rem] border border-outline-variant/35 bg-surface-container-low p-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl text-primary">mail</span>
                  <div>
                    <p className="text-label-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">Email</p>
                    <a className="mt-1 block text-body-lg font-semibold text-primary transition-colors hover:text-primary-container" href="mailto:admin@zirccle.com">
                      admin@zirccle.com
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-body-md leading-relaxed text-on-surface-variant">
                  Typical response window: 1 business day.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white p-5 shadow-[0_14px_34px_rgba(89,17,98,0.06)] lg:max-w-[280px]">
                <p className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">What to send</p>
                <p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">
                  Support, partnerships, and launch coordination all go to the same inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
