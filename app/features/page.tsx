import { images } from "../screen-data";
import { FinalCta, ImageFrame, PageShell, Pill, SectionHeader } from "../site-components";

const benefits = [
  ["One-tap digitization", "Upload entire outfits in minutes with multi-photo processing."],
  ["Smart categorization", "Color, season, garment type, and occasion tags are created as you add items."],
  ["Usage insights", "See what you wear often and what deserves a second life."],
];

const faqs = [
  ["When will Zirccle launch?", "First-access members will receive private beta invites before the public release."],
  ["Do I need to upload my whole closet?", "No. Start with a few favorites and expand your digital wardrobe at your own pace."],
  ["Is Zirccle only for fashion experts?", "No. It is designed for anyone who wants less stress and more confidence in what they already own."],
];

export default function FeaturesPage() {
  return (
    <PageShell>
      <section className="pt-28">
        <div className="mx-auto max-w-container px-5 py-16 md:px-10 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <Pill>Platform features</Pill>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-primary md:text-7xl">
              Every tool you need to master your wardrobe.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-strong">
              Zirccle combines advanced AI with intuitive design to help you digitize, organize, and plan your style effortlessly.
            </p>
          </div>
          <ImageFrame className="mt-14 h-[360px] rounded-2xl md:h-[600px]" priority src={images.featuresHero} alt="Zirccle wardrobe experience" />
        </div>
      </section>

      <section className="py-20" id="smart-wardrobe">
        <div className="mx-auto grid max-w-container items-center gap-10 px-5 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-20">
          <article className="rounded-3xl bg-surface-container-low p-6 shadow-soft">
            <ImageFrame className="aspect-square rounded-xl shadow-sm" src={images.wardrobeCapture} alt="Digitizing wardrobe" />
            <div className="mt-6 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-dim text-primary">✓</span>
              <span className="text-sm font-semibold uppercase tracking-[0.05em] text-muted-strong">Instant AI background removal</span>
            </div>
          </article>
          <div className="space-y-7">
            <SectionHeader label="Smart wardrobe" title="Stop forgetting what you own." text="Snap a photo of your clothes, and Zirccle removes backgrounds, categorizes items, and tags them by color, season, and occasion." />
            <div className="grid gap-4 sm:grid-cols-3">
              {benefits.map(([title, text]) => (
                <div className="rounded-2xl bg-white p-5 shadow-soft" key={title}>
                  <h3 className="text-lg font-bold text-on-surface">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-muted-strong">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20" id="ai-suggestions">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-20">
          <SectionHeader centered label="AI style suggestions" title="Your personal stylist, available 24/7." text="Get recommendations based on your unique style profile, daily schedule, local weather, and the clothes already in your closet." />
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-strong">
              <ImageFrame className="h-[520px] rounded-2xl shadow-none" src={images.styleSuggestion} alt="Style suggestion" />
              <div className="absolute bottom-8 left-8 max-w-sm rounded-2xl border border-white/30 bg-primary-container/10 p-6 shadow-strong backdrop-blur-md">
                <div className="mb-16 h-8 w-56 rounded-full bg-primary/20" />
                <h3 className="text-2xl font-medium text-primary">Dynamic outfit generation</h3>
                <p className="mt-2 text-base text-muted-strong">Mix and match what you already own.</p>
              </div>
            </div>
            <div className="grid gap-6">
              <FeaturePanel title="Weather-ready" text="Daily outfit ideas sync with the local forecast so the look matches the day." />
              <FeaturePanel title="Occasion specific" text="Filter suggestions for meetings, dates, travel, formal events, and relaxed weekends." />
              <FeaturePanel title="Style memory" text="Saved looks train the recommendation loop around the outfits you actually choose." />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" id="plan-confidence">
        <div className="mx-auto grid max-w-container items-center gap-10 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
          <SectionHeader label="Plan with confidence" title="Map out your week before it starts." text="The visual calendar keeps your looks, weather, and events aligned so mornings become a check-in instead of a decision tree." />
          <ImageFrame className="h-[520px] rounded-2xl" src={images.calendarPlanning} alt="Calendar planning view" />
        </div>
      </section>

      <section className="bg-primary py-20 text-white" id="why-zirccle">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Less", "decision fatigue"],
              ["More", "use from your closet"],
              ["Better", "daily outfit confidence"],
            ].map(([value, label]) => (
              <div className="rounded-2xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-md" key={value}>
                <div className="text-5xl font-semibold">{value}</div>
                <p className="mt-3 text-lg text-primary-fixed/85">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="faq">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <SectionHeader centered label="FAQ" title="Frequently asked questions" />
          <div className="mt-10 space-y-4">
            {faqs.map(([question, answer]) => (
              <details className="group rounded-2xl bg-white p-6 shadow-soft [&_summary::-webkit-details-marker]:hidden" key={question}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-primary">
                  {question}
                  <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-4 border-t border-outline-variant pt-4 text-base leading-7 text-muted-strong">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}

function FeaturePanel({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-3xl bg-white p-7 shadow-soft">
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-base leading-7 text-muted-strong">{text}</p>
    </article>
  );
}
