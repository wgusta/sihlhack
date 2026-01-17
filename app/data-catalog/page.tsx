'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { Header } from '@/components/layout/Header'
import { CircleStackIcon } from '@heroicons/react/24/solid'
import { Footer } from '@/components/layout/Footer'
import { HistoricCard } from '@/components/data/HistoricCard'
import { DataFilterBar } from '@/components/data/DataFilterBar'
import { ButtonLink } from '@/components/ui/ButtonLink'

interface CatalogItem {
  id: string
  title: string
  description: string | null
  dataType: string
  blobUrl: string
  thumbnailUrl: string | null
  ocrStatus: string
  createdAt: string
  companyName: string | null
  historicalPeriod: string | null
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function DataCatalogPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const params = new URLSearchParams()
  if (selectedType) params.set('dataType', selectedType)
  const queryString = params.toString()

  const { data, isLoading } = useSWR<{ data: CatalogItem[] }>(
    `/api/data-catalog${queryString ? `?${queryString}` : ''}`,
    fetcher
  )

  const items = data?.data ?? []

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl font-bold">
              Datenkatalog
            </h1>
            <p className="mt-4 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              Entdecke historische Dokumente aus dem Sihltal: Fotografien, Geschäftsbücher, Baupläne und mehr.
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters */}
          <div className="mb-8">
            <DataFilterBar
              selectedType={selectedType}
              onTypeChange={setSelectedType}
            />
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-[4/3] bg-white rounded-lg animate-pulse" />
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto bg-historic-cream rounded-full flex items-center justify-center mb-4">
                <CircleStackIcon className="w-10 h-10 text-historic-sepia" aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-semibold text-brand-black">
                Noch keine Daten verfügbar
              </h2>
              <p className="mt-2 text-historic-sepia font-mono">
                {selectedType
                  ? 'Keine Dokumente dieses Typs gefunden.'
                  : 'Der Katalog wird gerade aufgebaut.'}
              </p>
              {selectedType && (
                <button
                  onClick={() => setSelectedType(null)}
                  className="mt-4 text-sihl-red hover:underline font-mono"
                >
                  Filter zurücksetzen
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <HistoricCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  dataType={item.dataType}
                  blobUrl={item.blobUrl}
                  thumbnailUrl={item.thumbnailUrl}
                  ocrStatus={item.ocrStatus}
                  companyName={item.companyName}
                  historicalPeriod={item.historicalPeriod}
                />
              ))}
            </div>
          )}

          {/* CTA for companies */}
          <div className="mt-16 bg-industrial-gold/10 rounded-lg p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-brand-black">
              Haben Sie historische Dokumente?
            </h2>
            <p className="mt-4 text-historic-sepia font-mono max-w-xl mx-auto">
              Unternehmen aus dem Sihltal können historische Materialien beisteuern
              und bei der Digitalisierung helfen.
            </p>
            <ButtonLink href="/company/register" variant="primary" className="mt-6">
              Als Datenpartner registrieren
            </ButtonLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
