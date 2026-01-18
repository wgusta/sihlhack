'use client'

import { ButtonLink } from '@/components/ui/ButtonLink'

export function ChallengesPreview() {
  return (
    <section className="py-16 bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-wide">
            Drei offene Fragen. Du findest die Antworten.
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Die Zeit-Frage */}
          <div className="p-6 rounded-xl bg-white/5 border border-solar-yellow/20 hover:border-solar-yellow/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⏰</span>
              <h3 className="font-mono text-solar-yellow font-semibold text-lg">Zeit-Shift</h3>
            </div>
            <p className="text-sm text-gray-300 font-mono mb-3">
              Sonne scheint tagsüber. Dusche läuft morgens.
            </p>
            <ul className="text-xs text-gray-400 font-mono space-y-1 mb-4">
              <li>• Batterien als Puffer?</li>
              <li>• Deferred Compute?</li>
              <li>• Deine Lösung.</li>
            </ul>
          </div>
          
          {/* Die Wärme-Frage */}
          <div className="p-6 rounded-xl bg-white/5 border border-thermal-orange/20 hover:border-thermal-orange/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔥</span>
              <h3 className="font-mono text-thermal-orange font-semibold text-lg">Wärme-Pfad</h3>
            </div>
            <p className="text-sm text-gray-300 font-mono mb-3">
              Drei Optionen. Kein richtiger Pfad. Nur Trade-offs.
            </p>
            <ul className="text-xs text-gray-400 font-mono space-y-1 mb-4">
              <li>• Öl-Immersion: sexy, komplex</li>
              <li>• Wasser-Loop: boring, funktioniert</li>
              <li>• Wärmepumpe: clever, teuer</li>
            </ul>
          </div>
          
          {/* Die Resilienz-Frage */}
          <div className="p-6 rounded-xl bg-white/5 border border-compute-blue/20 hover:border-compute-blue/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔌</span>
              <h3 className="font-mono text-compute-blue font-semibold text-lg">Resilienz-Logik</h3>
            </div>
            <p className="text-sm text-gray-300 font-mono mb-3">
              Netz fällt aus. Was macht dein Server?
            </p>
            <ul className="text-xs text-gray-400 font-mono space-y-1 mb-4">
              <li>• Weiterrechnen?</li>
              <li>• Nachbarschaft versorgen?</li>
              <li>• Du baust die Logik.</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <ButtonLink
            href="/challenges"
            variant="ghost"
            size="lg"
            className="text-white border-white/30 hover:bg-white/10"
          >
            Mehr erfahren →
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
