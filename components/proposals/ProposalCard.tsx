import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { VoteButton } from './VoteButton'
import { DATA_TYPE_LABELS, type DataType } from '@/types/proposal'

interface ProposalCardProps {
  id: string
  title: string
  description: string
  proposerName: string | null
  voteCount: number
  dataTypes: string[] | null
  status: string
  hasVoted: boolean
  canVote: boolean
}

export function ProposalCard({
  id,
  title,
  description,
  proposerName,
  voteCount,
  dataTypes,
  status,
  hasVoted,
  canVote,
}: ProposalCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case 'accepted':
        return <Badge variant="success">Akzeptiert</Badge>
      case 'in_progress':
        return <Badge variant="warning">In Bearbeitung</Badge>
      case 'completed':
        return <Badge variant="success">Abgeschlossen</Badge>
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Status bar */}
      <div
        className={`h-1 ${
          status === 'completed'
            ? 'bg-fund-green'
            : status === 'in_progress'
            ? 'bg-insight-cyan'
            : status === 'accepted'
            ? 'bg-industrial-gold'
            : 'bg-historic-sepia/30'
        }`}
      />

      <div className="p-5">
        <div className="flex gap-4">
          {/* Vote button */}
          <div className="flex-shrink-0">
            <VoteButton
              proposalId={id}
              voteCount={voteCount}
              hasVoted={hasVoted}
              canVote={canVote}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <Link
                href={`/proposals/${id}`}
                className="font-display text-lg font-semibold text-brand-black hover:text-sihl-red transition-colors"
              >
                {title}
              </Link>
              {getStatusBadge()}
            </div>

            <p className="text-sm font-mono text-historic-sepia mt-1">
              von {proposerName || 'Anonym'}
            </p>

            <p className="text-brand-black/80 mt-2 line-clamp-2 text-sm">
              {description}
            </p>

            {/* Data types */}
            {dataTypes && dataTypes.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {dataTypes.map((type, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-historic-cream text-historic-sepia text-xs font-mono rounded"
                  >
                    {DATA_TYPE_LABELS[type as DataType] || type}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
