import { images } from "../screen-data";
import { FinalCta, ImageFrame, PageShell, Pill, SectionHeader } from "../site-components";

const values = [
  ["Innovation", "Pushing practical AI into a daily routine that is personal, visual, and useful."],
  ["Conscious luxury", "Helping people use more of what they already own before buying more."],
  ["Empowerment", "Making style feel less like pressure and more like a confident choice."],
  ["Inclusivity", "Building for personal taste, body diversity, and different ways people dress."],
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pt-28">
        <div className="mx-auto grid max-w-container items-center gap-12 px-5 py-16 md:px-10 lg:grid-cols-2 lg:px-20 lg:py-24">
          <div className="relative lg:order-1">
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-primary-fixed opacity-60 blur-xl" />
            <ImageFrame className="relative h-[548px] rounded-3xl" priority src={images.aboutHero} alt="Modern wardrobe interior" />
          </div>
          <div className="space-y-7 lg:order-2">
            <Pill>Our story</Pill>
            <h1 className="text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-on-surface md:text-7xl">
              Modern style, <span className="text-primary">intelligently</span> reimagined.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-strong">
              We started with a simple question: why is it so hard to choose what to wear when our closets are full? Zirccle bridges the gap between physical wardrobes and digital lives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-container gap-6 px-5 md:px-10 lg:grid-cols-12 lg:px-20">
          <article className="rounded-3xl bg-white p-8 shadow-soft lg:col-span-7">
            <div className="mb-8 h-8 w-full rounded-full bg-primary/15" />
            <h2 className="text-4xl font-semibold text-on-surface">Our mission</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-strong">
              To empower every individual to feel their best by providing an AI-driven concierge that organizes, plans, and inspires their personal style journey.
            </p>
          </article>
          <article className="rounded-3xl bg-primary p-8 text-white shadow-strong lg:col-span-5">
            <h2 className="text-4xl font-semibold">Our vision</h2>
            <p className="mt-6 text-lg leading-8 text-primary-fixed/85">
              To become the standard interface for wardrobe intelligence, where confidence, sustainability, and taste live in one calm product.
            </p>
          </article>
          <article className="grid gap-8 rounded-3xl bg-surface-container-low p-8 shadow-soft lg:col-span-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionHeader title="Solving the nothing-to-wear paradox" text="Most wardrobes are underused. Zirccle turns that unused potential into repeatable outfits, lower stress, and a more conscious relationship with what you already own." />
              <ul className="mt-8 space-y-4 text-base text-on-surface">
                {["Reduce morning stress and decision fatigue", "Promote sustainable fashion through better utilization", "Create fresh combinations from existing pieces"].map((item) => (
                  <li className="flex items-center gap-3" key={item}>
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ImageFrame className="h-64 rounded-2xl shadow-sm" src={images.aboutDetail} alt="Wardrobe detail" />
              <ImageFrame className="mt-8 h-64 rounded-2xl shadow-sm sm:mt-16" src={images.aboutLifestyle} alt="Style planning moment" />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-20">
          <SectionHeader centered label="The values" title="The principles guiding the product." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, text]) => (
              <article className="rounded-3xl bg-white p-7 shadow-soft" key={title}>
                <h3 className="text-2xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-strong">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
