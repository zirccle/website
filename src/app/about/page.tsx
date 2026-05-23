import { images } from "../screen-data";
import { FinalCta, SiteFooter, SiteHeader } from "../site-components";

const values = [
  ["Innovation", "Use AI to make style feel calmer, faster, and more personal."],
  ["Conscious Luxury", "Help people get more from the wardrobe they already own."],
  ["Empowerment", "Make daily outfit decisions feel confident instead of stressful."],
  ["Inclusivity", "Build a style assistant for many wardrobes, bodies, and routines."],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="aboutScreenHero">
        <div>
          <span>Our Story</span>
          <h1>
            Modern style, <strong>intelligently</strong> reimagined.
          </h1>
          <p>
            We started with a simple question: why is it so hard to choose what to
            wear when our closets are full? Zirccle bridges physical wardrobes and
            digital life.
          </p>
        </div>
        <div className="aboutHeroImage">
          <img src={images.aboutCloset} alt="" />
        </div>
      </section>

      <section className="missionGrid">
        <article>
          <h2>Our Mission</h2>
          <p>
            To empower every individual to feel their best by providing a seamless,
            AI-driven concierge that organizes, plans, and inspires their personal
            style journey.
          </p>
        </article>
        <article>
          <h2>Our Vision</h2>
          <p>
            To become the global standard for digital wardrobe management,
            fostering a more conscious and confident relationship between people
            and their fashion choices.
          </p>
        </article>
      </section>

      <section className="problemSection">
        <div className="wideImage">
          <img src={images.wardrobeFlatlay} alt="" />
        </div>
        <div>
          <h2>Solving the "Nothing to Wear" Paradox</h2>
          <p>
            Zirccle turns scattered clothes into a living style system, making it
            easier to rewear, remix, and rediscover what you already love.
          </p>
        </div>
      </section>

      <section className="valuesSection">
        <div className="sectionIntro compact">
          <h2>The Values That Guide Us</h2>
        </div>
        <div className="valuesGrid">
          {values.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
