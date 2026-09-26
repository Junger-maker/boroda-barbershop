'use client';

import { useScrollAnimation } from './use-scroll-animation';

const ADVANTAGES = [
  {
    title: 'Опытные мастера',
    desc: 'Наши барберы — профессионалы с многолетним опытом и постоянным развитием мастерства.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 12l4-4m0 0l4 4m-4-4v8" stroke="hsl(351,93%,42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Премиум инструменты',
    desc: 'Работаем только с профессиональным инструментом от ведущих мировых брендов.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M20 8l-2 16 6-4 6 4-2-16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 24l-6 16h24l-6-16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="24" cy="18" r="2" fill="hsl(351,93%,42%)" />
      </svg>
    ),
  },
  {
    title: 'Удобное расписание',
    desc: 'Работаем каждый день до 21:00 — вы всегда найдёте удобное время для визита.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M24 14v10l7 7" stroke="hsl(351,93%,42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Свой стиль',
    desc: 'Подберём стрижку, которая подчеркнёт вашу индивидуальность и стиль.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M12 8c0 8 12 12 12 20s12-12 12-20" stroke="currentColor" strokeWidth="2" />
        <path d="M18 32l6 8 6-8" stroke="hsl(351,93%,42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Только мужские стрижки',
    desc: 'Мы специализируемся исключительно на мужских стрижках — это наше призвание.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M14 4l10 20L34 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 28h28v4c0 6.627-6.268 12-14 12S10 38.627 10 32v-4z" stroke="currentColor" strokeWidth="2" />
        <line x1="24" y1="28" x2="24" y2="44" stroke="hsl(351,93%,42%)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Атмосфера клуба',
    desc: 'Мужское пространство с хорошей музыкой, кофе и непринуждённой обстановкой.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="18" width="32" height="22" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 18V12a8 8 0 0116 0v6" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="30" r="4" fill="hsl(351,93%,42%)" />
      </svg>
    ),
  },
];

export default function Advantages() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Почему выбирают <span className="text-primary">нас</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {ADVANTAGES?.map?.((item: any, i: number) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 sm:p-8 hover:bg-muted transition-all duration-300 group"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                {item?.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 tracking-wide">
                {item?.title ?? ''}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item?.desc ?? ''}
              </p>
            </div>
          )) ?? []}
        </div>
      </div>
    </section>
  );
}
