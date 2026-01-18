'use client'

import { PRE_CHALLENGE } from '@/lib/roles'
import { Icon } from '@/components/ui/Icon'

export function PreChallengeSection() {
  return (
    <section className="py-16 bg-historic-cream/30 border-y-2 border-historic-sepia/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Badges */}
          <div className="flex justify-center gap-3 mb-4">
            <span className="inline-block bg-gray-200 text-gray-600 text-xs font-mono px-3 py-1 rounded-full">
              OPTIONAL
            </span>
            <span className="inline-block bg-historic-sepia text-white text-xs font-mono px-3 py-1 rounded-full">
              🍿 Snackathons
            </span>
          </div>
          
          <span className="font-accent text-lg text-historic-sepia tracking-wider">
            ~~~ PRE-CHALLENGE ~~~
          </span>
          
          {/* Title with Icon */}
          <div className="relative inline-block mt-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black flex items-center justify-center gap-2">
              <Icon emoji={PRE_CHALLENGE.icon} size="xl" color="text-historic-sepia" />
              {PRE_CHALLENGE.nameDE}
            </h2>
          </div>
          
          <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
            {PRE_CHALLENGE.description}
          </p>
          
          {/* Optional Clarification */}
          <p className="mt-2 text-sm text-historic-sepia/70 font-mono">
            Keine Voraussetzung für den Hackathon – aber ein netter Appetizer 🍿
          </p>
        </div>

        {/* Timeline Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-historic-sepia/30 shadow-sm">
            <span className="text-2xl">📅</span>
            <div>
              <p className="font-mono text-sm font-bold text-brand-black">{PRE_CHALLENGE.duration}</p>
              <p className="font-mono text-xs text-historic-sepia">Format: {PRE_CHALLENGE.format === 'online' ? 'Online, Asynchron' : PRE_CHALLENGE.format}</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: What to do */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-display text-lg font-semibold text-brand-black mb-4 flex items-center gap-2">
              <span>🔍</span> Deine Mission
            </h3>
            <div className="space-y-4 text-sm font-mono text-historic-sepia">
              <p>
                Das Sihltal war die Wiege der Zürcher Industrialisierung. Historische Archive 
                enthalten wertvolles Wissen über dezentrale Energieversorgung.
              </p>
              <p className="font-semibold text-brand-black">Durchsuche:</p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-thermal-orange">→</span>
                  Historische Firmenarchive
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-thermal-orange">→</span>
                  Öffentliche Grundbuchdaten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-thermal-orange">→</span>
                  Kantonale/städtische Archive
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Deliverables */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-display text-lg font-semibold text-brand-black mb-4 flex items-center gap-2">
              <span>📦</span> Deliverables
            </h3>
            <ul className="space-y-3">
              {PRE_CHALLENGE.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-mono text-historic-sepia">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-grid-green/20 flex items-center justify-center text-grid-green text-xs font-bold">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            
            {/* Bonus Badge */}
            <div className="mt-6 p-4 bg-industrial-gold/10 rounded-xl border border-industrial-gold/30">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-mono text-sm font-bold text-brand-black">
                    +{PRE_CHALLENGE.bonusPoints} Bonus-Punkte
                  </p>
                  <p className="font-mono text-xs text-historic-sepia">
                    Für beste Einreichungen am Hauptevent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-display text-lg font-semibold text-brand-black mb-4 flex items-center gap-2">
            <span>⚙️</span> So funktioniert's
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-solar-yellow/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h4 className="font-mono text-sm font-bold text-brand-black">Anmelden</h4>
              <p className="font-mono text-xs text-historic-sepia mt-1">
                Registriere dich für sihlhack
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-compute-blue/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h4 className="font-mono text-sm font-bold text-brand-black">Recherchieren</h4>
              <p className="font-mono text-xs text-historic-sepia mt-1">
                2-4 Wochen selbstständige Online-Recherche
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-grid-green/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h4 className="font-mono text-sm font-bold text-brand-black">Einreichen</h4>
              <p className="font-mono text-xs text-historic-sepia mt-1">
                Dokumentierte Fundstücke vor dem Event einreichen
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6 text-center">
          <p className="font-mono text-xs text-historic-sepia">
            Skills: Python · OCR/Tesseract · Geodatenanalyse · GIS · Data Science · Archivforschung
          </p>
        </div>
      </div>
    </section>
  )
}
