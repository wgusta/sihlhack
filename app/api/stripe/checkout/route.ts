import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db, participants, payments, eventConfig } from '@/lib/db'
import { eq, and, gt } from 'drizzle-orm'
import { createCheckoutSession } from '@/lib/stripe'
import { ensureNameSplitColumns } from '@/lib/db/ensure'

const EVENT_CONFIG_ID = '00000000-0000-0000-0000-000000000001'

const checkoutSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  company: z.string().optional(),
  primaryRole: z.string().optional(),
  secondaryRole: z.string().optional(),
  skills: z.array(z.string()).optional(),
  lookingForTeam: z.boolean().optional(),
  teamName: z.string().optional(),
  bio: z.string().optional(),
  linkedinUrl: z.string().optional(),
  githubUrl: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    await ensureNameSplitColumns()
    const body = await request.json()
    const { email, firstName, lastName, company, primaryRole, secondaryRole, skills, lookingForTeam, teamName, bio, linkedinUrl, githubUrl } = checkoutSchema.parse(body)
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim()

    // Check if participant already exists
    const [existingParticipant] = await db
      .select()
      .from(participants)
      .where(eq(participants.email, email))
      .limit(1)

    if (existingParticipant?.registrationStatus === 'paid') {
      return NextResponse.json(
        { error: 'Diese E-Mail ist bereits registriert' },
        { status: 400 }
      )
    }

    // Create or update participant
    let participantId: string

    if (existingParticipant) {
      participantId = existingParticipant.id
      await db
        .update(participants)
        .set({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          name: fullName,
          company: company || null,
          primaryRole: primaryRole || null,
          secondaryRole: secondaryRole || null,
          skills: skills || null,
          lookingForTeam: lookingForTeam ?? true,
          teamName: teamName || null,
          bio: bio || null,
          linkedinUrl: linkedinUrl || null,
          githubUrl: githubUrl || null,
          updatedAt: new Date(),
        })
        .where(eq(participants.id, participantId))
    } else {
      // Create new participant
      const [newParticipant] = await db
        .insert(participants)
        .values({
          email,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          name: fullName,
          company: company || null,
          primaryRole: primaryRole || null,
          secondaryRole: secondaryRole || null,
          skills: skills || null,
          lookingForTeam: lookingForTeam ?? true,
          teamName: teamName || null,
          bio: bio || null,
          linkedinUrl: linkedinUrl || null,
          githubUrl: githubUrl || null,
          registrationStatus: 'pending',
        })
        .returning({ id: participants.id })
      participantId = newParticipant.id
    }

    // Get event config for fee
    const [config] = await db
      .select()
      .from(eventConfig)
      .where(eq(eventConfig.id, EVENT_CONFIG_ID))
      .limit(1)

    if (!config) {
      return NextResponse.json(
        { error: 'Event configuration not found' },
        { status: 500 }
      )
    }

    if (!config.registrationOpen) {
      return NextResponse.json(
        { error: 'Registration is closed' },
        { status: 400 }
      )
    }

    // Rate limit: reject if a pending payment was created in last 60s
    const oneMinuteAgo = new Date(Date.now() - 60_000)
    const [recentPending] = await db
      .select({ id: payments.id })
      .from(payments)
      .where(
        and(
          eq(payments.participantId, participantId),
          eq(payments.status, 'pending'),
          gt(payments.createdAt, oneMinuteAgo)
        )
      )
      .limit(1)

    if (recentPending) {
      return NextResponse.json(
        { error: 'Bitte warte kurz, bevor du es erneut versuchst.' },
        { status: 429 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    // Create Stripe checkout session
    const session = await createCheckoutSession({
      participantId,
      participantEmail: email,
      amountChf: config.registrationFeeChf,
      successUrl: `${baseUrl}/register/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${baseUrl}/register?cancelled=true`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Checkout error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to create checkout session: ${errorMessage}` },
      { status: 500 }
    )
  }
}
