import { ButtonLink } from '@/components/ui/ButtonLink'
import { cn } from '@/lib/utils'
import {
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  GiftIcon,
  TrashIcon,
  WrenchIcon,
  HomeIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid'

export function DynamicFundingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
            Anders als andere
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Kein Bullshit-Hackathon
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-3xl mx-auto">
            Keine Corporate-Challenges. Kein "Gewinne ein iPad". Wir bauen echte Infrastruktur,
            die nach dem Event weiterläuft.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Traditional */}
          <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-mono text-xs uppercase">
                Typische Hackathons
              </span>
            </div>
            <ul className="space-y-4">
              {[
                { icon: BuildingOfficeIcon, text: 'Sponsor will Recruiting betreiben', color: 'text-historic-sepia opacity-50' },
                { icon: ClipboardDocumentListIcon, text: '"Löse unser Problem gratis"', color: 'text-historic-sepia opacity-50' },
                { icon: GiftIcon, text: 'Preisgeld kauft kein Deployment', color: 'text-historic-sepia opacity-50' },
                { icon: TrashIcon, text: 'Projekte sterben nach dem Demo', color: 'text-historic-sepia opacity-50' },
              ].map((item, i) => {
                const IconComponent = item.icon
                return (
                  <li key={i} className="flex items-center gap-3 text-historic-sepia font-mono text-sm">
                    <IconComponent className={cn('w-5 h-5', item.color)} aria-hidden="true" />
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* sihlhack */}
          <div className="bg-brand-black rounded-2xl p-6 border-2 border-grid-green">
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 bg-grid-green/20 text-grid-green rounded-full font-mono text-xs uppercase">
                sihlhack Modell
              </span>
            </div>
            <ul className="space-y-4">
              {[
                { icon: WrenchIcon, text: 'Echte Hardware zum Anfassen', color: 'text-thermal-orange' },
                { icon: HomeIcon, text: <>Echter Deployment-Standort (<a href="/leg" className="text-sihl-red hover:underline">LEG</a>)</>, color: 'text-grid-green' },
                { icon: BookOpenIcon, text: '100% Open Source, du behältst alles', color: 'text-grid-green' },
                { icon: RocketLaunchIcon, text: 'Prototyp läuft nach dem Hackathon weiter', color: 'text-compute-blue' },
              ].map((item, i) => {
                const IconComponent = item.icon
                return (
                  <li key={i} className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                    <IconComponent className={cn('w-5 h-5', item.color)} aria-hidden="true" />
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-off-white rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-brand-black text-center mb-8">
              Das Hackathon-Wochenende
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Day 1 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-thermal-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-white font-bold">Fr</span>
                </div>
                <h4 className="font-mono font-semibold text-brand-black mb-2">Freitag Abend</h4>
                <p className="font-mono text-sm text-historic-sepia">
                  Kickoff, Team-Bildung, Hardware-Intro, Architektur-Session
                </p>
              </div>

              {/* Day 2 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-compute-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-white font-bold">Sa</span>
                </div>
                <h4 className="font-mono font-semibold text-brand-black mb-2">Samstag</h4>
                <p className="font-mono text-sm text-historic-sepia">
                  Build Day: Hardware-Assembly, Software-Sprint, Integration
                </p>
              </div>

              {/* Day 3 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-grid-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-white font-bold">So</span>
                </div>
                <h4 className="font-mono font-semibold text-brand-black mb-2">Sonntag</h4>
                <p className="font-mono text-sm text-historic-sepia">
                  Testing, Demo, Deployment-Vorbereitung, Dokumentation
                </p>
              </div>
            </div>

            {/* After */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-grid-green/10 rounded-full">
                <CheckCircleIcon className="w-5 h-5 text-grid-green" aria-hidden="true" />
                <span className="font-mono text-sm text-historic-sepia">
                  <strong>Danach:</strong> Der beste Prototyp wird in einer echten <a href="/leg" className="text-sihl-red hover:underline">LEG</a> deployed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <ButtonLink href="/register" variant="primary" size="lg" className="bg-thermal-orange hover:bg-thermal-orange/90">
            Platz sichern
          </ButtonLink>
          <p className="mt-4 font-mono text-sm text-historic-sepia">
            Kostenlos. Keine Verpflichtungen. Alle Skill-Levels willkommen.
          </p>
        </div>
      </div>
    </section>
  )
}
