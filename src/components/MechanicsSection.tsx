'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, RotateCw, Ticket, Package, Smartphone, CreditCard, LayoutGrid, Crown, type LucideIcon } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const mechanics: {
  Icon: LucideIcon
  name: string
  desc: string
  gradient: string
  tag: string | null
}[] = [
  {
    Icon: Award,
    name: 'Stamp Card',
    desc: 'Classic loyalty — collect stamps, unlock rewards. Digital, clean, trackable.',
    gradient: 'linear-gradient(135deg, #3d1f8a, #6b3fd4)',
    tag: 'Most Popular',
  },
  {
    Icon: RotateCw,
    name: 'Spin a Wheel',
    desc: 'Customers spin to win prizes. Every spin builds anticipation and brings them back.',
    gradient: 'linear-gradient(135deg, #1a5276, #2980b9)',
    tag: null,
  },
  {
    Icon: Ticket,
    name: 'Lottery',
    desc: 'Enter a draw with each visit. Creates excitement and community buzz around your brand.',
    gradient: 'linear-gradient(135deg, #6e2f0e, #e67e22)',
    tag: null,
  },
  {
    Icon: Package,
    name: 'Mystery Box',
    desc: "Surprise rewards that customers can't resist. The unknown is the most powerful motivator.",
    gradient: 'linear-gradient(135deg, #1a3a4a, #16a085)',
    tag: 'High Engagement',
  },
  {
    Icon: Smartphone,
    name: 'Shake & Win',
    desc: 'Customers shake their phone. A coupon or gift is revealed. Pure dopamine. Our flagship mechanic.',
    gradient: 'linear-gradient(135deg, #4a1a6b, #9b59b6)',
    tag: '⭐ Flagship',
  },
  {
    Icon: CreditCard,
    name: 'Scratch Card',
    desc: 'Digital scratch cards replicate the thrill of the physical. Tap, scratch, win.',
    gradient: 'linear-gradient(135deg, #7b341e, #c0392b)',
    tag: null,
  },
  {
    Icon: LayoutGrid,
    name: 'Collection Set',
    desc: 'Collect all items in a set to unlock a grand reward. Drives multiple repeat visits.',
    gradient: 'linear-gradient(135deg, #0d3b27, #27ae60)',
    tag: 'High Retention',
  },
  {
    Icon: Crown,
    name: 'Paid Membership',
    desc: 'Offer exclusive tiers — Silver, Gold, Platinum. Members pay to belong and spend more to stay there.',
    gradient: 'linear-gradient(135deg, #7c4a00, #f0c040)',
    tag: 'Premium',
  },
]

export default function MechanicsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(4)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.mechanic-card')
      if (!cards?.length) return
      gsap.from(cards, {
        scale: 0.92, opacity: 0, stagger: 0.05, duration: 0.4, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', invalidateOnRefresh: true, once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="mechanics" ref={sectionRef} style={{
      padding: '100px 80px',
      background: 'rgba(26,11,75,0.25)',
      borderTop: '1px solid rgba(240,192,64,0.07)',
      borderBottom: '1px solid rgba(240,192,64,0.07)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(240,192,64,0.1)',
            border: '1px solid rgba(240,192,64,0.25)', borderRadius: '50px',
            padding: '6px 18px', marginBottom: '20px',
          }}>
            <span style={{ color: '#f0c040', fontSize: '13px', fontWeight: 600 }}>8 ENGAGEMENT MECHANICS</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 900,
            letterSpacing: '-1px', color: '#ffffff', lineHeight: 1.2, marginBottom: '16px',
          }}>
            Every visit is a{' '}
            <span style={{ color: '#f0c040' }}>new adventure</span>
          </h2>
          <p style={{ color: '#8b7db5', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Mix and match mechanics to keep your customers guessing, engaged, and always coming back for more.
          </p>
        </div>

        {/* 8 cards — 2 clean rows of 4 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {mechanics.map((m, i) => (
            <MechanicCard key={i} mechanic={m} isActive={active === i} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MechanicCard({ mechanic, isActive, onClick }: {
  mechanic: typeof mechanics[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div
      className="mechanic-card"
      onClick={onClick}
      style={{
        padding: '28px 24px',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.35s ease',
        background: isActive ? mechanic.gradient : 'rgba(26,11,75,0.5)',
        border: isActive ? '1px solid rgba(240,192,64,0.4)' : '1px solid rgba(240,192,64,0.1)',
        transform: isActive ? 'translateY(-6px) scale(1.02)' : 'none',
        boxShadow: isActive ? '0 20px 50px rgba(0,0,0,0.4)' : 'none',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {mechanic.tag && (
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'rgba(240,192,64,0.15)', border: '1px solid rgba(240,192,64,0.3)',
          borderRadius: '20px', padding: '3px 10px',
          color: '#f0c040', fontSize: '11px', fontWeight: 600,
        }}>{mechanic.tag}</div>
      )}
      <div style={{
        width: '44px', height: '44px', borderRadius: '12px',
        background: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '14px',
      }}>
        <mechanic.Icon size={22} color={isActive ? '#ffffff' : '#8b7db5'} strokeWidth={1.75} />
      </div>
      <h3 style={{ color: '#ffffff', fontSize: '17px', fontWeight: 700, marginBottom: '10px' }}>{mechanic.name}</h3>
      <p style={{ color: isActive ? 'rgba(255,255,255,0.8)' : '#8b7db5', fontSize: '13px', lineHeight: 1.6 }}>{mechanic.desc}</p>
    </div>
  )
}
