import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

const concepts = [
  {
    icon: '🏭',
    title: 'Historische Daten',
    description: 'Unternehmen aus dem Sihltal teilen historische Aufzeichnungen: Fotografien, Geschäftsbücher, Baupläne und Dokumente aus der Industriezeit.',
  },
  {
    icon: '🤖',
    title: 'KI Digitalisierung',
    description: 'Mit modernster Bilderkennungs- und OCR-Technologie digitalisieren wir Dokumente und machen vergessenes Wissen zugänglich.',
  },
  {
    icon: '💡',
    title: 'Neue Erkenntnisse',
    description: 'Teilnehmerinnen und Teilnehmer entwickeln Projekte, die historische Muster aufdecken und neue Paradigmen für die Zukunft ableiten.',
  },
]

const benefits = [
  {
    title: 'Teilnehmerinnen und Teilnehmer entscheiden',
    description: 'Ihr stimmt ab, welche Projekte umgesetzt werden. Kein vorgegebenes Thema, keine Sponsoren-Agenda.',
  },
  {
    title: 'Transparente Finanzen',
    description: 'Der gesamte Überschuss nach Betriebskosten fliesst ins Preisgeld. Alles öffentlich einsehbar.',
  },
  {
    title: 'Garantierte Rückerstattung',
    description: 'Falls zu wenige Teilnehmerinnen und Teilnehmer: automatische Rückerstattung aller Gebühren. Kein Risiko für euch.',
  },
]

export function ConceptExplainer() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black">
            Das Konzept
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
            Ein Hackathon, der Geschichte und Zukunft verbindet.
            Organisiert von Teilnehmerinnen und Teilnehmern, für Teilnehmerinnen und Teilnehmer.
          </p>
        </div>

        {/* Main concepts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {concepts.map((concept, index) => (
            <Card key={index} variant="historic" className="text-center">
              <CardHeader>
                <div className="text-5xl mb-4">{concept.icon}</div>
                <CardTitle className="text-xl">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-historic-sepia font-mono text-sm">
                  {concept.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* The inverted model */}
        <div className="bg-brand-black rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="accent-text text-sihl-red text-lg">Umgekehrtes Modell</span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
              Warum teilnehmerinnen-fokussiert?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-industrial-gold/20 flex items-center justify-center">
                  <span className="text-industrial-gold font-display text-xl font-bold">{index + 1}</span>
                </div>
                <h4 className="font-display text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-400 font-mono text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
