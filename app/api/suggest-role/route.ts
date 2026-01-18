import { NextRequest, NextResponse } from 'next/server'
import { sendRoleSuggestionEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { roleName, description, submitterName, submitterEmail } = body

    // Validate required fields
    if (!roleName || !description) {
      return NextResponse.json(
        { error: 'Bitte fülle alle Pflichtfelder aus' },
        { status: 400 }
      )
    }

    // Validate email if provided
    if (submitterEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submitterEmail)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      )
    }

    // Send email to hello@sihlhack.ch
    await sendRoleSuggestionEmail({
      roleName,
      description,
      submitterName,
      submitterEmail,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Vielen Dank! Dein Vorschlag wurde eingereicht.',
    })
  } catch (error) {
    console.error('Submit role suggestion error:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}
