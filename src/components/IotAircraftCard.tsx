import { useState, useEffect, useRef } from 'react'
import type { Project } from '../types'

interface TelemetryReading {
  icao: string
  altitude: number
  velocity: number
  heading: number
  lat: string
  lon: string
  status: 'NOMINAL' | 'ALERT'
}

const AIRCRAFT_IDS = ['MAS123', 'AXM456', 'BAW789', 'MHY101', 'FDX202']

function makeTelemetry(): TelemetryReading {
  return {
    icao: AIRCRAFT_IDS[Math.floor(Math.random() * AIRCRAFT_IDS.length)],
    altitude: Math.round(27000 + (Math.random() - 0.5) * 8000),
    velocity: Math.round(450 + (Math.random() - 0.5) * 100),
    heading: Math.round(Math.random() * 360),
    lat: (4.386 + (Math.random() - 0.5) * 0.6).toFixed(4),
    lon: (100.977 + (Math.random() - 0.5) * 0.6).toFixed(4),
    status: Math.random() > 0.15 ? 'NOMINAL' : 'ALERT',
  }
}

const ALT_MIN = 23000
const ALT_MAX = 35000
const VEL_MIN = 380
const VEL_MAX = 560

export default function IotAircraftCard({ project }: { project: Project }) {
  const [reading, setReading] = useState<TelemetryReading>(makeTelemetry)
  const [log, setLog] = useState<string[]>([])
  const cardRef = useRef<HTMLElement>(null)
  const logRef = useRef<HTMLDivElement>(null)

  /* Set --card-accent CSS variable for the badge colour */
  useEffect(() => {
    cardRef.current?.style.setProperty('--card-accent', project.accentColor)
  }, [project.accentColor])

  /* Seed terminal with historical entries on mount */
  useEffect(() => {
    const seed = Array.from({ length: 4 }, (_, i) => {
      const t = makeTelemetry()
      const d = new Date(Date.now() - (4 - i) * 1800)
      const ts = d.toLocaleTimeString('en-GB', { hour12: false })
      return `[${ts}] ${t.icao}  ALT:${t.altitude.toLocaleString()}ft  VEL:${t.velocity}kts  HDG:${t.heading}°  ${t.status}`
    })
    setLog(seed)
  }, [])

  /* Live telemetry polling */
  useEffect(() => {
    const timer = setInterval(() => {
      const t = makeTelemetry()
      setReading(t)
      const ts = new Date().toLocaleTimeString('en-GB', { hour12: false })
      setLog((prev) => [
        ...prev.slice(-7),
        `[${ts}] ${t.icao}  ALT:${t.altitude.toLocaleString()}ft  VEL:${t.velocity}kts  HDG:${t.heading}°  ${t.status}`,
      ])
    }, 1800)
    return () => clearInterval(timer)
  }, [])

  /* Auto-scroll terminal to latest entry */
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [log])

  const altPct = Math.min(100, Math.max(0, Math.round(((reading.altitude - ALT_MIN) / (ALT_MAX - ALT_MIN)) * 100)))
  const velPct = Math.min(100, Math.max(0, Math.round(((reading.velocity - VEL_MIN) / (VEL_MAX - VEL_MIN)) * 100)))
  const padded = String(project.index).padStart(2, '0')
  const hasLive = !!project.liveUrl && project.liveUrl !== '#'

  return (
    <article ref={cardRef} className="poc-card poc-card--iot">

      {/* ── Header ── */}
      <div className="poc-card__header">
        <span className="project-card__badge" aria-hidden>{padded}</span>
        <div className="poc-card__header-text">
          <h3 className="poc-card__title">{project.title}</h3>
          <p className="poc-card__subtitle">{project.subtitle}</p>
        </div>
        <span className="poc-live-pill" role="status" aria-label="Live data feed active">
          <span className="poc-live-pill__dot" aria-hidden />
          LIVE
        </span>
      </div>

      {/* ── Telemetry body ── */}
      <div className="poc-iot__body">

        {/* Gauge bars */}
        <div className="poc-iot__gauges">
          <div className="poc-iot__gauge">
            <div className="poc-iot__gauge-row">
              <span className="poc-iot__gauge-label">ALTITUDE</span>
              <span className="poc-iot__gauge-value">{reading.altitude.toLocaleString()} ft</span>
            </div>
            <div className="poc-iot__track">
              <div className="poc-iot__fill poc-iot__fill--alt" style={{ width: `${altPct}%` }} />
            </div>
          </div>

          <div className="poc-iot__gauge">
            <div className="poc-iot__gauge-row">
              <span className="poc-iot__gauge-label">VELOCITY</span>
              <span className="poc-iot__gauge-value">{reading.velocity} kts</span>
            </div>
            <div className="poc-iot__track">
              <div className="poc-iot__fill poc-iot__fill--vel" style={{ width: `${velPct}%` }} />
            </div>
          </div>
        </div>

        {/* Coordinate strip */}
        <div className="poc-iot__coords">
          <span className="poc-iot__coord"><b>LAT</b> {reading.lat}°N</span>
          <span className="poc-iot__coord"><b>LON</b> {reading.lon}°E</span>
          <span className="poc-iot__coord"><b>HDG</b> {reading.heading}°</span>
          <span className={reading.status === 'ALERT' ? 'poc-iot__status poc-iot__status--alert' : 'poc-iot__status poc-iot__status--nominal'}>
            ● {reading.status}
          </span>
        </div>

        {/* Scrolling terminal log */}
        <div
          className="poc-iot__terminal"
          ref={logRef}
          aria-live="polite"
          aria-label="Live aircraft telemetry feed"
        >
          {log.length === 0 ? (
            <span className="poc-iot__terminal-waiting">Connecting to OpenSky Network API…</span>
          ) : (
            log.map((line, i) => (
              <div
                key={i}
                className={[
                  'poc-iot__line',
                  i === log.length - 1 ? 'poc-iot__line--new' : '',
                  line.includes('ALERT') ? 'poc-iot__line--alert' : '',
                ].join(' ').trim()}
              >
                {line}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="poc-card__footer">
        <div className="badge-group">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
        {hasLive && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Dashboard
          </a>
        )}
      </div>

    </article>
  )
}
