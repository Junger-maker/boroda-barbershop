'use client';

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useScrollAnimation } from './use-scroll-animation';

export default function Pricing() {
  const ref = useScrollAnimation();
  const [grades, setGrades] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/grades')
      .then((res) => res.json())
      .then((data) => {
        // ЗАЩИТА: если пришёл не массив, делаем его пустым
        const safeGrades = Array.isArray(data) ? data : [];
        console.log('📊 Загруженные градации:', safeGrades);
        setGrades(safeGrades);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ Ошибка загрузки:', err);
        setGrades([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="pricing" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Выберите <span className="text-primary">своего мастера</span>
            </h2>
          </div>
          <div className="flex gap-6 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-80 h-96 bg-card rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (grades.length === 0) {
    return (
      <section id="pricing" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-foreground">
            Выберите <span className="text-primary">своего мастера</span>
          </h2>
          <p className="text-muted-foreground">Градации пока не добавлены или произошла ошибка загрузки</p>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Выберите <span className="text-primary">своего мастера</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grades.map((grade: any) => {
            const activeServices = grade.gradeServices?.filter((gs: any) => gs.isActive) || [];
            
            return (
              <div
                key={grade.id}
                className="bg-card rounded-lg p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300 border border-border hover:border-primary"
              >
                <h3 className="font-display text-2xl font-bold mb-6 text-center text-foreground">
                  {grade.name}
                </h3>

                {activeServices.length > 0 ? (
                  <ul className="space-y-3 mb-8 flex-1">
                    {activeServices.map((gs: any) => (
                      <li key={gs.id} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{gs.service.name}</span>
                        </div>
                        <span className="font-semibold text-primary whitespace-nowrap ml-2">
                          от {gs.price}₽
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-center mb-8">Услуги не добавлены</p>
                )}

                <a
                  href="#booking"
                  className="block w-full bg-muted text-foreground py-3 rounded font-display font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center"
                >
                  Записаться
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
