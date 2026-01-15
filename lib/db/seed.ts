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
    registrationFeeChf: 12000, // CHF 120
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

  // Initialize budget positions for lean community hackathon
  const budgetItems = [
    {
      name: 'Location',
      category: 'venue',
      amountChf: 100000, // CHF 1'000 (community space/university)
      isFixed: true,
      description: 'Community Space / Uni für 2 Tage',
      sortOrder: 1,
    },
    {
      name: 'Catering',
      category: 'catering',
      amountChf: 150000, // CHF 1'500
      isFixed: true,
      description: 'Einfache Verpflegung für alle',
      sortOrder: 2,
    },
    {
      name: 'Hardware & Material',
      category: 'equipment',
      amountChf: 80000, // CHF 800 (additional components, most sponsored)
      isFixed: true,
      description: 'Zusätzliche Komponenten, Kabel, Verbrauchsmaterial',
      sortOrder: 3,
    },
    {
      name: 'Marketing & Druck',
      category: 'marketing',
      amountChf: 20000, // CHF 200
      isFixed: true,
      description: 'Flyer, Badges, Dokumentation',
      sortOrder: 4,
    },
    {
      name: 'Reserve',
      category: 'other',
      amountChf: 30000, // CHF 300
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
  console.log('Budget total: CHF 3\'800')
  console.log('Ticket price: CHF 120')
  console.log('Break-even: ~32 participants')
}

seed().catch(console.error)
