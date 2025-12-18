import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { emailSubscribers } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, source = 'website', interests = [] } = body

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existing = await db.query.emailSubscribers.findFirst({
      where: eq(emailSubscribers.email, email.toLowerCase()),
    })

    if (existing) {
      // If unsubscribed, resubscribe
      if (existing.unsubscribedAt) {
        await db
          .update(emailSubscribers)
          .set({ unsubscribedAt: null })
          .where(eq(emailSubscribers.id, existing.id))

        return NextResponse.json({ success: true, resubscribed: true })
      }

      // Already subscribed
      return NextResponse.json({ success: true, alreadySubscribed: true })
    }

    // Create new subscriber
    await db.insert(emailSubscribers).values({
      email: email.toLowerCase(),
      source,
      interests,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}
