"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, ReactNode, useState } from "react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/features#why-zirccle", label: "Why Zirccle" },
  { href: "/about", label: "About" },
  { href: "/features#faq", label: "FAQ" },
];

export function BrandLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-soft">
        Z
      </span>
      <span className="text-xl font-medium uppercase tracking-[0.1em] text-primary">
        Zirccle
      </span>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-background/75 shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-5 md:px-10 lg:px-20">
        <Link href="/" aria-label="Zirccle home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = link.href.split("#")[0] === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 py-1 text-base transition-colors ${
                  active
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-muted-strong hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link className="hidden rounded-lg bg-primary px-6 py-3 text-base text-white shadow-soft transition hover:bg-primary-container active:scale-[0.98] md:inline-flex" href="/contact">
          Get first access
        </Link>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="rounded-lg border border-outline-variant bg-white px-3 py-2 text-primary md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="material-symbols-outlined text-2xl">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-outline-variant bg-background/95 px-5 py-4 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-container flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted-strong hover:bg-surface-container-low hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-white"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Get first access
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function WaitlistForm({ placement = "hero" }: { placement?: "hero" | "footer" | "cta" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const isDark = placement === "cta";
  const id = `${placement}-email`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `zirccle-${placement}` }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Waitlist request failed");
      }

      setEmail("");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className="w-full">
      <form className="flex w-full flex-col gap-4 pt-4 sm:flex-row" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor={id}>
          Email address
        </label>
        <div className={`flex min-h-14 flex-1 items-center gap-2 rounded-lg border px-4 shadow-sm ${isDark ? "border-white/20 bg-white/10" : "border-outline-variant bg-background"}`}>
          <span className={`material-symbols-outlined text-xl ${isDark ? "text-white/70" : "text-outline"}`}>mail</span>
          <input
            className={`w-full bg-transparent text-base outline-none placeholder:text-muted-strong/80 ${isDark ? "text-white" : "text-on-surface"}`}
            id={id}
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            required
            type="email"
            value={email}
          />
        </div>
        <button
          className={`min-h-14 rounded-lg px-8 text-base font-semibold shadow-soft transition hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-wait disabled:opacity-70 ${
            isDark ? "bg-white text-primary" : "bg-primary text-white hover:bg-primary-container"
          }`}
          disabled={status === "loading"}
          type="submit"
        >
          {status === "loading" ? "Joining..." : "Get first access"}
        </button>
      </form>
      <p className={`mt-3 flex items-center gap-2 text-sm font-semibold ${isDark ? "text-white/78" : "text-muted-strong"}`}>
        <span className="material-symbols-outlined text-base">
          {status === "error" ? "error" : status === "loading" ? "sync" : "check_circle"}
        </span>
        {status === "success"
          ? "You're on the first-access list."
          : status === "error"
          ? "We could not save that email. Please try again."
          : status === "loading"
          ? "Saving your spot..."
          : "No spam. Just early access updates."}
      </p>
    </div>
  );
}

export function Pill({ children, tone = "soft" }: { children: ReactNode; tone?: "soft" | "bright" }) {
  return (
    <span className={`inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.1em] ${tone === "bright" ? "bg-primary-fixed text-primary-container" : "bg-secondary-container text-primary"}`}>
      {children}
    </span>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function ImageFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-white shadow-strong ${className}`}>
      <Image className="h-full w-full object-cover" src={src} alt={alt} width={1100} height={900} priority={priority} />
    </div>
  );
}

export function SectionHeader({
  label,
  title,
  text,
  centered = false,
}: {
  label?: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={`space-y-5 ${centered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}`}>
      {label && <Pill>{label}</Pill>}
      <h2 className="text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-primary md:text-5xl">
        {title}
      </h2>
      {text && <p className="text-pretty text-lg leading-8 text-muted-strong">{text}</p>}
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="bg-primary py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-container gap-10 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-20">
        <div className="space-y-6">
          <Pill tone="bright">Be first in the circle</Pill>
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Be the first to experience Zirccle
          </h2>
          <p className="max-w-xl text-lg leading-8 text-primary-fixed/85">
            Join the first-access waitlist and help shape a wardrobe app that makes personal style feel calmer, smarter, and easier to use.
          </p>
        </div>
        <div className="self-center rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
          <WaitlistForm placement="cta" />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-low py-12">
      <div className="mx-auto grid max-w-container gap-10 px-5 md:px-10 lg:grid-cols-[1.15fr_0.7fr_0.7fr_1.05fr] lg:px-20">
        <div className="space-y-4">
          <BrandLogo />
          <p className="max-w-sm text-base leading-7 text-muted-strong">
            Intelligent style, curated from what you own. Discover your wardrobe in motion.
          </p>
        </div>
        <FooterLinks title="Product" links={[["Features", "/features"], ["How it works", "/how-it-works"], ["Wardrobe app", "/wardrobe-app"]]} />
        <FooterLinks title="Company" links={[["About", "/about"], ["Contact", "/contact"]]} />
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Stay in the loop</h3>
          <WaitlistForm placement="footer" />
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-container flex-col gap-4 border-t border-outline-variant px-5 pt-6 text-sm font-medium text-muted-strong md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20">
        <span>&copy; {new Date().getFullYear()} Zirccle. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary">{title}</h3>
      <div className="flex flex-col gap-3 text-base text-muted-strong">
        {links.map(([label, href]) => (
          <Link className="transition hover:text-primary" href={href} key={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
