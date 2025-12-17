'use client'

import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

type LogoSize = 'sm' | 'md' | 'lg' | 'xl' | 'hero'
type HackColor = 'white' | 'black'

interface LogoProps {
  size?: LogoSize
  hackColor?: HackColor
  className?: string
  animated?: boolean
}

const sizeClasses: Record<LogoSize, { sihl: string; hack: string; leading: string }> = {
  sm: {
    sihl: 'text-lg',
    hack: 'text-lg',
    leading: 'leading-[0.85]',
  },
  md: {
    sihl: 'text-2xl',
    hack: 'text-2xl',
    leading: 'leading-[0.85]',
  },
  lg: {
    sihl: 'text-4xl',
    hack: 'text-4xl',
    leading: 'leading-[0.85]',
  },
  xl: {
    sihl: 'text-5xl sm:text-6xl',
    hack: 'text-5xl sm:text-6xl',
    leading: 'leading-[0.85]',
  },
  hero: {
    sihl: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
    hack: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
    leading: 'leading-[0.85]',
  },
}

export function Logo({ size = 'md', hackColor = 'black', className, animated = false }: LogoProps) {
  const sizes = sizeClasses[size]

  // Animation state
  const [sihlText, setSihlText] = useState(animated ? '' : 'sihl')
  const [hackText, setHackText] = useState(animated ? '' : 'hack')
  const [showCursor, setShowCursor] = useState(false)
  const [cursorBlink, setCursorBlink] = useState(true)
  const [phase, setPhase] = useState<'sihl' | 'waiting' | 'hack' | 'done'>(animated ? 'sihl' : 'done')

  useEffect(() => {
    if (!animated) return

    const sihlWord = 'sihl'
    const hackWord = 'hack'

    // Phase 1: Type "sihl" with typewriter effect
    if (phase === 'sihl') {
      let charIndex = 0
      const typeInterval = setInterval(() => {
        if (charIndex < sihlWord.length) {
          setSihlText(sihlWord.slice(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setShowCursor(true)
          setPhase('waiting')
        }
      }, 150) // Typewriter speed for sihl

      return () => clearInterval(typeInterval)
    }

    // Phase 2: Show blinking cursor for 2 seconds
    if (phase === 'waiting') {
      const blinkInterval = setInterval(() => {
        setCursorBlink(prev => !prev)
      }, 530) // Cursor blink rate

      const waitTimeout = setTimeout(() => {
        clearInterval(blinkInterval)
        setCursorBlink(true)
        setPhase('hack')
      }, 2000)

      return () => {
        clearInterval(blinkInterval)
        clearTimeout(waitTimeout)
      }
    }

    // Phase 3: Type "hack" with terminal effect
    if (phase === 'hack') {
      let charIndex = 0
      const typeInterval = setInterval(() => {
        if (charIndex < hackWord.length) {
          setHackText(hackWord.slice(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setShowCursor(false)
          setPhase('done')
        }
      }, 100) // Faster typing for hack (terminal style)

      return () => clearInterval(typeInterval)
    }
  }, [animated, phase])

  return (
    <span className={cn('inline-flex flex-col', sizes.leading, className)}>
      {/* sihl on first row */}
      <span
        className={cn(
          'font-display font-bold text-sihl-red',
          sizes.sihl
        )}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {sihlText}
        {/* Invisible placeholder to maintain width */}
        {animated && phase === 'sihl' && (
          <span className="invisible">{'sihl'.slice(sihlText.length)}</span>
        )}
      </span>
      {/* hack on second row, indented to align h with h in sihl */}
      <span
        className={cn(
          'font-bold tracking-tight',
          hackColor === 'white' ? 'text-white' : 'text-brand-black',
          sizes.hack
        )}
        style={{
          fontFamily: 'var(--font-futuristic)',
          marginLeft: '0.5em',
        }}
      >
        {/* Blinking cursor before hack */}
        {showCursor && phase === 'waiting' && (
          <span
            className={cn(
              'transition-opacity duration-100',
              cursorBlink ? 'opacity-100' : 'opacity-0'
            )}
          >
            _
          </span>
        )}
        {/* hack text with cursor while typing */}
        {(phase === 'hack' || phase === 'done') && (
          <>
            {hackText}
            {phase === 'hack' && (
              <span className="animate-pulse">_</span>
            )}
          </>
        )}
        {/* Invisible placeholder to maintain width */}
        {animated && (phase === 'waiting' || phase === 'hack') && (
          <span className="invisible">
            {phase === 'waiting' ? 'hack' : 'hack'.slice(hackText.length)}
          </span>
        )}
      </span>
    </span>
  )
}
