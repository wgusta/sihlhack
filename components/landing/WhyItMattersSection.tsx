import { ButtonLink } from '@/components/ui/ButtonLink'

export function WhyItMattersSection() {
  return (
    <section id="why-it-matters" className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Poetic Headline */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-black leading-tight">
            <span className="text-thermal-orange">Aus Sonnenlicht wird Rechenleistung.</span>
            <br />
            Aus Rechenleistung wird Wärme. Aus Wärme wird Zukunft.
          </blockquote>
          <p className="mt-6 text-base sm:text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
            Batterie + Server + Wärme: kombiniert zu etwas, das noch niemand gebaut hat. Du baust es.
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
            Warum das wichtig ist
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Das Problem mit der Cloud
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
            Die Schweiz exportiert Strom und importiert Compute. Das muss sich ändern.
          </p>
        </div>

        {/* Two Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problem 1: Wasted Energy */}
          <div className="bg-white rounded-2xl p-8 shadow-historic">
            <div className="text-5xl mb-6">🔥</div>
            <h3 className="font-display text-2xl font-bold text-brand-black mb-4">
              Solarstrom wird verschenkt
            </h3>
            <div className="space-y-4 font-mono text-sm text-historic-sepia">
              <p>
                <strong className="text-brand-black">Schweizer Solardächer produzieren zu viel Strom zur Mittagszeit.</strong> Statt ihn sinnvoll zu nutzen, wird er oft zu sehr niedrigen Preisen ins Netz gedrückt.
              </p>
              <p>
                Gleichzeitig zahlen wir <span className="text-sihl-red">grosse Summen an US-Cloud-Anbieter</span>, die unsere Daten in fremden Ländern speichern und verarbeiten.
              </p>
              <p>
                <strong className="text-brand-black">Die Energie ist da. Die Nachfrage ist da.</strong> Es fehlt nur die Infrastruktur, die beides verbindet.
              </p>
              <p className="text-thermal-orange font-semibold">
                Das bauen wir.
              </p>
            </div>
          </div>

          {/* Problem 2: Wasted Heat */}
          <div className="bg-brand-black rounded-2xl p-8 shadow-historic">
            <div className="text-5xl mb-6">❄️</div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Server heizen die Luft statt Häuser
            </h3>
            <div className="space-y-4 font-mono text-sm text-gray-300">
              <p>
                <strong className="text-compute-blue">Jedes Rechenzentrum ist eine Heizung.</strong> 100% der Elektrizität wird zu Wärme. Diese Wärme wird mit Klimaanlagen nach draussen gepumpt.
              </p>
              <p>
                In der Schweiz heizen wir mit Gas und Öl, während nebenan Server kühlen,
                die <span className="text-thermal-orange">45-50°C warmes Wasser</span> produzieren könnten.
              </p>
              <p>
                <strong className="text-compute-blue">Das ist physikalischer Wahnsinn.</strong> Server gehören dorthin, wo ihre Wärme gebraucht wird: In Wohngebäude, Gewächshäuser, Schwimmbäder.
              </p>
              <p className="text-grid-green font-semibold">
                Das designen wir.
              </p>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-thermal-orange to-compute-blue rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Der Sihlicon Hub: Compute + Heat + Grid
            </h3>
            <p className="font-mono text-sm sm:text-base text-white/90 mb-6 max-w-2xl mx-auto">
              Ein modulares System, das Solarüberschuss in Rechenleistung verwandelt,
              die Abwärme nutzt und das Stromnetz stabilisiert. Open Source. Lokal produziert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-white font-mono text-sm">
                <span className="text-2xl">☀️</span>
                <span>Solar zu Compute</span>
              </div>
              <span className="text-white/50 hidden sm:inline">→</span>
              <div className="flex items-center gap-2 text-white font-mono text-sm">
                <span className="text-2xl">🔥</span>
                <span>Compute zu Wärme</span>
              </div>
              <span className="text-white/50 hidden sm:inline">→</span>
              <div className="flex items-center gap-2 text-white font-mono text-sm">
                <span className="text-2xl">🏠</span>
                <span>Wärme für Gebäude</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-historic-sepia mb-6">
            Klingt verrückt? Andere machen es schon: Stockholm Data Parks, Nerdalize, QArnot.
          </p>
          <ButtonLink href="/register" variant="primary" size="lg" className="bg-thermal-orange hover:bg-thermal-orange/90">
            Platz sichern
          </ButtonLink>
        </div>

        {/* Ownership Message */}
        <div className="mt-16 max-w-3xl mx-auto pt-12 border-t border-gray-200">
          <p className="font-mono text-sm text-historic-sepia text-center">
            <span className="text-brand-black font-semibold">Dein Code. Deine Rechte.</span> Dual-Lizenz-Modell: Hardware frei (CERN-OHL-P/MIT), 
            Grid-OS schützt das Netz (SVG-L). Du kannst morgen eine Firma gründen und mit uns konkurrieren. Go for it.
          </p>
        </div>
      </div>
    </section>
  )
}
