'use client'

import Image from 'next/image'

const challengeCards = [
  {
    title: 'Sensor Integration',
    colorClass: 'text-solar-yellow',
    borderClass: 'border-solar-yellow/20 hover:border-solar-yellow/40',
    icon: '⏰',
    imageSrc: '/images/pkg_sensor_integration_cover.webp',
    description: 'Daten rein, Qualität hoch, Streaming stabil.',
    bullets: [
      '• Sensor-Pipeline + Validierung',
      '• Echtzeit-Monitoring',
      '• Saubere Daten fürs Grid-OS',
    ],
  },
  {
    title: 'Multi-Node Safety Coordination',
    colorClass: 'text-thermal-orange',
    borderClass: 'border-thermal-orange/20 hover:border-thermal-orange/40',
    icon: '🔥',
    imageSrc: '/images/pkg_multi_node_safety_cover.webp',
    description: 'Safety hat immer Vorrang. Koordiniert über mehrere Nodes.',
    bullets: [
      '• Anomalien erkennen',
      '• Fail-closed Freigaben',
      '• E-Stop Logik',
    ],
  },
  {
    title: 'Grid-OS Logic',
    colorClass: 'text-compute-blue',
    borderClass: 'border-compute-blue/20 hover:border-compute-blue/40',
    icon: '🔌',
    imageSrc: '/images/pkg_grid_os_logic_cover.webp',
    description: 'Compute, Batterie, Wärme: du baust die Steuerlogik.',
    bullets: [
      '• Laststeuerung + Scheduler',
      '• Netzsignale berücksichtigen',
      '• Policies als Code',
    ],
  },
] as const

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
          {challengeCards.map((challengeCard) => (
            <div
              key={challengeCard.title}
              className={`rounded-xl bg-white/5 border transition-all ${challengeCard.borderClass}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
                <Image
                  src={challengeCard.imageSrc}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-brand-black/45" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{challengeCard.icon}</span>
                  <h3 className={`font-mono font-semibold text-lg ${challengeCard.colorClass}`}>{challengeCard.title}</h3>
                </div>
                <p className="text-sm text-gray-300 font-mono mb-3">
                  {challengeCard.description}
                </p>
                <ul className="text-xs text-gray-400 font-mono space-y-1 mb-4">
                  {challengeCard.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
