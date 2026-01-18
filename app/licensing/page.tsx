import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata = {
  title: 'Lizenzierung | sihlhack',
  description: 'Dual-Lizenz-Modell: Open Hardware (CERN-OHL-P/MIT) und Grid-OS (SVG-L) - Wir kämpfen gegen den Cobra-Effekt.',
}

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
              Dual-Lizenz-Modell
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
              Open but Sovereign
            </h1>
            <p className="mt-6 text-lg font-mono text-historic-sepia max-w-2xl mx-auto">
              Wir bauen Denker, die heizen – nicht Heizungen, die denken. 
              Das Dual-Lizenz-Modell schützt das Schweizer Netz vor dem Cobra-Effekt.
            </p>
          </div>

          {/* The Problem: Cobra Effect */}
          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-display text-2xl font-bold text-brand-black mb-4">
                  Das Problem: Der Cobra-Effekt
                </h2>
                <div className="space-y-4 font-mono text-sm text-historic-sepia">
                  <p>
                    Wenn wir einfach alles unter Apache 2.0 veröffentlichen, könnten schlechte Akteure 
                    die Netzschutz-Logik entfernen und "Vampir-Heizungen" bauen, die nur Energie verbrennen, 
                    um Subventionen abzugreifen – und dabei das Netz ignorieren.
                  </p>
                  <p>
                    <strong className="text-brand-black">Das wollen wir verhindern.</strong> Echte Infrastruktur 
                    braucht Regeln. Diese sind unsere.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* The Body: Hardware */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-thermal-orange/10 to-thermal-orange/5 border-2 border-thermal-orange/30 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🔧</span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-black">
                    Der Körper: Open Hardware
                  </h2>
                  <p className="font-mono text-sm text-historic-sepia mt-1">
                    Lizenz: CERN-OHL-P (Permissive) oder MIT
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm text-historic-sepia">
                <p className="text-lg font-semibold text-brand-black">
                  Philosophie: "Jeder kann die Maschine bauen."
                </p>
                <div className="bg-white/50 rounded-lg p-4 space-y-3">
                  <p><strong className="text-brand-black">Gilt für:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Thermische Architektur (Immersion, Wasser-Loop, Wärmepumpe)</li>
                    <li>CAD-Dateien und Schematics</li>
                    <li>Stücklisten (BOM) mit Bezugsquellen</li>
                    <li>Mechanische Konstruktionen</li>
                  </ul>
                </div>
                <div className="bg-white/50 rounded-lg p-4 space-y-2">
                  <p><strong className="text-brand-black">Du darfst:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Es bauen, verkaufen, modifizieren</li>
                    <li>Kommerziell nutzen ohne Einschränkungen</li>
                    <li>In eigene Produkte integrieren</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600 italic">
                  Wir wollen diese Heizungen in jedem Keller. Null Einschränkungen am physischen Artefakt.
                </p>
              </div>
            </div>
          </section>

          {/* The Conscience: Grid-OS */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-compute-blue/10 to-compute-blue/5 border-2 border-compute-blue/30 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🧠</span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-black">
                    Das Gewissen: Grid-OS Lizenz
                  </h2>
                  <p className="font-mono text-sm text-historic-sepia mt-1">
                    Lizenz: Sihl Valley Common-Good License (SVG-L)
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm text-historic-sepia">
                <p className="text-lg font-semibold text-brand-black">
                  Philosophie: "Du kannst das Gewissen der Maschine nicht entfernen."
                </p>
                <div className="bg-white/50 rounded-lg p-4 space-y-3">
                  <p><strong className="text-brand-black">Gilt für:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Grid-OS Scheduler und Orchestrator</li>
                    <li>Verhandlungslogik (wann rechnen, wann heizen)</li>
                    <li>Grid-Interface Code (Swissgrid-Integration, SDL)</li>
                    <li>Load-Shedding und Frequency-Containment</li>
                  </ul>
                </div>

                {/* Key Clauses */}
                <div className="bg-white/50 rounded-lg p-4 space-y-4">
                  <p><strong className="text-brand-black">Die drei Kernklauseln:</strong></p>
                  
                  <div className="border-l-4 border-sihl-red pl-4">
                    <p className="font-semibold text-brand-black mb-1">
                      Thermodynamische Wahrheit
                    </p>
                    <p className="text-xs">
                      Die Software darf nicht so modifiziert werden, dass "Dummy Loops" 
                      (NO-OP Zyklen) nur zur Wärmeerzeugung ohne wirtschaftlichen oder wissenschaftlichen 
                      Wert laufen. Das ist eine Lizenzverletzung.
                    </p>
                  </div>

                  <div className="border-l-4 border-grid-green pl-4">
                    <p className="font-semibold text-brand-black mb-1">
                      Netzgehorsam
                    </p>
                    <p className="text-xs">
                      Jede Installation dieser Software, die signifikante Last kontrolliert, muss eine 
                      aktive, ungehinderte Schnittstelle für Grid Frequency Containment aufrechterhalten. 
                      Code zu entfernen, der Grid-Curtailment-Signale ignoriert, beendet die Lizenz sofort.
                    </p>
                  </div>

                  <div className="border-l-4 border-thermal-orange pl-4">
                    <p className="font-semibold text-brand-black mb-1">
                      Anti-Vampir
                    </p>
                    <p className="text-xs">
                      Diese Software darf nicht auf Hardware mit einer Computational Efficiency Rating 
                      unter 500 MFLOPS/Watt verwendet werden, es sei denn, die Hardware ist als 
                      "Historisches Erbe" deklariert und auf Bildungszwecke beschränkt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Matters */}
          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-display text-2xl font-bold text-brand-black mb-4">
                  Warum das wichtig ist
                </h2>
                <div className="space-y-4 font-mono text-sm text-historic-sepia">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-grid-green/10 rounded-lg p-4">
                      <p className="font-semibold text-brand-black mb-2">Für Teilnehmer</p>
                      <ul className="space-y-1 text-xs">
                        <li>✓ Du behältst alle Rechte an deinem Code</li>
                        <li>✓ Du bist geschützt vor Waffenisierung durch "Energy Grifter"</li>
                        <li>✓ Du baust echte Infrastruktur mit Regeln</li>
                      </ul>
                    </div>
                    <div className="bg-compute-blue/10 rounded-lg p-4">
                      <p className="font-semibold text-brand-black mb-2">Für LEGs</p>
                      <ul className="space-y-1 text-xs">
                        <li>✓ Kommerzielle Nutzung erlaubt</li>
                        <li>✓ Drei Einnahmequellen: Energie, Compute, Wärme</li>
                        <li>✓ Netzstabilität durch Grid-Interface</li>
                      </ul>
                    </div>
                    <div className="bg-thermal-orange/10 rounded-lg p-4">
                      <p className="font-semibold text-brand-black mb-2">Für die Schweiz</p>
                      <ul className="space-y-1 text-xs">
                        <li>✓ Energie-Souveränität: dezentral, nicht cloud-abhängig</li>
                        <li>✓ Schweizer Präzisions-Vorteil: klein, präzise, koordiniert</li>
                        <li>✓ Daten-Souveränität: lokales Compute, keine Daten verlassen die Schweiz</li>
                      </ul>
                    </div>
                    <div className="bg-sihl-red/10 rounded-lg p-4">
                      <p className="font-semibold text-brand-black mb-2">Gegen Grifter</p>
                      <ul className="space-y-1 text-xs">
                        <li>✗ Keine "Vampir-Server" ohne echten Compute-Wert</li>
                        <li>✗ Keine Umgehung von Grid-Signalen</li>
                        <li>✗ Keine E-Waste-Verbrennung für Subventionen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Narrative: Silicon Valley vs Sihl Valley */}
          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-display text-2xl font-bold text-brand-black mb-4">
                  Silicon Valley Scale vs. Sihl Valley Precision
                </h2>
              <div className="space-y-4 font-mono text-sm text-historic-sepia">
                <p>
                  <strong className="text-brand-black">Silicon Valley:</strong> Wachstum um jeden Preis. 
                  Skalierung über Verantwortung. "Move fast and break things" – auch wenn das Ding 
                  das Stromnetz ist.
                </p>
                <p>
                  <strong className="text-brand-black">Sihl Valley:</strong> Verantwortungsvolle Ingenieurskunst. 
                  Präzision über Größe. Kleine, koordinierte Systeme, die dem Schweizer Netz dienen, 
                  nicht es destabilisieren.
                </p>
                <p className="pt-4 border-t border-gray-200 text-xs italic">
                  Gute Ingenieure begrüßen diese Regeln. Nur Grifter fürchten sie.
                </p>
              </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-brand-black mb-6">
              Häufige Fragen
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Was ist das Dual-Lizenz-Modell?
                  </h3>
                  <p className="font-mono text-sm text-historic-sepia">
                    Hardware (Körper) ist vollständig frei (CERN-OHL-P/MIT). Grid-OS Software (Gewissen) 
                    hat verantwortungsvolle Einschränkungen (SVG-L), um das Netz zu schützen. Du baust 
                    die Maschine frei, aber das Gewissen bleibt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Warum braucht Grid-OS eine spezielle Lizenz?
                  </h3>
                  <p className="font-mono text-sm text-historic-sepia">
                    Ohne diese Regeln könnten schlechte Akteure die Netzschutz-Logik entfernen und 
                    "Vampir-Heizungen" bauen, die nur Energie verbrennen für Subventionen. Das würde 
                    das Schweizer Netz destabilisieren. Wir verhindern den Cobra-Effekt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Behalte ich die Rechte an meinem Code?
                  </h3>
                  <p className="font-mono text-sm text-historic-sepia">
                    Ja. Du bist und bleibst der Urheber deines Codes (Art. 2 URG). Die Lizenzierung 
                    gibt Nutzungsrechte weiter, ohne deine eigenen Rechte zu verlieren. Du kannst 
                    deinen Code später auch für andere Projekte nutzen, verkaufen oder anders lizenzieren.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Welche Lizenz gilt für welches Challenge-Paket?
                  </h3>
                  <p className="font-mono text-sm text-historic-sepia">
                    <strong>Hardware Safety & Thermal Architecture:</strong> CERN-OHL-P/MIT (Hardware). 
                    <strong>Grid-OS Controller:</strong> SVG-L (Software). 
                    <strong>Demo-Kit:</strong> Je nach Komponente – Hardware-Teile frei, Grid-OS-Teile SVG-L.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Kann ich Grid-OS kommerziell nutzen?
                  </h3>
                  <p className="font-mono text-sm text-historic-sepia">
                    Ja, kommerzielle Nutzung ist erlaubt. LEGs dürfen (und sollen) damit Geld verdienen. 
                    Die SVG-L Einschränkungen gelten trotzdem: Du kannst die Netzschutz-Logik nicht entfernen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Was passiert bei einer Lizenzverletzung?
                  </h3>
                  <p className="font-mono text-sm text-historic-sepia">
                    Die SVG-L Lizenz wird sofort beendet. Das bedeutet, du verlierst das Recht, die 
                    Software zu nutzen. Bei schwerwiegenden Verstößen (z.B. bewusste Netz-Destabilisierung) 
                    können rechtliche Schritte folgen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Legal Reference */}
          <section className="mb-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-display text-xl font-bold text-brand-black mb-4">
                  Rechtliche Grundlage
                </h2>
                <div className="space-y-2 font-mono text-sm text-historic-sepia">
                  <p>
                    Alle Vereinbarungen unterliegen Schweizer Recht (Art. 116-120 IPRG). 
                    Gerichtsstand ist Baden, Kanton Aargau, Schweiz.
                  </p>
                  <p>
                    Urheberrechte entstehen automatisch bei der Schöpfung (Art. 2 URG). 
                    Die Lizenzierung erfolgt gemäss Art. 19 URG (Bearbeitung und Änderung) 
                    sowie Art. 62 OR (Vertragsfreiheit).
                  </p>
                  <p className="pt-4 border-t border-gray-200">
                    <a href="/agb" className="text-sihl-red hover:underline">
                      → Vollständige AGB lesen
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <div className="text-center">
            <p className="font-mono text-sm text-historic-sepia">
              📧 Fragen zur Lizenzierung? Schreib uns an{' '}
              <a href="mailto:legal@sihlhack.ch" className="text-thermal-orange hover:underline">
                legal@sihlhack.ch
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
