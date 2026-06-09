import { useRef, useEffect } from 'react'
import type { SkillItem } from '../data/skills'

/** Returns the brand SVG icon for a given skill id (40×40 viewBox). */
function SkillIcon({ id, color }: { id: string; color: string }) {
  const dim = { width: 48, height: 48 }

  switch (id) {
    /* ── Python ──────────────────────────────────── */
    case 'python':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <circle cx="14" cy="18" r="12" fill="#3776AB" />
          <circle cx="26" cy="22" r="12" fill="#FFD43B" />
          <circle cx="14" cy="18" r="2.5" fill="white" />
          <circle cx="26" cy="22" r="2.5" fill="#3776AB" />
        </svg>
      )

    /* ── TypeScript ───────────────────────────────── */
    case 'typescript':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <rect x="2" y="2" width="36" height="36" rx="6" fill="#3178C6" />
          <path d="M21 21v-3h9v3h-3v9h-3v-9h-3zm-7 0H7v-3h13v3l-3.5 5.5H20v3H7v-3l3.5-5.5z" fill="white" />
        </svg>
      )

    /* ── JavaScript ──────────────────────────────── */
    case 'javascript':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <rect x="2" y="2" width="36" height="36" rx="6" fill="#F7DF1E" />
          <path d="M10 28l2.5-1.5c.5 1 1 1.7 2 1.7 1 0 1.5-.4 1.5-2.2V17h3v9c0 3.6-2.1 5.2-5.2 5.2-2.8 0-4.4-1.5-5.3-3.2zm11-.3l2.5-1.5c.7 1.2 1.5 2 3.1 2 1.3 0 2.1-.7 2.1-1.6 0-1.1-.8-1.5-2.2-2.1l-.8-.3c-2.2-.9-3.7-2.1-3.7-4.5 0-2.2 1.7-3.9 4.4-3.9 1.9 0 3.3.7 4.3 2.4l-2.4 1.5c-.5-.9-1-.5-1.9-.5-.9 0-1.4.6-1.4 1.3 0 .9.6 1.3 1.9 1.8l.8.3c2.6 1.1 4.1 2.2 4.1 4.7 0 2.7-2.1 4.1-4.9 4.1-2.8 0-4.5-1.3-5.4-3.2z" fill="#333" />
        </svg>
      )

    /* ── SQL / Database ──────────────────────────── */
    case 'sql':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <ellipse cx="20" cy="10" rx="14" ry="5" fill={color} />
          <path d="M6 10v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8c0 2.8-6.3 5-14 5S6 12.8 6 10z" fill={color} opacity=".85" />
          <path d="M6 18v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8c0 2.8-6.3 5-14 5S6 20.8 6 18z" fill={color} opacity=".7" />
          <ellipse cx="20" cy="10" rx="14" ry="5" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="20" cy="18" rx="14" ry="5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </svg>
      )

    /* ── Oracle APEX ─────────────────────────────── */
    case 'oracle':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <rect x="2" y="2" width="36" height="36" rx="6" fill="#F80000" />
          <ellipse cx="20" cy="20" rx="14" ry="6" fill="white" />
          <ellipse cx="20" cy="20" rx="9" ry="6" fill="#F80000" />
        </svg>
      )

    /* ── R ───────────────────────────────────────── */
    case 'r':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <circle cx="20" cy="20" r="18" fill="#276DC3" opacity=".15" />
          <circle cx="20" cy="20" r="14" fill="#276DC3" />
          <path d="M14 10h7c3.3 0 5.5 1.8 5.5 5 0 2.2-1.2 3.8-3.1 4.5l3.6 6.5h-3.5l-3.2-6H17v6h-3V10zm3 2.5v5h3.5c1.7 0 2.8-.9 2.8-2.5s-1.1-2.5-2.8-2.5H17z" fill="white" />
        </svg>
      )

    /* ── VB .NET ──────────────────────────────────── */
    case 'vbnet':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <rect x="2" y="2" width="36" height="36" rx="6" fill="#512BD4" />
          <path d="M20 8l12 7v14l-12 7-12-7V15z" fill="none" stroke="white" strokeWidth="2" />
          <path d="M20 8v30M8 15l12 7 12-7" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
        </svg>
      )

    /* ── HTML / CSS ──────────────────────────────── */
    case 'html':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <path d="M4 4l3 30 13 4 13-4 3-30z" fill="#E34F26" />
          <path d="M20 35.5V8.5h10.5l-2.5 22z" fill="#EF652A" />
          <path d="M20 15h-8l.5 5H20v5h-7.5l.5 4.5 7 2v5.3l-9.5-2.8L9 13.5H20v1.5zm0 0v5h7.5l-.7 8.5-6.8 2v-5l4.5-1.3.3-4.2H20z" fill="white" />
        </svg>
      )

    /* ── React ───────────────────────────────────── */
    case 'react':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
          <ellipse cx="20" cy="20" rx="18" ry="6.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="20" cy="20" rx="18" ry="6.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="18" ry="6.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 20 20)" />
        </svg>
      )

    /* ── Streamlit ───────────────────────────────── */
    case 'streamlit':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <path d="M20 6L36 28H4z" fill="#FF4B4B" />
          <path d="M12 22l8-8 8 8-8 8z" fill="white" opacity=".9" />
          <circle cx="20" cy="20" r="4" fill="#FF4B4B" />
        </svg>
      )

    /* ── Pandas ──────────────────────────────────── */
    case 'pandas':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <rect x="9" y="4" width="7" height="32" rx="3.5" fill="#1F77B4" />
          <rect x="24" y="4" width="7" height="32" rx="3.5" fill="#1F77B4" />
          <rect x="9" y="14" width="22" height="12" rx="2" fill="#E70488" />
        </svg>
      )

    /* ── Azure ───────────────────────────────────── */
    case 'azure':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <path d="M16 6l-12 22h8l4-8 8 14H36z" fill="#0078D4" />
          <path d="M22 6l8 14-8 4-4-8z" fill="#50E6FF" opacity=".8" />
        </svg>
      )

    /* ── Cisco ───────────────────────────────────── */
    case 'cisco':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <rect x="2"  y="14" width="5" height="12" rx="2.5" fill="#1BA0D7" />
          <rect x="10" y="10" width="5" height="20" rx="2.5" fill="#1BA0D7" />
          <rect x="18" y="7"  width="5" height="26" rx="2.5" fill="#1BA0D7" />
          <rect x="26" y="10" width="5" height="20" rx="2.5" fill="#1BA0D7" />
          <rect x="34" y="14" width="5" height="12" rx="2.5" fill="#1BA0D7" opacity=".5"/>
        </svg>
      )

    /* ── Git ─────────────────────────────────────── */
    case 'git':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <path d="M36.3 18.2L21.8 3.7a2.5 2.5 0 0 0-3.6 0L3.7 18.2a2.5 2.5 0 0 0 0 3.6l14.5 14.5c1 1 2.6 1 3.6 0L36.3 21.8c1-1 1-2.6 0-3.6z" fill="#F05032" />
          <circle cx="20" cy="26" r="3" fill="white" />
          <circle cx="28" cy="14" r="3" fill="white" />
          <circle cx="12" cy="14" r="3" fill="white" />
          <path d="M20 23v-5m0-4V10M17 14h-2M23 14h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      )

    /* ── Figma ───────────────────────────────────── */
    case 'figma':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <rect x="10" y="4"  width="10" height="10" rx="5" fill="#F24E1E" />
          <rect x="20" y="4"  width="10" height="10" rx="5" fill="#FF7262" />
          <rect x="10" y="15" width="10" height="10" rx="5" fill="#A259FF" />
          <rect x="10" y="26" width="10" height="10" rx="5" fill="#0ACF83" />
          <circle cx="25" cy="20" r="5" fill="#1ABCFE" />
        </svg>
      )

    /* ── Excel ───────────────────────────────────── */
    case 'excel':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <rect x="2" y="2" width="36" height="36" rx="6" fill="#217346" />
          <path d="M14 10L20 20l6-10h4L22 22l8 12h-4l-6-10-6 10h-4l8-12-8-12h4z" fill="white" />
        </svg>
      )

    /* ── Canva ───────────────────────────────────── */
    case 'canva':
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <circle cx="20" cy="20" r="18" fill="#7D2AE8" />
          <path d="M26.5 16a8 8 0 1 0 0 8h-3a5 5 0 1 1 0-8h3z" fill="white" />
          <circle cx="26.5" cy="20" r="2.5" fill="#00C4CC" />
        </svg>
      )

    default:
      return (
        <svg {...dim} viewBox="0 0 40 40" aria-hidden>
          <circle cx="20" cy="20" r="16" fill={color} opacity=".8" />
        </svg>
      )
  }
}

interface Props {
  skill: SkillItem
  delay?: number
}

export default function SkillCard({ skill, delay = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  /* Set animation-delay imperatively to avoid inline-style lint */
  useEffect(() => {
    cardRef.current?.style.setProperty('--anim-delay', `${delay}ms`)
  }, [delay])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  function handleMouseEnter() {
    cardRef.current?.style.setProperty('--spotlight', '1')
  }

  function handleMouseLeave() {
    cardRef.current?.style.setProperty('--spotlight', '0')
  }

  return (
    <div
      ref={cardRef}
      className={`skill-card skill-card--${skill.id}`}
      title={`${skill.name} · ${skill.category}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-card__spotlight" aria-hidden />
      <div className="skill-card__icon">
        <SkillIcon id={skill.id} color={skill.color} />
      </div>
      <span className="skill-card__name">{skill.name}</span>
    </div>
  )
}
