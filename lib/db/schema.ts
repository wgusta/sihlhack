import { pgTable, uuid, text, timestamp, integer, boolean, unique, check } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

// Participants table
export const participants = pgTable('participants', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'), // Optional: collected after magic link verification
  company: text('company'),
  // Role-based hackathon fields
  primaryRole: text('primary_role'), // ml-engineer, data-engineer, frontend-dev, etc.
  secondaryRole: text('secondary_role'),
  skills: text('skills').array(), // Array of skill tags
  lookingForTeam: boolean('looking_for_team').default(true),
  bio: text('bio'), // Short self-description for team matching
  linkedinUrl: text('linkedin_url'),
  githubUrl: text('github_url'),
  // Magic link token is stored as SHA-256 hash for security
  magicLinkTokenHash: text('magic_link_token_hash'),
  magicLinkExpiresAt: timestamp('magic_link_expires_at'),
  stripeCustomerId: text('stripe_customer_id'),
  registrationStatus: text('registration_status').default('pending').notNull(),
  // Email preferences
  notifyOnTeamMatch: boolean('notify_on_team_match').default(true),
  notifyOnProposals: boolean('notify_on_proposals').default(true),
  notifyOnUpdates: boolean('notify_on_updates').default(true),
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
  minParticipants: integer('min_participants').default(50).notNull(),
  maxParticipants: integer('max_participants').default(180).notNull(),
  registrationFeeChf: integer('registration_fee_chf').default(12000).notNull(), // 120 CHF in centimes
  // Prize distribution: remaining budget after costs goes to winners
  prizeFirst: integer('prize_first').default(50).notNull(), // 50% to 1st place
  prizeSecond: integer('prize_second').default(30).notNull(), // 30% to 2nd place
  prizeThird: integer('prize_third').default(20).notNull(), // 20% to 3rd place
  registrationOpen: boolean('registration_open').default(true).notNull(),
  proposalsOpen: boolean('proposals_open').default(true).notNull(),
  eventStatus: text('event_status').default('monitoring').notNull(), // 'monitoring' | 'confirmed' | 'cancelled'
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Email subscribers (for people not yet ready to register)
export const emailSubscribers = pgTable('email_subscribers', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  interests: text('interests').array(), // What they're interested in
  source: text('source').default('website'), // Where they signed up
  verified: boolean('verified').default(false),
  unsubscribedAt: timestamp('unsubscribed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Sihlicon Hubs table - represents physical Active Energy Nodes
export const sihliconHubs = pgTable('sihlicon_hubs', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  location: text('location'), // City/region in Switzerland
  operatorId: uuid('operator_id').references(() => participants.id), // Hub owner/operator
  // Hardware specs
  computeCapacityKw: integer('compute_capacity_kw'), // Max compute power in kW
  batteryCapacityKwh: integer('battery_capacity_kwh'), // Battery capacity in kWh
  thermalPath: text('thermal_path'), // 'immersion' | 'water-loop' | 'heat-pump'
  // Status
  status: text('status').default('pending').notNull(), // 'pending' | 'active' | 'inactive' | 'maintenance'
  // Grid integration
  gridOsVersion: text('grid_os_version'), // Version of Grid-OS running
  swissgridRegistered: boolean('swissgrid_registered').default(false),
  // Metadata
  metadata: text('metadata'), // JSON string for flexible metadata
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Compute jobs table - tracks compute workloads running on Hubs
export const computeJobs = pgTable('compute_jobs', {
  id: uuid('id').defaultRandom().primaryKey(),
  hubId: uuid('hub_id').references(() => sihliconHubs.id).notNull(),
  submittedBy: uuid('submitted_by').references(() => participants.id), // Job submitter
  // Job definition
  jobType: text('job_type').notNull(), // 'ocr' | 'ai-inference' | 'time-series' | 'video-processing' | 'scientific' | 'custom'
  jobName: text('job_name').notNull(),
  jobDescription: text('job_description'),
  // Workload specification
  workloadConfig: text('workload_config').notNull(), // JSON: container image, command, env vars, etc.
  inputDataRefs: text('input_data_refs').array(), // Array of content-addressed storage refs (CIDs)
  outputDataRefs: text('output_data_refs').array(), // Array of output CIDs (populated after completion)
  // Resource requirements
  estimatedComputeKwh: integer('estimated_compute_kwh'), // Estimated energy consumption in Wh
  priority: integer('priority').default(0).notNull(), // Higher = more urgent
  // Scheduling
  status: text('status').default('pending').notNull(), // 'pending' | 'queued' | 'running' | 'completed' | 'failed' | 'cancelled'
  scheduledAt: timestamp('scheduled_at'), // When job should start
  startedAt: timestamp('started_at'),
  completedAt: timestamp('completed_at'),
  // Execution results
  actualComputeKwh: integer('actual_compute_kwh'), // Actual energy consumed
  heatGeneratedKwh: integer('heat_generated_kwh'), // Heat generated (≈ compute kWh)
  errorMessage: text('error_message'),
  // Grid-OS integration
  gridThrottled: boolean('grid_throttled').default(false), // Was job throttled due to grid needs?
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Storage manifests table - content-addressed storage with replication
export const storageManifests = pgTable('storage_manifests', {
  id: uuid('id').defaultRandom().primaryKey(),
  contentId: text('content_id').notNull().unique(), // Content-addressed ID (CIDv1 compatible)
  // File metadata
  fileName: text('file_name'),
  fileSizeBytes: integer('file_size_bytes').notNull(),
  mimeType: text('mime_type'),
  // Storage tier
  storageTier: text('storage_tier').default('hot').notNull(), // 'hot' | 'cold' | 'glacier'
  // Replication
  replicaHubs: uuid('replica_hubs').array(), // Array of hub IDs storing replicas
  minReplicas: integer('min_replicas').default(3).notNull(), // Minimum replication factor
  // Access control
  accessLevel: text('access_level').default('private').notNull(), // 'private' | 'public' | 'community'
  ownerId: uuid('owner_id').references(() => participants.id), // Content owner
  // Provenance
  sourceHubId: uuid('source_hub_id').references(() => sihliconHubs.id), // Hub that originally stored this
  provenance: text('provenance'), // JSON: processing history, transformations
  // Metadata
  metadata: text('metadata'), // JSON string for flexible metadata
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Storage replicas table - tracks which Hub stores which content
export const storageReplicas = pgTable('storage_replicas', {
  id: uuid('id').defaultRandom().primaryKey(),
  manifestId: uuid('manifest_id').references(() => storageManifests.id, { onDelete: 'cascade' }).notNull(),
  hubId: uuid('hub_id').references(() => sihliconHubs.id, { onDelete: 'cascade' }).notNull(),
  // Replica status
  status: text('status').default('syncing').notNull(), // 'syncing' | 'active' | 'corrupted' | 'deleted'
  // Storage location on Hub
  localPath: text('local_path'), // Path on Hub's local storage
  // Health checks
  lastHealthCheck: timestamp('last_health_check'),
  checksum: text('checksum'), // Content checksum for integrity verification
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => [
  unique('unique_replica_per_hub').on(table.manifestId, table.hubId),
])

// Heat accounting table - tracks heat generation and credits
export const heatAccounting = pgTable('heat_accounting', {
  id: uuid('id').defaultRandom().primaryKey(),
  hubId: uuid('hub_id').references(() => sihliconHubs.id).notNull(),
  // Heat generation
  heatGeneratedKwh: integer('heat_generated_kwh').notNull(), // Heat generated in Wh
  periodStart: timestamp('period_start').notNull(), // Start of accounting period
  periodEnd: timestamp('period_end').notNull(), // End of accounting period
  // Credit calculation
  heatCreditChf: integer('heat_credit_chf'), // Heat credit in centimes (if monetized)
  // Source of heat
  sourceType: text('source_type').notNull(), // 'compute' | 'battery-charge' | 'direct-heating'
  sourceJobId: uuid('source_job_id').references(() => computeJobs.id), // If from compute job
  // Settlement
  settled: boolean('settled').default(false).notNull(), // Has this been settled/paid?
  settledAt: timestamp('settled_at'),
  // Metadata
  metadata: text('metadata'), // JSON string for flexible metadata
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// LEG marketplace transactions - inter-Hub compute/heat trading
export const marketplaceTransactions = pgTable('marketplace_transactions', {
  id: uuid('id').defaultRandom().primaryKey(),
  // Transaction parties
  sellerHubId: uuid('seller_hub_id').references(() => sihliconHubs.id).notNull(), // Hub providing service
  buyerHubId: uuid('buyer_hub_id').references(() => sihliconHubs.id).notNull(), // Hub consuming service
  // Transaction type
  transactionType: text('transaction_type').notNull(), // 'compute' | 'storage' | 'heat' | 'energy'
  // Resource details
  resourceAmount: integer('resource_amount').notNull(), // Amount in base units (kWh, GB, etc.)
  resourceUnit: text('resource_unit').notNull(), // 'kwh' | 'gb' | 'compute-hours'
  // Pricing
  pricePerUnitChf: integer('price_per_unit_chf').notNull(), // Price per unit in centimes
  totalPriceChf: integer('total_price_chf').notNull(), // Total price in centimes
  // Settlement
  status: text('status').default('pending').notNull(), // 'pending' | 'confirmed' | 'settled' | 'cancelled'
  settledAt: timestamp('settled_at'),
  // Related resources
  relatedJobId: uuid('related_job_id').references(() => computeJobs.id), // If compute transaction
  relatedManifestId: uuid('related_manifest_id').references(() => storageManifests.id), // If storage transaction
  // Metadata
  metadata: text('metadata'), // JSON string for flexible metadata
  createdAt: timestamp('created_at').defaultNow().notNull(),
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

export type EmailSubscriber = typeof emailSubscribers.$inferSelect
export type NewEmailSubscriber = typeof emailSubscribers.$inferInsert

export type SihliconHub = typeof sihliconHubs.$inferSelect
export type NewSihliconHub = typeof sihliconHubs.$inferInsert

export type ComputeJob = typeof computeJobs.$inferSelect
export type NewComputeJob = typeof computeJobs.$inferInsert

export type StorageManifest = typeof storageManifests.$inferSelect
export type NewStorageManifest = typeof storageManifests.$inferInsert

export type StorageReplica = typeof storageReplicas.$inferSelect
export type NewStorageReplica = typeof storageReplicas.$inferInsert

export type HeatAccounting = typeof heatAccounting.$inferSelect
export type NewHeatAccounting = typeof heatAccounting.$inferInsert

export type MarketplaceTransaction = typeof marketplaceTransactions.$inferSelect
export type NewMarketplaceTransaction = typeof marketplaceTransactions.$inferInsert
