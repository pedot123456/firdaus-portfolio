import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StatsStrip from '../components/StatsStrip'
import ProjectCard from '../components/ProjectCard'
import BlogPostRow from '../components/BlogPostRow'
import SkillsGrid from '../components/SkillsGrid'
import { featuredProjects } from '../data/projects'
import { blogPosts } from '../data/blog'
import { personal } from '../data/personal'

/* ── Social icon components ─────────────────────────────────── */

function IconGitHub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.06c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function IconEmail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function HeroDotGrid() {
  return (
    <svg
      className="hero__dot-grid"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      aria-hidden
    >
      <defs>
        <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.5" fill="var(--cyan)" fillOpacity="0.22" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#hero-dots)" />
    </svg>
  )
}

/* ── Typewriter component ────────────────────────────────────── */

const ROLE_TEXT   = 'IT Undergraduate & Digital Solutions Builder'
const CHAR_DELAY  = 36   // ms per character
const START_DELAY = 420  // ms before first char

function TypewriterText({ text, startDelay }: { text: string; startDelay: number }) {
  const [displayed, setDisplayed] = useState('')
  const [cursorOn,  setCursorOn]  = useState(true)
  const typing = displayed.length < text.length

  /* Type characters one by one */
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null
    const timeoutId = setTimeout(() => {
      let i = 0
      intervalId = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length && intervalId) clearInterval(intervalId)
      }, CHAR_DELAY)
    }, startDelay)
    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, startDelay])

  /* Blink cursor in JS — no @keyframes needed */
  useEffect(() => {
    if (!typing) return
    const id = setInterval(() => setCursorOn((v) => !v), 530)
    return () => clearInterval(id)
  }, [typing])

  return (
    <span>
      {displayed || ' '}
      {typing && cursorOn && (
        <span className="typewriter-cursor" aria-hidden>▋</span>
      )}
    </span>
  )
}

/* ── Badge stagger variants ─────────────────────────────────── */

/* Badges pop in after the typewriter finishes (start delay + type duration) */
const BADGE_DELAY = (START_DELAY + ROLE_TEXT.length * CHAR_DELAY) / 1000 + 0.12

const badgeContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: BADGE_DELAY,
    }
  }
}

const badgeItem = {
  initial: { opacity: 0, scale: 0.72, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  },
}

/* ── Page-level data ────────────────────────────────────────── */

const TECH_BADGES = ['Python', 'SQL', 'Oracle APEX', 'JavaScript', 'Figma', 'C#']

const latestPosts = [...blogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 2)

/* ── Shared fade-up helper ──────────────────────────────────── */

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.52, ease: [0.25, 0.1, 0.25, 1.0] as const, delay },
})

/* ── Page component ─────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">

            <div className="hero__text">
              <motion.p className="hero__eyebrow" {...fadeUp(0.05)}>
                IT Undergraduate · MARA Scholar · UTP
              </motion.p>

              <motion.h1 className="hero__name" {...fadeUp(0.15)}>
                Muhammad<br />Firdaus Zahin
              </motion.h1>

              <motion.p className="hero__role" {...fadeUp(0.28)}>
                <TypewriterText text={ROLE_TEXT} startDelay={START_DELAY} />
              </motion.p>

              <motion.p className="hero__bio" {...fadeUp(0.38)}>
                Motivated Bachelor of IT student at Universiti Teknologi PETRONAS and MARA Scholar.
                I build digital solutions using Oracle APEX, SQL, and Python, and lead large-scale
                university programmes — from orientation weeks for 350+ students to AI accessibility
                hackathons and cybersecurity competitions. Actively seeking an internship from
                September 2026 to April 2027.
              </motion.p>

              {/* Badges stagger in after the typewriter finishes */}
              <motion.div
                className="badge-group hero__badges"
                variants={badgeContainer}
                initial="initial"
                animate="animate"
              >
                {TECH_BADGES.map((tech) => (
                  <motion.span key={tech} className="tech-badge" variants={badgeItem}>
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div className="hero__cta-group" {...fadeUp(0.5)}>
                <Link to="/projects" className="btn btn--primary">
                  View Projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
                <a
                  href={personal.cvPath}
                  download={personal.cvDownloadName}
                  className="btn btn--outline"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download CV
                </a>
              </motion.div>

              <motion.div className="hero__socials" {...fadeUp(0.6)}>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="GitHub profile">
                  <IconGitHub />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn profile">
                  <IconLinkedIn />
                </a>
                <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="Instagram profile">
                  <IconInstagram />
                </a>
                <a href={`mailto:${personal.email}`} className="hero__social" aria-label="Send email">
                  <IconEmail />
                </a>
              </motion.div>
            </div>

            <motion.div
              className="hero__photo-wrap"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.25 }}
            >
              <HeroDotGrid />
              <div className="hero__photo">
                <img src={personal.photo} alt={personal.fullName} />
              </div>
            </motion.div>

          </div>
        </div>

        <div className="hero__scroll-hint" aria-hidden>
          <span>scroll</span>
          <svg
            className="anim-scroll-chevron"
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </section>

      {/* ── 2. Stats Strip ─────────────────────────────────────── */}
      <StatsStrip />

      {/* ── 3. Skills Bento Grid ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SkillsGrid />
        </div>
      </section>

      {/* ── 4. Featured Projects ───────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <p className="section__label">Selected Work</p>
            <h2 className="section__title">Featured Projects</h2>
            <p className="section__subtitle">
              Hackathon builds, student platforms, and AI accessibility tools — each solving a real
              problem under competition pressure.
            </p>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="section__cta">
            <Link to="/projects" className="btn btn--outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── 5. About Strip ─────────────────────────────────────── */}
      <section className="about-strip">
        <div className="container">
          <div className="about-strip__grid">
            <div>
              <p className="about-strip__label">About</p>
              <h2 className="about-strip__heading">
                Building at the intersection of technology, leadership, and community impact.
              </h2>
              <p className="about-strip__body">
                I'm an Information Technology undergraduate at UTP with a Minor in Corporate
                Management, fully funded by MARA. My technical work spans Oracle APEX, SQL, Python,
                and system architecture design — while my leadership track covers presidencies of two
                student organisations, directing events for 350+ participants, and representing 7,000+
                students on the Student Representative Council.
              </p>
              <p className="about-strip__body">
                I'm seeking an internship from September 2026 to April 2027 where I can apply both my
                engineering skills and my structured approach to project delivery in a professional
                environment.
              </p>
              <div className="about-strip__cta-group">
                <Link to="/resume" className="btn btn--ghost">Read Full Resume</Link>
                <Link to="/contact" className="btn btn--ghost">Say Hello</Link>
              </div>
            </div>

            <div className="about-strip__stats">
              {[
                { v: 'MARA',      l: 'Scholarship' },
                { v: '25+',       l: 'Events Directed' },
                { v: 'Sept 2026', l: 'Internship Start' },
              ].map(({ v, l }) => (
                <div key={l} className="about-stat">
                  <p className="about-stat__value">{v}</p>
                  <p className="about-stat__label">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Latest Writing ──────────────────────────────────── */}
      <section className="section section--warm">
        <div className="container">
          <div className="section__header">
            <p className="section__label">Writing</p>
            <h2 className="section__title">Latest from the Blog</h2>
          </div>

          <div className="blog-list">
            {latestPosts.map((post, i) => (
              <BlogPostRow key={post.slug} post={post} position={i + 1} />
            ))}
          </div>

          <div className="section__blog-cta">
            <Link to="/blog" className="btn btn--outline">All Posts →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
