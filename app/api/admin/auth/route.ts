import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSessionToken,
  getAdminSession,
  resolveAdminRole,
  type AdminRole,
} from '@/lib/admin-auth';

const noStoreHeaders = { 'Cache-Control': 'no-store' };

function isSecureRequest(request: NextRequest) {
  return (
    request.nextUrl.protocol === 'https:' ||
    request.headers.get('x-forwarded-proto') === 'https'
  );
}

function setSessionCookie(response: NextResponse, role: AdminRole, secure: boolean) {
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: createAdminSessionToken(role),
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_SESSION_MAX_AGE,
    secure,
  });
}

function clearSessionCookie(response: NextResponse, secure: boolean) {
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: '',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
    secure,
  });
}

export async function GET() {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401, headers: noStoreHeaders },
    );
  }

  return NextResponse.json(
    { authenticated: true, role: session.role },
    { headers: noStoreHeaders },
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Некорректный запрос' },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const password =
    typeof body === 'object' && body !== null && 'password' in body
      ? String((body as { password?: unknown }).password ?? '')
      : '';

  const role = resolveAdminRole(password);

  if (!role) {
    return NextResponse.json(
      { error: 'Неверный пароль' },
      { status: 401, headers: noStoreHeaders },
    );
  }

  const response = NextResponse.json(
    { authenticated: true, role },
    { headers: noStoreHeaders },
  );
  setSessionCookie(response, role, isSecureRequest(request));

  return response;
}

export async function DELETE(request: NextRequest) {
  const response = NextResponse.json(
    { authenticated: false },
    { headers: noStoreHeaders },
  );
  clearSessionCookie(response, isSecureRequest(request));

  return response;
}
