import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HACKATHON_ROLES, IDEAL_TEAM_COMPOSITION } from '@/lib/roles'

export const metadata = {
  title: 'Das Konzept | sihlhack',
  description: 'Erfahre mehr über sihlhack: Der Hackathon für dezentrale Energieinfrastruktur in der Schweiz.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
              Digital Hearth Infrastructure
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
              Das Konzept
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              sihlhack entwickelt Open Source Hardware und Software für die dezentrale Energiezukunft der Schweiz.
              Server die heizen. Solar das rechnet. LEGs die profitieren.
            </p>
          </div>
        </section>

        {/* The Vision */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Die Vision
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                Digital Hearth
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                100% der Elektrizität in einem Server wird zu Wärme. Warum diese Wärme verschwenden?
              </p>
            </div>

            {/* Problem → Solution */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-red-500/30 bg-red-900/5">
                <CardHeader>
                  <CardTitle className="text-lg text-red-500 flex items-center gap-2">
                    <span>🔥</span> Das Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• Datacenter verschwenden Abwärme</li>
                    <li>• Häuser verbrennen fossile Energie</li>
                    <li>• Solarstrom wird zu Spitzenzeiten verschenkt</li>
                    <li>• Compute-Power ist zentral und teuer</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex items-center justify-center">
                <div className="text-4xl text-thermal-orange">→</div>
              </div>

              <Card className="border-grid-green/30 bg-grid-green/5">
                <CardHeader>
                  <CardTitle className="text-lg text-grid-green flex items-center gap-2">
                    <span>🏠</span> Die Lösung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• Server heizen Gebäude (99% Effizienz)</li>
                    <li>• Solarüberschuss powert Compute</li>
                    <li>• LEGs profitieren von Wärme + Compute</li>
                    <li>• Dezentrale, resiliente Infrastruktur</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Physics */}
            <div className="bg-gradient-to-r from-thermal-orange/20 to-compute-blue/20 rounded-2xl p-8 border border-white/10">
              <h3 className="font-display text-xl font-bold text-brand-black text-center mb-6">
                Die Physik dahinter
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="font-mono text-3xl font-bold text-solar-yellow">100%</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">der Elektrizität wird zu Wärme</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-thermal-orange">60°C</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">Wassertemperatur aus Immersion</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-compute-blue">99%</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">Wärmerückgewinnung möglich</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-grid-green">0 dB</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">Keine Lüfter, kein Lärm</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role-Based Hackathon Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Nicht nur für Coder
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                Jede Rolle zählt
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Erfolgreiche Teams brauchen verschiedene Expertisen.
                Hardware-Hacker arbeiten mit Grid-Devs, Rechtsexperten mit Designern.
              </p>
            </div>

            {/* Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {HACKATHON_ROLES.map((role) => (
                <div
                  key={role.id}
                  className="p-4 rounded-xl border border-gray-200 hover:border-thermal-orange/50 hover:shadow-lg transition-all group"
                >
                  <div className="text-3xl mb-3">{role.icon}</div>
                  <h3 className="font-display font-semibold text-brand-black group-hover:text-thermal-orange transition-colors">
                    {role.nameDE}
                  </h3>
                  <p className="text-sm font-mono text-historic-sepia mt-2">
                    {role.descriptionDE}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {role.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Ideal Team Composition */}
            <div className="bg-brand-black rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-white text-center mb-6">
                Ideale Teamzusammensetzung (4–6 Personen)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {IDEAL_TEAM_COMPOSITION.map((item) => {
                  const role = HACKATHON_ROLES.find(r => r.id === item.role)
                  if (!role) return null
                  return (
                    <div
                      key={item.role}
                      className={`p-3 rounded-lg text-center ${
                        item.priority === 'essential'
                          ? 'bg-grid-green/20 border border-grid-green/30'
                          : item.priority === 'recommended'
                          ? 'bg-thermal-orange/20 border border-thermal-orange/30'
                          : 'bg-white/10 border border-white/20'
                      }`}
                    >
                      <div className="text-2xl mb-1">{role.icon}</div>
                      <div className="font-mono text-xs text-white">{role.nameDE}</div>
                      <div className="font-mono text-xs text-gray-400 mt-1">{item.count}×</div>
                      <div className={`text-[10px] font-mono mt-1 ${
                        item.priority === 'essential' ? 'text-grid-green' :
                        item.priority === 'recommended' ? 'text-thermal-orange' :
                        'text-gray-500'
                      }`}>
                        {item.priority === 'essential' ? 'Essentiell' :
                         item.priority === 'recommended' ? 'Empfohlen' : 'Optional'}
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="text-center text-gray-400 font-mono text-xs mt-6">
                Kein vollständiges Team? Wir helfen dir, passende Teammitglieder zu finden.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <ButtonLink href="/challenges" variant="primary" size="sm">
                Alle Challenges ansehen →
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* LEG Legal Framework */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Rechtlicher Rahmen
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                LEG-Gründung als Challenge
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Das Schweizer StromVG Art. 18 ermöglicht Lokale Elektrizitätsgemeinschaften.
                Wir entwickeln die Templates für die Gründung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>⚖️</span> Was eine LEG ist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Zusammenschluss zum Eigenverbrauch (ZEV) auf Steroiden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Kann das öffentliche Netz nutzen (StromVG Art. 18)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Typisch als Genossenschaft organisiert</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Perfekt für Quartiere und Mehrfamilienhäuser</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>📋</span> Was wir entwickeln
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>Musterstatuten für AG und ZH</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>Teilnehmerverträge (Producer/Consumer)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>Behörden-Checklisten und Formulare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>FAQ für zukünftige LEG-Gründer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-brand-black rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Warum LEG + Compute?
              </h3>
              <div className="space-y-3 font-mono text-sm text-gray-300">
                <p>
                  <strong className="text-white">Doppelte Monetarisierung:</strong> Die LEG verkauft nicht nur Strom, sondern auch Compute-Zeit und Wärme. Drei Revenue-Streams statt einem.
                </p>
                <p>
                  <strong className="text-white">Netzstabilität:</strong> Server können bei Überproduktion hochfahren und bei Engpässen drosseln. Perfekt für SDL-Integration mit Swissgrid.
                </p>
                <p>
                  <strong className="text-white">Lokale Wertschöpfung:</strong> Die Abwärme heizt Gebäude in der Nachbarschaft. Geld bleibt in der Gemeinschaft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Alles Open Source
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Replizierbar by Design
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Jedes Teil des Sihlicon Stack wird unter Apache 2.0 veröffentlicht.
                Hardware-Schematics, Software, Dokumentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="text-3xl mb-2">🔧</div>
                  <CardTitle className="text-lg text-brand-black">Hardware</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• CAD-Dateien für Immersionstank</li>
                    <li>• Stücklisten (BOM) mit Bezugsquellen</li>
                    <li>• Bauanleitungen Schritt für Schritt</li>
                    <li>• Temperatur-Monitoring-Schaltpläne</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-3xl mb-2">💻</div>
                  <CardTitle className="text-lg text-brand-black">Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• Grid-OS Scheduling-Algorithmen</li>
                    <li>• Solar Inverter API-Integration</li>
                    <li>• Dashboard-Komponenten</li>
                    <li>• Docker Compose für Deployment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-3xl mb-2">📖</div>
                  <CardTitle className="text-lg text-brand-black">Dokumentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• LEG-Gründungsvorlagen</li>
                    <li>• Thermische Berechnungen</li>
                    <li>• API-Dokumentation</li>
                    <li>• Troubleshooting Guides</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="font-mono text-sm text-historic-sepia">
                Lizenz: <span className="text-brand-black font-semibold">Apache 2.0</span> ·
                Jeder kann den Stack nutzen, anpassen und weitergeben.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Framework: Open Source under Swiss Law */}
        <section className="py-16 bg-brand-black text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Rechtliches Framework
              </span>
              <h2 className="font-display text-3xl font-bold text-white mt-2">
                Open Source unter Schweizer Recht
              </h2>
              <p className="mt-4 text-gray-300 font-mono max-w-2xl mx-auto">
                Wie wir sicherstellen, dass das Open-Source-Modell rechtlich sauber funktioniert.
              </p>
            </div>

            <div className="space-y-8">
              {/* IP Rights */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-thermal-orange mb-4 flex items-center gap-3">
                  <span>⚖️</span>
                  Geistiges Eigentum (IP-Rechte)
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    <strong className="text-white">Grundprinzip:</strong> Alle Teilnehmer behalten die vollen Rechte an ihren Beiträgen.
                  </p>
                  <p>
                    Gemäss <strong className="text-white">Art. 2 URG</strong> (Schweizer Urheberrechtsgesetz) entstehen Urheberrechte automatisch bei der Schöpfung eines Werks. 
                    Du als Entwickler bist und bleibst der <strong className="text-white">Urheber</strong> deines Codes.
                  </p>
                  <p>
                    Durch die Veröffentlichung unter <strong className="text-thermal-orange">Apache 2.0</strong> erteilst du eine <strong className="text-white">nicht-exklusive, weltweite, gebührenfreie Lizenz</strong> – 
                    du gibst also Nutzungsrechte weiter, ohne deine eigenen Rechte zu verlieren.
                  </p>
                  <p className="pt-2 border-t border-white/10 text-xs text-gray-400">
                    ℹ️ Das bedeutet: Du kannst deinen Code später auch für andere Projekte nutzen, verkaufen oder anders lizenzieren.
                  </p>
                </div>
              </div>

              {/* Apache 2.0 License */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-compute-blue mb-4 flex items-center gap-3">
                  <span>📜</span>
                  Warum Apache 2.0?
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    Die <strong className="text-white">Apache 2.0 Lizenz</strong> ist eine der meistgenutzten Open-Source-Lizenzen weltweit und wurde speziell für die Schweiz durch 
                    <strong className="text-white"> Art. 19 URG</strong> (Bearbeitung und Änderung) sowie 
                    <strong className="text-white"> Art. 62 OR</strong> (Vertragsfreiheit) abgesichert.
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span><strong className="text-white">Patent-Grant:</strong> Schützt Nutzer vor Patent-Klagen (wichtig bei Hardware)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span><strong className="text-white">Disclaimer of Warranty:</strong> Haftungsausschluss nach Schweizer OR (Art. 100 OR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span><strong className="text-white">Commercial Use:</strong> LEGs dürfen damit kommerziell arbeiten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span><strong className="text-white">Modification:</strong> Jeder darf den Code anpassen und weiterentwickeln</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contributor Agreement */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-sihl-red mb-4 flex items-center gap-3">
                  <span>✍️</span>
                  Contributor Agreement
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    Beim Einreichen deines Codes bestätigst du:
                  </p>
                  <ol className="space-y-2 pl-4 list-decimal">
                    <li><strong className="text-white">Originalität:</strong> Du hast den Code selbst geschrieben oder hast die Rechte daran.</li>
                    <li><strong className="text-white">Lizenzierung:</strong> Du stimmst der Veröffentlichung unter Apache 2.0 zu.</li>
                    <li><strong className="text-white">Keine Drittrechte:</strong> Der Code verletzt keine Rechte Dritter (z.B. keine Copy-Paste von proprietärem Code).</li>
                  </ol>
                  <p className="pt-2 border-t border-white/10">
                    Dies entspricht dem Standard-CLA (Contributor License Agreement), wie er auch bei Linux, Kubernetes und anderen Open-Source-Projekten verwendet wird.
                  </p>
                </div>
              </div>

              {/* Swiss Law Compliance */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-industrial-gold mb-4 flex items-center gap-3">
                  <span>🇨🇭</span>
                  Schweizer Rechtskonformität
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    <strong className="text-white">Anwendbares Recht:</strong> Alle Vereinbarungen unterliegen Schweizer Recht (Art. 116-120 IPRG).
                  </p>
                  <p>
                    <strong className="text-white">Gerichtsstand:</strong> Bei Streitigkeiten ist das Gericht am Sitz des Veranstalters zuständig (Zürich/Aargau).
                  </p>
                  <p>
                    <strong className="text-white">Haftungsausschluss:</strong> Software wird "AS IS" bereitgestellt (Art. 100 OR – Wegbedingung der Haftung).
                    Dies ist in der Schweiz rechtlich zulässig, sofern keine Absicht oder grobe Fahrlässigkeit vorliegt.
                  </p>
                  <p>
                    <strong className="text-white">Datenschutz:</strong> Alle personenbezogenen Daten werden gemäss 
                    <strong className="text-thermal-orange"> DSG (Datenschutzgesetz)</strong> und 
                    <strong className="text-thermal-orange"> DSGVO</strong> (wo anwendbar) verarbeitet.
                  </p>
                </div>
              </div>

              {/* What This Means for You */}
              <div className="bg-gradient-to-r from-thermal-orange/20 to-compute-blue/20 border border-thermal-orange/30 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>💡</span>
                  Was das für dich bedeutet
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Du behältst alle Rechte</p>
                    <p className="text-gray-300 text-xs">Dein Code gehört dir, auch nach dem Hackathon.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Kommerzielle Nutzung erlaubt</p>
                    <p className="text-gray-300 text-xs">Du darfst deine Arbeit später verkaufen oder damit Geld verdienen.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Keine Haftung für Fehler</p>
                    <p className="text-gray-300 text-xs">Rechtlich abgesichert durch Apache 2.0 Disclaimer.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Community profitiert</p>
                    <p className="text-gray-300 text-xs">Andere LEGs können deine Lösung nachbauen.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-mono text-sm text-gray-400">
                📧 Rechtliche Fragen? Schreib uns an{' '}
                <a href="mailto:legal@sihlhack.ch" className="text-thermal-orange hover:underline">
                  legal@sihlhack.ch
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-off-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-brand-black text-center mb-12">
              Häufige Fragen
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Brauche ich Programmierkenntnisse?',
                  a: 'Nicht unbedingt. Wir brauchen Hardware-Engineers, Rechtsexperten, Designer genauso wie Software-Devs. Wähle bei der Anmeldung deine Rolle.',
                },
                {
                  q: 'Was passiert mit dem Prototyp nach dem Hackathon?',
                  a: 'Der beste Prototyp wird in einer echten LEG (Baden, AG) deployed. Das ist kein Demo, sondern echte Infrastruktur die weiterläuft.',
                },
                {
                  q: 'Wer stellt die Hardware?',
                  a: 'Wir suchen aktuell noch Sponsoren für Hardware (Server, GPUs, Immersion-Cooling-Equipment). Du bringst nur Laptop und Skills mit.',
                },
                {
                  q: 'Was kostet die Teilnahme?',
                  a: 'CHF 120 pro Person. Der gesamte Überschuss nach Betriebskosten wird als Preisgeld (50/30/20) ausgeschüttet. Vollständige Rückerstattung bei Absage.',
                },
                {
                  q: 'Was ist eine LEG?',
                  a: 'Eine Lokale Elektrizitätsgemeinschaft ist ein rechtlicher Zusammenschluss nach StromVG Art. 18. Ähnlich wie ein ZEV, aber kann das öffentliche Netz nutzen.',
                },
                {
                  q: 'Muss ich beim Hackathon übernachten?',
                  a: 'Nein, es ist ein Tages-Event (Fr Abend bis So Nachmittag). Du kannst pendeln oder wir helfen bei der Organisation von Unterkünften.',
                },
                {
                  q: 'Was passiert, wenn mein Code später in einem kommerziellen Produkt verwendet wird?',
                  a: 'Apache 2.0 erlaubt kommerzielle Nutzung – das ist gewollt. LEGs dürfen (und sollen) damit Geld verdienen. Du behältst aber alle Rechte an deinem Original-Code und kannst ihn auch selbst kommerziell nutzen.',
                },
                {
                  q: 'Hafte ich, wenn mein Code einen Fehler hat und etwas kaputt geht?',
                  a: 'Nein. Die Apache 2.0 Lizenz enthält einen Haftungsausschluss ("AS IS" - Software wird ohne Gewährleistung bereitgestellt), der nach Schweizer Recht (Art. 100 OR) rechtlich wirksam ist. Du haftest nur bei Vorsatz oder grober Fahrlässigkeit.',
                },
                {
                  q: 'Kann ich meinen Code später unter einer anderen Lizenz verwenden?',
                  a: 'Ja! Du behältst alle Urheberrechte. Du kannst denselben Code parallel unter einer anderen Lizenz (z.B. proprietär) für andere Projekte nutzen. Dies nennt sich "Dual Licensing" und ist völlig legal.',
                },
                {
                  q: 'Was ist, wenn ich Code von Stack Overflow oder GitHub kopiere?',
                  a: 'Du darfst nur Code einreichen, für den du die Rechte hast. Stack Overflow Code ist meist CC BY-SA lizenziert (kompatibel mit Apache 2.0). Bei GitHub-Code: Prüfe die Lizenz. Im Zweifelsfall: Frag uns vorher.',
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-display font-semibold text-brand-black mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm font-mono text-historic-sepia">
                      {item.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-thermal-orange to-compute-blue">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Bau mit uns die dezentrale Energiezukunft
            </h2>
            <p className="mt-4 text-white/90 font-mono max-w-xl mx-auto">
              Hardware-Hacker, Software-Devs, Thermodynamik-Nerds, Rechtsexperten: Wir brauchen euch alle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/register" variant="secondary" size="lg">
                Jetzt anmelden
              </ButtonLink>
              <ButtonLink
                href="https://github.com/sihlicon"
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                GitHub ansehen
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
