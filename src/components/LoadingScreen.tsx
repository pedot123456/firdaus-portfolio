import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  onComplete: () => void
}

const LINES = [
  { text: 'initializing portfolio_v2.0', cls: 'cmd' },
  { text: '> loading assets...', cls: 'info' },
  { text: '// muhammad_firdaus_zahin.ts', cls: 'comment' },
]

const TOTAL_MS   = 1400
const STEPS      = 60
const STEP_MS    = TOTAL_MS / STEPS
const INCREMENT  = Math.ceil(100 / STEPS)

export default function LoadingScreen({ onComplete }: Props) {
  const [progress,      setProgress]      = useState(0)
  const [visibleLines,  setVisibleLines]  = useState(0)

  useEffect(() => {
    const lineTimers = LINES.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), i * 300)
    )

    let current = 0
    const progressTimer = setInterval(() => {
      current = Math.min(current + INCREMENT, 100)
      setProgress(current)
      if (current >= 100) {
        clearInterval(progressTimer)
        setTimeout(onComplete, 380)
      }
    }, STEP_MS)

    return () => {
      lineTimers.forEach(clearTimeout)
      clearInterval(progressTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      className="boot-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
    >
      <div className="boot-screen__inner">

        <div className="boot-screen__logo" aria-hidden>FZ</div>

        <div className="boot-screen__terminal" role="status" aria-live="polite">
          {LINES.map(({ text, cls }, i) =>
            i < visibleLines ? (
              <motion.p
                key={i}
                className={`boot-screen__line boot-screen__line--${cls}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
              >
                {cls === 'cmd' && <span className="boot-screen__caret" aria-hidden>❯ </span>}
                {text}
              </motion.p>
            ) : null
          )}
        </div>

        <div className="boot-screen__progress-wrap">
          <span className="boot-screen__percent" aria-hidden>
            {String(progress).padStart(3, ' ')}%
          </span>
          <div className="boot-screen__track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="boot-screen__fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

      </div>
    </motion.div>
  )
}
