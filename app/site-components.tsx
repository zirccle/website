"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { Mail, CheckCircle } from "lucide-react";


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
        priority
      />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // Reactively close mobile drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      if (openRef.current) return;
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
        visible || open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-5 md:px-10 lg:px-20">
        <Link href="/" aria-label="Zirccle home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = link.href === pathname;
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
                className="rounded-lg p-3 text-base font-medium text-muted-strong hover:bg-surface-container-low hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-white"
              href="/contact"
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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [inputError, setInputError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setInputError(true);
      setTimeout(() => setInputError(false), 500);
      return;
    }

    setStatus("loading");

    try {
      const sanitizedEmail = email.trim();
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: sanitizedEmail, source: "zirccle-contact" }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Waitlist request failed");
      }

      setEmail("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full bg-[#EDE8F8] box-border relative z-30">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25%      { transform: translateX(-5px); }
          75%      { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
        .contact-wrap input::placeholder { color: rgba(26,12,30,0.38); }
      `}</style>

      <div className="contact-wrap grid grid-cols-1 md:grid-cols-[42%_58%] min-h-screen w-full bg-[#EDE8F8] box-border">
        {/* ─── LEFT: all content ─── */}
        <div className="contact-content-col flex flex-col justify-center order-1 md:order-none py-16 px-5 md:py-24 md:pr-[6%] md:pl-[12%] lg:pl-[15%] xl:pl-[18%] box-border">
          {/* Badge */}
          <div className="inline-flex items-center gap-[7px] bg-[rgba(105,36,117,0.07)] border border-[rgba(105,36,117,0.20)] text-[#692475] rounded-[100px] px-4 py-[7px] text-xs font-bold tracking-[0.18em] uppercase mb-[26px] font-sans w-fit">
            <span className="w-[7px] h-[7px] rounded-full bg-[#692475] inline-block shrink-0" />
            Contact
          </div>

          {/* Heading — large */}
          <h2 className="contact-heading font-serif text-[clamp(2.5rem,5vw,4.6rem)] font-bold text-[#1A0C1E] mb-[22px] leading-[1.08] tracking-tight">
            Reach Zirccle<br />directly.
          </h2>

          {/* Description */}
          <p className="contact-desc font-sans text-base md:text-[1.15rem] leading-[1.72] text-[rgba(26,12,30,0.62)] mb-[28px] max-w-[440px]">
            For support, partnerships, product feedback, or launch coordination, email the team directly or join the first-access list.
          </p>

          {/* Email row */}
          <div className="flex items-center gap-[14px] mb-[10px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[rgba(105,36,117,0.09)] flex items-center justify-center text-[#692475] shrink-0">
              <Mail className="w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#96699E] uppercase font-sans mb-[3px]">
                EMAIL
              </span>
              <a
                className="contact-email-link text-[1.4rem] font-bold text-[#692475] hover:text-[#531c5d] transition-colors font-sans no-underline break-all"
                href="mailto:admin@zirccle.com"
              >
                admin@zirccle.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-none border-t border-[rgba(167,139,250,0.25)] my-[26px] w-full max-w-[440px]" />

          {/* Get First Access */}
          <div className="w-full max-w-[440px] box-border">
            <div className="text-[12px] font-bold tracking-[0.16em] text-[#96699E] uppercase font-sans mb-[14px]">
              Get First Access
            </div>

            {status === "success" ? (
              <div className="py-[12px]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <CheckCircle className="text-[#22C55E] w-[20px] h-[20px]" />
                  <span className="font-sans text-[#1A0C1E] text-[1.1rem] font-bold">
                    You're on the list!
                  </span>
                </div>
                <p className="font-sans text-[rgba(26,12,30,0.6)] m-0 text-[0.95rem] leading-[1.5]">
                  We'll email you as soon as early access spots open up.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="m-0 p-0">
                {/* Input */}
                <div className="relative w-full mb-[12px]">
                  <Mail className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[rgba(26,12,30,0.32)] w-[19px] h-[19px] pointer-events-none" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full h-[52px] pl-[46px] pr-[14px] rounded-[11px] border border-[rgba(167,139,250,0.38)] bg-[rgba(255,255,255,0.72)] text-[#1A0C1E] text-base outline-none font-sans box-border transition-colors duration-200 focus:border-[#692475] ${
                      inputError ? "animate-shake" : ""
                    }`}
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-[52px] bg-[#692475] hover:bg-[#531c5d] disabled:opacity-50 text-white border-none rounded-[11px] font-semibold text-base cursor-pointer font-sans transition-colors duration-200 flex items-center justify-center gap-[8px]"
                >
                  {status === "loading" ? "Joining..." : "Get First Access"}
                  <span className="text-[1rem]">✦</span>
                </button>

                <div className="flex items-center gap-[7px] text-[13px] text-[rgba(26,12,30,0.5)] font-sans mt-[13px]">
                  <CheckCircle className="text-[#692475] w-[14px] h-[14px] shrink-0" />
                  <span>No spam. Just early access updates.</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ─── RIGHT: Image Asset ─── */}
        <div className="contact-img-col relative h-[50vw] min-h-[220px] max-h-[360px] md:h-screen md:max-h-none overflow-hidden bg-[#EDE8F8] order-2 md:order-none">
          <Image
            src="/images/contact.png"
            alt="Zirccle Wardrobe"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            priority
            className="object-cover object-center"
          />

          {/* Gradient overlay to smoothly blend the image edge with the left column */}
          <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-[#EDE8F8] to-transparent pointer-events-none z-10 hidden md:block" />
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
