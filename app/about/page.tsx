import Image from "next/image";
import { images } from "../screen-data";
import { FinalCta, SiteFooter, SiteHeader } from "../site-components";

const values = [
  {
    icon: "auto_awesome",
    title: "Innovation",
    text: "Pushing boundaries with AI to simplify complex lifestyle problems.",
  },
  {
    icon: "eco",
    title: "Conscious Luxury",
    text: "Believing that elegance and sustainability can exist in harmony.",
  },
  {
    icon: "favorite",
    title: "Empowerment",
    text: "Designing tools that help you feel confident in your own skin.",
  },
  {
    icon: "face",
    title: "Inclusivity",
    text: "Style is personal and universal; our AI learns from everyone.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="hero-gradient pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-white/78 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md">
              Our story
            </span>
            <h1 className="max-w-xl text-display-lg-mobile font-semibold leading-[1.02] tracking-tight text-primary md:text-display-lg">
              Modern style, intelligently reimagined.
            </h1>
            <p className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              Zirccle started with a simple tension: closets are full, but mornings still feel hard. We are building the calm, editorial layer between your physical wardrobe and the decisions it creates.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/82 p-4 shadow-[0_14px_30px_rgba(89,17,98,0.08)] backdrop-blur-md">
                <div className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">Elegant</div>
                <p className="mt-2 text-body-md text-on-surface-variant">Magazine-like, but usable.</p>
              </div>
              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/82 p-4 shadow-[0_14px_30px_rgba(89,17,98,0.08)] backdrop-blur-md">
                <div className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">Organized</div>
                <p className="mt-2 text-body-md text-on-surface-variant">Everything has a place.</p>
              </div>
              <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/82 p-4 shadow-[0_14px_30px_rgba(89,17,98,0.08)] backdrop-blur-md">
                <div className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">Personal</div>
                <p className="mt-2 text-body-md text-on-surface-variant">Advice that learns your taste.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-outline-variant/35 bg-white/85 p-3 shadow-[0_28px_80px_rgba(89,17,98,0.12)] backdrop-blur-md">
              <Image className="aspect-[1.1] w-full rounded-[1.5rem] object-cover" src={images.aboutCloset} alt="Minimalist walk-in closet" width={960} height={870} />
            </div>
            <div className="absolute -bottom-8 left-6 max-w-[260px] rounded-[1.5rem] border border-outline-variant/35 bg-white/90 p-5 shadow-[0_18px_36px_rgba(89,17,98,0.12)] backdrop-blur-md">
              <div className="material-symbols-outlined mb-3 text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</div>
              <p className="text-body-md leading-relaxed text-on-surface-variant">
                A wardrobe experience built to feel premium, calm, and useful from the first tap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="rounded-[2rem] border border-outline-variant/35 bg-white/85 p-8 shadow-[0_20px_50px_rgba(89,17,98,0.08)] md:col-span-7 md:p-12">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">lightbulb</span>
              <h2 className="text-headline-md font-semibold text-primary">Our mission</h2>
              <p className="mt-4 max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
                To reduce the daily friction of getting dressed by giving every person a refined, AI-driven style concierge that organizes, plans, and inspires.
              </p>
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-primary p-8 text-white shadow-[0_24px_60px_rgba(89,17,98,0.18)] md:col-span-5 md:p-12">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary-fixed-dim">visibility</span>
              <h2 className="text-headline-md font-semibold text-white">Our vision</h2>
              <p className="mt-4 text-body-md leading-relaxed text-primary-fixed/85">
                To become the standard interface for wardrobe intelligence, where confidence, sustainability, and taste live in one place.
              </p>
            </div>

            <div className="rounded-[2rem] border border-outline-variant/35 bg-surface-container-low p-8 shadow-[0_20px_50px_rgba(89,17,98,0.08)] md:col-span-12 md:p-12">
                <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                <div>
                  <h2 className="text-headline-md font-semibold text-primary">Solving the nothing-to-wear paradox</h2>
                  <p className="mt-4 text-body-lg leading-relaxed text-on-surface-variant">
                    Most wardrobes are underused. Zirccle turns that unused potential into repeatable outfits, lower stress, and a more conscious relationship with what you already own.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3 text-body-md text-on-surface-variant">
                      <span className="material-symbols-outlined mt-0.5 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Reduce morning decision fatigue
                    </li>
                    <li className="flex items-start gap-3 text-body-md text-on-surface-variant">
                      <span className="material-symbols-outlined mt-0.5 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Improve wardrobe utilization with clearer inventory
                    </li>
                    <li className="flex items-start gap-3 text-body-md text-on-surface-variant">
                      <span className="material-symbols-outlined mt-0.5 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Make recommendations feel more personal and less robotic
                    </li>
                  </ul>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Image className="h-56 w-full rounded-[1.5rem] object-cover" src={images.wardrobeFlatlay} alt="Fashion accessories flatlay" width={560} height={420} />
                  <Image className="mt-6 h-56 w-full rounded-[1.5rem] object-cover sm:mt-10" src={images.closet} alt="Clothing rack" width={560} height={420} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-low">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.22em] text-primary">
              The values
            </span>
            <h2 className="mt-4 text-display-lg-mobile font-semibold tracking-tight text-primary md:text-headline-md">
              The principles guiding the product.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => (
              <div key={val.title} className="rounded-[1.75rem] border border-outline-variant/35 bg-white/85 p-6 shadow-[0_18px_40px_rgba(89,17,98,0.08)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">{val.icon}</span>
                </div>
                <h3 className="text-headline-sm font-semibold text-on-surface">{val.title}</h3>
                <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">{val.text}</p>
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
