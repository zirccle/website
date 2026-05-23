import { images, steps } from "../screen-data";
import { FinalCta, ScreenHero, SiteFooter, SiteHeader } from "../site-components";

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader />
      <ScreenHero
        kicker="The Journey"
        title="Your style journey, simplified"
        text="Discover how Zirccle transforms your wardrobe from a collection of clothes into a dynamic source of daily inspiration using advanced AI."
        image={images.journeyHero}
      />

      <section className="stepsSection screenSteps">
        <div className="sectionIntro compact">
          <h2>How it works</h2>
        </div>
        <div className="journeyGrid">
          {steps.map((step, index) => (
            <article className="journeyCard" key={step.title}>
              <div className="stepNumber">{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              {step.image && (
                <div className="journeyImage">
                  <img src={step.image} alt="" />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="feelingSection">
        <h2>Feel amazing every day</h2>
        <p>
          Zirccle helps your closet become a source of momentum instead of a
          morning puzzle.
        </p>
      </section>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
