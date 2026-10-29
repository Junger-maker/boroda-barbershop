import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export type AdminRole = 'full' | 'demo';
export type AdminSession = { role: AdminRole };

export const ADMIN_SESSION_COOKIE = 'boroda_admin_session';
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 12; // 12 часов

// Пароли можно переопределить через переменные окружения.
const FULL_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'boroda2024';
const DEMO_ADMIN_PASSWORD = process.env.ADMIN_DEMO_PASSWORD || 'boroda2026';

// Секрет для подписи cookie. TURSO_AUTH_TOKEN уже является секретом
// и стабилен между перезапусками, поэтому используем его как запасной вариант.
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ||
  process.env.TURSO_AUTH_TOKEN ||
  'boroda-admin-session-secret';

function sha256(value: string) {
  return createHash('sha256').update(value).digest();
}

function safeEqual(a: string, b: string) {
  // Сравниваем хеши одинаковой длины, чтобы не зависеть от длины пароля.
  return timingSafeEqual(sha256(a), sha256(b));
}

function sign(payload: string) {
  return createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
}

export function resolveAdminRole(password: string): AdminRole | null {
  if (!password) return null;
  if (safeEqual(password, FULL_ADMIN_PASSWORD)) return 'full';
  if (safeEqual(password, DEMO_ADMIN_PASSWORD)) return 'demo';
  return null;
}

export function createAdminSessionToken(role: AdminRole): string {
  const expiresAt = Math.floor(Date.now() / 1000) + ADMIN_SESSION_MAX_AGE;
  const payload = `${role}.${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}

export function readAdminSessionToken(token: string | null | undefined): AdminSession | null {
  if (!token) return null;

  const [role, expiresAtRaw, signature] = token.split('.');
  if ((role !== 'full' && role !== 'demo') || !expiresAtRaw || !signature) return null;

  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || expiresAt <= Math.floor(Date.now() / 1000)) return null;

  const expected = sign(`${role}.${expiresAtRaw}`);
  if (signature.length !== expected.length) return null;

  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (signatureBuffer.length !== expectedBuffer.length) return null;
  if (!timingSafeEqual(signatureBuffer, expectedBuffer)) return null;

  return { role };
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  return readAdminSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
}

type AdminGuardResult = { session: AdminSession } | { response: NextResponse };

/**
 * Проверяет сессию администратора.
 * access: 'read' — можно обеим ролям, 'write' — только полной учётке.
 */
export async function requireAdmin(access: 'read' | 'write'): Promise<AdminGuardResult> {
  const session = await getAdminSession();

  if (!session) {
    return {
      response: NextResponse.json({ error: 'Требуется авторизация' }, { status: 401 }),
    };
  }

  if (access === 'write' && session.role !== 'full') {
    return {
      response: NextResponse.json(
        { error: 'У вас нет прав вносить изменения' },
        { status: 403 },
      ),
    };
  }

  return { session };
}
