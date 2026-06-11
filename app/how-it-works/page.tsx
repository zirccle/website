import type { Metadata } from "next";
import { images } from "../screen-data";
import { FinalCta, ImageFrame, PageShell, Pill, WaitlistForm } from "../site-components";
import HowItWorksSection from "./how-it-works-section";

export const metadata: Metadata = {
  title: "How it works | Zirccle",
  description: "Follow Zirccle’s wardrobe workflow from adding items to planning outfits ahead of time.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <section className="pt-28">
        <div className="mx-auto grid max-w-container items-center gap-12 px-5 py-16 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-20 lg:py-24">
          <div className="space-y-8">
            <Pill tone="bright">The journey</Pill>
            <h1 className="text-balance text-5xl font-semibold leading-[1.08] tracking-tight text-primary md:text-7xl">
              Your style journey, simplified.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-strong">
              Discover how Zirccle transforms your wardrobe from a collection of clothes into a dynamic source of daily inspiration using advanced AI.
            </p>
            <WaitlistForm />
          </div>
          <div className="relative min-h-[420px]">
            <div className="absolute inset-[0_18%_20%_0] overflow-hidden rounded-2xl">
              <ImageFrame
                className="h-full w-full rounded-2xl"
                priority
                sizes="(min-width: 1280px) 44vw, (min-width: 1024px) 48vw, 100vw"
                src={images.journeyHero}
                alt="Wardrobe journey collage"
              />
            </div>
            <div className="absolute inset-[40%_0_0_42%] rounded-2xl border border-white/30 bg-primary-container/10 p-6 shadow-strong backdrop-blur-md">
              <div className="mb-16 h-8 w-56 max-w-full rounded-full bg-primary/20" />
              <h2 className="text-2xl font-medium text-primary">AI-powered curation</h2>
              <p className="mt-2 text-base text-muted-strong">Matches your mood and schedule</p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <FinalCta />
    </PageShell>
  );
}
