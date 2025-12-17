import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { db, eventConfig } from '@/lib/db'
import { z } from 'zod'

const updateConfigSchema = z.object({
  eventDate: z.string().optional(),
  registrationDeadline: z.string().optional(),
  refundDeadline: z.string().optional(),
  minParticipants: z.number().min(1).optional(),
  maxParticipants: z.number().min(1).optional(),
  registrationFeeChf: z.number().min(0).optional(),
  registrationOpen: z.boolean().optional(),
  proposalsOpen: z.boolean().optional(),
})

// GET /api/admin/config - Get event configuration
export async function GET() {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 403 })
  }

  const [config] = await db.select().from(eventConfig).limit(1)

  return NextResponse.json({ config })
}

// PUT /api/admin/config - Update event configuration
export async function PUT(request: NextRequest) {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 403 })
  }

  const body = await request.json()
  const result = updateConfigSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { error: 'Validierungsfehler', issues: result.error.issues },
      { status: 400 }
    )
  }

  const updates: Record<string, unknown> = { updatedAt: new Date() }

  if (result.data.eventDate) {
    updates.eventDate = new Date(result.data.eventDate)
  }
  if (result.data.registrationDeadline) {
    updates.registrationDeadline = new Date(result.data.registrationDeadline)
  }
  if (result.data.refundDeadline) {
    updates.refundDeadline = new Date(result.data.refundDeadline)
  }
  if (result.data.minParticipants !== undefined) {
    updates.minParticipants = result.data.minParticipants
  }
  if (result.data.maxParticipants !== undefined) {
    updates.maxParticipants = result.data.maxParticipants
  }
  if (result.data.registrationFeeChf !== undefined) {
    updates.registrationFeeChf = result.data.registrationFeeChf
  }
  if (result.data.registrationOpen !== undefined) {
    updates.registrationOpen = result.data.registrationOpen
  }
  if (result.data.proposalsOpen !== undefined) {
    updates.proposalsOpen = result.data.proposalsOpen
  }

  const [config] = await db
    .update(eventConfig)
    .set(updates)
    .returning()

  return NextResponse.json({ config })
}
