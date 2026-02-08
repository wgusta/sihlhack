import { redirect } from 'next/navigation'

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
  const redirectTo = params.redirectTo

  if (!token) {
    redirect('/auth/login?error=invalid-link')
  }

  const qs = new URLSearchParams({ token })
  if (redirectTo) qs.set('redirectTo', redirectTo)
  // Cookies can only be mutated in a Route Handler/Server Action, so delegate.
  redirect(`/api/auth/verify?${qs.toString()}`)
}
