"use client";

import Image from "next/image";
import { images } from "../screen-data";
import { FinalCta, SiteFooter, SiteHeader } from "../site-components";

export default function WardrobeAppPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="hero-gradient pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-10 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-white/78 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md">
              The mobile app
            </span>
            <h1 className="max-w-xl text-display-lg-mobile font-semibold leading-[1.02] tracking-tight text-primary md:text-display-lg">
              Zirccle wardrobe app.
            </h1>
            <p className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              A focused product view of the mobile experience: smart wardrobe, AI style suggestions, and confident outfit planning.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Smart", "wardrobe capture"],
                ["AI", "style recommendations"],
                ["Plan", "ahead with clarity"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-[1.5rem] border border-outline-variant/35 bg-white/85 p-4 shadow-[0_18px_40px_rgba(89,17,98,0.08)]">
                  <div className="text-3xl font-semibold text-primary">{value}</div>
                  <p className="mt-2 text-label-sm uppercase tracking-[0.16em] text-on-surface-variant">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] rounded-[2.5rem] border-[8px] border-on-background bg-white p-2 shadow-[0_28px_80px_rgba(28,27,27,0.2)]">
              <Image className="aspect-[9/19.5] w-full rounded-[2rem] object-cover" src={images.cityStyle} alt="Zirccle app homepage" width={380} height={820} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="mx-auto grid max-w-container-max gap-4 px-margin-mobile md:px-margin-desktop md:grid-cols-3">
          {[
            { icon: "checkroom", title: "Smart wardrobe", text: "Digitize and organize your clothes with a simple capture flow." , image: images.scanner },
            { icon: "auto_awesome", title: "AI style suggestions", text: "Daily outfit ideas curated from the pieces you already own.", image: images.cityStyle },
            { icon: "calendar_month", title: "Plan with confidence", text: "Match looks to your schedule and events seamlessly.", image: images.weatherLook },
          ].map((card) => (
            <div key={card.title} className="rounded-[1.75rem] border border-outline-variant/35 bg-white/85 p-5 shadow-[0_18px_40px_rgba(89,17,98,0.08)]">
              <span className="material-symbols-outlined text-4xl text-primary">{card.icon}</span>
              <h2 className="mt-4 text-headline-sm font-semibold text-primary">{card.title}</h2>
              <p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">{card.text}</p>
              <Image className="mt-5 aspect-[4/3] w-full rounded-[1.25rem] object-cover" src={card.image} alt={card.title} width={560} height={420} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-3xl px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="text-headline-md font-semibold text-white">Your style journey, simplified.</h2>
          <p className="mt-4 text-body-lg leading-relaxed text-primary-fixed/85">
            Zirccle brings closet memory, outfit generation, and planning into one mobile-first experience.
          </p>
        </div>
      </section>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
