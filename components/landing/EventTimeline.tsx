import { cn } from '@/lib/utils'

const timelineEvents = [
  {
    date: 'Jetzt',
    title: 'Anmeldung offen',
    description: 'Sichere dir deinen Platz und reiche erste Projektvorschläge ein.',
    status: 'current',
  },
  {
    date: 'In 30 Tagen',
    title: 'Anmeldeschluss',
    description: 'Letzte Chance zur Anmeldung. Danach startet die Abstimmung.',
    status: 'upcoming',
  },
  {
    date: 'In 45 Tagen',
    title: 'Rückerstattungs-Deadline',
    description: 'Falls Mindestzahl nicht erreicht: automatische Rückerstattung aller Gebühren.',
    status: 'upcoming',
  },
  {
    date: 'In 60 Tagen',
    title: 'Hackathon-Wochenende',
    description: '48 Stunden intensives Arbeiten an euren Projekten mit historischen Daten.',
    status: 'upcoming',
  },
  {
    date: 'Tag 3',
    title: 'Präsentation & Preisverleihung',
    description: 'Präsentiert eure Ergebnisse. Die besten Projekte teilen sich das Preisgeld.',
    status: 'upcoming',
  },
]

export function EventTimeline() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black">
            Der Fahrplan
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
            Von der Anmeldung bis zur Preisverleihung: so läuft sihlhack ab.
          </p>
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
                      ? 'bg-deep-pink text-white'
                      : 'bg-historic-cream text-historic-sepia'
                  )}>
                    {event.date}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-brand-black">
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
                      ? 'bg-deep-pink border-deep-pink/30'
                      : 'bg-white border-historic-sepia/30'
                  )} />
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
