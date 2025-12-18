'use client'

import { cn } from '@/lib/utils'

// Placeholder data providers - in production, these would come from the database
const dataProviders = [
  {
    id: 'papierfabrik',
    name: 'Papierfabrik Sihl',
    industry: 'Papierherstellung',
    founded: '1836',
    dataTypes: ['Lohnbücher', 'Produktionsprotokolle', 'Fotografien'],
    logo: '📜', // Placeholder - in production use actual logos
    description: 'Eine der ältesten Papierfabriken der Schweiz mit umfangreichen historischen Archiven.',
  },
  {
    id: 'spinnerei',
    name: 'Spinnerei Adliswil',
    industry: 'Textilindustrie',
    founded: '1860',
    dataTypes: ['Geschäftsbücher', 'Baupläne', 'Korrespondenz'],
    logo: '🧵',
    description: 'Historische Textilproduktion mit Dokumenten zur Arbeitergeschichte.',
  },
  {
    id: 'maschinenfabrik',
    name: 'Maschinenfabrik Oerlikon',
    industry: 'Maschinenbau',
    founded: '1876',
    dataTypes: ['Technische Zeichnungen', 'Patente', 'Fotografien'],
    logo: '⚙️',
    description: 'Industriegeschichte der Schweizer Maschinenindustrie.',
  },
  {
    id: 'brauerei',
    name: 'Brauerei Wädenswil',
    industry: 'Brauerei',
    founded: '1847',
    dataTypes: ['Rezeptbücher', 'Lieferscheine', 'Werbematerial'],
    logo: '🍺',
    description: 'Historische Braukunst und Handelsbeziehungen am Zürichsee.',
  },
]

export function DataProvidersSection() {
  return (
    <section className="py-24 bg-historic-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-industrial-gold uppercase tracking-widest">
            Die Daten
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Historische Partner
          </h2>
          <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
            Diese Unternehmen stellen ihre historischen Archive zur Digitalisierung bereit.
            Ohne Bezahlung, ohne Einfluss auf Projekte.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-xl p-6 shadow-historic hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{provider.logo}</div>
              <h3 className="font-display font-bold text-brand-black">
                {provider.name}
              </h3>
              <p className="font-mono text-xs text-historic-sepia mt-1">
                {provider.industry} · seit {provider.founded}
              </p>
              <p className="font-mono text-sm text-historic-sepia mt-3">
                {provider.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                {provider.dataTypes.map((type) => (
                  <span
                    key={type}
                    className="px-2 py-0.5 bg-historic-cream rounded text-[10px] font-mono text-historic-sepia"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm">
            <span className="text-fund-green text-xl">✓</span>
            <span className="font-mono text-sm text-historic-sepia">
              Kein Sponsor-Einfluss. Daten werden neutral bereitgestellt.
            </span>
          </div>
        </div>

        {/* Call for Data Providers */}
        <div className="mt-16 bg-brand-black rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-white">
            Du hast historische Daten?
          </h3>
          <p className="mt-3 font-mono text-gray-400 max-w-xl mx-auto">
            Dein Unternehmen besitzt historische Archive aus dem Sihltal oder Zürichsee-Region?
            Werde Datenpartner und lass deine Geschichte digitalisieren.
          </p>
          <a
            href="mailto:daten@sihlhack.ch"
            className="inline-block mt-6 px-6 py-3 bg-industrial-gold text-brand-black font-mono font-medium rounded-lg hover:bg-industrial-gold/90 transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  )
}
