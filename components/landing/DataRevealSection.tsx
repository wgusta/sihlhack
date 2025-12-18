'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

// Define the different media types with their transformations
const mediaTypes = [
  {
    id: 'ledger',
    label: 'Lohnbuch',
    icon: '📒',
    year: '1923',
    description: 'Handschriftliche Lohnbücher mit Kurrentschrift',
    beforeLabel: 'Lohnbuch 1923',
    afterLabel: 'Strukturierte Daten',
  },
  {
    id: 'photo',
    label: 'Fotografie',
    icon: '📷',
    year: '1912',
    description: 'Historische Fabrikaufnahmen und Arbeiterporträts',
    beforeLabel: 'Glasplatte 1912',
    afterLabel: 'Annotierte Bilddaten',
  },
  {
    id: 'blueprint',
    label: 'Bauplan',
    icon: '📐',
    year: '1887',
    description: 'Technische Zeichnungen von Maschinen und Gebäuden',
    beforeLabel: 'Bauplan 1887',
    afterLabel: 'CAD/Vektordaten',
  },
  {
    id: 'letter',
    label: 'Korrespondenz',
    icon: '✉️',
    year: '1901',
    description: 'Geschäftsbriefe und Handelskorrespondenz',
    beforeLabel: 'Brief 1901',
    afterLabel: 'Transkription + NER',
  },
]

export function DataRevealSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [activeMedia, setActiveMedia] = useState('ledger')
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

  const currentMedia = mediaTypes.find(m => m.id === activeMedia) || mediaTypes[0]

  return (
    <section id="how-it-works" className="py-24 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-insight-cyan uppercase tracking-widest">
            Die Challenge
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            Von Archiv zu API
          </h2>
          <p className="mt-4 text-lg text-gray-400 font-mono max-w-2xl mx-auto">
            Echte historische Dokumente aus dem Sihltal warten auf Digitalisierung.
          </p>
        </div>

        {/* Media Type Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 max-w-4xl mx-auto">
          {mediaTypes.map((media) => (
            <button
              key={media.id}
              onClick={() => setActiveMedia(media.id)}
              className={cn(
                "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full font-mono text-xs sm:text-sm transition-all",
                activeMedia === media.id
                  ? "bg-insight-cyan text-brand-black"
                  : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white"
              )}
            >
              <span>{media.icon}</span>
              <span className="hidden sm:inline">{media.label}</span>
              <span className="sm:hidden">{media.label.slice(0, 4)}</span>
            </button>
          ))}
        </div>

        {/* Media Description */}
        <p className="text-center text-gray-500 font-mono text-sm mb-8">
          {currentMedia.description}
        </p>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* AFTER: Digitized Data (Background) */}
            <div className="absolute inset-0 bg-brand-black p-4 sm:p-8">
              <div className="h-full bg-gray-900 rounded-lg p-3 sm:p-6 font-mono text-[10px] sm:text-sm overflow-hidden">
                {activeMedia === 'ledger' && <LedgerDigitized />}
                {activeMedia === 'photo' && <PhotoDigitized />}
                {activeMedia === 'blueprint' && <BlueprintDigitized />}
                {activeMedia === 'letter' && <LetterDigitized />}
              </div>
            </div>

            {/* BEFORE: Historical Document (Overlay with clip) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {activeMedia === 'ledger' && <LedgerOriginal />}
              {activeMedia === 'photo' && <PhotoOriginal />}
              {activeMedia === 'blueprint' && <BlueprintOriginal />}
              {activeMedia === 'letter' && <LetterOriginal />}
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-historic-sepia/90 text-white px-2 sm:px-3 py-1 rounded font-mono text-[10px] sm:text-xs">
              {currentMedia.beforeLabel}
            </div>
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-insight-cyan/90 text-white px-2 sm:px-3 py-1 rounded font-mono text-[10px] sm:text-xs">
              {currentMedia.afterLabel}
            </div>
          </div>

          {/* Instruction hint */}
          <p className="text-center text-gray-600 font-mono text-xs mt-4">
            ← Ziehe den Slider um die Transformation zu sehen →
          </p>
        </div>

        {/* Engineer Hook */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📜',
                title: 'Echte Herausforderung',
                description: 'Kurrentschrift, verblasste Tinte, beschädigte Dokumente. Kein sauberes Dataset, sondern echte Archivqualität.',
              },
              {
                icon: '🧠',
                title: 'Cutting-Edge ML',
                description: 'OCR, Layout-Analyse, NLP, Computer Vision. Trainiere Custom Models auf historischen Schweizer Daten.',
              },
              {
                icon: '🏆',
                title: 'Werde bezahlt',
                description: 'Der gesamte Überschuss fliesst ins Preisgeld. Gewinnercode wird Open Source veröffentlicht.',
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

// ═══════════════════════════════════════════════════════════════════════════════
// LEDGER (Lohnbuch) Components
// ═══════════════════════════════════════════════════════════════════════════════

function LedgerOriginal() {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Aged paper background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #f4e4c1 0%, #e8d4a8 25%, #d9c496 50%, #e2d1a3 75%, #f0e0b8 100%)',
        }}
      />

      {/* Paper aging effects */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Coffee/water stain */}
      <div className="absolute top-4 right-8 w-24 h-20 rounded-full opacity-20" style={{
        background: 'radial-gradient(ellipse, #8b6914 0%, transparent 70%)',
        transform: 'rotate(-15deg)',
      }} />

      {/* Fold line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-amber-900/30 to-transparent" />

      {/* Document content */}
      <div className="relative h-full p-4 sm:p-8">
        <div className="h-full bg-white/40 rounded shadow-inner p-3 sm:p-6 border border-amber-900/20">
          {/* Header with ornamental border */}
          <div className="text-center border-b-2 border-double border-amber-900/60 pb-3 mb-4">
            <div className="text-[8px] sm:text-xs text-amber-900/60 tracking-[0.2em] uppercase">
              ═══ Papierfabrik an der Sihl ═══
            </div>
            <div
              className="text-sm sm:text-xl font-bold text-amber-900 mt-1"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Lohnbuch
            </div>
            <div className="text-[10px] sm:text-xs text-amber-800/70 italic mt-1">
              Anno 1923 · Monat September
            </div>
          </div>

          {/* Column headers - handwritten style */}
          <div className="grid grid-cols-12 gap-1 text-[8px] sm:text-xs text-amber-900/70 border-b border-amber-900/30 pb-1 mb-2">
            <div className="col-span-5 italic">Name u. Beruf</div>
            <div className="col-span-2 text-right italic">Std.</div>
            <div className="col-span-2 text-right italic">Satz</div>
            <div className="col-span-3 text-right italic">Total Fr.</div>
          </div>

          {/* Handwritten entries */}
          <div className="space-y-2 sm:space-y-3">
            {[
              { name: 'Heinrich Müller', job: 'Maschinenf.', hours: '52', rate: '5.50', total: '286.—' },
              { name: 'Anna Weber', job: 'Sortiererin', hours: '48', rate: '2.95', total: '141.60' },
              { name: 'Josef Brunner', job: 'Lehrling', hours: '44', rate: '1.50', total: '66.—' },
              { name: 'Maria Huber', job: 'Packerin', hours: '50', rate: '2.40', total: '120.—' },
            ].map((entry, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-1 text-[9px] sm:text-sm border-b border-dashed border-amber-900/20 pb-1"
                style={{
                  fontFamily: 'Brush Script MT, cursive',
                  transform: `rotate(${Math.random() * 0.5 - 0.25}deg)`,
                }}
              >
                <div className="col-span-5 text-amber-900">
                  <span className="font-semibold">{entry.name}</span>
                  <span className="text-amber-800/70 text-[8px] sm:text-xs block">{entry.job}</span>
                </div>
                <div className="col-span-2 text-right text-amber-900">{entry.hours}</div>
                <div className="col-span-2 text-right text-amber-900">{entry.rate}</div>
                <div className="col-span-3 text-right text-amber-900 font-semibold">{entry.total}</div>
              </div>
            ))}
          </div>

          {/* Ink blot */}
          <div className="absolute bottom-12 left-16 w-3 h-3 bg-amber-900/40 rounded-full blur-[1px]"
            style={{ transform: 'scale(1.2, 0.8) rotate(25deg)' }}
          />

          {/* Faded stamp */}
          <div className="absolute bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-red-900/30 flex items-center justify-center transform rotate-12">
            <div className="text-[6px] sm:text-[8px] text-red-900/40 text-center font-bold uppercase tracking-wider">
              Geprüft<br/>Sep. 1923
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LedgerDigitized() {
  return (
    <>
      <div className="text-insight-cyan mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-fund-green rounded-full animate-pulse" />
        <span>// Extrahierte Daten · JSON</span>
      </div>
      <pre className="text-gray-300 whitespace-pre-wrap text-[9px] sm:text-sm leading-relaxed">
{`{
  "source": "Papierfabrik Sihl",
  "document_type": "wage_ledger",
  "period": "1923-09",
  "entries": [
    {
      "employee": "Heinrich Müller",
      "role": "Maschinenführer",
      "hours": 52,
      "hourly_rate_chf": 5.50,
      "total_chf": 286.00
    },
    {
      "employee": "Anna Weber",
      "role": "Sortiererin",
      "hours": 48,
      "hourly_rate_chf": 2.95,
      "total_chf": 141.60
    },
    {
      "employee": "Josef Brunner",
      "role": "Lehrling",
      "hours": 44,
      "hourly_rate_chf": 1.50,
      "total_chf": 66.00
    }
  ],
  "ocr_confidence": 0.94,
  "handwriting_style": "Kurrent"
}`}
      </pre>
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PHOTO (Fotografie) Components
// ═══════════════════════════════════════════════════════════════════════════════

function PhotoOriginal() {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Dark vignette background simulating old photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900" />

      {/* Sepia overlay */}
      <div className="absolute inset-0 bg-amber-900/30" />

      {/* Photo grain */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
      }} />

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
      }} />

      {/* Simulated factory interior scene */}
      <div className="absolute inset-4 sm:inset-8 flex flex-col justify-center">
        {/* Factory machinery silhouettes */}
        <div className="flex justify-around items-end h-1/2 opacity-80">
          {/* Large machine */}
          <div className="w-1/4 h-3/4 bg-gray-600/60 rounded-t-lg relative">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 border-gray-500/60" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gray-700/60" />
          </div>
          {/* Workers silhouette */}
          <div className="flex gap-2 sm:gap-4 items-end">
            <div className="w-6 sm:w-8 h-16 sm:h-24 bg-gray-600/70 rounded-t-full" />
            <div className="w-5 sm:w-7 h-14 sm:h-20 bg-gray-600/70 rounded-t-full" />
            <div className="w-6 sm:w-8 h-16 sm:h-22 bg-gray-600/70 rounded-t-full" />
          </div>
          {/* Another machine */}
          <div className="w-1/5 h-1/2 bg-gray-600/60 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-8 bg-gray-500/60" />
          </div>
        </div>

        {/* Floor/base */}
        <div className="h-8 sm:h-12 bg-gradient-to-t from-gray-900/80 to-transparent" />

        {/* Photo caption area */}
        <div className="mt-4 text-center">
          <div
            className="text-gray-400/80 text-[10px] sm:text-sm italic"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Maschinensaal · Papierfabrik Sihl · 1912
          </div>
        </div>
      </div>

      {/* Scratches and damage */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/10" />
      <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-white/5 blur-sm" />

      {/* Corner damage */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gray-900/50"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />
    </div>
  )
}

function PhotoDigitized() {
  return (
    <>
      <div className="text-insight-cyan mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-fund-green rounded-full animate-pulse" />
        <span>// Computer Vision Analysis</span>
      </div>
      <pre className="text-gray-300 whitespace-pre-wrap text-[9px] sm:text-sm leading-relaxed">
{`{
  "image_id": "sihl_1912_machinesaal_003",
  "date_estimated": "1912",
  "location": "Papierfabrik Sihl",
  "scene_type": "industrial_interior",
  "detected_objects": [
    {
      "type": "paper_machine",
      "confidence": 0.89,
      "bbox": [45, 120, 280, 340]
    },
    {
      "type": "person",
      "count": 3,
      "roles": ["operator", "worker", "worker"]
    },
    {
      "type": "drive_belt",
      "confidence": 0.76
    }
  ],
  "image_quality": {
    "damage_areas": 2,
    "restoration_needed": true
  }
}`}
      </pre>
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// BLUEPRINT (Bauplan) Components
// ═══════════════════════════════════════════════════════════════════════════════

function BlueprintOriginal() {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Blueprint blue background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }} />

      {/* Aged effect */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='b'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23b)'/%3E%3C/svg%3E")`,
      }} />

      {/* Technical drawing content */}
      <div className="absolute inset-4 sm:inset-8">
        {/* Title block */}
        <div className="absolute top-2 left-2 right-2 border border-white/30 p-2">
          <div className="text-[8px] sm:text-xs text-white/70 text-center tracking-wider">
            DAMPFMASCHINE · HAUPTANSICHT · MASSSTAB 1:20
          </div>
        </div>

        {/* Main drawing area */}
        <div className="absolute top-12 bottom-12 left-4 right-4 flex items-center justify-center">
          {/* Simplified steam engine schematic */}
          <svg viewBox="0 0 200 120" className="w-full h-full max-w-md" style={{ stroke: 'rgba(255,255,255,0.7)', fill: 'none', strokeWidth: '0.5' }}>
            {/* Cylinder */}
            <rect x="20" y="30" width="60" height="60" />
            <line x1="20" y1="60" x2="80" y2="60" />

            {/* Piston */}
            <rect x="70" y="45" width="10" height="30" />
            <line x1="80" y1="60" x2="110" y2="60" />

            {/* Flywheel */}
            <circle cx="140" cy="60" r="35" />
            <circle cx="140" cy="60" r="5" />
            <line x1="110" y1="60" x2="140" y2="40" />

            {/* Connecting rod */}
            <line x1="140" y1="40" x2="140" y2="60" strokeDasharray="2,2" />

            {/* Dimension lines */}
            <line x1="20" y1="100" x2="80" y2="100" strokeDasharray="1,1" />
            <text x="50" y="108" fontSize="6" fill="rgba(255,255,255,0.6)" textAnchor="middle">850mm</text>

            {/* Labels */}
            <text x="50" y="25" fontSize="5" fill="rgba(255,255,255,0.5)" textAnchor="middle">Zylinder</text>
            <text x="140" y="105" fontSize="5" fill="rgba(255,255,255,0.5)" textAnchor="middle">Schwungrad</text>
          </svg>
        </div>

        {/* Info block bottom right */}
        <div className="absolute bottom-2 right-2 border border-white/30 p-2 text-[6px] sm:text-[8px] text-white/60">
          <div>Gezeichnet: J. Meier</div>
          <div>Datum: 14. März 1887</div>
          <div>Blatt 3 von 12</div>
        </div>

        {/* Fold marks */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
      </div>
    </div>
  )
}

function BlueprintDigitized() {
  return (
    <>
      <div className="text-insight-cyan mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-fund-green rounded-full animate-pulse" />
        <span>// Vektorisierte Daten · SVG + Metadaten</span>
      </div>
      <pre className="text-gray-300 whitespace-pre-wrap text-[9px] sm:text-sm leading-relaxed">
{`{
  "drawing_id": "sihl_1887_dampf_003",
  "title": "Dampfmaschine Hauptansicht",
  "scale": "1:20",
  "date": "1887-03-14",
  "author": "J. Meier",
  "components": [
    {
      "name": "Zylinder",
      "type": "cylinder",
      "dimensions_mm": {
        "length": 850,
        "diameter": 420
      }
    },
    {
      "name": "Schwungrad",
      "type": "flywheel",
      "diameter_mm": 1200,
      "material": "Gusseisen"
    }
  ],
  "vectorized": true,
  "svg_path": "/output/sihl_1887_003.svg",
  "dxf_export": true
}`}
      </pre>
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// LETTER (Korrespondenz) Components
// ═══════════════════════════════════════════════════════════════════════════════

function LetterOriginal() {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Cream paper background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #faf6ee 0%, #f5efe3 50%, #ebe5d8 100%)',
        }}
      />

      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='l'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23l)'/%3E%3C/svg%3E")`,
      }} />

      {/* Letter content */}
      <div className="absolute inset-3 sm:inset-6 flex flex-col">
        {/* Letterhead */}
        <div className="text-center border-b border-amber-900/30 pb-2 mb-3">
          <div className="text-[8px] sm:text-xs text-amber-800/60 tracking-[0.15em] uppercase">
            Seiden-Spinnerei & Weberei
          </div>
          <div
            className="text-sm sm:text-lg font-bold text-amber-900/80"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Gebrüder Schwarzenbach
          </div>
          <div className="text-[7px] sm:text-[10px] text-amber-800/50">
            Thalwil am Zürichsee · Telephon No. 34
          </div>
        </div>

        {/* Date and address */}
        <div className="flex justify-between text-[8px] sm:text-xs text-amber-900/70 mb-3"
          style={{ fontFamily: 'Brush Script MT, cursive' }}
        >
          <div>
            <div>An die löbl. Direktion</div>
            <div>der Papierfabrik Sihl</div>
            <div className="italic">Zürich</div>
          </div>
          <div className="text-right">
            Thalwil, den 12. Mai 1901
          </div>
        </div>

        {/* Letter body - handwritten style */}
        <div
          className="flex-1 text-[9px] sm:text-sm text-amber-900/80 leading-relaxed space-y-2"
          style={{ fontFamily: 'Brush Script MT, cursive' }}
        >
          <p>Hochgeehrte Herren,</p>
          <p className="pl-4">
            Wir bestätigen dankend den Empfang Ihres geschätzten Schreibens vom 8. ds.
            und erlauben uns, Ihnen hiermit unsere Bestellung für das kommende Quartal zu übermitteln:
          </p>
          <p className="pl-8 text-[8px] sm:text-xs">
            200 Ries Seidenpapier No. 4<br/>
            150 Ries Packpapier, grau<br/>
            50 Ries Briefpapier, crème
          </p>
          <p className="pl-4">
            Lieferung erbeten bis Ende Juni.
          </p>
          <p className="mt-4">Mit vorzüglicher Hochachtung</p>
          <p className="pl-8 italic">Gebr. Schwarzenbach</p>
        </div>

        {/* Stamp */}
        <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16">
          <div className="w-full h-full rounded border-2 border-amber-800/20 flex items-center justify-center transform -rotate-6">
            <div className="text-[5px] sm:text-[7px] text-amber-800/30 text-center font-bold">
              EINGEGANGEN<br/>14. MAI 1901
            </div>
          </div>
        </div>
      </div>

      {/* Fold lines */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-amber-900/10" />
      <div className="absolute left-0 right-0 top-2/3 h-px bg-amber-900/10" />
    </div>
  )
}

function LetterDigitized() {
  return (
    <>
      <div className="text-insight-cyan mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-fund-green rounded-full animate-pulse" />
        <span>// NLP + Named Entity Recognition</span>
      </div>
      <pre className="text-gray-300 whitespace-pre-wrap text-[9px] sm:text-sm leading-relaxed">
{`{
  "document_type": "business_letter",
  "date": "1901-05-12",
  "sender": {
    "company": "Gebr. Schwarzenbach",
    "industry": "Seiden-Spinnerei",
    "location": "Thalwil"
  },
  "recipient": {
    "company": "Papierfabrik Sihl",
    "location": "Zürich"
  },
  "content_type": "order",
  "extracted_items": [
    {"product": "Seidenpapier No. 4", "qty": 200, "unit": "Ries"},
    {"product": "Packpapier grau", "qty": 150, "unit": "Ries"},
    {"product": "Briefpapier crème", "qty": 50, "unit": "Ries"}
  ],
  "delivery_deadline": "1901-06-30",
  "sentiment": "formal_positive",
  "entities_extracted": 8
}`}
      </pre>
    </>
  )
}
