"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./how-it-works.css";

interface Step {
  num: string;
  title: string;
  desc: string;
  img: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Snap a photo",
    desc: "Lay your clothes flat and snap a quick photo. Zirccle automatically removes the background and isolates the item flawlessly.",
    img: "/gifs/snap pic.mp4",
  },
  {
    num: "02",
    title: "Auto-tagging magic",
    desc: "Our AI instantly tags the color, category, season, and occasion for each item. No manual data entry required.",
    img: "/gifs/Auto-tagging.mp4",
  },
  {
    num: "03",
    title: "Discover new outfits",
    desc: "The engine scans your digitized closet to find combinations you never knew existed. Hundreds of outfits generated instantly.",
    img: "/gifs/discover.mp4",
  },
  {
    num: "04",
    title: "Plan your week",
    desc: "Drag and drop outfits onto the calendar. Zirccle checks the weather forecast to ensure every outfit is weather-appropriate.",
    img: "/gifs/calendar.mp4",
  },
  {
    num: "05",
    title: "Wear it better",
    desc: "Wake up knowing exactly what to wear. Less stress, more confidence, and a sustainable approach to fashion.",
    img: "/gifs/wear better'.mp4",
  },
];

/* ── Design tokens — matching Features page palette ── */
const C = {
  bg: "linear-gradient(135deg, #F0EAF8 0%, #EDE6F5 40%, #E8DFF5 70%, #F7F2F8 100%)",
  accent: "#6B1E7A",
  headingDark: "#2A0B3D",
  bodyMuted: "#5A2070",
  divider: "rgba(107,30,122,0.15)",
  badgeBg: "linear-gradient(135deg, rgba(255,255,255,0.45), rgba(207,168,232,0.25))",
  badgeBorder: "rgba(255,255,255,0.55)",
  ghostNum: "rgba(107,30,122,0.07)",
  barGrad: "linear-gradient(180deg, #CFA8E8, #6B1E7A)",
};

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bigNumRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const navBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx: gsap.Context;

    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const total = steps.length;

        /* ── Init panels ── */
        panelsRef.current.forEach((el, i) => {
          if (!el) return;
          gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 36,
            pointerEvents: i === 0 ? "auto" : "none",
          });
        });

        /* ── Init nav items & bars ── */
        navItemsRef.current.forEach((el, i) => {
          if (!el) return;
          gsap.set(el, { opacity: i === 0 ? 1 : 0.35 });
        });
        navBarsRef.current.forEach((el, i) => {
          if (!el) return;
          gsap.set(el, { scaleX: i === 0 ? 1 : 0 });
        });

        /* ── Transition function ── */
        let current = 0;

        function goToStep(next: number) {
          if (next === current) return;
          const prev = current;
          current = next;

          // OUT – old panel
          const outEl = panelsRef.current[prev];
          if (outEl) {
            gsap.to(outEl, {
              opacity: 0,
              y: -28,
              duration: 0.45,
              ease: "power3.in",
              onComplete: () => {
                if (outEl) gsap.set(outEl, { pointerEvents: "none" });
              },
            });
          }

          // IN – new panel
          const inEl = panelsRef.current[next];
          if (inEl) {
            gsap.fromTo(
              inEl,
              { opacity: 0, y: 36 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.08,
                onStart: () => {
                  if (inEl) gsap.set(inEl, { pointerEvents: "auto" });
                },
              }
            );
          }

          // Ghost number swap
          if (bigNumRef.current) {
            gsap.to(bigNumRef.current, {
              opacity: 0,
              y: -16,
              duration: 0.22,
              ease: "power2.in",
              onComplete: () => {
                if (bigNumRef.current) {
                  bigNumRef.current.textContent = steps[next].num;
                  gsap.fromTo(
                    bigNumRef.current,
                    { opacity: 0, y: 16 },
                    { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" }
                  );
                }
              },
            });
          }

          // Nav rows highlight
          navItemsRef.current.forEach((el, i) => {
            if (!el) return;
            gsap.to(el, {
              opacity: i === next ? 1 : 0.35,
              duration: 0.38,
              ease: "power2.out",
            });
          });

          // Accent bars
          navBarsRef.current.forEach((el, i) => {
            if (!el) return;
            gsap.to(el, {
              scaleX: i === next ? 1 : 0,
              duration: 0.38,
              ease: "power3.out",
            });
          });

          setActiveStep(next);
        }

        /* ── Cache height of section to avoid mobile layout thrashing ── */
        let cachedHeight = sectionRef.current ? sectionRef.current.offsetHeight : 0;
        const refreshHandler = () => {
          if (sectionRef.current) {
            cachedHeight = sectionRef.current.offsetHeight;
          }
        };
        ScrollTrigger.addEventListener("refreshInit", refreshHandler);

        /* ── One ScrollTrigger per step ── */
        for (let i = 0; i < total; i++) {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: () => `top+=${i * (cachedHeight / total)} top`,
            end: () => `top+=${(i + 1) * (cachedHeight / total)} top`,
            onEnter: () => goToStep(i),
            onEnterBack: () => goToStep(i),
          });
        }
      }, sectionRef);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{
        position: "relative",
        height: `${steps.length * 100}vh`,
        marginTop: "0",
        zIndex: 1,
        background: C.bg,
      }}
    >
      {/* ══ Section banner — matches FEATURES banner exactly ══ */}
      <div
        className="hiw-banner"
        style={{
          textAlign: "center",
          paddingTop: "100px",
          paddingBottom: "48px",
          background: "#F7F2F8",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "0.25em",
            color: "#CFA8E8",
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          HOW IT WORKS
        </div>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            color: "#3B1049",
            margin: "0 auto 20px",
            fontWeight: 700,
            maxWidth: "640px",
            lineHeight: 1.2,
          }}
        >
          Steps to follow.
        </h2>
        <div
          style={{
            width: "80px",
            height: "2px",
            margin: "0 auto",
            background: "linear-gradient(90deg, transparent, #CFA8E8, #6B1E7A, #CFA8E8, transparent)",
            backgroundSize: "200% auto",
            borderRadius: "999px",
          }}
        />
      </div>

      {/* ══ Sticky viewport — solid lilac background ══ */}
      <div
        className="hiw-desktop-sticky"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: C.bg,
          zIndex: 10,
        }}
      >
        {/* Subtle radial glow — purely decorative */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(207,168,232,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Section header label */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "10px",
            letterSpacing: "0.25em",
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 600,
            color: "#CFA8E8",
            textTransform: "uppercase",
            zIndex: 2,
          }}
        >
          HOW IT WORKS
        </div>

        {/* Ghost step number watermark */}
        <div
          ref={bigNumRef}
          className="hiw-ghost-watermark"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-40px",
            left: "-40px",
            fontFamily: '"DM Serif Display", serif',
            fontSize: "14rem",
            color: C.ghostNum,
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
          }}
        >
          {steps[0].num}
        </div>

        {/* ══ Content grid ══ */}
        <div
          className="content-wrapper hiw-content-wrapper"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "80px",
            maxWidth: "1350px",
            width: "100%",
            alignItems: "center",
            padding: "0 40px",
            zIndex: 2,
          }}
        >
          {/* ── LEFT: step navigator ── */}
          <div className="hiw-navigator" style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="hiw-nav-row"
                ref={(el) => { navItemsRef.current[i] = el; }}
                style={{
                  position: "relative",
                  padding: "18px 0 18px 18px",
                  borderBottom: i < steps.length - 1 ? `1px solid ${C.divider}` : "none",
                }}
              >
                {/* Accent bar */}
                <div
                  ref={(el) => { navBarsRef.current[i] = el; }}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background: C.barGrad,
                    borderRadius: "0 2px 2px 0",
                    transformOrigin: "left center",
                    transform: i === 0 ? "scaleX(1)" : "scaleX(0)",
                  }}
                />

                {/* Step badge */}
                <div
                  className="hiw-step-badge"
                  style={{
                    display: "inline-block",
                    background: C.badgeBg,
                    border: `1px solid ${C.badgeBorder}`,
                    borderRadius: "999px",
                    padding: "6px 16px",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: C.accent,
                    textTransform: "uppercase",
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 600,
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 2px 8px rgba(107,30,122,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                    marginBottom: "8px",
                  }}
                >
                  STEP {i + 1}
                </div>

                {/* Title */}
                <h2
                  className="hiw-step-title"
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontStyle: "italic",
                    fontSize: "clamp(1.5rem, 2.2vw, 2.1rem)",
                    color: C.headingDark,
                    lineHeight: 1.15,
                    margin: "0 0 8px 0",
                  }}
                >
                  {step.title}
                </h2>

                {/* Description */}
                <p
                  className="hiw-step-desc"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: "1rem",
                    color: C.bodyMuted,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── RIGHT: stacked visual panels ── */}
          <div
            className="hiw-panels"
            style={{
              position: "relative",
              minHeight: "540px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="hiw-panel"
                ref={(el) => { panelsRef.current[i] = el; }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "24px",
                }}
              >
                {/* Mobile-only Step Badge */}
                <div className="hiw-mobile-badge-step">STEP {step.num}</div>

                {/* Step heading */}
                <h2
                  className="hiw-panel-title"
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontStyle: "italic",
                    fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                    color: C.headingDark,
                    lineHeight: 1.08,
                    letterSpacing: "-0.01em",
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {step.title}
                </h2>

                {/* Video — light-mode card */}
                <div className="gif-frame-light" style={{ width: "100%", maxWidth: "720px" }}>
                  {activeStep === i ? (
                    <video
                      key={step.img}
                      src={step.img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      style={{ width: "100%", borderRadius: "12px", display: "block" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "16/9",
                        background: "rgba(107,30,122,0.02)",
                        borderRadius: "12px",
                      }}
                    />
                  )}
                </div>

                {/* Mobile-only Description */}
                <p className="hiw-mobile-desc-step">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
