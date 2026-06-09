import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animates a number from 0 → target when the returned `ref` scrolls into view.
 * Uses cubic ease-out for a snappy feel.
 */
export function useCountUp(target, { duration = 1400, startDelay = 0 } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let rafId
    let startTime = null
    const timeout = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        // cubic ease-out
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * target))
        if (progress < 1) {
          rafId = requestAnimationFrame(step)
        } else {
          setCount(target)
        }
      }
      rafId = requestAnimationFrame(step)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(rafId)
    }
  }, [isInView, target, duration, startDelay])

  return { count, ref }
}
