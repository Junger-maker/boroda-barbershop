'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: 'Сергей Иванов', date: '15 сентября 2026', stars: 5, text: 'Отличный барбершоп! Стригусь у Алексея уже полгода, каждый раз ухожу довольным. Атмосфера на высшем уровне, кофе всегда вкусный.' },
  { name: 'Андрей Петров', date: '8 сентября 2026', stars: 5, text: 'Первый раз пришёл по скидке и теперь постоянный клиент. Дмитрий делает идеальный фейд. Рекомендую!' },
  { name: 'Максим Кузнецов', date: '1 сентября 2026', stars: 5, text: 'Бороду постригли просто класс! Уютное место, приятные люди. Отдельное спасибо за камуфляж седины — естественно и незаметно.' },
  { name: 'Николай Смирнов', date: '25 августа 2026', stars: 4, text: 'Хорошее место, профессиональные мастера. Иногда нужно подождать, но это потому что место популярное. Стрижка всегда на высоте.' },
  { name: 'Павел Волков', date: '18 августа 2026', stars: 5, text: 'Был во многих барбершопах Москвы — Борода лучший. Михаил — настоящий профессионал, VIP-стрижка стоит каждого рубля.' },
];

export default function ReviewsSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        768: { slidesPerView: 2 },
      }}
      className="!pb-12"
    >
      {REVIEWS?.map?.((r: any, i: number) => (
        <SwiperSlide key={i}>
          <div className="bg-card rounded-lg p-6 sm:p-8 h-full" style={{ boxShadow: 'var(--shadow-md)' }}>
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 })?.map?.((_: any, j: number) => (
                <Star
                  key={j}
                  className={`w-4 h-4 ${j < (r?.stars ?? 0) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
                />
              )) ?? []}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
              «{r?.text ?? ''}»
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{r?.name ?? ''}</span>
              <span className="text-xs text-muted-foreground">{r?.date ?? ''}</span>
            </div>
          </div>
        </SwiperSlide>
      )) ?? []}
    </Swiper>
  );
}
