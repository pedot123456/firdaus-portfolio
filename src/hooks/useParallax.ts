import { useRef } from 'react'
import { useScroll, useTransform, type MotionValue } from 'framer-motion'

type ScrollOffset = ['start start', 'end start'] | ['start end', 'end start']

interface ParallaxResult<T extends HTMLElement> {
  ref: React.RefObject<T>
  scrollYProgress: MotionValue<number>
  /** Moves from +range% to -range% as the section scrolls through view. */
  y: MotionValue<string>
  /** Inverse of `y` — moves the opposite direction, for a layered depth effect. */
  yInverse: MotionValue<string>
}

/**
 * Drives a lightweight scroll-linked parallax for a section.
 * `range` is the total travel distance in percent (e.g. 20 → moves between +20% and -20%).
 * `offset` controls the scroll window: pinned sections (like the hero, anchored at the
 * top on load) should use 'start start' → 'end start'; sections further down the page
 * should track their full time in the viewport via 'start end' → 'end start'.
 */
export function useParallax<T extends HTMLElement = HTMLElement>(
  range = 20,
  offset: ScrollOffset = ['start end', 'end start']
): ParallaxResult<T> {
  const ref = useRef<T>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const y = useTransform(scrollYProgress, [0, 1], [`${range}%`, `-${range}%`])
  const yInverse = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`])
  return { ref, scrollYProgress, y, yInverse }
}
