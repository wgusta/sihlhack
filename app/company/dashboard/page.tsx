'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCompanySession } from '@/hooks/useCompanySession'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { DataUploader } from '@/components/company/DataUploader'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { HistoricalData } from '@/lib/db/schema'

const DATA_TYPE_LABELS: Record<string, string> = {
  photograph: 'Fotografie',
  ledger: 'Geschäftsbuch',
  blueprint: 'Bauplan',
  document: 'Dokument',
  other: 'Andere',
}

export default function CompanyDashboardPage() {
  const router = useRouter()
  const { company, isAuthenticated, isLoading } = useCompanySession()
  const [uploads, setUploads] = useState<HistoricalData[]>([])
  const [isLoadingUploads, setIsLoadingUploads] = useState(true)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/company/register')
    }
    if (!isLoading && company && !company.ndaSigned) {
      router.push('/company/nda')
    }
  }, [isLoading, isAuthenticated, company, router])

  const fetchUploads = async () => {
    try {
      const res = await fetch('/api/upload')
      if (res.ok) {
        const data = await res.json()
        setUploads(data.uploads)
      }
    } catch (error) {
      console.error('Failed to fetch uploads:', error)
    } finally {
      setIsLoadingUploads(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated && company?.ndaSigned) {
      fetchUploads()
    }
  }, [isAuthenticated, company])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-historic-cream border-t-sihl-red rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated || !company?.ndaSigned) {
    return null
  }

  const getOcrStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">Digitalisiert</Badge>
      case 'processing':
        return <Badge variant="warning">In Bearbeitung</Badge>
      default:
        return <Badge>Ausstehend</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-brand-black">
              Willkommen, {company.name}
            </h1>
            <p className="mt-2 text-historic-sepia font-mono">
              Laden Sie historische Dokumente hoch und verfolgen Sie deren Digitalisierung.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload form */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Neue Datei hochladen</CardTitle>
                </CardHeader>
                <CardContent>
                  <DataUploader onUploadComplete={fetchUploads} />
                </CardContent>
              </Card>
            </div>

            {/* Uploads list */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Ihre Uploads</CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoadingUploads ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-20 bg-historic-cream rounded animate-pulse" />
                      ))}
                    </div>
                  ) : uploads.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-historic-sepia font-mono">
                        Noch keine Dateien hochgeladen.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {uploads.map((upload) => (
                        <div
                          key={upload.id}
                          className="flex items-center gap-4 p-4 bg-historic-cream/50 rounded-lg"
                        >
                          {/* Thumbnail */}
                          <div className="flex-shrink-0 w-16 h-16 bg-historic-sepia/20 rounded overflow-hidden">
                            {upload.blobUrl && (
                              <img
                                src={upload.thumbnailUrl || upload.blobUrl}
                                alt={upload.title}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="font-mono font-semibold text-brand-black truncate">
                              {upload.title}
                            </p>
                            <p className="text-sm font-mono text-historic-sepia">
                              {DATA_TYPE_LABELS[upload.dataType] || upload.dataType}
                            </p>
                          </div>

                          {/* Status */}
                          <div className="flex-shrink-0">
                            {getOcrStatusBadge(upload.ocrStatus)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Info box */}
              <Card className="mt-6" variant="historic">
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-brand-black mb-2">
                    Was passiert mit Ihren Daten?
                  </h3>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-sihl-red">1.</span>
                      <span>Upload und sichere Speicherung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sihl-red">2.</span>
                      <span>Prüfung und Freigabe durch das Team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sihl-red">3.</span>
                      <span>OCR-Digitalisierung (Texterkennung)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sihl-red">4.</span>
                      <span>Bereitstellung für Hackathon-Projekte</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
