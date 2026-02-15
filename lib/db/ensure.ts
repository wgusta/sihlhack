import { sql } from '@vercel/postgres'

let ensureNamesPromise: Promise<void> | null = null
let ensureSimRunsPromise: Promise<void> | null = null

export async function ensureNameSplitColumns() {
  if (!ensureNamesPromise) {
    ensureNamesPromise = (async () => {
      // participants
      await sql`alter table participants add column if not exists first_name text;`
      await sql`alter table participants add column if not exists last_name text;`

      // Backfill from legacy participants.name (best-effort)
      await sql`
        update participants
        set
          first_name = nullif(split_part(name, ' ', 1), ''),
          last_name = nullif(regexp_replace(name, '^\\S+\\s*', ''), '')
        where
          first_name is null
          and name is not null;
      `

      // team_red_applications
      await sql`alter table team_red_applications add column if not exists first_name text;`
      await sql`alter table team_red_applications add column if not exists last_name text;`

      await sql`
        update team_red_applications
        set
          first_name = nullif(split_part(name, ' ', 1), ''),
          last_name = nullif(regexp_replace(name, '^\\S+\\s*', ''), '')
        where
          first_name is null
          and name is not null;
      `
    })()
  }

  await ensureNamesPromise
}

export async function ensureSimulationRunColumns() {
  if (!ensureSimRunsPromise) {
    ensureSimRunsPromise = (async () => {
      await sql`alter table simulation_runs add column if not exists comment text;`
    })()
  }

  await ensureSimRunsPromise
}
