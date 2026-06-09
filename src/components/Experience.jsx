import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { ChevronDown, Briefcase, Users, Zap, Shield, Calendar, Linkedin } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { experience, personalInfo } from '../data/portfolioData'

const COLOR_CONFIG = {
  indigo: {
    dot: 'bg-indigo-500',
    border: 'border-indigo-500/40',
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    line: '#6366f1',
  },
  purple: {
    dot: 'bg-purple-500',
    border: 'border-purple-500/40',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    line: '#8b5cf6',
  },
  cyan: {
    dot: 'bg-cyan-500',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    line: '#06b6d4',
  },
  emerald: {
    dot: 'bg-emerald-500',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    line: '#10b981',
  },
}

const TYPE_ICONS = {
  Leadership: Users,
  'Project Lead': Zap,
  'Event Director': Shield,
}

function ExperienceCard({ exp, index, isDark, isLast }) {
  const [expanded, setExpanded] = useState(false)
  const config = COLOR_CONFIG[exp.color] || COLOR_CONFIG.indigo
  const Icon = TYPE_ICONS[exp.type] || Briefcase

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-[13px] top-7 bottom-0 w-px opacity-30"
          style={{ background: `linear-gradient(180deg, ${config.line}, transparent)` }}
        />
      )}

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center ${
          isDark ? 'bg-dark-bg border-white/5' : 'bg-light-bg border-light-border'
        }`}
        style={{ borderColor: `${config.line}50` }}
      >
        <div className={`w-2.5 h-2.5 rounded-full ${config.dot}`} />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -2 }}
        className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
          isDark
            ? 'bg-dark-card border-white/5 hover:border-indigo-500/25'
            : 'bg-white border-light-border shadow-card-light hover:border-indigo-200'
        }`}
      >
        <div className="p-5">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${config.bg} ${config.border} ${config.text}`}
                >
                  <Icon size={10} />
                  {exp.type}
                </span>
              </div>
              <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {exp.role}
              </h3>
              <p className={`text-sm font-medium mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {exp.organization}
              </p>
            </div>
            <div
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono ${
                isDark ? 'bg-dark-surface text-gray-500' : 'bg-gray-100 text-gray-500'
              }`}
            >
              <Calendar size={11} />
              {exp.period}
            </div>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setExpanded((p) => !p)}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              isDark ? 'text-gray-500 hover:text-indigo-400' : 'text-gray-400 hover:text-indigo-600'
            }`}
          >
            {expanded ? 'Hide details' : 'View highlights'}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={13} />
            </motion.span>
          </button>

          {/* Expandable highlights */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="highlights"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`} />
                      <p className={`text-sm leading-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {h}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={ref}
      className={`relative py-24 ${isDark ? 'bg-dark-surface' : 'bg-gray-50'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <ScrollReveal>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            03. Leadership & Experience
          </p>
          <h2 className="gradient-text section-heading">Roles &amp; Impact</h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-500 mt-3 mb-4" />
          <p className={`text-base max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Hands-on leadership across university organizations — strategy, execution, and team management at scale.
          </p>
        </motion.div>

        {/* Timeline — top 3 roles */}
        <div className="relative max-w-3xl">
          {experience.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={i}
              isDark={isDark}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 max-w-3xl"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border font-medium text-sm transition-all duration-200 ${
              isDark
                ? 'bg-[#0A66C2]/10 border-[#0A66C2]/30 text-[#70B5F9] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/60'
                : 'bg-[#0A66C2]/5 border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40'
            }`}
          >
            <Linkedin size={16} />
            View all 15+ leadership roles on LinkedIn
            <span className="ml-auto text-xs opacity-60 group-hover:opacity-100 transition-opacity">→</span>
          </a>
        </motion.div>
      </div>
      </ScrollReveal>
    </section>
  )
}
