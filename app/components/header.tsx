'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'О студии', href: '#about' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView?.({ behavior: 'smooth' });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
          <Scissors className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-foreground">
            БОРОДА
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS?.map?.((item: any) => (
            <button
              key={item?.href}
              onClick={() => handleNav(item?.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              {item?.label ?? ''}
            </button>
          )) ?? []}
          <button
            onClick={() => handleNav('#booking')}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            Записаться
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-3">
            {NAV_ITEMS?.map?.((item: any) => (
              <button
                key={item?.href}
                onClick={() => handleNav(item?.href)}
                className="text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 uppercase tracking-wide"
              >
                {item?.label ?? ''}
              </button>
            )) ?? []}
            <button
              onClick={() => handleNav('#booking')}
              className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all mt-2"
            >
              Записаться
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
