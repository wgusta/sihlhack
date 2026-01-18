'use client'

import { ButtonLink } from '@/components/ui/ButtonLink'

export function WhoShouldJoinSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-wide">
            Für Leute, die lieber bauen als reden
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-4">
            Wer sollte teilnehmen?
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
            Hardware, Software, Energie: Drei Perspektiven. Ein System.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Hardware-Tüftler */}
          <div className="bg-off-white rounded-2xl p-6 border border-gray-200 hover:border-thermal-orange/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🔧</span>
              <h3 className="font-display text-xl font-bold text-thermal-orange">Hardware</h3>
            </div>
            <p className="text-sm text-historic-sepia font-mono mb-4">
              Thermodynamik ist dein Spielplatz. Du baust, was funktioniert.
            </p>
            <ul className="text-sm text-historic-sepia font-mono space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-thermal-orange">•</span>
                <span>Löten, CAD, Pumpen: dein Ding</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-thermal-orange">•</span>
                <span>Thermal-Architekturen evaluieren</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-thermal-orange">•</span>
                <span>Safety-Cases und BOMs erstellen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-thermal-orange">•</span>
                <span>RCD/GFCI, Safety Interlocks</span>
              </li>
            </ul>
          </div>
          
          {/* Software-Builder */}
          <div className="bg-off-white rounded-2xl p-6 border border-gray-200 hover:border-compute-blue/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💻</span>
              <h3 className="font-display text-xl font-bold text-compute-blue">Software</h3>
            </div>
            <p className="text-sm text-historic-sepia font-mono mb-4">
              Code, der Strom verteilt. Grid-OS wartet auf dich.
            </p>
            <ul className="text-sm text-historic-sepia font-mono space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-compute-blue">•</span>
                <span>APIs, Scheduler, Dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-compute-blue">•</span>
                <span>Deferred Compute implementieren</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-compute-blue">•</span>
                <span>Solar-Budget und Fallback-Policy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-compute-blue">•</span>
                <span>Backend-Infrastruktur für Compute</span>
              </li>
            </ul>
          </div>
          
          {/* Energie-Visionäre */}
          <div className="bg-off-white rounded-2xl p-6 border border-gray-200 hover:border-grid-green/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚡</span>
              <h3 className="font-display text-xl font-bold text-grid-green">Energie</h3>
            </div>
            <p className="text-sm text-historic-sepia font-mono mb-4">
              Lokal, dezentral, demokratisch. LEGs sind für dich Zukunft.
            </p>
            <ul className="text-sm text-historic-sepia font-mono space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-grid-green">•</span>
                <span>Solar-APIs, Swissgrid-Integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-grid-green">•</span>
                <span><a href="/leg" className="text-sihl-red hover:underline">LEG</a>-Spezialist: StromVG, EnG</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-grid-green">•</span>
                <span>Sensor-Integration, Data Pipelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-grid-green">•</span>
                <span>Resilienz-Logik für Grid-Ausfälle</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="font-mono text-sm text-historic-sepia mb-6">
            Du passt nicht in eine Kategorie? Perfekt. Generalisten sind willkommen.
          </p>
          <ButtonLink
            href="/register"
            variant="primary"
            size="lg"
            className="bg-thermal-orange hover:bg-thermal-orange/90"
          >
            Jetzt anmelden
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
