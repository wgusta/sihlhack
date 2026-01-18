export function DataProvidersSection() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
            Ökosystem
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Partner & Sponsoren
          </h2>
          <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
            Wir bauen dezentrale Infrastruktur für die Energiezukunft.
          </p>
        </div>

        {/* Call for Sponsors - Now at the top */}
        <div className="bg-gradient-to-r from-thermal-orange to-compute-blue rounded-2xl p-8 text-center mb-16">
          <h3 className="font-display text-2xl font-bold text-white">
            Wir suchen Sponsoren
          </h3>
          <p className="mt-3 font-mono text-white/90 max-w-xl mx-auto">
            Wir suchen Hardware-Sponsoren für Server, GPUs und Immersion-Cooling-Equipment.
            Du hast Hardware, einen Standort, oder Expertise die helfen kann? Melde dich bei uns.
          </p>
          <a
            href="mailto:partner@sihlhack.ch"
            className="inline-block mt-6 px-6 py-3 bg-white text-brand-black font-mono font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  )
}
