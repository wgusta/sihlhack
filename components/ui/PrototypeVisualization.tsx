export function PrototypeVisualization() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Desktop Version */}
      <div className="hidden md:block bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden p-8">
        {/* V1 Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="bg-solar-yellow/20 text-solar-yellow px-3 py-1 rounded-full font-mono text-xs font-bold border border-solar-yellow/30">
              v1: Demo Scale
            </span>
            <span className="text-gray-400 font-mono text-xs">150W · 20L Tank · Proof of Concept</span>
          </div>
        </div>

        <svg
          viewBox="0 0 720 420"
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
          <rect width="720" height="420" fill="url(#grid)" />

          {/* === 1. SUN === */}
          <g id="sun">
            <circle cx="220" cy="40" r="26" fill="url(#sunGradient)" />
            <circle cx="220" cy="40" r="16" fill="#FBBF24" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x1 = 220 + Math.cos(rad) * 20
              const y1 = 40 + Math.sin(rad) * 20
              const x2 = 220 + Math.cos(rad) * 30
              const y2 = 40 + Math.sin(rad) * 30
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
              d="M220 66 L220 88"
              stroke="#FBBF24"
              strokeWidth="2"
              strokeDasharray="4 3"
              className="animate-[dash_1s_linear_infinite]"
              strokeOpacity="0.7"
            />
          </g>

          {/* === 2. SOLAR PANEL === */}
          <g id="solar-panel">
            <rect x="160" y="95" width="120" height="65" rx="6" fill="#FBBF24" fillOpacity="0.15" stroke="#FBBF24" strokeWidth="2.5" />
            <path d="M160 120 L280 120 M160 145 L280 145" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M200 95 L200 160 M240 95 L240 160" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.4" />
            <rect x="168" y="103" width="24" height="12" rx="2" fill="white" fillOpacity="0.4" />
          </g>
          {/* Solar Panel Label - OUTSIDE */}
          <text x="220" y="180" textAnchor="middle" className="font-mono text-[12px] fill-solar-yellow font-bold">Solarmodul</text>
          <text x="220" y="194" textAnchor="middle" className="font-mono text-[10px] fill-gray-400">150W Peak</text>

          {/* === 3. BATTERY (NEW) === */}
          <g id="battery">
            <rect x="40" y="95" width="60" height="65" rx="6" fill="#22C55E" fillOpacity="0.1" stroke="#22C55E" strokeWidth="2.5" />
            {/* Battery terminal */}
            <rect x="55" y="88" width="30" height="7" rx="2" fill="#22C55E" />
            {/* Battery level bars */}
            <rect x="50" y="125" width="40" height="8" rx="2" fill="#22C55E" fillOpacity="0.8" />
            <rect x="50" y="112" width="40" height="8" rx="2" fill="#22C55E" fillOpacity="0.6" className="animate-pulse" />
            <rect x="50" y="99" width="40" height="8" rx="2" fill="#22C55E" fillOpacity="0.3" />
          </g>
          {/* Battery Label */}
          <text x="70" y="180" textAnchor="middle" className="font-mono text-[12px] fill-grid-green font-bold">Batterie</text>
          <text x="70" y="194" textAnchor="middle" className="font-mono text-[10px] fill-gray-400">2 kWh</text>

          {/* Flow: Solar → Battery */}
          <path
            d="M160 128 L100 128"
            stroke="#FBBF24"
            strokeWidth="3"
            strokeDasharray="6 5"
            className="animate-[dash_2s_linear_infinite]"
            filter="url(#glow)"
          />

          {/* Flow: Battery → Core */}
          <path
            d="M70 160 L70 210 L150 240"
            stroke="#22C55E"
            strokeWidth="3"
            strokeDasharray="6 5"
            className="animate-[dash_2s_linear_infinite]"
            filter="url(#glow)"
          />

          {/* === 4. HOUSES === */}
          {/* House 1 (moved down-left) */}
          <g id="house-1">
            <path d="M450 185 L495 160 L540 185 L540 250 L450 250 Z" fill="#10B981" fillOpacity="0.12" stroke="#10B981" strokeWidth="2.5" />
            <path d="M450 185 L495 160 L540 185" fill="none" stroke="#10B981" strokeWidth="2.5" />
            {/* Window */}
            <rect x="480" y="205" width="24" height="24" rx="3" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1" />
          </g>
          <text x="495" y="275" textAnchor="middle" className="font-mono text-[12px] fill-grid-green font-bold">Gebäude</text>

          {/* === 5. ELECTRICITY FLOWS === */}
          {/* Flow: Solar → Sihlicon Hub Core */}
          <path
            d="M220 160 L220 230"
            stroke="#FBBF24"
            strokeWidth="3"
            strokeDasharray="6 5"
            className="animate-[dash_2s_linear_infinite]"
            filter="url(#glow)"
          />
          {/* Label for electricity to core */}
          <text x="220" y="210" textAnchor="middle" className="font-mono text-[11px] fill-solar-yellow font-bold">Strom</text>

          {/* === 5. SIHLICON HUB CORE (Immersion Tank) === */}
          <g id="sihlicon-core">
            <rect x="150" y="240" width="140" height="105" rx="12" fill="#1A1A1A" />
            <rect x="160" y="260" width="120" height="72" rx="7" fill="url(#waterGradient)" fillOpacity="0.35" />
            {/* Server blades */}
            {[175, 200, 225, 250, 275].map((x, i) => (
              <rect
                key={i}
                x={x - 7}
                y="272"
                width="14"
                height="52"
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
                cx={170 + (i * 18)}
                cy={305}
                r="3"
                fill="white"
                fillOpacity="0.6"
                className="animate-bounce"
                style={{ animationDelay: `${i * 0.12}s`, animationDuration: `${1.5 + (i % 3) * 0.3}s` }}
              />
            ))}
          </g>
          {/* Core Labels - OUTSIDE */}
          <text x="220" y="365" textAnchor="middle" className="font-mono text-[13px] fill-brand-black font-bold">Sihlicon Hub Core</text>
          <text x="220" y="380" textAnchor="middle" className="font-mono text-[10px] fill-gray-500">Immersionskühlung · 20L Tank</text>

          {/* === 7. HEAT RETURN FLOWS === */}
          {/* Heat → Gebäude */}
          <path
            d="M290 290 L450 220"
            stroke="#FF6B35"
            strokeWidth="4"
            strokeDasharray="8 5"
            className="animate-[dash_1.5s_linear_infinite]"
            filter="url(#glow)"
          />
          {/* Label for Heat */}
          <text x="380" y="240" textAnchor="middle" className="font-mono text-[12px] fill-thermal-orange font-bold">Wärme</text>
          <text x="380" y="254" textAnchor="middle" className="font-mono text-[10px] fill-thermal-orange">45-60°C</text>

          {/* === 7. COMPUTE / AI OUTPUT === */}
          <g id="compute-section">
            {/* Main compute flow line - FROM RIGHT OF CORE */}
            <path
              d="M290 340 L460 340"
              stroke="#A855F7"
              strokeWidth="3.5"
              strokeDasharray="6 5"
              className="animate-[dash_2s_linear_infinite]"
              filter="url(#glow)"
            />
            
            {/* Branch to AI-Training */}
            <path
              d="M460 340 L550 240"
              stroke="#A855F7"
              strokeWidth="3.5"
              strokeDasharray="6 5"
              className="animate-[dash_2s_linear_infinite]"
            />
            
            {/* Branch to AI-Inference */}
            <path
              d="M460 340 L550 340"
              stroke="#A855F7"
              strokeWidth="3.5"
              strokeDasharray="6 5"
              className="animate-[dash_2s_linear_infinite]"
            />

            {/* Rechenleistung Label - PLAIN TEXT NO BOX */}
            <text x="390" y="330" textAnchor="middle" className="font-mono text-[12px] fill-purple-600 font-bold">Rechenleistung</text>
            
            {/* AI-Training Box */}
            <g transform="translate(555, 200)">
              <rect x="0" y="0" width="130" height="50" rx="8" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="2" />
              {/* Neural network icon */}
              <circle cx="24" cy="25" r="10" fill="none" stroke="#A855F7" strokeWidth="1.5" />
              <path d="M19 20 L29 30 M29 20 L19 30" stroke="#A855F7" strokeWidth="1.2" />
              <circle cx="24" cy="25" r="5" fill="#A855F7" fillOpacity="0.3" />
              <text x="80" y="22" textAnchor="middle" className="font-mono text-[12px] fill-purple-600 font-bold">AI-Training</text>
              <text x="80" y="36" textAnchor="middle" className="font-mono text-[9px] fill-purple-400">GPU Workloads</text>
            </g>
            
            {/* AI-Inference Box */}
            <g transform="translate(555, 310)">
              <rect x="0" y="0" width="130" height="50" rx="8" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="2" />
              {/* Lightning icon */}
              <path d="M24 8 L18 25 L27 25 L21 42" stroke="#A855F7" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <text x="80" y="22" textAnchor="middle" className="font-mono text-[12px] fill-purple-600 font-bold">AI-Inference</text>
              <text x="80" y="36" textAnchor="middle" className="font-mono text-[9px] fill-purple-400">Low Latency</text>
            </g>
          </g>

          {/* === 9. LEGEND BOX === */}
          <g transform="translate(520, 40)">
            <rect x="0" y="0" width="180" height="120" rx="10" fill="white" fillOpacity="0.95" stroke="#e5e5e5" strokeWidth="1" />
            <text x="90" y="22" textAnchor="middle" className="font-mono text-[11px] fill-brand-black font-bold">ENERGIEFLUSS</text>
            
            {/* Legend items */}
            <g transform="translate(16, 42)">
              <line x1="0" y1="0" x2="28" y2="0" stroke="#FBBF24" strokeWidth="3" strokeDasharray="4 3" />
              <text x="38" y="4" className="font-mono text-[10px] fill-gray-600">Solarstrom</text>
            </g>
            <g transform="translate(16, 60)">
              <line x1="0" y1="0" x2="28" y2="0" stroke="#22C55E" strokeWidth="3" strokeDasharray="4 3" />
              <text x="38" y="4" className="font-mono text-[10px] fill-gray-600">Batterie → Core</text>
            </g>
            <g transform="translate(16, 78)">
              <line x1="0" y1="0" x2="28" y2="0" stroke="#FF6B35" strokeWidth="3" strokeDasharray="4 3" />
              <text x="38" y="4" className="font-mono text-[10px] fill-gray-600">Abwärme (45-60°C)</text>
            </g>
            <g transform="translate(16, 96)">
              <line x1="0" y1="0" x2="28" y2="0" stroke="#A855F7" strokeWidth="3" strokeDasharray="4 3" />
              <text x="38" y="4" className="font-mono text-[10px] fill-gray-600">Rechenleistung</text>
            </g>
          </g>
        </svg>

        {/* Stats overlay - Bottom - Desktop */}
        <div className="mt-4 flex justify-between items-end">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-solar-yellow/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-solar-yellow/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-solar-yellow animate-pulse" />
                <span className="font-mono text-[10px] text-brand-black font-semibold">P_solar: 150W</span>
              </div>
            </div>
            <div className="bg-grid-green/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-grid-green/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-grid-green animate-pulse" />
                <span className="font-mono text-[10px] text-brand-black font-semibold">Batterie: 2 kWh</span>
              </div>
            </div>
            <div className="bg-compute-blue/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-compute-blue/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-compute-blue" />
                <span className="font-mono text-[10px] text-brand-black font-semibold">P_compute: 140W</span>
              </div>
            </div>
            <div className="bg-thermal-orange/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-thermal-orange/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-thermal-orange" />
                <span className="font-mono text-[10px] text-brand-black font-semibold">ΔT: +25°C</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <span className="font-accent text-lg text-thermal-orange font-semibold">Sihlicon Hub Demo</span>
            <span className="font-mono text-[10px] text-historic-sepia block mt-1">Solar → Batterie → Compute → Wärme</span>
          </div>
        </div>
      </div>

      {/* Mobile Version - Simplified vertical layout */}
      <div className="md:hidden bg-white rounded-2xl border-2 border-gray-100 shadow-xl overflow-hidden p-4">
        {/* V1 Badge - Mobile */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-solar-yellow/20 text-solar-yellow px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border border-solar-yellow/30">
            v1: Demo Scale
          </span>
          <span className="text-gray-400 font-mono text-[9px]">150W · 20L</span>
        </div>

        <svg
          viewBox="0 0 300 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Mobile Background */}
          <defs>
            <pattern id="gridMobile" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f5f5f5" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="sunGradientMobile" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
              <stop offset="70%" stopColor="#FBBF24" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="waterGradientMobile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect width="300" height="450" fill="url(#gridMobile)" />

          {/* === 1. SUN - Mobile === */}
          <g id="sun-mobile">
            <circle cx="150" cy="30" r="20" fill="url(#sunGradientMobile)" />
            <circle cx="150" cy="30" r="12" fill="#FBBF24" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x1 = 150 + Math.cos(rad) * 16
              const y1 = 30 + Math.sin(rad) * 16
              const x2 = 150 + Math.cos(rad) * 24
              const y2 = 30 + Math.sin(rad) * 24
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#FBBF24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              )
            })}
          </g>

          {/* === 2. SOLAR PANEL - Mobile === */}
          <g id="solar-panel-mobile">
            <rect x="100" y="60" width="100" height="45" rx="5" fill="#FBBF24" fillOpacity="0.15" stroke="#FBBF24" strokeWidth="2" />
            <path d="M100 78 L200 78 M100 95 L200 95" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M133 60 L133 105 M166 60 L166 105" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
          </g>
          <text x="150" y="120" textAnchor="middle" className="font-mono text-[11px] fill-solar-yellow font-bold">Solar (150W)</text>

          {/* === 3. BATTERY - Mobile === */}
          <g id="battery-mobile">
            <rect x="35" y="140" width="50" height="45" rx="5" fill="#22C55E" fillOpacity="0.1" stroke="#22C55E" strokeWidth="2" />
            {/* Battery terminal */}
            <rect x="48" y="135" width="24" height="5" rx="2" fill="#22C55E" />
            {/* Battery level bars */}
            <rect x="42" y="160" width="36" height="7" rx="2" fill="#22C55E" fillOpacity="0.8" />
            <rect x="42" y="150" width="36" height="7" rx="2" fill="#22C55E" fillOpacity="0.5" className="animate-pulse" />
          </g>
          <text x="60" y="200" textAnchor="middle" className="font-mono text-[9px] fill-grid-green font-bold">Batterie</text>

          {/* Solar → Battery */}
          <path
            d="M100 85 L85 85 L85 140"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* === 4. HOUSE/BUILDING - Mobile === */}
          <g id="house-mobile">
            <g transform="translate(215, 140)">
              <path d="M0 25 L35 5 L70 25 L70 65 L0 65 Z" fill="#10B981" fillOpacity="0.12" stroke="#10B981" strokeWidth="2" />
              <path d="M0 25 L35 5 L70 25" fill="none" stroke="#10B981" strokeWidth="2" />
            </g>
          </g>
          <text x="250" y="220" textAnchor="middle" className="font-mono text-[9px] fill-grid-green font-bold">Gebäude</text>

          {/* === 5. SIHLICON HUB CORE - Mobile (Centered) === */}
          <g id="core-mobile" transform="translate(75, 235)">
            <rect x="0" y="0" width="150" height="70" rx="8" fill="#1A1A1A" />
            <rect x="8" y="10" width="134" height="50" rx="4" fill="url(#waterGradientMobile)" fillOpacity="0.35" />
            {/* Server blades */}
            {[25, 50, 75, 100, 125].map((x, i) => (
              <rect
                key={i}
                x={x - 6}
                y="16"
                width="12"
                height="38"
                rx="2"
                fill="#3B82F6"
                fillOpacity="0.75"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </g>
          <text x="150" y="320" textAnchor="middle" className="font-mono text-[11px] fill-brand-black font-bold">Sihlicon Hub Core</text>
          <text x="150" y="333" textAnchor="middle" className="font-mono text-[8px] fill-gray-500">Thermische Kühlung</text>

          {/* Battery → Core */}
          <path
            d="M60 185 L60 270 L75 270"
            stroke="#22C55E"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* Solar → Core */}
          <path
            d="M150 120 L150 235"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* === 6. HEAT RETURN - Mobile === */}
          <g id="heat-return-mobile">
            {/* Arrow to building */}
            <path
              d="M225 270 L250 205"
              stroke="#FF6B35"
              strokeWidth="3"
              strokeDasharray="4 3"
              className="animate-[dash_1.5s_linear_infinite]"
            />
          </g>
          <text x="260" y="248" textAnchor="middle" className="font-mono text-[9px] fill-thermal-orange font-bold">Wärme ↑</text>

          {/* === 7. COMPUTE OUTPUT - Mobile (Bottom) === */}
          <g id="compute-mobile">
            <path
              d="M150 305 L150 345"
              stroke="#A855F7"
              strokeWidth="3"
              strokeDasharray="4 3"
              className="animate-[dash_2s_linear_infinite]"
            />
            
            {/* AI Boxes - Side by side */}
            <g transform="translate(30, 355)">
              <rect x="0" y="0" width="110" height="35" rx="6" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="1.5" />
              <text x="55" y="15" textAnchor="middle" className="font-mono text-[10px] fill-purple-600 font-bold">AI-Training</text>
              <text x="55" y="27" textAnchor="middle" className="font-mono text-[7px] fill-purple-400">GPU Workloads</text>
            </g>
            <g transform="translate(160, 355)">
              <rect x="0" y="0" width="110" height="35" rx="6" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="1.5" />
              <text x="55" y="15" textAnchor="middle" className="font-mono text-[10px] fill-purple-600 font-bold">AI-Inference</text>
              <text x="55" y="27" textAnchor="middle" className="font-mono text-[7px] fill-purple-400">Low Latency</text>
            </g>
          </g>
          <text x="150" y="350" textAnchor="middle" className="font-mono text-[9px] fill-purple-500 font-bold">Rechenleistung ↓</text>
        </svg>

        {/* Mobile Legend - Below SVG */}
        <div className="mt-4 p-3 bg-gray-50 rounded-xl">
          <div className="text-center mb-2">
            <span className="font-mono text-[10px] text-brand-black font-bold">ENERGIEFLUSS</span>
          </div>
          <div className="flex justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-1">
              <div className="w-5 h-0.5 bg-solar-yellow" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #FBBF24 0, #FBBF24 4px, transparent 4px, transparent 7px)' }} />
              <span className="font-mono text-[8px] text-gray-600">Solar</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-0.5 bg-grid-green" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #22C55E 0, #22C55E 4px, transparent 4px, transparent 7px)' }} />
              <span className="font-mono text-[8px] text-gray-600">Batterie</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-0.5 bg-thermal-orange" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #FF6B35 0, #FF6B35 4px, transparent 4px, transparent 7px)' }} />
              <span className="font-mono text-[8px] text-gray-600">Wärme</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-0.5 bg-purple-500" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #A855F7 0, #A855F7 4px, transparent 4px, transparent 7px)' }} />
              <span className="font-mono text-[8px] text-gray-600">Compute</span>
            </div>
          </div>
        </div>

        {/* Mobile Stats - Below */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="bg-solar-yellow/10 rounded-lg p-2 text-center">
            <div className="w-2 h-2 rounded-full bg-solar-yellow mx-auto mb-1 animate-pulse" />
            <span className="font-mono text-[8px] text-brand-black font-semibold block">150W</span>
            <span className="font-mono text-[6px] text-gray-500">Solar</span>
          </div>
          <div className="bg-grid-green/10 rounded-lg p-2 text-center">
            <div className="w-2 h-2 rounded-full bg-grid-green mx-auto mb-1 animate-pulse" />
            <span className="font-mono text-[8px] text-brand-black font-semibold block">2 kWh</span>
            <span className="font-mono text-[6px] text-gray-500">Batterie</span>
          </div>
          <div className="bg-compute-blue/10 rounded-lg p-2 text-center">
            <div className="w-2 h-2 rounded-full bg-compute-blue mx-auto mb-1" />
            <span className="font-mono text-[8px] text-brand-black font-semibold block">140W</span>
            <span className="font-mono text-[6px] text-gray-500">Compute</span>
          </div>
          <div className="bg-thermal-orange/10 rounded-lg p-2 text-center">
            <div className="w-2 h-2 rounded-full bg-thermal-orange mx-auto mb-1" />
            <span className="font-mono text-[8px] text-brand-black font-semibold block">+25°C</span>
            <span className="font-mono text-[6px] text-gray-500">ΔT</span>
          </div>
        </div>

        {/* Mobile Title */}
        <div className="mt-3 text-center">
          <span className="font-accent text-sm text-thermal-orange font-semibold">Sihlicon Hub Demo</span>
          <span className="font-mono text-[8px] text-historic-sepia block">Ein-Knopf-Demo · Mini-ITX · 20L Tank</span>
        </div>
      </div>

      {/* === V2 DESCRIPTION SECTION === */}
      <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-grid-green/20 text-grid-green px-3 py-1 rounded-full font-mono text-xs font-bold border border-grid-green/30">
            v2: Production Scale
          </span>
          <span className="text-gray-500 font-mono text-xs">Coming Next</span>
        </div>
        
        <h3 className="font-accent text-xl md:text-2xl text-brand-black mb-4">
          The Economically Viable Next Step
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Version 2 scales the proof-of-concept to an economically self-sustaining system. 
              Where v1 demonstrates the closed-loop energy flow with a 150W panel and 20L tank, 
              <strong className="text-brand-black"> v2 targets real building integration</strong>: 
              multi-kW solar arrays, industrial-grade immersion cooling, and full HVAC integration.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-solar-yellow font-bold">☀</span>
                <span className="text-gray-700"><strong>5 bis 20 kW</strong> solar capacity per building unit</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-compute-blue font-bold">⬢</span>
                <span className="text-gray-700"><strong>GPU clusters</strong> with commercial heat recovery</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-thermal-orange font-bold">◉</span>
                <span className="text-gray-700"><strong>200L+ tanks</strong> for real hot water demand</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-3">v1 → v2 Scaling</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-gray-600">Solar Input</span>
                <span className="font-mono text-sm">
                  <span className="text-gray-400">150W</span>
                  <span className="text-gray-300 mx-2">→</span>
                  <span className="text-grid-green font-bold">5-20 kW</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-gray-600">Tank Volume</span>
                <span className="font-mono text-sm">
                  <span className="text-gray-400">20L</span>
                  <span className="text-gray-300 mx-2">→</span>
                  <span className="text-grid-green font-bold">200-500L</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-gray-600">Heat Output</span>
                <span className="font-mono text-sm">
                  <span className="text-gray-400">Demo</span>
                  <span className="text-gray-300 mx-2">→</span>
                  <span className="text-grid-green font-bold">Full Building</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-gray-600">Economics</span>
                <span className="font-mono text-sm">
                  <span className="text-gray-400">N/A</span>
                  <span className="text-gray-300 mx-2">→</span>
                  <span className="text-grid-green font-bold">Revenue-positive</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 text-xs mt-6 font-mono">
          The hackathon builds v1 as a measurable closed-loop proof. The extrapolation to v2 demonstrates 
          commercial viability: same physics, larger scale, real economic returns from compute revenue and energy savings.
        </p>
      </div>
    </div>
  )
}
