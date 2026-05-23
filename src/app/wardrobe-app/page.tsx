import { images } from "../screen-data";
import { FinalCta, SiteFooter, SiteHeader } from "../site-components";

export default function WardrobeAppPage() {
  return (
    <main>
      <SiteHeader />
      <section className="appPageHero">
        <div>
          <h1>Zirccle Wardrobe App</h1>
          <p>
            A focused product view of the mobile wardrobe experience: smart
            wardrobe, AI style suggestions, and confident outfit planning.
          </p>
        </div>
        <div className="appShowcase">
          <article>
            <h2>Smart wardrobe</h2>
            <img src={images.wardrobeFlatlay} alt="" />
          </article>
          <article>
            <h2>AI style suggestions</h2>
            <img src={images.cityStyle} alt="" />
          </article>
          <article>
            <h2>Plan with confidence</h2>
            <img src={images.savedLooks} alt="" />
          </article>
        </div>
      </section>
      <section className="feelingSection">
        <h2>Your style journey, simplified</h2>
        <p>
          Zirccle brings closet memory, outfit generation, and planning into one
          mobile-first experience.
        </p>
      </section>
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
