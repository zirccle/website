"use client";

import Image from "next/image";
import { images } from "./screen-data";
import { FinalCta, SiteFooter, SiteHeader, WaitlistForm } from "./site-components";

export default function Home() {
  const benefits = [
    {
      icon: "checkroom",
      title: "Smart wardrobe",
      text: "Digitize your closet and keep everything organized, always. Snap photos and let AI categorize everything.",
    },
    {
      icon: "auto_awesome",
      title: "AI style suggestions",
      text: "Get personalized outfit ideas that match your style and mood. Your personal digital stylist, available 24/7.",
    },
    {
      icon: "calendar_today",
      title: "Plan with confidence",
      text: "Plan your looks ahead for any occasion, any day. Synchronize your outfits with your schedule effortlessly.",
    },
  ];

  const steps = [
    {
      icon: "smartphone",
      number: "1",
      title: "Add your wardrobe",
      text: "Snap photos and build your digital closet.",
    },
    {
      icon: "colors_spark",
      number: "2",
      title: "Get AI suggestions",
      text: "Receive outfit ideas made just for you.",
    },
    {
      icon: "apparel",
      number: "3",
      title: "Save your looks",
      text: "Save and favorite the looks you love.",
    },
    {
      icon: "event",
      number: "4",
      title: "Plan ahead",
      text: "Plan outfits for your days with ease.",
    },
    {
      icon: "favorite",
      number: "5",
      title: "Feel amazing",
      text: "Wear what fits you. Every day.",
    },
  ];

  const highlights = [
    { value: "01", label: "Private beta invite" },
    { value: "24/7", label: "AI styling support" },
    { value: "100%", label: "Your wardrobe, organized" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="hero-gradient relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-14 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.98fr_1.02fr] lg:items-stretch">
          <div className="relative z-10 flex flex-col gap-7">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-white/75 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md">
              The wardrobe concierge
            </span>
            <h1 className="max-w-xl text-display-lg-mobile font-semibold leading-[1.02] tracking-tight text-primary md:text-display-lg">
              Your wardrobe, in motion.
            </h1>
            <p className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              Zirccle turns what you already own into a calmer daily routine: organized outfits, tailored AI styling, and planning that actually feels elegant.
            </p>

            <div className="grid max-w-xl gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-outline-variant/35 bg-white/82 p-4 shadow-[0_14px_30px_rgba(89,17,98,0.08)] backdrop-blur-md"
                >
                  <div className="text-3xl font-semibold text-primary">{item.value}</div>
                  <p className="mt-2 text-label-sm uppercase tracking-[0.16em] text-on-surface-variant">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-xl">
              <WaitlistForm placement="hero" />
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end select-none">
            <div className="w-full max-w-[540px] space-y-4">
              <div className="overflow-hidden rounded-[2.5rem] border border-outline-variant/35 bg-white/90 p-3 shadow-[0_30px_80px_rgba(28,27,27,0.14)] backdrop-blur-md">
                <Image className="aspect-[9/18] w-full rounded-[2rem] object-cover" src={images.wardrobeFlatlay} alt="Today's Picks Wardrobe Screen" width={540} height={1080} />
              </div>

              <div className="rounded-[1.75rem] border border-outline-variant/35 bg-white/82 p-5 shadow-[0_18px_40px_rgba(89,17,98,0.08)] backdrop-blur-md">
                <p className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">Adaptive preview</p>
                <p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">
                  Three views collapsed into one calm daily flow. The screen stays focused on one task at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-[1.75rem] border border-outline-variant/35 bg-white/82 p-6 shadow-[0_18px_40px_rgba(89,17,98,0.08)] backdrop-blur-md">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                </div>
                <h2 className="text-headline-sm font-semibold text-on-surface">{benefit.title}</h2>
                <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-section-gap">
        <div className="absolute left-1/2 top-8 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 flex flex-col gap-4 text-center">
            <span className="mx-auto inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.22em] text-primary">
              The experience
            </span>
            <h2 className="text-display-lg-mobile font-semibold tracking-tight text-primary md:text-headline-md">
              Your style journey, simplified.
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
              Zirccle collapses the clutter of wardrobe memory, styling choices, and planning into one clear routine.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(89,17,98,0.08)] backdrop-blur-md ${
                  index === 2
                    ? "border-primary/20 bg-primary text-on-primary lg:col-span-2"
                    : "border-outline-variant/35 bg-white/85"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${index === 2 ? "bg-white text-primary" : "bg-primary/10 text-primary"}`}>
                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'wght' 500" }}>
                      {step.icon}
                    </span>
                  </div>
                  <div>
                    <div className={`text-label-sm font-semibold uppercase tracking-[0.18em] ${index === 2 ? "text-primary-fixed-dim" : "text-primary"}`}>
                      {step.number}. {step.title}
                    </div>
                    <p className={`mt-3 text-body-md leading-relaxed ${index === 2 ? "text-primary-fixed/85" : "text-on-surface-variant"}`}>
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />

      <SiteFooter />
    </main>
  );
}
