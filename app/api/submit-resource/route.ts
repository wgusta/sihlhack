import { NextRequest, NextResponse } from 'next/server'
import { sendResourceSubmissionEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { packageId, packageName, repoName, repoUrl, license, description, submitterEmail, submitterName } = body

    // Validate required fields
    if (!repoName || !repoUrl || !packageId) {
      return NextResponse.json(
        { error: 'Bitte fülle alle Pflichtfelder aus' },
        { status: 400 }
      )
    }

    // Validate URL
    try {
      new URL(repoUrl)
    } catch {
      return NextResponse.json(
        { error: 'Ungültige URL' },
        { status: 400 }
      )
    }

    // Send email to hello@sihlhack.ch
    await sendResourceSubmissionEmail({
      packageId,
      packageName,
      repoName,
      repoUrl,
      license,
      description,
      submitterEmail,
      submitterName,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Vielen Dank! Dein Vorschlag wurde eingereicht.',
    })
  } catch (error) {
    console.error('Submit resource error:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}
