'use client'

export default function Footer() {
  return (
    <footer style={{
      background: '#060318',
      borderTop: '1px solid rgba(240,192,64,0.08)',
      padding: '48px 80px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '24px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '10px',
          background: 'linear-gradient(135deg, #3d1f8a, #6b3fd4)',
          border: '1px solid rgba(240,192,64,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px',
        }}>🧞</div>
        <div>
          <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px' }}>
            <span style={{ color: '#ffffff' }}>Loyal</span>
            <span style={{ position: 'relative' }}>
              <span style={{ color: '#f0c040' }}>Genie</span>
              <span aria-hidden style={{
                position: 'absolute', top: '-8px', left: '62%',
                transform: 'translateX(-50%)',
                fontSize: '7px', color: '#f0c040',
                letterSpacing: '2px', whiteSpace: 'nowrap',
              }}>✦✦✦</span>
            </span>
          </div>
          <div style={{ color: '#8b7db5', fontSize: '12px' }}>Magical Interaction for Businesses</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        {[['How It Works', '#how-it-works'], ['Mechanics', '#mechanics'], ['For Business', '#for-business'], ['Get Started', 'https://5ynjgqi81l5.typeform.com/to/acjV4XH4']].map(([link, href]) => (
          <a key={link} href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{ color: '#8b7db5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b7db5')}>
            {link as string}
          </a>
        ))}
      </div>

      <div style={{ color: '#8b7db5', fontSize: '13px' }}>
        © 2026 LoyalGenie · Made with ✨ in India
      </div>
    </footer>
  )
}
