'use client'

export function ChallengesPreview() {
  return (
    <section className="py-16 bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-wide">
            Drei Pakete. Klare Outputs. Du baust eines davon.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sensor Integration */}
          <div className="p-6 rounded-xl bg-white/5 border border-solar-yellow/20 hover:border-solar-yellow/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⏰</span>
              <h3 className="font-mono text-solar-yellow font-semibold text-lg">Sensor Integration</h3>
            </div>
            <p className="text-sm text-gray-300 font-mono mb-3">
              Daten rein, Qualität hoch, Streaming stabil.
            </p>
            <ul className="text-xs text-gray-400 font-mono space-y-1 mb-4">
              <li>• Sensor-Pipeline + Validierung</li>
              <li>• Echtzeit-Monitoring</li>
              <li>• Saubere Daten fürs Grid-OS</li>
            </ul>
          </div>
          
          {/* Multi-Node Safety Coordination */}
          <div className="p-6 rounded-xl bg-white/5 border border-thermal-orange/20 hover:border-thermal-orange/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔥</span>
              <h3 className="font-mono text-thermal-orange font-semibold text-lg">Multi-Node Safety Coordination</h3>
            </div>
            <p className="text-sm text-gray-300 font-mono mb-3">
              Safety hat immer Vorrang. Koordiniert über mehrere Nodes.
            </p>
            <ul className="text-xs text-gray-400 font-mono space-y-1 mb-4">
              <li>• Anomalien erkennen</li>
              <li>• Fail-closed Freigaben</li>
              <li>• E-Stop Logik</li>
            </ul>
          </div>
          
          {/* Grid-OS Logic */}
          <div className="p-6 rounded-xl bg-white/5 border border-compute-blue/20 hover:border-compute-blue/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔌</span>
              <h3 className="font-mono text-compute-blue font-semibold text-lg">Grid-OS Logic</h3>
            </div>
            <p className="text-sm text-gray-300 font-mono mb-3">
              Compute, Batterie, Wärme: du baust die Steuerlogik.
            </p>
            <ul className="text-xs text-gray-400 font-mono space-y-1 mb-4">
              <li>• Laststeuerung + Scheduler</li>
              <li>• Netzsignale berücksichtigen</li>
              <li>• Policies als Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
