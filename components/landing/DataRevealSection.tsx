'use client'

import { cn } from '@/lib/utils'

// The tech stack pillars we're building
const techPillars = [
  {
    id: 'hardware',
    label: 'Hardware',
    icon: '🔧',
    color: 'thermal-orange',
    description: 'Immersionsgekühlte Server-Module',
    features: [
      'Dielektrisches Öl-Kühlung',
      'Wärmetauscher-Integration',
      'Modulares Rack-Design',
      'Geräuschlose Operation (<30dB)',
    ],
  },
  {
    id: 'software',
    label: 'Grid-OS',
    icon: '💻',
    color: 'compute-blue',
    description: 'Intelligente Laststeuerung',
    features: [
      'Solar-Wechselrichter API',
      'Lastplanung',
      'Thermisches Management',
      'Swissgrid-Integration',
    ],
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    color: 'grid-green',
    description: 'Echtzeit-Monitoring',
    features: [
      'Energiefluss-Visualisierung',
      'Thermische Ausgangs-Metriken',
      'Compute-Job-Warteschlange',
      'Einnahmen-Tracking',
    ],
  },
]

export function DataRevealSection() {
  return (
    <section id="how-it-works" className="py-24 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
            Was wir bauen
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            Der Sihlicon Stack
          </h2>
          <p className="mt-4 text-lg text-gray-400 font-mono max-w-2xl mx-auto">
            Open Source Hardware und Software für die dezentrale Energiezukunft.
          </p>
        </div>

        {/* The Problem → Solution Flow */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Problem */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="font-mono text-red-400 font-semibold mb-2">Heute</h3>
              <p className="text-sm text-gray-400 font-mono">
                Server verschwenden Wärme. Häuser brauchen Gas. Solar wird verschenkt.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <div className="text-4xl text-thermal-orange">→</div>
            </div>
            <div className="md:hidden flex justify-center py-2">
              <div className="text-4xl text-thermal-orange">↓</div>
            </div>

            {/* Solution */}
            <div className="bg-grid-green/20 border border-grid-green/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-mono text-grid-green font-semibold mb-2">Sihlicon</h3>
              <p className="text-sm text-gray-400 font-mono">
                Server heizen Häuser. Solar powert Compute. Wärme ist das Produkt.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {techPillars.map((pillar) => (
            <div
              key={pillar.id}
              className={cn(
                "rounded-xl border p-6 transition-all duration-300",
                "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
              )}
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className={cn(
                "font-mono text-lg font-semibold mb-2",
                pillar.color === 'thermal-orange' && "text-thermal-orange",
                pillar.color === 'compute-blue' && "text-compute-blue",
                pillar.color === 'grid-green' && "text-grid-green",
              )}>
                {pillar.label}
              </h3>
              <p className="text-sm text-gray-400 font-mono mb-4">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <span className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      pillar.color === 'thermal-orange' && "bg-thermal-orange",
                      pillar.color === 'compute-blue' && "bg-compute-blue",
                      pillar.color === 'grid-green' && "bg-grid-green",
                    )} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* The Physics */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-thermal-orange/20 to-compute-blue/20 rounded-2xl p-8 border border-white/10">
            <h3 className="font-display text-2xl font-bold text-white text-center mb-6">
              Die Physik dahinter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-mono text-3xl font-bold text-solar-yellow">100%</div>
                <div className="font-mono text-xs text-gray-400 mt-1">der Elektrizität wird zu Wärme</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-thermal-orange">45°C</div>
                <div className="font-mono text-xs text-gray-400 mt-1">Warmwasser (Demo-Scale)</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-compute-blue">99%</div>
                <div className="font-mono text-xs text-gray-400 mt-1">Wärme-Rückgewinnung möglich</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-grid-green">0 dB</div>
                <div className="font-mono text-xs text-gray-400 mt-1">Keine Lüfter, kein Lärm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineer Hook */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔬',
                title: 'Echte Hardware',
                description: 'Server, GPUs, Immersionstanks, Wärmetauscher. Alles zum Anfassen und Zusammenbauen.',
              },
              {
                icon: '📖',
                title: 'Open Source',
                description: 'Alles unter Apache 2.0. Hardware-Schematics, Software, Dokumentation. Replizierbar.',
              },
              {
                icon: '🚀',
                title: 'Echter Deploy',
                description: 'Der beste Prototyp wird in einer echten LEG installiert. Nicht nur ein Demo.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-300",
                  "bg-white/5 border-white/10 hover:border-thermal-orange/50 hover:bg-white/10"
                )}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-mono text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Engineer CTA */}
          <div className="mt-12 text-center">
            <p className="font-mono text-lg text-thermal-orange mb-2">
              Du willst die Schweizer Energieinfrastruktur hacken?
            </p>
            <p className="font-mono text-sm text-gray-500">
              Hardware-Hacker, Software-Devs, Thermodynamik-Nerds: Wir brauchen euch alle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
