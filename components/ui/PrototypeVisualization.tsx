'use client'

export function PrototypeVisualization() {
  return (
    <div className="relative w-full max-w-3xl mx-auto bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden p-6">
      <svg
        viewBox="0 0 500 280"
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
        <rect width="500" height="280" fill="url(#grid)" />

        {/* 1. SUN - Radiating onto Solar Panel */}
        <g id="sun">
          {/* Sun body */}
          <circle cx="60" cy="30" r="18" fill="url(#sunGradient)" />
          <circle cx="60" cy="30" r="12" fill="#FBBF24" />
          {/* Sun rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x1 = 60 + Math.cos(rad) * 15
            const y1 = 30 + Math.sin(rad) * 15
            const x2 = 60 + Math.cos(rad) * 22
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
            d="M60 48 L60 70"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="3 3"
            className="animate-[dash_1s_linear_infinite]"
            strokeOpacity="0.6"
          />
          <path
            d="M48 45 L35 70"
            stroke="#FBBF24"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            className="animate-[dash_1.2s_linear_infinite]"
            strokeOpacity="0.4"
          />
          <path
            d="M72 45 L85 70"
            stroke="#FBBF24"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            className="animate-[dash_1.4s_linear_infinite]"
            strokeOpacity="0.4"
          />
        </g>

        {/* 2. Solar Panel Section */}
        <g id="solar-input">
          {/* Solar Panel */}
          <rect x="25" y="75" width="70" height="45" rx="4" fill="#FBBF24" fillOpacity="0.15" stroke="#FBBF24" strokeWidth="2" />
          {/* Panel grid lines */}
          <path d="M25 92 L95 92 M25 109 L95 109" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
          <path d="M48 75 L48 120 M72 75 L72 120" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
          {/* Reflection effect */}
          <rect x="30" y="80" width="15" height="8" rx="1" fill="white" fillOpacity="0.3" />
          
          <text x="60" y="135" textAnchor="middle" className="font-mono text-[9px] fill-solar-yellow font-bold">Solarmodul</text>
          
          {/* Energy Flow to Core */}
          <path
            d="M95 97 L150 97"
            stroke="#FBBF24"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            className="animate-[dash_2s_linear_infinite]"
          />
          <text x="122" y="90" textAnchor="middle" className="font-mono text-[6px] fill-solar-yellow">Strom</text>
        </g>

        {/* 3. The Sihlicon Core (Immersion Tank) */}
        <g id="sihlicon-core">
          {/* Tank Outer */}
          <rect x="150" y="55" width="130" height="130" rx="8" fill="#1A1A1A" />
          
          {/* Liquid Level */}
          <rect x="156" y="75" width="118" height="100" rx="4" fill="url(#waterGradient)" fillOpacity="0.3" />
          
          {/* Server Blades */}
          {[170, 192, 214, 236, 258].map((x, i) => (
            <rect
              key={i}
              x={x - 6}
              y="85"
              width="12"
              height="80"
              rx="2"
              fill="#3B82F6"
              fillOpacity="0.7"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          
          {/* Bubbles / Flow animation */}
          {[...Array(12)].map((_, i) => {
            const delay = i * 0.15
            const duration = 1.5 + (i % 4) * 0.4
            return (
              <circle
                key={i}
                cx={160 + (i * 9)}
                cy={160}
                r="2"
                fill="white"
                fillOpacity="0.5"
                className="animate-bounce"
                style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
              />
            )
          })}

          <text x="215" y="200" textAnchor="middle" className="font-mono text-[11px] fill-white font-bold">Sihlicon Core</text>
          <text x="215" y="212" textAnchor="middle" className="font-mono text-[7px] fill-gray-400">Immersionskühlung</text>
        </g>

        {/* 4. Heat Output Section - Split into Water & Room Heating */}
        <g id="heat-output">
          {/* Heat Flow Pipe from Core */}
          <path
            d="M280 120 L320 120"
            stroke="#FF6B35"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="animate-[dash_1.5s_linear_infinite]"
          />
          
          {/* Split point */}
          <circle cx="320" cy="120" r="5" fill="#FF6B35" />
          
          {/* Upper branch - Hot Water */}
          <path
            d="M320 120 L320 80 L360 80"
            stroke="#FF6B35"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1.8s_linear_infinite]"
          />
          
          {/* Hot Water Tank */}
          <g id="hot-water">
            <rect x="360" y="55" width="50" height="50" rx="6" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="2" />
            {/* Water waves inside */}
            <path d="M365 85 Q372 82 380 85 Q388 88 395 85 Q402 82 405 85" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
            <path d="M365 92 Q372 89 380 92 Q388 95 395 92 Q402 89 405 92" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
            {/* Steam/heat lines */}
            <path d="M375 55 Q378 48 375 42" stroke="#FF6B35" strokeWidth="1" fill="none" strokeOpacity="0.5" className="animate-pulse" />
            <path d="M385 55 Q388 46 385 38" stroke="#FF6B35" strokeWidth="1" fill="none" strokeOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <path d="M395 55 Q398 48 395 42" stroke="#FF6B35" strokeWidth="1" fill="none" strokeOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            {/* Tap/faucet icon */}
            <circle cx="385" cy="70" r="8" fill="white" fillOpacity="0.3" />
            <text x="385" y="73" textAnchor="middle" className="text-[10px]">🚿</text>
          </g>
          <text x="385" y="115" textAnchor="middle" className="font-mono text-[7px] fill-thermal-orange font-semibold">Warmwasser</text>
          <text x="385" y="123" textAnchor="middle" className="font-mono text-[6px] fill-historic-sepia">60°C</text>
          
          {/* Lower branch - Room Heating */}
          <path
            d="M320 120 L320 160 L360 160"
            stroke="#FF6B35"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_1.8s_linear_infinite]"
          />
          
          {/* Room/Radiator */}
          <g id="room-heating">
            {/* House outline */}
            <path d="M360 140 L385 125 L410 140 L410 180 L360 180 Z" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="2" />
            {/* Roof */}
            <path d="M360 140 L385 125 L410 140" fill="none" stroke="#FF6B35" strokeWidth="2" />
            {/* Radiator inside */}
            <rect x="368" y="155" width="34" height="18" rx="2" fill="none" stroke="#FF6B35" strokeWidth="1.5" />
            <path d="M375 155 L375 173 M382 155 L382 173 M389 155 L389 173 M396 155 L396 173" stroke="#FF6B35" strokeWidth="1" strokeOpacity="0.6" />
            {/* Heat waves from radiator */}
            <path d="M370 150 Q373 145 370 140" stroke="#FF6B35" strokeWidth="0.8" fill="none" strokeOpacity="0.4" className="animate-pulse" />
            <path d="M385 150 Q388 143 385 136" stroke="#FF6B35" strokeWidth="0.8" fill="none" strokeOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            <path d="M400 150 Q403 145 400 140" stroke="#FF6B35" strokeWidth="0.8" fill="none" strokeOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          </g>
          <text x="385" y="195" textAnchor="middle" className="font-mono text-[7px] fill-thermal-orange font-semibold">Raumheizung</text>
          <text x="385" y="203" textAnchor="middle" className="font-mono text-[6px] fill-historic-sepia">Fussbodenheizung</text>
        </g>

        {/* 5. Compute / Internet Section */}
        <g id="compute-flow">
          {/* Data flow up from Core */}
          <path
            d="M215 55 L215 25"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-[dash_2s_linear_infinite]"
          />
          
          {/* Cloud / Internet */}
          <g id="internet-cloud">
            {/* Cloud shape */}
            <ellipse cx="215" cy="15" rx="35" ry="12" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5" />
            {/* Globe icon inside */}
            <circle cx="200" cy="15" r="6" fill="none" stroke="#10B981" strokeWidth="1" />
            <path d="M194 15 L206 15 M200 9 L200 21" stroke="#10B981" strokeWidth="0.5" />
            <ellipse cx="200" cy="15" rx="3" ry="6" fill="none" stroke="#10B981" strokeWidth="0.5" />
            {/* Server rack icon */}
            <rect x="220" y="10" width="12" height="10" rx="1" fill="none" stroke="#10B981" strokeWidth="1" />
            <path d="M222 13 L230 13 M222 16 L230 16" stroke="#10B981" strokeWidth="0.5" />
          </g>
          
          <text x="170" y="12" textAnchor="middle" className="font-mono text-[7px] fill-grid-green font-bold">Internet</text>
          <text x="255" y="12" textAnchor="middle" className="font-mono text-[7px] fill-grid-green font-bold">Cloud</text>
          
          {/* Bidirectional arrows */}
          <text x="215" y="38" textAnchor="middle" className="font-mono text-[6px] fill-grid-green">Rechenleistung</text>
        </g>

        {/* Labels / Flow indicators */}
        <g id="labels">
          <text x="305" y="112" textAnchor="middle" className="font-mono text-[6px] fill-thermal-orange">Abwärme</text>
        </g>
      </svg>

      {/* Legend / Stats overlay */}
      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end pointer-events-none">
        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-solar-yellow animate-pulse" />
            <span className="font-mono text-[10px] text-brand-black">Solarstrom: 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-compute-blue" />
            <span className="font-mono text-[10px] text-brand-black">Wärmerückgewinnung: 99%</span>
          </div>
        </div>
        
        <div className="text-right">
          <span className="font-accent text-lg text-thermal-orange rotate-[-5deg] block">Digital Hearth v1.0</span>
        </div>
      </div>
    </div>
  )
}
