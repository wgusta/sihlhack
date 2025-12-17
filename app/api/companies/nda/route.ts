import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db, companies } from '@/lib/db'
import { eq } from 'drizzle-orm'

const signNdaSchema = z.object({
  signatureName: z.string().min(2, 'Unterschrift erforderlich'),
  agreed: z.boolean().refine(val => val === true, 'Zustimmung erforderlich'),
})

// POST /api/companies/nda - Sign NDA
export async function POST(request: NextRequest) {
  const cookieStore = await cookies()
  const session = cookieStore.get('company_session')?.value

  if (!session) {
    return NextResponse.json({ error: 'Nicht authentifiziert' }, { status: 401 })
  }

  let companyId: string
  try {
    const payload = JSON.parse(Buffer.from(session, 'base64url').toString())
    if (payload.exp < Date.now()) {
      return NextResponse.json({ error: 'Sitzung abgelaufen' }, { status: 401 })
    }
    companyId = payload.companyId
  } catch {
    return NextResponse.json({ error: 'Ungültige Sitzung' }, { status: 401 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ungültiges JSON' }, { status: 400 })
  }

  const result = signNdaSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validierungsfehler', issues: result.error.issues },
      { status: 400 }
    )
  }

  // Update company with NDA signature
  const [company] = await db
    .update(companies)
    .set({
      ndaSigned: true,
      ndaSignedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(companies.id, companyId))
    .returning()

  if (!company) {
    return NextResponse.json({ error: 'Unternehmen nicht gefunden' }, { status: 404 })
  }

  return NextResponse.json({ success: true, company })
}
