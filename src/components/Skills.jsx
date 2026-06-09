import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SiPython, SiMysql, SiGit } from 'react-icons/si'
import { Shield, Database, Briefcase, Brain, Lightbulb, BarChart2, Table2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCountUp } from '../hooks/useCountUp'
import { skills } from '../data/portfolioData'

const ICON_MAP = {
  SiPython: SiPython,
  SiMysql: SiMysql,
  SiOracle: Database,
  SiMicrosoftexcel: Table2,
  SiGit: SiGit,
  SiPowerbi: BarChart2,
  shield: Shield,
  database: Database,
  briefcase: Briefcase,
  brain: Brain,
  lightbulb: Lightbulb,
  barchart: BarChart2,
}

/* ─── Single skill row — system-readout style ─────────────────────────────── */
function SkillRow({ skill, isDark, index }) {
  const barRef = useRef(null)
  const isBarInView = useInView(barRef, { once: true, margin: '-40px' })
  const { count, ref: countRef } = useCountUp(skill.level, { duration: 1200, startDelay: index * 80 })
  const Icon = ICON_MAP[skill.icon] || Brain

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      ref={countRef}
      className={`group p-4 rounded-xl border transition-all duration-200 ${
        isDark
          ? 'bg-dark-card border-dark-border hover:border-indigo-500/30'
          : 'bg-white border-light-border shadow-card-light hover:border-indigo-200'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${skill.color}18` }}
          >
            <Icon size={15} style={{ color: skill.color }} />
          </div>
          <span className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            {skill.name}
          </span>
        </div>
        {/* Animated percentage */}
        <span className="text-xs font-bold font-mono tabular-nums" style={{ color: skill.color }}>
          {count}%
        </span>
      </div>

      {/* Progress track */}
      <div
        ref={barRef}
        className={`relative h-1.5 rounded-full overflow-hidden ${
          isDark ? 'bg-dark-border' : 'bg-gray-100'
        }`}
      >
        {/* Filled bar */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
          initial={{ width: 0 }}
          animate={isBarInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
        />
        {/* Shimmer sweep */}
        {isBarInView && (
          <motion.div
            className="absolute inset-y-0 w-16 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            }}
            initial={{ left: '-4rem' }}
            animate={{ left: `${skill.level}%` }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
          />
        )}
      </div>
    </motion.div>
  )
}

/* ─── Competency chip ─────────────────────────────────────────────────────── */
const COMPETENCIES = [
  { label: 'Project Management', icon: Briefcase, color: '#10b981' },
  { label: 'Critical Thinking',  icon: Brain,     color: '#f59e0b' },
  { label: 'Team Leadership',    icon: Shield,    color: '#6366f1' },
  { label: 'Event Management',   icon: BarChart2, color: '#ec4899' },
  { label: 'Data Analysis',      icon: Database,  color: '#8b5cf6' },
  { label: 'Problem Solving',    icon: Lightbulb, color: '#06b6d4' },
]

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function Skills() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  // Flatten all skills for global index (drives stagger)
  const allSkills = skills.flatMap((cat) => cat.items)

  return (
    <section
      id="skills"
      ref={ref}
      className={`relative py-24 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            03. Skills
          </p>
          <h2 className="gradient-text section-heading">Technical Proficiency</h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 mt-3 mb-4" />
          <p className={`text-sm max-w-xl font-mono ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            // Skills rated by hands-on experience across academics, competitions, and org leadership.
          </p>
        </motion.div>

        {/* Skill categories — each as a column group */}
        <div className="space-y-12 mb-14">
          {skills.map((category, catIdx) => {
            // global start index for this category's items (for stagger)
            const startIdx = skills
              .slice(0, catIdx)
              .reduce((acc, c) => acc + c.items.length, 0)

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                {/* Category divider */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-[0.25em] ${
                      isDark ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    // {category.category}
                  </span>
                  <div className={`flex-1 h-px ${isDark ? 'bg-dark-border' : 'bg-light-border'}`} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                  {category.items.map((skill, i) => (
                    <SkillRow
                      key={skill.name}
                      skill={skill}
                      isDark={isDark}
                      index={startIdx + i}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Core competencies strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.25em] ${
              isDark ? 'text-gray-600' : 'text-gray-400'
            }`}>
              // Core Competencies
            </span>
            <div className={`flex-1 h-px ${isDark ? 'bg-dark-border' : 'bg-light-border'}`} />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {COMPETENCIES.map(({ label, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all ${
                  isDark
                    ? 'bg-dark-surface border-dark-border text-gray-300 hover:border-indigo-500/40'
                    : 'bg-white border-light-border text-gray-700 shadow-sm hover:border-indigo-200'
                }`}
              >
                <Icon size={13} style={{ color }} />
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
