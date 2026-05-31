import type { Metadata } from "next";
import { featureCards, images, journeySteps } from "./screen-data";
import { FinalCta, ImageFrame, PageShell, Pill, SectionHeader, WaitlistForm } from "./site-components";

export const metadata: Metadata = {
  title: "Zirccle",
  description: "Zirccle helps you organize your wardrobe, discover outfit ideas, and plan what to wear with less friction.",
};

export default function Home() {
  return (
    <PageShell>
      <section className="pt-28 md:pt-32">
        <div className="mx-auto grid max-w-container items-center gap-12 px-5 py-16 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-20 lg:py-24">
          <div className="space-y-8">
            <Pill tone="bright">The journey</Pill>
            <h1 className="text-balance text-5xl font-semibold leading-[1.08] tracking-tight text-primary md:text-7xl">
              Your style journey, simplified.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-strong">
              Zirccle transforms your wardrobe from a collection of clothes into a dynamic source of daily inspiration using advanced AI.
            </p>
            <WaitlistForm />
          </div>

          <div className="relative min-h-[420px]">
            <div className="absolute inset-[0_18%_20%_0] overflow-hidden rounded-2xl">
              <ImageFrame
                className="h-full w-full rounded-2xl"
                priority
                sizes="(min-width: 1280px) 44vw, (min-width: 1024px) 48vw, calc(100vw - 2.5rem)"
                src={images.journeyHero}
                alt="Curated wardrobe flatlay"
              />
            </div>
            <div className="absolute inset-[40%_0_0_42%] rounded-2xl border border-white/40 bg-primary-container/10 p-6 shadow-strong backdrop-blur-md">
              <div className="mb-16 h-8 w-56 max-w-full rounded-full bg-primary/20" />
              <h2 className="text-2xl font-medium text-primary">AI-powered curation</h2>
              <p className="mt-2 text-base text-muted-strong">Matches your mood and schedule</p>
            </div>
          </div>
        </div>
      </section>

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

      <FinalCta />
    </PageShell>
  );
}
