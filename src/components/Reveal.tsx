import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.25, 0.1, 0.25, 1.0] as const

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  /** Set false to replay the animation every time the element re-enters view. */
  once?: boolean
}

/** Fades + slides a single block up into place the first time it enters the viewport. */
export function Reveal({ children, className, delay = 0, y = 28, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Wraps a grid/list — direct RevealItem children stagger in as the group enters view. */
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}
