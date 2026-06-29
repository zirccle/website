"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

/* ─────────────────────────────────────────────
   KEYFRAMES injected once into <head>
───────────────────────────────────────────── */
const GLOBAL_CSS = `

  @keyframes glowPulse {
    0%,100% { filter: drop-shadow(0 0 24px rgba(107,30,122,0.5)); }
    50%      { filter: drop-shadow(0 0 55px rgba(107,30,122,0.85)); }
  }
  @keyframes blink {
    0%,100% { opacity:1; }
    50%      { opacity:0; }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes heroEnter {
    from { opacity:0; transform:translateY(30px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .about-cursor {
    display:inline-block;
    animation: blink 0.7s infinite;
    margin-left:1px;
  }
  .about-cta-input::placeholder { color:rgba(255,255,255,0.4); }
  .about-cta-input:focus { border-color:#CFA8E8 !important; outline:none; }

  @media (max-width:768px){
    .about-s2-layout  { flex-direction:column !important; gap:48px !important; }
    .about-s3-layout  { flex-direction:column !important; }
    .about-s4-grid    { grid-template-columns:1fr !important; }
    .about-s5-layout  { flex-direction:column !important; gap:48px !important; }
    .about-s2-logo    { width:220px !important; }
  }
`;

function injectGlobalCSS() {
  const id = 'about-global-css';
  if (typeof window !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
  }
}

/* ─────────────────────────────────────────────
   HOOK: one-shot IntersectionObserver
───────────────────────────────────────────── */
function useOnScreen(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const checkVisibility = () => {
      if (!ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= viewHeight && rect.bottom >= 0) {
        setTriggered(true);
        return true;
      }
      return false;
    };

    // Run once immediately
    if (checkVisibility()) return;

    const handleScroll = () => {
      if (checkVisibility()) {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTriggered(true);
        obs.disconnect();
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
    }, { threshold });

    obs.observe(ref.current);

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref, threshold]);

  return triggered;
}

/* ─────────────────────────────────────────────
   HOOK: typing effect → returns { display, done }
───────────────────────────────────────────── */
function useTyping(text: string, speed: number, triggered: boolean, delay = 0) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(iv);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [triggered, text, speed, delay]);

  return { display, done };
}

/* ─────────────────────────────────────────────
   HOOK: continuous typing effect (looping)
───────────────────────────────────────────── */
function useContinuousTyping(text: string, speed: number, delay = 0) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const tick = () => {
      if (!isDeleting) {
        i++;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          isDeleting = true;
          timeout = setTimeout(tick, 2000); // pause at end
        } else {
          timeout = setTimeout(tick, speed);
        }
      } else {
        i--;
        setDisplay(text.slice(0, i));
        if (i === 0) {
          isDeleting = false;
          timeout = setTimeout(tick, 500); // pause before retyping
        } else {
          timeout = setTimeout(tick, speed / 2);
        }
      }
    };
    timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return display;
}

/* ─────────────────────────────────────────────
   PILL eyebrow helper
───────────────────────────────────────────── */
function Pill({ children, color = '#CFA8E8', borderColor = 'rgba(207,168,232,0.4)', style = {} }: { children: React.ReactNode, color?: string, borderColor?: string, style?: React.CSSProperties }) {
  return (
    <div style={{
      display: 'inline-block',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color,
      border: `1px solid ${borderColor}`,
      borderRadius: '999px',
      padding: '6px 16px',
      fontFamily: 'var(--font-dm-sans), sans-serif',
      fontWeight: 700,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 1 — THE PARADOX
═══════════════════════════════════════════ */
function SectionParadox() {
  const bullets = [
    'Reduce morning stress and decision fatigue',
    'Promote sustainable fashion through better utilization',
    'Create fresh combinations from existing pieces',
  ];

  return (
    <section id="about" style={{
      minHeight: '100dvh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Background Image */}
      <img
        src="/images/Nothing to wear.png"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(71,20,90,0.58)', zIndex: 1 }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '680px',
        padding: '80px 24px',
        animation: 'heroEnter 800ms ease 200ms both',
      }}>
        <Pill style={{ marginBottom: '24px' }}>THE PARADOX</Pill>

        <h1 style={{
          fontFamily: "var(--font-playfair-display), serif",
          fontStyle: 'italic',
          fontSize: 'clamp(2.4rem,5vw,4rem)',
          color: 'white',
          lineHeight: 1.15,
          margin: '0 0 20px 0',
          fontWeight: 700,
        }}>
          Solving the Nothing-To-Wear Paradox.
        </h1>

        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.7,
          margin: '0 0 32px 0',
        }}>
          Most wardrobes are underused. Zirccle turns that unused potential into repeatable outfits, lower stress, and a more conscious relationship with what you already own.
        </p>

        <div style={{ maxWidth: '420px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
          {bullets.map((b, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
              <div style={{
                width: '22px', height: '22px', borderRadius: '50%',
                border: '1.5px solid #CFA8E8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, color: '#CFA8E8', fontSize: '11px', fontWeight: 700,
              }}>✓</div>
              <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '1rem', color: 'white', lineHeight: 1.5 }}>
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — THE STORY
═══════════════════════════════════════════ */
function SectionStory() {
  const rootRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const triggered = useOnScreen(rootRef, isMobile ? 0.15 : 0.4);

  const HEADING = 'The Story';
  const { display: headingDisplay, done: headingDone } = useTyping(HEADING, 45, triggered);

  const [showCursor, setShowCursor] = useState(true);
  const [bodyVisible, setBodyVisible] = useState(false);
  const [logoGlow, setLogoGlow] = useState(false);

  // Logo animation on trigger
  useEffect(() => {
    if (!triggered || !logoRef.current) return;
    logoRef.current.style.transition = 'opacity 700ms cubic-bezier(0.34,1.56,0.64,1), transform 700ms cubic-bezier(0.34,1.56,0.64,1)';
    logoRef.current.style.opacity = '1';
    logoRef.current.style.transform = 'scale(1.05)';
    const t1 = setTimeout(() => {
      if (logoRef.current) {
        logoRef.current.style.transform = 'scale(1)';
      }
    }, 400);
    const t2 = setTimeout(() => {
      setLogoGlow(true);
    }, 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [triggered]);

  // Cursor blink then disappear after heading done, body auto-appears 300ms later
  useEffect(() => {
    if (!headingDone) return;
    setShowCursor(false);
    const t = setTimeout(() => {
      setBodyVisible(true);
    }, 300);
    return () => clearTimeout(t);
  }, [headingDone]);

  return (
    <section ref={rootRef} style={{ background: '#F7F2F8', padding: '120px 5%' }}>
      <div className="about-s2-layout" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'row', gap: '80px', alignItems: 'center' }}>

        {/* LEFT — Logo */}
        <div className="about-s2-logo" style={{ width: '420px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Radial purple glow behind logo */}
          <div style={{
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(207,168,232,0.25) 0%, transparent 70%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div
              ref={logoRef}
              style={{
                opacity: 0,
                transform: 'scale(0.4)',
                animation: logoGlow ? 'glowPulse 2.5s ease infinite' : 'none',
                willChange: 'transform, opacity, filter',
                width: '100%',
              }}
            >
              <img
                src="/images/logo.jpeg"
                alt="Zirccle Logo"
                style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT — Text */}
        <div style={{ flex: 1 }}>
          <Pill
            color="#6B1E7A"
            borderColor="rgba(107,30,122,0.3)"
            style={{ marginBottom: '16px', fontSize: '12px', letterSpacing: '0.22em' }}
          >
            THE STORY
          </Pill>

          <h2 className="about-story-headline" style={{
            fontFamily: "var(--font-playfair-display), serif",
            fontStyle: 'italic',
            fontWeight: 800,
            fontSize: 'clamp(3.2rem, 5vw, 4.6rem)',
            color: '#3B1049',
            margin: '0 0 24px 0',
            lineHeight: 1.15,
            minHeight: '4rem',
          }}>
            {headingDisplay}
            {!headingDone || showCursor ? (
              <span className="about-cursor" style={{ opacity: headingDone && !showCursor ? 0 : undefined }}>|</span>
            ) : null}
          </h2>

          <p className="about-story-body" style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 500,
            fontSize: '1.25rem',
            color: '#3B1049',
            lineHeight: 1.9,
            maxWidth: '500px',
            margin: 0,
            opacity: bodyVisible ? 1 : 0,
            transform: bodyVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 600ms ease, transform 600ms ease',
          }}>
            We realized that most of our wardrobe sits untouched. We buy more clothes because we can't see what we have. It's chaotic, wasteful, and stressful. Zirccle was built to solve this — to digitize the closet and use AI to unlock the hidden potential of the clothes already hanging there.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — MISSION & VISION
   MV card sub-component
═══════════════════════════════════════════ */
function MVCard({ label, heading, body, delay = 0, triggered }: { label: string, heading: string, body: string, delay?: number, triggered: boolean }) {
  const labelDisplay = useContinuousTyping(label, 80, delay);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setContentVisible(true), delay + 200);
    return () => clearTimeout(t);
  }, [triggered, delay]);

  return (
    <div style={{
      flex: 1,
      background: 'transparent',
      border: '1px solid rgba(207,168,232,0.25)',
      borderRadius: '24px',
      padding: '48px 40px',
    }}>
      {/* Label (Continuous typing + bold) */}
      <div style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: '11px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#CFA8E8',
        fontWeight: 'bold',
        minHeight: '18px',
        marginBottom: '20px',
      }}>
        {labelDisplay}
        <span className="about-cursor">|</span>
      </div>

      {/* Heading (Static) */}
      <h3 className="about-mv-heading" style={{
        fontFamily: "var(--font-playfair-display), serif",
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: '2.4rem',
        color: 'white',
        margin: '0 0 20px 0',
        lineHeight: 1.2,
        opacity: contentVisible ? 1 : 0,
        transform: contentVisible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 500ms ease, transform 500ms ease',
      }}>
        {heading}
      </h3>

      {/* Body */}
      <p style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: '1rem',
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 1.7,
        margin: 0,
        opacity: contentVisible ? 1 : 0,
        transition: 'opacity 500ms ease 300ms',
      }}>
        {body}
      </p>
    </div>
  );
}

function SectionMissionVision() {
  const rootRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const triggered = useOnScreen(rootRef, isMobile ? 0.15 : 0.3);

  return (
    <section ref={rootRef} style={{ position: 'relative', padding: '100px 5%' }}>
      {/* Keep existing dark closet bg */}
      <img
        src="/images/background.png"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(40,10,60,0.65)', zIndex: 1 }} />

      <div
        className="about-s3-layout"
        style={{ position: 'relative', zIndex: 2, maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'row', gap: '32px' }}
      >
        <MVCard
          label="MISSION"
          heading="End wardrobe chaos."
          body="To empower every individual to feel their best by providing an AI-driven concierge that organizes, plans, and inspires their personal style journey."
          delay={0}
          triggered={triggered}
        />
        <MVCard
          label="VISION"
          heading="Zero new shopping."
          body="To become the standard interface for wardrobe intelligence, where confidence, sustainability, and taste live in one calm product."
          delay={500}
          triggered={triggered}
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4 — PRINCIPLES
   PrincipleCard sub-component
═══════════════════════════════════════════ */
const PRINCIPLE_IMAGES = [
  '/images/innovation.png',
  '/images/Conscious luxury.png',
  '/images/Empowerment.png',
  '/images/inclusivity.png',
];

const PRINCIPLES = [
  { title: 'Rediscover Your Closet', body: 'Unlock outfits and possibilities hidden inside your wardrobe.' },
  { title: 'Fashion With Purpose', body: 'Getting more from what you own before buying more.' },
  { title: 'Dress With Confidence', body: 'Turning everyday outfit choices into effortless decisions.' },
  { title: 'Style For Everyone', body: 'Supporting different tastes, body types, occasions, and lifestyles.' },
];

function PrincipleCard({ title, body, image, staggerDelay, triggered }: { title: string, body: string, image: string, staggerDelay: number, triggered: boolean }) {
  const { display: titleDisplay, done: titleDone } = useTyping(title, 50, triggered, staggerDelay);
  const [bodyVisible, setBodyVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  // Card appear with stagger
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setCardVisible(true), staggerDelay);
    return () => clearTimeout(t);
  }, [triggered, staggerDelay]);

  // Body fades in 300ms after title done
  useEffect(() => {
    if (!titleDone) return;
    const t = setTimeout(() => setBodyVisible(true), 300);
    return () => clearTimeout(t);
  }, [titleDone]);

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '20px',
      height: '260px',
      opacity: cardVisible ? 1 : 0,
      transform: cardVisible ? 'translateY(0)' : 'translateY(24px)',
      transition: 'opacity 500ms ease, transform 500ms ease',
    }}>
      {/* Card background Image */}
      <img
        src={image}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', opacity: 1, zIndex: 0 }}
      />
      {/* Bottom gradient */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '65%', background: 'linear-gradient(to top, rgba(50,10,75,0.92) 0%, transparent 100%)', zIndex: 1 }} />

      {/* Content */}
      <div style={{ position: 'absolute', bottom: '24px', left: '28px', right: '28px', zIndex: 2 }}>
        <span className="about-principle-title" style={{
          fontFamily: "var(--font-playfair-display), serif",
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: '1.8rem',
          color: 'white',
          display: 'block',
          marginBottom: '6px',
          lineHeight: 1.2,
        }}>
          {titleDisplay}
          {!titleDone && triggered && <span className="about-cursor">|</span>}
        </span>
        <p style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.5,
          margin: 0,
          opacity: bodyVisible ? 1 : 0,
          transition: 'opacity 400ms ease',
        }}>
          {body}
        </p>
      </div>
    </div>
  );
}

function SectionPrinciples() {
  const rootRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const triggered = useOnScreen(rootRef, isMobile ? 0.15 : 0.3);

  return (
    <section ref={rootRef} style={{ position: 'relative', overflow: 'hidden', padding: '100px 5%' }}>
      <div style={{ position: 'absolute', inset: 0, background: '#E4D9F0', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Pill style={{ marginBottom: '20px' }} color="#3B1049" borderColor="rgba(59,16,73,0.3)">THE VALUES</Pill>
          <h2 style={{
            fontFamily: "var(--font-playfair-display), serif",
            fontStyle: 'italic',
            fontSize: '2.8rem',
            color: '#3B1049',
            margin: 0,
            fontWeight: 700,
          }}>
            The principles guiding the product.
          </h2>
        </div>

        {/* 2×2 Grid */}
        <div
          className="about-s4-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px' }}
        >
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard
              key={i}
              title={p.title}
              body={p.body}
              image={PRINCIPLE_IMAGES[i]}
              staggerDelay={i * 150}
              triggered={triggered}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — FINAL CTA
═══════════════════════════════════════════ */
export function SectionCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setInputError(true);
      setTimeout(() => setInputError(false), 500);
      return;
    }
    setIsSubmitted(true);
  };

  const BG = '#EDE8F8';

  return (
    <section id="reach-zirccle">
      <div
        className="contact-wrap"
        style={{
          display: 'grid',
          gridTemplateColumns: '42% 58%',
          minHeight: '100vh',
          width: '100%',
          background: BG,
          boxSizing: 'border-box',
        }}
      >
        <style>{`
          @keyframes shake {
            0%,100% { transform:translateX(0); }
            25%      { transform:translateX(-5px); }
            75%      { transform:translateX(5px); }
          }
          input::placeholder { color: rgba(26,12,30,0.38); }
        `}</style>

        {/* ─── LEFT: all content ─── */}
        <div
          className="contact-content-col"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '100px 6% 60px 18%',
            boxSizing: 'border-box',
          }}
        >

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(105,36,117,0.07)',
            border: '1px solid rgba(105,36,117,0.20)',
            color: '#692475', borderRadius: '100px',
            padding: '7px 16px', fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            marginBottom: '26px',
            fontFamily: '"DM Sans", sans-serif', width: 'fit-content',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#692475', display: 'inline-block', flexShrink: 0 }} />
            Contact
          </div>

          {/* Heading — large */}
          <h2 className="contact-heading" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3rem, 5vw, 4.6rem)',
            fontWeight: 700, color: '#1A0C1E',
            margin: '0 0 22px 0', lineHeight: 1.08,
            letterSpacing: '-0.02em',
          }}>
            Reach Zirccle<br />directly.
          </h2>

          {/* Description */}
          <p className="contact-desc" style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '1.15rem', lineHeight: '1.72',
            color: 'rgba(26,12,30,0.62)',
            margin: '0 0 28px 0', maxWidth: '440px',
          }}>
            For support, partnerships, product feedback, or launch
            coordination, email the team directly or join the first-access list.
          </p>

          {/* Email row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: 'rgba(105,36,117,0.09)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#692475', flexShrink: 0,
            }}>
              <Mail style={{ width: '20px', height: '20px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em',
                color: '#96699E', textTransform: 'uppercase',
                fontFamily: '"DM Sans", sans-serif', marginBottom: '3px',
              }}>EMAIL</span>
              <a
                className="contact-email-link"
                href="mailto:admin@zirccle.com"
                style={{
                  fontSize: '1.4rem', fontWeight: 700, color: '#692475',
                  textDecoration: 'none', fontFamily: '"DM Sans", sans-serif',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = '#531c5d'}
                onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = '#692475'}
              >admin@zirccle.com</a>
            </div>
          </div>

          {/* Divider */}
          <hr style={{
            border: 'none', borderTop: '1px solid rgba(167,139,250,0.25)',
            margin: '26px 0', width: '100%', maxWidth: '440px',
          }} />

          {/* Get First Access */}
          <div style={{ width: '100%', maxWidth: '440px', boxSizing: 'border-box' }}>
            <div style={{
              fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em',
              color: '#96699E', textTransform: 'uppercase',
              fontFamily: '"DM Sans", sans-serif', marginBottom: '14px',
            }}>Get First Access</div>

            {isSubmitted ? (
              <div style={{ padding: '12px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <CheckCircle style={{ color: '#22C55E', width: '20px', height: '20px' }} />
                  <span style={{ fontFamily: '"DM Sans", sans-serif', color: '#1A0C1E', fontSize: '1.1rem', fontWeight: 700 }}>
                    You're on the list!
                  </span>
                </div>
                <p style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(26,12,30,0.6)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>
                  We'll email you as soon as early access spots open up.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ margin: 0, padding: 0 }}>
                {/* Input */}
                <div style={{ position: 'relative', width: '100%', marginBottom: '12px' }}>
                  <Mail style={{
                    position: 'absolute', left: '15px', top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'rgba(26,12,30,0.32)', width: '19px', height: '19px',
                    pointerEvents: 'none',
                  }} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                      width: '100%', height: '52px',
                      padding: '0 14px 0 46px',
                      borderRadius: '11px',
                      border: '1px solid rgba(167,139,250,0.38)',
                      background: 'rgba(255,255,255,0.72)',
                      color: '#1A0C1E', fontSize: '1rem', outline: 'none',
                      fontFamily: '"DM Sans", sans-serif',
                      boxSizing: 'border-box',
                      animation: inputError ? 'shake 0.3s ease-in-out' : 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={e => e.target.style.borderColor = '#692475'}
                    onBlur={e => e.target.style.borderColor = 'rgba(167,139,250,0.38)'}
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  style={{
                    width: '100%', height: '52px',
                    background: '#692475', color: '#fff',
                    border: 'none', borderRadius: '11px',
                    fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
                    fontFamily: '"DM Sans", sans-serif',
                    transition: 'background-color 0.2s ease',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#531c5d'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#692475'}
                >
                  Get First Access
                  <span style={{ fontSize: '1rem' }}>✦</span>
                </button>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  fontSize: '13px', color: 'rgba(26,12,30,0.5)',
                  fontFamily: '"DM Sans", sans-serif', marginTop: '13px',
                }}>
                  <CheckCircle style={{ color: '#692475', width: '14px', height: '14px', flexShrink: 0 }} />
                  <span>No spam. Just early access updates.</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ─── RIGHT: contact.png ─── */}
        <div
          className="contact-img-col"
          style={{
            position: 'relative',
            height: '100dvh',
            overflow: 'hidden',
            background: BG,
          }}
        >
          <img
            src="/images/contact.png"
            alt="Zirccle Wardrobe"
            loading="lazy"
            decoding="async"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              display: 'block',
            }}
          />

          {/* Gradient fade on the LEFT edge — blends image into the background
              so any colour mismatch at the partition is completely invisible */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '18%',
            height: '100%',
            background: `linear-gradient(to right, ${BG} 0%, transparent 100%)`,
            pointerEvents: 'none',
            zIndex: 2,
          }} />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ROOT COMPONENT
═══════════════════════════════════════════ */
export default function AboutClient() {
  useEffect(() => {
    injectGlobalCSS();
    // If navigated here via "Get First Access" button, scroll to contact section
    if (sessionStorage.getItem('scrollToContact') === 'true') {
      sessionStorage.removeItem('scrollToContact');
      // Small delay to let the page render first
      setTimeout(() => {
        const el = document.getElementById('reach-zirccle');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SectionParadox />
      <SectionStory />
      <SectionMissionVision />
      <SectionPrinciples />
    </div>
  );
}
