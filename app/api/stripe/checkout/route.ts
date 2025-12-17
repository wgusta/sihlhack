import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db, participants, eventConfig } from '@/lib/db'
import { eq } from 'drizzle-orm'
import { createCheckoutSession } from '@/lib/stripe'

const EVENT_CONFIG_ID = '00000000-0000-0000-0000-000000000001'

const checkoutSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  company: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, company } = checkoutSchema.parse(body)

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
      // Update name/company if changed
      await db
        .update(participants)
        .set({ name, company: company || null, updatedAt: new Date() })
        .where(eq(participants.id, participantId))
    } else {
      // Create new participant
      const [newParticipant] = await db
        .insert(participants)
        .values({
          email,
          name,
          company: company || null,
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
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
