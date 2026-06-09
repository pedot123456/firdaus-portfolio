import { useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { Linkedin, Trophy, Medal, Award } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useTextScramble } from '../hooks/useTextScramble'

/* ── Project data with custom-generated icon images ────────────────────── */
const projects = [
  {
    id: 1,
    title: 'BIMTalk',
    role: '1st Runner-Up — Microsoft ASEAN AI Hackathon 2025',
    achievement: '1st Runner-Up',
    achievementColor: 'silver',
    description:
      'Built an AI-powered sign language translator at the Microsoft ASEAN AI for Accessibility hackathon. Leveraged Azure Cognitive Services, OpenCV, and LSTM models to assist users with hearing impairments in real-time communication.',
    tech: ['Python', 'Azure AI', 'OpenCV', 'LSTM', 'React', 'FastAPI'],
    imageSrc: '/icon-bimtalk.png',
    linkedinUrl: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  },
  {
    id: 2,
    title: 'MyUTP++',
    role: 'Top 6 Finalist — CODEXIA 2026',
    achievement: 'Top 6 Finalist',
    achievementColor: 'bronze',
    description:
      'Qualified as a Top 6 Finalist at CODEXIA 2026. Built a comprehensive campus management system using Oracle APEX and SQL, streamlining student services, room bookings, and event coordination.',
    tech: ['Oracle APEX', 'SQL', 'PL/SQL', 'JavaScript'],
    imageSrc: '/icon-myutp.png',
    linkedinUrl: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  },
  {
    id: 3,
    title: 'OSINS',
    role: '5th Place — SECURE NEX Hackathon 2025',
    achievement: '5th Place',
    achievementColor: 'indigo',
    description:
      'Placed 5th at the PETRONAS SECURE NEX Hackathon 2025. Designed and implemented an OSINT tool with Gemini AI integration and D3.js visualisations to map threat actors and enterprise attack surfaces.',
    tech: ['Python', 'Gemini AI', 'D3.js', 'OSINT', 'Cybersecurity'],
    imageSrc: '/icon-osins.png',
    linkedinUrl: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  },
  {
    id: 4,
    title: 'Golden Drops',
    role: '3rd Runner-Up — Oh My Code Competition 2024',
    achievement: '3rd Runner-Up',
    achievementColor: 'indigo',
    description:
      'Served as Assistant Project Director and Lead Developer for a Visual Basic (.NET) desktop application managing waste cooking oil recycling collection and distribution, aligned with SDG 12.',
    tech: ['Visual Basic (.NET)', 'Microsoft Access', 'SQL', 'SDG 12'],
    imageSrc: '/icon-golden-drops.png',
    linkedinUrl: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  },
  {
    id: 5,
    title: 'Perak Airspace',
    role: 'IoT Aircraft Tracking Dashboard',
    achievement: null,
    achievementColor: null,
    description:
      'Built a real-time IoT aircraft tracking dashboard for the Perak airspace using ADS-B data feeds, Streamlit, and pandas. Visualised live flight paths and generated airspace utilisation reports.',
    tech: ['Python', 'Streamlit', 'Pandas', 'IoT', 'Data Visualisation'],
    imageSrc: '/icon-perak-airspace.png',
    linkedinUrl: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  },
  {
    id: 6,
    title: 'Bank Loan Model',
    role: 'ML Classification Model',
    achievement: null,
    achievementColor: null,
    description:
      'Developed a machine learning pipeline in R to predict bank loan approvals with 96.45% accuracy. Applied logistic regression, decision trees, and random forest with full cross-validation.',
    tech: ['R', 'Machine Learning', 'Classification', 'Data Analysis'],
    imageSrc: '/icon-bank-loan.png',
    linkedinUrl: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  },
  {
    id: 7,
    title: 'MUDAH.NYEE',
    role: 'Figma UX Overhaul — E-Commerce Redesign',
    achievement: null,
    achievementColor: null,
    description:
      'Redesigned the MUDAH.MY mobile e-commerce experience in Figma, achieving 98% task completion in user testing. Focused on simplified navigation, trust signals, and accessible typography.',
    tech: ['Figma', 'UX Research', 'Prototyping', 'User Testing'],
    imageSrc: '/icon-mudahnyee.png',
    linkedinUrl: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  },
  {
    id: 8,
    title: 'Secure Multi-Department',
    role: 'Enterprise Network Design & Simulation',
    achievement: null,
    achievementColor: null,
    description:
      'Designed and simulated a fully segmented, secure network infrastructure for a 38-employee multi-department organisation using Cisco Packet Tracer. Implemented VLANs, DHCP/DNS, SSH, SNMP, and Extended ACLs.',
    tech: ['Cisco Packet Tracer', 'VLAN', 'DHCP', 'DNS', 'SSH', 'ACL'],
    imageSrc: '/icon-network.png',
    linkedinUrl: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  },
  {
    id: 9,
    title: 'Personal Finance',
    role: 'Normalised RDBMS — YNAB-inspired Budgeting System',
    achievement: null,
    achievementColor: null,
    description:
      'Architected a fully normalised RDBMS for personal finance tracking inspired by YNAB. Modelled UML entity-relationship diagrams normalised to 3NF with 15+ tables covering accounts, transactions, budgets, and reporting.',
    tech: ['SQL', 'Oracle Database', 'UML/ER Modelling', '3NF', 'DDL'],
    imageSrc: '/icon-finance-db.png',
    linkedinUrl: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  },
]

/* ── Achievement badge config ─────────────────────────────────────────────── */
const ACHIEVEMENT_CONFIG = {
  silver: {
    icon: Trophy,
    style: 'from-slate-300/20 to-slate-400/10 border-slate-400/40 text-slate-300',
    iconColor: '#cbd5e1',
    glow: 'rgba(148,163,184,0.15)',
  },
  bronze: {
    icon: Medal,
    style: 'from-amber-500/20 to-amber-600/10 border-amber-500/40 text-amber-400',
    iconColor: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
  },
  indigo: {
    icon: Award,
    style: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/40 text-indigo-400',
    iconColor: '#818cf8',
    glow: 'rgba(99,102,241,0.15)',
  },
}

/* ── 3-D tilt card hook ───────────────────────────────────────────────────── */
function useTilt() {
  const cardRef = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotX = (-y / (rect.height / 2)) * 6
    const rotY = (x / (rect.width / 2)) * 6
    el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
  }, [])

  const onMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
  }, [])

  return { cardRef, onMouseMove, onMouseLeave }
}

/* ── Single project card ──────────────────────────────────────────────────── */
function ProjectCard({ project, isDark, index }) {
  const config = project.achievementColor
    ? ACHIEVEMENT_CONFIG[project.achievementColor] || ACHIEVEMENT_CONFIG.indigo
    : null
  const { cardRef, onMouseMove, onMouseLeave } = useTilt()
  const AchievementIcon = config?.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`group relative flex flex-col rounded-2xl border overflow-hidden h-full transition-all duration-300 ${
          isDark
            ? 'bg-dark-card border-white/5 hover:border-indigo-500/40 hover:shadow-glow-sm'
            : 'bg-white border-light-border hover:border-indigo-300 shadow-card-light hover:shadow-lg'
        }`}
        style={{
          transition: 'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s',
          ...(config ? { boxShadow: `0 0 0 0 ${config.glow}` } : {}),
        }}
      >
        {/* ── Hover accent line ── */}
        <div
          className={`absolute top-0 left-0 right-0 h-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            config
              ? ''
              : 'bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent'
          }`}
          style={
            config
              ? {
                  background: `linear-gradient(90deg, transparent, ${config.iconColor}, transparent)`,
                }
              : undefined
          }
        />

        {/* ── Image header ── */}
        <div className="h-48 w-full overflow-hidden bg-[#1a1a1a] relative group">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="#1a1a1a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="14" fill="#4b5563">Image Not Found</text></svg>');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80"></div>

          {/* Achievement badge floating on image */}
          {config && project.achievement && (
            <span
              className={`absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border bg-gradient-to-r backdrop-blur-sm ${config.style}`}
            >
              <AchievementIcon size={12} />
              {project.achievement}
            </span>
          )}
        </div>

        {/* ── Card body ── */}
        <div className="p-5 flex-1 flex flex-col gap-3">
          {/* Title */}
          <h3
            className={`text-base font-bold leading-snug tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {project.title}
          </h3>

          {/* Role / Event */}
          {project.role && (
            <p
              className={`text-xs font-mono font-medium ${
                isDark ? 'text-indigo-400/80' : 'text-indigo-500'
              }`}
            >
              {project.role}
            </p>
          )}

          {/* Description */}
          <p
            className={`text-[13px] leading-relaxed flex-1 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div
            className={`flex flex-wrap gap-1.5 pt-3 border-t ${
              isDark ? 'border-white/5' : 'border-light-border'
            }`}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold tracking-wide uppercase ${
                  isDark
                    ? 'bg-indigo-500/8 border border-indigo-500/15 text-indigo-300'
                    : 'bg-indigo-50 border border-indigo-200 text-indigo-600'
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* View on LinkedIn button */}
          <div className="pt-2">
            <a
              href={project.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all duration-300 ${
                isDark
                  ? 'bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-[#7CB9E8] hover:bg-[#0A66C2]/25 hover:border-[#0A66C2]/50 hover:text-white'
                  : 'bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40'
              }`}
            >
              <Linkedin size={14} />
              View on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Scramble section heading ─────────────────────────────────────────────── */
function ScrambleHeading({ text }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { output, trigger } = useTextScramble(text, { duration: 650 })
  const fired = useRef(false)
  if (isInView && !fired.current) {
    fired.current = true
    trigger()
  }
  return (
    <h2
      ref={ref}
      className="gradient-text section-heading cursor-default"
      onMouseEnter={trigger}
    >
      {output || text}
    </h2>
  )
}

/* ── Projects section ─────────────────────────────────────────────────────── */
export default function Projects() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative py-24 ${isDark ? 'bg-dark-surface' : 'bg-gray-50'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      <ScrollReveal>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            Projects &amp; Work
          </p>
          <ScrambleHeading text="Featured Projects" />
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mt-3 mb-4" />
          <p
            className={`text-sm max-w-xl font-mono ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            A curated collection of hackathon wins, data projects, and design
            work.
          </p>
        </motion.div>

        {/* Responsive grid — no category splitters, no watermarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDark={isDark}
              index={index}
            />
          ))}
        </div>

        {/* Bottom divider with GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex items-center gap-3"
        >
          <div
            className={`h-px flex-1 ${
              isDark ? 'bg-white/5' : 'bg-light-border'
            }`}
          />
          <a
            href="https://github.com/firdauszahin"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-mono transition-colors ${
              isDark
                ? 'text-gray-600 hover:text-indigo-400'
                : 'text-gray-400 hover:text-indigo-600'
            }`}
          >
            more on github →
          </a>
          <div
            className={`h-px flex-1 ${
              isDark ? 'bg-white/5' : 'bg-light-border'
            }`}
          />
        </motion.div>
      </div>
      </ScrollReveal>
    </section>
  )
}
