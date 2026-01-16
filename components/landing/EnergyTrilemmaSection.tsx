'use client'

import { useState } from 'react'
import { ButtonLink } from '@/components/ui/ButtonLink'

export function EnergyTrilemmaSection() {
  const [hoveredVertex, setHoveredVertex] = useState<string | null>(null)

  const vertices = {
    solar: {
      label: 'Max Solar Production',
      labelDE: 'Maximale Solarproduktion',
      description: 'Mehr erneuerbare Energie ermöglichen, maximale Nutzung von Solardächern',
      color: 'solar-yellow',
      position: { x: 50, y: 10 }, // Top
    },
    grid: {
      label: 'Grid Cost & Overload Risk',
      labelDE: 'Netzkosten & Überlastungsrisiko',
      description: 'Kosten für Netzstabilität, Risiko der Netzüberlastung bei zu viel Solar',
      color: 'thermal-orange',
      position: { x: 15, y: 85 }, // Bottom left
    },
    autonomy: {
      label: 'Community Autonomy',
      labelDE: 'Autonomie der Gemeinschaft',
      description: 'Selbstversorgung und Unabhängigkeit von grossen Energieversorgern',
      color: 'compute-blue',
      position: { x: 85, y: 85 }, // Bottom right
    },
  }

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
            Das Energie-Trilemma
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            LEGs und die drei Ziele
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
            Lokale Elektrizitätsgemeinschaften (LEGs) stehen vor einem fundamentalen Zielkonflikt.
            Der Sihlicon Hub löst ihn.
          </p>
        </div>

        {/* LEG Explanation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-off-white rounded-2xl p-8 border border-gray-200">
            <h3 className="font-display text-2xl font-bold text-brand-black mb-4">
              Was ist eine LEG?
            </h3>
            <div className="space-y-4 font-mono text-sm text-historic-sepia">
              <p>
                Eine <strong className="text-brand-black">Lokale Elektrizitätsgemeinschaft (LEG)</strong> nach 
                StromVG Art. 18 ist ein Zusammenschluss von Produzenten und Konsumenten, die lokal Energie 
                teilen. Ähnlich wie ein ZEV, aber mit der Möglichkeit, das öffentliche Netz zu nutzen.
              </p>
              <p>
                LEGs ermöglichen Quartieren und Gemeinden, ihre eigene Energie zu produzieren, zu speichern 
                und zu handeln – unabhängig von grossen Versorgern.
              </p>
            </div>
          </div>
        </div>

        {/* Triangle Visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-off-white rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-200">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-black mb-6 sm:mb-8 text-center">
              Das Energie-Trilemma
            </h3>
            
            {/* Desktop: SVG Triangle */}
            <div className="hidden sm:block relative w-full" style={{ aspectRatio: '1', maxWidth: '350px', margin: '0 auto' }}>
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
              >
                {/* Triangle background */}
                <polygon
                  points="50,10 15,85 85,85"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-300"
                />

                {/* Connection lines (tension) */}
                {hoveredVertex && (
                  <>
                    {hoveredVertex === 'solar' && (
                      <>
                        <line x1="50" y1="10" x2="15" y2="85" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" className="text-thermal-orange/50" />
                        <line x1="50" y1="10" x2="85" y2="85" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" className="text-compute-blue/50" />
                      </>
                    )}
                    {hoveredVertex === 'grid' && (
                      <>
                        <line x1="15" y1="85" x2="50" y2="10" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" className="text-solar-yellow/50" />
                        <line x1="15" y1="85" x2="85" y2="85" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" className="text-compute-blue/50" />
                      </>
                    )}
                    {hoveredVertex === 'autonomy' && (
                      <>
                        <line x1="85" y1="85" x2="50" y2="10" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" className="text-solar-yellow/50" />
                        <line x1="85" y1="85" x2="15" y2="85" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" className="text-thermal-orange/50" />
                      </>
                    )}
                  </>
                )}

                {/* Vertex 1: Solar (Top) */}
                <g
                  onMouseEnter={() => setHoveredVertex('solar')}
                  onMouseLeave={() => setHoveredVertex(null)}
                  className="cursor-pointer transition-all"
                >
                  <circle cx="50" cy="10" r="5" fill="#FBBF24" className={hoveredVertex === 'solar' ? 'opacity-100' : 'opacity-80'} />
                  <text x="50" y="12" textAnchor="middle" fill="white" style={{ fontSize: '4px' }}>⚡</text>
                </g>

                {/* Vertex 2: Grid (Bottom Left) */}
                <g
                  onMouseEnter={() => setHoveredVertex('grid')}
                  onMouseLeave={() => setHoveredVertex(null)}
                  className="cursor-pointer transition-all"
                >
                  <circle cx="15" cy="85" r="5" fill="#FF6B35" className={hoveredVertex === 'grid' ? 'opacity-100' : 'opacity-80'} />
                  <text x="15" y="87" textAnchor="middle" fill="white" style={{ fontSize: '4px' }}>⚠</text>
                </g>

                {/* Vertex 3: Autonomy (Bottom Right) */}
                <g
                  onMouseEnter={() => setHoveredVertex('autonomy')}
                  onMouseLeave={() => setHoveredVertex(null)}
                  className="cursor-pointer transition-all"
                >
                  <circle cx="85" cy="85" r="5" fill="#3B82F6" className={hoveredVertex === 'autonomy' ? 'opacity-100' : 'opacity-80'} />
                  <text x="85" y="87" textAnchor="middle" fill="white" style={{ fontSize: '4px' }}>🏠</text>
                </g>

                {/* Labels outside triangle - Desktop only */}
                <text x="50" y="2" textAnchor="middle" className="font-mono" fill="#FBBF24" style={{ fontSize: '4px', fontWeight: 'bold' }}>Solar</text>
                <text x="8" y="95" textAnchor="middle" className="font-mono" fill="#FF6B35" style={{ fontSize: '4px', fontWeight: 'bold' }}>Netz</text>
                <text x="92" y="95" textAnchor="middle" className="font-mono" fill="#3B82F6" style={{ fontSize: '4px', fontWeight: 'bold' }}>Autonomie</text>
              </svg>
            </div>

            {/* Mobile: Simplified Triangle */}
            <div className="sm:hidden flex justify-center mb-6">
              <div className="relative w-48 h-44">
                <svg viewBox="0 0 100 90" className="w-full h-full">
                  {/* Triangle */}
                  <polygon points="50,5 10,80 90,80" fill="none" stroke="#e5e5e5" strokeWidth="1" />
                  
                  {/* Vertices with labels */}
                  <circle cx="50" cy="5" r="8" fill="#FBBF24" />
                  <text x="50" y="8" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>⚡</text>
                  
                  <circle cx="10" cy="80" r="8" fill="#FF6B35" />
                  <text x="10" y="83" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>⚠</text>
                  
                  <circle cx="90" cy="80" r="8" fill="#3B82F6" />
                  <text x="90" y="83" textAnchor="middle" fill="white" style={{ fontSize: '6px' }}>🏠</text>
                </svg>
              </div>
            </div>

            {/* Description Cards - Stack on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-12">
              {/* Solar */}
              <div
                className={`p-4 rounded-lg border-2 transition-all ${
                  hoveredVertex === 'solar'
                    ? 'border-solar-yellow bg-solar-yellow/10'
                    : 'border-gray-200 bg-white'
                }`}
                onMouseEnter={() => setHoveredVertex('solar')}
                onMouseLeave={() => setHoveredVertex(null)}
                onClick={() => setHoveredVertex(hoveredVertex === 'solar' ? null : 'solar')}
              >
                <div className="flex items-center gap-3 sm:block">
                  <div className="text-2xl sm:mb-2 flex-shrink-0 w-10 h-10 sm:w-auto sm:h-auto bg-solar-yellow/20 sm:bg-transparent rounded-full flex items-center justify-center">⚡</div>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-brand-black sm:mb-2">
                      {vertices.solar.labelDE}
                    </h4>
                    <p className="font-mono text-xs text-historic-sepia">
                      {vertices.solar.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div
                className={`p-4 rounded-lg border-2 transition-all ${
                  hoveredVertex === 'grid'
                    ? 'border-thermal-orange bg-thermal-orange/10'
                    : 'border-gray-200 bg-white'
                }`}
                onMouseEnter={() => setHoveredVertex('grid')}
                onMouseLeave={() => setHoveredVertex(null)}
                onClick={() => setHoveredVertex(hoveredVertex === 'grid' ? null : 'grid')}
              >
                <div className="flex items-center gap-3 sm:block">
                  <div className="text-2xl sm:mb-2 flex-shrink-0 w-10 h-10 sm:w-auto sm:h-auto bg-thermal-orange/20 sm:bg-transparent rounded-full flex items-center justify-center">⚠</div>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-brand-black sm:mb-2">
                      {vertices.grid.labelDE}
                    </h4>
                    <p className="font-mono text-xs text-historic-sepia">
                      {vertices.grid.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Autonomy */}
              <div
                className={`p-4 rounded-lg border-2 transition-all ${
                  hoveredVertex === 'autonomy'
                    ? 'border-compute-blue bg-compute-blue/10'
                    : 'border-gray-200 bg-white'
                }`}
                onMouseEnter={() => setHoveredVertex('autonomy')}
                onMouseLeave={() => setHoveredVertex(null)}
                onClick={() => setHoveredVertex(hoveredVertex === 'autonomy' ? null : 'autonomy')}
              >
                <div className="flex items-center gap-3 sm:block">
                  <div className="text-2xl sm:mb-2 flex-shrink-0 w-10 h-10 sm:w-auto sm:h-auto bg-compute-blue/20 sm:bg-transparent rounded-full flex items-center justify-center">🏠</div>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-brand-black sm:mb-2">
                      {vertices.autonomy.labelDE}
                    </h4>
                    <p className="font-mono text-xs text-historic-sepia">
                      {vertices.autonomy.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution: How Sihlicon Hub Addresses This */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-grid-green to-compute-blue rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
              Wie der Sihlicon Hub das Trilemma löst
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-mono text-sm font-semibold text-white mb-2">
                  Mehr Solar nutzen
                </h4>
                <p className="font-mono text-xs text-white/90">
                  Compute-Last nutzt Solarüberschuss direkt, statt ihn ins Netz zu drücken
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">⚖️</div>
                <h4 className="font-mono text-sm font-semibold text-white mb-2">
                  Netz stabilisieren
                </h4>
                <p className="font-mono text-xs text-white/90">
                  Server können bei Überproduktion hochfahren, bei Engpässen drosseln
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">🏠</div>
                <h4 className="font-mono text-sm font-semibold text-white mb-2">
                  Autonomie stärken
                </h4>
                <p className="font-mono text-xs text-white/90">
                  LEGs werden unabhängiger durch eigene Compute-Infrastruktur
                </p>
              </div>
            </div>
            <p className="font-mono text-sm text-white/90 max-w-2xl mx-auto mb-6">
              <strong className="text-white">Alle drei Ziele gleichzeitig:</strong> Mehr Solarproduktion 
              ohne Netzüberlastung, bei maximaler Gemeinschaftsautonomie. Das ist der Sihlicon Hub.
            </p>
            <ButtonLink
              href="/about"
              variant="secondary"
              size="lg"
              className="bg-white text-brand-black hover:bg-white/90"
            >
              Mehr über LEGs erfahren
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
