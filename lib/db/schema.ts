import { pgTable, uuid, text, timestamp, integer, boolean, unique, check } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

// Participants table
export const participants = pgTable('participants', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'), // Optional: collected after magic link verification
  company: text('company'),
  // Magic link token is stored as SHA-256 hash for security
  magicLinkTokenHash: text('magic_link_token_hash'),
  magicLinkExpiresAt: timestamp('magic_link_expires_at'),
  stripeCustomerId: text('stripe_customer_id'),
  registrationStatus: text('registration_status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Payments table
export const payments = pgTable('payments', {
  id: uuid('id').defaultRandom().primaryKey(),
  participantId: uuid('participant_id').references(() => participants.id).notNull(),
  stripePaymentIntentId: text('stripe_payment_intent_id').notNull().unique(),
  amountChf: integer('amount_chf').notNull(), // Stored in centimes
  status: text('status').default('pending').notNull(),
  refundedAt: timestamp('refunded_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Budget positions table for break-even calculation
export const budgetPositions = pgTable('budget_positions', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  category: text('category').notNull(), // 'venue' | 'catering' | 'equipment' | 'marketing' | 'prizes' | 'other'
  amountChf: integer('amount_chf').notNull(), // In centimes
  isFixed: boolean('is_fixed').default(true).notNull(), // Fixed cost vs per-participant
  description: text('description'),
  sortOrder: integer('sort_order').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Fund allocations table (legacy, kept for compatibility)
export const fundAllocations = pgTable('fund_allocations', {
  id: uuid('id').defaultRandom().primaryKey(),
  category: text('category').notNull().unique(),
  amountChf: integer('amount_chf').notNull(),
  percentage: integer('percentage').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Project proposals table
export const projectProposals = pgTable('project_proposals', {
  id: uuid('id').defaultRandom().primaryKey(),
  proposerId: uuid('proposer_id').references(() => participants.id).notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  historicalContext: text('historical_context'),
  technicalApproach: text('technical_approach'),
  dataTypes: text('data_types').array(),
  voteCount: integer('vote_count').default(0).notNull(),
  status: text('status').default('draft').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Proposal votes table - one vote per participant per proposal
export const proposalVotes = pgTable('proposal_votes', {
  id: uuid('id').defaultRandom().primaryKey(),
  proposalId: uuid('proposal_id').references(() => projectProposals.id).notNull(),
  participantId: uuid('participant_id').references(() => participants.id).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => [
  unique('unique_vote_per_participant').on(table.proposalId, table.participantId),
])

// Companies table
export const companies = pgTable('companies', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  contactPerson: text('contact_person').notNull(),
  contactEmail: text('contact_email').notNull().unique(),
  industry: text('industry'),
  historicalPeriod: text('historical_period'),
  ndaSigned: boolean('nda_signed').default(false).notNull(),
  ndaSignedAt: timestamp('nda_signed_at'),
  verified: boolean('verified').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Historical data table
export const historicalData = pgTable('historical_data', {
  id: uuid('id').defaultRandom().primaryKey(),
  companyId: uuid('company_id').references(() => companies.id).notNull(),
  title: text('title').notNull(),
  description: text('description'),
  dataType: text('data_type').notNull(), // 'photograph' | 'ledger' | 'blueprint' | 'document'
  blobUrl: text('blob_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  ocrStatus: text('ocr_status').default('pending').notNull(),
  ocrText: text('ocr_text'),
  metadata: text('metadata'), // JSON string for flexible metadata
  approvedAt: timestamp('approved_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Event configuration table (single row with fixed ID)
export const eventConfig = pgTable('event_config', {
  // Fixed ID for single-row pattern: always use this UUID
  id: uuid('id').default(sql`'00000000-0000-0000-0000-000000000001'::uuid`).primaryKey(),
  eventName: text('event_name').default('sihlhack').notNull(),
  eventDate: timestamp('event_date').notNull(),
  registrationDeadline: timestamp('registration_deadline').notNull(),
  refundDeadline: timestamp('refund_deadline').notNull(),
  minParticipants: integer('min_participants').default(30).notNull(),
  maxParticipants: integer('max_participants').default(100).notNull(),
  registrationFeeChf: integer('registration_fee_chf').default(48000).notNull(), // 480 CHF in centimes
  // Prize distribution: remaining budget after costs goes to winners
  prizeFirst: integer('prize_first').default(50).notNull(), // 50% to 1st place
  prizeSecond: integer('prize_second').default(30).notNull(), // 30% to 2nd place
  prizeThird: integer('prize_third').default(20).notNull(), // 20% to 3rd place
  registrationOpen: boolean('registration_open').default(true).notNull(),
  proposalsOpen: boolean('proposals_open').default(true).notNull(),
  eventStatus: text('event_status').default('monitoring').notNull(), // 'monitoring' | 'confirmed' | 'cancelled'
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Type exports for use in application
export type Participant = typeof participants.$inferSelect
export type NewParticipant = typeof participants.$inferInsert

export type Payment = typeof payments.$inferSelect
export type NewPayment = typeof payments.$inferInsert

export type FundAllocation = typeof fundAllocations.$inferSelect

export type ProjectProposal = typeof projectProposals.$inferSelect
export type NewProjectProposal = typeof projectProposals.$inferInsert

export type ProposalVote = typeof proposalVotes.$inferSelect

export type Company = typeof companies.$inferSelect
export type NewCompany = typeof companies.$inferInsert

export type HistoricalData = typeof historicalData.$inferSelect
export type NewHistoricalData = typeof historicalData.$inferInsert

export type EventConfig = typeof eventConfig.$inferSelect

export type BudgetPosition = typeof budgetPositions.$inferSelect
export type NewBudgetPosition = typeof budgetPositions.$inferInsert
