'use client'

import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'

// Event date - Sihlhack 3-Day Competition (September 2026)
const EVENT_DATE = new Date('2026-09-12T09:00:00')

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
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Thermal gradient background effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 thermal-gradient opacity-20"
          style={{ filter: 'blur(100px)' }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 pt-24 sm:pt-20 pb-16">
          {/* Tagline */}
          <div className="space-y-3 animate-fade-in">
            <p className="font-mono text-sm sm:text-base text-thermal-orange uppercase tracking-widest">
              3 Tage · Echte Probleme · Keine PowerPoint-Lösungen
            </p>
          </div>

          {/* Logo with reserved space for animation */}
          <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center">
            <h1>
              <Logo size="hero" hackColor="white" animated />
            </h1>
          </div>

          {/* Main Headline - Concise */}
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Server, die Häuser heizen. Batterien, die das Quartier versorgen.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-mono max-w-2xl mx-auto">
              Drei Tage. Ein System. Unendlich viele Möglichkeiten.
            </p>
            <p className="mt-3 text-sm text-gray-400 font-mono">
              Professionelle Sicherheitsüberwachung · <a href="/safety" className="text-thermal-orange hover:underline">Mehr erfahren</a>
            </p>
          </div>

          {/* Key Stats - Condensed 2x2 grid */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto animate-fade-in">
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-thermal-orange">3</div>
              <div className="font-mono text-xs text-gray-400">Tage</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-compute-blue">100</div>
              <div className="font-mono text-xs text-gray-400">Teilnehmer</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-grid-green">CHF 150</div>
              <div className="font-mono text-xs text-gray-400">Teilnahme</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-solar-yellow">20</div>
              <div className="font-mono text-xs text-gray-400">Teams</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in">
            <ButtonLink href="/register" variant="primary" size="lg" className="min-w-[200px] bg-thermal-orange hover:bg-thermal-orange/90">
              Platz sichern
            </ButtonLink>
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
