"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-components";

const terms = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>Welcome to Zirccle. By accessing or using our digital wardrobe and styling service, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.</p>
        <p className="mt-4">If you do not agree to these terms, you may not access or use the service. Zirccle reserves the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.</p>
      </>
    )
  },
  {
    id: "accounts",
    title: "User Accounts",
    content: (
      <>
        <p>To access certain features of Zirccle, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-on-surface-variant font-medium">
          <li>You must provide accurate, current, and complete information during registration.</li>
          <li>You must be at least 18 years old to use the service independently.</li>
          <li>You are strictly prohibited from sharing your account or allowing others to access your personalized styling data.</li>
        </ul>
      </>
    )
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-4">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-3xl font-medium" style={{ fontVariationSettings: "'FILL' 1" }}>
            copyright
          </span>
          <h3 className="font-manrope text-headline-sm font-bold">Platform Content</h3>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          All original content, features, functionality, and design elements of the Zirccle platform are owned by Zirccle and are protected by international copyright, trademark, and intellectual property laws.
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          User-uploaded wardrobe images remain the property of the user, but you grant Zirccle a license to use, process, and analyze these images to provide styling recommendations.
        </p>
      </div>
    )
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>Zirccle provides AI-driven styling suggestions &quot;as is&quot; without any guarantees regarding specific outcomes or personal satisfaction with outfit combinations.</p>
        <p className="mt-4">In no event shall Zirccle, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service or inability to access your digital wardrobe.</p>
      </>
    )
  }
];

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      
      for (const section of terms) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <SiteHeader />

      <section className="hero-gradient pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-8 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-white/78 px-4 py-2 text-label-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md">
              Agreement
            </span>
            <h1 className="max-w-xl text-display-lg-mobile font-semibold leading-[1.02] tracking-tight text-primary md:text-display-lg">
              Terms of Service
            </h1>
            <p className="max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              Clear, editorial legal language for a product that respects your time and your data.
            </p>
            <div className="rounded-[1.5rem] border border-outline-variant/35 bg-white/85 p-5 shadow-[0_18px_40px_rgba(89,17,98,0.08)]">
              <div className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">Last updated</div>
              <p className="mt-2 text-body-lg text-on-surface-variant">October 24, 2026</p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="rounded-[2rem] border border-outline-variant/35 bg-white/88 p-5 shadow-[0_22px_55px_rgba(89,17,98,0.08)] backdrop-blur-md lg:sticky lg:top-28">
              <p className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary">Sections</p>
              <nav className="mt-4 flex flex-col gap-2">
                {terms.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className={`rounded-xl px-3 py-2 text-body-md transition-colors ${activeSection === sec.id ? "bg-primary/10 font-semibold text-primary" : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"}`}
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-4">
              {terms.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-28 rounded-[2rem] border border-outline-variant/35 bg-white/88 p-6 shadow-[0_18px_40px_rgba(89,17,98,0.08)] backdrop-blur-md md:p-8">
                  <h2 className="text-headline-sm font-semibold text-primary">{sec.title}</h2>
                  <div className="mt-4 space-y-4 text-body-md leading-relaxed text-on-surface-variant">
                    {sec.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
