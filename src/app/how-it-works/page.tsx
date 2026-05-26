"use client";

import { images } from "../screen-data";
import { FinalCta, SiteFooter, SiteHeader, WaitlistForm } from "../site-components";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="hero-gradient pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-white/78 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md">
              The journey
            </span>
            <h1 className="max-w-xl text-display-lg-mobile font-semibold leading-[1.02] tracking-tight text-primary md:text-display-lg">
              Your style journey, simplified.
            </h1>
            <p className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              Zirccle turns a closet full of choices into a calm, guided routine. Each step is designed to reduce friction and make the next outfit feel obvious.
            </p>
            <WaitlistForm placement="hero" />
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-outline-variant/35 bg-white/85 p-3 shadow-[0_28px_80px_rgba(89,17,98,0.12)] backdrop-blur-md">
              <img className="aspect-[1] w-full rounded-[1.5rem] object-cover" src={images.journeyHero} alt="Aesthetic luxury outfit flatlay" />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-sm rounded-[1.5rem] border border-outline-variant/35 bg-white/90 p-5 shadow-[0_18px_36px_rgba(89,17,98,0.12)] backdrop-blur-md">
              <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">The styling loop is built to match your mood, calendar, and what you already own.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.22em] text-primary">Step-by-step</span>
            <h2 className="mt-4 text-headline-md font-semibold text-primary">How it works</h2>
          </div>

          <div className="space-y-4">
            {[
              { number: "1", title: "Add your wardrobe", text: "Snap photos of clothes, shoes, and accessories. The scanner removes the background and builds your closet automatically.", image: images.scanner },
              { number: "2", title: "Get AI suggestions", text: "The stylist engine compares your taste, the weather, and the occasion to create combinations you can actually wear.", image: images.cityStyle },
              { number: "3", title: "Save your looks", text: "When you find a combination you love, save it to your lookbook for work, weekends, or special events.", image: images.savedLooks },
              { number: "4", title: "Plan ahead", text: "Tie outfits to your calendar so every day has a look ready before the morning starts.", image: images.weatherLook },
            ].map((step, index) => (
              <div key={step.number} className={`grid gap-6 rounded-[2rem] border p-6 shadow-[0_18px_40px_rgba(89,17,98,0.08)] md:p-8 lg:grid-cols-[0.95fr_1.05fr] ${index % 2 === 0 ? "border-outline-variant/35 bg-white/85" : "border-primary/10 bg-surface-container-low"}`}>
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-label-sm font-semibold">{step.number}</div>
                  <h3 className="text-headline-sm font-semibold text-primary">{step.title}</h3>
                  <p className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">{step.text}</p>
                </div>
                <div className="rounded-[1.5rem] border border-outline-variant/30 bg-white/85 p-3">
                  <img className="aspect-[4/3] w-full rounded-[1.2rem] object-cover" src={step.image} alt={step.title} />
                </div>
              </div>
            ))}

            <div className="grid gap-6 rounded-[2rem] border border-primary/10 bg-primary p-8 text-white shadow-[0_24px_60px_rgba(89,17,98,0.18)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary text-label-sm font-semibold">5</div>
                <h3 className="mt-4 text-headline-md font-semibold text-white">Feel amazing every day</h3>
                <p className="mt-4 max-w-xl text-body-lg leading-relaxed text-primary-fixed/85">
                  When your wardrobe is organized and your outfits are inspired, you start the day with less friction and more confidence.
                </p>
                <div className="mt-6">
                  <WaitlistForm placement="cta" />
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                <img className="aspect-[4/3] w-full rounded-[1.2rem] object-cover" src={images.closet} alt="Confident lifestyle photography" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
