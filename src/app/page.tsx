"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const benefits = [
  {
    icon: "▣",
    title: "Smart wardrobe",
    text: "Digitize your closet with AI-powered organization.",
  },
  {
    icon: "✦",
    title: "AI style suggestions",
    text: "Get personalized outfits from what you own.",
  },
  {
    icon: "□",
    title: "Plan with confidence",
    text: "Plan your looks ahead for any occasion.",
  },
];

const features = [
  {
    title: "Smart Wardrobe",
    text: "Snap a photo of your clothes, and Zirccle helps remove backgrounds, categorize items, and tag them by color, season, and occasion.",
    points: ["One-tap digitization", "Smart inventory memory"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDcE8CUIjPSIBO5200i__n40RvRYG0mo-LXBqZCnDJwGBf_Q34CNmqPczYz6b5Ncb_9QOp9pobQJdLvHZ9hBa32oD8lq2-FgxiR78IqE7h9dAegLtsFVjaEfZJYrf7aZIyGGdm-6Rmx38LHORMe0ixiuQe7P9N7Skm_iALTtoD4DWYOx1MFjqNK7l603KfRhAaW30I891iixlNpjgaHO5LMXlKPg1AjWrxeKMTZiDbGe1hycEBKu0JgV_VOq3_ByIiyD4IcZZ5A8ft",
  },
  {
    title: "AI Style Suggestions",
    text: "Your personal stylist, available whenever you need it. Get recommendations shaped by your taste, schedule, and the pieces already in your closet.",
    points: ["Dynamic outfit generation", "Personal taste learning"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCExLfXy2y6Cn1cHK1cM4rLJF5CfhFv1mqRi7YfyvaE5-Rqkay-cVAHre8MC33CXELjqxm8EvXyHJBpfiXiUNSdAsx0JK0a8wcGytU46jRuJkDgLtLczRXCk1oVnXGlUIT-t8-DbAZQSCOBS7w0I_gHsCSgizSXEd4GMOy387Zaa2f_ZDCoTqVF6rWr1SMzMaXqSojmVxAMIBZtqQtXhsYgxYz8PjoOFhVzK2mqy9lhe3NcMWa63QIi_yDoeK7pZc2pe7CsYOaJ8B4s",
  },
  {
    title: "Look Planning",
    text: "Save looks, plan your week, and know what to wear before your day starts.",
    points: ["Calendar-ready outfits", "Reusable favorites"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfcuhEh_z3saufbNUKzTuNdXo9OPNU94YmH9VJxEVpVd3JxXiXhrPSCRo4hhN4h2oQ5OudBJCTGWxcQSPzSRxBii2K-RYTRJr0tbEVR9RUDF9IC8CJAqQ4iruDvz2WRq5PD_11FXBRp_f8nw5UPhCkfuguaqpmN13DZNqTZPhmN0X1AfZJ6I4oCNooNJ2pcBi-c-ijtn8OIbQuJi5hcJsGLNxoBCzWzr_YQyHh2Y_ruCM2t0XqUyCIHPX1Z9e_3mnFvXgoCrZPW1xK",
  },
];

const steps = [
  {
    number: "1",
    title: "Add your wardrobe",
    text: "Photograph clothes, shoes, and accessories so your closet becomes a searchable digital wardrobe.",
  },
  {
    number: "2",
    title: "Get AI suggestions",
    text: "Zirccle combines your pieces into looks based on taste, weather, and occasion.",
  },
  {
    number: "3",
    title: "Save your looks",
    text: "Build a lookbook for work, weekends, travel, and special plans.",
  },
  {
    number: "4",
    title: "Plan ahead",
    text: "Connect outfits to your week and reduce the daily decision fatigue of getting dressed.",
  },
];

const faqs = [
  ["When will Zirccle launch?", "First-access members will receive private beta invites before the public release."],
  ["Do I need to upload my whole closet?", "No. You can start with favorite pieces and expand your wardrobe over time."],
  ["Is Zirccle only for fashion experts?", "No. It is designed for anyone who wants more confidence from clothes they already own."],
];

function WaitlistForm({ placement = "hero" }: { placement?: "hero" | "footer" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const id = `${placement}-email`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "zirccle-landing" }),
        });

        if (!response.ok) {
          throw new Error("Waitlist request failed");
        }
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="waitlistForm" onSubmit={handleSubmit}>
      <label htmlFor={id}>Email address</label>
      <div className="waitlistField">
        <span aria-hidden="true">✉</span>
        <input
          id={id}
          name="email"
          type="email"
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Joining..." : "Get first access"}
        </button>
      </div>
      <p className={`formMessage ${status}`}>
        {status === "success" && "You're on the first-access list."}
        {status === "error" && "Something went wrong. Please try again."}
        {status === "idle" && "No spam. Just early access updates."}
        {status === "loading" && "Saving your spot..."}
      </p>
    </form>
  );
}

function AppPreview() {
  return (
    <div className="previewCluster" aria-label="Zirccle app preview">
      <div className="stylePhoto photoOne">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK6snmMMPXr6fBH3YFNXZ0Pr7uD9nZD2vLT3IYa7NfUtTJ4xmkIDsNqajhAPTVPUuKp8KkpP8oN1M1Mo9J4YiHbvGGnW3ttpcENALGP5M5Gphg9gKn6yCgioNkYbClCWPYtcQX0G2LTLviRF5RYEdlijO3COzEqmd8mlNoeO1snI-0vWdLRl0p3nLNDnacNneoW0fBmILjFCdZqCiReSuJuoGjoX2k-kmH_N1RZLma5YQ1BYaJt7lIEAGq336doVqRz2GhwZ_tmjwj"
          alt=""
        />
      </div>
      <div className="phone sidePhone leftPhone">
        <div className="notch" />
        <div className="miniScreen">
          <strong>Business lunch</strong>
          <div className="outfitImage" />
          <p>Silk blouse + tapered trouser</p>
        </div>
      </div>
      <div className="phone mainPhone">
        <div className="notch" />
        <div className="appHeader">
          <span>Choose your style</span>
          <b>Today</b>
        </div>
        <div className="lookGrid">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfcuhEh_z3saufbNUKzTuNdXo9OPNU94YmH9VJxEVpVd3JxXiXhrPSCRo4hhN4h2oQ5OudBJCTGWxcQSPzSRxBii2K-RYTRJr0tbEVR9RUDF9IC8CJAqQ4iruDvz2WRq5PD_11FXBRp_f8nw5UPhCkfuguaqpmN13DZNqTZPhmN0X1AfZJ6I4oCNooNJ2pcBi-c-ijtn8OIbQuJi5hcJsGLNxoBCzWzr_YQyHh2Y_ruCM2t0XqUyCIHPX1Z9e_3mnFvXgoCrZPW1xK"
            alt=""
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy2mpdwbQmlCsApiOdC80vH3L8vjfvMAoeZehixK42gp1cxyDwqkFAsV2R3ajqyHfGI_vPE4DjCku6LXiageidTMEAGiAlSk2LBoAvkAPXOk7ju9Kn-TXJT6C_ldVsMDB9CUi3qRbbPVpIqXtks5dtXMnbkO9CN9gy06u5dYME7TvJt3HyMsLJHpnIRoeQ27uWOUSU6GKcaWNdu6C43i8ozH45_L8dWHh61iJZudp2KYjjDH_kHUUs8DntavVI_COXSu4m5RBAXHSu"
            alt=""
          />
        </div>
        <div className="categoryGrid">
          {["Tops", "Bottoms", "Shoes", "Bags", "Dresses", "Outerwear"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="bottomTabs">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="phone sidePhone rightPhone">
        <div className="notch" />
        <div className="miniScreen">
          <strong>Wardrobe</strong>
          <div className="closetRows">
            <span />
            <span />
            <span />
          </div>
          <p>32 pieces ready</p>
        </div>
      </div>
      <div className="stylePhoto photoTwo">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCExLfXy2y6Cn1cHK1cM4rLJF5CfhFv1mqRi7YfyvaE5-Rqkay-cVAHre8MC33CXELjqxm8EvXyHJBpfiXiUNSdAsx0JK0a8wcGytU46jRuJkDgLtLczRXCk1oVnXGlUIT-t8-DbAZQSCOBS7w0I_gHsCSgizSXEd4GMOy387Zaa2f_ZDCoTqVF6rWr1SMzMaXqSojmVxAMIBZtqQtXhsYgxYz8PjoOFhVzK2mqy9lhe3NcMWa63QIi_yDoeK7pZc2pe7CsYOaJ8B4s"
          alt=""
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Zirccle home">
          <Image src="/brand/zirccle-logo.png" alt="" width={34} height={34} priority />
          <span>ZIRCCLE</span>
        </a>
          <nav aria-label="Primary navigation">
          <a href="/features">Features</a>
          <a href="/how-it-works">How it works</a>
          <a href="/features#why-zirccle">Why Zirccle</a>
          <a href="/about">About</a>
          <a href="/features#faq">FAQ</a>
        </nav>
        <a className="headerCta" href="/contact">
          Get first access
        </a>
      </header>

      <section className="heroSection" id="top">
        <div className="heroCopy">
          <h1>Your wardrobe, in motion</h1>
          <p>
            Discover outfits you love, organize what you own, and get AI-powered
            style ideas that fit you.
          </p>
          <WaitlistForm />
        </div>
        <AppPreview />
      </section>

      <section className="benefitStrip" aria-label="Zirccle benefits">
        {benefits.map((benefit) => (
          <article key={benefit.title}>
            <span aria-hidden="true">{benefit.icon}</span>
            <div>
              <h2>{benefit.title}</h2>
              <p>{benefit.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="featureSection" id="features">
        <div className="sectionIntro">
          <span>Platform Features</span>
          <h2>Every tool you need to master your wardrobe.</h2>
          <p>
            Zirccle combines advanced AI with intuitive design to help you digitize,
            organize, and plan your style effortlessly.
          </p>
        </div>
        <div className="featureStack">
          {features.map((feature, index) => (
            <article className="featurePanel" key={feature.title}>
              <div className="featureImage">
                <img src={feature.image} alt="" />
              </div>
              <div className="featureCopy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stepsSection" id="how-it-works">
        <div className="sectionIntro compact">
          <span>The Journey</span>
          <h2>Your style journey, simplified</h2>
        </div>
        <div className="stepsGrid">
          {steps.map((step) => (
            <article className="stepCard" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="whySection" id="why-zirccle">
        <div>
          <h2>Why Zirccle</h2>
          <p>
            Because a full closet should make getting dressed easier. Zirccle
            reconnects you with what you own, helps you repeat favorites without
            boredom, and keeps your style organized in one mobile flow.
          </p>
        </div>
        <div className="whyMetrics">
          <article>
            <strong>Less</strong>
            <span>decision fatigue</span>
          </article>
          <article>
            <strong>More</strong>
            <span>use from your closet</span>
          </article>
          <article>
            <strong>Better</strong>
            <span>daily outfit confidence</span>
          </article>
        </div>
      </section>

      <section className="aboutSection" id="about">
        <div className="aboutImage">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK6snmMMPXr6fBH3YFNXZ0Pr7uD9nZD2vLT3IYa7NfUtTJ4xmkIDsNqajhAPTVPUuKp8KkpP8oN1M1Mo9J4YiHbvGGnW3ttpcENALGP5M5Gphg9gKn6yCgioNkYbClCWPYtcQX0G2LTLviRF5RYEdlijO3COzEqmd8mlNoeO1snI-0vWdLRl0p3nLNDnacNneoW0fBmILjFCdZqCiReSuJuoGjoX2k-kmH_N1RZLma5YQ1BYaJt7lIEAGq336doVqRz2GhwZ_tmjwj"
            alt=""
          />
        </div>
        <div>
          <span>Our Story</span>
          <h2>Modern style, intelligently reimagined.</h2>
          <p>
            We started with a simple question: why is it so hard to choose what to
            wear when our closets are full? Zirccle bridges physical wardrobes and
            digital life, turning getting dressed into a calmer daily ritual.
          </p>
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

      <section className="signupSection" id="signup">
        <div>
          <h2>Be first in the Zirccle circle</h2>
          <p>Join first access and help shape the private beta.</p>
        </div>
        <WaitlistForm placement="footer" />
      </section>

      <footer className="siteFooter">
        <span>ZIRCCLE</span>
        <div>
          <a href="/features">Features</a>
          <a href="/how-it-works">How it works</a>
          <a href="/contact">First access</a>
        </div>
      </footer>
    </main>
  );
}
