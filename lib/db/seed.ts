import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { eventConfig, fundAllocations } from './schema'

config({ path: '.env.local' })

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql)

async function seed() {
  console.log('Seeding database...')

  // Calculate dates: event in ~10 weeks, registration deadline 1 week before
  const eventDate = new Date()
  eventDate.setDate(eventDate.getDate() + 70) // ~10 weeks from now

  const registrationDeadline = new Date(eventDate)
  registrationDeadline.setDate(registrationDeadline.getDate() - 7) // 1 week before event

  const refundDeadline = new Date(eventDate)
  refundDeadline.setDate(refundDeadline.getDate() - 14) // 2 weeks before event

  // Insert event config
  await db.insert(eventConfig).values({
    id: '00000000-0000-0000-0000-000000000001',
    eventName: 'sihlhack 2025',
    eventDate,
    registrationDeadline,
    refundDeadline,
    minParticipants: 30,
    maxParticipants: 100,
    registrationFeeChf: 15000, // 150 CHF
    prizePoolPercentage: 70,
    operationsPercentage: 30,
    registrationOpen: true,
    proposalsOpen: true,
    eventStatus: 'monitoring',
  }).onConflictDoUpdate({
    target: eventConfig.id,
    set: {
      eventName: 'sihlhack 2025',
      eventDate,
      registrationDeadline,
      refundDeadline,
      updatedAt: new Date(),
    },
  })

  console.log('Event config created/updated')

  // Initialize fund allocations
  await db.insert(fundAllocations).values([
    {
      category: 'prize_pool',
      amountChf: 0,
      percentage: 70,
    },
    {
      category: 'operations',
      amountChf: 0,
      percentage: 30,
    },
  ]).onConflictDoNothing()

  console.log('Fund allocations initialized')
  console.log('Seed complete!')
}

seed().catch(console.error)
