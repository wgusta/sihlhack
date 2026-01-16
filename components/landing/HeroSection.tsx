'use client'

import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'

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
              3 Tage · Echte Probleme · Keine PowerPoint-Lösungen
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
              Der Hackathon, bei dem am Ende
              <span className="text-thermal-orange"> etwas Warmes</span> rauskommt.
              <br />
              <span className="text-gray-400 text-xl sm:text-2xl md:text-3xl">Buchstäblich.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-300 font-mono max-w-3xl mx-auto">
              Batterie + Server + Wärme: kombiniert zu etwas, das Silicon Valley noch nicht auf dem Schirm hat. Du baust es.
            </p>
          </div>

          {/* "Was du lösen wirst" Section */}
          <div className="max-w-4xl mx-auto mt-12 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-8">
                <span className="font-mono text-sm text-thermal-orange uppercase tracking-wide">
                  Drei offene Fragen. Du findest die Antworten.
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Die Zeit-Frage */}
                <div className="p-5 rounded-xl bg-white/5 border border-solar-yellow/20">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">⏰</span>
                    <h3 className="font-mono text-solar-yellow font-semibold">Zeit-Shift</h3>
                  </div>
                  <p className="text-sm text-gray-300 font-mono mb-3">
                    Sonne scheint tagsüber. Dusche läuft morgens.
                  </p>
                  <ul className="text-xs text-gray-400 font-mono space-y-1">
                    <li>• Batterien als Puffer?</li>
                    <li>• Deferred Compute?</li>
                    <li>• Deine Lösung.</li>
                  </ul>
                </div>
                
                {/* Die Wärme-Frage */}
                <div className="p-5 rounded-xl bg-white/5 border border-thermal-orange/20">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🔥</span>
                    <h3 className="font-mono text-thermal-orange font-semibold">Wärme-Pfad</h3>
                  </div>
                  <p className="text-sm text-gray-300 font-mono mb-3">
                    Drei Optionen. Kein richtiger Pfad. Nur Trade-offs.
                  </p>
                  <ul className="text-xs text-gray-400 font-mono space-y-1">
                    <li>• Öl-Immersion: sexy, komplex</li>
                    <li>• Wasser-Loop: boring, funktioniert</li>
                    <li>• Wärmepumpe: clever, teuer</li>
                  </ul>
                </div>
                
                {/* Die Resilienz-Frage */}
                <div className="p-5 rounded-xl bg-white/5 border border-compute-blue/20">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🔌</span>
                    <h3 className="font-mono text-compute-blue font-semibold">Resilienz-Logik</h3>
                  </div>
                  <p className="text-sm text-gray-300 font-mono mb-3">
                    Netz fällt aus. Was macht dein Server?
                  </p>
                  <ul className="text-xs text-gray-400 font-mono space-y-1">
                    <li>• Weiterrechnen?</li>
                    <li>• Nachbarschaft versorgen?</li>
                    <li>• Du baust die Logik.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* "Für wen" Section */}
          <div className="max-w-4xl mx-auto mt-12 animate-fade-in">
            <div className="bg-gradient-to-r from-thermal-orange/10 to-compute-blue/10 border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="font-mono text-sm text-gray-400 uppercase tracking-wide">
                  Für Leute, die lieber bauen als reden
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Hardware-Tüftler */}
                <div className="text-left p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🔧</span>
                    <h3 className="font-mono text-thermal-orange font-semibold">Hardware</h3>
                  </div>
                  <ul className="text-xs text-gray-400 font-mono space-y-1">
                    <li>• Thermodynamik ist dein Spielplatz</li>
                    <li>• Du baust, was funktioniert</li>
                    <li>• Löten, CAD, Pumpen: dein Ding</li>
                  </ul>
                </div>
                
                {/* Software-Builder */}
                <div className="text-left p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">💻</span>
                    <h3 className="font-mono text-compute-blue font-semibold">Software</h3>
                  </div>
                  <ul className="text-xs text-gray-400 font-mono space-y-1">
                    <li>• Code, der Strom verteilt</li>
                    <li>• Grid-OS wartet auf dich</li>
                    <li>• APIs, Scheduler, Dashboards</li>
                  </ul>
                </div>
                
                {/* Energie-Visionäre */}
                <div className="text-left p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">⚡</span>
                    <h3 className="font-mono text-grid-green font-semibold">Energie</h3>
                  </div>
                  <ul className="text-xs text-gray-400 font-mono space-y-1">
                    <li>• Lokal, dezentral, demokratisch</li>
                    <li>• <a href="/leg" className="text-sihl-red hover:underline">LEGs</a> sind für dich Zukunft</li>
                    <li>• Solar, Netz, Autonomie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ownership Message */}
          <div className="max-w-2xl mx-auto animate-fade-in">
            <p className="font-mono text-sm text-gray-400 text-center">
              <span className="text-white">Dein Code. Deine Rechte.</span> Apache 2.0 = Du kannst morgen eine Firma gründen 
              und mit uns konkurrieren. Go for it.
            </p>
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
              Platz sichern
            </ButtonLink>
            <ButtonLink
              href="/challenges"
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Die Challenges ansehen
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
