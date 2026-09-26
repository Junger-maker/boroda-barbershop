'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from './use-scroll-animation';

const BARBERS = ['Алексей К.', 'Дмитрий О.', 'Иван С.', 'Михаил Ч.'];
const DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const SCHEDULE: Record<string, string[]> = {
  'Понедельник': ['10:00–18:00', '12:00–21:00', 'Выходной', '10:00–18:00'],
  'Вторник': ['12:00–21:00', '10:00–18:00', '10:00–18:00', 'Выходной'],
  'Среда': ['10:00–18:00', 'Выходной', '12:00–21:00', '10:00–18:00'],
  'Четверг': ['Выходной', '10:00–18:00', '10:00–18:00', '12:00–21:00'],
  'Пятница': ['10:00–21:00', '10:00–21:00', '10:00–21:00', '10:00–21:00'],
  'Суббота': ['10:00–20:00', '10:00–20:00', '10:00–20:00', 'Выходной'],
  'Воскресенье': ['10:00–20:00', 'Выходной', '10:00–20:00', '10:00–20:00'],
};

export default function Schedule() {
  const ref = useScrollAnimation();
  const [openDay, setOpenDay] = useState<string | null>(null);

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Расписание <span className="text-primary">работы</span>
          </h2>
        </div>

        {/* Desktop table */}
        <div ref={ref} className="fade-up hidden md:block">
          <div className="bg-card rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
            <table className="w-full">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-4 font-display font-semibold text-sm uppercase tracking-wider">День</th>
                  {BARBERS?.map?.((b: string) => (
                    <th key={b} className="text-center p-4 font-display font-semibold text-sm uppercase tracking-wider">{b}</th>
                  )) ?? []}
                </tr>
              </thead>
              <tbody>
                {DAYS?.map?.((day: string, i: number) => (
                  <tr key={day} className={`border-t border-border ${i % 2 === 0 ? '' : 'bg-muted/20'}`}>
                    <td className="p-4 font-medium">{day}</td>
                    {(SCHEDULE?.[day] ?? [])?.map?.((time: string, j: number) => (
                      <td key={j} className={`text-center p-4 text-sm ${
                        time === 'Выходной' ? 'text-muted-foreground' : 'text-foreground'
                      }`}>
                        {time}
                      </td>
                    )) ?? []}
                  </tr>
                )) ?? []}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden space-y-2">
          {DAYS?.map?.((day: string) => {
            const isOpen = openDay === day;
            return (
              <div key={day} className="bg-card rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <button
                  onClick={() => setOpenDay(isOpen ? null : day)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-display font-semibold">{day}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <div className="px-4 pb-4 space-y-2">
                    {BARBERS?.map?.((b: string, j: number) => (
                      <div key={b} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{b}</span>
                        <span className={(SCHEDULE?.[day]?.[j] ?? '') === 'Выходной' ? 'text-muted-foreground' : 'text-foreground'}>
                          {SCHEDULE?.[day]?.[j] ?? '—'}
                        </span>
                      </div>
                    )) ?? []}
                  </div>
                </div>
              </div>
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}
