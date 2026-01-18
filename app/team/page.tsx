import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'

export const metadata = {
  title: 'Team | sihlhack',
  description: 'Das Team hinter sihlhack: Menschen die glauben, dass Hackathons anders funktionieren können.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
              Die Menschen dahinter
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
              Team
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              sihlhack entstand aus einer einfachen Frage: Was wäre, wenn Hackathons den Teilnehmenden gehören würden?
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Founder */}
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Photo */}
                  <div className="lg:w-80 flex-shrink-0">
                    <img
                      src="/team/guney-usta.jpg"
                      alt="Güney Usta"
                      className="w-full h-72 lg:h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <span className="text-xs font-mono text-thermal-orange uppercase tracking-wide">
                      Gründer & Organisator
                    </span>
                    <h2 className="font-display text-2xl font-bold text-brand-black mt-2">
                      Güney Usta
                    </h2>
                    <p className="text-sm font-mono text-historic-sepia mt-1">
                      Builder · AI-Integrator · Tinkerer
                    </p>

                    <div className="mt-6 space-y-4 text-historic-sepia font-mono text-sm leading-relaxed">
                      <p>
                        Was, wenn wir dezentrale Infrastruktur bauen, die mit überschüssigem Solarstrom läuft und gleichzeitig 
                        Gebäude heizt? Und was, wenn der Hackathon den Teilnehmenden gehört, ohne Corporate-Agenda, mit echtem 
                        Stake am Ergebnis?
                      </p>

                      <p>
                        Mein <strong className="text-brand-black">MSc in Applied Information & Data Science</strong> an der HSLU 
                        gibt mir die Tools, um diese Vision umzusetzen. KI-Integration, ML-basierte Datenanalyse, moderne 
                        OCR-Methoden, alles, was wir brauchen, um historische Archive zu erschliessen und dezentrale 
                        Systeme intelligent zu steuern.
                      </p>
                    </div>

                    <div className="mt-6">
                      <a
                        href="https://linkedin.com/in/gueneyusta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-thermal-orange hover:text-sihl-red transition-colors"
                      >
                        LinkedIn →
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Unsere Überzeugungen
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Warum wir das anders machen
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-display font-semibold text-brand-black mb-2">
                  Skin in the Game
                </h3>
                <p className="font-mono text-sm text-historic-sepia">
                  Teilnehmende zahlen. Dadurch haben alle echten Stake. Das Preisgeld kommt von uns, 
                  nicht von Sponsoren mit versteckter Agenda.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="font-display font-semibold text-brand-black mb-2">
                  Echte Hardware
                </h3>
                <p className="font-mono text-sm text-historic-sepia">
                  Wir bauen keine Demos. Der beste Prototyp wird in einer echten{' '}
                  <a href="/leg" className="text-sihl-red hover:underline">LEG</a> deployed. 
                  Infrastruktur, die tatsächlich läuft.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-4">📜</div>
                <h3 className="font-display font-semibold text-brand-black mb-2">
                  Geschichte bewahren
                </h3>
                <p className="font-mono text-sm text-historic-sepia">
                  Die Side-Quest erinnert an das Sihltal als Wiege der Zürcher Industrialisierung. 
                  Zukunft bauen, Vergangenheit retten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Team Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Werde Teil davon
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Wir suchen Mitstreiter
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-xl mx-auto">
                sihlhack ist mehr als ein Event. Es ist eine Bewegung. Wir suchen Menschen, 
                die an dezentrale Infrastruktur und partizipative Innovation glauben.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-brand-black mb-4 flex items-center gap-2">
                    <span>🧭</span> Advisory Board
                  </h3>
                  <p className="font-mono text-sm text-historic-sepia mb-4">
                    Wir bauen ein Advisory Board auf mit Expertinnen und Experten aus Energietechnik, Recht, 
                    Hardware-Engineering und Community Building.
                  </p>
                  <p className="font-mono text-xs text-historic-sepia/70">
                    Interesse? Schreib uns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-brand-black mb-4 flex items-center gap-2">
                    <span>🤝</span> Partner
                  </h3>
                  <p className="font-mono text-sm text-historic-sepia mb-4">
                    Makerspaces, Universitäten, Energieversorger, Archive: wir suchen Partner, 
                    die unsere Vision teilen.
                  </p>
                  <p className="font-mono text-xs text-historic-sepia/70">
                    Keine Sponsoren mit Logo-Agenda.
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
              Bereit, dabei zu sein?
            </h2>
            <p className="mt-4 text-white/90 font-mono max-w-xl mx-auto">
              Der erste sihlhack findet September 2026 statt. Melde dich an und werde Teil der Bewegung.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/register" variant="secondary" size="lg">
                Platz sichern
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Das Konzept lesen
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
