import { featureCards, images } from "../screen-data";
import { FinalCta, SiteFooter, SiteHeader } from "../site-components";

const bentoCards = [
  ["Dynamic Outfit Generation", "Mix and match what you already own in ways you never thought of."],
  ["Weather-Ready", "Dress for the forecast without losing your personal style."],
  ["Occasion Specific", "Create looks for meetings, dinners, travel, and slow weekends."],
];

const faqs = [
  ["When will Zirccle launch?", "First-access members will receive private beta invites before the public release."],
  ["Do I need to upload my whole closet?", "No. Start with your favorite pieces and build your wardrobe over time."],
  ["Is Zirccle only for fashion experts?", "No. It is made for anyone who wants easier, more confident outfit choices."],
];

export default function FeaturesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="featureHero">
        <span>Platform Features</span>
        <h1>Every tool you need to master your wardrobe.</h1>
        <p>
          Zirccle combines advanced AI with intuitive design to help you digitize,
          organize, and plan your style effortlessly.
        </p>
        <div className="wideImage">
          <img src={images.closet} alt="" />
        </div>
      </section>

      <section className="screenStack">
        {featureCards.map((feature, index) => (
          <article className="featurePanel" key={feature.title}>
            <div className="featureImage">
              <img src={feature.image} alt="" />
            </div>
            <div className="featureCopy">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
              <ul>
                <li>Smart wardrobe intelligence</li>
                <li>Designed around clothes you own</li>
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bentoSection" id="why-zirccle">
        <div className="sectionIntro compact">
          <h2>AI Style Suggestions</h2>
          <p>
            Your personal stylist, available 24/7. Get recommendations based on
            your unique style profile and daily needs.
          </p>
        </div>
        <div className="bentoGrid">
          <article className="bentoMain">
            <img src={images.cityStyle} alt="" />
            <div>
              <h3>Dynamic Outfit Generation</h3>
              <p>Fresh combinations from the pieces already in your closet.</p>
            </div>
          </article>
          {bentoCards.slice(1).map(([title, text]) => (
            <article className="bentoCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faqSection" id="faq">
        <div className="sectionIntro compact">
          <h2>FAQ</h2>
        </div>
        <div className="faqList">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FinalCta />
      <SiteFooter />
    </main>
  );
}
