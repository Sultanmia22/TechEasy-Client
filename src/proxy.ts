import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  const path = request.nextUrl.pathname

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Protected routes that only customer can access (example)
  const customerOnlyRoutes = ['/cart']

  // Customer route check
  if (customerOnlyRoutes.includes(path) && token.role !== 'customer') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Public routes (like '/all-products', '/about', '/contact', '/') → no role check
  return NextResponse.next()
}

export const config = {
  matcher: ['/cart'], // only protected routes
}