import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata = {
  title: 'Team | sihlhack',
  description: 'Das Team hinter sihlhack, dem ersten teilnehmerorientierten Hackathon der Schweiz.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold">
              Team
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              Die Menschen hinter sihlhack.
            </p>
          </div>
        </section>

        {/* Team member */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Photo */}
                  <div className="md:w-64 flex-shrink-0">
                    <img
                      src="/team/guney-usta.jpg"
                      alt="Güney Usta"
                      className="w-full h-64 md:h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <span className="text-xs font-mono text-sihl-red uppercase tracking-wide">
                      Organisator
                    </span>
                    <h2 className="font-display text-2xl font-bold text-brand-black mt-2">
                      Güney Usta
                    </h2>
                    <p className="text-sm font-mono text-historic-sepia mt-1">
                      Builder, AI-Integrator and Tinkerer
                    </p>

                    <p className="mt-4 text-historic-sepia font-mono text-sm">
                      Ich baue gerne Dinge. Und ich mag altes Zeug.
                    </p>

                    <p className="mt-3 text-historic-sepia font-mono text-sm">
                      Als ich ein Firmenarchiv besuchte, das kurz davor war, in einem Container zu landen, wusste ich: Dieses Wissen und diese Expertise muss gerettet werden. Daraus entstand die Idee für sihlhack.
                    </p>

                    <p className="mt-3 text-historic-sepia font-mono text-sm">
                      Aktuell vertiefe ich mein Wissen im <strong className="text-brand-black">MSc Applied Information & Data Science</strong> an der HSLU,
                      mit Fokus auf KI Integration und ML basierte Datenanalyse. Perfektes Timing, um historische Archive mit moderner Technologie zu retten.
                    </p>

                    <div className="mt-6 flex gap-4">
                      <a
                        href="https://linkedin.com/in/gueneyusta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-sihl-red hover:underline"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://www.sihliconvalley.ch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-sihl-red hover:underline"
                      >
                        sihliconvalley.ch
                      </a>
                      <a
                        href="https://github.com/wgusta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-sihl-red hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
