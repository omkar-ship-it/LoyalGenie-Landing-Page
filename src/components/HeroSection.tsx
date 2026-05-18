'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import gsap from 'gsap'

const FloatingScene = dynamic(() => import('./three/FloatingScene'), { ssr: false })

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.6 })
      .from(headlineRef.current, { y: 50, opacity: 0, duration: 0.9 }, '-=0.3')
      .from(subRef.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
  }, [])

  return (
    <section
      className="gradient-hero hero-grid hero-section"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '158px 80px 80px',
        gap: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 60% at 30% 50%, rgba(107,63,212,0.15) 0%, transparent 70%)',
      }} />

      {/* Left content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Badge */}
        <div ref={badgeRef} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(240,192,64,0.1)', border: '1px solid rgba(240,192,64,0.3)',
          borderRadius: '50px', padding: '8px 18px', marginBottom: '28px',
        }}>
          <span style={{ fontSize: '14px' }}>✨</span>
          <span style={{ color: '#f0c040', fontSize: '13px', fontWeight: 600, letterSpacing: '0.5px' }}>
            MAGICAL LOYALTY FOR SMEs IN INDIA
          </span>
        </div>

        {/* Headline */}
        <div ref={headlineRef}>
          <h1 style={{
            fontSize: 'clamp(34px, 4.2vw, 58px)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-1.5px',
            marginBottom: '24px',
          }}>
            <span style={{ color: '#ffffff' }}>Loyalty</span>{' '}
            <span className="shimmer-gold">Granted.</span>
            <br />
            <span style={{ color: '#ffffff' }}>Keep Customers{' '}</span>
            <span style={{ color: '#f0c040' }}>Coming Back.</span>
          </h1>
        </div>

        <p ref={subRef} style={{
          fontSize: '16px',
          color: '#8b7db5',
          lineHeight: 1.7,
          maxWidth: '480px',
          marginBottom: '36px',
        }}>
          Give your salon, cafe, or shop a gamified loyalty platform. Customers scan, shake their phone, and win rewards — while you build a base of loyal regulars.
        </p>

        <div ref={ctaRef} style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="https://5ynjgqi81l5.typeform.com/to/acjV4XH4" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: '15px', padding: '12px 28px' }}>
            Add to Your Counter — Free
          </a>
          <a href="#how-it-works" className="btn-outline" style={{ fontSize: '15px', padding: '11px 28px' }}>
            See How It Works
          </a>
        </div>

        {/* Social proof */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '40px' }}>
          <div style={{ display: 'flex' }}>
            {['🏪','☕','💇','🐾','🏋️'].map((emoji, i) => (
              <div key={i} style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: '#1a0b4b', border: '2px solid #0a0520',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', marginLeft: i > 0 ? '-10px' : '0',
              }}>{emoji}</div>
            ))}
          </div>
          <div>
            <div style={{ color: '#f0c040', fontWeight: 700, fontSize: '14px' }}>50+ businesses</div>
            <div style={{ color: '#8b7db5', fontSize: '13px' }}>already earning repeat visits</div>
          </div>
        </div>
      </div>

      {/* Right — 3D Scene */}
      <div className="hero-scene-wrap" style={{ position: 'relative', height: '600px' }}>
        {/* Shake It & Win It tagline */}
        <div className="hero-tagline" style={{
          position: 'absolute', top: '-84px', left: 0, right: 0,
          textAlign: 'center', zIndex: 5, pointerEvents: 'none',
        }}>
          <span className="shimmer-gold" style={{
            fontSize: 'clamp(14px, 1.5vw, 20px)',
            fontWeight: 700,
            letterSpacing: '1px',
          }}>
            Shake It &amp; Win It
          </span>
        </div>

        <FloatingScene />

        {/* LEFT SIDE CARDS */}

        {/* Card: top left — Double Points */}
        <div className="hero-float-card" style={{
          position: 'absolute', top: '30px', left: '-20px',
          background: 'rgba(26,11,75,0.88)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(240,192,64,0.25)', borderRadius: '16px',
          padding: '14px 18px', zIndex: 10,
          animation: 'float 4.2s ease-in-out 0.3s infinite',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg,#f0c040,#e9a820)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>⭐</div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '13px' }}>You Won!</div>
              <div style={{ color: '#f0c040', fontSize: '12px' }}>Double Points</div>
            </div>
          </div>
        </div>

        {/* Card: mid left — Complimentary Service */}
        <div className="hero-float-card" style={{
          position: 'absolute', top: '240px', left: '-15px',
          background: 'rgba(26,11,75,0.88)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(22,160,133,0.35)', borderRadius: '16px',
          padding: '14px 18px', zIndex: 10,
          animation: 'float 5s ease-in-out 2.5s infinite',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg,#16a085,#0d3b27)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>💆</div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '13px' }}>You Won!</div>
              <div style={{ color: '#4dd4ac', fontSize: '12px' }}>Complimentary Service</div>
            </div>
          </div>
        </div>

        {/* Card: bottom left — ₹50 off */}
        <div className="hero-float-card" style={{
          position: 'absolute', bottom: '100px', left: '-20px',
          background: 'rgba(26,11,75,0.88)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(240,192,64,0.25)', borderRadius: '16px',
          padding: '14px 18px', zIndex: 10,
          animation: 'float 4s ease-in-out 0s infinite',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg,#f0c040,#e9a820)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>🎁</div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '13px' }}>You Won!</div>
              <div style={{ color: '#f0c040', fontSize: '12px' }}>₹50 off your next visit</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}

        {/* Card: top right — Free Coffee */}
        <div className="hero-float-card" style={{
          position: 'absolute', top: '60px', right: '-10px',
          background: 'rgba(26,11,75,0.88)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(107,63,212,0.35)', borderRadius: '16px',
          padding: '14px 18px', zIndex: 10,
          animation: 'float 4.5s ease-in-out 1.2s infinite',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg,#6b3fd4,#3d1f8a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>☕</div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '13px' }}>You Won!</div>
              <div style={{ color: '#a78bfa', fontSize: '12px' }}>Free Coffee</div>
            </div>
          </div>
        </div>

        {/* Card: mid right — Free Snack */}
        <div className="hero-float-card" style={{
          position: 'absolute', top: '240px', right: '-20px',
          background: 'rgba(26,11,75,0.88)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(239,68,68,0.35)', borderRadius: '16px',
          padding: '14px 18px', zIndex: 10,
          animation: 'float 4.8s ease-in-out 1.8s infinite',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg,#ef4444,#991b1b)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>🍕</div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '13px' }}>You Won!</div>
              <div style={{ color: '#fca5a5', fontSize: '12px' }}>Free Snack</div>
            </div>
          </div>
        </div>

        {/* Card: bottom right — 10% Off Today */}
        <div className="hero-float-card" style={{
          position: 'absolute', bottom: '80px', right: '-15px',
          background: 'rgba(26,11,75,0.88)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(251,146,60,0.35)', borderRadius: '16px',
          padding: '14px 18px', zIndex: 10,
          animation: 'float 5.2s ease-in-out 3.2s infinite',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg,#f97316,#c2410c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>🏷️</div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '13px' }}>You Won!</div>
              <div style={{ color: '#fdba74', fontSize: '12px' }}>10% Off Today</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
