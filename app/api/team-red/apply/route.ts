import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { teamRedApplications } from '@/lib/db/schema'
import { sendTeamRedApplicationConfirmationEmail, sendTeamRedApplicationNotificationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      email,
      name,
      phone,
      bio,
      portfolio,
      githubProfile,
      ctfProfile,
      securityExperience,
      motivation,
    } = body

    // Basic validation
    if (!email || !name || !securityExperience || !motivation) {
      return NextResponse.json(
        { error: 'Erforderliche Felder fehlen' },
        { status: 400 }
      )
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      )
    }

    // Store application in database
    const application = await db.insert(teamRedApplications).values({
      email,
      name,
      phone: phone || null,
      bio: bio || null,
      portfolio: portfolio || null,
      githubProfile: githubProfile || null,
      ctfProfile: ctfProfile || null,
      securityExperience,
      motivation,
    }).returning()

    // Send confirmation email to applicant
    await sendTeamRedApplicationConfirmationEmail(email, name)

    // Send notification email to admin
    await sendTeamRedApplicationNotificationEmail({
      applicantName: name,
      applicantEmail: email,
      securityExperience,
      motivation,
      githubProfile,
      ctfProfile,
      portfolio,
      phone,
      bio,
    })

    console.log('Team Red application stored:', {
      id: application[0]?.id,
      email,
      name,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: 'Bewerbung erfolgreich eingereicht' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Team Red application error:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}
