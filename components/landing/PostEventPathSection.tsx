import { ButtonLink } from '@/components/ui/ButtonLink'

export function PostEventPathSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-black via-brand-black to-sihl-red/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
            Nach dem Event
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            Der Weg nach vorne
          </h2>
          <p className="mt-4 text-lg text-gray-300 font-mono max-w-3xl mx-auto">
            sihlhack ist nur der Anfang. Hier sind die Wege, wie du weiterhin Teil der Bewegung sein kannst.
          </p>
        </div>

        {/* Four Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Path 1: Follow-up Hackathon */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🚀</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Follow-up Hackathon: 1:1 Prototypen
                </h3>
                <p className="font-mono text-sm text-gray-300 mb-4 leading-relaxed">
                  Der nächste Schritt: Bau von vollskalierten Prototypen für echte LEG-Deployments. 
                  Teams arbeiten an konkreten Standorten mit realen Anforderungen. 
                  Hardware, die tatsächlich in Produktion geht.
                </p>
                <ul className="space-y-2 font-mono text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-thermal-orange mt-1">→</span>
                    <span>Vollskalierte Hardware (kein Demo-Scale)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-thermal-orange mt-1">→</span>
                    <span>Echte LEG-Standorte als Partner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-thermal-orange mt-1">→</span>
                    <span>Produktionsreife Lösungen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Path 2: Association & Governance */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">⚖️</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Association & Open Source Governance
                </h3>
                <p className="font-mono text-sm text-gray-300 mb-4 leading-relaxed">
                  Werde Teil des sihlhack Vereins. Gestalte die Open Source Governance mit: 
                  Roadmap-Entscheidungen, Code-Reviews, Community-Building, Lizenz-Compliance. 
                  Demokratische Strukturen für nachhaltige Entwicklung.
                </p>
                <ul className="space-y-2 font-mono text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-compute-blue mt-1">→</span>
                    <span>Mitglied im sihlhack Verein</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-compute-blue mt-1">→</span>
                    <span>Roadmap & Technische Entscheidungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-compute-blue mt-1">→</span>
                    <span>Community-Management & Events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Path 3: LEG DIY */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🏠</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  LEG DIY: Selbstbau-Anleitung
                </h3>
                <p className="font-mono text-sm text-gray-300 mb-4 leading-relaxed">
                  Komplette Bauanleitungen, BOM-Listen und Schritt-für-Schritt Guides für LEGs, 
                  die ihren eigenen Sihlicon Hub bauen wollen. Community-Support, Workshops, 
                  und dokumentierte Erfahrungen von anderen LEGs.
                </p>
                <ul className="space-y-2 font-mono text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green mt-1">→</span>
                    <span>Vollständige Bauanleitungen (Open Source)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green mt-1">→</span>
                    <span>Community-Workshops & Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green mt-1">→</span>
                    <span>LEG-zu-LEG Wissenstransfer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Path 4: Company Service */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🏢</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Unternehmen: Service & Installation
                </h3>
                <p className="font-mono text-sm text-gray-300 mb-4 leading-relaxed">
                  Unternehmen können Sihlicon Hubs für LEGs bauen und installieren, 
                  unter strikten Open Source Richtlinien. Kein Vendor Lock-in, 
                  vollständige Transparenz, Community-zertifizierte Partner.
                </p>
                <ul className="space-y-2 font-mono text-xs text-gray-400 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-solar-yellow mt-1">→</span>
                    <span>Community-zertifizierte Partner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-solar-yellow mt-1">→</span>
                    <span>Strikte Open Source Compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-solar-yellow mt-1">→</span>
                    <span>Kein Vendor Lock-in, volle Transparenz</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-sihl-red/20 border border-sihl-red/30 rounded-lg">
                  <p className="font-mono text-xs text-sihl-red">
                    ⚠️ Richtlinien: Alle Modifikationen müssen Open Source bleiben. 
                    Keine proprietären Erweiterungen. Community-Review erforderlich.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-gray-400 mb-6">
            Interessiert an einem dieser Wege? Melde dich für Updates an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink
              href="/register"
              variant="secondary"
              size="lg"
              className="bg-thermal-orange hover:bg-thermal-orange/90"
            >
              Am ersten Event teilnehmen
            </ButtonLink>
            <ButtonLink
              href="mailto:hello@sihlhack.ch?subject=Post-Event%20Path"
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Über Wege informieren
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
