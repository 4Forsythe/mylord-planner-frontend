import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { TokenEnum } from './services/auth-token.service'

export function middleware(request: NextRequest) {
  const { cookies } = request
  const url = new URL(request.url)

  const refreshToken = cookies.get(TokenEnum.REFRESH_TOKEN)?.value

  const isHome = url.pathname === '/'
  const isAuth = url.pathname.startsWith('/auth')
  const isDashboard = url.pathname.startsWith('/dashboard')

  if ((isHome || isAuth) && refreshToken) {
    return NextResponse.redirect(new URL('/dashboard', url.origin))
  }

  if (isAuth && !refreshToken) {
    return NextResponse.next()
  }

  if (isDashboard && !refreshToken) {
    return NextResponse.redirect(new URL('/auth', url.origin))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/auth/:path', '/:path']
}
