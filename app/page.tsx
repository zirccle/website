import type { Metadata } from "next";
import { featureCards, images, journeySteps } from "./screen-data";
import { FinalCta, ImageFrame, PageShell, Pill, SectionHeader, WaitlistForm } from "./site-components";
import { ZirccleHero, ZirccleStatsBar, ZirccleFAQ } from "./zirccle-components";

export const metadata: Metadata = {
  title: "Zirccle",
  description: "Zirccle helps you organize your wardrobe, discover outfit ideas, and plan what to wear with less friction.",
};

export default function Home() {
  return (
    <PageShell>
      <ZirccleHero />

      <section className="py-20">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-20">
          <SectionHeader
            centered
            label="Platform features"
            title="Every tool you need to master your wardrobe."
            text="Zirccle combines advanced AI with intuitive design to help you digitize, organize, and plan your style effortlessly."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <article className="rounded-3xl bg-surface-container-low p-5 shadow-soft" key={card.title}>
                <ImageFrame
                  className="aspect-square rounded-xl shadow-sm"
                  sizes="(min-width: 1024px) 31vw, calc(100vw - 2.5rem)"
                  src={card.image}
                  alt={card.title}
                />
                <h3 className="mt-6 text-2xl font-semibold text-primary">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-strong">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-20">
          <SectionHeader label="Step-by-step" title="How it works" text="A focused five-step loop for building a closet, generating outfits, and planning ahead." />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {journeySteps.map((step) => (
              <article className="rounded-3xl bg-white p-5 shadow-soft" key={step.number}>
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-strong">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ZirccleStatsBar />
      <ZirccleFAQ />
      <FinalCta />
    </PageShell>
  );
}
