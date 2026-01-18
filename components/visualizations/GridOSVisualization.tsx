'use client'

export function GridOSVisualization() {
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
          <pattern id="gridOSGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="500" height="320" fill="url(#gridOSGrid)" />

        {/* Title */}
        <text x="250" y="25" textAnchor="middle" className="font-display text-[14px] fill-brand-black font-bold">
          Grid-OS Minimal Controller
        </text>
        <text x="250" y="40" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">
          Scheduler mit Solar-Budget, Fallback-Policy und API
        </text>

        {/* Left Side: Inputs */}
        
        {/* Solar Budget Input */}
        <g id="solar-input">
          <rect x="20" y="60" width="90" height="60" rx="8" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="2" />
          <text x="65" y="78" textAnchor="middle" className="text-[16px]">☀️</text>
          <text x="65" y="95" textAnchor="middle" className="font-mono text-[9px] fill-solar-yellow font-bold">Solar Budget</text>
          <text x="65" y="108" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">[150W]</text>
          
          {/* Pulse indicator */}
          <circle cx="100" cy="68" r="4" fill="#FBBF24" className="animate-pulse" />
        </g>

        {/* Demand Input */}
        <g id="demand-input">
          <rect x="20" y="135" width="90" height="60" rx="8" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" />
          <text x="65" y="153" textAnchor="middle" className="text-[16px]">📊</text>
          <text x="65" y="170" textAnchor="middle" className="font-mono text-[9px] fill-compute-blue font-bold">Demand</text>
          <text x="65" y="183" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">[AI Job]</text>
        </g>

        {/* Fallback Input */}
        <g id="fallback-input">
          <rect x="20" y="210" width="90" height="60" rx="8" fill="#DC2626" fillOpacity="0.1" stroke="#DC2626" strokeWidth="2" />
          <text x="65" y="228" textAnchor="middle" className="text-[16px]">⚠️</text>
          <text x="65" y="245" textAnchor="middle" className="font-mono text-[9px] fill-sihl-red font-bold">Fallback</text>
          <text x="65" y="258" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">[Grid OFF]</text>
        </g>

        {/* Arrows to Scheduler */}
        <path d="M115 90 L165 140" stroke="#FBBF24" strokeWidth="2" strokeDasharray="5 3" className="animate-[dash_2s_linear_infinite]" />
        <path d="M115 165 L165 165" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5 3" className="animate-[dash_2s_linear_infinite]" />
        <path d="M115 240 L165 190" stroke="#DC2626" strokeWidth="2" strokeDasharray="5 3" className="animate-[dash_2s_linear_infinite]" />

        {/* Central: Scheduler */}
        <g id="scheduler">
          <rect x="170" y="100" width="160" height="130" rx="12" fill="#1A1A1A" />
          
          {/* Scheduler header */}
          <rect x="170" y="100" width="160" height="30" rx="12" fill="#2A2A2A" />
          <text x="250" y="120" textAnchor="middle" className="font-mono text-[11px] fill-white font-bold">⚡ SCHEDULER</text>
          
          {/* Policy Engine Box */}
          <rect x="185" y="145" width="130" height="40" rx="6" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1" />
          <text x="250" y="162" textAnchor="middle" className="font-mono text-[9px] fill-compute-blue font-bold">Policy Engine</text>
          <text x="250" y="178" textAnchor="middle" className="font-mono text-[7px] fill-gray-400">if Solar &lt; Demand → Throttle</text>
          
          {/* Processing indicators */}
          <g className="animate-pulse">
            <circle cx="195" cy="205" r="3" fill="#10B981" />
            <circle cx="210" cy="205" r="3" fill="#10B981" style={{ animationDelay: '0.2s' }} />
            <circle cx="225" cy="205" r="3" fill="#10B981" style={{ animationDelay: '0.4s' }} />
          </g>
          <text x="270" y="208" className="font-mono text-[7px] fill-gray-400">Processing...</text>
        </g>

        {/* Right Side: Outputs */}
        
        {/* Arrow to Compute */}
        <path d="M335 140 L385 100" stroke="#10B981" strokeWidth="2" strokeDasharray="5 3" className="animate-[dash_1.5s_linear_infinite]" />
        
        {/* Compute Output */}
        <g id="compute-output">
          <rect x="390" y="60" width="90" height="60" rx="8" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
          <text x="435" y="78" textAnchor="middle" className="text-[16px]">💻</text>
          <text x="435" y="95" textAnchor="middle" className="font-mono text-[9px] fill-grid-green font-bold">Compute</text>
          <text x="435" y="108" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">[Load: 140W]</text>
          
          {/* Status */}
          <circle cx="470" cy="68" r="4" fill="#10B981" className="animate-pulse" />
        </g>

        {/* Arrow to Throttle */}
        <path d="M335 190 L385 190" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5 3" className="animate-[dash_1.5s_linear_infinite]" />
        
        {/* Throttle Output */}
        <g id="throttle-output">
          <rect x="390" y="160" width="90" height="60" rx="8" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="2" />
          <text x="435" y="178" textAnchor="middle" className="text-[16px]">📉</text>
          <text x="435" y="195" textAnchor="middle" className="font-mono text-[9px] fill-solar-yellow font-bold">Throttle</text>
          <text x="435" y="208" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">[if Solar &lt; X]</text>
        </g>

        {/* API Section */}
        <g id="api-section">
          {/* Arrow down from Scheduler */}
          <path d="M250 235 L250 255" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 3" className="animate-[dash_1s_linear_infinite]" />
          
          <rect x="170" y="260" width="160" height="50" rx="8" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" />
          <text x="195" y="278" className="font-mono text-[10px] fill-compute-blue font-bold">📡 API</text>
          
          {/* Endpoints */}
          <text x="195" y="295" className="font-mono text-[7px] fill-historic-sepia">/schedule</text>
          <text x="250" y="295" className="font-mono text-[7px] fill-historic-sepia">/status</text>
          <text x="295" y="295" className="font-mono text-[7px] fill-historic-sepia">/replay</text>
          
          {/* API call animation */}
          <g className="animate-pulse">
            <rect x="290" y="270" width="30" height="12" rx="2" fill="#10B981" />
            <text x="305" y="279" textAnchor="middle" className="font-mono text-[6px] fill-white">GET</text>
          </g>
        </g>

        {/* Replay Mode Indicator */}
        <g id="replay-mode">
          <rect x="355" y="260" width="125" height="50" rx="8" fill="#f9f9f9" stroke="#e5e5e5" strokeWidth="1" />
          <text x="417" y="278" textAnchor="middle" className="font-mono text-[9px] fill-brand-black font-bold">🔄 Replay-Modus</text>
          
          {/* Timeline */}
          <line x1="365" y1="295" x2="470" y2="295" stroke="#ccc" strokeWidth="2" />
          
          <text x="417" y="305" textAnchor="middle" className="font-mono text-[6px] fill-historic-sepia">Solar-Zeitreihe abspielen</text>
        </g>

        {/* Deliverables Badge */}
        <g id="deliverables">
          <rect x="20" y="280" width="130" height="30" rx="4" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="1" />
          <text x="85" y="293" textAnchor="middle" className="font-mono text-[7px] fill-grid-green">✓ Scheduler ✓ API ✓ Replay</text>
          <text x="85" y="303" textAnchor="middle" className="font-mono text-[6px] fill-historic-sepia">Fallback-Policy definiert</text>
        </g>
          </svg>
        </div>

        {/* Legend - Desktop */}
        <div className="px-4 pb-4 sm:px-6 sm:pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-solar-yellow" />
                <span className="font-mono text-[9px] text-brand-black">Input</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-compute-blue" />
                <span className="font-mono text-[9px] text-brand-black">Process</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-grid-green" />
                <span className="font-mono text-[9px] text-brand-black">Output</span>
              </div>
            </div>
          </div>
          
          <span className="font-accent text-sm text-compute-blue">Paket 3: Grid-OS</span>
        </div>
      </div>

      {/* Mobile Version - Vertical Layout */}
      <div className="md:hidden relative w-full mx-auto bg-white rounded-2xl border-2 border-gray-100 shadow-xl overflow-hidden p-3">
        {/* Title */}
        <div className="text-center mb-3">
          <h3 className="font-display text-base font-bold text-brand-black">Grid-OS Minimal Controller</h3>
          <p className="font-mono text-[9px] text-historic-sepia mt-1">
            Scheduler mit Solar-Budget, Fallback-Policy und API
          </p>
        </div>

        <svg
          viewBox="0 0 260 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ maxHeight: '520px' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background Grid */}
          <defs>
            <pattern id="gridOSGridMobile" width="15" height="15" patternUnits="userSpaceOnUse">
              <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="260" height="520" fill="url(#gridOSGridMobile)" />

          {/* Flow: Inputs → Scheduler → Outputs (Vertical) */}
          
          {/* 1. Solar Budget Input */}
          <g id="solar-input-mobile">
            <rect x="80" y="30" width="100" height="50" rx="8" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="2" />
            <text x="130" y="50" textAnchor="middle" className="text-[14px]">☀️</text>
            <text x="130" y="65" textAnchor="middle" className="font-mono text-[8px] fill-solar-yellow font-bold">Solar Budget</text>
            <text x="130" y="75" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">[150W]</text>
            <circle cx="165" cy="40" r="3" fill="#FBBF24" className="animate-pulse" />
          </g>

          {/* Arrow 1 (Down) */}
          <path
            d="M130 80 L130 100"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_2s_linear_infinite]"
          />

          {/* 2. Demand Input */}
          <g id="demand-input-mobile">
            <rect x="80" y="105" width="100" height="50" rx="8" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" />
            <text x="130" y="125" textAnchor="middle" className="text-[14px]">📊</text>
            <text x="130" y="140" textAnchor="middle" className="font-mono text-[8px] fill-compute-blue font-bold">Demand</text>
            <text x="130" y="150" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">[AI Job]</text>
          </g>

          {/* Arrow 2 (Down) */}
          <path
            d="M130 155 L130 175"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_2s_linear_infinite]"
          />

          {/* 3. Fallback Input */}
          <g id="fallback-input-mobile">
            <rect x="80" y="180" width="100" height="50" rx="8" fill="#DC2626" fillOpacity="0.1" stroke="#DC2626" strokeWidth="2" />
            <text x="130" y="200" textAnchor="middle" className="text-[14px]">⚠️</text>
            <text x="130" y="215" textAnchor="middle" className="font-mono text-[8px] fill-sihl-red font-bold">Fallback</text>
            <text x="130" y="225" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">[Grid OFF]</text>
          </g>

          {/* Arrow 3 (Down) */}
          <path
            d="M130 230 L130 250"
            stroke="#DC2626"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_2s_linear_infinite]"
          />

          {/* Central: Scheduler */}
          <g id="scheduler-mobile">
            <rect x="50" y="255" width="160" height="100" rx="10" fill="#1A1A1A" />
            
            {/* Scheduler header */}
            <rect x="50" y="255" width="160" height="25" rx="10" fill="#2A2A2A" />
            <text x="130" y="272" textAnchor="middle" className="font-mono text-[9px] fill-white font-bold">⚡ SCHEDULER</text>
            
            {/* Policy Engine Box */}
            <rect x="60" y="290" width="140" height="35" rx="5" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1" />
            <text x="130" y="305" textAnchor="middle" className="font-mono text-[8px] fill-compute-blue font-bold">Policy Engine</text>
            <text x="130" y="318" textAnchor="middle" className="font-mono text-[6px] fill-gray-400">if Solar &lt; Demand → Throttle</text>
            
            {/* Processing indicators */}
            <g className="animate-pulse">
              <circle cx="75" cy="340" r="2.5" fill="#10B981" />
              <circle cx="85" cy="340" r="2.5" fill="#10B981" style={{ animationDelay: '0.2s' }} />
              <circle cx="95" cy="340" r="2.5" fill="#10B981" style={{ animationDelay: '0.4s' }} />
            </g>
            <text x="110" y="343" className="font-mono text-[6px] fill-gray-400">Processing...</text>
          </g>

          {/* Arrow to Outputs (Down) */}
          <path
            d="M130 355 L130 375"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1.5s_linear_infinite]"
          />

          {/* Outputs Side by Side */}
          {/* Compute Output */}
          <g id="compute-output-mobile">
            <rect x="30" y="380" width="100" height="50" rx="8" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
            <text x="80" y="400" textAnchor="middle" className="text-[14px]">💻</text>
            <text x="80" y="415" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-bold">Compute</text>
            <text x="80" y="425" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">[Load: 140W]</text>
            <circle cx="120" cy="390" r="3" fill="#10B981" className="animate-pulse" />
          </g>

          {/* Throttle Output */}
          <g id="throttle-output-mobile">
            <rect x="140" y="380" width="100" height="50" rx="8" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="2" />
            <text x="190" y="400" textAnchor="middle" className="text-[14px]">📉</text>
            <text x="190" y="415" textAnchor="middle" className="font-mono text-[8px] fill-solar-yellow font-bold">Throttle</text>
            <text x="190" y="425" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">[if Solar &lt; X]</text>
          </g>

          {/* API Section */}
          <g id="api-section-mobile">
            <rect x="30" y="445" width="210" height="40" rx="6" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" />
            <text x="40" y="460" className="font-mono text-[8px] fill-compute-blue font-bold">📡 API</text>
            
            {/* Endpoints */}
            <text x="40" y="473" className="font-mono text-[6px] fill-historic-sepia">/schedule</text>
            <text x="100" y="473" className="font-mono text-[6px] fill-historic-sepia">/status</text>
            <text x="150" y="473" className="font-mono text-[6px] fill-historic-sepia">/replay</text>
            
            {/* API call animation */}
            <g className="animate-pulse">
              <rect x="200" y="450" width="30" height="10" rx="2" fill="#10B981" />
              <text x="215" y="457" textAnchor="middle" className="font-mono text-[5px] fill-white">GET</text>
            </g>
          </g>

          {/* Replay Mode Indicator - Compact */}
          <g id="replay-mode-mobile">
            <rect x="30" y="495" width="210" height="20" rx="6" fill="#f9f9f9" stroke="#e5e5e5" strokeWidth="1" />
            <text x="135" y="508" textAnchor="middle" className="font-mono text-[7px] fill-brand-black font-bold">🔄 Replay-Modus</text>
          </g>
        </svg>

        {/* Deliverables Badge - Mobile */}
        <div className="mt-3 p-2 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="text-grid-green text-xs">✓</span>
              <span className="font-mono text-[8px] text-brand-black">Scheduler</span>
              <span className="text-grid-green text-xs">✓</span>
              <span className="font-mono text-[8px] text-brand-black">API</span>
              <span className="text-grid-green text-xs">✓</span>
              <span className="font-mono text-[8px] text-brand-black">Replay</span>
            </div>
            <span className="font-mono text-[7px] text-historic-sepia">Fallback-Policy definiert</span>
          </div>
        </div>

        {/* Legend - Mobile */}
        <div className="mt-3 flex flex-col gap-2">
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-solar-yellow" />
                <span className="font-mono text-[7px] text-brand-black">Input</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-compute-blue" />
                <span className="font-mono text-[7px] text-brand-black">Process</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-grid-green" />
                <span className="font-mono text-[7px] text-brand-black">Output</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <span className="font-accent text-xs text-compute-blue">Paket 3: Grid-OS</span>
          </div>
        </div>
      </div>
    </>
  )
}
