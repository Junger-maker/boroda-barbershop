'use client';

import { Scissors, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-card py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="font-display text-2xl font-bold tracking-wider">БОРОДА</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Профессиональный барбершоп в центре Москвы.
              Мужские стрижки, уход за бородой, укладки.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a href="https://vk.com/boroda_barber" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="VK">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.368 1.259 2.184 1.814.616.42 1.084.327 1.084.327l2.178-.03s1.14-.07.599-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.246.999-1.33 1.398-2.142 1.273-2.489-.12-.331-.855-.244-.855-.244l-2.45.015s-.182-.025-.316.056c-.131.079-.216.263-.216.263s-.387 1.028-.903 1.903c-1.088 1.848-1.524 1.946-1.702 1.832-.414-.265-.31-1.066-.31-1.634 0-1.777.27-2.518-.527-2.71-.265-.063-.459-.105-1.136-.112-.868-.01-1.602.003-2.018.207-.277.135-.49.437-.36.454.16.021.523.098.716.36.249.338.24 1.096.24 1.096s.143 2.093-.334 2.352c-.327.178-.776-.185-1.74-1.846-.494-.85-.868-1.79-.868-1.79s-.072-.176-.2-.271c-.155-.115-.372-.151-.372-.151l-2.328.015s-.349.01-.478.162c-.114.135-.009.413-.009.413s1.82 4.258 3.882 6.404c1.889 1.966 4.035 1.838 4.035 1.838h.972z" /></svg>
              </a>
              <a href="https://t.me/boroda_barber" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Telegram">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.93 3.821h.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693L18.953 5.78c.595-.394 1.136-.176.691.218L9.417 15.181z" /></svg>
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 tracking-wide">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">г. Москва, ул. Барберская, д. 15<br />м. Арбатская</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground" suppressHydrationWarning>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground" suppressHydrationWarning>info@boroda-barber.ru</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Пн–Пт: 10:00–21:00<br />Сб–Вс: 10:00–20:00</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-1 md:col-span-2 lg:mt-0">
            <h3 className="font-display text-lg font-semibold mb-6 tracking-wide">Как нас найти</h3>
            <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-md)' }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.593382%2C55.752023&z=15&pt=37.593382%2C55.752023%2Cpm2rdm"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Карта барбершопа Борода"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Барбершоп Борода. Все права защищены.</p>
          <button
            onClick={() => {
              window.alert?.(
                'Политика конфиденциальности\n\nБарбершоп «Борода» обрабатывает персональные данные (имя, телефон) исключительно для записи на услуги. Данные не передаются третьим лицам и хранятся в защищённой базе данных. Вы можете запросить удаление своих данных, написав нам на info@boroda-barber.ru.'
              );
            }}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Политика конфиденциальности
          </button>
        </div>
      </div>
    </footer>
  );
}
