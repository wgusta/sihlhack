'use client'

export function PrototypeVisualization() {
  return (
    <div className="relative w-full max-w-3xl mx-auto bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden p-6">
      <svg
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
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
        </defs>
        <rect width="500" height="300" fill="url(#grid)" />

        {/* 1. SUN - Radiating onto Solar Panel */}
        <g id="sun">
          {/* Sun body */}
          <circle cx="250" cy="30" r="18" fill="url(#sunGradient)" />
          <circle cx="250" cy="30" r="12" fill="#FBBF24" />
          {/* Sun rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x1 = 250 + Math.cos(rad) * 15
            const y1 = 30 + Math.sin(rad) * 15
            const x2 = 250 + Math.cos(rad) * 22
            const y2 = 30 + Math.sin(rad) * 22
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
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            )
          })}
          {/* Light beams to solar panel */}
          <path
            d="M250 48 L250 70"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="3 3"
            className="animate-[dash_1s_linear_infinite]"
            strokeOpacity="0.6"
          />
        </g>

        {/* 2. Solar Panel Section - Centered */}
        <g id="solar-input">
          {/* Solar Panel */}
          <rect x="215" y="75" width="70" height="45" rx="4" fill="#FBBF24" fillOpacity="0.15" stroke="#FBBF24" strokeWidth="2" />
          {/* Panel grid lines */}
          <path d="M215 92 L285 92 M215 109 L285 109" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
          <path d="M238 75 L238 120 M262 75 L262 120" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
          {/* Reflection effect */}
          <rect x="220" y="80" width="15" height="8" rx="1" fill="white" fillOpacity="0.3" />
          
          <text x="250" y="135" textAnchor="middle" className="font-mono text-[9px] fill-solar-yellow font-bold">Solarmodul</text>
        </g>

        {/* 3. Two Houses - Left and Right of Solar Panel */}
        {/* House 1 (Left) */}
        <g id="house-1">
          <path d="M120 140 L145 125 L170 140 L170 180 L120 180 Z" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
          <path d="M120 140 L145 125 L170 140" fill="none" stroke="#10B981" strokeWidth="2" />
          <text x="145" y="195" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-semibold">Haus 1</text>
        </g>

        {/* House 2 (Right) */}
        <g id="house-2">
          <path d="M330 140 L355 125 L380 140 L380 180 L330 180 Z" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
          <path d="M330 140 L355 125 L380 140" fill="none" stroke="#10B981" strokeWidth="2" />
          <text x="355" y="195" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-semibold">Haus 2</text>
        </g>

        {/* 4. Solar Flow: Solar Panel → Houses (direct) */}
        {/* Flow to House 1 */}
        <path
          d="M215 97 L145 160"
          stroke="#FBBF24"
          strokeWidth="2.5"
          strokeDasharray="5 4"
          className="animate-[dash_2s_linear_infinite]"
        />
        <text x="180" y="125" textAnchor="middle" className="font-mono text-[7px] fill-solar-yellow font-bold">Strom</text>

        {/* Flow to House 2 */}
        <path
          d="M285 97 L355 160"
          stroke="#FBBF24"
          strokeWidth="2.5"
          strokeDasharray="5 4"
          className="animate-[dash_2s_linear_infinite]"
        />
        <text x="320" y="125" textAnchor="middle" className="font-mono text-[7px] fill-solar-yellow font-bold">Strom</text>

        {/* 5. Rest of Solar Flow: Solar Panel → Immersion Tank */}
        <path
          d="M250 120 L250 180"
          stroke="#FBBF24"
          strokeWidth="2.5"
          strokeDasharray="5 4"
          className="animate-[dash_2s_linear_infinite]"
        />
        <text x="265" y="150" textAnchor="middle" className="font-mono text-[7px] fill-solar-yellow font-bold">Rest-Strom</text>

        {/* 6. The Sihlicon Core (Immersion Tank) - Centered below */}
        <g id="sihlicon-core">
          {/* Tank Outer */}
          <rect x="200" y="180" width="100" height="80" rx="8" fill="#1A1A1A" />
          
          {/* Liquid Level */}
          <rect x="206" y="195" width="88" height="60" rx="4" fill="url(#waterGradient)" fillOpacity="0.3" />
          
          {/* Server Blades */}
          {[215, 230, 245, 260, 275].map((x, i) => (
            <rect
              key={i}
              x={x - 4}
              y="205"
              width="8"
              height="50"
              rx="1"
              fill="#3B82F6"
              fillOpacity="0.7"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          
          {/* Bubbles / Flow animation */}
          {[...Array(8)].map((_, i) => {
            const delay = i * 0.15
            const duration = 1.5 + (i % 4) * 0.4
            return (
              <circle
                key={i}
                cx={210 + (i * 10)}
                cy={235}
                r="2"
                fill="white"
                fillOpacity="0.5"
                className="animate-bounce"
                style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
              />
            )
          })}

          <text x="250" y="275" textAnchor="middle" className="font-mono text-[10px] fill-white font-bold">Sihlicon Core</text>
          <text x="250" y="285" textAnchor="middle" className="font-mono text-[7px] fill-gray-400">Immersionskühlung</text>
        </g>

        {/* 7. Heat Return: Immersion Tank → Houses with Labels */}
        {/* Heat Flow to House 1 - Warmwasser */}
        <path
          d="M200 220 L145 180"
          stroke="#FF6B35"
          strokeWidth="3"
          strokeDasharray="6 4"
          className="animate-[dash_1.5s_linear_infinite]"
        />
        <text x="172" y="200" textAnchor="middle" className="font-mono text-[7px] fill-thermal-orange font-bold">Warmwasser</text>

        {/* Heat Flow to House 2 - Raumheizung */}
        <path
          d="M300 220 L355 180"
          stroke="#FF6B35"
          strokeWidth="3"
          strokeDasharray="6 4"
          className="animate-[dash_1.5s_linear_infinite]"
        />
        <text x="327" y="200" textAnchor="middle" className="font-mono text-[7px] fill-thermal-orange font-bold">Raumheizung</text>

        {/* 8. Compute / AI Section - Below Immersion Tank */}
        <g id="compute-flow">
          {/* Data flow down from Core */}
          <path
            d="M250 260 L250 290"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            className="animate-[dash_2s_linear_infinite]"
          />
          
          {/* Rechenleistung label on the line */}
          <text x="250" y="280" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-bold">Rechenleistung</text>
          
          {/* AI-Training - Left of arrow */}
          <text x="150" y="290" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-bold">AI-Training</text>
          {/* Neural network icon - Left */}
          <circle cx="150" cy="275" r="6" fill="none" stroke="#10B981" strokeWidth="1.5" />
          <path d="M147 272 L153 278 M153 272 L147 278" stroke="#10B981" strokeWidth="1" />
          <circle cx="150" cy="275" r="3" fill="#10B981" fillOpacity="0.3" />
          
          {/* AI-Inference - Right of arrow */}
          <text x="350" y="290" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-bold">AI-Inference</text>
          {/* Lightning/bolt icon - Right */}
          <path d="M350 269 L347 275 L350 275 L353 281 L350 275 L347 275" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>

      {/* Legend / Stats overlay */}
      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end pointer-events-none">
        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-solar-yellow animate-pulse" />
              <span className="font-mono text-[9px] text-brand-black">P_solar: 150W</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-compute-blue" />
              <span className="font-mono text-[9px] text-brand-black">P_compute: 140W</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-thermal-orange" />
              <span className="font-mono text-[9px] text-brand-black">ΔT: +25°C</span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <span className="font-accent text-sm text-thermal-orange">Sihlicon Hub Demo</span>
          <span className="font-mono text-[8px] text-historic-sepia block">20L Tank · Mini-ITX</span>
        </div>
      </div>
    </div>
  )
}
