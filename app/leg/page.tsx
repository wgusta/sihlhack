import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/ButtonLink';

export const metadata: Metadata = {
  title: 'Lokale Elektrizitätsgemeinschaften (LEG) | sihlhack',
  description: 'Eine tiefgehende Analyse von Lokalen Elektrizitätsgemeinschaften: Wie sie funktionieren, was möglich ist, und wo die tatsächlichen Hürden liegen.',
};

export default function LEGPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-grid-green/10 text-grid-green text-xs font-mono uppercase tracking-widest rounded-full">
                Schweizer Energiewende
              </span>
            </div>
            <h1 className="font-accent text-5xl md:text-6xl mb-6 text-brand-black">
              Lokale Elektrizitäts&shy;gemeinschaften
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed font-mono">
              Was das Gesetz verspricht, was technisch möglich ist, und wo die eigentlichen Hürden liegen.
            </p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-thermal-orange">
              <CardHeader>
                <CardTitle className="text-2xl text-thermal-orange">Executive Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-mono leading-relaxed">
                  In der Schweiz gibt es rechtliche Grundlagen für lokale Modelle des Eigenverbrauchs und Energie‑Sharings (z.B. ZEV/LEG). Der genaue Rahmen ist in Entwicklung und hängt vom konkreten Modell und Netzbetreiber ab.
                </p>
                <p className="text-sm font-mono leading-relaxed">
                  <strong className="text-thermal-orange">Das Versprechen:</strong> Mehrere Haushalte oder Gebäude auf einem Areal teilen selbst produzierten Strom (meist Solar) und senken ihre Netzkosten durch lokalen Verbrauch.
                </p>
                <p className="text-sm font-mono leading-relaxed">
                  <strong className="text-compute-blue">Die Realität:</strong> LEGs funktionieren, aber unter engeren Grenzen als oft kommuniziert. Die grössten Hürden sind nicht technisch, sondern regulatorisch, finanziell und sozial.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Was ist eine LEG? */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-accent text-4xl mb-8 text-brand-black">Was ist eine LEG?</h2>
            
            <div className="space-y-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">📜</span>
                    Rechtliche Einordnung
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-3">
                  <p>Eine LEG/ZEV ist ein <strong>Zusammenschluss von Endverbrauchern</strong>, die typischerweise:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Auf dem <strong>gleichen Grundstück oder benachbarten Grundstücken</strong> liegen</li>
                    <li>Über ein <strong>internes Verteilnetz</strong> verbunden sind</li>
                    <li>Selbst produzierten Strom <strong>vor Ort verbrauchen</strong></li>
                    <li>Nur <strong>einen Anschluss</strong> ans öffentliche Netz haben</li>
                  </ul>
                  <p className="pt-3 text-gray-600 italic">
                    Quellen/Links: siehe Referenzen am Ende der Seite.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    Wie es funktioniert
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-grid-green mb-2">✓ Vorteile</h4>
                      <ul className="space-y-2 text-xs">
                        <li>• <strong>Keine Netznutzungsgebühren</strong> auf intern verbrauchten Strom</li>
                        <li>• <strong>Höhere Eigenverbrauchsquote</strong> durch Lastverteilung</li>
                        <li>• <strong>Attraktiver als Netzeinspeisung</strong> (Eigenverbrauchstarif &gt; Einspeisevergütung)</li>
                        <li>• <strong>Lokale Wertschöpfung</strong> bleibt in der Gemeinschaft</li>
                        <li>• <strong>Unabhängigkeit</strong> vom volatilen Strommarkt</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sihl-red mb-2">✗ Einschränkungen</h4>
                      <ul className="space-y-2 text-xs">
                        <li>• <strong>Räumliche Begrenzung</strong> (Grundstück/Areal)</li>
                        <li>• <strong>Komplexe Abrechnungsmodelle</strong> erforderlich</li>
                        <li>• <strong>Hohe Setup-Kosten</strong> für Metering &amp; Billing</li>
                        <li>• <strong>Rechtliche Unsicherheiten</strong> bei Mieterverhältnissen</li>
                        <li>• <strong>Netzbetreiber-Abhängigkeit</strong> für Zählerkonfiguration</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Das Energie-Trilemma */}
        <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-accent text-4xl mb-8 text-brand-black">Das Energie-Trilemma</h2>
            <p className="text-sm font-mono mb-8 text-gray-700">
              LEGs navigieren ein komplexes Spannungsfeld zwischen drei konkurrierenden Zielen:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-thermal-orange">
                <CardHeader>
                  <CardTitle className="text-lg text-thermal-orange">Solare Maximierung</CardTitle>
                </CardHeader>
                <CardContent className="text-xs font-mono space-y-2">
                  <p><strong>Ziel:</strong> Maximale Solarproduktion installieren und nutzen.</p>
                  <p><strong>Konflikt:</strong> Hohe Mittagsspitzen überlasten lokale Netze → Netzbetreiber können Einspeisebegrenzung fordern.</p>
                  <p className="text-sihl-red"><strong>Real-World:</strong> In der Praxis gelten oft Einspeise- oder Leistungsbegrenzungen (je nach Netzbetreiber).</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-compute-blue">
                <CardHeader>
                  <CardTitle className="text-lg text-compute-blue">Netz-Stabilität</CardTitle>
                </CardHeader>
                <CardContent className="text-xs font-mono space-y-2">
                  <p><strong>Ziel:</strong> Vermeidung von Überlastung und Netzausbau-Kosten.</p>
                  <p><strong>Konflikt:</strong> LEGs schaffen neue Lastspitzen (E-Mobilität, Wärmepumpen) → Transformatoren am Limit.</p>
                  <p className="text-sihl-red"><strong>Real-World:</strong> Netzbetreiber verlangen teure Netzertüchtigungen bei LEG-Erweiterung.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-grid-green">
                <CardHeader>
                  <CardTitle className="text-lg text-grid-green">Autonomie</CardTitle>
                </CardHeader>
                <CardContent className="text-xs font-mono space-y-2">
                  <p><strong>Ziel:</strong> Eigenständige Entscheidungen über Produktion, Verbrauch und Speicherung.</p>
                  <p><strong>Konflikt:</strong> Netzbetreiber behalten Hoheit über Anschlussbedingungen und Tarife.</p>
                  <p className="text-sihl-red"><strong>Real-World:</strong> LEGs sind faktisch "Prosumer im Gnadenstatus" des lokalen Netzbetreibers.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border-2 border-brand-black">
              <p className="text-sm font-mono text-brand-black">
                <strong>Die Wahrheit:</strong> Es gibt <em>kein</em> Gleichgewicht, das alle drei Ziele gleichzeitig erfüllt. LEGs müssen priorisieren, und diese Priorisierung wird oft vom Netzbetreiber vorgegeben, nicht von der Gemeinschaft selbst.
              </p>
            </div>
          </div>
        </section>

        {/* Forensische Analyse der Hürden */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-accent text-4xl mb-8 text-brand-black">Forensische Analyse: Wo es wirklich hakt</h2>

            <div className="space-y-6">
              <Card className="border-2 border-sihl-red">
                <CardHeader>
                  <CardTitle className="text-xl text-sihl-red">1. Regulatorische Unklarheiten</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-3">
                  <p><strong>Problem:</strong> Das EnG definiert LEGs, aber die <strong>Verordnung über die Eigenversorgung mit elektrischer Energie (VEVEE)</strong> lässt kritische Fragen offen:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-xs">
                    <li>Was genau ist ein "benachbartes Grundstück"? (Strassen erlaubt? Private Leitungen über fremdes Grundstück?)</li>
                    <li>Wie wird "Eigenverbrauch" definiert, wenn Speicher involviert sind?</li>
                    <li>Dürfen LEGs Strom <em>untereinander</em> handeln, oder nur "verbrauchen"?</li>
                  </ul>
                  <p className="pt-3 text-sihl-red"><strong>Konsequenz:</strong> Netzbetreiber interpretieren Regelungen <em>restriktiv</em>, im Zweifel gegen die LEG.</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-thermal-orange">
                <CardHeader>
                  <CardTitle className="text-xl text-thermal-orange">2. Metering & Billing Overhead</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-3">
                  <p><strong>Problem:</strong> LEGs brauchen <strong>intelligente Messsysteme</strong> (Smart Meters) für jede Teilnehmende + zentrale Steuerung.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-xs">
                    <li><strong>Setup-Kosten:</strong> CHF 500–2'000 pro Zähler + jährliche Abrechnungssoftware</li>
                    <li><strong>Betreiberpflicht:</strong> LEGs müssen einen <em>Messstellenbetreiber</em> beauftragen (oft der Netzbetreiber selbst → Interessenkonflikt)</li>
                    <li><strong>Datenschutz:</strong> 15-Minuten-Messdaten = sensible Verhaltensprofile</li>
                  </ul>
                  <p className="pt-3 text-thermal-orange"><strong>Konsequenz:</strong> LEGs unter ~10 Parteien sind oft <em>nicht rentabel</em>.</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-compute-blue">
                <CardHeader>
                  <CardTitle className="text-xl text-compute-blue">3. Soziale Koordination</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-3">
                  <p><strong>Problem:</strong> LEGs sind <em>keine rein technischen Systeme</em>. Sie sind soziale Organisationen.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-xs">
                    <li><strong>Governance:</strong> Wer entscheidet über Investitionen? (Mehrheitsprinzip? Veto-Rechte?)</li>
                    <li><strong>Fairness:</strong> Wie werden Kosten/Nutzen verteilt? (Pro-Kopf? Nach Verbrauch? Nach Dachfläche?)</li>
                    <li><strong>Konflikte:</strong> Was passiert, wenn ein Haushalt "unfair" viel Strom verbraucht?</li>
                    <li><strong>Exit-Szenarien:</strong> Was, wenn jemand aussteigen will? (Abfindung? Anteil am Solaranlage-Wert?)</li>
                  </ul>
                  <p className="pt-3 text-compute-blue"><strong>Konsequenz:</strong> Viele LEGs scheitern an <em>internen Konflikten</em>, nicht an Technik.</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-grid-green">
                <CardHeader>
                  <CardTitle className="text-xl text-grid-green">4. Netzbetreiber als Gatekeeper</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-3">
                  <p><strong>Problem:</strong> LEGs brauchen die <strong>Zustimmung des Netzbetreibers</strong> für:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-xs">
                    <li>Anschlussbewilligung und Zählerkonfiguration</li>
                    <li>Einspeiseverträge und Netznutzungstarife</li>
                    <li>Technische Anforderungen (Schutzkonzepte, Leistungsbegrenzung)</li>
                  </ul>
                  <p className="pt-3"><strong>Konflikt:</strong> Netzbetreiber verdienen an <em>Netznutzungsgebühren</em>. LEGs reduzieren diese Einnahmen.</p>
                  <p className="text-grid-green"><strong>Konsequenz:</strong> Netzbetreiber haben einen <em>strukturellen Anreiz</em>, LEGs restriktiv zu behandeln.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Was funktioniert trotzdem */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-accent text-4xl mb-8 text-brand-black">Was funktioniert trotzdem?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-grid-green">
                <CardHeader>
                  <CardTitle className="text-lg">Erfolgsmodell: Überbauungen</CardTitle>
                </CardHeader>
                <CardContent className="text-sm font-mono space-y-2">
                  <p><strong>Setup:</strong> Mehrfamilienhaus mit zentraler Solaranlage + Wärmepumpe</p>
                  <p><strong>Eigentümer:</strong> Eine Entität (Genossenschaft, Bauherr)</p>
                  <p><strong>Warum es klappt:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                    <li>Keine Governance-Konflikte (zentraler Owner)</li>
                    <li>Economies of Scale (viele Teilnehmende)</li>
                    <li>Professionelles Management</li>
                  </ul>
                  <p className="text-grid-green text-xs pt-2"><strong>Status:</strong> Bewährt, &gt;1000 LEGs in der Schweiz</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-thermal-orange">
                <CardHeader>
                  <CardTitle className="text-lg">Erfolgsmodell: Areale mit Ankerpunkt</CardTitle>
                </CardHeader>
                <CardContent className="text-sm font-mono space-y-2">
                  <p><strong>Setup:</strong> Gewerbeareal mit Produktionsbetrieb + angrenzende Wohnhäuser</p>
                  <p><strong>Eigentümer:</strong> Betrieb als Hauptverbraucher + kleinere Parteien</p>
                  <p><strong>Warum es klappt:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                    <li>Betrieb hat Taglast → gute Solarnutzung</li>
                    <li>Betrieb kann Investment tragen</li>
                    <li>Einfachere Governance (Betrieb führt)</li>
                  </ul>
                  <p className="text-thermal-orange text-xs pt-2"><strong>Status:</strong> Machbar, aber weniger verbreitet</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-brand-black">
              <CardHeader>
                <CardTitle className="text-xl">Was LEGs NICHT sind (trotz Marketing)</CardTitle>
              </CardHeader>
              <CardContent className="font-mono text-sm">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-sihl-red text-xl">✗</span>
                    <span><strong>Peer-to-Peer Energie-Marktplätze:</strong> Das EnG erlaubt keinen freien Handel zwischen LEG-Mitgliedern, nur kollektiven Eigenverbrauch.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sihl-red text-xl">✗</span>
                    <span><strong>Vollständige Autarkie:</strong> LEGs sind <em>immer</em> ans öffentliche Netz angeschlossen und auf dessen Regelungen angewiesen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sihl-red text-xl">✗</span>
                    <span><strong>Blockchain-basierte Abrechnung:</strong> Technisch möglich, rechtlich problematisch (Netzbetreiber muss Messungen anerkennen).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sihl-red text-xl">✗</span>
                    <span><strong>Quartier-übergreifende Netze:</strong> LEGs sind räumlich auf zusammenhängende Areale beschränkt.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sihlicon Hub als LEG-Enabler */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-accent text-4xl mb-8 text-brand-black">Sihlicon Hub als LEG-Enabler</h2>
            
            <Card className="border-2 border-thermal-orange mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-thermal-orange">Die Kernthese</CardTitle>
              </CardHeader>
              <CardContent className="font-mono text-sm space-y-4">
                <p>
                  <strong>Das Hauptproblem von LEGs:</strong> Solarproduktion und Haushaltsverbrauch sind zeitlich <em>nicht synchron</em>.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-xs">
                  <li><strong>Mittag:</strong> Solarüberschuss → niedrige Preise, oft Zwangseinspeisung</li>
                  <li><strong>Abend:</strong> Hoher Verbrauch → teurer Netzbezug</li>
                  <li><strong>Batteriespeicher:</strong> Lösen das Problem, aber: hohe Kosten (CHF 15'000+), begrenzte Zyklen, ineffizient bei Heizanwendungen</li>
                </ul>
                <p className="pt-3 text-thermal-orange">
                  <strong>Sihlicon Hub-Lösung:</strong> Wandle Solarüberschuss in <em>Compute + Wärme</em> um → beide sind direkt nutzbar oder speicherbar.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Lastausgleich</CardTitle>
                </CardHeader>
                <CardContent className="text-xs font-mono">
                  <p className="mb-2"><strong>Mechanismus:</strong></p>
                  <p>Immersion-Cooling-Server verbrauchen Solarüberschuss als flexible Last.</p>
                  <p className="mt-3 text-grid-green"><strong>Effekt:</strong> Höhere Eigenverbrauchsquote = weniger Netzgebühren</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Wärmespeicher</CardTitle>
                </CardHeader>
                <CardContent className="text-xs font-mono">
                  <p className="mb-2"><strong>Mechanismus:</strong></p>
                  <p>Server-Abwärme (45–55°C) geht in Warmwasser-Pufferspeicher.</p>
                  <p className="mt-3 text-grid-green"><strong>Effekt:</strong> Zeitliche Entkopplung von Produktion und Heizbedarf</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Zusatzerlös</CardTitle>
                </CardHeader>
                <CardContent className="text-xs font-mono">
                  <p className="mb-2"><strong>Mechanismus:</strong></p>
                  <p>Compute-Leistung wird am Markt verkauft (AI-Training, Rendering, etc.).</p>
                  <p className="mt-3 text-grid-green"><strong>Effekt:</strong> Zusätzliche Revenue-Quelle für LEG</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-compute-blue/10 to-thermal-orange/10 border-2 border-brand-black">
              <CardHeader>
                <CardTitle className="text-xl">Realistische Erwartung</CardTitle>
              </CardHeader>
              <CardContent className="font-mono text-sm space-y-3">
                <p>Ein Sihlicon Hub ist <strong>kein Wundermittel</strong>, sondern ein <strong>Optimierungstool</strong> für LEGs:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-xs">
                  <li><strong>Best Case:</strong> +20–30% Eigenverbrauchsquote, CHF 500–1500 jährlicher Compute-Erlös</li>
                  <li><strong>Voraussetzung:</strong> Solaranlage bereits vorhanden, Niedertemperatur-Heizsystem vorhanden</li>
                  <li><strong>Amortisation:</strong> 5–8 Jahre bei CHF 15'000–25'000 Investition</li>
                </ul>
                <p className="pt-3 text-brand-black">
                  <strong>Wichtig:</strong> Sihlicon Hubs lösen <em>nicht</em> die regulatorischen oder sozialen LEG-Probleme. Sie lösen nur das <em>technische</em> Lastausgleichsproblem.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Handlungspfade */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-accent text-4xl mb-8 text-brand-black">Handlungspfade: Was jetzt tun?</h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-grid-green">
                <CardHeader>
                  <CardTitle className="text-lg">Für bestehende LEGs</CardTitle>
                </CardHeader>
                <CardContent className="text-sm font-mono space-y-2">
                  <p><strong>1. Status-Check:</strong> Eigenverbrauchsquote messen (ist Optimierung nötig?)</p>
                  <p><strong>2. Low-Hanging Fruits:</strong> Wärmepumpen-Laufzeiten optimieren, E-Auto-Laden steuern</p>
                  <p><strong>3. Pilotprojekt:</strong> Sihlicon Hub als Test-Installation (1–2 kW Compute)</p>
                  <p><strong>4. Learnings dokumentieren:</strong> Open Source für andere LEGs</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-thermal-orange">
                <CardHeader>
                  <CardTitle className="text-lg">Für neue LEG-Gründungen</CardTitle>
                </CardHeader>
                <CardContent className="text-sm font-mono space-y-2">
                  <p><strong>1. Governance klären:</strong> <em>Vor</em> technischer Planung: wer entscheidet was?</p>
                  <p><strong>2. Netzbetreiber frühzeitig einbinden:</strong> Vorabklärung zu Anschlussbedingungen</p>
                  <p><strong>3. Professionelle Begleitung:</strong> Energieberaterinnen und Energieberater mit LEG-Erfahrung beauftragen</p>
                  <p><strong>4. Skalierbarkeit einplanen:</strong> System so bauen, dass Erweiterung möglich ist</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-compute-blue">
                <CardHeader>
                  <CardTitle className="text-lg">Für Politik & Regulierung</CardTitle>
                </CardHeader>
                <CardContent className="text-sm font-mono space-y-2">
                  <p><strong>1. VEVEE nachschärfen:</strong> Unklarheiten beseitigen (z.B. "benachbarte Grundstücke")</p>
                  <p><strong>2. Metering-Standards:</strong> Open-Source Smart-Meter-Protokolle vorschreiben</p>
                  <p><strong>3. Netzbetreiber-Anreize umkehren:</strong> Bonus für ermöglichte LEGs statt Straf</p>
                  <p><strong>4. Sandbox-Regime:</strong> Experimentierräume für innovative LEG-Modelle</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Abschliessende Wahrheit */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-brand-black bg-gradient-to-br from-gray-50 to-white">
              <CardHeader>
                <CardTitle className="text-3xl text-brand-black">Die abschliessende Wahrheit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="font-mono text-sm leading-relaxed space-y-4">
                  <p>
                    <strong className="text-thermal-orange">LEGs funktionieren</strong>, aber sie sind <em>kein Selbstläufer</em>.
                  </p>
                  
                  <p>
                    Das Schweizer Energiegesetz hat die <strong>rechtliche Basis</strong> geschaffen. Die Technologie (Solar, Speicher, Smart Meters) ist <strong>ausgereift</strong>. Die Wirtschaftlichkeit ist <strong>gegeben</strong>, zumindest für mittlere bis grosse Installationen.
                  </p>

                  <p className="text-brand-black">
                    <strong>Die eigentlichen Hürden sind:</strong>
                  </p>

                  <ul className="list-none space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-sihl-red font-bold">→</span>
                      <span><strong>Regulatorische Grauzonen</strong>, die Netzbetreibern Interpretationsspielraum geben</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sihl-red font-bold">→</span>
                      <span><strong>Strukturelle Interessenkonflikte</strong> zwischen LEGs und Netzbetreibern</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sihl-red font-bold">→</span>
                      <span><strong>Soziale Koordinationskosten</strong>, die unterschätzt werden</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sihl-red font-bold">→</span>
                      <span><strong>Fehlende Standards</strong> für Metering, Billing und Governance</span>
                    </li>
                  </ul>

                  <p className="pt-4 text-grid-green">
                    <strong>Sihlicon Hubs können das technische Problem lösen</strong> (Lastausgleich, Wärmenutzung). Aber sie können nicht die <em>regulatorischen</em> und <em>sozialen</em> Probleme lösen.
                  </p>

                  <p className="text-brand-black pt-4">
                    <strong>Was es jetzt braucht:</strong>
                  </p>

                  <div className="bg-thermal-orange/10 p-4 rounded-lg border-l-4 border-thermal-orange">
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li><strong>Open-Source LEG-Frameworks</strong> (Musterverträge, Governance-Templates, Billing-Software)</li>
                      <li><strong>Evidenz-basierte Policy-Reform</strong> (VEVEE-Revision basierend auf Real-World-Daten)</li>
                      <li><strong>Pilotprojekte mit voller Transparenz</strong> (Kosten, Konflikte, Learnings öffentlich machen)</li>
                      <li><strong>Community-Building</strong> (LEG-Betreiber vernetzen, Best Practices teilen)</li>
                    </ol>
                  </div>

                  <p className="pt-6 text-lg text-brand-black font-bold">
                    LEGs sind kein Hype. Sie sind eine <em>reale</em>, <em>funktionierende</em> Technologie. Aber ihr Potenzial wird nur dann entfaltet, wenn wir die nicht-technischen Barrieren genauso ernst nehmen wie die technischen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quellen */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-accent text-4xl mb-8 text-brand-black">Quellen & Weiterführendes</h2>
            
            <Card>
              <CardContent className="font-mono text-xs space-y-4 pt-6">
                <div>
                  <h4 className="font-bold mb-2">Rechtliche Grundlagen</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Energiegesetz (EnG), SR 734.0 – <a href="https://www.fedlex.admin.ch/eli/cc/2017/763/de" className="text-compute-blue underline" target="_blank" rel="noopener noreferrer">fedlex.admin.ch</a></li>
                    <li>Verordnung über die Eigenversorgung mit elektrischer Energie (VEVEE) – <a href="https://www.fedlex.admin.ch/eli/cc/2017/765/de" className="text-compute-blue underline" target="_blank" rel="noopener noreferrer">fedlex.admin.ch</a></li>
                    <li>Energieverordnung (EnV), SR 730.01 – <a href="https://www.fedlex.admin.ch/eli/cc/2017/762/de" className="text-compute-blue underline" target="_blank" rel="noopener noreferrer">fedlex.admin.ch</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Behördliche Publikationen</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>BFE: "Eigenverbrauch von Solarstrom – Merkblatt" (2024) – <a href="https://www.bfe.admin.ch" className="text-compute-blue underline" target="_blank" rel="noopener noreferrer">bfe.admin.ch</a></li>
                    <li>ElCom: Jahresbericht Elektrizitätsmarkt 2025 – <a href="https://www.elcom.admin.ch" className="text-compute-blue underline" target="_blank" rel="noopener noreferrer">elcom.admin.ch</a></li>
                    <li>VSE: "Lokale Elektrizitätsgemeinschaften – Praxisleitfaden" (2023) – <a href="https://www.strom.ch" className="text-compute-blue underline" target="_blank" rel="noopener noreferrer">strom.ch</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Wissenschaftliche Literatur</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>ETHZ Energy Science Center: "Prosumer in Swiss Energy Markets" (2024)</li>
                    <li>HSLU Technik & Architektur: "Thermische Speicher für ZEV-Anwendungen" (2023)</li>
                    <li>Empa: "Dezentrale Energiesysteme und Netzintegration" (2024)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Praxisbeispiele</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Baden LEG (seit 2019) – Pionier-LEG im Kanton Aargau</li>
                    <li>Kraftwerk1 Zürich (seit 2017) – Genossenschaftsmodell mit &gt;2000 Mitgliedern</li>
                    <li>Energiegenossenschaft Freiamt (seit 2020) – Ländliche LEG-Struktur</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-accent text-4xl mb-6 text-brand-black">Werde Teil der Lösung</h2>
            <p className="text-lg font-mono mb-8 text-gray-700">
              Am sihlhack bauen wir die Tools, die LEGs wirklich brauchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/challenges" variant="primary" size="lg">
                Die Challenges ansehen
              </ButtonLink>
              <ButtonLink href="/register" variant="ghost" size="lg">
                Platz sichern
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
