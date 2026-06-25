"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

/* ─────────────────────────────────────────────
   Zirccle Hero Video Component
───────────────────────────────────────────── */
export function ZirccleHero() {
  const [showCTA, setShowCTA] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [hintVisible, setHintVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputError, setInputError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  // Track whether the user has interacted so we can unmute after autoplay policy allows it
  const userInteractedRef = useRef(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setInputError(true);
      setTimeout(() => setInputError(false), 500);
      return;
    }
    setIsSubmitted(true);
  };

  useEffect(() => {
    const ctaTimer = setTimeout(() => {
      setShowCTA(true);
    }, 800);

    return () => clearTimeout(ctaTimer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => { });
    }

    const timer1 = setTimeout(() => setShowHint(false), 3000);
    const timer2 = setTimeout(() => setHintVisible(false), 4000);

    // On first user interaction, unlock audio and unmute if the hero is currently visible
    const unlockAudio = () => {
      userInteractedRef.current = true;
      const vid = videoRef.current;
      if (vid) {
        vid.muted = false;
        vid.play().catch(() => { });
      }
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };
    document.addEventListener('click', unlockAudio, { once: true });
    document.addEventListener('touchstart', unlockAudio, { once: true });

    // Observe hero visibility: unmute at ≥60% visible, mute otherwise
    const observer = new IntersectionObserver(
      ([entry]) => {
        const vid = videoRef.current;
        if (!vid) return;

        if (entry.intersectionRatio >= 0.6) {
          // Hero is the active section — unmute (only works after user interaction)
          if (userInteractedRef.current) {
            vid.muted = false;
          }
        } else {
          // Hero scrolled away — mute immediately, video keeps looping
          vid.muted = true;
        }
      },
      {
        threshold: [0, 0.3, 0.6, 0.8, 1.0]
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero-container"
      ref={heroRef}
      style={{
        height: '100vh',
        overflow: 'hidden',
        background: '#2D0A3E',
        position: 'relative'
      }}
    >
      <style>
        {`
          body, html {
            background: #2D0A3E;
          }
          .hero-cta-form {
            display: flex;
            flex-direction: row;
            gap: 12px;
            width: 100%;
            align-items: center;
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
        `}
      </style>

      <video
        id="heroVideo"
        ref={videoRef}
        src="/Zirccle_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.25)',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8) 100%)',
        pointerEvents: 'none',
        zIndex: 2
      }}></div>

      {hintVisible && (
        <div
          className="hero-hint"
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12px',
            fontFamily: '"DM Sans", sans-serif',
            opacity: showHint ? 1 : 0,
            transition: 'opacity 1s ease',
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          🔊 Tap anywhere for sound
        </div>
      )}

      <div
        className="hero-cta-overlay"
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '0',
          width: '100%',
          opacity: showCTA ? 1 : 0,
          pointerEvents: showCTA ? 'auto' : 'none',
          transition: 'opacity 1s ease',
          zIndex: 10,
        }}
      >
        <div className="hero-cta-inner" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'center', width: '100%', boxSizing: 'border-box' }}>
          {isSubmitted ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ffffff',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1.2rem',
              fontWeight: 600,
              background: isMobile ? 'rgba(105,36,117,0.9)' : 'rgba(105, 36, 117, 0.25)',
              backdropFilter: isMobile ? 'none' : 'blur(12px)',
              border: '1px solid rgba(167, 139, 250, 0.35)',
              padding: '12px 24px',
              borderRadius: '16px'
            }}>
              <CheckCircle style={{ color: '#22C55E', width: '20px', height: '20px' }} />
              <span>💜 You're on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="hero-cta-form" style={{ margin: 0, padding: 0 }}>
              <div className="hero-cta-input-wrapper" style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
                <Mail style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(255, 255, 255, 0.65)',
                  width: '20px',
                  height: '20px',
                  pointerEvents: 'none',
                }} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    height: '52px',
                    padding: '0 16px 0 48px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    background: isMobile ? 'rgba(60,20,80,0.75)' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: isMobile ? 'none' : 'blur(20px)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: '"DM Sans", sans-serif',
                    boxSizing: 'border-box',
                    animation: inputError ? 'shake 0.3s ease-in-out' : 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(167, 139, 250, 0.8)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)')}
                />
              </div>

              <button
                type="submit"
                className="hero-cta-btn"
                style={{
                  background: '#692475',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  height: '52px',
                  padding: '0 32px',
                  cursor: 'pointer',
                  fontFamily: '"DM Sans", sans-serif',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 24px rgba(105, 36, 117, 0.45)',
                  transition: 'background-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#531c5d')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#692475')}
              >
                ✦ Get First Access
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Zirccle Stats Bar Component
───────────────────────────────────────────── */
const STATS = [
  { label: 'Less', sub: 'decision fatigue', image: '/images/1.png', icon: '↓', color: '#9B4DB8' },
  { label: 'More', sub: 'use from your closet', image: '/images/2.png', icon: '↑', color: '#6B1E7A' },
  { label: 'Better', sub: 'daily outfit confidence', image: '/images/3.png', icon: '✦', color: '#CFA8E8' },
];

export function ZirccleStatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stats-bar-section"
      style={{
        background: 'linear-gradient(135deg, #E8DFF5 0%, #EDE6F5 50%, #E4D9F0 100%)',
        padding: '80px 40px', position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(107,30,122,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="stats-bar-grid" style={{
        maxWidth: '900px', margin: '0 auto', display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', position: 'relative', zIndex: 1,
      }}>
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="stats-bar-card"
            style={{
              position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '300px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              boxShadow: '0 8px 40px rgba(45,10,78,0.2)',
            }}
          >
            <img
              src={stat.image}
              alt={stat.label}
              loading="lazy"
              decoding="async"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', zIndex: 0,
              }}
            />

            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(20,4,32,0.2) 0%, rgba(20,4,32,0.72) 100%)',
              zIndex: 1,
            }} />

            <div style={{
              position: 'absolute', bottom: '18px', left: '14px', right: '14px',
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(22px) saturate(180%)',
              WebkitBackdropFilter: 'blur(22px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.22)',
              borderTop: '1px solid rgba(255,255,255,0.38)',
              borderRadius: '16px', padding: '18px 20px', textAlign: 'center',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 4px 20px rgba(0,0,0,0.2)',
              zIndex: 2,
            }}>
              <div style={{ fontSize: '1.1rem', color: stat.color, marginBottom: '6px', fontWeight: 700 }}>
                {stat.icon}
              </div>
              <div style={{
                fontFamily: "'Playfair Display', serif", fontSize: '2.2rem',
                fontWeight: 900, color: '#F7F2F8', lineHeight: 1, marginBottom: '5px',
              }}>
                {stat.label}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.75)', letterSpacing: '0.02em',
              }}>
                {stat.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Zirccle FAQ Component
───────────────────────────────────────────── */
const FAQS = [
  { q: 'When will Zirccle launch?', a: 'First-access members will receive private beta invites before the public release.' },
  { q: 'Do I need to upload my whole closet?', a: 'No. Start with a few favorites and expand your digital wardrobe at your own pace.' },
  { q: 'Is Zirccle only for fashion experts?', a: 'No. It is designed for anyone who wants less stress and more confidence in what they already own.' },
  { q: 'Does Zirccle work with all clothing types?', a: 'Yes — tops, bottoms, shoes, accessories, outerwear. If you wear it, Zirccle can catalog it.' },
];

export function ZirccleFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisibleItems(prev => prev.includes(i) ? prev : [...prev, i]);
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <section className="faq-section" style={{ background: '#F7F2F8', padding: '80px 40px 100px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontSize: '10px', letterSpacing: '0.2em', color: '#CFA8E8',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
            marginBottom: '12px', textTransform: 'uppercase',
          }}>FAQ</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            color: '#3B1049', margin: 0, fontWeight: 700,
          }}>Frequently asked questions</h2>
        </div>

        {FAQS.map((faq, i) => {
          const isVisible = visibleItems.includes(i);
          const isOpen = openFaq === i;
          const animDelay = `${i * 0.1}s`;
          const floatDelay = `${i * 0.1 + 0.6}s`;
          const floatDuration = `${3.2 + i * 0.25}s`;

          return (
            <div
              key={i}
              className="faq-item"
              ref={el => { itemRefs.current[i] = el; }}
              onClick={() => setOpenFaq(isOpen ? null : i)}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = isOpen
                  ? '0 10px 36px rgba(107,30,122,0.13), 0 0 20px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.8)'
                  : '0 0 20px rgba(124,58,237,0.2), 0 4px 18px rgba(107,30,122,0.07)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = isOpen
                  ? '0 10px 36px rgba(107,30,122,0.13), inset 0 1px 0 rgba(255,255,255,0.8)'
                  : '0 4px 18px rgba(107,30,122,0.07)';
              }}
              style={{
                background: isOpen
                  ? 'rgba(124,58,237,0.08)'
                  : 'rgba(124,58,237,0.04)',
                backdropFilter: 'blur(16px) saturate(140%)',
                border: `1px solid ${isOpen ? 'rgba(124,58,237,0.4)' : 'rgba(124,58,237,0.15)'}`,
                borderLeft: '3px solid #7C3AED',
                borderRadius: '18px',
                marginBottom: '14px',
                padding: '22px 28px',
                cursor: 'pointer',
                boxShadow: isOpen
                  ? '0 10px 36px rgba(107,30,122,0.13), inset 0 1px 0 rgba(255,255,255,0.8)'
                  : '0 4px 18px rgba(107,30,122,0.07)',
                position: 'relative', overflow: 'hidden',
                opacity: isVisible ? undefined : 0,
                animation: isVisible
                  ? `faqPopIn 0.6s cubic-bezier(0.34,1.56,0.64,1) ${animDelay} both,
                     faqFloat ${floatDuration} ease-in-out ${floatDelay} infinite`
                  : 'none',
                transition: 'background 350ms ease, border-color 350ms ease, box-shadow 350ms ease',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.05rem',
                  color: '#3B1049',
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}>
                  {faq.q}
                </span>

                <div style={{
                  width: '30px', height: '30px', borderRadius: '50%',
                  flexShrink: 0, marginLeft: '16px',
                  background: isOpen ? 'linear-gradient(135deg, #6B1E7A, #7C3AED)' : 'rgba(124,58,237,0.1)',
                  border: '1.5px solid #7C3AED',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: isOpen ? '#F7F2F8' : '#6B1E7A',
                  fontSize: '1.15rem', fontWeight: 300,
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'all 300ms ease',
                }}>+</div>
              </div>

              <div className={`faq-answer ${isOpen ? 'open' : ''}`} style={{
                paddingTop: isOpen ? '16px' : '0',
                borderTop: isOpen ? '1px solid rgba(207,168,232,0.3)' : 'none',
                marginTop: isOpen ? '12px' : '0',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.95rem',
                color: '#5A2070',
                lineHeight: 1.75,
              }}>
                {faq.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
