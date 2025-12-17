import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes that require authentication
const protectedRoutes = ['/dashboard', '/admin']

// Routes that require company authentication
const companyRoutes = ['/company/dashboard', '/company/nda']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check for protected participant routes
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Check for protected company routes
  const isCompanyRoute = companyRoutes.some((route) =>
    pathname.startsWith(route)
  )

  if (isProtectedRoute) {
    // Check for session cookie
    const sessionToken = request.cookies.get('session_token')?.value

    if (!sessionToken) {
      // Redirect to login with return URL
      const loginUrl = new URL('/auth/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }

    // Note: We cannot validate the session here without making a DB call.
    // The actual session validation happens in the API routes and page components.
    // This middleware just checks for the presence of a session cookie.
  }

  if (isCompanyRoute) {
    // Check for company session cookie
    const companyToken = request.cookies.get('company_session')?.value

    if (!companyToken) {
      // Redirect to company registration
      const registerUrl = new URL('/company/register', request.url)
      return NextResponse.redirect(registerUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all protected routes
    '/dashboard/:path*',
    '/admin/:path*',
    '/company/dashboard/:path*',
    '/company/nda/:path*',
  ],
}
