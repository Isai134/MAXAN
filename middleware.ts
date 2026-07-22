import { NextResponse } from 'next/server';
import { withSecurityHeaders } from '@/middleware/security';

export function middleware() {
  return withSecurityHeaders(NextResponse.next());
}

export const config = { matcher: '/((?!_next/static|_next/image|favicon.ico).*)' };
