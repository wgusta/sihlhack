import { ButtonLink } from '@/components/ui/ButtonLink'

export function PrivacySection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-black to-oil-dark rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Icon and headline */}
            <div>
              <div className="text-5xl mb-4">🔓</div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                100% Open Source
              </h3>
              <p className="font-mono text-sm text-gray-300">
                Alles was wir bauen, gehört der Community.
                Apache 2.0 Lizenz. Keine Vendor Lock-ins. Keine versteckten APIs.
              </p>
            </div>

            {/* Right: Key principles */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-grid-green/20 rounded-full flex items-center justify-center">
                  <span className="text-grid-green font-mono text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-semibold text-white">
                    Replizierbar
                  </h4>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Jede LEG kann das System nachbauen, ohne uns zu fragen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-grid-green/20 rounded-full flex items-center justify-center">
                  <span className="text-grid-green font-mono text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-semibold text-white">
                    Schweizer Daten bleiben in der Schweiz
                  </h4>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Lokale Verarbeitung, keine Cloud-Abhängigkeit
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-grid-green/20 rounded-full flex items-center justify-center">
                  <span className="text-grid-green font-mono text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-semibold text-white">
                    Community-owned
                  </h4>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Roadmap wird von Nutzern bestimmt, nicht von Investoren
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <ButtonLink
                  href="https://github.com/sihlicon"
                  variant="ghost"
                  size="sm"
                  className="text-white border-white/30 hover:bg-white/10 text-xs"
                >
                  GitHub Repository →
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
