'use client';

import { useScrollAnimation } from './use-scroll-animation';

const SERVICES = [
  { name: 'Стрижка', price: 'от 1 200₽', desc: 'Классические и современные мужские стрижки. Мастер подберёт форму, идеально подходящую вашему типу лица.' },
  { name: 'Борода', price: 'от 800₽', desc: 'Моделирование, стрижка и уход за бородой. Придадим аккуратную форму и ухоженный вид.' },
  { name: 'Усы', price: 'от 500₽', desc: 'Коррекция и оформление усов. Чёткие контуры и аккуратная форма.' },
  { name: 'Камуфляж седины', price: 'от 1 500₽', desc: 'Естественное тонирование седых волос. Результат неотличим от естественного цвета.' },
  { name: 'Укладка', price: 'от 600₽', desc: 'Профессиональная укладка с премиум-средствами. Стиль, который держится весь день.' },
  { name: 'Комплекс', price: 'от 2 000₽', desc: 'Стрижка + борода + укладка в одном визите. Полный образ от мастера.' },
];

export default function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Наши <span className="text-primary">услуги</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {SERVICES?.map?.((s: any, i: number) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 sm:p-8 border-b-2 border-transparent hover:border-primary transition-all duration-300 group hover:-translate-y-1"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <h3 className="font-display text-xl font-semibold mb-2 tracking-wide group-hover:text-primary transition-colors">
                {s?.name ?? ''}
              </h3>
              <p className="text-primary font-display text-2xl font-bold mb-4">{s?.price ?? ''}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{s?.desc ?? ''}</p>
            </div>
          )) ?? []}
        </div>
      </div>
    </section>
  );
}
