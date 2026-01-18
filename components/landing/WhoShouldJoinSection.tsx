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
            Vier Perspektiven. Ein System. Finde deine Rolle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Maker: Hardware + Elektro */}
          <div className="bg-off-white rounded-2xl p-6 border border-gray-200 hover:border-thermal-orange/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🔧</span>
              <h3 className="font-display text-xl font-bold text-thermal-orange">Maker</h3>
            </div>
            <p className="text-sm text-historic-sepia font-mono mb-4">
              Du baust gerne Dinge mit deinen Händen.
            </p>
            <ul className="text-sm text-historic-sepia font-mono space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-thermal-orange">→</span>
                <span>Kühlsystem zusammenbauen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-thermal-orange">→</span>
                <span>Sensoren verkabeln</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-thermal-orange">→</span>
                <span>Bauanleitung schreiben</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 font-mono mt-4 pt-3 border-t border-gray-200">
              Ideal: Bastler, Handwerker, Ingenieurinnen und Ingenieure
            </p>
          </div>

          {/* Coder: Software + Grid-OS */}
          <div className="bg-off-white rounded-2xl p-6 border border-gray-200 hover:border-compute-blue/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💻</span>
              <h3 className="font-display text-xl font-bold text-compute-blue">Coder</h3>
            </div>
            <p className="text-sm text-historic-sepia font-mono mb-4">
              Du schreibst Code, der echte Probleme löst.
            </p>
            <ul className="text-sm text-historic-sepia font-mono space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-compute-blue">→</span>
                <span>Steuerung programmieren</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-compute-blue">→</span>
                <span>Dashboard bauen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-compute-blue">→</span>
                <span>Sensordaten verarbeiten</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 font-mono mt-4 pt-3 border-t border-gray-200">
              Ideal: Entwicklerinnen und Entwickler, Data Scientists, Hobbyisten
            </p>
          </div>

          {/* Connector: Energie + LEG */}
          <div className="bg-off-white rounded-2xl p-6 border border-gray-200 hover:border-grid-green/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚡</span>
              <h3 className="font-display text-xl font-bold text-grid-green">Connector</h3>
            </div>
            <p className="text-sm text-historic-sepia font-mono mb-4">
              Du verbindest Menschen, Systeme und Regeln.
            </p>
            <ul className="text-sm text-historic-sepia font-mono space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-grid-green">→</span>
                <span><a href="/leg" className="hover:text-sihl-red">Energiegemeinschaft</a> gründen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-grid-green">→</span>
                <span>Verträge aufsetzen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-grid-green">→</span>
                <span>Solardaten beschaffen</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 font-mono mt-4 pt-3 border-t border-gray-200">
              Ideal: Juristinnen und Juristen, Energieberaterinnen und Energieberater, PV-Besitzerinnen und PV-Besitzer
            </p>
          </div>

          {/* Gestalter: Design + PM + Generalist */}
          <div className="bg-off-white rounded-2xl p-6 border border-gray-200 hover:border-historic-sepia/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✏️</span>
              <h3 className="font-display text-xl font-bold text-historic-sepia">Gestalter</h3>
            </div>
            <p className="text-sm text-historic-sepia font-mono mb-4">
              Du machst Komplexes verständlich.
            </p>
            <ul className="text-sm text-historic-sepia font-mono space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-historic-sepia">→</span>
                <span>Dokumentation schreiben</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-historic-sepia">→</span>
                <span>Interfaces designen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-historic-sepia">→</span>
                <span>Team koordinieren</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 font-mono mt-4 pt-3 border-t border-gray-200">
              Ideal: Designer, PMs, Texter, Generalisten
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="font-mono text-sm text-historic-sepia mb-6">
            Du passt in mehrere Kategorien? Noch besser. Wir matchen Teams nach Skills.
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
