'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.abacus.ai/images/32e7c4eb-c91d-44e0-9d80-c7c8cc57e824.png"
          alt="Интерьер барбершопа Борода"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay + pattern */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 barber-pattern" />
        {/* Gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        {/* Red accent line */}
        <div className="w-16 h-1 bg-primary mx-auto mb-8" />

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
          Барбершоп для{' '}
          <span className="text-primary">настоящих</span>{' '}
          мужчин
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Профессиональные стрижки и уход за бородой в Москве
        </p>

        <button
          onClick={scrollToBooking}
          className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-display text-lg font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
        >
          Скидка 20% на первую запись
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView?.({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50 hover:text-primary transition-colors"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
