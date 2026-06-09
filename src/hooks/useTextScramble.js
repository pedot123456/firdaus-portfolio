import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

/**
 * Scrambles text into random characters, then resolves to the real string.
 * Call `trigger()` to start a new scramble cycle.
 */
export function useTextScramble(finalText, { duration = 700, triggerOnMount = false } = {}) {
  const [output, setOutput] = useState(triggerOnMount ? '' : finalText)
  const frameRef = useRef(null)

  const trigger = () => {
    let startTime = null
    const scramble = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const resolvedChars = Math.floor(progress * finalText.length)

      const scrambled = finalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < resolvedChars) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      setOutput(scrambled)
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(scramble)
      } else {
        setOutput(finalText)
      }
    }

    cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(scramble)
  }

  useEffect(() => {
    if (triggerOnMount) trigger()
    return () => cancelAnimationFrame(frameRef.current)
  }, [finalText])

  return { output, trigger }
}
