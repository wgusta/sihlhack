import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { db, companies, historicalData } from '@/lib/db'
import { eq } from 'drizzle-orm'

const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/tiff',
  'image/webp',
  'application/pdf',
]

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB

// POST /api/upload - Upload historical data file
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

  // Check if company has signed NDA
  const [company] = await db
    .select()
    .from(companies)
    .where(eq(companies.id, companyId))
    .limit(1)

  if (!company) {
    return NextResponse.json({ error: 'Unternehmen nicht gefunden' }, { status: 404 })
  }

  if (!company.ndaSigned) {
    return NextResponse.json(
      { error: 'NDA muss vor dem Upload unterzeichnet werden' },
      { status: 403 }
    )
  }

  // Parse form data
  const formData = await request.formData()
  const file = formData.get('file') as File | null
  const title = formData.get('title') as string | null
  const description = formData.get('description') as string | null
  const dataType = formData.get('dataType') as string | null

  if (!file) {
    return NextResponse.json({ error: 'Keine Datei hochgeladen' }, { status: 400 })
  }

  if (!title) {
    return NextResponse.json({ error: 'Titel erforderlich' }, { status: 400 })
  }

  if (!dataType) {
    return NextResponse.json({ error: 'Datentyp erforderlich' }, { status: 400 })
  }

  // Validate file type
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: 'Ungültiger Dateityp. Erlaubt: JPEG, PNG, TIFF, WebP, PDF' },
      { status: 400 }
    )
  }

  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: 'Datei zu gross. Maximum: 50MB' },
      { status: 400 }
    )
  }

  // Upload to Vercel Blob
  const timestamp = Date.now()
  const filename = `${companyId}/${timestamp}-${file.name}`

  const blob = await put(filename, file, {
    access: 'public',
    addRandomSuffix: false,
  })

  // Create database entry
  const [data] = await db
    .insert(historicalData)
    .values({
      companyId,
      title,
      description: description || null,
      dataType,
      blobUrl: blob.url,
      ocrStatus: 'pending',
    })
    .returning()

  return NextResponse.json({ data }, { status: 201 })
}

// GET /api/upload - List company uploads
export async function GET() {
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

  const uploads = await db
    .select()
    .from(historicalData)
    .where(eq(historicalData.companyId, companyId))
    .orderBy(historicalData.createdAt)

  return NextResponse.json({ uploads })
}
