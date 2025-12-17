import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { generateMagicLink } from '@/lib/auth'
import { sendMagicLinkEmail } from '@/lib/email'

const magicLinkSchema = z.object({
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = magicLinkSchema.parse(body)

    // Generate magic link (creates/updates participant in DB)
    const magicLink = await generateMagicLink(email)

    // Send email
    await sendMagicLinkEmail(email, magicLink)

    return NextResponse.json({
      success: true,
      message: 'Magic link sent to your email',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    console.error('Magic link error:', error)
    return NextResponse.json(
      { error: 'Failed to send magic link' },
      { status: 500 }
    )
  }
}
