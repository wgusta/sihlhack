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

        {/* 1. SUN - Shifted further Left (cx=130) */}
        <g id="sun">
          <circle cx="130" cy="30" r="18" fill="url(#sunGradient)" />
          <circle cx="130" cy="30" r="12" fill="#FBBF24" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x1 = 130 + Math.cos(rad) * 15
            const y1 = 30 + Math.sin(rad) * 15
            const x2 = 130 + Math.cos(rad) * 22
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
          <path
            d="M130 48 L130 70"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="3 3"
            className="animate-[dash_1s_linear_infinite]"
            strokeOpacity="0.6"
          />
        </g>

        {/* 2. Solar Panel Section - Shifted Left (x=95) */}
        <g id="solar-input">
          <rect x="95" y="75" width="70" height="45" rx="4" fill="#FBBF24" fillOpacity="0.15" stroke="#FBBF24" strokeWidth="2" />
          <path d="M95 92 L165 92 M95 109 L165 109" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
          <path d="M118 75 L118 120 M142 75 L162 120" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.4" />
          <rect x="100" y="80" width="15" height="8" rx="1" fill="white" fillOpacity="0.3" />
          <text x="130" y="135" textAnchor="middle" className="font-mono text-[9px] fill-solar-yellow font-bold">Solarmodul</text>
        </g>

        {/* 3. Two Houses - Left and Right of Main Column */}
        {/* House 1 (Far Left) */}
        <g id="house-1">
          <path d="M10 140 L35 125 L60 140 L60 180 L10 180 Z" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
          <path d="M10 140 L35 125 L60 140" fill="none" stroke="#10B981" strokeWidth="2" />
          <text x="35" y="195" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-semibold">Haus 1</text>
        </g>

        {/* House 2 (Right of Column) */}
        <g id="house-2">
          <path d="M200 140 L225 125 L250 140 L250 180 L200 180 Z" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
          <path d="M200 140 L225 125 L250 140" fill="none" stroke="#10B981" strokeWidth="2" />
          <text x="225" y="195" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-semibold">Haus 2</text>
        </g>

        {/* 4. Solar Flow: Solar Panel → Houses */}
        {/* Flow to House 1 - Stops at border */}
        <path
          d="M95 97 L55 135"
          stroke="#FBBF24"
          strokeWidth="2.5"
          strokeDasharray="5 4"
          className="animate-[dash_2s_linear_infinite]"
        />
        <text x="80" y="120" textAnchor="middle" className="font-mono text-[7px] fill-solar-yellow font-bold">Strom</text>

        {/* Flow to House 2 - Stops at border */}
        <path
          d="M165 97 L205 135"
          stroke="#FBBF24"
          strokeWidth="2.5"
          strokeDasharray="5 4"
          className="animate-[dash_2s_linear_infinite]"
        />
        <text x="190" y="120" textAnchor="middle" className="font-mono text-[7px] fill-solar-yellow font-bold">Strom</text>

        {/* 5. Rest of Solar Flow: Solar Panel → Immersion Tank */}
        <path
          d="M130 120 L130 180"
          stroke="#FBBF24"
          strokeWidth="2.5"
          strokeDasharray="5 4"
          className="animate-[dash_2s_linear_infinite]"
        />
        <text x="145" y="150" textAnchor="middle" className="font-mono text-[7px] fill-solar-yellow font-bold">Rest-Strom</text>

        {/* 6. The Sihlicon Core (Immersion Tank) - Shifted Left (x=80) */}
        <g id="sihlicon-core">
          <rect x="80" y="180" width="100" height="80" rx="8" fill="#1A1A1A" />
          <rect x="86" y="195" width="88" height="60" rx="4" fill="url(#waterGradient)" fillOpacity="0.3" />
          {[95, 110, 125, 140, 155].map((x, i) => (
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
          {[...Array(8)].map((_, i) => {
            const delay = i * 0.15
            const duration = 1.5 + (i % 4) * 0.4
            return (
              <circle
                key={i}
                cx={90 + (i * 10)}
                cy={235}
                r="2"
                fill="white"
                fillOpacity="0.5"
                className="animate-bounce"
                style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
              />
            )
          })}
          <text x="130" y="275" textAnchor="middle" className="font-mono text-[10px] fill-white font-bold">Sihlicon Hub Core</text>
          <text x="130" y="285" textAnchor="middle" className="font-mono text-[7px] fill-gray-400 font-bold">Immersionskühlung</text>
        </g>

        {/* 7. Heat Return: Immersion Tank → Houses - Starts from BOTTOM edge */}
        {/* Heat Flow to House 1 - Warmwasser */}
        <path
          d="M100 260 L35 180"
          stroke="#FF6B35"
          strokeWidth="3"
          strokeDasharray="6 4"
          className="animate-[dash_1.5s_linear_infinite]"
        />
        <text x="52" y="225" textAnchor="middle" className="font-mono text-[7px] fill-thermal-orange font-bold">Warmwasser</text>

        {/* Heat Flow to House 2 - Raumheizung */}
        <path
          d="M160 260 L225 180"
          stroke="#FF6B35"
          strokeWidth="3"
          strokeDasharray="6 4"
          className="animate-[dash_1.5s_linear_infinite]"
        />
        <text x="207" y="225" textAnchor="middle" className="font-mono text-[7px] fill-thermal-orange font-bold">Raumheizung</text>

        {/* 8. Compute / AI Section - To the right of Immersion Tank (PURPLE) */}
        <g id="compute-flow">
          {/* Data flow right from Core and branching */}
          <path
            d="M180 220 L340 220"
            stroke="#A855F7"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            className="animate-[dash_2s_linear_infinite]"
          />
          {/* Branch to Training */}
          <path
            d="M340 220 L360 190"
            stroke="#A855F7"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            className="animate-[dash_2s_linear_infinite]"
          />
          {/* Branch to Inference */}
          <path
            d="M340 220 L360 240"
            stroke="#A855F7"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            className="animate-[dash_2s_linear_infinite]"
          />
          
          {/* Rechenleistung label on the line */}
          <text x="260" y="210" textAnchor="middle" className="font-mono text-[8px] fill-purple-500 font-bold">Rechenleistung</text>
          
          {/* AI-Training - Stacked on the right */}
          <g transform="translate(360, 190)">
            <text x="45" y="10" textAnchor="middle" className="font-mono text-[8px] fill-purple-500 font-bold">AI-Training</text>
            {/* Neural network icon */}
            <circle cx="45" cy="-5" r="6" fill="none" stroke="#A855F7" strokeWidth="1.5" />
            <path d="M42 -8 L48 -2 M48 -8 L42 -2" stroke="#A855F7" strokeWidth="1" />
            <circle cx="45" cy="-5" r="3" fill="#A855F7" fillOpacity="0.3" />
          </g>
          
          {/* AI-Inference - Stacked on the right */}
          <g transform="translate(360, 240)">
            <text x="45" y="10" textAnchor="middle" className="font-mono text-[8px] fill-purple-500 font-bold">AI-Inference</text>
            {/* Lightning/bolt icon */}
            <path d="M45 -11 L42 -5 L45 -5 L48 1 L45 -5 L42 -5" stroke="#A855F7" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
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
