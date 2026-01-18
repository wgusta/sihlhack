'use client'

import { ButtonLink } from '@/components/ui/ButtonLink'

export function QuickCTA() {
  return (
    <section className="py-12 bg-gradient-to-b from-brand-black to-brand-black/95">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-mono">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-grid-green font-bold">70%</span>
              <span>ins Preisgeld</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-solar-yellow font-bold">100%</span>
              <span>Rückerstattung bei Absage</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-compute-blue font-bold">Dual-Lizenz</span>
              <span>Dein Code</span>
            </div>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink
              href="/register"
              variant="primary"
              size="lg"
              className="min-w-[220px] bg-thermal-orange hover:bg-thermal-orange/90 text-white"
            >
              Platz sichern · CHF 150
            </ButtonLink>
            <span className="text-gray-500 font-mono text-sm hidden sm:inline">oder</span>
            <ButtonLink
              href="#mehr"
              variant="ghost"
              size="lg"
              className="text-gray-400 border-gray-600 hover:bg-white/5 hover:text-white"
            >
              Mehr erfahren
            </ButtonLink>
          </div>

          {/* Scarcity/urgency */}
          <p className="text-xs font-mono text-gray-500">
            100 Plätze · September 2026 · Zürich
          </p>
        </div>
      </div>
    </section>
  )
}
