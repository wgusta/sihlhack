import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

const DATA_TYPE_LABELS: Record<string, string> = {
  photograph: 'Fotografie',
  ledger: 'Geschäftsbuch',
  blueprint: 'Bauplan',
  document: 'Dokument',
  other: 'Andere',
}

interface HistoricCardProps {
  id: string
  title: string
  description: string | null
  dataType: string
  blobUrl: string
  thumbnailUrl: string | null
  ocrStatus: string
  companyName: string | null
  historicalPeriod: string | null
}

export function HistoricCard({
  id,
  title,
  description,
  dataType,
  blobUrl,
  thumbnailUrl,
  ocrStatus,
  companyName,
  historicalPeriod,
}: HistoricCardProps) {
  const getOcrStatusBadge = () => {
    switch (ocrStatus) {
      case 'completed':
        return <Badge variant="success">Digitalisiert</Badge>
      case 'processing':
        return <Badge variant="warning">In Bearbeitung</Badge>
      default:
        return <Badge>Ausstehend</Badge>
    }
  }

  return (
    <Link href={`/data-catalog/${id}`} className="group">
      <div className="historic-reveal bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        {/* Image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={thumbnailUrl || blobUrl}
            alt={title}
            className={cn(
              'w-full h-full object-cover transition-all duration-700',
              'filter grayscale-[80%] sepia-[20%] group-hover:grayscale-0 group-hover:sepia-0'
            )}
          />

          {/* Data type badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2 py-1 bg-brand-black/80 text-white text-xs font-mono rounded">
              {DATA_TYPE_LABELS[dataType] || dataType}
            </span>
          </div>

          {/* OCR status */}
          <div className="absolute top-3 right-3 z-10">
            {getOcrStatusBadge()}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display font-semibold text-brand-black group-hover:text-sihl-red transition-colors line-clamp-1">
            {title}
          </h3>

          {companyName && (
            <p className="text-sm font-mono text-historic-sepia mt-1">
              {companyName}
              {historicalPeriod && ` • ${historicalPeriod}`}
            </p>
          )}

          {description && (
            <p className="text-sm text-brand-black/70 mt-2 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
