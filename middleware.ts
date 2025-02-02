// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token');

  // You could add a token or modify the request here
  if (!token) {
    return new Response('Authorization required', { status: 401 });
  }

  // Continue with the modified request
  return NextResponse.next();
}
