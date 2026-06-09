import { useState, useEffect, useRef } from 'react'
import type { Project } from '../types'

/* ── Static graph data (fixed layout mimicking force-directed output) ── */

const NODES = [
  /* Threat actors — high severity */
  { id: 'ta1', cx: 150, cy: 90,  r: 9, type: 'threat'  as const, delay: 0 },
  { id: 'ta2', cx: 222, cy: 52,  r: 7, type: 'threat'  as const, delay: 300 },
  /* Suspect / intermediary nodes */
  { id: 'su1', cx: 78,  cy: 60,  r: 6, type: 'suspect' as const, delay: 700 },
  { id: 'su2', cx: 202, cy: 132, r: 6, type: 'suspect' as const, delay: 1100 },
  { id: 'su3', cx: 95,  cy: 133, r: 5, type: 'suspect' as const, delay: 500 },
  { id: 'su4', cx: 265, cy: 95,  r: 5, type: 'suspect' as const, delay: 1400 },
  /* Entity / peripheral nodes */
  { id: 'en1', cx: 38,  cy: 100, r: 4, type: 'entity'  as const, delay: 200 },
  { id: 'en2', cx: 55,  cy: 35,  r: 3, type: 'entity'  as const, delay: 900 },
  { id: 'en3', cx: 175, cy: 22,  r: 4, type: 'entity'  as const, delay: 1600 },
  { id: 'en4', cx: 288, cy: 135, r: 3, type: 'entity'  as const, delay: 400 },
  { id: 'en5', cx: 130, cy: 158, r: 3, type: 'entity'  as const, delay: 1200 },
  { id: 'en6', cx: 250, cy: 18,  r: 3, type: 'entity'  as const, delay: 800 },
]

const NODE_MAP = Object.fromEntries(NODES.map((n) => [n.id, n]))

const EDGES = (
  [
    ['ta1', 'su1'], ['ta1', 'su2'], ['ta1', 'su3'], ['ta1', 'ta2'],
    ['ta2', 'su4'], ['ta2', 'en3'], ['ta2', 'en6'],
    ['su1', 'en1'], ['su1', 'en2'],
    ['su3', 'en5'],
    ['su2', 'en4'], ['su4', 'en4'],
  ] as [string, string][]
).map(([a, b], i) => ({
  key: `${a}-${b}`,
  x1: NODE_MAP[a].cx, y1: NODE_MAP[a].cy,
  x2: NODE_MAP[b].cx, y2: NODE_MAP[b].cy,
  delay: i * 200,
}))

const TARGETS = { threats: 3, entities: 26, connections: 18 }

export default function OsinsCard({ project }: { project: Project }) {
  const [counts, setCounts] = useState({ threats: 0, entities: 0, connections: 0 })
  const cardRef = useRef<HTMLElement>(null)

  /* Set --card-accent for badge colour */
  useEffect(() => {
    cardRef.current?.style.setProperty('--card-accent', project.accentColor)
  }, [project.accentColor])

  /* Animated counters on mount */
  useEffect(() => {
    const current = { threats: 0, entities: 0, connections: 0 }
    const timer = setInterval(() => {
      current.threats     = Math.min(current.threats + 1,     TARGETS.threats)
      current.entities    = Math.min(current.entities + 2,    TARGETS.entities)
      current.connections = Math.min(current.connections + 1, TARGETS.connections)
      setCounts({ ...current })
      if (
        current.threats     >= TARGETS.threats &&
        current.entities    >= TARGETS.entities &&
        current.connections >= TARGETS.connections
      ) clearInterval(timer)
    }, 120)
    return () => clearInterval(timer)
  }, [])

  const padded  = String(project.index).padStart(2, '0')
  const hasGit  = !!project.githubUrl && project.githubUrl !== '#'

  return (
    <article ref={cardRef} className="poc-card poc-card--osins">

      {/* ── Header ── */}
      <div className="poc-card__header">
        <span className="project-card__badge" aria-hidden>{padded}</span>
        <div className="poc-card__header-text">
          <h3 className="poc-card__title">{project.title}</h3>
          <p className="poc-card__subtitle">{project.subtitle}</p>
        </div>
        <span className="poc-scan-pill" role="status" aria-label="OSINT analysis running">
          <span className="poc-scan-pill__dot" aria-hidden />
          SCANNING
        </span>
      </div>

      {/* ── Threat visualizer ── */}
      <div className="poc-osins__graph" aria-hidden>
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="osins-heat1" cx="47%" cy="50%" r="38%">
              <stop offset="0%"   stopColor="#EF5350" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#EF5350" stopOpacity="0"    />
            </radialGradient>
            <radialGradient id="osins-heat2" cx="69%" cy="29%" r="30%">
              <stop offset="0%"   stopColor="#FFA726" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#FFA726" stopOpacity="0"    />
            </radialGradient>
            <radialGradient id="osins-heat3" cx="30%" cy="72%" r="25%">
              <stop offset="0%"   stopColor="#FFA726" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#FFA726" stopOpacity="0"    />
            </radialGradient>
          </defs>

          {/* Heat-map layers */}
          <rect width="320" height="180" fill="url(#osins-heat1)" className="poc-osins__heat" />
          <rect width="320" height="180" fill="url(#osins-heat2)" className="poc-osins__heat poc-osins__heat--b" />
          <rect width="320" height="180" fill="url(#osins-heat3)" className="poc-osins__heat poc-osins__heat--c" />

          {/* Edges */}
          {EDGES.map((e) => (
            <line
              key={e.key}
              x1={e.x1} y1={e.y1}
              x2={e.x2} y2={e.y2}
              className="poc-osins__edge"
              style={{ animationDelay: `${e.delay}ms` }}
            />
          ))}

          {/* Nodes */}
          {NODES.map((n) => (
            <circle
              key={n.id}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              className={`poc-osins__node poc-osins__node--${n.type}`}
              style={{ animationDelay: `${n.delay}ms` }}
            />
          ))}
        </svg>
      </div>

      {/* ── Stats row ── */}
      <div className="poc-osins__stats">
        <div className="poc-osins__stat">
          <span className="poc-osins__stat-value poc-osins__stat-value--threat">{counts.threats}</span>
          <span className="poc-osins__stat-label">Threat Actors</span>
        </div>
        <div className="poc-osins__stat-divider" aria-hidden />
        <div className="poc-osins__stat">
          <span className="poc-osins__stat-value">{counts.entities}</span>
          <span className="poc-osins__stat-label">Entities Mapped</span>
        </div>
        <div className="poc-osins__stat-divider" aria-hidden />
        <div className="poc-osins__stat">
          <span className="poc-osins__stat-value">{counts.connections}</span>
          <span className="poc-osins__stat-label">Connections</span>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="poc-card__footer">
        <div className="badge-group">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
        {hasGit && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.06c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
      </div>

    </article>
  )
}
