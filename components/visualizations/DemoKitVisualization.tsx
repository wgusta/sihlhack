'use client'

export function DemoKitVisualization() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block relative w-full max-w-3xl mx-auto bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden">
        <div className="p-4 sm:p-6">
          <svg
            viewBox="0 0 500 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
        {/* Background Grid */}
        <defs>
          <pattern id="demoGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="flowGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
        <rect width="500" height="320" fill="url(#demoGrid)" />

        {/* Title */}
        <text x="250" y="25" textAnchor="middle" className="font-display text-[14px] fill-brand-black font-bold">
          End-to-End Demo-Kit
        </text>
        <text x="250" y="40" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">
          Messbarer Energie-Flow mit reproduzierbarer Ein-Knopf-Demo
        </text>

        {/* Flow: Solar → Compute → Heat → Water */}
        
        {/* 1. Solar Input */}
        <g id="solar-section">
          <rect x="30" y="60" width="80" height="60" rx="8" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="2" />
          <text x="70" y="78" textAnchor="middle" className="text-[20px]">☀️</text>
          <text x="70" y="95" textAnchor="middle" className="font-mono text-[10px] fill-solar-yellow font-bold">P_solar</text>
          <text x="70" y="108" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">180W</text>
          
          {/* Animated value indicator */}
          <circle cx="100" cy="75" r="4" fill="#FBBF24" className="animate-pulse" />
        </g>

        {/* Flow Arrow 1 */}
        <path
          d="M115 90 L155 90"
          stroke="#FBBF24"
          strokeWidth="3"
          strokeDasharray="6 4"
          className="animate-[dash_1.5s_linear_infinite]"
        />

        {/* 2. Compute */}
        <g id="compute-section">
          <rect x="160" y="60" width="80" height="60" rx="8" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" />
          <text x="200" y="78" textAnchor="middle" className="text-[20px]">💻</text>
          <text x="200" y="95" textAnchor="middle" className="font-mono text-[10px] fill-compute-blue font-bold">P_compute</text>
          <text x="200" y="108" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">165W</text>
          
          {/* Server activity */}
          {[172, 188, 204, 220].map((x, i) => (
            <rect
              key={i}
              x={x}
              y="70"
              width="4"
              height="15"
              rx="1"
              fill="#3B82F6"
              fillOpacity="0.6"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </g>

        {/* Flow Arrow 2 */}
        <path
          d="M245 90 L285 90"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="6 4"
          className="animate-[dash_1.5s_linear_infinite]"
        />

        {/* 3. Heat */}
        <g id="heat-section">
          <rect x="290" y="60" width="80" height="60" rx="8" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="2" />
          <text x="330" y="78" textAnchor="middle" className="text-[20px]">🔥</text>
          <text x="330" y="95" textAnchor="middle" className="font-mono text-[10px] fill-thermal-orange font-bold">ΔT</text>
          <text x="330" y="108" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">+25°C</text>
          
          {/* Heat waves */}
          <path d="M315 62 Q318 55 315 48" stroke="#FF6B35" strokeWidth="1" fill="none" className="animate-pulse" />
          <path d="M330 62 Q333 52 330 42" stroke="#FF6B35" strokeWidth="1" fill="none" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <path d="M345 62 Q348 55 345 48" stroke="#FF6B35" strokeWidth="1" fill="none" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        </g>

        {/* Flow Arrow 3 */}
        <path
          d="M375 90 L415 90"
          stroke="#FF6B35"
          strokeWidth="3"
          strokeDasharray="6 4"
          className="animate-[dash_1.5s_linear_infinite]"
        />

        {/* 4. Water Output */}
        <g id="water-section">
          <rect x="420" y="60" width="60" height="60" rx="8" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
          <text x="450" y="78" textAnchor="middle" className="text-[20px]">💧</text>
          <text x="450" y="95" textAnchor="middle" className="font-mono text-[10px] fill-grid-green font-bold">45°C</text>
          <text x="450" y="108" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">Flow: 2L/min</text>
        </g>

        {/* Live Logging Panel */}
        <g id="logging-panel">
          <rect x="30" y="140" width="440" height="100" rx="8" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
          
          {/* Terminal Header */}
          <rect x="30" y="140" width="440" height="24" rx="8" fill="#2A2A2A" />
          <circle cx="45" cy="152" r="5" fill="#FF5F56" />
          <circle cx="60" cy="152" r="5" fill="#FFBD2E" />
          <circle cx="75" cy="152" r="5" fill="#27CA3E" />
          <text x="250" y="156" textAnchor="middle" className="font-mono text-[9px] fill-gray-400">📊 Live Logging</text>
          
          {/* Log Header */}
          <text x="45" y="180" className="font-mono text-[8px] fill-gray-500">Timestamp</text>
          <text x="130" y="180" className="font-mono text-[8px] fill-gray-500">Solar</text>
          <text x="200" y="180" className="font-mono text-[8px] fill-gray-500">Compute</text>
          <text x="280" y="180" className="font-mono text-[8px] fill-gray-500">Temp</text>
          <text x="350" y="180" className="font-mono text-[8px] fill-gray-500">Flow</text>
          <text x="420" y="180" className="font-mono text-[8px] fill-gray-500">Status</text>
          
          {/* Separator */}
          <line x1="40" y1="186" x2="460" y2="186" stroke="#444" strokeWidth="1" />
          
          {/* Log Entries - Animated */}
          <g className="animate-pulse">
            <text x="45" y="200" className="font-mono text-[8px] fill-grid-green">14:32:01</text>
            <text x="130" y="200" className="font-mono text-[8px] fill-solar-yellow">180W</text>
            <text x="200" y="200" className="font-mono text-[8px] fill-compute-blue">165W</text>
            <text x="280" y="200" className="font-mono text-[8px] fill-thermal-orange">42.3°C</text>
            <text x="350" y="200" className="font-mono text-[8px] fill-white">2.1L/m</text>
            <text x="420" y="200" className="font-mono text-[8px] fill-grid-green">● OK</text>
          </g>
          
          <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            <text x="45" y="214" className="font-mono text-[8px] fill-grid-green">14:32:02</text>
            <text x="130" y="214" className="font-mono text-[8px] fill-solar-yellow">182W</text>
            <text x="200" y="214" className="font-mono text-[8px] fill-compute-blue">168W</text>
            <text x="280" y="214" className="font-mono text-[8px] fill-thermal-orange">42.5°C</text>
            <text x="350" y="214" className="font-mono text-[8px] fill-white">2.1L/m</text>
            <text x="420" y="214" className="font-mono text-[8px] fill-grid-green">● OK</text>
          </g>
          
          <g className="animate-pulse" style={{ animationDelay: '1s' }}>
            <text x="45" y="228" className="font-mono text-[8px] fill-grid-green">14:32:03</text>
            <text x="130" y="228" className="font-mono text-[8px] fill-solar-yellow">179W</text>
            <text x="200" y="228" className="font-mono text-[8px] fill-compute-blue">164W</text>
            <text x="280" y="228" className="font-mono text-[8px] fill-thermal-orange">42.4°C</text>
            <text x="350" y="228" className="font-mono text-[8px] fill-white">2.0L/m</text>
            <text x="420" y="228" className="font-mono text-[8px] fill-grid-green">● OK</text>
          </g>
        </g>

        {/* One-Button Demo */}
        <g id="demo-button">
          <rect x="30" y="260" width="140" height="40" rx="8" fill="#10B981" />
          <text x="55" y="284" className="font-mono text-[9px] fill-white font-bold">Ein-Knopf-Demo</text>
          
          {/* Status */}
          <rect x="190" y="260" width="120" height="40" rx="8" fill="#1A1A1A" stroke="#10B981" strokeWidth="2" />
          <circle cx="210" cy="280" r="6" fill="#10B981" className="animate-pulse" />
          <text x="225" y="284" className="font-mono text-[10px] fill-white">Running...</text>
        </g>

        {/* Deliverables Checklist */}
        <g id="deliverables">
          <rect x="330" y="260" width="140" height="50" rx="4" fill="#f9f9f9" stroke="#e5e5e5" strokeWidth="1" />
          <text x="340" y="275" className="font-mono text-[7px] fill-grid-green">✓ Logging aktiv</text>
          <text x="340" y="287" className="font-mono text-[7px] fill-grid-green">✓ Demo reproduzierbar</text>
          <text x="340" y="299" className="font-mono text-[7px] fill-grid-green">✓ Protokoll generiert</text>
        </g>
          </svg>
        </div>

        {/* Legend - Desktop */}
        <div className="px-4 pb-4 sm:px-6 sm:pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-solar-yellow" />
                <span className="font-mono text-[9px] text-brand-black">Solar</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-compute-blue" />
                <span className="font-mono text-[9px] text-brand-black">Compute</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-thermal-orange" />
                <span className="font-mono text-[9px] text-brand-black">Heat</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-grid-green" />
                <span className="font-mono text-[9px] text-brand-black">Output</span>
              </div>
            </div>
          </div>
          
          <span className="font-accent text-sm text-thermal-orange">Paket 1: Demo-Kit</span>
        </div>
      </div>

      {/* Mobile Version - Vertical Layout */}
      <div className="md:hidden relative w-full mx-auto bg-white rounded-2xl border-2 border-gray-100 shadow-xl overflow-hidden p-3">
        {/* Title */}
        <div className="text-center mb-3">
          <h3 className="font-display text-base font-bold text-brand-black">End-to-End Demo-Kit</h3>
          <p className="font-mono text-[9px] text-historic-sepia mt-1">
            Messbarer Energie-Flow mit reproduzierbarer Ein-Knopf-Demo
          </p>
        </div>

        <svg
          viewBox="0 0 260 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ maxHeight: '480px' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background Grid */}
          <defs>
            <pattern id="demoGridMobile" width="15" height="15" patternUnits="userSpaceOnUse">
              <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="flowGradientMobile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
          <rect width="260" height="480" fill="url(#demoGridMobile)" />

          {/* Flow: Solar → Compute → Heat → Water (Vertical) */}
          
          {/* 1. Solar Input */}
          <g id="solar-section-mobile">
            <rect x="80" y="30" width="100" height="55" rx="8" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="2" />
            <text x="130" y="52" textAnchor="middle" className="text-[18px]">☀️</text>
            <text x="130" y="68" textAnchor="middle" className="font-mono text-[9px] fill-solar-yellow font-bold">P_solar</text>
            <text x="130" y="78" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">180W</text>
            <circle cx="165" cy="45" r="3" fill="#FBBF24" className="animate-pulse" />
          </g>

          {/* Flow Arrow 1 (Down) */}
          <path
            d="M130 85 L130 110"
            stroke="#FBBF24"
            strokeWidth="3"
            strokeDasharray="5 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* 2. Compute */}
          <g id="compute-section-mobile">
            <rect x="80" y="115" width="100" height="55" rx="8" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" />
            <text x="130" y="137" textAnchor="middle" className="text-[18px]">💻</text>
            <text x="130" y="153" textAnchor="middle" className="font-mono text-[9px] fill-compute-blue font-bold">P_compute</text>
            <text x="130" y="163" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">165W</text>
            
            {/* Server activity */}
            {[95, 110, 145, 160].map((x, i) => (
              <rect
                key={i}
                x={x}
                y="125"
                width="3"
                height="12"
                rx="1"
                fill="#3B82F6"
                fillOpacity="0.6"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </g>

          {/* Flow Arrow 2 (Down) */}
          <path
            d="M130 170 L130 195"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeDasharray="5 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* 3. Heat */}
          <g id="heat-section-mobile">
            <rect x="80" y="200" width="100" height="55" rx="8" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="2" />
            <text x="130" y="222" textAnchor="middle" className="text-[18px]">🔥</text>
            <text x="130" y="238" textAnchor="middle" className="font-mono text-[9px] fill-thermal-orange font-bold">ΔT</text>
            <text x="130" y="248" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">+25°C</text>
            
            {/* Heat waves */}
            <path d="M115 202 Q118 195 115 188" stroke="#FF6B35" strokeWidth="1" fill="none" className="animate-pulse" />
            <path d="M130 202 Q133 192 130 182" stroke="#FF6B35" strokeWidth="1" fill="none" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <path d="M145 202 Q148 195 145 188" stroke="#FF6B35" strokeWidth="1" fill="none" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          </g>

          {/* Flow Arrow 3 (Down) */}
          <path
            d="M130 255 L130 280"
            stroke="#FF6B35"
            strokeWidth="3"
            strokeDasharray="5 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* 4. Water Output */}
          <g id="water-section-mobile">
            <rect x="80" y="285" width="100" height="55" rx="8" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
            <text x="130" y="307" textAnchor="middle" className="text-[18px]">💧</text>
            <text x="130" y="323" textAnchor="middle" className="font-mono text-[9px] fill-grid-green font-bold">45°C</text>
            <text x="130" y="333" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">Flow: 2L/min</text>
          </g>

          {/* Live Logging Panel - Compact */}
          <g id="logging-panel-mobile">
            <rect x="10" y="355" width="240" height="80" rx="6" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
            
            {/* Terminal Header */}
            <rect x="10" y="355" width="240" height="20" rx="6" fill="#2A2A2A" />
            <circle cx="22" cy="365" r="3" fill="#FF5F56" />
            <circle cx="32" cy="365" r="3" fill="#FFBD2E" />
            <circle cx="42" cy="365" r="3" fill="#27CA3E" />
            <text x="130" y="368" textAnchor="middle" className="font-mono text-[8px] fill-gray-400">📊 Live Logging</text>
            
            {/* Compact Log Header */}
            <text x="18" y="385" className="font-mono text-[7px] fill-gray-500">Time</text>
            <text x="60" y="385" className="font-mono text-[7px] fill-gray-500">S</text>
            <text x="90" y="385" className="font-mono text-[7px] fill-gray-500">C</text>
            <text x="120" y="385" className="font-mono text-[7px] fill-gray-500">T</text>
            <text x="150" y="385" className="font-mono text-[7px] fill-gray-500">F</text>
            <text x="180" y="385" className="font-mono text-[7px] fill-gray-500">✓</text>
            
            {/* Separator */}
            <line x1="15" y1="390" x2="245" y2="390" stroke="#444" strokeWidth="0.5" />
            
            {/* Log Entries - Compact */}
            <g className="animate-pulse">
              <text x="18" y="402" className="font-mono text-[7px] fill-grid-green">14:32:01</text>
              <text x="60" y="402" className="font-mono text-[7px] fill-solar-yellow">180W</text>
              <text x="90" y="402" className="font-mono text-[7px] fill-compute-blue">165W</text>
              <text x="120" y="402" className="font-mono text-[7px] fill-thermal-orange">42.3°</text>
              <text x="150" y="402" className="font-mono text-[7px] fill-white">2.1</text>
              <text x="180" y="402" className="font-mono text-[7px] fill-grid-green">●</text>
            </g>
            
            <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
              <text x="18" y="413" className="font-mono text-[7px] fill-grid-green">14:32:02</text>
              <text x="60" y="413" className="font-mono text-[7px] fill-solar-yellow">182W</text>
              <text x="90" y="413" className="font-mono text-[7px] fill-compute-blue">168W</text>
              <text x="120" y="413" className="font-mono text-[7px] fill-thermal-orange">42.5°</text>
              <text x="150" y="413" className="font-mono text-[7px] fill-white">2.1</text>
              <text x="180" y="413" className="font-mono text-[7px] fill-grid-green">●</text>
            </g>
            
            <g className="animate-pulse" style={{ animationDelay: '1s' }}>
              <text x="18" y="424" className="font-mono text-[7px] fill-grid-green">14:32:03</text>
              <text x="60" y="424" className="font-mono text-[7px] fill-solar-yellow">179W</text>
              <text x="90" y="424" className="font-mono text-[7px] fill-compute-blue">164W</text>
              <text x="120" y="424" className="font-mono text-[7px] fill-thermal-orange">42.4°</text>
              <text x="150" y="424" className="font-mono text-[7px] fill-white">2.0</text>
              <text x="180" y="424" className="font-mono text-[7px] fill-grid-green">●</text>
            </g>
          </g>

          {/* One-Button Demo - Compact */}
          <g id="demo-button-mobile">
            <rect x="10" y="445" width="110" height="28" rx="6" fill="#10B981" />
            <text x="65" y="462" textAnchor="middle" className="font-mono text-[8px] fill-white font-bold">▶️ Demo</text>
            
            {/* Status */}
            <rect x="130" y="445" width="120" height="28" rx="6" fill="#1A1A1A" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="145" cy="459" r="4" fill="#10B981" className="animate-pulse" />
            <text x="160" y="462" className="font-mono text-[8px] fill-white">Running...</text>
          </g>
        </svg>

        {/* Deliverables Checklist - Mobile */}
        <div className="mt-3 p-2 bg-gray-50 rounded-lg border border-gray-200">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="text-grid-green text-xs">✓</span>
              <span className="font-mono text-[8px] text-brand-black">Logging aktiv</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-grid-green text-xs">✓</span>
              <span className="font-mono text-[8px] text-brand-black">Demo reproduzierbar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-grid-green text-xs">✓</span>
              <span className="font-mono text-[8px] text-brand-black">Protokoll generiert</span>
            </div>
          </div>
        </div>

        {/* Legend - Mobile */}
        <div className="mt-3 flex flex-col gap-2">
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-solar-yellow" />
                <span className="font-mono text-[7px] text-brand-black">Solar</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-compute-blue" />
                <span className="font-mono text-[7px] text-brand-black">Compute</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-thermal-orange" />
                <span className="font-mono text-[7px] text-brand-black">Heat</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-grid-green" />
                <span className="font-mono text-[7px] text-brand-black">Output</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <span className="font-accent text-xs text-thermal-orange">Paket 1: Demo-Kit</span>
          </div>
        </div>
      </div>
    </>
  )
}
