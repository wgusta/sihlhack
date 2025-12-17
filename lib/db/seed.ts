import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { eventConfig, budgetPositions } from './schema'

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
    registrationFeeChf: 48000, // CHF 480
    prizeFirst: 50, // 50% to 1st place
    prizeSecond: 30, // 30% to 2nd place
    prizeThird: 20, // 20% to 3rd place
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
      registrationFeeChf: 48000,
      prizeFirst: 50,
      prizeSecond: 30,
      prizeThird: 20,
      updatedAt: new Date(),
    },
  })

  console.log('Event config created/updated')

  // Initialize budget positions
  const budgetItems = [
    {
      name: 'Location',
      category: 'venue',
      amountChf: 500000, // CHF 5'000
      isFixed: true,
      description: 'Veranstaltungsort für 2 Tage',
      sortOrder: 1,
    },
    {
      name: 'Catering',
      category: 'catering',
      amountChf: 400000, // CHF 4'000
      isFixed: true,
      description: 'Verpflegung für alle Teilnehmenden',
      sortOrder: 2,
    },
    {
      name: 'Technik & Equipment',
      category: 'equipment',
      amountChf: 300000, // CHF 3'000
      isFixed: true,
      description: 'Beamer, Bildschirme, Strom, Internet',
      sortOrder: 3,
    },
    {
      name: 'Marketing & Kommunikation',
      category: 'marketing',
      amountChf: 200000, // CHF 2'000
      isFixed: true,
      description: 'Website, Werbung, Material',
      sortOrder: 4,
    },
    {
      name: 'Diverses & Reserve',
      category: 'other',
      amountChf: 100000, // CHF 1'000
      isFixed: true,
      description: 'Unvorhergesehenes',
      sortOrder: 5,
    },
  ]

  for (const item of budgetItems) {
    await db.insert(budgetPositions).values(item).onConflictDoNothing()
  }

  console.log('Budget positions initialized')
  console.log('Seed complete!')
  console.log('')
  console.log('Budget total: CHF 15\'000')
  console.log('Ticket price: CHF 480')
  console.log('Break-even: ~32 participants')
}

seed().catch(console.error)
