'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DEFAULT_COLORS = ['bg-primary', 'bg-secondary', 'bg-primary/70', 'bg-secondary/70'];

// URLs для иконок градаций
const GRADE_ICONS = {
  barber: 'https://qrvg65pv1b.ufs.sh/f/LHINhZl0o3OPpR0xJqoXqo7iVEFcPflUK1ZYAdLTJgp3589m',
  topBarber: 'https://qrvg65pv1b.ufs.sh/f/LHINhZl0o3OP3DEIkgiXMqZ7i4fbLOYajok8QwS9F12JWn5u',
  expertBarber: 'https://qrvg65pv1b.ufs.sh/f/LHINhZl0o3OPRy4xa00JoTtldXjukfmPrbQYFyn5V9GM6SsE',
};

export default function BarbersSlider() {
  const [barbers, setBarbers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/barbers')
      .then((res) => res.json())
      .then((data) => {
        setBarbers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка загрузки барберов:', err);
        setLoading(false);
      });
  }, []);

  const getGradeIcon = (gradeName: string) => {
    const name = gradeName?.toLowerCase() || '';
    if (name.includes('эксперт')) return GRADE_ICONS.expertBarber;
    if (name.includes('топ')) return GRADE_ICONS.topBarber;
    return GRADE_ICONS.barber;
  };

  if (loading) {
    return (
      <div className="flex gap-6 justify-center py-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-72 h-80 bg-card rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (barbers.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-8">
        Барберы пока не добавлены
      </p>
    );
  }

  return (
    <div className="relative">
      <Swiper
        key={barbers.length}
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{ prevEl: '.barber-prev', nextEl: '.barber-next' }}
        pagination={{ clickable: true, el: '.barber-pagination' }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12"
      >
        {barbers?.map?.((b: any, i: number) => {
          const color = b?.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
          const initials = b?.name?.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase() || 'Б';
          const gradeIcon = b?.grade?.name ? getGradeIcon(b.grade.name) : null;
          
          return (
            <SwiperSlide key={b.id}>
              <div className="bg-card rounded-lg p-8 text-center group hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: 'var(--shadow-md)' }}>
                
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {b?.photo ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200 dark:border-gray-700">
                      <img 
                        src={b.photo} 
                        alt={b.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ) : (
                    <div className={`w-24 h-24 ${color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="font-display text-2xl font-bold text-white">{initials}</span>
                    </div>
                  )}
                  
                  {gradeIcon && (
                    <div className="absolute -bottom-1 -right-1 w-10 h-10 flex items-center justify-center drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
                      <img 
                        src={gradeIcon} 
                        alt="Градация" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>

                <h3 className="font-display text-xl font-semibold mb-1">{b?.name ?? 'Барбер'}</h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {b?.years ?? 0} {b?.years === 1 ? 'год' : (b?.years ?? 0) < 5 ? 'года' : 'лет'} в профессии
                </p>
                
                {b?.grade?.name && (
                  <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                    {b.grade.name}
                  </p>
                )}
              </div>
            </SwiperSlide>
          );
        }) ?? []}
      </Swiper>

      <button className="barber-prev absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 z-10 w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" style={{ boxShadow: 'var(--shadow-md)' }}>
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button className="barber-next absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 z-10 w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" style={{ boxShadow: 'var(--shadow-md)' }}>
        <ChevronRight className="w-5 h-5" />
      </button>
      
      <div className="barber-pagination flex justify-center gap-2 mt-6" />
    </div>
  );
}