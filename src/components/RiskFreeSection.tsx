'use client'

import {
  ShieldCheck, RefreshCw, ThumbsUp, Megaphone, Users, Award, TrendingUp,
  Calendar, CreditCard, Package, Unlock, Check, Clock, type LucideIcon,
} from 'lucide-react'

const costs: { label: string; sub: string }[] = [
  { label: '10 minutes', sub: 'to set up your campaign' },
  { label: 'One standee', sub: 'on your counter — that\'s it' },
  { label: 'Zero tech skills', sub: 'no integrations, no developers' },
  { label: 'Rs. 5,000 flat', sub: 'no hidden fees, no contracts' },
]

const gains: { Icon: LucideIcon; color: string; title: string; desc: string }[] = [
  {
    Icon: RefreshCw, color: '#6b3fd4',
    title: 'More Repeat Visits',
    desc: 'Your regulars come back more often and more predictably — driven by rewards they actually want.',
  },
  {
    Icon: ThumbsUp, color: '#27ae60',
    title: 'Higher NPS',
    desc: 'Customers who feel rewarded feel valued. Valued customers recommend you to everyone they know.',
  },
  {
    Icon: Megaphone, color: '#e67e22',
    title: 'Word of Mouth',
    desc: '"You have to try this place." The shake-and-win moment is inherently talkable — people bring it up.',
  },
  {
    Icon: Users, color: '#2980b9',
    title: 'Referrals',
    desc: 'Customers bring friends just to show them the experience. Free acquisition with zero ad spend.',
  },
  {
    Icon: Award, color: '#f0c040',
    title: 'Stronger Brand',
    desc: 'You\'re no longer just a shop. You\'re the café or salon with that fun loyalty thing everyone talks about.',
  },
  {
    Icon: TrendingUp, color: '#9b59b6',
    title: 'Social Media Buzz',
    desc: 'Customers share their wins on WhatsApp and Instagram Stories — organic reach you can\'t buy.',
  },
  {
    Icon: Clock, color: '#16a085',
    title: 'Fill Your Slow Periods',
    desc: 'Run time-targeted offers on Tuesdays, Wednesdays, Thursdays — turn your dead hours into your busiest.',
  },
]

const guarantees: { Icon: LucideIcon; label: string }[] = [
  { Icon: ShieldCheck, label: 'Full refund if it doesn\'t work' },
  { Icon: CreditCard,  label: 'Rs. 5,000 flat — no hidden fees' },
  { Icon: Package,     label: 'Standee on your counter in 3 days' },
  { Icon: Calendar,    label: 'Up and running in 10 minutes' },
  { Icon: Unlock,      label: 'No questions asked, ever' },
]

export default function RiskFreeSection() {
  return (
    <section className="section-main" style={{
      padding: '100px 80px',
      borderTop: '1px solid rgba(240,192,64,0.07)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(240,192,64,0.1)',
            border: '1px solid rgba(240,192,64,0.25)', borderRadius: '50px',
            padding: '6px 18px', marginBottom: '20px',
          }}>
            <span style={{ color: '#f0c040', fontSize: '13px', fontWeight: 600 }}>WORLD-CLASS. RS. 5,000. ZERO RISK.</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900,
            letterSpacing: '-1px', color: '#ffffff', lineHeight: 1.15, marginBottom: '16px',
          }}>
            World-class Marketing &amp; Loyalty Programs.{' '}
            <span style={{ color: '#f0c040' }}>For Rs. 5,000.</span>
          </h2>
          <p style={{ color: '#8b7db5', fontSize: '17px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Everything a big brand does to market and retain customers — loyalty programs, slow-day pulls, word-of-mouth engines — in one setup, for Rs. 5,000. If it doesn&apos;t work for any reason, full refund. No questions asked.
          </p>
        </div>

        {/* Promise panel */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(61,31,138,0.35), rgba(26,11,75,0.6))',
          border: '1px solid rgba(240,192,64,0.35)',
          borderRadius: '20px',
          padding: '32px 40px',
          marginBottom: '56px',
          display: 'flex', alignItems: 'center', gap: '24px',
          boxShadow: '0 0 60px rgba(240,192,64,0.06)',
        }}>
          <div style={{
            flexShrink: 0, width: '64px', height: '64px', borderRadius: '16px',
            background: 'rgba(240,192,64,0.1)', border: '1px solid rgba(240,192,64,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ShieldCheck size={30} color="#f0c040" strokeWidth={1.75} />
          </div>
          <div>
            <div style={{ color: '#f0c040', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', marginBottom: '8px' }}>
              OUR GUARANTEE
            </div>
            <p style={{ color: '#ffffff', fontSize: '17px', lineHeight: 1.65, fontWeight: 500 }}>
              Rs. 5,000 for world-class marketing your customers will actually talk about. We back it with complete conviction — if it doesn&apos;t deliver results for your business for any reason, you get every rupee back. No questions asked.
            </p>
          </div>
        </div>

        {/* Asymmetry block */}
        <div className="risk-asym-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px',
          marginBottom: '56px', alignItems: 'start',
        }}>
          {/* Left — cost */}
          <div style={{
            background: 'rgba(26,11,75,0.4)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px', padding: '32px',
          }}>
            <div style={{ color: '#8b7db5', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', marginBottom: '24px' }}>
              WHAT IT COSTS YOU
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {costs.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '6px', flexShrink: 0,
                    background: 'rgba(139,125,181,0.12)', border: '1px solid rgba(139,125,181,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                  }}>
                    <Check size={13} color="#8b7db5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>{c.label}</div>
                    <div style={{ color: '#8b7db5', fontSize: '13px', marginTop: '2px' }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — gains */}
          <div>
            <div style={{ color: '#f0c040', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', marginBottom: '24px' }}>
              WHAT YOU STAND TO GAIN
            </div>
            <div className="gains-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {gains.map((g, i) => (
                <div key={i} style={{
                  background: 'rgba(26,11,75,0.5)',
                  border: '1px solid rgba(240,192,64,0.1)',
                  borderRadius: '16px', padding: '20px',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(240,192,64,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(240,192,64,0.1)')}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px', marginBottom: '12px',
                    background: `${g.color}18`, border: `1px solid ${g.color}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <g.Icon size={20} color={g.color} strokeWidth={1.75} />
                  </div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{g.title}</div>
                  <div style={{ color: '#8b7db5', fontSize: '13px', lineHeight: 1.6 }}>{g.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee strip */}
        <div style={{
          background: 'rgba(26,11,75,0.3)',
          border: '1px solid rgba(240,192,64,0.15)',
          borderRadius: '16px',
          padding: '24px 32px',
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: '12px 32px',
        }}>
          {guarantees.map((g, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <g.Icon size={15} color="#f0c040" strokeWidth={2} />
              <span style={{ color: '#f0c040', fontSize: '14px', fontWeight: 600 }}>{g.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
