import { NextResponse } from 'next/server';

export function withSecurityHeaders(response: NextResponse) {
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  return response;
}
