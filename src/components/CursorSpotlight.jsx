import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

/**
 * A radial-gradient glow that follows the cursor — gives the page a "lit"
 * premium feel without distracting from content.  Dark-mode only.
 */
export default function CursorSpotlight() {
  const { isDark } = useTheme()
  const spotRef = useRef(null)
  const pos = useRef({ x: -500, y: -500 })
  const rafRef = useRef(null)

  useEffect(() => {
    if (!isDark) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    // Smooth interpolation so it lags slightly behind the cursor
    let current = { x: -500, y: -500 }
    const tick = () => {
      current.x += (pos.current.x - current.x) * 0.08
      current.y += (pos.current.y - current.y) * 0.08
      if (spotRef.current) {
        spotRef.current.style.transform =
          `translate(${current.x - 300}px, ${current.y - 300}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [isDark])

  if (!isDark) return null

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-[600px] h-[600px] rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(99,102,241,0.10) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
