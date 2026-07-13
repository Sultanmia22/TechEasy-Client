import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  const path = request.nextUrl.pathname

  // /all-product (মেইন পেজ) — সবার জন্য খোলা
  if (path === '/all-product') {
    return NextResponse.next()
  }

  // /all-product/[id] — লগইন চেক
  if (path.startsWith('/all-product/') && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // /cart — লগইন চেক
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Customer role check for /cart
  if (path === '/cart' && token.role !== 'customer') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/cart',
    '/all-product',
    '/all-product/:path*',   
  ],
}