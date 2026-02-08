import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { getSession } from '@/lib/auth'

const ADMIN_EMAILS = new Set(['admin@sihlhack.ch', 'gusta@sihlhack.ch'])

export async function POST() {
  const session = await getSession()
  const email = session?.participant?.email?.toLowerCase() || ''
  if (!session || !ADMIN_EMAILS.has(email)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Minimal bootstrap for new dashboard features (safe to run multiple times).
  await sql`create extension if not exists pgcrypto;`

  await sql`
    create table if not exists announcements (
      id uuid primary key default gen_random_uuid(),
      title text not null,
      body text not null,
      audience text not null default 'participants',
      published_at timestamptz not null default now(),
      created_at timestamptz not null default now()
    );
  `

  await sql`
    create table if not exists participant_notifications (
      id uuid primary key default gen_random_uuid(),
      participant_id uuid not null references participants(id),
      actor_participant_id uuid references participants(id),
      kind text not null,
      title text not null,
      body text,
      data text,
      read_at timestamptz,
      created_at timestamptz not null default now()
    );
  `

  await sql`
    create index if not exists idx_participant_notifications_participant_id_created_at
      on participant_notifications(participant_id, created_at desc);
  `

  await sql`
    create index if not exists idx_participant_notifications_participant_id_read_at
      on participant_notifications(participant_id, read_at);
  `

  await sql`
    create table if not exists snackathon_registrations (
      id uuid primary key default gen_random_uuid(),
      participant_id uuid not null references participants(id),
      snackathon_id text not null,
      status text not null default 'paid',
      stripe_payment_intent_id text,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      constraint unique_snackathon_per_participant unique(participant_id, snackathon_id)
    );
  `

  await sql`
    create index if not exists idx_snackathon_registrations_participant_id
      on snackathon_registrations(participant_id);
  `

  await sql`
    create index if not exists idx_snackathon_registrations_payment_intent
      on snackathon_registrations(stripe_payment_intent_id);
  `

  return NextResponse.json({ success: true })
}

