"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const primaryLinks = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.1rem] border border-outline-variant/35 bg-white/90 shadow-[0_12px_26px_rgba(89,17,98,0.08)] backdrop-blur-sm md:h-14 md:w-14">
        <Image alt="Zirccle" className="h-10 w-10 object-contain md:h-11 md:w-11" height={56} priority src="/brand/zirccle-logo.png" width={56} />
      </div>
      <div className="hidden flex-col leading-none sm:flex">
        <span className="text-label-sm font-semibold uppercase tracking-[0.3em] text-primary">Zirccle</span>
        <span className="mt-1 text-[0.72rem] uppercase tracking-[0.24em] text-on-surface-variant">Wardrobe concierge</span>
      </div>
    </div>
  );
}

export function WaitlistForm({ placement = "hero" }: { placement?: "hero" | "footer" | "cta" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const id = `${placement}-email`;
  const isDark = placement === "cta" || placement === "footer";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `zirccle-landing-${placement}` }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Waitlist request failed");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="w-full max-w-xl">
      <form
        className={`group flex w-full flex-col gap-2 rounded-[1.5rem] border p-2.5 shadow-[0_22px_55px_rgba(89,17,98,0.12)] transition-all duration-300 sm:flex-row ${
          isDark
            ? "border-white/15 bg-white/8 backdrop-blur-xl focus-within:border-white/35 focus-within:bg-white/12"
            : "border-outline-variant/70 bg-white/85 backdrop-blur-xl focus-within:border-primary/40 focus-within:bg-white"
        }`}
        onSubmit={handleSubmit}
        aria-live="polite"
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <div className="flex flex-1 items-center rounded-[1.05rem] px-4 py-3 sm:py-0">
          <span className={`material-symbols-outlined mr-3 text-[22px] ${isDark ? "text-white/65" : "text-outline"}`}>
            mail
          </span>
          <input
            id={id}
            name="email"
            type="email"
            required
            placeholder="Enter your email address"
            className={`w-full border-none bg-transparent text-body-md outline-none placeholder:text-outline/80 focus:ring-0 ${
              isDark ? "text-white placeholder:text-white/55" : "text-on-surface"
            }`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`whitespace-nowrap rounded-[1.05rem] px-7 py-4 font-label-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200 active:scale-95 ${
            isDark
              ? "bg-white text-primary hover:bg-surface-container-low"
              : "bg-primary text-on-primary hover:bg-primary-container"
          }`}
        >
          {status === "loading" ? "Joining..." : "Get first access"}
        </button>
      </form>
      <p
        className={`mt-3 flex items-center gap-2 text-label-sm ${
          status === "success"
            ? "text-emerald-600"
            : status === "error"
            ? "text-rose-600"
            : isDark
            ? "text-white/72"
            : "text-on-surface-variant"
        }`}
      >
        {status === "success" && (
          <>
            <span className="material-symbols-outlined text-base">check_circle</span>
            You&apos;re on the first-access list. Welcome!
          </>
        )}
        {status === "error" && (
          <>
            <span className="material-symbols-outlined text-base">error</span>
            Something went wrong. Please try again.
          </>
        )}
        {status === "idle" && (
          <>
            <span className="material-symbols-outlined text-base">check_circle</span>
            No spam. Just early access updates.
          </>
        )}
        {status === "loading" && (
          <>
            <span className="material-symbols-outlined animate-spin text-base">sync</span>
            Saving your spot...
          </>
        )}
      </p>
    </div>
  );
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/40 bg-white/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link className="flex items-center gap-2" href="/" aria-label="Zirccle home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              className="text-body-md font-medium text-on-surface-variant transition-colors hover:text-primary"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="rounded-full border border-primary/10 bg-primary px-5 py-3 text-label-sm font-semibold uppercase tracking-[0.2em] text-on-primary shadow-[0_14px_28px_rgba(89,17,98,0.16)] transition-all duration-200 hover:bg-primary-container active:scale-95"
            href="/contact"
          >
            Get first access
          </Link>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-full border border-outline-variant/50 bg-white p-2.5 text-primary shadow-sm transition-transform duration-200 active:scale-95 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-outline-variant/40 bg-white/96 px-margin-mobile py-5 shadow-[0_18px_50px_rgba(89,17,98,0.1)] backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-container-max flex-col gap-2">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-2xl px-4 py-3 text-body-lg font-medium text-on-surface transition-colors hover:bg-surface-container-low hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="mt-2 rounded-2xl bg-primary px-4 py-4 text-center text-label-sm font-semibold uppercase tracking-[0.2em] text-on-primary transition-colors hover:bg-primary-container"
              onClick={() => setMobileMenuOpen(false)}
              href="/contact"
            >
              Get first access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant/40 bg-surface-container-low px-margin-mobile py-10 md:py-16 md:px-margin-desktop">
      <div className="mx-auto max-w-container-max rounded-[2rem] border border-outline-variant/35 bg-white/80 p-6 shadow-[0_20px_60px_rgba(89,17,98,0.08)] backdrop-blur-xl md:p-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BrandLogo />
            </div>
            <p className="max-w-sm text-body-md leading-relaxed text-on-surface-variant">
              Intelligent style, curated from what you own. Discover your wardrobe in motion.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-label-sm font-bold uppercase tracking-[0.25em] text-primary">
              Product
            </h4>
            <div className="flex flex-col gap-3 text-body-md text-on-surface-variant">
              <Link className="transition-colors hover:text-primary" href="/features">
                Features
              </Link>
              <Link className="transition-colors hover:text-primary" href="/how-it-works">
                How it works
              </Link>
              <Link className="transition-colors hover:text-primary" href="/wardrobe-app">
                Wardrobe app
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-label-sm font-bold uppercase tracking-[0.25em] text-primary">
              Company
            </h4>
            <div className="flex flex-col gap-3 text-body-md text-on-surface-variant">
              <Link className="transition-colors hover:text-primary" href="/about">
                About Us
              </Link>
              <Link className="transition-colors hover:text-primary" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-label-sm font-bold uppercase tracking-[0.25em] text-primary">
              Stay in the loop
            </h4>
            <WaitlistForm placement="footer" />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-outline-variant/30 pt-6 text-label-sm font-semibold text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Zirccle. All rights reserved.</span>
          <div className="flex flex-wrap gap-6">
            <Link className="transition-colors hover:text-primary" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="transition-colors hover:text-primary" href="/terms-of-service">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-on-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(252,170,255,0.18),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(180deg,rgba(89,17,98,0.96),rgba(89,17,98,0.9))]" />
      <div className="absolute -right-24 top-0 h-[360px] w-[360px] rounded-full bg-primary-fixed-dim/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-white/10 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 gap-10 px-margin-mobile md:px-margin-desktop lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.24em] text-primary-fixed-dim">
            Be first in the circle
          </span>
          <h2 className="max-w-2xl text-display-lg-mobile font-semibold leading-tight text-white md:text-display-lg">
            Be the first to experience Zirccle
          </h2>
          <p className="max-w-xl text-body-lg leading-relaxed text-primary-fixed/85">
            Join the exclusive first-access waitlist and help shape the future of smart personal style.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-md">
              <div className="text-3xl font-semibold text-white">01</div>
              <p className="mt-2 text-label-sm uppercase tracking-[0.18em] text-primary-fixed-dim">Private beta</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-md">
              <div className="text-3xl font-semibold text-white">05</div>
              <p className="mt-2 text-label-sm uppercase tracking-[0.18em] text-primary-fixed-dim">Core journeys</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-md">
              <div className="text-3xl font-semibold text-white">24/7</div>
              <p className="mt-2 text-label-sm uppercase tracking-[0.18em] text-primary-fixed-dim">Style support</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-6">
          <WaitlistForm placement="cta" />
        </div>
      </div>
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
    <section className="relative overflow-hidden bg-surface-container-low py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(252,170,255,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(246,243,242,0.9))]" />
      <div className="absolute left-1/4 top-0 h-[280px] w-[280px] rounded-full bg-primary-fixed-dim/14 blur-[110px] pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-6">
          {kicker && (
            <span className="text-label-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {kicker}
            </span>
          )}
          <h1 className="max-w-xl text-display-lg-mobile font-semibold leading-tight text-primary md:text-display-lg">
            {title}
          </h1>
          <p className="max-w-lg text-body-lg leading-relaxed text-on-surface-variant">
            {text}
          </p>
        </div>

        {image && (
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] space-y-4">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-outline-variant/35 bg-white/90 p-3 shadow-[0_24px_64px_rgba(89,17,98,0.12)] backdrop-blur-md">
                <div className="relative w-full">
                  <Image className="aspect-[9/18] w-full rounded-[1.5rem] object-cover" src={image} alt={title} width={540} height={1080} />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/84 p-4 shadow-[0_14px_34px_rgba(89,17,98,0.08)] backdrop-blur-md">
                  <p className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">AI assisted</p>
                  <p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">Suggestions stay focused on what you own.</p>
                </div>
                <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/84 p-4 shadow-[0_14px_34px_rgba(89,17,98,0.08)] backdrop-blur-md">
                  <p className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">Calendar ready</p>
                  <p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">Outfits are framed around real plans.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
