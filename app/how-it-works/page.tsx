import { images, journeySteps } from "../screen-data";
import { FinalCta, ImageFrame, PageShell, Pill, SectionHeader, WaitlistForm } from "../site-components";

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
            <ImageFrame className="absolute inset-[0_18%_20%_0] rounded-2xl" priority src={images.journeyHero} alt="Wardrobe journey collage" />
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
          <div className="mt-14 space-y-6">
            {journeySteps.map((step, index) => (
              <article className="grid gap-8 rounded-3xl bg-white p-6 shadow-soft md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center" key={step.number}>
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                    {step.number}
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold text-primary">{step.title}</h2>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-muted-strong">{step.text}</p>
                </div>
                <ImageFrame className="h-[360px] rounded-2xl shadow-sm" src={step.image} alt={step.title} />
              </article>
            ))}

            <article className="grid gap-8 rounded-3xl bg-primary p-8 text-white shadow-strong lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-base font-bold text-primary">
                  5
                </div>
                <h2 className="mt-5 text-4xl font-semibold">Feel amazing every day</h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-primary-fixed/85">
                  When your wardrobe is organized and your outfits are inspired, you start the day with less friction and more confidence.
                </p>
              </div>
              <ImageFrame className="h-[360px] rounded-2xl shadow-none" src={images.finalLook} alt="Finished Zirccle styling flow" />
            </article>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
