'use client'

import React from 'react'

export function PrototypeVisual() {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* -- Background Elements -- */}
        <rect width="400" height="300" rx="12" fill="#1A1A1A" />
        <path d="M0 250H400" stroke="#333" strokeWidth="1" />
        
        {/* -- Solar Module -- */}
        <g transform="translate(50, 30)">
          <rect width="80" height="50" rx="2" fill="#333" stroke="#FBBF24" strokeWidth="2" transform="skewX(-10)" />
          <path d="M10 0V50 M30 0V50 M50 0V50 M70 0V50" stroke="#FBBF24" strokeWidth="0.5" transform="skewX(-10)" />
          <path d="M0 10H80 M0 25H80 M0 40H80" stroke="#FBBF24" strokeWidth="0.5" transform="skewX(-10)" />
          <text x="40" y="-10" textAnchor="middle" fill="#FBBF24" className="font-mono text-[10px] uppercase tracking-widest">Solar</text>
          
          {/* Energy flow line to tank */}
          <path d="M40 55C40 80 140 80 140 100" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash-flow_3s_linear_infinite]" />
        </g>

        {/* -- Immersion Tank (Digital Hearth) -- */}
        <g transform="translate(140, 100)">
          {/* External Tank */}
          <rect width="120" height="120" rx="4" fill="#2A2A2A" stroke="#FF6B35" strokeWidth="2" />
          
          {/* Liquid (Dielectric Oil) */}
          <rect x="5" y="30" width="110" height="85" rx="2" fill="url(#oilGradient)" opacity="0.6" />
          <defs>
            <linearGradient id="oilGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Bubbles in oil */}
          <circle cx="20" cy="90" r="1" fill="#3B82F6" opacity="0.5" className="animate-bounce" />
          <circle cx="40" cy="100" r="1.5" fill="#3B82F6" opacity="0.3" />
          <circle cx="100" cy="80" r="1" fill="#3B82F6" opacity="0.4" />

          {/* Server Unit */}
          <rect x="25" y="45" width="70" height="60" rx="2" fill="#111" stroke="#444" strokeWidth="1" />
          {/* LEDs */}
          <circle cx="35" cy="55" r="1.5" fill="#10B981" className="animate-pulse" />
          <circle cx="45" cy="55" r="1.5" fill="#10B981" />
          <circle cx="55" cy="55" r="1.5" fill="#3B82F6" className="animate-pulse" />
          
          {/* Slots */}
          <rect x="35" y="65" width="50" height="2" fill="#222" />
          <rect x="35" y="72" width="50" height="2" fill="#222" />
          <rect x="35" y="79" width="50" height="2" fill="#222" />
          
          <text x="60" y="-10" textAnchor="middle" fill="#FF6B35" className="font-mono text-[10px] uppercase tracking-widest">Digital Hearth</text>
        </g>

        {/* -- Heat Exchanger / Building -- */}
        <g transform="translate(300, 150)">
          {/* Building Outline */}
          <path d="M0 50 L25 20 L50 50 V80 H0 Z" fill="#2A2A2A" stroke="#E62F2D" strokeWidth="2" />
          <rect x="15" y="55" width="20" height="25" fill="#1A1A1A" />
          
          <text x="25" y="10" textAnchor="middle" fill="#E62F2D" className="font-mono text-[10px] uppercase tracking-widest">Heizung</text>
          
          {/* Heat flow line from tank */}
          <path d="M-40 20C-40 40 0 40 0 40" stroke="#E62F2D" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash-flow_2s_linear_infinite]" />
        </g>

        {/* -- Labels & UI Elements -- */}
        <g transform="translate(50, 270)">
          <text fill="#666" className="font-mono text-[8px]">PROTOTYP V1.0 // SIHLHACK 2026</text>
        </g>
        
        {/* -- Status indicators -- */}
        <g transform="translate(300, 40)">
          <rect width="80" height="40" rx="4" fill="#222" stroke="#333" />
          <text x="10" y="15" fill="#10B981" className="font-mono text-[8px]">SYSTEM: ONLINE</text>
          <text x="10" y="25" fill="#FBBF24" className="font-mono text-[8px]">SOLAR: 4.2 kW</text>
          <text x="10" y="35" fill="#E62F2D" className="font-mono text-[8px]">TEMP: 58°C</text>
        </g>
      </svg>
      
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center">
          <span className="w-3 h-3 rounded-full bg-solar-yellow mb-2 shadow-[0_0_8px_#FBBF24]" />
          <span className="text-[10px] font-mono text-gray-400 uppercase">Input</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-3 h-3 rounded-full bg-compute-blue mb-2 shadow-[0_0_8px_#3B82F6]" />
          <span className="text-[10px] font-mono text-gray-400 uppercase">Compute</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-3 h-3 rounded-full bg-sihl-red mb-2 shadow-[0_0_8px_#E62F2D]" />
          <span className="text-[10px] font-mono text-gray-400 uppercase">Thermal</span>
        </div>
      </div>
    </div>
  )
}
