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
              d="M460 340 L550 270"
              stroke="#A855F7"
              strokeWidth="3.5"
              strokeDasharray="6 5"
              className="animate-[dash_2s_linear_infinite]"
            />
            
            {/* Branch to AI-Inference */}
            <path
              d="M460 340 L550 370"
              stroke="#A855F7"
              strokeWidth="3.5"
              strokeDasharray="6 5"
              className="animate-[dash_2s_linear_infinite]"
            />

            {/* Rechenleistung Label - PLAIN TEXT NO BOX */}
            <text x="390" y="330" textAnchor="middle" className="font-mono text-[12px] fill-purple-600 font-bold">Rechenleistung</text>
            
            {/* AI-Training Box */}
            <g transform="translate(555, 230)">
              <rect x="0" y="0" width="110" height="44" rx="8" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="2" />
              {/* Neural network icon */}
              <circle cx="20" cy="22" r="8" fill="none" stroke="#A855F7" strokeWidth="1.4" />
              <path d="M16 18 L24 26 M24 18 L16 26" stroke="#A855F7" strokeWidth="1.1" />
              <circle cx="20" cy="22" r="4" fill="#A855F7" fillOpacity="0.3" />
              <text x="70" y="19" textAnchor="middle" className="font-mono text-[11px] fill-purple-600 font-bold">AI-Training</text>
              <text x="70" y="32" textAnchor="middle" className="font-mono text-[8px] fill-purple-400">GPU Workloads</text>
            </g>
            
            {/* AI-Inference Box */}
            <g transform="translate(555, 350)">
              <rect x="0" y="0" width="110" height="44" rx="8" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="2" />
              {/* Lightning icon */}
              <path d="M20 8 L15 22 L23 22 L18 36" stroke="#A855F7" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <text x="70" y="19" textAnchor="middle" className="font-mono text-[11px] fill-purple-600 font-bold">AI-Inference</text>
              <text x="70" y="32" textAnchor="middle" className="font-mono text-[8px] fill-purple-400">Low Latency</text>
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
      <div className="md:hidden bg-white rounded-2xl border-2 border-gray-100 shadow-xl overflow-hidden p-3">
        {/* V1 Badge - Mobile */}
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-solar-yellow/20 text-solar-yellow px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border border-solar-yellow/30">
            v1: Demo Scale
          </span>
          <span className="text-gray-400 font-mono text-[9px]">150W · 20L</span>
        </div>

        <svg
          viewBox="0 0 280 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ maxHeight: '420px' }}
          preserveAspectRatio="xMidYMid meet"
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
          <rect width="280" height="420" fill="url(#gridMobile)" />

          {/* === 1. SUN - Mobile === */}
          <g id="sun-mobile">
            <circle cx="140" cy="25" r="18" fill="url(#sunGradientMobile)" />
            <circle cx="140" cy="25" r="11" fill="#FBBF24" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x1 = 140 + Math.cos(rad) * 14
              const y1 = 25 + Math.sin(rad) * 14
              const x2 = 140 + Math.cos(rad) * 22
              const y2 = 25 + Math.sin(rad) * 22
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
            <rect x="90" y="55" width="100" height="40" rx="5" fill="#FBBF24" fillOpacity="0.15" stroke="#FBBF24" strokeWidth="2" />
            <path d="M90 70 L190 70 M90 85 L190 85" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M123 55 L123 95 M156 55 L156 95" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
          </g>
          <text x="140" y="110" textAnchor="middle" className="font-mono text-[10px] fill-solar-yellow font-bold">Solar (150W)</text>

          {/* === 3. BATTERY - Mobile === */}
          <g id="battery-mobile">
            <rect x="30" y="130" width="45" height="40" rx="5" fill="#22C55E" fillOpacity="0.1" stroke="#22C55E" strokeWidth="2" />
            {/* Battery terminal */}
            <rect x="41" y="125" width="23" height="5" rx="2" fill="#22C55E" />
            {/* Battery level bars */}
            <rect x="35" y="148" width="35" height="6" rx="2" fill="#22C55E" fillOpacity="0.8" />
            <rect x="35" y="139" width="35" height="6" rx="2" fill="#22C55E" fillOpacity="0.5" className="animate-pulse" />
          </g>
          <text x="52" y="180" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-bold">Batterie</text>

          {/* Solar → Battery */}
          <path
            d="M90 80 L80 80 L80 130"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* === 4. HOUSE/BUILDING - Mobile === */}
          <g id="house-mobile">
            <g transform="translate(200, 130)">
              <path d="M0 22 L30 4 L60 22 L60 58 L0 58 Z" fill="#10B981" fillOpacity="0.12" stroke="#10B981" strokeWidth="2" />
              <path d="M0 22 L30 4 L60 22" fill="none" stroke="#10B981" strokeWidth="2" />
            </g>
          </g>
          <text x="230" y="200" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-bold">Gebäude</text>

          {/* === 5. SIHLICON HUB CORE - Mobile (Centered) === */}
          <g id="core-mobile" transform="translate(65, 220)">
            <rect x="0" y="0" width="150" height="65" rx="8" fill="#1A1A1A" />
            <rect x="8" y="8" width="134" height="49" rx="4" fill="url(#waterGradientMobile)" fillOpacity="0.35" />
            {/* Server blades */}
            {[25, 50, 75, 100, 125].map((x, i) => (
              <rect
                key={i}
                x={x - 6}
                y="14"
                width="12"
                height="35"
                rx="2"
                fill="#3B82F6"
                fillOpacity="0.75"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </g>
          <text x="140" y="300" textAnchor="middle" className="font-mono text-[10px] fill-brand-black font-bold">Sihlicon Hub Core</text>
          <text x="140" y="312" textAnchor="middle" className="font-mono text-[7px] fill-gray-500">20L Tank</text>

          {/* Battery → Core */}
          <path
            d="M52 170 L52 250 L65 250"
            stroke="#22C55E"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* Solar → Core */}
          <path
            d="M140 110 L140 220"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* === 6. HEAT RETURN - Mobile === */}
          <g id="heat-return-mobile">
            {/* Arrow to building */}
            <path
              d="M215 250 L235 195"
              stroke="#FF6B35"
              strokeWidth="3"
              strokeDasharray="4 3"
              className="animate-[dash_1.5s_linear_infinite]"
            />
          </g>
          <text x="245" y="230" textAnchor="middle" className="font-mono text-[8px] fill-thermal-orange font-bold">Wärme</text>

          {/* === 7. COMPUTE OUTPUT - Mobile (Bottom) === */}
          <g id="compute-mobile">
            <path
              d="M140 285 L140 320"
              stroke="#A855F7"
              strokeWidth="3"
              strokeDasharray="4 3"
              className="animate-[dash_2s_linear_infinite]"
            />
            
            {/* AI Boxes - Stacked vertically for better fit */}
            <g transform="translate(20, 330)">
              <rect x="0" y="0" width="120" height="30" rx="6" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="1.5" />
              <text x="60" y="13" textAnchor="middle" className="font-mono text-[9px] fill-purple-600 font-bold">AI-Training</text>
              <text x="60" y="23" textAnchor="middle" className="font-mono text-[7px] fill-purple-400">GPU Workloads</text>
            </g>
            <g transform="translate(140, 330)">
              <rect x="0" y="0" width="120" height="30" rx="6" fill="#A855F7" fillOpacity="0.1" stroke="#A855F7" strokeWidth="1.5" />
              <text x="60" y="13" textAnchor="middle" className="font-mono text-[9px] fill-purple-600 font-bold">AI-Inference</text>
              <text x="60" y="23" textAnchor="middle" className="font-mono text-[7px] fill-purple-400">Low Latency</text>
            </g>
          </g>
          <text x="140" y="325" textAnchor="middle" className="font-mono text-[8px] fill-purple-500 font-bold">Rechenleistung</text>
        </svg>

        {/* Mobile Legend - Below SVG */}
        <div className="mt-3 p-2.5 bg-gray-50 rounded-xl">
          <div className="text-center mb-1.5">
            <span className="font-mono text-[9px] text-brand-black font-bold">ENERGIEFLUSS</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1 justify-center">
              <div className="w-4 h-0.5 bg-solar-yellow" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #FBBF24 0, #FBBF24 3px, transparent 3px, transparent 6px)' }} />
              <span className="font-mono text-[7px] text-gray-600">Solarstrom</span>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <div className="w-4 h-0.5 bg-grid-green" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #22C55E 0, #22C55E 3px, transparent 3px, transparent 6px)' }} />
              <span className="font-mono text-[7px] text-gray-600">Batterie → Core</span>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <div className="w-4 h-0.5 bg-thermal-orange" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #FF6B35 0, #FF6B35 3px, transparent 3px, transparent 6px)' }} />
              <span className="font-mono text-[7px] text-gray-600">Abwärme (45-60°C)</span>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <div className="w-4 h-0.5 bg-purple-500" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #A855F7 0, #A855F7 3px, transparent 3px, transparent 6px)' }} />
              <span className="font-mono text-[7px] text-gray-600">Rechenleistung</span>
            </div>
          </div>
        </div>

        {/* Mobile Stats - Below */}
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          <div className="bg-solar-yellow/10 rounded-lg p-1.5 text-center">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-yellow mx-auto mb-0.5 animate-pulse" />
            <span className="font-mono text-[7px] text-brand-black font-semibold block">150W</span>
            <span className="font-mono text-[5px] text-gray-500">P_solar</span>
          </div>
          <div className="bg-grid-green/10 rounded-lg p-1.5 text-center">
            <div className="w-1.5 h-1.5 rounded-full bg-grid-green mx-auto mb-0.5 animate-pulse" />
            <span className="font-mono text-[7px] text-brand-black font-semibold block">2 kWh</span>
            <span className="font-mono text-[5px] text-gray-500">Batterie</span>
          </div>
          <div className="bg-compute-blue/10 rounded-lg p-1.5 text-center">
            <div className="w-1.5 h-1.5 rounded-full bg-compute-blue mx-auto mb-0.5" />
            <span className="font-mono text-[7px] text-brand-black font-semibold block">140W</span>
            <span className="font-mono text-[5px] text-gray-500">P_compute</span>
          </div>
          <div className="bg-thermal-orange/10 rounded-lg p-1.5 text-center">
            <div className="w-1.5 h-1.5 rounded-full bg-thermal-orange mx-auto mb-0.5" />
            <span className="font-mono text-[7px] text-brand-black font-semibold block">+25°C</span>
            <span className="font-mono text-[5px] text-gray-500">ΔT</span>
          </div>
        </div>

        {/* Mobile Title */}
        <div className="mt-2 text-center">
          <span className="font-accent text-xs text-thermal-orange font-semibold">Sihlicon Hub Demo</span>
          <span className="font-mono text-[7px] text-historic-sepia block">Solar → Batterie → Compute → Wärme</span>
        </div>
      </div>

      {/* === V2 DESCRIPTION SECTION === */}
      <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
          <span className="bg-grid-green/20 text-grid-green px-2 sm:px-3 py-1 rounded-full font-mono text-[10px] sm:text-xs font-bold border border-grid-green/30">
            v2: Produktionsreife
          </span>
          <span className="text-gray-500 font-mono text-[10px] sm:text-xs">Als Nächstes</span>
        </div>
        
        <h3 className="font-accent text-lg sm:text-xl md:text-2xl text-brand-black mb-4">
          Der nächste Schritt: Wirtschaftlich rentabel
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
              Version 2 macht aus dem Prototypen ein System, das sich selbst trägt. 
              Während v1 den Energiekreislauf mit einem 150W-Panel und 20L-Tank zeigt, 
              <strong className="text-brand-black"> geht es bei v2 um echte Gebäudeintegration</strong>: 
              Solaranlagen im Kilowatt-Bereich, professionelle Immersionskühlung und vollständige Heizungsintegration.
            </p>
            <ul className="space-y-2 sm:space-y-2.5">
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-solar-yellow font-bold text-base sm:text-lg flex-shrink-0 mt-0.5">☀</span>
                <span className="text-gray-700"><strong>5 bis 20 kW</strong> Solarleistung pro Gebäudeeinheit</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-compute-blue font-bold text-base sm:text-lg flex-shrink-0 mt-0.5">⬢</span>
                <span className="text-gray-700"><strong>GPU-Cluster</strong> mit professioneller Wärmerückgewinnung</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-thermal-orange font-bold text-base sm:text-lg flex-shrink-0 mt-0.5">◉</span>
                <span className="text-gray-700"><strong>200L+ Tanks</strong> für den tatsächlichen Warmwasserbedarf</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-100 p-3 sm:p-4">
            <h4 className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-3">V1 → V2 SKALIERUNG</h4>
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="font-mono text-xs sm:text-sm text-gray-600">Solareingang</span>
                <span className="font-mono text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                  <span className="text-gray-400">150W</span>
                  <span className="text-gray-300">→</span>
                  <span className="text-grid-green font-bold">5-20 kW</span>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="font-mono text-xs sm:text-sm text-gray-600">Tankvolumen</span>
                <span className="font-mono text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                  <span className="text-gray-400">20L</span>
                  <span className="text-gray-300">→</span>
                  <span className="text-grid-green font-bold">200-500L</span>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="font-mono text-xs sm:text-sm text-gray-600">Wärmeausgabe</span>
                <span className="font-mono text-xs sm:text-sm flex items-center gap-1 sm:gap-2 flex-wrap">
                  <span className="text-gray-400">Demo</span>
                  <span className="text-gray-300">→</span>
                  <span className="text-grid-green font-bold">Vollständiges Gebäude</span>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="font-mono text-xs sm:text-sm text-gray-600">Wirtschaftlichkeit</span>
                <span className="font-mono text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                  <span className="text-gray-400">N/A</span>
                  <span className="text-gray-300">→</span>
                  <span className="text-grid-green font-bold">Gewinnbringend</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 text-[10px] sm:text-xs mt-4 sm:mt-6 font-mono leading-relaxed">
          Der Hackathon baut v1 als funktionierenden Nachweis des geschlossenen Kreislaufs. Die Übertragung auf v2 zeigt, 
          dass es wirtschaftlich funktioniert: gleiche Physik, größerer Maßstab, echte Gewinne durch Rechenleistung und Energieeinsparungen.
        </p>
      </div>
    </div>
  )
}
