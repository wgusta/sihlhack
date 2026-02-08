import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env.local' })

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  // Avoid introspecting random schemas (drizzle-kit can prompt for renames).
  schemaFilter: ['public'],
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
})
