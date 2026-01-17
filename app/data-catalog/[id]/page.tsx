import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { formatDate } from '@/lib/utils'
import { db, historicalData, companies } from '@/lib/db'
import { and, eq, isNotNull } from 'drizzle-orm'

const DATA_TYPE_LABELS: Record<string, string> = {
  photograph: 'Fotografie',
  ledger: 'Geschäftsbuch',
  blueprint: 'Bauplan',
  document: 'Dokument',
  other: 'Andere',
}

interface DataDetailPageProps {
  params: { id: string }
}

export default async function DataDetailPage({ params }: DataDetailPageProps) {
  const { id } = params

  const [item] = await db
    .select({
      id: historicalData.id,
      title: historicalData.title,
      description: historicalData.description,
      dataType: historicalData.dataType,
      blobUrl: historicalData.blobUrl,
      thumbnailUrl: historicalData.thumbnailUrl,
      ocrStatus: historicalData.ocrStatus,
      ocrText: historicalData.ocrText,
      createdAt: historicalData.createdAt,
      companyName: companies.name,
      historicalPeriod: companies.historicalPeriod,
    })
    .from(historicalData)
    .leftJoin(companies, eq(historicalData.companyId, companies.id))
    .where(
      and(
        eq(historicalData.id, id),
        isNotNull(historicalData.approvedAt)
      )
    )
    .limit(1)

  if (!item) {
    return (
      <div className="min-h-screen bg-off-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-brand-black">
              Dokument nicht gefunden
            </h1>
            <p className="mt-2 text-historic-sepia font-mono">
              Das Dokument existiert nicht oder wurde noch nicht freigegeben.
            </p>
            <ButtonLink href="/data-catalog" variant="primary" className="mt-6">
              Zum Datenkatalog
            </ButtonLink>
          </div>
        </main>
        <Footer />
      </div>
    )
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link
              href="/data-catalog"
              className="text-sm font-mono text-historic-sepia hover:text-sihl-red transition-colors"
            >
              ← Datenkatalog
            </Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="historic-reveal">
              <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={item.thumbnailUrl || item.blobUrl}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Full resolution link */}
              <div className="mt-4 text-center">
                <a
                  href={item.blobUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-sihl-red hover:underline"
                >
                  Vollauflösung ansehen →
                </a>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-brand-black text-white text-xs font-mono rounded">
                    {DATA_TYPE_LABELS[item.dataType] || item.dataType}
                  </span>
                  {getOcrStatusBadge(item.ocrStatus)}
                </div>

                <h1 className="font-display text-3xl font-bold text-brand-black">
                  {item.title}
                </h1>

                {item.companyName && (
                  <p className="mt-2 font-mono text-historic-sepia">
                    Bereitgestellt von {item.companyName}
                    {item.historicalPeriod && ` • ${item.historicalPeriod}`}
                  </p>
                )}
              </div>

              {item.description && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="font-display font-semibold text-brand-black mb-2">
                      Beschreibung
                    </h2>
                    <p className="text-brand-black/80 whitespace-pre-wrap">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* OCR Text preview */}
              {item.ocrStatus === 'completed' && item.ocrText && (
                <Card variant="historic">
                  <CardContent className="pt-6">
                    <h2 className="font-display font-semibold text-brand-black mb-2">
                      Extrahierter Text (OCR)
                    </h2>
                    <div className="bg-white p-4 rounded border border-historic-sepia/20 max-h-64 overflow-y-auto">
                      <pre className="font-mono text-sm text-brand-black whitespace-pre-wrap">
                        {item.ocrText}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Metadata */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="font-display font-semibold text-brand-black mb-4">
                    Metadaten
                  </h2>
                  <dl className="space-y-3 text-sm font-mono">
                    <div className="flex justify-between">
                      <dt className="text-historic-sepia">Typ</dt>
                      <dd className="text-brand-black">
                        {DATA_TYPE_LABELS[item.dataType] || item.dataType}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-historic-sepia">Status</dt>
                      <dd className="text-brand-black">{item.ocrStatus}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-historic-sepia">Hinzugefügt</dt>
                      <dd className="text-brand-black">{formatDate(item.createdAt)}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="bg-sihl-red/10 rounded-lg p-6">
                <h3 className="font-display font-semibold text-brand-black">
                  Projekt mit diesen Daten?
                </h3>
                <p className="mt-2 text-sm font-mono text-historic-sepia">
                  Schlage ein Projekt vor, das diese historischen Daten nutzt.
                </p>
                <ButtonLink href="/proposals/new" variant="primary" size="sm" className="mt-4">
                  Projekt vorschlagen
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
