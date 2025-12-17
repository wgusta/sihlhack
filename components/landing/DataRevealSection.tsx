'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function DataRevealSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPosition(percent)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleMouseUp = () => setIsDragging(false)

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section id="how-it-works" className="py-24 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-insight-cyan uppercase tracking-widest">
            Die Challenge
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            Von Papier zu Daten
          </h2>
          <p className="mt-4 text-lg text-gray-400 font-mono max-w-2xl mx-auto">
            Ziehe den Slider, um die Transformation zu sehen.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* AFTER: Digitized Data (Background) */}
            <div className="absolute inset-0 bg-brand-black p-6 sm:p-8">
              <div className="h-full bg-gray-900 rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden">
                <div className="text-insight-cyan mb-4">// Extrahierte Daten · JSON</div>
                <pre className="text-gray-300 whitespace-pre-wrap">
{`{
  "dokument": "Lohnbuch Papierfabrik Sihl",
  "jahr": 1923,
  "einträge": [
    {
      "name": "Heinrich Müller",
      "beruf": "Maschinenführer",
      "lohn_chf": 285.50,
      "stunden": 52
    },
    {
      "name": "Anna Weber",
      "beruf": "Sortiererin",
      "lohn_chf": 142.00,
      "stunden": 48
    },
    {
      "name": "Josef Brunner",
      "beruf": "Lehrling",
      "lohn_chf": 65.00,
      "stunden": 44
    }
  ],
  "confidence": 0.94,
  "model": "sihlhack-ocr-v2"
}`}
                </pre>
              </div>
            </div>

            {/* BEFORE: Historical Document (Overlay with clip) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="h-full bg-historic-cream p-4 sm:p-8">
                <div className="h-full bg-white rounded-lg shadow-historic p-4 sm:p-6 overflow-hidden">
                  {/* Simulated old document */}
                  <div className="space-y-3 sm:space-y-4 font-serif text-historic-dark text-xs sm:text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                    <div className="text-center border-b-2 border-historic-sepia pb-2 sm:pb-3">
                      <div className="text-base sm:text-lg font-bold">Papierfabrik an der Sihl</div>
                      <div className="text-[10px] sm:text-xs text-historic-sepia">Lohnbuch · Anno 1923</div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between border-b border-dashed border-historic-sepia/50 pb-1">
                        <span className="italic">Heinrich Müller, Maschinenf.</span>
                        <span>Fr. 285.50</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-historic-sepia/50 pb-1">
                        <span className="italic">Anna Weber, Sortiererin</span>
                        <span>Fr. 142.—</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-historic-sepia/50 pb-1">
                        <span className="italic">Josef Brunner, Lehrling</span>
                        <span>Fr. 65.—</span>
                      </div>
                    </div>
                    {/* Paper texture effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-historic-sepia/90 text-white px-3 py-1 rounded font-mono text-xs">
              Original 1923
            </div>
            <div className="absolute bottom-4 right-4 bg-insight-cyan/90 text-white px-3 py-1 rounded font-mono text-xs">
              Digitalisiert 2025
            </div>
          </div>
        </div>

        {/* Engineer Hook */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📜',
                title: 'Echte Herausforderung',
                description: 'Handschrift aus dem 19. Jahrhundert. Verblasste Tinte. Beschädigte Dokumente. Kein sauberes Dataset, sondern echte Archivqualität.',
              },
              {
                icon: '🧠',
                title: 'Cutting-Edge ML',
                description: 'Kombiniere OCR, Layout-Analyse und NLP. Trainiere Custom Models auf historischen Schriften. Publiziere deine Ergebnisse.',
              },
              {
                icon: '🏆',
                title: 'Werde bezahlt',
                description: 'Dein Einsatz finanziert den Pool. Je mehr mitmachen, desto höher die Preise. Gewinnercode wird Open Source.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-300",
                  "bg-white/5 border-white/10 hover:border-insight-cyan/50 hover:bg-white/10"
                )}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-mono text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Engineer CTA */}
          <div className="mt-12 text-center">
            <p className="font-mono text-lg text-insight-cyan mb-2">
              Du liebst schwierige Computer Vision Probleme?
            </p>
            <p className="font-mono text-sm text-gray-500">
              Diese Daten wurden noch nie maschinell verarbeitet. Sei der Erste.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
