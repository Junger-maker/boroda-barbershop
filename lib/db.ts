// lib/db.ts
import { tursoExecute, mapRows, TursoArg } from './turso-http';

// --- Типы данных ---
export type Barber = { id: number; name: string; photo_url: string | null; description: string | null };
export type Grade = { id: number; name: string; icon: string };
export type Service = { id: number; name: string; price: number; grade_id: number };
export type Booking = { 
  id: number; barber_id: number; service_id: number; client_name: string; 
  client_phone: string; date: string; time: string; created_at: string;
  barber_name?: string; service_name?: string; // Для джоинов
};

// --- Барберы ---
export async function getBarbers(): Promise<Barber[]> {
  const result = await tursoExecute('SELECT * FROM barbers ORDER BY id');
  return mapRows<Barber>(result);
}

export async function createBarber(name: string, photo_url: string | null, description: string | null): Promise<number> {
  const result = await tursoExecute(
    'INSERT INTO barbers (name, photo_url, description) VALUES (?, ?, ?)',
    [{ type: 'text', value: name }, { type: 'text', value: photo_url }, { type: 'text', value: description }]
  );
  return result.last_insert_rowid!;
}

export async function updateBarber(id: number, name: string, photo_url: string | null, description: string | null): Promise<void> {
  await tursoExecute(
    'UPDATE barbers SET name = ?, photo_url = ?, description = ? WHERE id = ?',
    [{ type: 'text', value: name }, { type: 'text', value: photo_url }, { type: 'text', value: description }, { type: 'integer', value: id }]
  );
}

export async function deleteBarber(id: number): Promise<void> {
  await tursoExecute('DELETE FROM barbers WHERE id = ?', [{ type: 'integer', value: id }]);
}

// --- Градации ---
export async function getGrades(): Promise<Grade[]> {
  const result = await tursoExecute('SELECT * FROM grades ORDER BY id');
  return mapRows<Grade>(result);
}

export async function createGrade(name: string, icon: string): Promise<number> {
  const result = await tursoExecute('INSERT INTO grades (name, icon) VALUES (?, ?)', [
    { type: 'text', value: name }, { type: 'text', value: icon }
  ]);
  return result.last_insert_rowid!;
}

export async function updateGrade(id: number, name: string, icon: string): Promise<void> {
  await tursoExecute('UPDATE grades SET name = ?, icon = ? WHERE id = ?', [
    { type: 'text', value: name }, { type: 'text', value: icon }, { type: 'integer', value: id }
  ]);
}

export async function deleteGrade(id: number): Promise<void> {
  await tursoExecute('DELETE FROM grades WHERE id = ?', [{ type: 'integer', value: id }]);
}

// --- Услуги ---
export async function getServices(): Promise<Service[]> {
  const result = await tursoExecute('SELECT * FROM services ORDER BY id');
  return mapRows<Service>(result);
}

export async function createService(name: string, price: number, grade_id: number): Promise<number> {
  const result = await tursoExecute('INSERT INTO services (name, price, grade_id) VALUES (?, ?, ?)', [
    { type: 'text', value: name }, { type: 'integer', value: price }, { type: 'integer', value: grade_id }
  ]);
  return result.last_insert_rowid!;
}

export async function updateService(id: number, name: string, price: number, grade_id: number): Promise<void> {
  await tursoExecute('UPDATE services SET name = ?, price = ?, grade_id = ? WHERE id = ?', [
    { type: 'text', value: name }, { type: 'integer', value: price }, { type: 'integer', value: grade_id }, { type: 'integer', value: id }
  ]);
}

export async function deleteService(id: number): Promise<void> {
  await tursoExecute('DELETE FROM services WHERE id = ?', [{ type: 'integer', value: id }]);
}

// --- Записи (Bookings) ---
export async function getBookings(): Promise<Booking[]> {
  const result = await tursoExecute(`
    SELECT b.*, bar.name as barber_name, s.name as service_name 
    FROM bookings b
    LEFT JOIN barbers bar ON b.barber_id = bar.id
    LEFT JOIN services s ON b.service_id = s.id
    ORDER BY b.date DESC, b.time DESC
  `);
  return mapRows<Booking>(result);
}

export async function createBooking(
  barber_id: number, service_id: number, client_name: string, client_phone: string, date: string, time: string
): Promise<number> {
  const result = await tursoExecute(
    `INSERT INTO bookings (barber_id, service_id, client_name, client_phone, date, time) VALUES (?, ?, ?, ?, ?, ?)`,
    [
      { type: 'integer', value: barber_id }, { type: 'integer', value: service_id },
      { type: 'text', value: client_name }, { type: 'text', value: client_phone },
      { type: 'text', value: date }, { type: 'text', value: time }
    ]
  );
  return result.last_insert_rowid!;
}

export async function deleteBooking(id: number): Promise<void> {
  await tursoExecute('DELETE FROM bookings WHERE id = ?', [{ type: 'integer', value: id }]);
}