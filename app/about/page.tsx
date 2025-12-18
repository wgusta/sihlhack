import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HACKATHON_ROLES, IDEAL_TEAM_COMPOSITION } from '@/lib/roles'

export const metadata = {
  title: 'Das Konzept | sihlhack',
  description: 'Erfahre mehr über sihlhack, den ersten teilnehmerorientierten, rollenbasierten Hackathon der Schweiz.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-sm text-insight-cyan uppercase tracking-widest">
              Rollenbasierter Hackathon
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
              Das Konzept
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              sihlhack ist der erste teilnehmerorientierte, rollenbasierte Hackathon der Schweiz.
              Jede Rolle zählt. Jedes Teammitglied trägt zum Erfolg bei.
            </p>
          </div>
        </section>

        {/* Role-Based Hackathon Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-sihl-red uppercase tracking-widest">
                Nicht nur für Coder
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                Jede Rolle zählt
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Erfolgreiche Teams bestehen aus verschiedenen Expertisen.
                Historiker arbeiten mit ML-Engineers, Designer mit Data Scientists.
              </p>
            </div>

            {/* Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {HACKATHON_ROLES.map((role) => (
                <div
                  key={role.id}
                  className="p-4 rounded-xl border border-gray-200 hover:border-sihl-red/50 hover:shadow-lg transition-all group"
                >
                  <div className="text-3xl mb-3">{role.icon}</div>
                  <h3 className="font-display font-semibold text-brand-black group-hover:text-sihl-red transition-colors">
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
                          ? 'bg-fund-green/20 border border-fund-green/30'
                          : item.priority === 'recommended'
                          ? 'bg-industrial-gold/20 border border-industrial-gold/30'
                          : 'bg-white/10 border border-white/20'
                      }`}
                    >
                      <div className="text-2xl mb-1">{role.icon}</div>
                      <div className="font-mono text-xs text-white">{role.nameDE}</div>
                      <div className="font-mono text-xs text-gray-400 mt-1">{item.count}×</div>
                      <div className={`text-[10px] font-mono mt-1 ${
                        item.priority === 'essential' ? 'text-fund-green' :
                        item.priority === 'recommended' ? 'text-industrial-gold' :
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
          </div>
        </section>

        {/* Inverted model */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-sihl-red uppercase tracking-widest">Umgekehrtes Modell</span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Warum anders?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-historic-sepia">
                    Traditionelle Hackathons
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-sihl-red">✗</span>
                      <span>Unternehmen bezahlen und bestimmen die Themen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sihl-red">✗</span>
                      <span>Projekte dienen primär den Sponsoren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sihl-red">✗</span>
                      <span>Intransparente Budgets und Preisgelder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sihl-red">✗</span>
                      <span>Nur Programmierer willkommen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="historic" className="border-2 border-sihl-red">
                <CardHeader>
                  <CardTitle className="text-lg text-sihl-red">
                    sihlhack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm font-mono text-brand-black">
                    <li className="flex items-start gap-2">
                      <span className="text-fund-green">✓</span>
                      <span>Teilnehmende finanzieren und entscheiden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-fund-green">✓</span>
                      <span>Projekte entstehen aus der Community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-fund-green">✓</span>
                      <span>100% transparente Finanzen in Echtzeit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-fund-green">✓</span>
                      <span>Alle Rollen gleichwertig und essentiell</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-brand-black text-center mb-12">
              So funktioniert es
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Anmelden mit deiner Rolle',
                  description: 'Wähle deine Hauptrolle und Skills bei der Anmeldung. So finden wir passende Teammitglieder für dich.',
                },
                {
                  step: '2',
                  title: 'Team finden oder bilden',
                  description: 'Bringe dein Team mit oder nutze unser Matching-System. Wir helfen, diverse Teams mit allen nötigen Rollen zusammenzustellen.',
                },
                {
                  step: '3',
                  title: 'Projekte vorschlagen und abstimmen',
                  description: 'Reiche Projektideen ein und stimme für deine Favoriten. Die beliebtesten Projekte werden am Event bearbeitet.',
                },
                {
                  step: '4',
                  title: 'Hacken und gewinnen',
                  description: 'Am Event arbeitet ihr als Team an eurem Projekt. Die besten Lösungen teilen sich den gesamten Preisgeld-Pool.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-sihl-red rounded-full flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-brand-black">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-historic-sepia font-mono">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Privacy and AI Processing */}
        <section id="datenschutz" className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-sihl-red uppercase tracking-widest">
                Datenschutz & KI-Verarbeitung
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Local-First AI Ansatz
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Historische Dokumente sind sensibel. Wir verarbeiten sie mit Respekt und klaren Regeln.
              </p>
            </div>

            {/* Three-tier approach */}
            <div className="space-y-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-fund-green/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-brand-black">
                        Stufe 1: Lokale Verarbeitung (Standard)
                      </CardTitle>
                      <p className="text-sm font-mono text-historic-sepia mt-2">
                        Alle Daten werden primär mit lokalen KI-Modellen verarbeitet.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm font-mono text-historic-sepia">
                    <div className="flex items-start gap-2">
                      <span className="text-fund-green mt-0.5">✓</span>
                      <span><strong>Offline-fähige LLMs:</strong> Llama, Mistral und andere Open-Source-Modelle laufen direkt auf unserer Infrastruktur</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-fund-green mt-0.5">✓</span>
                      <span><strong>Keine externen Server:</strong> Daten verlassen die Hackathon-Infrastruktur nicht</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-fund-green mt-0.5">✓</span>
                      <span><strong>OCR & Computer Vision:</strong> Tesseract, PaddleOCR und lokale CV-Modelle für Dokumentenextraktion</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-fund-green mt-0.5">✓</span>
                      <span><strong>Datenbanken lokal:</strong> Alle strukturierten Daten bleiben im Event-Netzwerk</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-refund-amber/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">☁️</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-brand-black">
                        Stufe 2: Cloud-KI (Nur mit Zustimmung)
                      </CardTitle>
                      <p className="text-sm font-mono text-historic-sepia mt-2">
                        Falls lokale Modelle nicht ausreichen, nutzen wir Cloud-KI.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm font-mono text-historic-sepia">
                    <div className="flex items-start gap-2">
                      <span className="text-refund-amber mt-0.5">!</span>
                      <span><strong>Voraussetzung:</strong> Schriftliche Einwilligung der Datenbereitsteller erforderlich</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-refund-amber mt-0.5">!</span>
                      <span><strong>Transparenz:</strong> Welche Daten, welches Modell (Anthropic Claude, OpenAI GPT, Google Gemini), wann und warum</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-refund-amber mt-0.5">!</span>
                      <span><strong>Dokumentation:</strong> Jede Cloud-Verarbeitung wird protokolliert und ist nachvollziehbar</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-refund-amber mt-0.5">!</span>
                      <span><strong>Keine Speicherung:</strong> Provider dürfen Daten nicht für Training verwenden (Zero Data Retention)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="historic" className="border-2 border-sihl-red">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sihl-red/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-sihl-red">
                        Stufe 3: Geschützte Daten (Keine Cloud-Verarbeitung)
                      </CardTitle>
                      <p className="text-sm font-mono text-brand-black mt-2">
                        Besonders sensible Dokumente bleiben vollständig offline.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm font-mono text-brand-black">
                    <div className="flex items-start gap-2">
                      <span className="text-sihl-red mt-0.5">✗</span>
                      <span><strong>Kein Cloud-Zugriff:</strong> Personenbezogene Daten, Lohndokumente, interne Geschäftsunterlagen</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sihl-red mt-0.5">✗</span>
                      <span><strong>Nur lokale Modelle:</strong> Verarbeitung ausschließlich mit eigener Infrastruktur</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sihl-red mt-0.5">✗</span>
                      <span><strong>Pseudonymisierung:</strong> Namen und persönliche Angaben werden vor Verarbeitung entfernt</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sihl-red mt-0.5">✗</span>
                      <span><strong>Luftspalt-Prinzip:</strong> Diese Systeme haben keine Internetverbindung</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why this matters */}
            <div className="bg-brand-black rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Warum dieser Ansatz?
              </h3>
              <div className="space-y-3 font-mono text-sm text-gray-300">
                <p>
                  <strong className="text-white">Respekt vor historischen Quellen:</strong> Archive enthalten oft sensible Informationen über Menschen, Geschäftsgeheimnisse und kulturelles Erbe. Diese Daten verdienen besonderen Schutz.
                </p>
                <p>
                  <strong className="text-white">Kontrolle für Datenbereitsteller:</strong> Unternehmen behalten die Kontrolle. Sie entscheiden, ob und wann Cloud-KI eingesetzt wird.
                </p>
                <p>
                  <strong className="text-white">Technische Machbarkeit:</strong> Moderne Open-Source-LLMs sind leistungsfähig genug für die meisten Aufgaben. Cloud-KI ist die Ausnahme, nicht die Regel.
                </p>
                <p>
                  <strong className="text-white">Vertrauen schaffen:</strong> Transparenz über KI-Nutzung schafft Vertrauen bei Datenbereitstellern und ermöglicht überhaupt erst den Zugang zu wertvollen Archiven.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-brand-black text-center mb-12">
              Häufige Fragen
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Brauche ich Programmierkenntnisse?',
                  a: 'Nein. sihlhack ist rollenbasiert. Wir brauchen Historiker, Designer, Projektmanager genauso wie Entwickler. Wähle bei der Anmeldung deine Rolle und finde ein Team, das deine Stärken braucht.',
                },
                {
                  q: 'Was ist, wenn ich kein Team habe?',
                  a: 'Kein Problem. Bei der Anmeldung gibst du an, dass du ein Team suchst. Wir zeigen dir andere Teilnehmende mit komplementären Rollen und Skills. Vor dem Event helfen wir aktiv beim Team-Matching.',
                },
                {
                  q: 'Was passiert, wenn nicht genug Teilnehmende zusammenkommen?',
                  a: 'Falls die Mindestteilnehmerzahl bis zur Deadline nicht erreicht wird, erhältst du automatisch eine vollständige Rückerstattung deiner Gebühr. Kein Risiko für dich.',
                },
                {
                  q: 'Wer bestimmt, welche Projekte umgesetzt werden?',
                  a: 'Du und alle anderen Teilnehmenden. Jeder kann Projekte vorschlagen und für Favoriten stimmen. Die Projekte mit den meisten Stimmen werden am Event bearbeitet.',
                },
                {
                  q: 'Woher kommen die historischen Daten?',
                  a: 'Unternehmen aus dem Sihltal stellen historische Dokumente, Fotografien, Geschäftsbücher und Baupläne zur Verfügung. Sie werden nicht bezahlt und haben keinen Einfluss auf Projekte.',
                },
                {
                  q: 'Wie werden die Gewinner bestimmt?',
                  a: 'Eine Jury bewertet die Projektresultate nach Kriterien wie Innovation, technische Umsetzung und Erkenntnisgewinn. Die Kriterien werden vor dem Event veröffentlicht.',
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
        <section className="py-16 bg-sihl-red">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Welche Rolle spielst du?
            </h2>
            <p className="mt-4 text-white/80 font-mono max-w-xl mx-auto">
              Wähle deine Rolle und werde Teil des ersten teilnehmerorientierten Hackathons der Schweiz.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/register" variant="secondary" size="lg">
                Jetzt anmelden
              </ButtonLink>
              <ButtonLink
                href="/proposals"
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Projekte ansehen
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
