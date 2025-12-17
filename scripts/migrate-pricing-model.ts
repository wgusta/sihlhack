import { config } from 'dotenv'
import { neon } from '@neondatabase/serverless'

config({ path: '.env.local' })

const sql = neon(process.env.DATABASE_URL!)

async function migrate() {
  console.log('Running pricing model migration...')

  try {
    // 1. Create budget_positions table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS budget_positions (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        name text NOT NULL,
        category text NOT NULL,
        amount_chf integer NOT NULL,
        is_fixed boolean DEFAULT true NOT NULL,
        description text,
        sort_order integer DEFAULT 0 NOT NULL,
        created_at timestamp DEFAULT now() NOT NULL,
        updated_at timestamp DEFAULT now() NOT NULL
      )
    `
    console.log('✓ budget_positions table ready')

    // 2. Add new columns to event_config if they don't exist
    // Check if columns exist first
    const columns = await sql`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name = 'event_config'
    `
    const columnNames = columns.map(c => c.column_name)

    if (!columnNames.includes('prize_first')) {
      await sql`ALTER TABLE event_config ADD COLUMN prize_first integer DEFAULT 50 NOT NULL`
      console.log('✓ Added prize_first column')
    } else {
      console.log('- prize_first column already exists')
    }

    if (!columnNames.includes('prize_second')) {
      await sql`ALTER TABLE event_config ADD COLUMN prize_second integer DEFAULT 30 NOT NULL`
      console.log('✓ Added prize_second column')
    } else {
      console.log('- prize_second column already exists')
    }

    if (!columnNames.includes('prize_third')) {
      await sql`ALTER TABLE event_config ADD COLUMN prize_third integer DEFAULT 20 NOT NULL`
      console.log('✓ Added prize_third column')
    } else {
      console.log('- prize_third column already exists')
    }

    // 3. Update registration fee default (optional, for new events)
    await sql`
      UPDATE event_config
      SET registration_fee_chf = 48000
      WHERE id = '00000000-0000-0000-0000-000000000001'
      AND registration_fee_chf = 15000
    `
    console.log('✓ Updated registration fee to CHF 480')

    // 4. Drop old columns if they exist (optional cleanup)
    if (columnNames.includes('prize_pool_percentage')) {
      await sql`ALTER TABLE event_config DROP COLUMN prize_pool_percentage`
      console.log('✓ Dropped prize_pool_percentage column')
    }

    if (columnNames.includes('operations_percentage')) {
      await sql`ALTER TABLE event_config DROP COLUMN operations_percentage`
      console.log('✓ Dropped operations_percentage column')
    }

    console.log('')
    console.log('Migration complete!')
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

migrate()
