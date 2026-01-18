import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'

const timelineEvents = [
  {
    date: 'April/Mai 2026',
    title: 'Snackathons: Sihl-Sim API',
    description: 'Pilot-Events: Baue den Sihl-Sim (Digital Twin API). Coding, Pizza, "Game Design" für Energie-Systeme. Gratis, 10-20 Teilnehmende.',
    status: 'upcoming' as const,
    icon: '🍿',
  },
  {
    date: 'Jetzt',
    title: 'Anmeldung offen',
    description: 'Sichere dir deinen Platz (CHF 150). Wähle deine Rolle und Paket-Präferenz.',
    status: 'current' as const,
    icon: '📝',
  },
  {
    date: '2-4 Wochen vor Event',
    title: 'Pre-Challenge: Sihl-Sim Zugang',
    description: 'Teams erhalten Zugang zum Sihl-Sim (Digital Twin) für lokale Entwicklung. Simulation-to-Reality Workflow wird erklärt.',
    status: 'upcoming' as const,
    icon: '💻',
  },
  {
    date: 'Wird bekannt gegeben',
    title: 'Anmeldeschluss & Team-Findung',
    description: 'Letzte Chance zur Anmeldung. Danach werden Teams gebildet (5 Personen pro Team).',
    status: 'upcoming' as const,
    icon: '👥',
  },
  {
    date: 'Freitag Abend',
    title: 'Tag 1: Kickoff & Simulator-Zugang',
    description: 'Check-in, Reference Hardware Einführung, Team-Aufbau. Hardware wird bereitgestellt; ihr programmiert die Grid-OS Logik.',
    status: 'upcoming' as const,
    icon: '🚀',
  },
  {
    date: 'Samstag',
    title: 'Tag 2: Code & Test',
    description: 'Voller Tag für eure Pakete. Teams entwickeln gegen Sihl-Sim, buchen Safety Avatar Slots, und iterieren.',
    status: 'upcoming' as const,
    icon: '⚡',
  },
  {
    date: 'Sonntag Vormittag',
    title: 'Tag 3: Deployment auf Reference Hardware',
    description: 'Finalisten deployen ihren Code auf supervised Reference Hardware (The Beast). Integration und Validierung.',
    status: 'upcoming' as const,
    icon: '☀️',
  },
  {
    date: 'Sonntag Nachmittag',
    title: 'Demo-Day & Preisverleihung',
    description: 'Teams präsentieren ihre Lösungen. Jury bewertet nach Paket-Kriterien. Preisgeld wird verteilt.',
    status: 'upcoming' as const,
    icon: '🏆',
  },
]

export function EventTimeline() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
            3-Tage Wettbewerb
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-2">
            Der Fahrplan
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
            Von der Pre-Challenge bis zur Preisverleihung: so läuft sihlhack ab.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-thermal-orange">3</div>
            <div className="font-mono text-xs text-historic-sepia">Tage</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-compute-blue">20</div>
            <div className="font-mono text-xs text-historic-sepia">Teams</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-grid-green">100</div>
            <div className="font-mono text-xs text-historic-sepia">Teilnehmende</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-historic-sepia/20" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={cn(
                  'relative flex flex-col md:flex-row gap-8',
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                )}
              >
                {/* Content */}
                <div className={cn(
                  'flex-1',
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                )}>
                  <span className={cn(
                    'inline-block px-3 py-1 rounded-full text-xs font-mono mb-2',
                    event.status === 'current'
                      ? 'bg-sihl-red text-white'
                      : 'bg-historic-cream text-historic-sepia'
                  )}>
                    {event.date}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-brand-black flex items-center gap-2">
                    <Icon emoji={event.icon} size="lg" color="text-thermal-orange" />
                    {event.title}
                  </h3>
                  <p className="mt-2 text-historic-sepia font-mono text-sm">
                    {event.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className={cn(
                    'w-4 h-4 rounded-full border-4',
                    event.status === 'current'
                      ? 'bg-sihl-red border-sihl-red/30'
                      : 'bg-white border-historic-sepia/30'
                  )} />
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Event Format Note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-brand-black text-white px-6 py-4 rounded-xl">
            <p className="font-mono text-sm">
              <span className="text-thermal-orange font-bold">Freitag bis Sonntag</span> · 
              Ort wird bekannt gegeben · 
              <span className="text-grid-green font-bold">September 2026</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
