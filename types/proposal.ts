import type { ProjectProposal, ProposalVote } from '@/lib/db/schema'

export type ProposalStatus = 'draft' | 'submitted' | 'accepted' | 'in_progress' | 'completed'

export type DataType = 'photograph' | 'ledger' | 'blueprint' | 'document' | 'other'

export const DATA_TYPE_LABELS: Record<DataType, string> = {
  photograph: 'Fotografien',
  ledger: 'Geschäftsbücher',
  blueprint: 'Baupläne',
  document: 'Dokumente',
  other: 'Andere',
}

export interface ProposalWithVoteStatus extends ProjectProposal {
  hasVoted: boolean
  proposerName: string | null
}

export type { ProjectProposal, ProposalVote }
