'use client'

export function SafetyVisualization() {
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
          <pattern id="safetyGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="500" height="320" fill="url(#safetyGrid)" />

        {/* Title */}
        <text x="250" y="25" textAnchor="middle" className="font-display text-[14px] fill-brand-black font-bold">
          Hardware Safety & Thermal Baseline
        </text>
        <text x="250" y="40" textAnchor="middle" className="font-mono text-[8px] fill-historic-sepia">
          BOM, Safety Case und thermische Charakterisierung
        </text>

        {/* Safety Flow Diagram */}
        
        {/* RCD/GFCI */}
        <g id="rcd-section">
          <rect x="30" y="60" width="70" height="70" rx="8" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
          <text x="65" y="85" textAnchor="middle" className="text-[18px]">🔌</text>
          <text x="65" y="105" textAnchor="middle" className="font-mono text-[9px] fill-grid-green font-bold">RCD/GFCI</text>
          <text x="65" y="118" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">30mA Trip</text>
          
          {/* Status indicator */}
          <circle cx="90" cy="68" r="6" fill="#10B981" className="animate-pulse" />
          <text x="90" y="71" textAnchor="middle" className="font-mono text-[6px] fill-white font-bold">OK</text>
        </g>

        {/* Arrow to Tank */}
        <path
          d="M105 95 L145 95"
          stroke="#10B981"
          strokeWidth="2"
          strokeDasharray="4 3"
          className="animate-[dash_2s_linear_infinite]"
        />
        <text x="125" y="88" textAnchor="middle" className="font-mono text-[6px] fill-grid-green">⚡ 230V</text>

        {/* Tank with Safety Features */}
        <g id="tank-section">
          <rect x="150" y="55" width="100" height="80" rx="6" fill="#1A1A1A" />
          <rect x="156" y="65" width="88" height="60" rx="4" fill="#3B82F6" fillOpacity="0.2" />
          
          {/* Server blades in tank */}
          {[165, 180, 195, 210, 225].map((x, i) => (
            <rect
              key={i}
              x={x}
              y="72"
              width="8"
              height="45"
              rx="1"
              fill="#3B82F6"
              fillOpacity="0.6"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          
          <text x="200" y="143" textAnchor="middle" className="font-mono text-[8px] fill-white font-bold">Immersionstank</text>
        </g>

        {/* Arrow to Water */}
        <path
          d="M255 95 L295 95"
          stroke="#FF6B35"
          strokeWidth="2"
          strokeDasharray="4 3"
          className="animate-[dash_2s_linear_infinite]"
        />
        <text x="275" y="88" textAnchor="middle" className="font-mono text-[6px] fill-thermal-orange">🔥 Heat</text>

        {/* Water Output */}
        <g id="water-output">
          <rect x="300" y="60" width="70" height="70" rx="8" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" />
          <text x="335" y="85" textAnchor="middle" className="text-[18px]">💧</text>
          <text x="335" y="105" textAnchor="middle" className="font-mono text-[9px] fill-compute-blue font-bold">45°C</text>
          <text x="335" y="118" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">Warmwasser</text>
        </g>

        {/* Safety Indicators Row */}
        <g id="safety-indicators">
          {/* NOT-AUS */}
          <g id="not-aus">
            <rect x="30" y="150" width="65" height="50" rx="6" fill="#DC2626" fillOpacity="0.1" stroke="#DC2626" strokeWidth="2" />
            <text x="62" y="170" textAnchor="middle" className="text-[14px]">🛑</text>
            <text x="62" y="185" textAnchor="middle" className="font-mono text-[8px] fill-sihl-red font-bold">NOT-AUS</text>
            <circle cx="85" cy="155" r="5" fill="#10B981" className="animate-pulse" />
          </g>

          {/* Leckwanne */}
          <g id="leckwanne">
            <rect x="110" y="150" width="65" height="50" rx="6" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="2" />
            <text x="142" y="170" textAnchor="middle" className="text-[14px]">🪣</text>
            <text x="142" y="185" textAnchor="middle" className="font-mono text-[8px] fill-solar-yellow font-bold">Leckwanne</text>
            <circle cx="165" cy="155" r="5" fill="#10B981" className="animate-pulse" />
          </g>

          {/* Temp-Max */}
          <g id="temp-max">
            <rect x="190" y="150" width="65" height="50" rx="6" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="2" />
            <text x="222" y="170" textAnchor="middle" className="text-[14px]">🌡️</text>
            <text x="222" y="185" textAnchor="middle" className="font-mono text-[8px] fill-thermal-orange font-bold">Temp-Max</text>
            <circle cx="245" cy="155" r="5" fill="#10B981" className="animate-pulse" />
          </g>

          {/* Flow Sensor */}
          <g id="flow-sensor">
            <rect x="270" y="150" width="65" height="50" rx="6" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
            <text x="302" y="170" textAnchor="middle" className="text-[14px]">📡</text>
            <text x="302" y="185" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-bold">Flow</text>
            <circle cx="325" cy="155" r="5" fill="#10B981" className="animate-pulse" />
          </g>
        </g>

        {/* Thermal Baseline Graph */}
        <g id="thermal-graph">
          <rect x="380" y="55" width="110" height="145" rx="8" fill="#f9f9f9" stroke="#e5e5e5" strokeWidth="1" />
          <text x="435" y="72" textAnchor="middle" className="font-mono text-[9px] fill-brand-black font-bold">Thermal Baseline</text>
          
          {/* Graph Axes */}
          <line x1="395" y1="180" x2="475" y2="180" stroke="#ccc" strokeWidth="1" />
          <line x1="395" y1="90" x2="395" y2="180" stroke="#ccc" strokeWidth="1" />
          
          {/* Y-axis label */}
          <text x="388" y="135" textAnchor="middle" className="font-mono text-[6px] fill-historic-sepia" transform="rotate(-90, 388, 135)">ΔT (°C)</text>
          
          {/* X-axis label */}
          <text x="435" y="192" textAnchor="middle" className="font-mono text-[6px] fill-historic-sepia">Load (W)</text>
          
          {/* Graph Line - Animated */}
          <path
            d="M400 170 Q420 150 435 130 Q450 115 465 110"
            stroke="#FF6B35"
            strokeWidth="2"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset="100"
            className="animate-[drawLine_3s_ease-out_forwards]"
          />
          
          {/* Data points */}
          <circle cx="400" cy="170" r="3" fill="#FF6B35" className="animate-pulse" />
          <circle cx="420" cy="150" r="3" fill="#FF6B35" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="435" cy="130" r="3" fill="#FF6B35" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="450" cy="115" r="3" fill="#FF6B35" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="465" cy="110" r="3" fill="#FF6B35" className="animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Y-axis values */}
          <text x="392" y="175" textAnchor="end" className="font-mono text-[6px] fill-historic-sepia">0</text>
          <text x="392" y="140" textAnchor="end" className="font-mono text-[6px] fill-historic-sepia">15</text>
          <text x="392" y="105" textAnchor="end" className="font-mono text-[6px] fill-historic-sepia">30</text>
        </g>

        {/* BOM Section */}
        <g id="bom-section">
          <rect x="30" y="215" width="150" height="90" rx="8" fill="#f9f9f9" stroke="#e5e5e5" strokeWidth="1" />
          <text x="105" y="232" textAnchor="middle" className="font-mono text-[10px] fill-brand-black font-bold">📦 BOM (CH/EU)</text>
          
          <text x="40" y="250" className="font-mono text-[7px] fill-historic-sepia">• Tank Edelstahl 20L</text>
          <text x="40" y="262" className="font-mono text-[7px] fill-historic-sepia">• Midel 7131 (15L)</text>
          <text x="40" y="274" className="font-mono text-[7px] fill-historic-sepia">• Plattenwärmetauscher</text>
          <text x="40" y="286" className="font-mono text-[7px] fill-historic-sepia">• Pumpe + Fittings</text>
          <text x="40" y="298" className="font-mono text-[7px] fill-historic-sepia">• Sensoren (T, Flow, P)</text>
        </g>

        {/* Sensor Map */}
        <g id="sensor-map">
          <rect x="195" y="215" width="150" height="90" rx="8" fill="#f9f9f9" stroke="#e5e5e5" strokeWidth="1" />
          <text x="270" y="232" textAnchor="middle" className="font-mono text-[10px] fill-brand-black font-bold">📍 Sensor-Map</text>
          
          <text x="205" y="250" className="font-mono text-[7px] fill-compute-blue">T1: Öl-Einlass</text>
          <text x="205" y="262" className="font-mono text-[7px] fill-thermal-orange">T2: Öl-Auslass</text>
          <text x="205" y="274" className="font-mono text-[7px] fill-grid-green">T3: Wasser-Aus</text>
          <text x="205" y="286" className="font-mono text-[7px] fill-solar-yellow">P1: Stromverbrauch</text>
          <text x="205" y="298" className="font-mono text-[7px] fill-historic-sepia">F1: Durchfluss</text>
        </g>

        {/* Safety Checklist */}
        <g id="safety-checklist">
          <rect x="360" y="215" width="130" height="90" rx="8" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
          <text x="425" y="232" textAnchor="middle" className="font-mono text-[10px] fill-grid-green font-bold">✓ Safety Case</text>
          
          <text x="370" y="250" className="font-mono text-[7px] fill-grid-green">✓ RCD 30mA installiert</text>
          <text x="370" y="262" className="font-mono text-[7px] fill-grid-green">✓ NOT-AUS erreichbar</text>
          <text x="370" y="274" className="font-mono text-[7px] fill-grid-green">✓ Leckwanne dimensioniert</text>
          <text x="370" y="286" className="font-mono text-[7px] fill-grid-green">✓ Temp-Max konfiguriert</text>
          <text x="370" y="298" className="font-mono text-[7px] fill-grid-green">✓ Öl-Handling dokumentiert</text>
        </g>
          </svg>
        </div>

        {/* Legend - Desktop */}
        <div className="px-4 pb-4 sm:px-6 sm:pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-grid-green" />
                <span className="font-mono text-[9px] text-brand-black">Safety OK</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-thermal-orange" />
                <span className="font-mono text-[9px] text-brand-black">Thermal</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-compute-blue" />
                <span className="font-mono text-[9px] text-brand-black">Sensors</span>
              </div>
            </div>
          </div>
          
          <span className="font-accent text-sm text-sihl-red">Paket 2: Safety</span>
        </div>
      </div>

      {/* Mobile Version - Vertical Layout */}
      <div className="md:hidden relative w-full mx-auto bg-white rounded-2xl border-2 border-gray-100 shadow-xl overflow-hidden p-3">
        {/* Title */}
        <div className="text-center mb-3">
          <h3 className="font-display text-base font-bold text-brand-black">Hardware Safety & Thermal Baseline</h3>
          <p className="font-mono text-[9px] text-historic-sepia mt-1">
            BOM, Safety Case und thermische Charakterisierung
          </p>
        </div>

        <svg
          viewBox="0 0 260 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ maxHeight: '580px' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background Grid */}
          <defs>
            <pattern id="safetyGridMobile" width="15" height="15" patternUnits="userSpaceOnUse">
              <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="260" height="580" fill="url(#safetyGridMobile)" />

          {/* Flow: RCD → Tank → Water (Vertical) */}
          
          {/* 1. RCD/GFCI */}
          <g id="rcd-section-mobile">
            <rect x="80" y="30" width="100" height="60" rx="8" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
            <text x="130" y="52" textAnchor="middle" className="text-[16px]">🔌</text>
            <text x="130" y="68" textAnchor="middle" className="font-mono text-[9px] fill-grid-green font-bold">RCD/GFCI</text>
            <text x="130" y="78" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">30mA Trip</text>
            <circle cx="165" cy="40" r="5" fill="#10B981" className="animate-pulse" />
            <text x="165" y="43" textAnchor="middle" className="font-mono text-[6px] fill-white font-bold">OK</text>
          </g>

          {/* Arrow 1 (Down) */}
          <path
            d="M130 90 L130 110"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_2s_linear_infinite]"
          />
          <text x="130" y="100" textAnchor="middle" className="font-mono text-[6px] fill-grid-green">⚡ 230V</text>

          {/* 2. Tank */}
          <g id="tank-section-mobile">
            <rect x="70" y="115" width="120" height="70" rx="6" fill="#1A1A1A" />
            <rect x="76" y="123" width="108" height="54" rx="4" fill="#3B82F6" fillOpacity="0.2" />
            
            {/* Server blades */}
            {[85, 100, 115, 130, 145].map((x, i) => (
              <rect
                key={i}
                x={x}
                y="130"
                width="7"
                height="40"
                rx="1"
                fill="#3B82F6"
                fillOpacity="0.6"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
            
            <text x="130" y="192" textAnchor="middle" className="font-mono text-[8px] fill-white font-bold">Immersionstank</text>
          </g>

          {/* Arrow 2 (Down) */}
          <path
            d="M130 185 L130 205"
            stroke="#FF6B35"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-[dash_2s_linear_infinite]"
          />
          <text x="130" y="195" textAnchor="middle" className="font-mono text-[6px] fill-thermal-orange">🔥 Heat</text>

          {/* 3. Water Output */}
          <g id="water-output-mobile">
            <rect x="80" y="210" width="100" height="60" rx="8" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" />
            <text x="130" y="232" textAnchor="middle" className="text-[16px]">💧</text>
            <text x="130" y="250" textAnchor="middle" className="font-mono text-[9px] fill-compute-blue font-bold">45°C</text>
            <text x="130" y="260" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">Warmwasser</text>
          </g>

          {/* Safety Indicators - Grid Layout */}
          <g id="safety-indicators-mobile">
            {/* NOT-AUS */}
            <g id="not-aus-mobile">
              <rect x="10" y="285" width="55" height="45" rx="6" fill="#DC2626" fillOpacity="0.1" stroke="#DC2626" strokeWidth="2" />
              <text x="37" y="305" textAnchor="middle" className="text-[12px]">🛑</text>
              <text x="37" y="318" textAnchor="middle" className="font-mono text-[7px] fill-sihl-red font-bold">NOT-AUS</text>
              <circle cx="58" cy="290" r="4" fill="#10B981" className="animate-pulse" />
            </g>

            {/* Leckwanne */}
            <g id="leckwanne-mobile">
              <rect x="70" y="285" width="55" height="45" rx="6" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="2" />
              <text x="97" y="305" textAnchor="middle" className="text-[12px]">🪣</text>
              <text x="97" y="318" textAnchor="middle" className="font-mono text-[7px] fill-solar-yellow font-bold">Leckwanne</text>
              <circle cx="118" cy="290" r="4" fill="#10B981" className="animate-pulse" />
            </g>

            {/* Temp-Max */}
            <g id="temp-max-mobile">
              <rect x="130" y="285" width="55" height="45" rx="6" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="2" />
              <text x="157" y="305" textAnchor="middle" className="text-[12px]">🌡️</text>
              <text x="157" y="318" textAnchor="middle" className="font-mono text-[7px] fill-thermal-orange font-bold">Temp-Max</text>
              <circle cx="178" cy="290" r="4" fill="#10B981" className="animate-pulse" />
            </g>

            {/* Flow Sensor */}
            <g id="flow-sensor-mobile">
              <rect x="190" y="285" width="55" height="45" rx="6" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
              <text x="217" y="305" textAnchor="middle" className="text-[12px]">📡</text>
              <text x="217" y="318" textAnchor="middle" className="font-mono text-[7px] fill-grid-green font-bold">Flow</text>
              <circle cx="238" cy="290" r="4" fill="#10B981" className="animate-pulse" />
            </g>
          </g>

          {/* Thermal Baseline Graph - Compact */}
          <g id="thermal-graph-mobile">
            <rect x="10" y="345" width="240" height="90" rx="6" fill="#f9f9f9" stroke="#e5e5e5" strokeWidth="1" />
            <text x="130" y="360" textAnchor="middle" className="font-mono text-[8px] fill-brand-black font-bold">Thermal Baseline</text>
            
            {/* Graph Axes */}
            <line x1="25" y1="410" x2="225" y2="410" stroke="#ccc" strokeWidth="1" />
            <line x1="25" y1="375" x2="25" y2="410" stroke="#ccc" strokeWidth="1" />
            
            {/* Y-axis label */}
            <text x="18" y="392" textAnchor="middle" className="font-mono text-[5px] fill-historic-sepia" transform="rotate(-90, 18, 392)">ΔT (°C)</text>
            
            {/* X-axis label */}
            <text x="125" y="422" textAnchor="middle" className="font-mono text-[5px] fill-historic-sepia">Load (W)</text>
            
            {/* Graph Line */}
            <path
              d="M30 405 Q80 385 125 365 Q170 350 215 345"
              stroke="#FF6B35"
              strokeWidth="2"
              fill="none"
              strokeDasharray="200"
              strokeDashoffset="200"
              className="animate-[drawLine_3s_ease-out_forwards]"
            />
            
            {/* Data points */}
            <circle cx="30" cy="405" r="2.5" fill="#FF6B35" className="animate-pulse" />
            <circle cx="80" cy="385" r="2.5" fill="#FF6B35" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="125" cy="365" r="2.5" fill="#FF6B35" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="170" cy="350" r="2.5" fill="#FF6B35" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="215" cy="345" r="2.5" fill="#FF6B35" className="animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Y-axis values */}
            <text x="22" y="410" textAnchor="end" className="font-mono text-[5px] fill-historic-sepia">0</text>
            <text x="22" y="390" textAnchor="end" className="font-mono text-[5px] fill-historic-sepia">15</text>
            <text x="22" y="375" textAnchor="end" className="font-mono text-[5px] fill-historic-sepia">30</text>
          </g>

          {/* BOM Section - Compact */}
          <g id="bom-section-mobile">
            <rect x="10" y="445" width="115" height="65" rx="6" fill="#f9f9f9" stroke="#e5e5e5" strokeWidth="1" />
            <text x="67" y="460" textAnchor="middle" className="font-mono text-[8px] fill-brand-black font-bold">📦 BOM</text>
            
            <text x="18" y="475" className="font-mono text-[6px] fill-historic-sepia">• Tank 20L</text>
            <text x="18" y="485" className="font-mono text-[6px] fill-historic-sepia">• Midel 7131</text>
            <text x="18" y="495" className="font-mono text-[6px] fill-historic-sepia">• Wärmetauscher</text>
            <text x="18" y="505" className="font-mono text-[6px] fill-historic-sepia">• Pumpe</text>
          </g>

          {/* Sensor Map - Compact */}
          <g id="sensor-map-mobile">
            <rect x="135" y="445" width="115" height="65" rx="6" fill="#f9f9f9" stroke="#e5e5e5" strokeWidth="1" />
            <text x="192" y="460" textAnchor="middle" className="font-mono text-[8px] fill-brand-black font-bold">📍 Sensors</text>
            
            <text x="142" y="475" className="font-mono text-[6px] fill-compute-blue">T1: Öl-Ein</text>
            <text x="142" y="485" className="font-mono text-[6px] fill-thermal-orange">T2: Öl-Aus</text>
            <text x="142" y="495" className="font-mono text-[6px] fill-grid-green">T3: Wasser</text>
            <text x="142" y="505" className="font-mono text-[6px] fill-solar-yellow">P1: Strom</text>
          </g>

          {/* Safety Checklist - Compact */}
          <g id="safety-checklist-mobile">
            <rect x="10" y="520" width="240" height="50" rx="6" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
            <text x="130" y="535" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-bold">✓ Safety Case</text>
            
            <text x="18" y="548" className="font-mono text-[6px] fill-grid-green">✓ RCD 30mA</text>
            <text x="85" y="548" className="font-mono text-[6px] fill-grid-green">✓ NOT-AUS</text>
            <text x="150" y="548" className="font-mono text-[6px] fill-grid-green">✓ Leckwanne</text>
            <text x="18" y="558" className="font-mono text-[6px] fill-grid-green">✓ Temp-Max</text>
            <text x="85" y="558" className="font-mono text-[6px] fill-grid-green">✓ Öl-Doku</text>
          </g>
        </svg>

        {/* Legend - Mobile */}
        <div className="mt-3 flex flex-col gap-2">
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-grid-green" />
                <span className="font-mono text-[7px] text-brand-black">Safety OK</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-thermal-orange" />
                <span className="font-mono text-[7px] text-brand-black">Thermal</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-compute-blue" />
                <span className="font-mono text-[7px] text-brand-black">Sensors</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <span className="font-accent text-xs text-sihl-red">Paket 2: Safety</span>
          </div>
        </div>
      </div>
    </>
  )
}
