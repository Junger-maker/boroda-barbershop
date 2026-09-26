'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from './use-scroll-animation';

const FAQ_ITEMS = [
  {
    q: 'Как записаться?',
    a: 'Записаться можно через форму на сайте, по телефону +7 (495) 123-45-67 или написав нам в мессенджер MAX. Мы подберём удобное время и мастера.',
  },
  {
    q: 'Сколько длится стрижка?',
    a: 'Стандартная стрижка занимает 30–45 минут. Комплексные услуги (стрижка + борода + укладка) — около 1–1,5 часа. VIP-услуги могут занять до 2 часов.',
  },
  {
    q: 'Нужна ли предоплата?',
    a: 'Нет, предоплата не требуется. Оплата производится после оказания услуги. Мы просим только предупредить об отмене за 2 часа.',
  },
  {
    q: 'Работаете ли без записи?',
    a: 'Да, мы принимаем гостей без записи при наличии свободных мастеров. Однако рекомендуем записываться заранее, чтобы гарантированно попасть к любимому мастеру.',
  },
  {
    q: 'Какие способы оплаты?',
    a: 'Принимаем наличные, банковские карты (Visa, MasterCard, Мир), а также оплату через СБП. Подарочные сертификаты тоже принимаются.',
  },
  {
    q: 'Есть ли парковка?',
    a: 'Да, рядом с нашим барбершопом есть платная парковка. Также мы находимся в 5 минутах пешком от станции метро Арбатская.',
  },
];

export default function Faq() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Частые <span className="text-primary">вопросы</span>
          </h2>
        </div>

        <div ref={ref} className="space-y-3 fade-up">
          {FAQ_ITEMS?.map?.((item: any, i: number) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-card rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base pr-4">{item?.q ?? ''}</span>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                    {item?.a ?? ''}
                  </p>
                </div>
              </div>
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}
