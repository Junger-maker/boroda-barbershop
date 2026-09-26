'use client';

import dynamic from 'next/dynamic';

const BarbersSlider = dynamic(() => import('./barbers-slider'), {
  ssr: false,
  loading: () => (
    <div className="flex gap-6 justify-center">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-72 h-80 bg-card rounded-lg animate-pulse" />
      ))}
    </div>
  ),
});

export default function Barbers() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Наша <span className="text-primary">команда</span>
          </h2>
        </div>
        <BarbersSlider />
      </div>
    </section>
  );
}
