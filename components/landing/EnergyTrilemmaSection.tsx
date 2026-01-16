'use client'

import { useState } from 'react'
import { ButtonLink } from '@/components/ui/ButtonLink'

export function EnergyTrilemmaSection() {
  const [hoveredVertex, setHoveredVertex] = useState<string | null>(null)
  const [activePath, setActivePath] = useState<string | null>(null)

  const vertices = {
    solar: {
      label: 'Max Solar Production',
      labelDE: 'Solarproduktion',
      description: 'Mehr erneuerbare Energie ermöglichen, maximale Nutzung von Solardächern',
      color: 'solar-yellow',
    },
    grid: {
      label: 'Grid Stability',
      labelDE: 'Netzstabilität',
      description: 'Kosten für Netzstabilität, Risiko der Netzüberlastung bei zu viel Solar',
      color: 'thermal-orange',
    },
    autonomy: {
      label: 'Community Autonomy',
      labelDE: 'Autonomie',
      description: 'Selbstversorgung und Unabhängigkeit von grossen Energieversorgern',
      color: 'compute-blue',
    },
    storage: {
      label: 'Storage & Resilience',
      labelDE: 'Speicher & Resilienz',
      description: 'Batterien puffern Solar für die Nacht und liefern Backup bei Netzausfall',
      color: 'grid-green',
    },
  }

  const thermalPaths = [
    {
      id: 'oil',
      name: 'Der Öltank',
      subtitle: 'Immersion Cooling',
      description: 'Server baden in dielektrischem Öl. Lautlos, effizient, fast 100% Wärmeabfuhr. Aber: Öl muss gehandhabt werden. Brandschutz ist real. Wartung ist komplex. Für Teams, die maximale Performance wollen und die Risiken managen können.',
      pros: ['99% Wärmeabfuhr', 'Lautlos', 'Längere GPU-Lebensdauer'],
      cons: ['Öl-Handling', 'Brandschutz', 'Komplexe Wartung'],
      color: 'thermal-orange',
    },
    {
      id: 'water',
      name: 'Die Wasserschleife',
      subtitle: 'Direct-to-Chip',
      description: 'Direct-to-Chip Kühlung mit Standard-Komponenten. Bewährt, verfügbar, reparierbar. Aber: Nur 60-70% Wärmeabfuhr. Nicht so elegant. Für Teams, die auf Zuverlässigkeit setzen.',
      pros: ['Bewährte Technik', 'Standard-Teile', 'Einfache Reparatur'],
      cons: ['60-70% Capture', 'Leckage-Risiko', 'Pumpen-Geräusch'],
      color: 'compute-blue',
    },
    {
      id: 'heatpump',
      name: 'Der Boost',
      subtitle: 'Heat Pump Integration',
      description: 'Server-Wärme als Quelle für eine Wärmepumpe. Niedrige Temperaturen werden auf 70°C+ gehoben — genug für Radiatoren. Aber: Komplexität. COP-Trade-offs. Stromverbrauch der Pumpe. Für Teams, die ambitioniert denken.',
      pros: ['70°C+ Output', 'Radiator-tauglich', 'Höchste Nutzung'],
      cons: ['Komplexität', 'Strom für Pumpe', 'COP-Verluste'],
      color: 'grid-green',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
            Die Architektur
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Vier Säulen. Drei Wärme-Pfade. Eure Entscheidung.
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-3xl mx-auto">
            Silicon Valley baut Rechenzentren, die Flüsse erhitzen. Ihr baut Server, die Häuser heizen. 
            Kühlung wird zum Feature, nicht zum Problem.
          </p>
        </div>

        {/* 4-Pillar Diamond */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-off-white rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-200">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-black mb-6 sm:mb-8 text-center">
              Das Energie-Quadrilemma
            </h3>
            <p className="font-mono text-sm text-historic-sepia text-center mb-8 max-w-xl mx-auto">
              Früher war es ein Trilemma. Speicher macht es lösbar.
            </p>
            
            {/* Desktop: SVG Diamond */}
            <div className="hidden sm:block relative w-full" style={{ aspectRatio: '1', maxWidth: '400px', margin: '0 auto' }}>
              <svg
                viewBox="0 0 120 120"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
              >
                {/* Diamond shape */}
                <polygon
                  points="60,10 110,60 60,110 10,60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-300"
                />

                {/* Vertex 1: Solar (Top) */}
                <g
                  onMouseEnter={() => setHoveredVertex('solar')}
                  onMouseLeave={() => setHoveredVertex(null)}
                  className="cursor-pointer transition-all"
                >
                  <circle cx="60" cy="10" r="8" fill="#FBBF24" className={hoveredVertex === 'solar' ? 'opacity-100' : 'opacity-80'} />
                  <text x="60" y="14" textAnchor="middle" fill="white" style={{ fontSize: '8px' }}>☀</text>
                </g>

                {/* Vertex 2: Grid (Left) */}
                <g
                  onMouseEnter={() => setHoveredVertex('grid')}
                  onMouseLeave={() => setHoveredVertex(null)}
                  className="cursor-pointer transition-all"
                >
                  <circle cx="10" cy="60" r="8" fill="#FF6B35" className={hoveredVertex === 'grid' ? 'opacity-100' : 'opacity-80'} />
                  <text x="10" y="64" textAnchor="middle" fill="white" style={{ fontSize: '8px' }}>⚡</text>
                </g>

                {/* Vertex 3: Autonomy (Right) */}
                <g
                  onMouseEnter={() => setHoveredVertex('autonomy')}
                  onMouseLeave={() => setHoveredVertex(null)}
                  className="cursor-pointer transition-all"
                >
                  <circle cx="110" cy="60" r="8" fill="#3B82F6" className={hoveredVertex === 'autonomy' ? 'opacity-100' : 'opacity-80'} />
                  <text x="110" y="64" textAnchor="middle" fill="white" style={{ fontSize: '8px' }}>🏠</text>
                </g>

                {/* Vertex 4: Storage (Bottom) - NEW */}
                <g
                  onMouseEnter={() => setHoveredVertex('storage')}
                  onMouseLeave={() => setHoveredVertex(null)}
                  className="cursor-pointer transition-all"
                >
                  <circle cx="60" cy="110" r="8" fill="#22C55E" className={hoveredVertex === 'storage' ? 'opacity-100' : 'opacity-80'} />
                  <text x="60" y="114" textAnchor="middle" fill="white" style={{ fontSize: '8px' }}>🔋</text>
                </g>

                {/* Labels */}
                <text x="60" y="0" textAnchor="middle" className="font-mono" fill="#FBBF24" style={{ fontSize: '6px', fontWeight: 'bold' }}>Solar</text>
                <text x="0" y="60" textAnchor="end" className="font-mono" fill="#FF6B35" style={{ fontSize: '6px', fontWeight: 'bold' }}>Netz</text>
                <text x="120" y="60" textAnchor="start" className="font-mono" fill="#3B82F6" style={{ fontSize: '6px', fontWeight: 'bold' }}>Autonomie</text>
                <text x="60" y="125" textAnchor="middle" className="font-mono" fill="#22C55E" style={{ fontSize: '6px', fontWeight: 'bold' }}>Speicher</text>

                {/* Center: Sihlicon Hub */}
                <circle cx="60" cy="60" r="12" fill="#1A1A1A" stroke="#FF6B35" strokeWidth="1" />
                <text x="60" y="58" textAnchor="middle" fill="white" style={{ fontSize: '5px', fontWeight: 'bold' }}>SIHL</text>
                <text x="60" y="65" textAnchor="middle" fill="#FF6B35" style={{ fontSize: '4px' }}>HUB</text>
              </svg>
            </div>

            {/* Mobile: Simplified Grid */}
            <div className="sm:hidden grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-solar-yellow/10 rounded-lg border border-solar-yellow/30">
                <span className="text-2xl">☀️</span>
                <p className="font-mono text-xs font-semibold text-solar-yellow mt-1">Solar</p>
              </div>
              <div className="text-center p-4 bg-thermal-orange/10 rounded-lg border border-thermal-orange/30">
                <span className="text-2xl">⚡</span>
                <p className="font-mono text-xs font-semibold text-thermal-orange mt-1">Netz</p>
              </div>
              <div className="text-center p-4 bg-compute-blue/10 rounded-lg border border-compute-blue/30">
                <span className="text-2xl">🏠</span>
                <p className="font-mono text-xs font-semibold text-compute-blue mt-1">Autonomie</p>
              </div>
              <div className="text-center p-4 bg-grid-green/10 rounded-lg border border-grid-green/30">
                <span className="text-2xl">🔋</span>
                <p className="font-mono text-xs font-semibold text-grid-green mt-1">Speicher</p>
              </div>
            </div>

            {/* Description Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
              {Object.entries(vertices).map(([key, vertex]) => (
                <div
                  key={key}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    hoveredVertex === key
                      ? `border-${vertex.color} bg-${vertex.color}/10`
                      : 'border-gray-200 bg-white'
                  }`}
                  onMouseEnter={() => setHoveredVertex(key)}
                  onMouseLeave={() => setHoveredVertex(null)}
                >
                  <h4 className="font-mono text-sm font-semibold text-brand-black mb-2">
                    {vertex.labelDE}
                  </h4>
                  <p className="font-mono text-xs text-historic-sepia">
                    {vertex.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thermal Challenge Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-black">
              Der Wärme-Pfad ist nicht vorgeschrieben. Er ist die Challenge.
            </h3>
            <p className="mt-4 font-mono text-sm text-historic-sepia max-w-2xl mx-auto">
              Drei Architekturen stehen zur Debatte. Keiner dieser Pfade ist &quot;richtig&quot;. 
              Jeder hat Trade-offs. Euer Team entscheidet, welcher zu eurem Kontext passt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {thermalPaths.map((path) => (
              <div
                key={path.id}
                className={`rounded-2xl border-2 p-6 transition-all cursor-pointer ${
                  activePath === path.id
                    ? `border-${path.color} bg-${path.color}/5 shadow-lg`
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setActivePath(activePath === path.id ? null : path.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className={`font-mono text-xs uppercase tracking-wide text-${path.color}`}>
                      Pfad {path.id === 'oil' ? 'A' : path.id === 'water' ? 'B' : 'C'}
                    </span>
                    <h4 className="font-display text-xl font-bold text-brand-black">
                      {path.name}
                    </h4>
                    <p className="font-mono text-xs text-historic-sepia">{path.subtitle}</p>
                  </div>
                  <span className="text-3xl">
                    {path.id === 'oil' ? '🛢️' : path.id === 'water' ? '💧' : '♨️'}
                  </span>
                </div>

                <p className="font-mono text-sm text-historic-sepia mb-4 leading-relaxed">
                  {path.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-mono text-xs font-semibold text-grid-green mb-2">Pro</p>
                    <ul className="space-y-1">
                      {path.pros.map((pro, i) => (
                        <li key={i} className="font-mono text-xs text-historic-sepia flex items-start gap-1">
                          <span className="text-grid-green">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold text-sihl-red mb-2">Contra</p>
                    <ul className="space-y-1">
                      {path.cons.map((con, i) => (
                        <li key={i} className="font-mono text-xs text-historic-sepia flex items-start gap-1">
                          <span className="text-sihl-red">−</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load Shedding Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-brand-black rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Die Resilienz-Logik existiert noch nicht. Ihr baut sie.
            </h3>
            
            <div className="font-mono text-sm text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              <p className="mb-4">
                Das Prinzip ist simpel: Wenn das Netz stabil ist, läuft Compute und die Batterie lädt. 
                Wenn das Netz wackelt, drosselt Compute und die Batterie steht bereit. 
                Wenn das Netz ausfällt, pausiert Compute und die Nachbarschaft wird versorgt.
              </p>
              <p>
                Die Implementierung? Nicht simpel. Wann genau schaltet man um? 
                Wie kommuniziert der Hub mit dem Netz? Wie priorisiert man Lasten? 
                Das sind die Fragen, die ihr beantwortet.
              </p>
            </div>

            {/* State Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-grid-green/20 border border-grid-green/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">✅</div>
                <p className="font-mono text-xs font-semibold text-grid-green">Netz stabil</p>
                <p className="font-mono text-xs text-gray-400 mt-1">Compute läuft, Batterie lädt</p>
              </div>
              <div className="bg-solar-yellow/20 border border-solar-yellow/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">⚠️</div>
                <p className="font-mono text-xs font-semibold text-solar-yellow">Netz wackelt</p>
                <p className="font-mono text-xs text-gray-400 mt-1">Compute drosselt, Batterie bereit</p>
              </div>
              <div className="bg-sihl-red/20 border border-sihl-red/30 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🔴</div>
                <p className="font-mono text-xs font-semibold text-sihl-red">Netz down</p>
                <p className="font-mono text-xs text-gray-400 mt-1">Compute pausiert, Quartier versorgt</p>
              </div>
            </div>

            <p className="font-mono text-sm text-gray-400 text-center">
              Der Server bezahlt die Batterie. Die Batterie schützt die Nachbarschaft. 
              Das ist der Deal.
            </p>
          </div>
        </div>

        {/* LEG Explanation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-off-white rounded-2xl p-8 border border-gray-200">
            <h3 className="font-display text-2xl font-bold text-brand-black mb-4">
              Was ist eine <a href="/leg" className="text-sihl-red hover:underline">LEG</a>?
            </h3>
            <ul className="font-mono text-sm text-historic-sepia space-y-2 mb-4">
              <li>• <strong className="text-brand-black">Lokale Elektrizitätsgemeinschaft</strong> nach StromVG Art. 18</li>
              <li>• Nachbarn produzieren und teilen Strom gemeinsam</li>
              <li>• Rechtliche Grundlage existiert in der Schweiz</li>
              <li>• Technische Infrastruktur? Baut ihr.</li>
            </ul>
            <p className="font-mono text-sm text-historic-sepia">
              Mit einem Sihlicon Hub wird eine LEG energieautark und resilient.
            </p>
            <div className="mt-6">
              <ButtonLink
                href="/leg"
                variant="secondary"
                size="md"
                className="bg-sihl-red text-white hover:bg-sihl-red/90"
              >
                Mehr über LEGs
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-thermal-orange to-compute-blue rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Bereit für echte Ingenieurs-Entscheidungen?
            </h3>
            <p className="font-mono text-sm text-white/90 max-w-xl mx-auto mb-6">
              Keine Tutorials. Keine vorgegebenen Lösungen. Nur Constraints, Trade-offs, 
              und drei Tage, um etwas zu bauen, das funktioniert.
            </p>
            <ButtonLink
              href="/challenges"
              variant="secondary"
              size="lg"
              className="bg-white text-brand-black hover:bg-white/90"
            >
              Die Challenges ansehen
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
