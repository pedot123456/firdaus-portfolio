/** Stats strip: four metrics in DM Serif Display with staggered fadeUp animation. */

const STATS = [
  { value: '2+',   label: 'Years Building' },
  { value: '25+',  label: 'Events Organised' },
  { value: '3+',   label: 'Hackathons Conquered' },
  { value: '350+', label: 'Students Managed' },
]

export default function StatsStrip() {
  return (
    <div className="stats-strip" aria-label="Key statistics">
      <div className="stats-strip__grid">
        {STATS.map(({ value, label }) => (
          <div key={label} className="stat-item">
            <p className="stat-item__number">{value}</p>
            <p className="stat-item__label">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
