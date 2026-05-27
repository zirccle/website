import { featureCards, images } from "../screen-data";
import { FinalCta, ImageFrame, PageShell, Pill, SectionHeader } from "../site-components";

export default function WardrobeAppPage() {
  return (
    <PageShell>
      <section className="pt-28">
        <div className="mx-auto grid max-w-container items-center gap-12 px-5 py-16 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-20 lg:py-24">
          <div className="space-y-7">
            <Pill>The mobile app</Pill>
            <h1 className="text-balance text-5xl font-semibold leading-[1.08] tracking-tight text-primary md:text-7xl">
              Zirccle wardrobe app.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-strong">
              A focused mobile experience for smart wardrobe capture, AI style suggestions, and confident outfit planning.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[420px] rounded-[2.5rem] border-[10px] border-on-surface bg-white p-3 shadow-strong">
            <ImageFrame className="aspect-[9/19] rounded-[1.9rem] shadow-none" priority src={images.styleSuggestion} alt="Zirccle app interface" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-20">
          <SectionHeader centered title="Everything centers on the clothes you already own." text="Capture, combine, save, and schedule outfits from one connected wardrobe intelligence layer." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <article className="rounded-3xl bg-white p-6 shadow-soft" key={card.title}>
                <ImageFrame className="aspect-[4/3] rounded-2xl shadow-sm" src={card.image} alt={card.title} />
                <h2 className="mt-6 text-2xl font-semibold text-primary">{card.title}</h2>
                <p className="mt-3 text-base leading-7 text-muted-strong">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
