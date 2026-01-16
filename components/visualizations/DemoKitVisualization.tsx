'use client'

export function DemoKitVisualization() {
  return (
    <div className="relative w-full max-w-3xl mx-auto bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden p-6">
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
          Messbarer Energie-Flow mit reproduzierbarer One-Button Demo
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
          <text x="55" y="284" className="font-mono text-[12px] fill-white font-bold">▶️ One-Button Demo</text>
          
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

      {/* Legend */}
      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end pointer-events-none">
        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
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
  )
}
