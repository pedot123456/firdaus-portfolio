import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Helpers ──────────────────────────────────────────────────────────────────
const pause = (ms) => new Promise((res) => setTimeout(res, ms))
const CHARS = '!@#$%&<>[]{}|/\\=+-_0123456789ABCXYZ'

// ─── Crypto-scramble hook ─────────────────────────────────────────────────────
function useCryptoScramble() {
  const [display, setDisplay] = useState('')
  const timerRef   = useRef(null)
  const activeRef  = useRef(true)

  useEffect(() => {
    activeRef.current = true
    return () => {
      activeRef.current = false
      clearTimeout(timerRef.current)
    }
  }, [])

  // Returns a Promise that resolves when the target text is fully revealed
  const scrambleTo = (target) =>
    new Promise((resolve) => {
      clearTimeout(timerRef.current)

      const rand = (ch) =>
        ch === ' ' || ch === '.' || ch === '_'
          ? ch
          : CHARS[Math.floor(Math.random() * CHARS.length)]

      let frame = 0
      const CHAOS = 5  // pure-chaos frames before left→right resolve

      const tick = () => {
        if (!activeRef.current) return
        frame++

        if (frame <= CHAOS) {
          setDisplay(Array.from(target, rand).join(''))
          timerRef.current = setTimeout(tick, 38)
        } else {
          // Resolve characters left-to-right
          let resolved = 0
          const step = () => {
            if (!activeRef.current) return
            if (resolved >= target.length) {
              setDisplay(target)
              resolve()
              return
            }
            setDisplay(
              target.slice(0, resolved) +
              Array.from(target.slice(resolved), rand).join('')
            )
            resolved++
            timerRef.current = setTimeout(step, 21)
          }
          step()
        }
      }
      tick()
    })

  return { display, scrambleTo }
}

// ─── Phase sequence ───────────────────────────────────────────────────────────
const PHASES = [
  { label: 'INIT_PORTFOLIO_V2.0', progress: 30, barMs: 440 },
  { label: 'SECURING_ASSETS...',  progress: 68, barMs: 420 },
  { label: 'ACCESS GRANTED',      progress: 100, barMs: 330 },
]

// ─── SVG FZ Monogram ──────────────────────────────────────────────────────────
function FZMonogram() {
  // Shorthand for path animation props
  const letter = (delay, dur) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration: dur, delay, ease: [0.22, 1, 0.36, 1] },
      opacity:    { duration: 0.01, delay },
    },
    stroke: '#06b6d4',
    strokeWidth: 7,
    strokeLinecap: 'square',
    fill: 'none',
  })

  const bracket = (delay) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration: 0.34, delay, ease: 'easeOut' },
      opacity:    { duration: 0.01, delay },
    },
    stroke: 'rgba(6,182,212,0.3)',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'none',
  })

  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-20 scale-110"
        style={{ background: 'radial-gradient(ellipse at center, #6366f1 0%, #06b6d4 55%, transparent 75%)' }}
      />

      <svg
        viewBox="0 0 240 180"
        className="w-52 h-40 sm:w-64 sm:h-48"
        style={{ filter: 'drop-shadow(0 0 10px rgba(6,182,212,0.5))' }}
      >
        {/* Corner brackets — drawn first, delicate */}
        <motion.path d="M 8,42 L 8,8 L 42,8"          {...bracket(0)} />
        <motion.path d="M 198,8 L 232,8 L 232,42"      {...bracket(0.06)} />
        <motion.path d="M 8,138 L 8,172 L 42,172"      {...bracket(0.12)} />
        <motion.path d="M 198,172 L 232,172 L 232,138" {...bracket(0.18)} />

        {/* Centre divider — subtle dashed */}
        <motion.path
          d="M 114,32 L 114,148"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.55, delay: 0.48, ease: 'easeOut' },
            opacity:    { duration: 0.01, delay: 0.48 },
          }}
          stroke="rgba(99,102,241,0.22)"
          strokeWidth={0.8}
          strokeDasharray="4 5"
          fill="none"
        />

        {/* F — vertical stroke */}
        <motion.path d="M 28,28 L 28,152" {...letter(0.22, 0.62)} />
        {/* F — top bar */}
        <motion.path d="M 28,28 L 98,28"  {...letter(0.42, 0.38)} />
        {/* F — middle bar */}
        <motion.path d="M 28,83 L 78,83"  {...letter(0.58, 0.32)} />

        {/* Z — top bar */}
        <motion.path d="M 132,28 L 212,28"   {...letter(0.50, 0.38)} />
        {/* Z — diagonal */}
        <motion.path d="M 212,28 L 132,152"  {...letter(0.65, 0.58)} />
        {/* Z — bottom bar */}
        <motion.path d="M 132,152 L 212,152" {...letter(0.90, 0.34)} />
      </svg>
    </div>
  )
}

// ─── Glowing progress bar ─────────────────────────────────────────────────────
function GlowProgress({ progress, done }) {
  return (
    <div className="w-64 sm:w-80">
      {/* Track */}
      <div className="relative h-[3px] rounded-full overflow-hidden bg-white/[0.07]">
        {/* Filled portion — width driven by rAF-animated progress state */}
        <div
          className="absolute inset-y-0 left-0 rounded-full overflow-hidden"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6 50%, #06b6d4)',
          }}
        >
          {/* Scanning light — travels within the fill, clipped by overflow-hidden */}
          <motion.div
            className="absolute inset-y-0 w-16"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)' }}
            animate={{ x: ['-4rem', '340%'] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.2 }}
          />
        </div>
      </div>

      {/* Footer labels */}
      <div className="flex justify-between mt-1.5">
        <span className="text-[9px] font-mono tracking-widest text-white/18">SYS_BOOT</span>
        <motion.span
          animate={{ color: done ? '#10b981' : '#06b6d4' }}
          transition={{ duration: 0.4 }}
          className="text-[9px] font-mono font-bold tabular-nums"
        >
          {progress}%
        </motion.span>
      </div>
    </div>
  )
}

// ─── Main Loader ──────────────────────────────────────────────────────────────
export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting]   = useState(false)
  const [done, setDone]         = useState(false)
  const { display: scrambled, scrambleTo } = useCryptoScramble()

  const progressRef = useRef(0)
  const mountedRef  = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  // Smooth eased progress animation; resolves when target is reached
  const animateProgress = (target, ms) =>
    new Promise((resolve) => {
      const start    = progressRef.current
      const t0       = Date.now()
      const step = () => {
        if (!mountedRef.current) return
        const t      = Math.min((Date.now() - t0) / ms, 1)
        const eased  = 1 - Math.pow(1 - t, 3)
        const val    = Math.round(start + (target - start) * eased)
        progressRef.current = val
        setProgress(val)
        if (t < 1) requestAnimationFrame(step)
        else resolve()
      }
      requestAnimationFrame(step)
    })

  // Orchestrate the phase sequence
  useEffect(() => {
    const run = async () => {
      await pause(880)  // let SVG strokes draw before text starts

      for (let i = 0; i < PHASES.length; i++) {
        if (!mountedRef.current) return
        const ph = PHASES[i]
        await scrambleTo(ph.label)
        if (!mountedRef.current) return
        await animateProgress(ph.progress, ph.barMs)
        if (!mountedRef.current) return
        if (i < PHASES.length - 1) await pause(75)
      }

      // "ACCESS GRANTED" fully resolved — wait briefly then vault-exit
      setDone(true)
      await pause(540)
      if (mountedRef.current) setExiting(true)
    }
    run()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="fixed inset-0 z-[10000]">

      {/* ── Loader content & dark overlay ── */}
      <AnimatePresence>
        {!exiting && (
          <motion.div
            key="loader-bg"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-7"
            style={{ background: '#080810' }}
          >
            {/* CSS grid-line texture */}
            <div className="absolute inset-0 grid-lines opacity-35 pointer-events-none" />

            {/* FZ monogram */}
            <FZMonogram />

            {/* Name byline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-[9px] font-mono tracking-[0.5em] uppercase -mt-2"
              style={{ color: 'rgba(255,255,255,0.18)' }}
            >
              // FIRDAUS ZAHIN
            </motion.p>

            {/* Crypto-scramble text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.82, duration: 0.5 }}
              className="h-5 text-xs sm:text-sm font-mono font-bold tracking-[0.22em] tabular-nums"
              style={{ color: done ? '#10b981' : '#06b6d4' }}
            >
              {scrambled || ' '}
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.82, duration: 0.5 }}
            >
              <GlowProgress progress={progress} done={done} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Vault door exit — two panels split apart ── */}
      <AnimatePresence>
        {exiting && (
          <>
            <motion.div
              key="vault-top"
              className="absolute inset-x-0 top-0"
              style={{ height: '50%', background: '#080810' }}
              initial={{ y: 0 }}
              animate={{ y: '-100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 }}
            />
            <motion.div
              key="vault-bottom"
              className="absolute inset-x-0 bottom-0"
              style={{ height: '50%', background: '#080810' }}
              initial={{ y: 0 }}
              animate={{ y: '100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 }}
              onAnimationComplete={onDone}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
