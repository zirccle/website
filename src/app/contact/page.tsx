"use client";

import { FormEvent, useState } from "react";
import { SiteFooter, SiteHeader } from "../site-components";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = new FormData(event.currentTarget);
    const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.get("email"),
            name: form.get("name"),
            message: form.get("message"),
            source: "zirccle-contact",
          }),
        });

        if (!response.ok) {
          throw new Error("Contact request failed");
        }
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <SiteHeader />
      <section className="contactPage">
        <div>
          <span>Contact</span>
          <h1>Get in touch</h1>
          <p>
            Join first access, ask a question, or tell us what you want from your
            digital wardrobe.
          </p>
          <div className="contactInfo">
            <article>
              <strong>Email</strong>
              <a href="mailto:hello@zirccle.app">hello@zirccle.app</a>
            </article>
            <article>
              <strong>Private beta</strong>
              <span>First-access invites opening soon.</span>
            </article>
          </div>
        </div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us what you want Zirccle to help with."
            />
          </label>
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Get first access"}
          </button>
          <p className={`formMessage ${status}`}>
            {status === "success" && "You're on the first-access list."}
            {status === "error" && "Something went wrong. Please try again."}
            {status === "idle" && "No spam. Just early access updates."}
            {status === "loading" && "Saving your spot..."}
          </p>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
