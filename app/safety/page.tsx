import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata = {
  title: 'Sicherheit | sihlhack',
  description: 'Sicherheitsmassnahmen und Professional Oversight für alle Teilnehmer',
}

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
              Sicherheit zuerst
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
              Deine Sicherheit ist unsere Priorität
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              Alle Teilnehmer arbeiten unter professioneller Aufsicht mit zertifizierten Sicherheitssystemen. 
              Obligatorisches Sicherheitstraining stellt sicher, dass jeder die Risiken und Sicherheitsverfahren versteht.
            </p>
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
                Unabhängige Safety Officer, lizenzierte Elektriker und medizinisches Personal sorgen für deine Sicherheit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Safety Officer */}
              <Card className="border-2 border-thermal-orange/20">
                <CardHeader>
                  <div className="text-4xl mb-4">🛡️</div>
                  <CardTitle className="text-xl text-brand-black">Unabhängiger Safety Officer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia mb-4">
                    Ein lizenzierter Elektroingenieur mit Befugnis, Aktivitäten zu stoppen, wenn Sicherheitsrisiken identifiziert werden. 
                    Der Safety Officer ist unabhängig von den Event-Organisatoren.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">✓</span>
                      <span>Lizenzierter Elektroingenieur (Elektroinstallateur EFZ)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">✓</span>
                      <span>NIV-Installationslizenz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">✓</span>
                      <span>Kontinuierliche Anwesenheit während des Events</span>
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
                    Lizenzierte Elektriker, Brandschutzpersonal und medizinisches Personal sind kontinuierlich während des gesamten Events anwesend.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-compute-blue">✓</span>
                      <span>Lizenzierte Elektriker (kontinuierlich)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-compute-blue">✓</span>
                      <span>Brandschutzpersonal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-compute-blue">✓</span>
                      <span>Medizinisches Personal (Erste Hilfe, Notfallversorgung)</span>
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
                    Sensor-basierte Systeme überwachen kontinuierlich alle kritischen Systeme mit automatisierten Warnungen.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Batterie-Temperaturen und Spannungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Elektrische Systeme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Thermische Systeme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Branderkennung</span>
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
                Sicherheitsanforderungen für Teilnehmer
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Vor der Teilnahme müssen alle Teilnehmer ein obligatorisches Sicherheitstraining absolvieren.
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
                  Alle Teilnehmer müssen vor dem Event ein 4-stündiges Online-Sicherheitstraining absolvieren:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-black mb-3">Modul 1: Elektrische Sicherheit</h4>
                    <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                      <li>• RCD/GFCI-Funktion und Test</li>
                      <li>• Arbeiten unter Spannung</li>
                      <li>• Fehlerstromschutz</li>
                      <li>• Notfallverfahren</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-black mb-3">Modul 2: Batteriesicherheit</h4>
                    <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                      <li>• Lithium-Batterie-Gefahren</li>
                      <li>• Batterie-Handling und Lagerung</li>
                      <li>• BMS-Funktion und Ausfallmodi</li>
                      <li>• Notfallreaktion auf Batterie-Vorfälle</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-black mb-3">Modul 3: Thermische Systeme</h4>
                    <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                      <li>• Öl-Immersion: Handhabung, Lagerung</li>
                      <li>• Wasser-Loop: Elektrokontakt-Prävention</li>
                      <li>• Wärmepumpe: Hochdruck, Kältemittel</li>
                      <li>• Verbrennungsprävention und Erste Hilfe</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-black mb-3">Modul 4: Notfallverfahren</h4>
                    <ul className="space-y-2 text-xs font-mono text-historic-sepia">
                      <li>• Brandreaktion und Evakuierung</li>
                      <li>• Medizinische Notfallverfahren</li>
                      <li>• Vorfallmeldung</li>
                      <li>• Notfallkontakte</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-thermal-orange/10 border border-thermal-orange/30 rounded-lg p-4">
                  <p className="text-sm font-mono text-brand-black font-semibold mb-2">
                    Zertifizierungsprozess
                  </p>
                  <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                    <li>• Online-Training (4 Stunden)</li>
                    <li>• Zertifizierungsprüfung (80% Bestehensquote erforderlich)</li>
                    <li>• Zertifikat gültig für 12 Monate</li>
                    <li>• Keine Teilnahme ohne Zertifizierung</li>
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
                Mehrschichtige Sicherheitssysteme schützen alle Teilnehmer.
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
                Alle Sicherheitsmassnahmen entsprechen den Schweizer Vorschriften.
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
                    <span>Professionelle Haftpflicht für vor Ort tätige Ingenieure</span>
                  </li>
                </ul>
              </div>
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
                    Ja. Alle Teilnehmer arbeiten unter professioneller Aufsicht mit zertifizierten Sicherheitssystemen. 
                    Obligatorisches Sicherheitstraining stellt sicher, dass jeder die Risiken und Sicherheitsverfahren versteht. 
                    Ein unabhängiger Safety Officer überwacht kontinuierlich die Sicherheit während des gesamten Events.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Welches Sicherheitstraining ist erforderlich?
                  </h3>
                  <p className="text-sm font-mono text-historic-sepia">
                    Alle Teilnehmer müssen vor dem Event ein 4-stündiges Online-Sicherheitstraining absolvieren, 
                    das elektrische Sicherheit, Batteriesicherheit, thermische Systeme und Notfallverfahren abdeckt. 
                    Eine Zertifizierungsprüfung (80% Bestehensquote) ist erforderlich. Keine Teilnahme ohne Zertifizierung.
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
                    einschliesslich Koordination mit dem örtlichen Krankenhaus. Alle Teilnehmer erhalten tägliche 
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
                    Ein unabhängiger Safety Officer (lizenzierter Elektroingenieur) überwacht kontinuierlich die Sicherheit. 
                    Der Safety Officer ist unabhängig von den Event-Organisatoren und hat die Befugnis, Aktivitäten zu stoppen, 
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
              Bereit, sicher mitzubauen?
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
