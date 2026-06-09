import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, MapPin, GraduationCap, Terminal, CheckCircle, Github, Linkedin } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useTypewriter } from '../hooks/useTypewriter'
import { personalInfo } from '../data/portfolioData'

/* ─── Static grid background ─────────────────────────────────────────────── */
function GridBackground({ isDark }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-lines opacity-100" />
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 80% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.10) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

/* ─── Terminal boot badge ─────────────────────────────────────────────────── */
const BOOT_LINES = [
  { text: '> Initializing portfolio.sh', delay: 0 },
  { text: '> Loading profile data...    [OK]', delay: 600 },
  { text: '> MARA Scholar · UTP · IT Undergraduate', delay: 1100 },
]

function TerminalBadge({ isDark }) {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    BOOT_LINES.forEach(({ delay }, i) => {
      const t = setTimeout(() => setVisibleLines(i + 1), delay)
      return () => clearTimeout(t)
    })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-block rounded-xl border px-5 py-3 mb-8 ${
        isDark
          ? 'bg-[#0a0a0a]/80 border-white/5'
          : 'bg-white/80 border-light-border shadow-card-light'
      }`}
      style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Terminal size={12} className="text-indigo-400" />
        <span className={`text-xs font-mono font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          portfolio.sh
        </span>
        <div className="flex gap-1 ml-auto">
          {['bg-red-400/70', 'bg-yellow-400/70', 'bg-green-400/70'].map(c => (
            <div key={c} className={`w-2 h-2 rounded-full ${c}`} />
          ))}
        </div>
      </div>
      <div className="space-y-0.5 min-h-[3.5rem]">
        {BOOT_LINES.map((line, i) => (
          <AnimatePresence key={i}>
            {i < visibleLines && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-xs font-mono ${
                  i === BOOT_LINES.length - 1
                    ? 'text-emerald-400'
                    : isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {line.text}
                {i === BOOT_LINES.length - 1 && (
                  <CheckCircle size={10} className="inline ml-1.5 text-emerald-400" />
                )}
              </motion.p>
            )}
          </AnimatePresence>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Rotating taglines with typewriter ──────────────────────────────────── */
const PHRASES = [
  'Solving real-world problems with code.',
  'Building impactful digital solutions.',
  'Cybersecurity • Data • Innovation.',
  'Available for internship Sept 2026.',
]

function RotatingTagline({ isDark }) {
  const [idx, setIdx] = useState(0)
  const { displayed, done } = useTypewriter(PHRASES[idx], { speed: 38, startDelay: 200 })

  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => setIdx((p) => (p + 1) % PHRASES.length), 2200)
    return () => clearTimeout(t)
  }, [done])

  return (
    <p className={`text-base sm:text-lg font-mono leading-relaxed min-h-[1.75rem] ${
      isDark ? 'text-gray-400' : 'text-gray-600'
    }`}>
      <span className="text-indigo-400 mr-1">$</span>
      {displayed}
      <span className="cursor-blink" />
    </p>
  )
}

/* ─── Stat strip ─────────────────────────────────────────────────────────── */
const HERO_STATS = [
  { value: '25+', label: 'Events Led', color: 'text-indigo-400' },
  { value: '3',   label: 'Hackathon Wins', color: 'text-purple-400' },
  { value: '15+', label: 'Leadership Roles', color: 'text-cyan-400' },
]

function StatStrip({ isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.5 }}
      className={`flex flex-wrap gap-x-8 gap-y-3 mt-10 pt-8 border-t ${
        isDark ? 'border-white/5' : 'border-light-border'
      }`}
    >
      {HERO_STATS.map(({ value, label, color }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 + i * 0.1 }}
          className="flex flex-col"
        >
          <span className={`text-2xl font-black font-mono ${color}`}>{value}</span>
          <span className={`text-xs mt-0.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{label}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

/* ─── Profile photo ───────────────────────────────────────────────────────── */
function ProfilePhoto({ isDark }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-shrink-0 flex justify-center"
    >
      <div className="absolute inset-0 scale-110 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20 blur-3xl pointer-events-none" />

      <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-indigo-500/60 rounded-tl-lg" />
      <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-purple-500/60 rounded-tr-lg" />
      <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-500/60 rounded-bl-lg" />
      <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-indigo-500/60 rounded-br-lg" />

      <div className="relative p-[2px] rounded-[1.75rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500">
        <div className={`rounded-[1.65rem] overflow-hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-100'}`}>
          {imgError ? (
            <div className={`w-64 md:w-80 lg:w-[360px] aspect-[4/5] flex flex-col items-center justify-center gap-4 ${
              isDark ? 'bg-[#0a0a0a]' : 'bg-gray-100'
            }`}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-black">
                FZ
              </div>
              <p className={`text-xs font-mono ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                /assets/headshot.jpg
              </p>
            </div>
          ) : (
            <img
              src="/assets/headshot.jpg"
              alt="Muhammad Firdaus Zahin"
              className="w-64 md:w-80 lg:w-[360px] h-auto object-cover object-top block"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border shadow-lg ${
          isDark
            ? 'bg-[#0a0a0a] border-emerald-500/30 text-emerald-400'
            : 'bg-white border-emerald-300 text-emerald-700 shadow-card-light'
        }`}
        style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Open to internship · Sept 2026
      </motion.div>
    </motion.div>
  )
}

/* ─── Main component ──────────────────────────────────────────────────────── */
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { isDark } = useTheme()
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Background orbs drift upward slowly — creates parallax depth
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  // Content drifts with positive Y offset — floats forward past the background
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  // ['Muhammad', 'Firdaus', 'Zahin']
  const nameWords = personalInfo.name.split(' ')

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark ? 'bg-[#050505]' : 'bg-light-bg'
      }`}
    >
      {/* Layer 1: static grid */}
      <GridBackground isDark={isDark} />

      {/* Layer 2: parallax orbs — move upward at 25% of scroll speed */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: bgY }}
      >
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]"
        />
      </motion.div>

      {/* Layer 3: content — positive Y parallax (floats forward) */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28"
        style={{ y: contentY }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">

          {/* ── Left: text content ── */}
          <div className="flex-1 lg:max-w-[600px]">
            <TerminalBadge isDark={isDark} />

            {/* Agency-style name: mono prefix · MASSIVE headline · gradient accent */}
            <motion.div custom={0} variants={itemVariants} initial="hidden" animate="visible">
              <h1 className="leading-none mb-4">
                {/* "Muhammad" — tiny mono prefix */}
                <span className={`block text-xs sm:text-sm font-mono font-light tracking-[0.45em] uppercase mb-3 ${
                  isDark ? 'text-white/30' : 'text-gray-400'
                }`}>
                  {nameWords[0]}
                </span>
                {/* "Firdaus" — massive agency headline */}
                <span className={`block text-[4.25rem] sm:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-black tracking-tighter leading-[0.88] ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {nameWords[1]?.toUpperCase()}
                </span>
                {/* "Zahin" — gradient accent */}
                {nameWords[2] && (
                  <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-black tracking-tight gradient-text leading-[1.2]">
                    {nameWords[2].toUpperCase()}
                  </span>
                )}
              </h1>
              <p className={`text-sm font-light tracking-[0.25em] uppercase mb-6 font-mono ${
                isDark ? 'text-white/20' : 'text-gray-400'
              }`}>
                {personalInfo.lastName}
              </p>
            </motion.div>

            {/* Role pills */}
            <motion.div custom={1} variants={itemVariants} initial="hidden" animate="visible"
              className="flex flex-wrap gap-2 mb-7"
            >
              {[
                { icon: GraduationCap, text: 'IT Undergraduate · UTP', color: 'text-indigo-400' },
                { icon: MapPin, text: 'Perak, Malaysia', color: 'text-cyan-400' },
              ].map(({ icon: Icon, text, color }) => (
                <span
                  key={text}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                    isDark
                      ? 'bg-[#0a0a0a]/80 border-white/5 text-gray-300'
                      : 'bg-white/80 border-light-border text-gray-700 shadow-sm'
                  }`}
                  style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
                >
                  <Icon size={14} className={color} />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* Typewriter tagline */}
            <motion.div custom={2} variants={itemVariants} initial="hidden" animate="visible"
              className="mb-9"
            >
              <RotatingTagline isDark={isDark} />
            </motion.div>

            {/* CTA buttons */}
            <motion.div custom={3} variants={itemVariants} initial="hidden" animate="visible"
              className="flex flex-wrap gap-3"
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary px-7 py-3.5 text-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects →
              </motion.button>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  isDark
                    ? 'border-white/5 text-gray-300 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/5'
                    : 'border-light-border text-gray-700 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={16} /> GitHub
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  isDark
                    ? 'border-[#0A66C2]/30 text-[#70B5F9] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/60'
                    : 'border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2]/10'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin size={16} /> LinkedIn
              </motion.a>
            </motion.div>

            <StatStrip isDark={isDark} />
          </div>

          {/* ── Right: profile photo ── */}
          <ProfilePhoto isDark={isDark} />
        </div>
      </motion.div>

      {/* Bottom gradient — seamlessly fades into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-20"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, transparent, #050505)'
            : 'linear-gradient(to bottom, transparent, #f8f8ff)',
        }}
      />

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors z-30 ${
          isDark ? 'text-gray-700 hover:text-gray-500' : 'text-gray-300 hover:text-gray-500'
        }`}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-mono">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
