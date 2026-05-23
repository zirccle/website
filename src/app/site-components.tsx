import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Zirccle home">
        <Image src="/brand/zirccle-logo.png" alt="" width={34} height={34} priority />
        <span>ZIRCCLE</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/features">Features</Link>
        <Link href="/how-it-works">How it works</Link>
        <Link href="/features#why-zirccle">Why Zirccle</Link>
        <Link href="/about">About</Link>
        <Link href="/features#faq">FAQ</Link>
      </nav>
      <Link className="headerCta" href="/contact">
        Get first access
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <span>ZIRCCLE</span>
      <div>
        <Link href="/features">Features</Link>
        <Link href="/how-it-works">How it works</Link>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/terms-of-service">Terms</Link>
      </div>
    </footer>
  );
}

export function FinalCta() {
  return (
    <section className="signupSection screenCta">
      <div>
        <h2>Be the first to experience Zirccle</h2>
        <p>Join first access and help shape the private beta.</p>
      </div>
      <Link className="largeCta" href="/contact">
        Get first access
      </Link>
    </section>
  );
}

export function ScreenHero({
  kicker,
  title,
  text,
  image,
}: {
  kicker?: string;
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section className={image ? "screenHero imageHero" : "screenHero"}>
      <div>
        {kicker && <span>{kicker}</span>}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {image && (
        <div className="screenHeroImage">
          <img src={image} alt="" />
        </div>
      )}
    </section>
  );
}
