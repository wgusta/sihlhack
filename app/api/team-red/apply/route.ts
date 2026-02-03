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

    // Store application in database first
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

    console.log('Team Red application stored:', {
      id: application[0]?.id,
      email,
      name,
      timestamp: new Date().toISOString(),
    })

    // Send emails asynchronously (non-blocking)
    Promise.all([
      sendTeamRedApplicationConfirmationEmail(email, name).catch(err => {
        console.error('Failed to send confirmation email:', err)
      }),
      sendTeamRedApplicationNotificationEmail({
        applicantName: name,
        applicantEmail: email,
        securityExperience,
        motivation,
        githubProfile,
        ctfProfile,
        portfolio,
        phone,
        bio,
      }).catch(err => {
        console.error('Failed to send admin notification email:', err)
      })
    ]).catch(err => {
      console.error('Email sending failed:', err)
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Bewerbung erfolgreich eingereicht',
        applicationId: application[0]?.id
      },
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
