import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { and, eq, inArray } from 'drizzle-orm'
import { db, participants, snackathonRegistrations } from '@/lib/db'
import { createCheckoutSession } from '@/lib/stripe'
import { getSession } from '@/lib/auth'
import { SNACKATHONS, SNACKATHON_FEE_CHF_CENTIMES, type SnackathonId } from '@/lib/snackathons'
import { ensureNameSplitColumns } from '@/lib/db/ensure'

const snackathonIds = new Set(SNACKATHONS.map((s) => s.id))

const schema = z.object({
  selectedSnackathons: z.array(z.string()).min(1).max(3),
  // allow public checkout (no login) with minimal details
  email: z.string().email().optional(),
  firstName: z.string().min(1).max(80).optional(),
  lastName: z.string().min(1).max(80).optional(),
})

export async function POST(req: NextRequest) {
  await ensureNameSplitColumns()
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request', details: parsed.error.issues }, { status: 400 })
  }

  const selected = parsed.data.selectedSnackathons.filter((id) => snackathonIds.has(id as SnackathonId)) as SnackathonId[]
  if (selected.length === 0) {
    return NextResponse.json({ error: 'Select at least one snackathon' }, { status: 400 })
  }

  // Determine participant
  const session = await getSession()
  let participantId: string | null = session?.id ?? null
  let participantEmail: string | null = null

  if (participantId) {
    const [me] = await db
      .select({ id: participants.id, email: participants.email })
      .from(participants)
      .where(eq(participants.id, participantId))
      .limit(1)
    participantEmail = me?.email ?? null
  } else {
    const email = parsed.data.email
    const firstName = parsed.data.firstName
    const lastName = parsed.data.lastName
    if (!email || !firstName || !lastName) {
      return NextResponse.json({ error: 'Email, firstName, lastName required' }, { status: 400 })
    }
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim()

    const [existing] = await db
      .select({ id: participants.id })
      .from(participants)
      .where(eq(participants.email, email))
      .limit(1)

    if (existing) {
      participantId = existing.id
      await db
        .update(participants)
        .set({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          name: fullName,
          updatedAt: new Date(),
        })
        .where(eq(participants.id, participantId))
    } else {
      const [created] = await db
        .insert(participants)
        .values({
          email,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          name: fullName,
          registrationStatus: 'pending',
        })
        .returning({ id: participants.id })
      participantId = created.id
    }

    participantEmail = email
  }

  if (!participantId || !participantEmail) {
    return NextResponse.json({ error: 'Failed to resolve participant' }, { status: 500 })
  }

  // block double-registering for already paid snackathons
  const existingRegs = await db
    .select({ snackathonId: snackathonRegistrations.snackathonId })
    .from(snackathonRegistrations)
    .where(and(eq(snackathonRegistrations.participantId, participantId), inArray(snackathonRegistrations.snackathonId, selected)))

  const already = new Set(existingRegs.map((r) => r.snackathonId))
  const toBuy = selected.filter((id) => !already.has(id))
  if (toBuy.length === 0) {
    return NextResponse.json({ error: 'Already registered' }, { status: 400 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // Decide return page: if called from /snackathons keep user there
  const referer = req.headers.get('referer') || ''
  const returnToSnackathons = referer.includes('/snackathons')
  const successUrl = returnToSnackathons
    ? `${baseUrl}/snackathons?success=1`
    : `${baseUrl}/dashboard?snackathonSuccess=1`
  const cancelUrl = returnToSnackathons
    ? `${baseUrl}/snackathons?cancelled=1`
    : `${baseUrl}/dashboard?snackathonCancelled=1`

  const amountChf = SNACKATHON_FEE_CHF_CENTIMES * toBuy.length
  const productName = 'Snackathon Teilnahmegebühr'
  const productDescription = `Snackathon(s): ${toBuy.join(', ')}`

  const sessionCheckout = await createCheckoutSession({
    participantId,
    participantEmail,
    amountChf,
    successUrl,
    cancelUrl,
    productName,
    productDescription,
    metadata: {
      purpose: 'snackathon',
      snackathon_ids: toBuy.join(','),
    },
  })

  return NextResponse.json({ url: sessionCheckout.url })
}
