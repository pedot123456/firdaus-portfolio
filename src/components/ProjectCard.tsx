import { useState, useRef, useEffect, useId } from 'react'
import { motion } from 'framer-motion'
import { Activity, Database, Shield, Radio, BarChart2, Layers } from 'lucide-react'
import type { Project } from '../types'
import { personal } from '../data/personal'

/* ─── Animated project badge ─────────────────────────────────────────────── */
type Theme = NonNullable<Project['theme']>

const BADGE_CONFIG: Record<Theme, {
  icon: React.ReactNode
  animate: Record<string, unknown>
  transition: Record<string, unknown>
  bg: string
}> = {
  ai: {
    icon: <Activity size={20} className="text-white" />,
    animate: { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] },
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    bg: 'bg-blue-600',
  },
  campus: {
    icon: <Database size={20} className="text-white" />,
    animate: { y: [-2, 2, -2] },
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    bg: 'bg-orange-600',
  },
  cyber: {
    icon: <Shield size={20} className="text-white" />,
    animate: { rotate: 360 },
    transition: { duration: 4, repeat: Infinity, ease: 'linear' },
    bg: 'bg-green-700',
  },
  iot: {
    icon: <Radio size={20} className="text-white" />,
    animate: { opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] },
    transition: { duration: 1.5, repeat: Infinity },
    bg: 'bg-purple-600',
  },
  data: {
    icon: <BarChart2 size={20} className="text-white" />,
    animate: { scaleY: [0.8, 1.2, 0.8] },
    transition: { duration: 2, repeat: Infinity },
    bg: 'bg-teal-600',
  },
  design: {
    icon: <Layers size={20} className="text-white" />,
    animate: { y: [-1, 3, -1] },
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    bg: 'bg-pink-600',
  },
}

function AnimatedProjectGraphic({ theme }: { theme: Theme }) {
  const cfg = BADGE_CONFIG[theme] ?? BADGE_CONFIG.campus
  return (
    <motion.div
      className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full shadow-lg ${cfg.bg}`}
      animate={cfg.animate as Record<string, unknown[]>}
      transition={cfg.transition}
    >
      {cfg.icon}
    </motion.div>
  )
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */
interface Props { project: Project }

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

function DotPattern({ color }: { color: string }) {
  const uid = useId()
  const dotsId = `${uid}-dots`
  const diagId  = `${uid}-diag`
  return (
    <svg className="project-card__dot-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <pattern id={dotsId} x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="9" cy="9" r="1.2" fill={color} fillOpacity="0.18" />
        </pattern>
        <pattern id={diagId} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 20L20 0" stroke={color} strokeOpacity="0.07" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${dotsId})`} />
      <rect width="100%" height="100%" fill={`url(#${diagId})`} />
    </svg>
  )
}

/* ── Inline icon components ──────────────────────────────────────────────── */
function IconGitHub() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.06c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function IconExternal() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function isSpecificGithubRepo(url: string | undefined): url is string {
  if (!url || url === '#') return false
  if (!url.startsWith('https://github.com/')) return false
  return url.replace('https://github.com/', '').includes('/')
}

/* ─── Card ───────────────────────────────────────────────────────────────── */
export default function ProjectCard({ project }: Props) {
  const {
    id, title, subtitle, description,
    technologies, accentColor, theme,
    githubUrl, liveUrl, linkedinUrl, imageSrc,
  } = project

  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    el.style.setProperty('--card-accent', accentColor)
    el.style.setProperty('--card-glow', hexToRgba(accentColor, 0.28))
  }, [accentColor])

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  function handleMouseEnter() { cardRef.current?.style.setProperty('--spotlight', '1') }
  function handleMouseLeave() { cardRef.current?.style.setProperty('--spotlight', '0') }

  const [imgFailed, setImgFailed] = useState(false)
  useEffect(() => { setImgFailed(false) }, [imageSrc])
  const showImage = !!imageSrc && !imgFailed

  /* CTA logic */
  const hasSpecificGitHub = isSpecificGithubRepo(githubUrl)
  const hasLinkedIn = typeof linkedinUrl === 'string' && linkedinUrl !== '#'
  const hasLive     = typeof liveUrl     === 'string' && liveUrl     !== '#'

  let primaryHref:  string
  let primaryLabel: string
  let primaryIcon:  'github' | 'linkedin' | 'external'
  let secondaryHref:  string | null = null
  let secondaryLabel: string | null = null
  let secondaryIcon: 'github' | 'linkedin' | 'external' | null = null

  if (hasSpecificGitHub) {
    primaryHref  = githubUrl!
    primaryLabel = 'View Code on GitHub'
    primaryIcon  = 'github'
    if (hasLinkedIn) {
      secondaryHref  = linkedinUrl!
      secondaryLabel = 'View on LinkedIn'
      secondaryIcon  = 'linkedin'
    } else if (hasLive) {
      secondaryHref  = liveUrl!
      secondaryLabel = 'Live Demo'
      secondaryIcon  = 'external'
    }
  } else if (hasLinkedIn) {
    primaryHref  = linkedinUrl!
    primaryLabel = 'View on LinkedIn'
    primaryIcon  = 'linkedin'
    if (hasLive) {
      secondaryHref  = liveUrl!
      secondaryLabel = 'Live Demo'
      secondaryIcon  = 'external'
    }
  } else if (hasLive) {
    primaryHref  = liveUrl!
    primaryLabel = 'View Project'
    primaryIcon  = 'external'
  } else {
    primaryHref  = personal.linkedin
    primaryLabel = 'View on LinkedIn'
    primaryIcon  = 'linkedin'
  }

  return (
    <article
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight gradient that follows the cursor */}
      <div className="project-card__spotlight" aria-hidden />

      {/* ── Visual: project image (with dot-pattern fallback) ── */}
      {showImage ? (
        <div className="project-card__visual project-card__visual--has-image">
          <img
            src={imageSrc}
            alt={`${title} project screenshot`}
            className="project-card__img"
            onError={() => setImgFailed(true)}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="project-card__visual">
          <DotPattern color={accentColor} />
        </div>
      )}

      {/* ── Body ── */}
      <div className="project-card__body">
        {/* Header: animated badge + title */}
        <div className="project-card__header">
          {theme && <AnimatedProjectGraphic theme={theme} />}
          <div>
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__subtitle-text">{subtitle}</p>
          </div>
        </div>

        <p className="project-card__description">{description}</p>

        <div className="badge-group">
          {technologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-card__footer">
          <div className="project-card__links">
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__cta"
            >
              {primaryIcon === 'github'   ? <IconGitHub />   :
               primaryIcon === 'linkedin' ? <IconLinkedIn /> :
               <IconExternal />}
              {primaryLabel}
            </a>

            {secondaryHref && secondaryLabel && (
              <a
                href={secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                {secondaryIcon === 'github'   ? <IconGitHub />   :
                 secondaryIcon === 'linkedin' ? <IconLinkedIn /> :
                 <IconExternal />}
                {secondaryLabel}
              </a>
            )}
          </div>

          <span className="project-card__accent-dot" aria-hidden />
        </div>
      </div>
    </article>
  )
}
