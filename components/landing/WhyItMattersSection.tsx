import { ButtonLink } from '@/components/ui/ButtonLink'

export function WhyItMattersSection() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-sihl-red uppercase tracking-widest">
            Warum das wichtig ist
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Ja und? Was bringt das?
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
            Gute Frage. Hier sind zwei verdammt gute Gründe.
          </p>
        </div>

        {/* Two Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Reason 1: Save Knowledge */}
          <div className="bg-white rounded-2xl p-8 shadow-historic">
            <div className="text-5xl mb-6">🔥</div>
            <h3 className="font-display text-2xl font-bold text-brand-black mb-4">
              Wissen retten, bevor es verloren geht
            </h3>
            <div className="space-y-4 font-mono text-sm text-historic-sepia">
              <p>
                <strong className="text-brand-black">Archive sind gefährdet.</strong> Keller überfluten. Firmen fusionieren. Dokumente verschwinden.
              </p>
              <p>
                In diesen Archiven stecken <span className="text-sihl-red">100 Jahre Schweizer Ingenieurskunst</span>:
                Wie man mit weniger Ressourcen mehr produziert. Wie man Teams ohne digitale Tools organisiert.
                Wie man Probleme löst, die heute niemand mehr kennt.
              </p>
              <p>
                <strong className="text-brand-black">Dieses Wissen verschwindet nicht, weil es unwichtig ist.</strong> Es verschwindet,
                weil niemand die Zeit hat, es zu digitalisieren.
              </p>
              <p className="text-sihl-red">
                Bis jetzt.
              </p>
            </div>
          </div>

          {/* Reason 2: Structured Data for AI */}
          <div className="bg-brand-black rounded-2xl p-8 shadow-historic">
            <div className="text-5xl mb-6">🤖</div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              KI braucht strukturierte Daten
            </h3>
            <div className="space-y-4 font-mono text-sm text-gray-300">
              <p>
                <strong className="text-insight-cyan">Unstrukturierte Dokumente sind nutzlos für ML-Modelle.</strong> Ein Foto eines Lohnbuchs kann kein Algorithmus lesen. Ein verblasstes Geschäftsbrief trainiert kein LLM.
              </p>
              <p>
                Erst wenn aus <span className="text-historic-cream">Papier strukturierte Daten</span> werden,
                kann KI Muster erkennen: Wie haben sich Löhne entwickelt? Welche Berufe verschwanden?
                Welche Geschäftsmodelle funktionierten?
              </p>
              <p>
                <strong className="text-insight-cyan">Das ist keine Spielerei.</strong> Das sind echte historische Daten,
                die neue Antworten auf alte Fragen liefern können.
              </p>
              <p className="text-fund-green">
                Und du kannst damit arbeiten.
              </p>
            </div>
          </div>
        </div>

        {/* The Combination */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-sihl-red to-industrial-gold rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Wir kombinieren beides
            </h3>
            <p className="font-mono text-sm sm:text-base text-white/90 mb-6 max-w-2xl mx-auto">
              sihlhack digitalisiert gefährdete Archive <strong>und</strong> verwandelt sie in strukturierte Datasets.
              Historische Relevanz trifft auf technische Verwertbarkeit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-white font-mono text-sm">
                <span className="text-2xl">📚</span>
                <span>Kulturerbe bewahren</span>
              </div>
              <span className="text-white/50 hidden sm:inline">+</span>
              <div className="flex items-center gap-2 text-white font-mono text-sm">
                <span className="text-2xl">🧠</span>
                <span>Mit AI verwertbar machen</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-historic-sepia mb-6">
            Klingt gut? Dann sei dabei.
          </p>
          <ButtonLink href="/register" variant="primary" size="lg">
            Platz sichern · CHF 480
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
