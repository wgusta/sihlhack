'use client'

export function PrototypeVisualization() {
  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden p-8">
      <svg
        viewBox="0 0 600 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Grid - More subtle */}
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f5f5f5" strokeWidth="0.5" />
          </pattern>
          {/* Sun gradient */}
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
            <stop offset="70%" stopColor="#FBBF24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
          </radialGradient>
          {/* Water gradient */}
          <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
          {/* Glow filters */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="600" height="340" fill="url(#grid)" />

        {/* === 1. SUN === */}
        <g id="sun">
          <circle cx="180" cy="35" r="22" fill="url(#sunGradient)" />
          <circle cx="180" cy="35" r="14" fill="#FBBF24" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x1 = 180 + Math.cos(rad) * 18
            const y1 = 35 + Math.sin(rad) * 18
            const x2 = 180 + Math.cos(rad) * 26
            const y2 = 35 + Math.sin(rad) * 26
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FBBF24"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            )
          })}
          {/* Sun rays down */}
          <path
            d="M180 57 L180 75"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1s_linear_infinite]"
            strokeOpacity="0.7"
          />
        </g>

        {/* === 2. SOLAR PANEL === */}
        <g id="solar-panel">
          <rect x="130" y="80" width="100" height="55" rx="5" fill="#FBBF24" fillOpacity="0.15" stroke="#FBBF24" strokeWidth="2.5" />
          <path d="M130 102 L230 102 M130 124 L230 124" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M163 80 L163 135 M197 80 L197 135" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.4" />
          <rect x="137" y="87" width="20" height="10" rx="2" fill="white" fillOpacity="0.4" />
        </g>
        {/* Solar Panel Label - OUTSIDE */}
        <text x="180" y="152" textAnchor="middle" className="font-mono text-[11px] fill-solar-yellow font-bold">Solarmodul</text>
        <text x="180" y="164" textAnchor="middle" className="font-mono text-[9px] fill-gray-400">150W Peak</text>

        {/* === 3. HOUSES === */}
        {/* House 1 (Left) */}
        <g id="house-1">
          <path d="M20 160 L55 140 L90 160 L90 210 L20 210 Z" fill="#10B981" fillOpacity="0.12" stroke="#10B981" strokeWidth="2.5" />
          <path d="M20 160 L55 140 L90 160" fill="none" stroke="#10B981" strokeWidth="2.5" />
          {/* Window */}
          <rect x="45" y="175" width="20" height="20" rx="2" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1" />
        </g>
        <text x="55" y="230" textAnchor="middle" className="font-mono text-[11px] fill-grid-green font-bold">Haus 1</text>

        {/* House 2 (Right of center) */}
        <g id="house-2">
          <path d="M270 160 L305 140 L340 160 L340 210 L270 210 Z" fill="#10B981" fillOpacity="0.12" stroke="#10B981" strokeWidth="2.5" />
          <path d="M270 160 L305 140 L340 160" fill="none" stroke="#10B981" strokeWidth="2.5" />
          {/* Window */}
          <rect x="295" y="175" width="20" height="20" rx="2" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1" />
        </g>
        <text x="305" y="230" textAnchor="middle" className="font-mono text-[11px] fill-grid-green font-bold">Haus 2</text>

        {/* === 4. ELECTRICITY FLOWS === */}
        {/* Flow: Solar → House 1 */}
        <path
          d="M130 110 L90 155"
          stroke="#FBBF24"
          strokeWidth="3"
          strokeDasharray="6 5"
          className="animate-[dash_2s_linear_infinite]"
          filter="url(#glow)"
        />
        {/* Label for House 1 electricity */}
        <g transform="translate(95, 125)">
          <rect x="-20" y="-8" width="40" height="16" rx="4" fill="white" fillOpacity="0.9" />
          <text x="0" y="4" textAnchor="middle" className="font-mono text-[10px] fill-solar-yellow font-bold">Strom</text>
        </g>

        {/* Flow: Solar → House 2 */}
        <path
          d="M230 110 L270 155"
          stroke="#FBBF24"
          strokeWidth="3"
          strokeDasharray="6 5"
          className="animate-[dash_2s_linear_infinite]"
          filter="url(#glow)"
        />
        {/* Label for House 2 electricity */}
        <g transform="translate(265, 125)">
          <rect x="-20" y="-8" width="40" height="16" rx="4" fill="white" fillOpacity="0.9" />
          <text x="0" y="4" textAnchor="middle" className="font-mono text-[10px] fill-solar-yellow font-bold">Strom</text>
        </g>

        {/* Flow: Solar → Immersion Tank (Rest) */}
        <path
          d="M180 135 L180 195"
          stroke="#FBBF24"
          strokeWidth="3"
          strokeDasharray="6 5"
          className="animate-[dash_2s_linear_infinite]"
          filter="url(#glow)"
        />
        {/* Label for rest electricity */}
        <g transform="translate(180, 175)">
          <rect x="-35" y="-8" width="70" height="16" rx="4" fill="white" fillOpacity="0.9" />
          <text x="0" y="4" textAnchor="middle" className="font-mono text-[10px] fill-solar-yellow font-bold">Rest-Strom</text>
        </g>

        {/* === 5. SIHLICON HUB CORE (Immersion Tank) === */}
        <g id="sihlicon-core">
          <rect x="120" y="200" width="120" height="95" rx="10" fill="#1A1A1A" />
          <rect x="128" y="218" width="104" height="65" rx="6" fill="url(#waterGradient)" fillOpacity="0.35" />
          {/* Server blades */}
          {[142, 162, 182, 202, 222].map((x, i) => (
            <rect
              key={i}
              x={x - 6}
              y="228"
              width="12"
              height="50"
              rx="2"
              fill="#3B82F6"
              fillOpacity="0.75"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          ))}
          {/* Bubbles */}
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx={135 + (i * 16)}
              cy={255}
              r="2.5"
              fill="white"
              fillOpacity="0.6"
              className="animate-bounce"
              style={{ animationDelay: `${i * 0.12}s`, animationDuration: `${1.5 + (i % 3) * 0.3}s` }}
            />
          ))}
        </g>
        {/* Core Labels - OUTSIDE */}
        <text x="180" y="310" textAnchor="middle" className="font-mono text-[12px] fill-brand-black font-bold">Sihlicon Hub Core</text>
        <text x="180" y="324" textAnchor="middle" className="font-mono text-[9px] fill-gray-500">Immersionskühlung · 20L Tank</text>

        {/* === 6. HEAT RETURN FLOWS === */}
        {/* Heat → House 1 (Warmwasser) */}
        <path
          d="M135 295 L70 210"
          stroke="#FF6B35"
          strokeWidth="4"
          strokeDasharray="8 5"
          className="animate-[dash_1.5s_linear_infinite]"
          filter="url(#glow)"
        />
        {/* Label for Warmwasser */}
        <g transform="translate(85, 260)">
          <rect x="-40" y="-10" width="80" height="20" rx="6" fill="#FF6B35" fillOpacity="0.15" stroke="#FF6B35" strokeWidth="1" />
          <text x="0" y="5" textAnchor="middle" className="font-mono text-[10px] fill-thermal-orange font-bold">Warmwasser</text>
        </g>

        {/* Heat → House 2 (Raumheizung) */}
        <path
          d="M225 295 L290 210"
          stroke="#FF6B35"
          strokeWidth="4"
          strokeDasharray="8 5"
          className="animate-[dash_1.5s_linear_infinite]"
          filter="url(#glow)"
        />
        {/* Label for Raumheizung */}
        <g transform="translate(275, 260)">
          <rect x="-45" y="-10" width="90" height="20" rx="6" fill="#FF6B35" fillOpacity="0.15" stroke="#FF6B35" strokeWidth="1" />
          <text x="0" y="5" textAnchor="middle" className="font-mono text-[10px] fill-thermal-orange font-bold">Raumheizung</text>
        </g>

        {/* === 7. COMPUTE / AI OUTPUT === */}
        <g id="compute-section">
          {/* Main compute flow line */}
          <path
            d="M240 248 L400 248"
            stroke="#A855F7"
            strokeWidth="3"
            strokeDasharray="6 5"
            className="animate-[dash_2s_linear_infinite]"
            filter="url(#glow)"
          />
          
          {/* Branch to AI-Training */}
          <path
            d="M400 248 L430 200"
            stroke="#A855F7"
            strokeWidth="3"
            strokeDasharray="6 5"
            className="animate-[dash_2s_linear_infinite]"
          />
          
          {/* Branch to AI-Inference */}
          <path
            d="M400 248 L430 290"
            stroke="#A855F7"
            strokeWidth="3"
            strokeDasharray="6 5"
            className="animate-[dash_2s_linear_infinite]"
          />

          {/* Rechenleistung Label - on background */}
          <g transform="translate(320, 235)">
            <rect x="-55" y="-10" width="110" height="20" rx="6" fill="white" fillOpacity="0.95" stroke="#A855F7" strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" className="font-mono text-[10px] fill-purple-600 font-bold">Rechenleistung</text>
          </g>
          
          {/* AI-Training Box */}
          <g transform="translate(430, 180)">
            <rect x="0" y="0" width="130" height="45" rx="8" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="2" />
            {/* Neural network icon */}
            <circle cx="25" cy="22" r="10" fill="none" stroke="#A855F7" strokeWidth="2" />
            <path d="M20 17 L30 27 M30 17 L20 27" stroke="#A855F7" strokeWidth="1.5" />
            <circle cx="25" cy="22" r="5" fill="#A855F7" fillOpacity="0.3" />
            <text x="75" y="20" textAnchor="middle" className="font-mono text-[11px] fill-purple-600 font-bold">AI-Training</text>
            <text x="75" y="34" textAnchor="middle" className="font-mono text-[8px] fill-purple-400">GPU Workloads</text>
          </g>
          
          {/* AI-Inference Box */}
          <g transform="translate(430, 270)">
            <rect x="0" y="0" width="130" height="45" rx="8" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="2" />
            {/* Lightning icon */}
            <path d="M25 8 L20 22 L27 22 L22 36" stroke="#A855F7" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="75" y="20" textAnchor="middle" className="font-mono text-[11px] fill-purple-600 font-bold">AI-Inference</text>
            <text x="75" y="34" textAnchor="middle" className="font-mono text-[8px] fill-purple-400">Low Latency</text>
          </g>
        </g>

        {/* === 8. LEGEND BOX === */}
        <g transform="translate(380, 60)">
          <rect x="0" y="0" width="180" height="90" rx="10" fill="white" fillOpacity="0.95" stroke="#e5e5e5" strokeWidth="1" />
          <text x="90" y="20" textAnchor="middle" className="font-mono text-[10px] fill-brand-black font-bold">ENERGIEFLUSS</text>
          
          {/* Legend items */}
          <g transform="translate(15, 35)">
            <line x1="0" y1="0" x2="25" y2="0" stroke="#FBBF24" strokeWidth="3" strokeDasharray="4 3" />
            <text x="35" y="4" className="font-mono text-[9px] fill-gray-600">Solarstrom</text>
          </g>
          <g transform="translate(15, 52)">
            <line x1="0" y1="0" x2="25" y2="0" stroke="#FF6B35" strokeWidth="3" strokeDasharray="4 3" />
            <text x="35" y="4" className="font-mono text-[9px] fill-gray-600">Abwärme (45°C)</text>
          </g>
          <g transform="translate(15, 69)">
            <line x1="0" y1="0" x2="25" y2="0" stroke="#A855F7" strokeWidth="3" strokeDasharray="4 3" />
            <text x="35" y="4" className="font-mono text-[9px] fill-gray-600">Rechenleistung</text>
          </g>
        </g>
      </svg>

      {/* Stats overlay - Bottom */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
        <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-md">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-solar-yellow animate-pulse" />
              <span className="font-mono text-[10px] text-brand-black font-semibold">P_solar: 150W</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-compute-blue" />
              <span className="font-mono text-[10px] text-brand-black font-semibold">P_compute: 140W</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-thermal-orange" />
              <span className="font-mono text-[10px] text-brand-black font-semibold">ΔT: +25°C</span>
            </div>
          </div>
        </div>
        
        <div className="text-right bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-md">
          <span className="font-accent text-base text-thermal-orange font-semibold">Sihlicon Hub Demo</span>
          <span className="font-mono text-[9px] text-historic-sepia block mt-1">Ein-Knopf-Demo · Mini-ITX</span>
        </div>
      </div>
    </div>
  )
}
