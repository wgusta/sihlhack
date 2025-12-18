'use client'

import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'
import { cn, formatCHF } from '@/lib/utils'
import { useFunds } from '@/hooks/useFunds'
import { CountdownTimer } from './CountdownTimer'

// Registration deadline - TBD (end of August/beginning of September 2025)
// Using placeholder date for countdown display
const REGISTRATION_DEADLINE = new Date('2025-08-31T23:59:59')

export function HeroSection() {
  const [isRevealed, setIsRevealed] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { funds, isLoading } = useFunds()

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

  // Calculate progress percentage
  const progressPercent = funds
    ? Math.min(100, (funds.participantCount / funds.breakEvenParticipants) * 100)
    : 0
  const isActivated = funds ? funds.participantCount >= funds.breakEvenParticipants : false

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-brand-black"
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
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/40" />
      </div>

      {/* Scanline effect */}
      <div className="scanlines absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 pt-24 sm:pt-20">
          {/* Subtitle */}
          <div className="space-y-3 animate-fade-in">
            <p className="font-mono text-sm sm:text-base text-gray-300">
              Der erste teilnehmerinnen-fokussierte Hackathon der Schweiz
            </p>
          </div>

          {/* Logo */}
          <h1>
            <Logo size="hero" hackColor="white" animated />
          </h1>

          {/* Main Headline - Historical Data + Modern AI */}
          <div className="max-w-4xl mx-auto animate-fade-in mt-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              <span className="text-historic-cream">Historische Industriedaten</span>
              {' '}treffen auf{' '}
              <span className="text-insight-cyan">moderne KI</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-300 font-mono">
              Trainiere ML-Modelle auf echten Archivdokumenten aus dem Sihltal.
              OCR, Computer Vision, NLP: löse Probleme, die noch niemand gelöst hat.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              LIVE POT TRACKER - The key conversion element
              ═══════════════════════════════════════════════════════════════ */}
          <div className="max-w-2xl mx-auto mt-16 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {/* Pot Tracker Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-3 h-3 rounded-full",
                    isActivated ? "bg-fund-green animate-pulse" : "bg-refund-amber animate-pulse"
                  )} />
                  <span className="font-mono text-sm text-gray-400 uppercase tracking-wide">
                    Live Preisgeld-Tracker
                  </span>
                </div>
                {!isLoading && funds && (
                  <span className="font-mono text-xs text-gray-500">
                    Aktualisiert in Echtzeit
                  </span>
                )}
              </div>

              {/* Current Prize Pool - Big Number */}
              <div className="text-center mb-6">
                {isLoading ? (
                  <div className="h-16 bg-white/10 rounded animate-pulse" />
                ) : (
                  <>
                    <div className="font-mono text-5xl sm:text-6xl font-bold text-fund-green tabular-nums">
                      {formatCHF(funds?.prizePoolChf || 0)}
                    </div>
                    <p className="text-sm font-mono text-gray-400 mt-2">
                      Aktueller Preisgeld-Pool
                    </p>
                  </>
                )}
              </div>

              {/* Progress Bar toward Activation */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                  <span>{funds?.participantCount || 0} Teilnehmerinnen und Teilnehmer</span>
                  <span>Ziel: {funds?.breakEvenParticipants || 20} für Aktivierung</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-1000 ease-out",
                      isActivated
                        ? "bg-gradient-to-r from-fund-green to-insight-cyan"
                        : "bg-gradient-to-r from-refund-amber to-industrial-gold"
                    )}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Status Message */}
              <div className={cn(
                "text-center py-2 px-4 rounded-lg font-mono text-sm",
                isActivated
                  ? "bg-fund-green/20 text-fund-green"
                  : "bg-refund-amber/20 text-refund-amber"
              )}>
                {isActivated ? (
                  <>✓ Event aktiviert! Jede weitere Anmeldung erhöht den Pool.</>
                ) : (
                  <>🔒 Noch {(funds?.breakEvenParticipants || 20) - (funds?.participantCount || 0)} Anmeldungen bis zur Aktivierung</>
                )}
              </div>

              {/* Risk-Free Guarantee */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-center font-mono text-xs text-gray-400">
                  <span className="text-fund-green">✓ 100% Risikofrei:</span>{' '}
                  Volle Rückerstattung, falls das Aktivierungsziel nicht erreicht wird.
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <CountdownTimer
              targetDate={REGISTRATION_DEADLINE}
              label="Anmeldeschluss"
              className="mt-8"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 animate-fade-in">
            <ButtonLink href="/register" variant="primary" size="lg" className="min-w-[200px]">
              Platz sichern · CHF 480
            </ButtonLink>
            <ButtonLink
              href="#how-it-works"
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
            >
              So funktioniert&apos;s
            </ButtonLink>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 pb-16 text-gray-400 font-mono text-xs animate-fade-in">
            <span>🏛️ Schweizer Daten</span>
            <span>💻 Local AI First</span>
            <span>🔐 Stripe Zahlungen</span>
            <span>📊 Finanzen öffentlich</span>
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
