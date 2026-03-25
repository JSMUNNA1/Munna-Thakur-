import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Add a custom header to indicate it's been through middleware
  const response = NextResponse.next()
  response.headers.set('x-custom-middleware', 'true')
  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}
