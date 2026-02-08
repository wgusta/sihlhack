import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { verifyMagicLink, createSessionToken } from '@/lib/auth'

export const metadata = {
  title: 'Verifizierung | sihlhack',
  description: 'Dein Login wird verifiziert',
}

type Props = {
  searchParams: Promise<{ token?: string; redirectTo?: string }>
}

export default async function VerifyPage({ searchParams }: Props) {
  const params = await searchParams
  const token = params.token
  const redirectTo = params.redirectTo || '/dashboard'

  if (!token) {
    redirect('/auth/login?error=invalid-link')
  }

  try {
    const participant = await verifyMagicLink(token)

    if (!participant) {
      redirect('/auth/login?error=invalid-token')
    }

    // Create session token
    const sessionToken = createSessionToken(participant.id)

    // Set HTTP-only cookie
    const cookieStore = await cookies()
    cookieStore.set('sihlhack_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    })

    // Redirect to destination
    redirect(redirectTo)
  } catch (error) {
    console.error('Verify error:', error)
    redirect('/auth/login?error=verification-failed')
  }
}
