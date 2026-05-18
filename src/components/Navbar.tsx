'use client'

import { useEffect, useState } from 'react'

const BAR_HEIGHT = 38

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > BAR_HEIGHT)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Announcement bar */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: `${BAR_HEIGHT}px`,
        zIndex: 101,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
        background: 'linear-gradient(90deg, rgba(61,31,138,0.98), rgba(26,11,75,0.98), rgba(61,31,138,0.98))',
        borderBottom: '1px solid rgba(240,192,64,0.2)',
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{ width: '32px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(240,192,64,0.6))' }} />
        <span className="shimmer-gold" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px' }}>
          SHAKE IT &amp; WIN IT
        </span>
        <div style={{ width: '32px', height: '1px', background: 'linear-gradient(90deg, rgba(240,192,64,0.6), transparent)' }} />
      </div>

      {/* Main nav */}
      <nav className="nav-main" style={{
        position: 'fixed',
        top: `${BAR_HEIGHT}px`,
        left: 0, right: 0,
        zIndex: 100,
        padding: '16px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,5,32,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(240,192,64,0.1)' : 'none',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #3d1f8a, #6b3fd4)',
            border: '1px solid rgba(240,192,64,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 16px rgba(107,63,212,0.5)',
            fontSize: '22px',
          }}>🧞</div>
          <span style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-0.5px' }}>
            <span style={{ color: '#ffffff' }}>Loyal</span>
            <span style={{ position: 'relative' }}>
              <span className="shimmer-gold">Genie</span>
              <span aria-hidden style={{
                position: 'absolute', top: '-10px', left: '62%',
                transform: 'translateX(-50%)',
                fontSize: '8px', color: '#f0c040',
                letterSpacing: '2px', whiteSpace: 'nowrap',
              }}>✦✦✦</span>
            </span>
          </span>
        </div>

        {/* Nav links — hidden on mobile */}
        <div className="nav-links-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#how-it-works" style={{ color: '#8b7db5', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b7db5')}>
            How It Works
          </a>
          <a href="#mechanics" style={{ color: '#8b7db5', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b7db5')}>
            Mechanics
          </a>
          <a href="#for-business" style={{ color: '#8b7db5', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b7db5')}>
            For Business
          </a>
          <a href="https://5ynjgqi81l5.typeform.com/to/acjV4XH4" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '10px 24px', fontSize: '14px' }}>
            Get Started Free
          </a>
        </div>

        {/* Mobile CTA — only visible on mobile */}
        <a href="https://5ynjgqi81l5.typeform.com/to/acjV4XH4" target="_blank" rel="noopener noreferrer"
          className="btn-gold nav-cta-mobile"
          style={{ display: 'none', padding: '9px 18px', fontSize: '13px' }}>
          Get Started
        </a>
      </nav>
    </>
  )
}
