import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Image from 'next/image'

export const metadata = {
  title: 'Sicherheit | sihlhack',
  description: 'Sicherheitsmassnahmen und fachkundige Überwachung für alle Teilnehmende',
}

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-brand-black text-white py-20 overflow-hidden">
          <Image
            src="/images/pkg_multi_node_safety_cover.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-black/65" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
              Sicherheit zuerst
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
              Deine Sicherheit ist unsere Priorität
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              Alle Hardware wird bereitgestellt und unter fachkundiger Aufsicht betrieben. 
              Teams programmieren die Betriebssicherheitslogik – inklusive fail-closed Safety-Clearance vor jeder Aktorik.
            </p>
          </div>
        </section>

        {/* Safety Philosophy */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Unsere Sicherheitsphilosophie
              </h2>
              <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
                Wir versuchen, zu sicher zu sein, als dass wir es bereuen.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-thermal-orange/30 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-black mb-3 flex items-center gap-2">
                    <span>🛡️</span>
                    Über gesetzliche Anforderungen hinaus
                  </h3>
                  <p className="text-sm font-mono text-historic-sepia leading-relaxed">
                    Unsere Sicherheitsmassnahmen gehen bewusst über die gesetzlichen Mindestanforderungen hinaus. 
                    Wir setzen nicht nur auf Einhaltung der Vorschriften, sondern auf proaktive Risikominimierung. 
                    Jedes System wird vor dem Event von unabhängigen Sicherheitsbeauftragten geprüft und freigegeben.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-brand-black mb-3 flex items-center gap-2">
                    <span>💻</span>
                    Arbeitsablauf: Simulation zur Realität
                  </h3>
                  <p className="text-sm font-mono text-historic-sepia leading-relaxed mb-3">
                    Teams entwickeln ihre Grid-OS Logik gegen den Sihl-Sim (Digitaler Zwilling) lokal, 
                    prüfen auf dem 5V Sicherheitsprüfstand (15-Minuten Zeitfenster), und setzen auf überwachte Referenz-Hardware ein. 
                    Alle Hardware-Operationen werden von Sicherheitsbeauftragten überwacht.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-historic-sepia ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange mt-0.5">•</span>
                      <span>Entwicklung gegen Sihl-Sim (Digitaler Zwilling) – keine physischen Risiken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange mt-0.5">•</span>
                      <span>Prüfung auf 5V Sicherheitsprüfstand – Niedrigleistung, sichere Validierung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange mt-0.5">•</span>
                      <span>Einsatz auf Referenz-Hardware – überwacht, fachkundige Überwachung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange mt-0.5">•</span>
                      <span>Alle Hardware wird bereitgestellt – keine physische Montage durch Teams</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-thermal-orange/10 border border-thermal-orange/30 rounded-lg p-4">
                  <p className="text-sm font-mono text-brand-black font-semibold mb-2">
                    Unser Ansatz: Proaktive Sicherheit
                  </p>
                  <p className="text-xs font-mono text-historic-sepia leading-relaxed">
                    Statt zu warten, bis etwas schiefgeht, identifizieren wir Risiken im Voraus und 
                    implementieren Massnahmen, die über das gesetzlich Erforderliche hinausgehen. 
                    Sicherheit ist nicht verhandelbar – auch wenn das bedeutet, dass wir manche Aktivitäten 
                    einschränken oder zusätzliche Prüfungen durchführen müssen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Commitment */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black">
                Professionelle Sicherheitsüberwachung
              </h2>
              <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
                Unabhängige Sicherheitsbeauftragte, lizenzierte Elektriker und medizinisches Personal sorgen für deine Sicherheit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Safety Officer */}
              <Card className="border-2 border-thermal-orange/20">
                <CardHeader>
                  <div className="text-4xl mb-4">🛡️</div>
                  <CardTitle className="text-xl text-brand-black">Sicherheitsbeauftragte Person</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia mb-4">
                    Fachkundige Sicherheitsbeauftragte überwachen alle Referenz-Hardware Operationen. 
                    Teams programmieren die Betriebssicherheitslogik – Software-Sicherheitsverriegelungen, die das System sicher betreiben.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">✓</span>
                      <span>Überwachte Referenz-Hardware Operationen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">✓</span>
                      <span>Betriebssicherheitslogik Überwachung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">✓</span>
                      <span>Kontinuierliche Anwesenheit während Inbetriebnahmen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* On-Site Professionals */}
              <Card className="border-2 border-compute-blue/20">
                <CardHeader>
                  <div className="text-4xl mb-4">👷</div>
                  <CardTitle className="text-xl text-brand-black">Fachpersonal vor Ort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia mb-4">
                    Sicherheitsbeauftragte überwachen alle Referenz-Hardware Inbetriebnahmen. 
                    Alle Hardware ist vorab zertifiziert und wird unter fachkundiger Aufsicht betrieben.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-compute-blue">✓</span>
                      <span>Vorab zertifizierte Referenz-Hardware</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-compute-blue">✓</span>
                      <span>Überwachte Inbetriebnahme-Zeitfenster</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-compute-blue">✓</span>
                      <span>Betriebssicherheitslogik Validierung</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Real-Time Monitoring */}
              <Card className="border-2 border-grid-green/20">
                <CardHeader>
                  <div className="text-4xl mb-4">📊</div>
                  <CardTitle className="text-xl text-brand-black">Echtzeit-Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia mb-4">
                    Sensor-Integration Teams bauen Daten-Pipelines für Echtzeitüberwachung. 
                    Betriebssicherheitslogik Teams programmieren Anomalieerkennung und Not-Aus Logik.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Sensor-Daten-Pipelines (Temp, Durchfluss, Leistung, Batterie-Ladezustand)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Anomalieerkennungs-Algorithmen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Not-Aus Logik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Sensor-Validierungssystem</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety Requirements */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Sicherheitsanforderungen für Teilnehmende
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Teams programmieren Betriebssicherheitslogik – Software-Sicherheitsverriegelungen für sicheres System-Betrieb.
              </p>
            </div>

            <Card className="border-2 border-thermal-orange/30">
              <CardHeader>
                <CardTitle className="text-xl text-brand-black flex items-center gap-3">
                  <span>📚</span>
                  Obligatorisches Sicherheitstraining
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-mono text-historic-sepia mb-6">
                  Betriebssicherheitslogik Teams programmieren Software-Sicherheitsverriegelungen für sicheres System-Betrieb:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-black mb-3">Anomalieerkennung</h4>
                    <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                      <li>• Maschinelles Lernen / Statistische Anomalieerkennung</li>
                      <li>• Sensor-Daten Validierung</li>
                      <li>• Mustererkennung</li>
                      <li>• Echtzeitüberwachung</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-black mb-3">Not-Aus Logik</h4>
                    <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                      <li>• Software-basierte Not-Aus</li>
                      <li>• Ausfallsichere Mechanismen</li>
                      <li>• Kontrolliertes Herunterfahren</li>
                      <li>• Schnittstellen-Integration mit Referenz-Hardware</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-black mb-3">Sicherheitsverriegelungen</h4>
                    <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                      <li>• Software-Sicherheitsverriegelungen</li>
                      <li>• Zustandsüberwachung</li>
                      <li>• Vorbedingungsprüfungen</li>
                      <li>• Integration mit Grid-OS</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-black mb-3">Sensor-Validierung</h4>
                    <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                      <li>• Datenkonsistenz-Prüfungen</li>
                      <li>• Sensor-Ausfallerkennung</li>
                      <li>• Kalibrierungsvalidierung</li>
                      <li>• Redundanzverwaltung</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-thermal-orange/10 border border-thermal-orange/30 rounded-lg p-4">
                  <p className="text-sm font-mono text-brand-black font-semibold mb-2">
                    Hardware-Bereitstellung
                  </p>
                  <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                    <li>• Alle Hardware wird bereitgestellt (Referenz-Systeme)</li>
                    <li>• Vorab zertifiziert und sicherheitsgeprüft</li>
                    <li>• Überwachte Betriebsführung durch Sicherheitsbeauftragte</li>
                    <li>• Teams programmieren die Logik, nicht die Hardware</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Systems */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Sicherheitssysteme
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Mehrschichtige Sicherheitssysteme schützen alle Teilnehmende.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>🔌</span>
                    Elektrische Sicherheit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>RCD/GFCI-Schutz (30mA, getestet und verifiziert)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Redundante Sicherheitssysteme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Not-Aus-System (hardwarebasiert, softwareunabhängig)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Überstromschutz</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a href="/security-analysis" className="text-sihl-red hover:underline font-mono text-xs">
                      → Risikoanalyse: Elektrische Fehler
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>🔥</span>
                    Brandschutz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Brandunterdrückungssystem (kompatibel mit Öl)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Branderkennung (Wärme, Rauch, Flamme)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Evakuierungsrouten und -verfahren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Feuerwehr-Koordination</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a href="/security-analysis" className="text-thermal-orange hover:underline font-mono text-xs">
                      → Risikoanalyse: Batterie Thermal Runaway
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>🪣</span>
                    Leckage-Schutz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Leckwanne (Auffangbehälter) für alle Ölsysteme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Leckage-Erkennungssensoren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Umweltgerechte Entsorgungspläne</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a href="/security-analysis" className="text-solar-yellow hover:underline font-mono text-xs">
                      → Risikoanalyse: Öl-Leckage
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>🏥</span>
                    Medizinische Versorgung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Erste-Hilfe-Station mit geschultem Personal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Automatisierter Externer Defibrillator (AED)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Koordination mit örtlichem Krankenhaus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Notfallreaktionsplan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-16 bg-brand-black text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white">
                Regulatorische Compliance
              </h2>
              <p className="mt-4 text-gray-300 font-mono max-w-2xl mx-auto">
                Alle Sicherheitsmassnahmen entsprechen den Schweizer Vorschriften und gehen darüber hinaus.
              </p>
              <p className="mt-2 text-sm text-gray-400 font-mono max-w-2xl mx-auto">
                Wir setzen nicht nur auf gesetzliche Mindestanforderungen, sondern auf proaktive Risikominimierung.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-thermal-orange mb-4">
                  Elektrische Vorschriften (NIV)
                </h3>
                <ul className="space-y-2 text-sm font-mono text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green">✓</span>
                    <span>Lizenzierte Elektriker für alle Installationen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green">✓</span>
                    <span>Sicherheitsnachweis (Sicherheitszertifikat) vor Event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green">✓</span>
                    <span>NIV-konforme Installationen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-thermal-orange mb-4">
                  Brandschutz
                </h3>
                <ul className="space-y-2 text-sm font-mono text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green">✓</span>
                    <span>Brandschutzgenehmigung von kantonalen Behörden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green">✓</span>
                    <span>Brandunterdrückungssysteme installiert und getestet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green">✓</span>
                    <span>Evakuierungsverfahren dokumentiert</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-thermal-orange mb-4">
                  Versicherung
                </h3>
                <ul className="space-y-2 text-sm font-mono text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green">✓</span>
                    <span>Event-Haftpflichtversicherung abgeschlossen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green">✓</span>
                    <span>Abdeckung für elektrische/thermische Arbeiten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-grid-green">✓</span>
                    <span>Professionelle Haftpflicht für vor Ort tätige Ingenieurinnen und Ingenieure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge-Specific Risks */}
        <section id="challenge-risks" className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Sicherheitsrisiken pro Paket
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Jedes Paket hat spezifische Risiken. Wir erklären sie transparent und zeigen, wie wir sie minimieren.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="/challenges" className="text-thermal-orange hover:underline font-mono text-sm">
                  → Alle Pakete und Challenges ansehen
                </a>
                <span className="text-gray-400 font-mono text-sm hidden sm:inline">|</span>
                <a href="/challenges#thermal-architecture" className="text-thermal-orange hover:underline font-mono text-sm">
                  → Wärme-Pfade mit Risiken vergleichen
                </a>
              </div>
            </div>

            <div className="space-y-8">
              {/* Demo-Kit Risks */}
              <Card className="border-2 border-thermal-orange/20">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-black flex items-center gap-3">
                    <span>⚡</span>
                    Demo-Kit: Spezifische Risiken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-mono text-sm font-bold text-sihl-red mb-3 flex items-center gap-2">
                        <span>🔋</span>
                        Batterie-Risiken
                      </h4>
                      <ul className="space-y-2 text-xs font-mono text-historic-sepia mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Thermal Runaway:</strong> Lithium-Batterien können bei Beschädigung oder Überladung explodieren. Temperaturen über 150°C lösen eine Kettenreaktion aus.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Überladung/Überentladung:</strong> Führt zu irreversiblen Zellschäden und erhöht Brandrisiko.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Kurzschluss:</strong> Bei unsachgemässer Handhabung oder defekten Zellen kann Kurzschluss zu sofortiger Überhitzung führen.</span>
                        </li>
                      </ul>
                      <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-3">
                        <p className="text-xs font-mono text-brand-black font-semibold mb-2">Schutzmassnahmen:</p>
                        <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                          <li>• BMS-Überwachung (Temperatur, Spannung, Strom) mit automatischer Abschaltung</li>
                          <li>• Temperatur-Sensoren an jeder Batterie-Zelle</li>
                          <li>• Not-Aus-Schalter für sofortige Trennung</li>
                          <li>• Brandschutzsystem speziell für Lithium-Batterien</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-sm font-bold text-sihl-red mb-3 flex items-center gap-2">
                        <span>⚡</span>
                        Elektrische Risiken
                      </h4>
                      <ul className="space-y-2 text-xs font-mono text-historic-sepia mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Hochspannung:</strong> Batterie-Spannungen bis 48V+ können bei direktem Kontakt gefährlich sein.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Fehlerstrom:</strong> Wasser oder Öl in Kontakt mit elektrischen Komponenten kann zu lebensgefährlichen Strömen führen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Grid-Backfeed:</strong> Unkontrollierte Einspeisung ins Netz gefährdet Netzwerker und kann zu Netzinstabilität führen.</span>
                        </li>
                      </ul>
                      <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-3">
                        <p className="text-xs font-mono text-brand-black font-semibold mb-2">Schutzmassnahmen:</p>
                        <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                          <li>• RCD/GFCI-Schutz (30mA) für alle Stromkreise</li>
                          <li>• Isolationsprüfung vor Inbetriebnahme</li>
                          <li>• Grid-Trennung mit Schutzrelais</li>
                          <li>• Professionelle Installation durch lizenzierte Elektriker</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-sm font-bold text-sihl-red mb-3 flex items-center gap-2">
                        <span>🌡️</span>
                        Thermische Risiken
                      </h4>
                      <ul className="space-y-2 text-xs font-mono text-historic-sepia mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Überhitzung:</strong> Bei hoher Compute-Last können Komponenten Temperaturen über 80°C erreichen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Heisse Oberflächen:</strong> Verbrennungsgefahr bei direktem Kontakt mit heissen Komponenten.</span>
                        </li>
                      </ul>
                      <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-3">
                        <p className="text-xs font-mono text-brand-black font-semibold mb-2">Schutzmassnahmen:</p>
                        <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                          <li>• Temperatur-Limits mit automatischer Abschaltung</li>
                          <li>• Kühlungssysteme (Immersion/Water/Heat Pump)</li>
                          <li>• Warnsysteme und Absperrungen für heisse Bereiche</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hardware Safety Risks */}
              <Card className="border-2 border-sihl-red/20">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-black flex items-center gap-3">
                    <span>🛡️</span>
                    Hardware Safety: Spezifische Risiken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-mono text-sm font-bold text-sihl-red mb-3 flex items-center gap-2">
                        <span>🛢️</span>
                        Öl-Immersion Risiken
                      </h4>
                      <ul className="space-y-2 text-xs font-mono text-historic-sepia mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Öl-Leckage:</strong> Umweltverschmutzung, Rutschgefahr auf Böden, Kontamination von anderen Systemen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Brandrisiko:</strong> Öl hat Flashpoint &gt;200°C, aber ist brennbar. Bei Überhitzung oder externer Zündquelle kann Öl Feuer fangen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Öl-Dämpfe:</strong> Gesundheitsrisiko bei Einatmung, besonders in geschlossenen Räumen.</span>
                        </li>
                      </ul>
                      <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-3">
                        <p className="text-xs font-mono text-brand-black font-semibold mb-2">Schutzmassnahmen:</p>
                        <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                          <li>• Leckwanne (Auffangbehälter) für alle Ölsysteme</li>
                          <li>• Brandschutzsystem kompatibel mit Öl (nicht wasserbasiert)</li>
                          <li>• Belüftungssystem für Dampf-Abzug</li>
                          <li>• Professionelle Handhabung durch geschultes Personal</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-sm font-bold text-sihl-red mb-3 flex items-center gap-2">
                        <span>💧</span>
                        Wasser-Loop Risiken
                      </h4>
                      <ul className="space-y-2 text-xs font-mono text-historic-sepia mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Elektrokontakt:</strong> Wasser + Strom = Lebensgefahr. Bereits kleine Leckagen können zu tödlichen Strömen führen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Leckage:</strong> Wasserschaden, Kurzschluss, Systemausfall.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Pumpen-Ausfall:</strong> Führt zu Überhitzung und möglichem Systemausfall.</span>
                        </li>
                      </ul>
                      <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-3">
                        <p className="text-xs font-mono text-brand-black font-semibold mb-2">Schutzmassnahmen:</p>
                        <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                          <li>• Vollständig isolierte Systeme (Wasser nie in Kontakt mit Strom)</li>
                          <li>• Leckage-Erkennungssensoren mit sofortiger Abschaltung</li>
                          <li>• Redundante Pumpen für Ausfallsicherheit</li>
                          <li>• RCD/GFCI-Schutz für alle wassernahen Systeme</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-sm font-bold text-sihl-red mb-3 flex items-center gap-2">
                        <span>♨️</span>
                        Wärmepumpe Risiken
                      </h4>
                      <ul className="space-y-2 text-xs font-mono text-historic-sepia mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Hochdruck:</strong> Kältemittel steht unter hohem Druck. Fehlerhafte Komponenten können zu Explosionen führen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Kältemittel-Austritt:</strong> Umweltgefahr, Gesundheitsrisiko, Ozonabbau.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Komplexe Fehlerketten:</strong> Mehrere Systeme müssen zusammenarbeiten. Ein Ausfall kann Kaskadenfehler verursachen.</span>
                        </li>
                      </ul>
                      <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-3">
                        <p className="text-xs font-mono text-brand-black font-semibold mb-2">Schutzmassnahmen:</p>
                        <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                          <li>• Druck-Überwachung mit automatischer Abschaltung</li>
                          <li>• Dichtheitsprüfung vor Inbetriebnahme</li>
                          <li>• Professionelle Installation durch zertifizierte Techniker</li>
                          <li>• Redundante Sicherheitssysteme</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Grid-OS Risks */}
              <Card className="border-2 border-compute-blue/20">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-black flex items-center gap-3">
                    <span>⚡</span>
                    Grid-OS: Spezifische Risiken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-mono text-sm font-bold text-sihl-red mb-3 flex items-center gap-2">
                        <span>🔌</span>
                        Grid-Verbindung Risiken
                      </h4>
                      <ul className="space-y-2 text-xs font-mono text-historic-sepia mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Backfeed ins Netz:</strong> Unkontrollierte Einspeisung gefährdet Netzwerker, die am Netz arbeiten. Kann zu tödlichen Unfällen führen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Frequenz-Instabilität:</strong> Falsche Frequenz kann zu Netzausfällen führen und andere Verbraucher schädigen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Überspannung:</strong> Kann andere Geräte im Netz beschädigen.</span>
                        </li>
                      </ul>
                      <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-3">
                        <p className="text-xs font-mono text-brand-black font-semibold mb-2">Schutzmassnahmen:</p>
                        <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                          <li>• Grid-Trennung mit Schutzrelais (Anti-Islanding)</li>
                          <li>• Frequenz-Überwachung mit automatischer Abschaltung</li>
                          <li>• Spannungs-Überwachung und Schutz</li>
                          <li>• Professionelle Installation und Prüfung durch Netzbetreiber</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-sm font-bold text-sihl-red mb-3 flex items-center gap-2">
                        <span>💻</span>
                        Software-Fehler Risiken
                      </h4>
                      <ul className="space-y-2 text-xs font-mono text-historic-sepia mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Fehlsteuerung:</strong> Software-Bug kann dazu führen, dass Compute bei Netzausfall weiterläuft und Batterie entlädt.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Battery-Überladung:</strong> Software-Fehler kann zu Überladung führen, was Thermal Runaway auslösen kann.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sihl-red mt-0.5">⚠</span>
                          <span><strong>Grid-Backfeed durch Bug:</strong> Software-Fehler kann Grid-Trennung umgehen.</span>
                        </li>
                      </ul>
                      <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-3">
                        <p className="text-xs font-mono text-brand-black font-semibold mb-2">Schutzmassnahmen:</p>
                        <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                          <li>• Hardware-Interlocks (unabhängig von Software)</li>
                          <li>• Fail-Safe-Logik (bei Fehler: sicherer Zustand)</li>
                          <li>• Redundante Kontrollen und Überwachung</li>
                          <li>• Code-Review und Testing vor Deployment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-brand-black text-center mb-12">
              Häufige Fragen zur Sicherheit
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Ist es sicher?
                  </h3>
                  <p className="text-sm font-mono text-historic-sepia">
                    Ja. Alle Teilnehmende arbeiten unter fachkundiger Aufsicht mit zertifizierten Sicherheitssystemen. 
                    Obligatorisches Sicherheitstraining stellt sicher, dass jeder die Risiken und Sicherheitsverfahren versteht. 
                    Eine unabhängige Sicherheitsbeauftragte Person überwacht kontinuierlich die Sicherheit während des gesamten Events.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Welches Sicherheitstraining ist erforderlich?
                  </h3>
                  <p className="text-sm font-mono text-historic-sepia">
                    Alle Teilnehmende müssen vor dem Event ein Online-Sicherheitstraining absolvieren, 
                    das elektrische Sicherheit, Batteriesicherheit, thermische Systeme und Notfallverfahren abdeckt. 
                    Eine Zertifizierungsprüfung (80% Bestehensquote) ist erforderlich. 
                    Vor Ort gibt es einen kurzen Refresher. Keine Teilnahme ohne Zertifizierung.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Was passiert bei einem Notfall?
                  </h3>
                  <p className="text-sm font-mono text-historic-sepia">
                    Medizinisches Personal ist kontinuierlich vor Ort. Ein Notfallreaktionsplan ist etabliert, 
                    einschliesslich Koordination mit dem örtlichen Krankenhaus. Alle Teilnehmende erhalten tägliche 
                    Sicherheitsbriefings mit Notfallkontakten und Evakuierungsverfahren.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Wer überwacht die Sicherheit?
                  </h3>
                  <p className="text-sm font-mono text-historic-sepia">
                    Eine unabhängige Sicherheitsbeauftragte Person (lizenzierte Elektroingenieurin oder lizenzierter Elektroingenieur) überwacht kontinuierlich die Sicherheit. 
                    Die Sicherheitsbeauftragte Person ist unabhängig von den Event-Organisatoren und hat die Befugnis, Aktivitäten zu stoppen, 
                    wenn Sicherheitsrisiken identifiziert werden. Zusätzlich sind lizenzierte Elektriker, Brandschutzpersonal 
                    und medizinisches Personal kontinuierlich vor Ort.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-thermal-orange to-compute-blue">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Bereit, sicher mitzuprogrammieren?
            </h2>
            <p className="mt-4 text-white/90 font-mono max-w-xl mx-auto">
              Deine Sicherheit ist unsere Priorität. Melde dich an und absolviere das obligatorische Sicherheitstraining.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/register" variant="secondary" size="lg">
                Jetzt anmelden
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Mehr über sihlhack
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
