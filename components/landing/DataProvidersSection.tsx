'use client'

// Partner types for the hackathon
const deploymentPartners = [
  {
    id: 'badenleg',
    name: 'BadenLEG',
    type: 'LEG Partner',
    location: 'Baden, AG',
    contribution: 'Deployment-Standort',
    logo: '🏠',
    description: 'Erste Lokale Elektrizitätsgemeinschaft die einen Sihlicon Hub installiert.',
  },
  {
    id: 'hslu',
    name: 'HSLU Informatik',
    type: 'Akademischer Partner',
    location: 'Luzern',
    contribution: 'Expertise + Testing',
    logo: '🎓',
    description: 'Unterstützung bei thermischen Berechnungen und Lastprofil-Analyse.',
  },
]

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
            Diese Organisationen machen den Hackathon möglich.
            Standorte, Expertise, und Partner.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {deploymentPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl p-6 shadow-historic hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{partner.logo}</div>
              <h3 className="font-display font-bold text-brand-black">
                {partner.name}
              </h3>
              <p className="font-mono text-xs text-thermal-orange mt-1">
                {partner.type} · {partner.location}
              </p>
              <p className="font-mono text-sm text-historic-sepia mt-3">
                {partner.description}
              </p>
              <div className="mt-4">
                <span className="px-2 py-1 bg-grid-green/10 text-grid-green rounded text-xs font-mono">
                  {partner.contribution}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* What you'll build */}
        <div className="mt-16 bg-brand-black rounded-2xl p-8">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Der Stack, den wir bauen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="font-mono text-xs text-thermal-orange uppercase tracking-[0.2em] mb-4">
                Entwicklung & Prototyping
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
                Der Stack, den wir bauen
              </h3>
              
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🖥️</div>
              <h4 className="font-mono text-thermal-orange font-semibold mb-2">Sihlicon Core</h4>
              <p className="text-sm text-gray-400 font-mono">
                Immersionsgekühlte Server-Module mit Wärme-Auskopplung
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-mono text-compute-blue font-semibold mb-2">Grid-OS</h4>
              <p className="text-sm text-gray-400 font-mono">
                Intelligente Laststeuerung basierend auf Solarertrag und Netzstatus
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-mono text-grid-green font-semibold mb-2">Dashboard</h4>
              <p className="text-sm text-gray-400 font-mono">
                Echtzeit-Monitoring für Energie, Wärme und Compute-Auslastung
              </p>
            </div>
          </div>
        </div>

        {/* Call for Sponsors */}
        <div className="mt-16 bg-gradient-to-r from-thermal-orange to-compute-blue rounded-2xl p-8 text-center">
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
