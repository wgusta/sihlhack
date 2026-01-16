'use client'

import { motion } from 'framer-motion'

export function PrototypeVisualization() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-video bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden p-8">
      <svg
        viewBox="0 0 400 225"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="225" fill="url(#grid)" />

        {/* 1. Solar Input Section */}
        <g id="solar-input">
          {/* Solar Panel */}
          <rect x="30" y="40" width="60" height="40" rx="4" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="2" />
          <path d="M30 60 L90 60 M50 40 L50 80 M70 40 L70 80" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.5" />
          <text x="60" y="30" textAnchor="middle" className="font-mono text-[8px] fill-solar-yellow font-bold uppercase">Solar Input</text>
          
          {/* Energy Flow */}
          <motion.path
            d="M90 60 L140 60"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* 2. The Sihlicon Core (Immersion Tank) */}
        <g id="sihlicon-core">
          {/* Tank Outer */}
          <rect x="140" y="40" width="120" height="120" rx="8" fill="#1A1A1A" />
          
          {/* Liquid Level */}
          <rect x="145" y="60" width="110" height="95" rx="4" fill="#3B82F6" fillOpacity="0.2" />
          
          {/* Server Blades */}
          {[160, 180, 200, 220, 240].map((x, i) => (
            <motion.rect
              key={i}
              x={x - 5}
              y="70"
              width="10"
              height="75"
              rx="2"
              fill="#3B82F6"
              animate={{ fillOpacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
          
          {/* Bubbles / Flow animation */}
          {[...Array(10)].map((_, i) => (
            <motion.circle
              key={i}
              cx={150 + Math.random() * 100}
              cy={140}
              r="1.5"
              fill="white"
              fillOpacity="0.4"
              animate={{ y: [-10, -60], opacity: [0, 1, 0] }}
              transition={{ duration: 2 + Math.random(), delay: Math.random() * 2, repeat: Infinity }}
            />
          ))}

          <text x="200" y="175" textAnchor="middle" className="font-mono text-[10px] fill-brand-black font-bold uppercase">Sihlicon Core</text>
          <text x="200" y="185" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia">Immersion Cooling Prototype</text>
        </g>

        {/* 3. Heat Output Section */}
        <g id="heat-output">
          {/* Heat Flow Pipe */}
          <motion.path
            d="M260 100 L310 100"
            stroke="#FF6B35"
            strokeWidth="3"
            strokeDasharray="6 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Building / Radiator */}
          <path d="M310 80 L370 80 L370 140 L310 140 Z" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="2" />
          <path d="M320 140 L320 100 M330 140 L330 100 M340 140 L340 100 M350 140 L350 100 M360 140 L360 100" stroke="#FF6B35" strokeWidth="1" strokeOpacity="0.5" />
          
          <text x="340" y="70" textAnchor="middle" className="font-mono text-[8px] fill-thermal-orange font-bold uppercase">Heating Output</text>
          <text x="340" y="155" textAnchor="middle" className="font-mono text-[7px] fill-historic-sepia uppercase">60°C Hot Water</text>
        </g>

        {/* 4. Data / Cloud Section */}
        <g id="data-flow">
          <motion.path
            d="M200 40 L200 10"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, 20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <text x="200" y="5" textAnchor="middle" className="font-mono text-[8px] fill-grid-green font-bold uppercase">Compute Jobs</text>
        </g>
      </svg>

      {/* Legend / Stats overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
        <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-solar-yellow animate-pulse" />
            <span className="font-mono text-[10px] text-brand-black">Solar Power: 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-compute-blue" />
            <span className="font-mono text-[10px] text-brand-black">Efficiency: 99%</span>
          </div>
        </div>
        
        <div className="text-right">
          <span className="font-accent text-lg text-thermal-orange rotate-[-5deg] block">Digital Hearth v1.0</span>
        </div>
      </div>
    </div>
  )
}
