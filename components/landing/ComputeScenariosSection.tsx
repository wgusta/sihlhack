import { Icon } from '@/components/ui/Icon'
import { Accordion } from '@/components/ui/Accordion'

export function ComputeScenariosSection() {
  return (
    <section id="compute-scenarios" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-compute-blue uppercase tracking-widest">
            Was läuft auf dem Hub?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Compute-Szenarien
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
            Der Sihlicon Hub läuft intelligente Workloads, die mit Solar-Energie flexibel sind.
            Wärme ist das Hauptprodukt, Compute ist der nützliche Nebeneffekt.
          </p>
        </div>

        {/* Primary Workloads */}
        <div className="mb-12">
          <h3 className="font-display text-2xl font-bold text-brand-black mb-6 text-center">
            Primäre Anwendungen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* OCR */}
            <div className="bg-off-white rounded-xl p-6 border-2 border-thermal-orange/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon emoji="📄" size="lg" color="text-thermal-orange" />
                <h4 className="font-display text-xl font-bold text-brand-black">
                  Dokument-Digitalisierung
                </h4>
              </div>
              <p className="font-mono text-sm text-historic-sepia mb-4">
                Historische Archive aus dem Sihltal werden digitalisiert: 
                OCR für alte Dokumente, Handschriften-Erkennung, Metadaten-Extraktion.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-compute-blue">
                <span>⚡</span>
                <span>GPU-intensiv · Hohe Wärmeausbeute</span>
              </div>
            </div>

            {/* AI Inference */}
            <div className="bg-off-white rounded-xl p-6 border-2 border-compute-blue/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon emoji="🤖" size="lg" color="text-compute-blue" />
                <h4 className="font-display text-xl font-bold text-brand-black">
                  KI-Inferenz (Lokale LLMs)
                </h4>
              </div>
              <p className="font-mono text-sm text-historic-sepia mb-4">
                Schweizerdeutsche Dokumente übersetzen, Named Entity Recognition, 
                Textklassifikation. Alle Daten bleiben in der Schweiz.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-compute-blue">
                <span>🔒</span>
                <span>Daten-Souveränität · Keine Cloud-Abhängigkeit</span>
              </div>
            </div>

            {/* Time-Series */}
            <div className="bg-off-white rounded-xl p-6 border-2 border-grid-green/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon emoji="📈" size="lg" color="text-grid-green" />
                <h4 className="font-display text-xl font-bold text-brand-black">
                  Zeitreihen-Vorhersage
                </h4>
              </div>
              <p className="font-mono text-sm text-historic-sepia mb-4">
                Solar-Produktion vorhersagen, Wärmebedarf prognostizieren, 
                Grid-Last antizipieren. Kritisch für Grid-OS Scheduling.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-grid-green">
                <span>⚙️</span>
                <span>Grid-OS Integration · Energie-optimiert</span>
              </div>
            </div>

            {/* Video/Image */}
            <div className="bg-off-white rounded-xl p-6 border-2 border-solar-yellow/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon emoji="🎬" size="lg" color="text-solar-yellow" />
                <h4 className="font-display text-xl font-bold text-brand-black">
                  Video/Bild-Verarbeitung
                </h4>
              </div>
              <p className="font-mono text-sm text-historic-sepia mb-4">
                Batch-Transcoding, Thumbnail-Generierung, Bildverbesserung für Archive. 
                GPU-intensiv, hohe Wärmeausbeute.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-solar-yellow">
                <span>🔥</span>
                <span>Sehr hohe Wärmeausbeute</span>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-compute-blue/5 to-thermal-orange/5 rounded-2xl p-8 mb-12">
          <h3 className="font-display text-2xl font-bold text-brand-black mb-6 text-center">
            Wie funktioniert es?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">☀️</div>
              <h4 className="font-mono font-bold text-brand-black mb-2">1. Solar-Überschuss</h4>
              <p className="font-mono text-xs text-historic-sepia">
                Grid-OS erkennt verfügbare Energie
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-mono font-bold text-brand-black mb-2">2. Compute startet</h4>
              <p className="font-mono text-xs text-historic-sepia">
                Jobs werden basierend auf Priorität und Energie-Budget geplant
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔥</div>
              <h4 className="font-mono font-bold text-brand-black mb-2">3. Wärme wird genutzt</h4>
              <p className="font-mono text-xs text-historic-sepia">
                Abwärme heizt Gebäude oder wird ins Fernwärmenetz eingespeist
              </p>
            </div>
          </div>
        </div>

        {/* Grid Integration */}
        <div className="space-y-4">
          <Accordion
            id="grid-integration"
            title="Grid-OS Integration"
            icon="⚡"
            color="grid-green"
            defaultOpen={false}
          >
            <div className="font-mono text-sm text-historic-sepia space-y-3">
              <p>
                <strong className="text-brand-black">Energie-bewusstes Scheduling:</strong> Jobs laufen nur, 
                wenn Solar-Energie verfügbar ist. Bei Grid-Problemen werden Jobs pausiert oder gedrosselt.
              </p>
              <p>
                <strong className="text-brand-black">Flexible Workloads:</strong> Alle Compute-Jobs sind 
                unterbrechbar und können bei Bedarf pausiert werden, um das Grid zu unterstützen.
              </p>
              <p>
                <strong className="text-brand-black">Heat Accounting:</strong> Jede kWh Compute wird 
                automatisch als Wärme verbucht und kann als Credit genutzt werden.
              </p>
            </div>
          </Accordion>

          <Accordion
            id="storage-scenarios"
            title="Dezentrale Speicherung"
            icon="💾"
            color="compute-blue"
            defaultOpen={false}
          >
            <div className="font-mono text-sm text-historic-sepia space-y-3">
              <p>
                <strong className="text-brand-black">Content-Addressed Storage:</strong> Dateien werden 
                über ihren Inhalt identifiziert (nicht über Dateinamen). Gleicher Inhalt = gleiche ID, 
                automatische Deduplizierung.
              </p>
              <p>
                <strong className="text-brand-black">Replikation:</strong> Jede Datei wird auf mindestens 
                3 Hubs gespeichert. Kein Single Point of Failure. Alle Daten bleiben in der Schweiz.
              </p>
              <p>
                <strong className="text-brand-black">Tiering:</strong> Hot (NVMe) für häufig genutzte Daten, 
                Cold (HDD) für Archive, Glacier (Tape) für Langzeit-Backup.
              </p>
            </div>
          </Accordion>

          <Accordion
            id="marketplace"
            title="LEG Marketplace"
            icon="🏪"
            color="thermal-orange"
            defaultOpen={false}
          >
            <div className="font-mono text-sm text-historic-sepia space-y-3">
              <p>
                <strong className="text-brand-black">Inter-Hub Trading:</strong> Hubs mit Überschuss verkaufen 
                Compute, Storage oder Wärme an Hubs mit Bedarf. Lokale Elektrizitätsgemeinschaften (LEGs) 
                handeln Ressourcen.
              </p>
              <p>
                <strong className="text-brand-black">Dynamische Preise:</strong> Preise passen sich an 
                Energie-Verfügbarkeit, Grid-Bedingungen und Angebot/Nachfrage an.
              </p>
              <p>
                <strong className="text-brand-black">Settlement:</strong> Abrechnung über interne Credits 
                oder direkt in CHF via Stripe Connect.
              </p>
            </div>
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-historic-sepia mb-6">
            Willst du wissen, wie diese Workloads implementiert werden?
          </p>
          <a
            href="/challenges#grid-os"
            className="inline-block bg-compute-blue hover:bg-compute-blue/90 text-white font-mono px-6 py-3 rounded-lg transition-colors"
          >
            Grid-OS Challenge anschauen →
          </a>
        </div>
      </div>
    </section>
  )
}
