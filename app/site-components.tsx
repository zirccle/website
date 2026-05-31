"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, ReactNode, useEffect, useState, useSyncExternalStore } from "react";
import { IconBrandInstagram } from "@tabler/icons-react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
];

function BrandLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/brand/zirccle-horizontal.png"
        alt="Zirccle logo"
        width={1200}
        height={360}
        style={{ width: "auto", height: "3rem" }}
        className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)] sm:h-14"
      />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const hash = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("hashchange", onStoreChange);
      return () => window.removeEventListener("hashchange", onStoreChange);
    },
    () => window.location.hash,
    () => ""
  );
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 24) {
        setVisible(true);
      } else if (currentScrollY > previousScrollY) {
        setVisible(false);
      } else if (currentScrollY < previousScrollY) {
        setVisible(true);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/96 shadow-[0_10px_30px_rgba(89,17,98,0.08)] backdrop-blur-xl transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-5 md:px-10 lg:px-20">
        <Link href="/" aria-label="Zirccle home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const [linkPath, linkHash] = link.href.split("#");
            const isActive = linkPath === pathname && (!linkHash || hash === `#${linkHash}`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 py-1 text-base transition-colors ${
                  isActive
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
                className="rounded-lg p-3 text-base font-medium text-muted-strong hover:bg-surface-container-low hover:text-primary"
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
  const [message, setMessage] = useState("No spam. Just early access updates.");
  const isDark = placement === "cta";
  const isFooter = placement === "footer";
  const id = `${placement}-email`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("Saving your spot...");

    try {
      const sanitizedEmail = email.trim();
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: sanitizedEmail, source: `zirccle-${placement}` }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Waitlist request failed");
      }

      setEmail("");
      setStatus("success");
      setMessage(data.message || "You're on the first-access list.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not save that email. Please try again.");
    }
  }

  return (
    <div className="w-full">
      <form
        className={`grid w-full gap-4 pt-4 ${isFooter ? "grid-cols-1" : "sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"}`}
        onSubmit={handleSubmit}
      >
        <label className="sr-only" htmlFor={id}>
          Email address
        </label>
        <div className={`flex min-h-14 w-full min-w-0 items-center gap-2 rounded-lg border px-4 shadow-sm ${isDark ? "border-white/20 bg-white/10" : "border-outline-variant bg-background"}`}>
          <span className={`material-symbols-outlined text-xl ${isDark ? "text-white/70" : "text-outline"}`}>mail</span>
          <input
            aria-label="Email address"
            className={`min-w-0 flex-1 bg-transparent text-base outline-none ${isDark ? "text-white placeholder:text-white/70" : "text-on-surface placeholder:text-muted-strong/80"}`}
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
          className={`min-h-14 w-full rounded-lg px-8 text-base font-semibold shadow-soft transition hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-wait disabled:opacity-70 ${
            isFooter ? "" : "sm:w-auto"
          } ${
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
        {message}
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
    <main className="flex min-h-screen flex-col bg-background text-on-surface">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </main>
  );
}

export function ImageFrame({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white shadow-strong ${className}`}>
      <Image fill className="object-cover" sizes={sizes} src={src} alt={alt} priority={priority} />
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-[#f7f3f4] text-[#5b535c]">
      <div className="mx-auto max-w-container px-6 py-3 md:px-10 lg:px-20 lg:py-4">
        <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-3 whitespace-nowrap justify-self-start">
            <Image
              src="/brand/zirccle-horizontal.png"
              alt="Zirccle"
              width={1200}
              height={360}
              style={{ width: "auto", height: "1.78rem" }}
            />
          </div>

          <nav className="grid grid-cols-2 gap-x-5 gap-y-1 self-center text-sm text-[#625a63] sm:grid-cols-4 lg:justify-self-center">
            <Link className="transition hover:text-primary" href="/about">
              About
            </Link>
            <Link className="transition hover:text-primary" href="/privacy-policy">
              Privacy
            </Link>
            <Link className="transition hover:text-primary" href="/terms-of-service">
              Terms
            </Link>
            <Link className="transition hover:text-primary" href="/contact">
              Contact
            </Link>
          </nav>

          <div className="flex items-center justify-self-end">
            <a
              aria-label="Zirccle on Instagram"
              className="inline-flex items-center justify-center rounded-full p-1.5 text-[#5e5660] transition hover:text-primary"
              href="https://instagram.com/zirccle"
              rel="noreferrer"
              target="_blank"
            >
              <IconBrandInstagram aria-hidden="true" className="block h-6 w-6" stroke={1.8} />
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-[12px] leading-none text-[#8a8088]">
          &copy; <span suppressHydrationWarning>{currentYear}</span> Zirccle. Your style journey, simplified.
        </p>
      </div>
    </footer>
  );
}
