import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiPython, SiMysql, SiGit, SiLinux, SiSupabase, SiFirebase } from 'react-icons/si'
import { Shield, Brain, Database, Table2, BarChart2, Cloud, Cpu, Network, BarChart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCountUp } from '../hooks/useCountUp'
import { useTextScramble } from '../hooks/useTextScramble'
import { aboutBio } from '../data/portfolioData'

const TECH_GRID = [
  { Icon: SiPython,   name: 'Python',       color: '#3776AB', bg: 'rgba(55,118,171,0.12)' },
  { Icon: SiMysql,    name: 'SQL',           color: '#4479A1', bg: 'rgba(68,121,161,0.12)' },
  { Icon: Database,   name: 'Oracle APEX',   color: '#F80000', bg: 'rgba(248,0,0,0.10)' },
  { Icon: Table2,     name: 'Excel',         color: '#217346', bg: 'rgba(33,115,70,0.12)' },
  { Icon: SiGit,      name: 'Git',           color: '#F05032', bg: 'rgba(240,80,50,0.12)' },
  { Icon: SiLinux,    name: 'Linux',         color: '#FCC624', bg: 'rgba(252,198,36,0.12)' },
  { Icon: BarChart2,  name: 'Power BI',      color: '#F2C811', bg: 'rgba(242,200,17,0.12)' },
  { Icon: Shield,     name: 'Cybersecurity', color: '#06b6d4', bg: 'rgba(6,182,212,0.12)' },
  { Icon: SiSupabase, name: 'Supabase',      color: '#3ECF8E', bg: 'rgba(62,207,142,0.12)' },
  { Icon: SiFirebase, name: 'Firebase',      color: '#FFCA28', bg: 'rgba(255,202,40,0.12)' },
  { Icon: Cpu,        name: 'C#',            color: '#9B4F96', bg: 'rgba(155,79,150,0.12)' },
  { Icon: Cpu,        name: 'C++',           color: '#00599C', bg: 'rgba(0,89,156,0.12)' },
  { Icon: Network,    name: 'Huawei eNSP',   color: '#CF0A2C', bg: 'rgba(207,10,44,0.10)' },
  { Icon: BarChart,   name: 'Data Analysis', color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)' },
  { Icon: Brain,      name: 'Visual Basic',  color: '#5C3EE8', bg: 'rgba(92,62,232,0.12)' },
]

/* Animated count stat */
function CountStat({ target, suffix = '', label, isDark, delay = 0 }) {
  const { count, ref } = useCountUp(target, { duration: 1600, startDelay: delay })
  return (
    <div
      ref={ref}
      className={`p-4 rounded-xl border text-center relative overflow-hidden group transition-all duration-300 ${
        isDark
          ? 'bg-dark-surface border-dark-border hover:border-indigo-500/40'
          : 'bg-white border-light-border shadow-card-light hover:border-indigo-200'
      }`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <p className="gradient-text text-2xl font-black font-mono">
        {count}{suffix}
      </p>
      <p className={`text-xs mt-1 font-medium ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{label}</p>
    </div>
  )
}

/* Scramble heading */
function ScrambleHeading({ text, isDark }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { output, trigger } = useTextScramble(text, { duration: 600, triggerOnMount: false })

  // Fire scramble once when visible
  const fired = useRef(false)
  if (isInView && !fired.current) {
    fired.current = true
    trigger()
  }

  return (
    <h2
      ref={ref}
      className={`gradient-text section-heading cursor-default select-none`}
      onMouseEnter={trigger}
    >
      {output || text}
    </h2>
  )
}

/* Animated code block — lines appear one by one */
const CODE_LINES = [
  { text: "university: ", value: '"Universiti Teknologi PETRONAS"', vColor: 'emerald' },
  { text: "program: ",    value: '"B.Sc. Information Technology"',  vColor: 'emerald' },
  { text: "scholarship: ", value: '"MARA"',                          vColor: 'yellow' },
  { text: "interests: ",  value: '["Cybersecurity", "Data", "Leadership"]', vColor: 'purple' },
]

const V_COLOR = {
  emerald: 'text-emerald-400',
  yellow: 'text-yellow-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
}

function AnimatedCodeBlock({ isDark }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className={`rounded-xl border overflow-hidden ${
        isDark ? 'bg-dark-surface border-dark-border' : 'bg-gray-50 border-light-border'
      }`}
    >
      {/* Terminal title bar */}
      <div
        className={`flex items-center gap-1.5 px-4 py-2.5 border-b ${
          isDark ? 'bg-dark-card border-dark-border' : 'bg-white border-light-border'
        }`}
      >
        {['bg-red-400/70','bg-yellow-400/70','bg-green-400/70'].map(c => (
          <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
        ))}
        <span className={`ml-2 text-xs font-mono ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          firdaus.config.ts
        </span>
      </div>
      {/* Code body */}
      <div className="p-4 space-y-1 font-mono text-xs">
        <p className={isDark ? 'text-indigo-400' : 'text-indigo-600'}>const firdaus = &#123;</p>
        {CODE_LINES.map((line, i) => (
          <motion.p
            key={line.text}
            initial={{ opacity: 0, x: -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.35 }}
            className={`pl-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {line.text}
            <span className={V_COLOR[line.vColor]}>{line.value}</span>
            {i < CODE_LINES.length - 1 ? ',' : ''}
          </motion.p>
        ))}
        <p className={isDark ? 'text-indigo-400' : 'text-indigo-600'}>&#125;</p>
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function About() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-24 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.p
          variants={itemVariants}
          className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3"
        >
          01. About Me
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12">
          <ScrambleHeading text="Who I Am" isDark={isDark} />
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── Left: bio + code block ── */}
          <motion.div variants={itemVariants} className="space-y-6">
            {aboutBio.map((para, i) => (
              <p key={i} className={`text-base leading-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {para}
              </p>
            ))}
            <AnimatedCodeBlock isDark={isDark} />
          </motion.div>

          {/* ── Right: stats + tech grid ── */}
          <div className="space-y-8">
            {/* Count-up stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              <CountStat target={25} suffix="+" label="Events Led"          isDark={isDark} delay={200} />
              <CountStat target={4}          label="Org. Presidencies"      isDark={isDark} delay={300} />
              <CountStat target={3}          label="Hackathon Placements"   isDark={isDark} delay={400} />
              <CountStat target={15} suffix="+" label="Leadership Roles"   isDark={isDark} delay={500} />
            </motion.div>

            {/* Tech bento grid */}
            <motion.div variants={itemVariants}>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-3 font-mono ${
                isDark ? 'text-gray-600' : 'text-gray-400'
              }`}>
                // Technologies &amp; Tools
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {TECH_GRID.map(({ Icon, name, color, bg }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.06, y: -3 }}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border cursor-default transition-all ${
                      isDark
                        ? 'border-dark-border hover:border-indigo-500/40'
                        : 'border-light-border hover:border-indigo-200 shadow-sm'
                    }`}
                    style={{ background: bg }}
                  >
                    <Icon size={13} style={{ color }} className="flex-shrink-0" />
                    <span className={`text-xs font-medium truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
