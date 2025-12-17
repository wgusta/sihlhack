import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { verifyMagicLink, createSessionToken } from '@/lib/auth'
import { cookies } from 'next/headers'

const verifySchema = z.object({
  token: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = verifySchema.parse(body)

    const participant = await verifyMagicLink(token)

    if (!participant) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    // Create session token
    const sessionToken = createSessionToken(participant.id)

    // Set HTTP-only cookie
    const cookieStore = await cookies()
    cookieStore.set('session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    })

    return NextResponse.json({
      success: true,
      participant: {
        id: participant.id,
        email: participant.email,
        name: participant.name,
        registrationStatus: participant.registrationStatus,
      },
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid token format' },
        { status: 400 }
      )
    }

    console.error('Verify error:', error)
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    )
  }
}
