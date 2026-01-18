import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata = {
  title: 'Sicherheitsanalyse | sihlhack',
  description: 'Umfassende Sicherheitsanalyse des Sihlhack-Konzepts und Events',
}

export default function SecurityAnalysisPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
              Sicherheitsanalyse
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
              Umfassende Sicherheitsanalyse
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              Diese Analyse folgt einer strukturierten Truth-Seeking-Methodik zur Identifizierung aller Sicherheitsrisiken, regulatorischen Lücken und spezifischen Empfehlungen.
            </p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-2 border-thermal-orange/30 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-black">Executive Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-mono text-historic-sepia mb-4">
                  <strong className="text-brand-black">Kritischer Befund:</strong> Das Event beinhaltet erhebliche Sicherheitsrisiken, die derzeit unzureichend abgemildert sind. Während einige Sicherheitsmassnahmen geplant sind (lizenzierte Elektriker, Versicherung), bestehen kritische Lücken in der Pre-Event-Sicherheitsvalidierung, dem Echtzeit-Monitoring und der Sicherheits-Governance-Struktur.
                </p>
                
                <div className="bg-thermal-orange/10 border border-thermal-orange/30 rounded-lg p-4 mt-6">
                  <h3 className="font-mono text-sm font-bold text-brand-black mb-3">Wahrscheinlichkeitsbewertung</h3>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-grid-green font-bold">68%</span>
                      <span className="text-historic-sepia">Event verläuft sicher, wenn alle Empfehlungen umgesetzt werden</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-solar-yellow font-bold">24%</span>
                      <span className="text-historic-sepia">Grösserer Sicherheitsvorfall erfordert Event-Modifikation oder Absage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sihl-red font-bold">8%</span>
                      <span className="text-historic-sepia">Katastrophales Versagen (Brand, schwere Verletzungen) durch kaskadierende Systemausfälle</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Critical Risks */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Kritische Risiken
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Identifizierte Risiken und erforderliche Massnahmen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-sihl-red/20">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>🔋</span>
                    Batterie Thermal Runaway + Öl-Brand
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm font-mono">
                    <div>
                      <span className="text-sihl-red font-bold">Risikolevel:</span>
                      <span className="text-historic-sepia ml-2">Hoch</span>
                    </div>
                    <div>
                      <span className="text-sihl-red font-bold">Wahrscheinlichkeit:</span>
                      <span className="text-historic-sepia ml-2">0.1-1% pro Event</span>
                    </div>
                    <div>
                      <span className="text-sihl-red font-bold">Schwere:</span>
                      <span className="text-historic-sepia ml-2">Katastrophal (Brand, Verletzungen, Sachschaden)</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <span className="text-grid-green font-bold">Erforderliche Massnahmen:</span>
                      <ul className="mt-2 space-y-1 text-xs text-historic-sepia">
                        <li>• Batterie-Monitoring</li>
                        <li>• Brandunterdrückung</li>
                        <li>• Containment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-thermal-orange/20">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>⚡</span>
                    Elektrische Fehler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm font-mono">
                    <div>
                      <span className="text-thermal-orange font-bold">Risikolevel:</span>
                      <span className="text-historic-sepia ml-2">Mittel-Hoch</span>
                    </div>
                    <div>
                      <span className="text-thermal-orange font-bold">Wahrscheinlichkeit:</span>
                      <span className="text-historic-sepia ml-2">1-5% pro Event</span>
                    </div>
                    <div>
                      <span className="text-thermal-orange font-bold">Schwere:</span>
                      <span className="text-historic-sepia ml-2">Hoch (Stromschlag, Brand)</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <span className="text-grid-green font-bold">Erforderliche Massnahmen:</span>
                      <ul className="mt-2 space-y-1 text-xs text-historic-sepia">
                        <li>• RCD/GFCI-Schutz</li>
                        <li>• Redundante Systeme</li>
                        <li>• Not-Aus-System</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-solar-yellow/20">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>🪣</span>
                    Öl-Leckage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm font-mono">
                    <div>
                      <span className="text-solar-yellow font-bold">Risikolevel:</span>
                      <span className="text-historic-sepia ml-2">Mittel</span>
                    </div>
                    <div>
                      <span className="text-solar-yellow font-bold">Wahrscheinlichkeit:</span>
                      <span className="text-historic-sepia ml-2">2-10% pro Event</span>
                    </div>
                    <div>
                      <span className="text-solar-yellow font-bold">Schwere:</span>
                      <span className="text-historic-sepia ml-2">Mittel (Umweltverschmutzung, Brandrisiko)</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <span className="text-grid-green font-bold">Erforderliche Massnahmen:</span>
                      <ul className="mt-2 space-y-1 text-xs text-historic-sepia">
                        <li>• Leckwanne (110% Tankvolumen)</li>
                        <li>• Leckage-Erkennung</li>
                        <li>• Entsorgungsplan</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-compute-blue/20">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>👥</span>
                    Menschliche Fehler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm font-mono">
                    <div>
                      <span className="text-compute-blue font-bold">Risikolevel:</span>
                      <span className="text-historic-sepia ml-2">Mittel</span>
                    </div>
                    <div>
                      <span className="text-compute-blue font-bold">Wahrscheinlichkeit:</span>
                      <span className="text-historic-sepia ml-2">5-15% pro Event</span>
                    </div>
                    <div>
                      <span className="text-compute-blue font-bold">Schwere:</span>
                      <span className="text-historic-sepia ml-2">Variabel (von gering bis katastrophal)</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <span className="text-grid-green font-bold">Erforderliche Massnahmen:</span>
                      <ul className="mt-2 space-y-1 text-xs text-historic-sepia">
                        <li>• Obligatorisches Sicherheitstraining</li>
                        <li>• Klare Verfahren</li>
                        <li>• Kontinuierliche Überwachung</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Kritische Empfehlungen
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Diese Massnahmen müssen vor dem Pilot-Event umgesetzt werden
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-2 border-sihl-red/20">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black">1. Unabhängiger Safety Officer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia">
                    Ein lizenzierter Elektroingenieur mit Befugnis, Aktivitäten zu stoppen, wenn Sicherheitsrisiken identifiziert werden. Der Safety Officer ist unabhängig von den Event-Organisatoren.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-sihl-red/20">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black">2. Versicherung absichern</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia">
                    Mindestens CHF 5 Millionen Haftpflichtversicherung vor Event-Beginn absichern. Versicherung muss alle identifizierten Risiken abdecken.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-sihl-red/20">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black">3. Obligatorisches Sicherheitstraining</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia">
                    Alle Teilnehmer müssen vor dem Event ein Online-Sicherheitstraining absolvieren und eine Zertifizierungsprüfung bestehen (80% Bestehensquote). 
                    Vor Ort gibt es einen kurzen Refresher. Keine Teilnahme ohne Zertifizierung.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-sihl-red/20">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black">4. Pre-Event Sicherheitsinspektion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia">
                    Alle Geräte müssen vor Event-Beginn von einem lizenzierten Elektriker inspiziert werden. Sicherheitszertifikat (Sicherheitsnachweis) muss ausgestellt werden.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-sihl-red/20">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black">5. Echtzeit-Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia">
                    Sensor-basierte Systeme müssen kontinuierlich alle kritischen Systeme überwachen (Batterie, elektrische Systeme, thermische Systeme, Branderkennung) mit automatisierten Warnungen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Analysis Documents */}
        <section className="py-16 bg-brand-black text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white">
                Vollständige Analyse-Dokumente
              </h2>
              <p className="mt-4 text-gray-300 font-mono max-w-2xl mx-auto">
                Detaillierte Analysedokumente stehen zur Verfügung
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">SAFETY-EXECUTIVE-SUMMARY.md</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-gray-300">
                    Executive Summary mit wichtigsten Erkenntnissen, Wahrscheinlichkeitsbewertungen und Go/No-Go-Kriterien.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">SAFETY-ANALYSIS.md</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-gray-300">
                    Vollständige forensische Sicherheitsanalyse nach strukturierter Truth-Seeking-Methodik.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">SAFETY-RECOMMENDATIONS.md</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-gray-300">
                    Spezifische umsetzbare Empfehlungen, nach Priorität sortiert (Kritisch, Hoch, Mittel).
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">SAFETY-GOVERNANCE.md</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-gray-300">
                    Organisationsstruktur zur Gewährleistung der Teilnehmersicherheit.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">SAFETY-COMPLIANCE-CHECKLIST.md</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-gray-300">
                    Checkliste für regulatorische Compliance (NIV, Brandschutz, Versicherung).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <a href="/safety" className="text-thermal-orange hover:underline font-mono">
              ← Zurück zur Sicherheitsseite
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
