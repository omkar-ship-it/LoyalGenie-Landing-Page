'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Settings, QrCode, UserCheck, Smartphone, RefreshCw } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    step: '01',
    Icon: Settings,
    title: 'Set Up Your Campaign',
    desc: 'Log into your LoyalGenie dashboard. Choose your mechanics — Stamp Card, Spin Wheel, Mystery Box, and more. Go live in minutes.',
    color: '#6b3fd4',
  },
  {
    step: '02',
    Icon: QrCode,
    title: 'Place the Standee',
    desc: 'Put the LoyalGenie standee on your counter — just like Google Pay. Customers see it and know exactly what to do.',
    color: '#f0c040',
  },
  {
    step: '03',
    Icon: UserCheck,
    title: 'Customer Scans & Joins',
    desc: 'Customer scans the QR code, opens the app in seconds, and joins your loyalty program — no friction, no download barrier.',
    color: '#27ae60',
  },
  {
    step: '04',
    Icon: Smartphone,
    title: 'Shake It & Win It',
    desc: 'Customers shake their phone and a reward is revealed — coupon, discount, free item. Pure magic. Pure delight.',
    color: '#e9a820',
  },
  {
    step: '05',
    Icon: RefreshCw,
    title: 'They Come Back',
    desc: 'Customers return to redeem their reward. You see visit history, track regulars, and run targeted re-engagement campaigns.',
    color: '#6b3fd4',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.step-card')
      if (!cards?.length) return
      gsap.from(cards, {
        y: 30, opacity: 0, stagger: 0.06, duration: 0.45, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', invalidateOnRefresh: true, once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} style={{ padding: '100px 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(240,192,64,0.1)',
            border: '1px solid rgba(240,192,64,0.25)',
            borderRadius: '50px', padding: '6px 18px', marginBottom: '20px',
          }}>
            <span style={{ color: '#f0c040', fontSize: '13px', fontWeight: 600 }}>HOW IT WORKS</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: 900, letterSpacing: '-1px',
            color: '#ffffff', lineHeight: 1.2, marginBottom: '16px',
          }}>
            Up and running in{' '}
            <span style={{ color: '#f0c040' }}>under 10 minutes</span>
          </h2>
          <p style={{ color: '#8b7db5', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            No developers. No complex setup. Just a standee, a QR code, and delighted customers.
          </p>
        </div>

        {/* Row 1 — 3 steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
          {steps.slice(0, 3).map((s, i) => (
            <StepCard key={i} s={s} i={i} total={3} />
          ))}
        </div>

        {/* Row 2 — 2 steps, centered with exact same card width as row 1 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          width: 'calc(66.667% - 8px)',
          margin: '0 auto',
        }}>
          {steps.slice(3).map((s, i) => (
            <StepCard key={i + 3} s={s} i={i} total={2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ s, i, total }: { s: typeof steps[0]; i: number; total: number }) {
  return (
    <div className="step-card card-glass" style={{ padding: '32px 24px', position: 'relative' }}>
      {/* Step number bg watermark */}
      <div style={{
        position: 'absolute', top: '-10px', right: '-10px',
        fontSize: '80px', fontWeight: 900, color: 'rgba(255,255,255,0.03)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>{s.step}</div>

      {/* Icon */}
      <div style={{
        width: '56px', height: '56px', borderRadius: '16px',
        background: `${s.color}22`,
        border: `1px solid ${s.color}44`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px',
      }}>
        <s.Icon size={24} color={s.color} strokeWidth={1.75} />
      </div>

      <div style={{ color: '#f0c040', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', marginBottom: '8px' }}>
        STEP {s.step}
      </div>
      <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
        {s.title}
      </h3>
      <p style={{ color: '#8b7db5', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>

      {/* Connector line */}
      {i < total - 1 && (
        <div style={{
          position: 'absolute', right: '-12px', top: '50%',
          width: '24px', height: '2px',
          background: 'linear-gradient(90deg, rgba(240,192,64,0.4), transparent)',
          zIndex: 10,
        }} />
      )}
    </div>
  )
}
