"use client";

import { images } from "../screen-data";
import { FinalCta, SiteFooter, SiteHeader, ScreenHero } from "../site-components";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <ScreenHero
        kicker="Platform features"
        title="Every tool you need to master your wardrobe."
        text="Zirccle combines advanced AI with intuitive design to digitize, organize, and plan your style in one editorial product experience."
        image={images.cityStyle}
      />

      <section className="py-section-gap" id="smart-wardrobe">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-8 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-outline-variant/35 bg-white/85 p-3 shadow-[0_22px_55px_rgba(89,17,98,0.08)] backdrop-blur-md">
            <img className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" src={images.scanner} alt="Digitizing wardrobe" />
          </div>
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.22em] text-primary">Smart wardrobe</span>
            <h2 className="text-headline-md font-semibold text-primary">Stop forgetting what you own.</h2>
            <p className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              Snap a photo of your clothes and the wardrobe engine removes the background, categorizes the item, and tags it by color, season, and occasion.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-surface-container-low p-5">
                <h3 className="text-body-lg font-semibold text-on-surface">One-tap digitization</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">Upload entire outfits in minutes with a clean, guided capture flow.</p>
              </div>
              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-surface-container-low p-5">
                <h3 className="text-body-lg font-semibold text-on-surface">Smart inventory</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">Track usage frequency and build a closet that is easier to wear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-gap" id="ai-suggestions">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.22em] text-primary">AI style suggestions</span>
            <h2 className="mt-4 text-display-lg-mobile font-semibold tracking-tight text-primary md:text-headline-md">Personal styling, available 24/7.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">The recommendation layer learns your style profile, then turns your wardrobe into fresh combinations that feel believable and useful.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-outline-variant/35 bg-white/85 p-3 shadow-[0_22px_55px_rgba(89,17,98,0.08)]">
              <img className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" src={images.cityStyle} alt="Style suggestion" />
              <div className="absolute inset-x-8 bottom-8 max-w-sm rounded-[1.5rem] border border-white/35 bg-white/92 p-5 shadow-[0_16px_30px_rgba(89,17,98,0.12)] backdrop-blur-md">
                <h3 className="text-body-lg font-semibold text-primary">Dynamic outfit generation</h3>
                <p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">Mix and match what you already own in ways you probably would not reach for alone.</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-primary/10 bg-primary p-6 text-white shadow-[0_20px_50px_rgba(89,17,98,0.18)]">
                <span className="material-symbols-outlined text-4xl text-primary-fixed-dim">thermostat</span>
                <h3 className="mt-4 text-headline-sm font-semibold">Weather-ready</h3>
                <p className="mt-2 text-body-md leading-relaxed text-primary-fixed/85">Daily outfit ideas sync with the local forecast so the look matches the day.</p>
              </div>
              <div className="rounded-[2rem] border border-outline-variant/35 bg-white/85 p-6 shadow-[0_20px_50px_rgba(89,17,98,0.08)]">
                <span className="material-symbols-outlined text-4xl text-primary">event</span>
                <h3 className="mt-4 text-headline-sm font-semibold text-primary">Occasion specific</h3>
                <p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">Filter suggestions for meetings, dates, trips, or anything with a dress code.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap" id="plan-confidence">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-8 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.22em] text-primary">Plan with confidence</span>
            <h2 className="text-headline-md font-semibold text-primary">Map out your week before it starts.</h2>
            <p className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">The visual calendar keeps your looks, weather, and events aligned so mornings become a check-in instead of a decision tree.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/85 p-5">
                <h3 className="text-body-lg font-semibold text-primary">Morning routine</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">Reduce decision fatigue and save time every morning.</p>
              </div>
              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/85 p-5">
                <h3 className="text-body-lg font-semibold text-primary">Packing lists</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">Generate smarter packing lists from the same wardrobe data.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-outline-variant/35 bg-white/85 p-3 shadow-[0_22px_55px_rgba(89,17,98,0.08)] backdrop-blur-md">
            <img className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" src={images.weatherLook} alt="Calendar planning view" />
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white" id="why-zirccle">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.22em] text-primary-fixed-dim">Why Zirccle</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Less", "decision fatigue"],
              ["More", "use from your closet"],
              ["Better", "daily outfit confidence"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md">
                <div className="text-display-lg-mobile font-semibold text-white">{value}</div>
                <p className="mt-2 text-body-lg font-medium text-primary-fixed/85">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap" id="faq">
        <div className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.22em] text-primary">FAQ</span>
            <h2 className="mt-4 text-headline-md font-semibold text-primary">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {[
              ["When will Zirccle launch?", "First-access members will receive private beta invites before the public release."],
              ["Do I need to upload my whole closet?", "No. Start with a few favorites and expand your digital wardrobe at your own pace."],
              ["Is Zirccle only for fashion experts?", "No. It is designed for anyone who wants less stress and more confidence in what they already own."],
            ].map(([question, answer]) => (
              <details key={question} className="group rounded-[1.5rem] border border-outline-variant/35 bg-white/85 p-6 shadow-[0_18px_40px_rgba(89,17,98,0.08)] [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-body-lg font-semibold text-primary">
                  {question}
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-4 border-t border-outline-variant/20 pt-4 text-body-md leading-relaxed text-on-surface-variant">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
