import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'

export const metadata = {
  title: 'Über sihlhack | Das Konzept',
  description: 'Erfahre mehr über sihlhack, den ersten teilnehmerorientierten Hackathon der Schweiz.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold">
              Das Konzept
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              sihlhack ist der erste teilnehmerorientierte Hackathon der Schweiz.
              Historische Industriedaten aus dem Sihltal digitalisieren, analysieren und neue Erkenntnisse gewinnen.
            </p>
          </div>
        </section>

        {/* Inverted model */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="accent-text text-sihl-red text-lg">Umgekehrtes Modell</span>
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
                      <span>Teilnehmende führen vorgegebene Aufgaben aus</span>
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
                      <span>Teilnehmende schlagen vor und stimmen ab</span>
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
                  title: 'Anmelden und bezahlen',
                  description: 'Sichere dir deinen Platz mit der Teilnahmegebühr von CHF 480. Der gesamte Überschuss fliesst ins Preisgeld.',
                },
                {
                  step: '2',
                  title: 'Projekte vorschlagen',
                  description: 'Reiche deine Projektidee ein. Welche historischen Daten möchtest du analysieren? Welche Erkenntnisse erwartest du?',
                },
                {
                  step: '3',
                  title: 'Abstimmen',
                  description: 'Alle Teilnehmenden stimmen für ihre Lieblingsprojekte. Die beliebtesten werden am Event umgesetzt.',
                },
                {
                  step: '4',
                  title: 'Hacken und gewinnen',
                  description: 'Am Event arbeitest du in Teams an den gewählten Projekten. Die besten Lösungen teilen sich das Preisgeld.',
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

        {/* FAQ */}
        <section id="faq" className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-brand-black text-center mb-12">
              Häufige Fragen
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Was passiert, wenn nicht genug Teilnehmende zusammenkommen?',
                  a: 'Falls die Mindestteilnehmerzahl bis zur Deadline nicht erreicht wird, erhältst du automatisch eine vollständige Rückerstattung deiner Gebühr. Kein Risiko für dich.',
                },
                {
                  q: 'Wer bestimmt, welche Projekte umgesetzt werden?',
                  a: 'Du und alle anderen Teilnehmenden! Jeder kann Projekte vorschlagen und für Favoriten stimmen. Die Projekte mit den meisten Stimmen werden am Event bearbeitet.',
                },
                {
                  q: 'Woher kommen die historischen Daten?',
                  a: 'Unternehmen aus dem Sihltal stellen historische Dokumente, Fotografien, Geschäftsbücher und Baupläne zur Verfügung. Diese werden nicht bezahlt und haben keinen Einfluss auf Projekte.',
                },
                {
                  q: 'Wie werden die Gewinner bestimmt?',
                  a: 'Eine Jury bewertet die Projektresultate nach Kriterien wie Innovation, technische Umsetzung und Erkenntnisgewinn. Die Bewertungskriterien werden vor dem Event veröffentlicht.',
                },
                {
                  q: 'Brauche ich Programmierkenntnisse?',
                  a: 'Nicht zwingend. Teams brauchen verschiedene Fähigkeiten: Datenanalyse, Design, Geschichtswissen, Projektmanagement. Finde ein Team, das deine Stärken ergänzt.',
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
              Bereit mitzumachen?
            </h2>
            <p className="mt-4 text-white/80 font-mono max-w-xl mx-auto">
              Werde Teil der Community und gestalte den ersten teilnehmerorientierten Hackathon der Schweiz mit.
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
