"use client";

import { useState, FormEvent } from "react";
import { SiteHeader, SiteFooter } from "../site-components";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Simulating message submission
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="hero-gradient pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-10 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-white/78 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md">
              Support & contact
            </span>
            <h1 className="max-w-xl text-display-lg-mobile font-semibold leading-[1.02] tracking-tight text-primary md:text-display-lg">
              Get in touch.
            </h1>
            <p className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              We&apos;re here to help simplify your style journey. Reach out with questions, partnership ideas, or product feedback.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-outline-variant/35 bg-white/85 p-5 shadow-[0_18px_40px_rgba(89,17,98,0.08)]">
                <div className="material-symbols-outlined text-3xl text-primary">mail</div>
                <p className="mt-3 text-label-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">Support</p>
                <p className="mt-2 text-body-lg font-semibold text-primary">hello@zirccle.com</p>
              </div>
              <div className="rounded-[1.75rem] border border-outline-variant/35 bg-white/85 p-5 shadow-[0_18px_40px_rgba(89,17,98,0.08)]">
                <div className="material-symbols-outlined text-3xl text-primary">location_on</div>
                <p className="mt-3 text-label-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">HQ</p>
                <p className="mt-2 text-body-lg font-semibold text-primary">New York City, NY</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-outline-variant/35 bg-white/85 p-5 shadow-[0_22px_55px_rgba(89,17,98,0.08)] backdrop-blur-md md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-label-sm font-semibold uppercase tracking-[0.18em] text-primary" htmlFor="name">Name</label>
                <input
                  className="w-full rounded-[1rem] border border-outline-variant/55 bg-white px-4 py-3 text-body-md outline-none transition-colors focus:border-primary/45 focus:ring-1 focus:ring-primary/20"
                  id="name"
                  required
                  placeholder="Your name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-label-sm font-semibold uppercase tracking-[0.18em] text-primary" htmlFor="email">Email</label>
                <input
                  className="w-full rounded-[1rem] border border-outline-variant/55 bg-white px-4 py-3 text-body-md outline-none transition-colors focus:border-primary/45 focus:ring-1 focus:ring-primary/20"
                  id="email"
                  required
                  placeholder="your@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-label-sm font-semibold uppercase tracking-[0.18em] text-primary" htmlFor="message">Message</label>
                <textarea
                  className="min-h-[180px] w-full rounded-[1rem] border border-outline-variant/55 bg-white px-4 py-3 text-body-md outline-none transition-colors focus:border-primary/45 focus:ring-1 focus:ring-primary/20"
                  id="message"
                  required
                  placeholder="How can we help you?"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                className="w-full rounded-[1rem] bg-primary px-6 py-4 text-label-sm font-semibold uppercase tracking-[0.2em] text-on-primary transition-all duration-200 hover:bg-primary-container active:scale-95"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-label-sm font-semibold text-emerald-600">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  Thank you. Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
