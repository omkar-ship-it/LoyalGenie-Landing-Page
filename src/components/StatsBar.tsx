'use client'


const stats = [
  {
    value: '80%',
    label: 'of future revenue comes from just 20% of existing customers',
    source: 'Gartner',
  },
  {
    value: '5–25×',
    label: 'more expensive to win a new customer than retain one',
    source: 'Bain & Company',
  },
  {
    value: '67%',
    label: 'more spend from loyal customers vs first-time buyers',
    source: 'BIA / Kelsey',
  },
  {
    value: '95%',
    label: 'max profit increase from just a 5% boost in retention',
    source: 'Harvard Business Review',
  },
]

export default function StatsBar() {
  return (
    <div style={{
      background: 'rgba(26,11,75,0.4)',
      borderTop: '1px solid rgba(240,192,64,0.1)',
      borderBottom: '1px solid rgba(240,192,64,0.1)',
      padding: '48px 80px',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px',
      }}>
      {stats.map((s, i) => (
        <div key={i} className="stat-item" style={{ textAlign: 'center', padding: '8px' }}>
          <div style={{
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontWeight: 900,
            color: '#f0c040',
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: '10px',
          }}>{s.value}</div>
          <div style={{ color: '#ffffff', fontSize: '14px', lineHeight: 1.55, marginBottom: '8px' }}>{s.label}</div>
          <div style={{
            display: 'inline-block',
            color: '#6b3fd4',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.5px',
            background: 'rgba(107,63,212,0.12)',
            border: '1px solid rgba(107,63,212,0.25)',
            borderRadius: '20px',
            padding: '2px 10px',
          }}>— {s.source}</div>
        </div>
      ))}
      </div>
    </div>
  )
}
