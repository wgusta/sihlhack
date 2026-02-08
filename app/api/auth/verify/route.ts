import { NextRequest, NextResponse } from 'next/server'
import { createSessionToken, verifyMagicLink } from '@/lib/auth'

function safeRedirectPath(input: string | null | undefined): string {
  if (!input) return '/dashboard'
  // Prevent open-redirects: only allow same-origin relative paths.
  if (input.startsWith('/') && !input.startsWith('//')) return input
  return '/dashboard'
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const token = url.searchParams.get('token')
  const redirectTo = safeRedirectPath(url.searchParams.get('redirectTo'))

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login?error=invalid-link', url))
  }

  let participant
  try {
    participant = await verifyMagicLink(token)
  } catch (error) {
    console.error('[Auth Verify] Database error:', error)
    return NextResponse.redirect(new URL('/auth/login?error=verification-failed', url))
  }

  if (!participant) {
    return NextResponse.redirect(new URL('/auth/login?error=invalid-token', url))
  }

  const sessionToken = createSessionToken(participant.id)

  const res = NextResponse.redirect(new URL(redirectTo, url))
  res.cookies.set('sihlhack_session', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: '/',
  })

  return res
}

