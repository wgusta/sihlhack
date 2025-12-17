import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db, companies } from '@/lib/db'
import { eq } from 'drizzle-orm'

const createCompanySchema = z.object({
  name: z.string().min(2, 'Firmenname muss mindestens 2 Zeichen haben').max(100),
  contactPerson: z.string().min(2, 'Kontaktperson erforderlich').max(100),
  contactEmail: z.string().email('Ungültige E-Mail-Adresse'),
  industry: z.string().max(100).optional(),
  historicalPeriod: z.string().max(100).optional(),
})

// POST /api/companies - Register company
export async function POST(request: NextRequest) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ungültiges JSON' }, { status: 400 })
  }

  const result = createCompanySchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validierungsfehler', issues: result.error.issues },
      { status: 400 }
    )
  }

  const { name, contactPerson, contactEmail, industry, historicalPeriod } = result.data

  // Check if email already exists
  const [existing] = await db
    .select()
    .from(companies)
    .where(eq(companies.contactEmail, contactEmail))
    .limit(1)

  if (existing) {
    return NextResponse.json(
      { error: 'Diese E-Mail-Adresse ist bereits registriert' },
      { status: 400 }
    )
  }

  // Create company
  const [company] = await db
    .insert(companies)
    .values({
      name,
      contactPerson,
      contactEmail,
      industry: industry || null,
      historicalPeriod: historicalPeriod || null,
    })
    .returning()

  // Set company session cookie
  const cookieStore = await cookies()
  const sessionValue = Buffer.from(JSON.stringify({
    companyId: company.id,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
  })).toString('base64url')

  cookieStore.set('company_session', sessionValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: '/',
  })

  return NextResponse.json({ company }, { status: 201 })
}

// GET /api/companies - Get current company (from session)
export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get('company_session')?.value

  if (!session) {
    return NextResponse.json({ error: 'Nicht authentifiziert' }, { status: 401 })
  }

  try {
    const payload = JSON.parse(Buffer.from(session, 'base64url').toString())
    if (payload.exp < Date.now()) {
      return NextResponse.json({ error: 'Sitzung abgelaufen' }, { status: 401 })
    }

    const [company] = await db
      .select()
      .from(companies)
      .where(eq(companies.id, payload.companyId))
      .limit(1)

    if (!company) {
      return NextResponse.json({ error: 'Unternehmen nicht gefunden' }, { status: 404 })
    }

    return NextResponse.json({ company })
  } catch {
    return NextResponse.json({ error: 'Ungültige Sitzung' }, { status: 401 })
  }
}
