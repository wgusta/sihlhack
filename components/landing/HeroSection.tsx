'use client'

import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [isRevealed, setIsRevealed] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
        }
      },
      { threshold: 0.3 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Background image with historic reveal effect */}
      <div className={cn('historic-reveal absolute inset-0', isRevealed && 'revealed')}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-factory.jpg')`,
            filter: isRevealed
              ? 'grayscale(0%) sepia(0%) contrast(1)'
              : 'grayscale(100%) sepia(20%) contrast(1.1)',
            transition: 'filter 2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
      </div>

      {/* Scanline effect */}
      <div className="scanlines absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 pt-16 sm:pt-0">
          {/* Subtitle */}
          <p className="font-mono text-sm sm:text-base text-insight-cyan tracking-widest uppercase animate-fade-in">
            Der erste teilnehmerorientierte Hackathon der Schweiz
          </p>

          {/* Title */}
          <h1>
            <Logo size="hero" hackColor="white" animated />
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 font-mono animate-fade-in">
            Historische Industriedaten aus dem Sihltal digitalisieren.
            Vergessenes Wissen entdecken. Neue Erkenntnisse gewinnen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in">
            <ButtonLink href="/register" variant="primary" size="lg">
              Jetzt anmelden
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Mehr erfahren
            </ButtonLink>
          </div>

          {/* Stats preview */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/80 font-mono text-sm animate-fade-in">
            <div className="text-center">
              <span className="block text-2xl font-bold text-insight-cyan">150 CHF</span>
              <span className="text-xs text-gray-400">Teilnahmegebühr</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-fund-green">70%</span>
              <span className="text-xs text-gray-400">→ Preisgeld</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-refund-amber">100%</span>
              <span className="text-xs text-gray-400">Rückerstattung möglich</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
