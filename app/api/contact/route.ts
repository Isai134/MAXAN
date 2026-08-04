import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const required = ['firstName', 'lastName', 'email', 'message'];
  if (required.some((field) => typeof body[field] !== 'string' || !body[field])) {
    return NextResponse.json({ ok: false, error: 'Faltan campos requeridos.' }, { status: 400 });
  }

  return NextResponse.json({ ok: true, status: 'queued' }, { status: 202 });
}
