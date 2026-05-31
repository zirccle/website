import type { Metadata } from "next";
import { images, journeySteps } from "../screen-data";
import { FinalCta, ImageFrame, PageShell, Pill, SectionHeader, WaitlistForm } from "../site-components";

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

      <section className="py-20">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-20">
          <SectionHeader centered label="Step-by-step" title="How it works" />
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            <article className="rounded-[28px] bg-white p-3 shadow-soft md:p-4 lg:col-span-7">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {journeySteps[0].number}
                  </div>
                  <h2 className="mt-2 max-w-[10ch] text-[1.8rem] font-semibold leading-[1.02] tracking-tight text-primary md:text-[2rem]">
                    {journeySteps[0].title}
                  </h2>
                  <p className="mt-2 max-w-sm text-[0.9rem] leading-6 text-muted-strong">{journeySteps[0].text}</p>
                  <ul className="mt-2 space-y-2 text-sm text-primary">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      Auto background removal
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      Smart category tagging
                    </li>
                  </ul>
                </div>
                <ImageFrame className="h-full min-h-[220px] rounded-[20px] bg-[#f5d7cc] shadow-none" sizes="(min-width: 1024px) 38vw, 100vw" src={journeySteps[0].image} alt={journeySteps[0].title} />
              </div>
            </article>

            <article className="rounded-[28px] bg-[#f7f4f3] p-3 shadow-soft md:p-4 lg:col-span-5">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {journeySteps[1].number}
              </div>
              <h2 className="mt-2 max-w-[11ch] text-[1.8rem] font-semibold leading-[1.02] tracking-tight text-primary md:text-[2rem]">
                {journeySteps[1].title}
              </h2>
              <p className="mt-2 max-w-md text-[0.9rem] leading-6 text-muted-strong">{journeySteps[1].text}</p>
              <div className="mt-2 grid gap-1 text-sm leading-5 text-primary/85">
                <p className="max-w-sm">Closet-aware and weather-ready suggestions.</p>
                <p className="max-w-sm">Practical, not decorative.</p>
                <p className="max-w-sm">Grounded in looks you actually wear.</p>
              </div>
              <div className="mt-2 flex h-14 items-end justify-center gap-2 py-0 text-primary">
                <span className="material-symbols-outlined text-[52px] leading-none">auto_awesome</span>
                <span className="material-symbols-outlined -mt-8 text-[24px] leading-none">auto_awesome</span>
                <span className="material-symbols-outlined text-[22px] leading-none">auto_awesome</span>
              </div>
            </article>

            <article className="rounded-[28px] bg-white p-6 shadow-soft md:p-8 lg:col-span-5">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {journeySteps[2].number}
              </div>
              <h2 className="mt-5 max-w-[10ch] text-[2rem] font-semibold leading-[1.05] tracking-tight text-primary md:text-[2.55rem]">
                {journeySteps[2].title}
              </h2>
              <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-muted-strong">{journeySteps[2].text}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <ImageFrame className="h-[140px] rounded-[18px] shadow-none" sizes="(min-width: 1024px) 18vw, 45vw" src={images.savedLooks} alt={journeySteps[2].title} />
                <ImageFrame className="h-[140px] rounded-[18px] shadow-none" sizes="(min-width: 1024px) 18vw, 45vw" src={images.winterLook} alt="Coat look" />
              </div>
            </article>

            <article className="rounded-[28px] bg-[#f4efef] p-6 shadow-soft md:p-8 lg:col-span-7">
              <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
                <ImageFrame className="h-full min-h-[320px] rounded-[18px] bg-white shadow-none" sizes="(min-width: 1024px) 32vw, 100vw" src={journeySteps[3].image} alt={journeySteps[3].title} />
                <div>
                  <div className="flex size-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {journeySteps[3].number}
                  </div>
                  <h2 className="mt-5 max-w-[9ch] text-[2rem] font-semibold leading-[1.05] tracking-tight text-primary md:text-[2.55rem]">
                    {journeySteps[3].title}
                  </h2>
                  <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-muted-strong">{journeySteps[3].text}</p>
                  <div className="mt-5 space-y-2 text-sm leading-6 text-on-surface">
                    <p>Wake up to a ready-made outfit instead of a decision tree.</p>
                    <p>Tie looks to events so your week stays organized.</p>
                  </div>
                  <div className="mt-6 w-fit rounded-2xl bg-white px-5 py-4 shadow-soft">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-strong">Tomorrow&apos;s Look</p>
                    <div className="mt-1 flex items-center gap-2 text-sm text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-primary">event</span>
                      Business Casual • Sunny 22°C
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="col-span-full rounded-[28px] bg-primary p-8 text-white shadow-strong md:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-full bg-white text-sm font-bold text-primary">
                    5
                  </div>
                  <h2 className="mt-6 text-[2.2rem] font-semibold leading-[1.05] md:text-[3rem]">
                    Feel amazing every day
                  </h2>
                  <p className="mt-5 max-w-xl text-[1rem] leading-8 text-primary-fixed/85 md:text-[1.1rem]">
                    Step out with confidence. When your wardrobe is organized and your outfits are inspired, you feel ready to take on the world. This is your style journey, simplified.
                  </p>
                  <button className="mt-7 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:bg-primary-fixed active:scale-[0.98]" type="button">
                    Start Your Journey
                  </button>
                </div>
                <ImageFrame className="h-[240px] rounded-[18px] shadow-none md:h-[320px]" sizes="(min-width: 1024px) 38vw, 100vw" src={images.finalLook} alt="Finished Zirccle styling flow" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
