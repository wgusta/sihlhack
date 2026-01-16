'use client'

import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

// Event date - Sihlhack 3-Day Competition
const EVENT_DATE = new Date('2025-09-20T09:00:00')

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
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-brand-black"
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
        <div className="space-y-12 pt-24 sm:pt-20">
          {/* Tagline */}
          <div className="space-y-3 animate-fade-in">
            <p className="font-mono text-sm sm:text-base text-thermal-orange uppercase tracking-widest">
              3-Tage Competition · Dezentrale Energieinfrastruktur · Open Source
            </p>
          </div>

          {/* Logo with reserved space for animation */}
          <div className="min-h-[140px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[260px] flex items-center justify-center">
            <h1>
              <Logo size="hero" hackColor="white" animated />
            </h1>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Baue den Sihlicon Hub
              <br />
              <span className="text-thermal-orange">Demo-Scale Prototypen</span>
              {' '}für dezentrale Energieinfrastruktur
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-300 font-mono max-w-3xl mx-auto">
              3 Tage. 3 Pflicht-Pakete. 30-36 Teams.
              <br />
              Baue funktionierende Prototypen, die Solarstrom in Compute und Wärme verwandeln.
              <br />
              <span className="text-thermal-orange">Open Source. Made in Switzerland.</span>
            </p>
          </div>

          {/* "Für wen" Section */}
          <div className="max-w-4xl mx-auto mt-16 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="font-mono text-sm text-gray-400 uppercase tracking-wide">
                  Für Menschen, die
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Hardware-Tüftler */}
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="font-mono text-thermal-orange font-semibold mb-2">
                    Hardware-Tüftler
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">
                    Du baust gerne mit den Händen. Immersion Cooling, Thermik, Sensoren – 
                    das ist dein Ding. Du willst sehen, wie Wärme tatsächlich aus dem Tank kommt.
                  </p>
                </div>
                
                {/* Software-Builder */}
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-4xl mb-3">💻</div>
                  <h3 className="font-mono text-compute-blue font-semibold mb-2">
                    Software-Builder
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">
                    Du schreibst Code, der etwas bewegt. Grid-OS, APIs, Scheduling – 
                    du willst Systeme bauen, die das Stromnetz stabilisieren.
                  </p>
                </div>
                
                {/* Energie-Visionäre */}
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-mono text-grid-green font-semibold mb-2">
                    Energie-Visionäre
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">
                    Du denkst in LEGs und dezentraler Infrastruktur. Du willst beweisen, 
                    dass lokale Energieautonomie funktioniert.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* "Was wir bauen" Section */}
          <div className="max-w-3xl mx-auto mt-12 animate-fade-in">
            <div className="bg-gradient-to-r from-thermal-orange/20 to-compute-blue/20 border border-white/10 rounded-xl p-6">
              <p className="text-center font-mono text-base text-white mb-4">
                <strong>Wir bauen Demo-Scale Prototypen, die beweisen:</strong>
                <br />
                Solar → Compute → Wärme funktioniert.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">📦</div>
                  <p className="font-mono text-xs text-gray-300">End-to-End Demo-Kit</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <p className="font-mono text-xs text-gray-300">Hardware Safety</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚙️</div>
                  <p className="font-mono text-xs text-gray-300">Grid-OS Controller</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-thermal-orange">3</div>
              <div className="font-mono text-xs text-gray-400">Tage</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-compute-blue">150+</div>
              <div className="font-mono text-xs text-gray-400">Teilnehmer</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-grid-green">CHF 150</div>
              <div className="font-mono text-xs text-gray-400">Teilnahme</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-solar-yellow">30-36</div>
              <div className="font-mono text-xs text-gray-400">Teams</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 pb-16 animate-fade-in">
            <ButtonLink href="/register" variant="primary" size="lg" className="min-w-[200px] bg-thermal-orange hover:bg-thermal-orange/90">
              Mitmachen
            </ButtonLink>
            <ButtonLink
              href="#why-it-matters"
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Warum das wichtig ist
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
