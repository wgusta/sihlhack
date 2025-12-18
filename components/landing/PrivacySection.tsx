import { ButtonLink } from '@/components/ui/ButtonLink'

export function PrivacySection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-black to-historic-sepia rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Icon and headline */}
            <div>
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Datenschutz hat Priorität
              </h3>
              <p className="font-mono text-sm text-gray-300">
                Historische Dokumente verdienen respektvollen Umgang.
                Wir setzen auf lokale KI, offline Verarbeitung und klare Regeln.
              </p>
            </div>

            {/* Right: Key principles */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-fund-green/20 rounded-full flex items-center justify-center">
                  <span className="text-fund-green font-mono text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-semibold text-white">
                    Local-First AI
                  </h4>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Primär lokale LLMs und Offline-Verarbeitung
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-fund-green/20 rounded-full flex items-center justify-center">
                  <span className="text-fund-green font-mono text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-semibold text-white">
                    Zustimmung erforderlich
                  </h4>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Cloud-KI nur mit Einwilligung der Datenbereitsteller
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-fund-green/20 rounded-full flex items-center justify-center">
                  <span className="text-fund-green font-mono text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-semibold text-white">
                    Transparente Verarbeitung
                  </h4>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Welche Daten, welche KI, wann und warum
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <ButtonLink
                  href="/about#datenschutz"
                  variant="ghost"
                  size="sm"
                  className="text-white border-white/30 hover:bg-white/10 text-xs"
                >
                  Vollständige Richtlinien →
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
