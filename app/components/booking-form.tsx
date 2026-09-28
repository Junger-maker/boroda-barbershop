'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Calendar, Clock } from 'lucide-react';
import { useScrollAnimation } from './use-scroll-animation';

function formatPhone(value: string): string {
  const digits = (value ?? '').replace(/\D/g, '');
  const d = digits?.startsWith?.('7') ? digits : digits?.startsWith?.('8') ? '7' + digits?.slice?.(1) : '7' + digits;
  let result = '+7';
  if ((d?.length ?? 0) > 1) result += ' (' + d?.slice?.(1, 4);
  if ((d?.length ?? 0) > 4) result += ') ' + d?.slice?.(4, 7);
  if ((d?.length ?? 0) > 7) result += '-' + d?.slice?.(7, 9);
  if ((d?.length ?? 0) > 9) result += '-' + d?.slice?.(9, 11);
  return result;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString('ru-RU', { month: 'long' });
  const weekday = date.toLocaleString('ru-RU', { weekday: 'long' });
  return `${day} ${month}, ${weekday}`;
}

function getNext7Days(): string[] {
  const days: string[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    days.push(date.toISOString().split('T')[0]);
  }
  return days;
}

export default function BookingForm() {
  const ref = useScrollAnimation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  // ИЗМЕНЕНИЕ 1: Теперь храним ID услуги для фильтрации, а не её название
  const [serviceId, setServiceId] = useState('');
  
  const [barber, setBarber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [availableTimesFromApi, setAvailableTimesFromApi] = useState<string[]>([]);
  const [servicesList, setServicesList] = useState<any[]>([]);
  const [barbersList, setBarbersList] = useState<any[]>([]);
  const [isLoadingTime, setIsLoadingTime] = useState(false);

  const showDateTime = barber !== '';

  // 1. Загрузка барберов и услуг при монтировании
  useEffect(() => {
    Promise.all([
      fetch('/api/services').then(r => r.json()),
      fetch('/api/barbers').then(r => r.json()), // Загружаем всех барберов изначально
    ]).then(([services, barbers]) => {
      setServicesList(services);
      setBarbersList(barbers);
    }).catch(err => console.error('Ошибка загрузки:', err));
  }, []);

  // ИЗМЕНЕНИЕ 2: Перезагружаем список барберов при смене услуги
  useEffect(() => {
    const fetchFilteredBarbers = async () => {
      try {
        // Если услуга выбрана, запрашиваем только подходящих барберов
        const url = serviceId ? `/api/barbers?serviceId=${serviceId}` : '/api/barbers';
        const res = await fetch(url);
        const data = await res.json();
        setBarbersList(data);
      } catch (err) {
        console.error('Ошибка загрузки отфильтрованных барберов:', err);
      }
    };
    
    fetchFilteredBarbers();
  }, [serviceId]);

  // 3. Загрузка свободного времени при изменении параметров
  useEffect(() => {
    if (showDateTime && barber && selectedDate && serviceId) {
      setIsLoadingTime(true);
      const fetchAvailability = async () => {
        try {
          // Для API расписания нам всё ещё нужно название услуги (для расчёта длительности)
          const serviceName = servicesList.find((s: any) => s.id === serviceId)?.name || '';
          
          const res = await fetch(`/api/booking?barber=${encodeURIComponent(barber)}&date=${selectedDate}&service=${encodeURIComponent(serviceName)}`);
          const data = await res.json();
          setAvailableTimesFromApi(data.availableTimes || []);
          setSelectedTime('');
        } catch (error) {
          console.error('Ошибка загрузки расписания:', error);
        } finally {
          setIsLoadingTime(false);
        }
      };
      fetchAvailability();
    } else {
      setAvailableTimesFromApi([]);
      setIsLoadingTime(false);
    }
  }, [barber, selectedDate, serviceId, showDateTime, servicesList]);

  const availableDates = useMemo(() => {
    return getNext7Days();
  }, []);

  // ИЗМЕНЕНИЕ 3: При смене барбера сбрасываем дату и время
  const handleBarberChange = useCallback((value: string) => {
    setBarber(value);
    setSelectedDate('');
    setSelectedTime('');
  }, []);

  // ИЗМЕНЕНИЕ 4: При смене услуги сбрасываем барбера, дату и время
  const handleServiceChange = useCallback((value: string) => {
    setServiceId(value);
    setBarber(''); // Сбрасываем барбера, так как он может не делать новую услугу
    setSelectedDate('');
    setSelectedTime('');
  }, []);

  const handleDateChange = useCallback((value: string) => {
    setSelectedDate(value);
    setSelectedTime('');
  }, []);

  const validate = useCallback(() => {
    const e: Record<string, string> = {};
    if (!(name ?? '').trim()) e.name = 'Введите имя';
    const phoneDigits = (phone ?? '').replace(/\D/g, '');
    if ((phoneDigits?.length ?? 0) < 11) e.phone = 'Введите корректный номер телефона';
    if (!serviceId) e.service = 'Выберите услугу';
    if (showDateTime && !selectedDate) e.date = 'Выберите дату';
    if (showDateTime && !selectedTime) e.time = 'Выберите время';
    if (!consent) e.consent = 'Необходимо дать согласие';
    setErrors(e);
    return Object.keys(e ?? {})?.length === 0;
  }, [name, phone, serviceId, showDateTime, selectedDate, selectedTime, consent]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e?.preventDefault?.();
    if (!validate()) return;
    setStatus('loading');
    try {
      // Находим название услуги по ID для отправки на бэкенд
      const selectedServiceName = servicesList.find((s: any) => s.id === serviceId)?.name || serviceId;

      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name?.trim?.(),
          phone,
          service: selectedServiceName, // Отправляем название, как ожидает бэкенд
          barber,
          date: selectedDate,
          time: selectedTime,
          consent
        }),
      });
      if (res?.ok) {
        setStatus('success');
        setName('');
        setPhone('');
        setServiceId('');
        setBarber('');
        setSelectedDate('');
        setSelectedTime('');
        setConsent(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }, [name, phone, serviceId, servicesList, barber, selectedDate, selectedTime, consent, validate]);

  return (
    <section id="booking" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Записаться <span className="text-primary">онлайн</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Оставьте заявку и мы свяжемся с вами</p>
        </div>

        <div ref={ref} className="fade-up">
          {status === 'success' ? (
            <div className="bg-green-900/30 border border-green-600/30 rounded-lg p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">Спасибо!</h3>
              <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-primary hover:underline text-sm"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 sm:p-8 space-y-5" style={{ boxShadow: 'var(--shadow-lg)' }}>
              
              {/* Имя */}
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e: any) => setName(e?.target?.value ?? '')}
                  placeholder="Ваше имя"
                  className={`w-full bg-muted rounded px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary ${errors?.name ? 'ring-2 ring-red-500' : ''}`}
                />
                {errors?.name && <p className="text-red-400 text-xs mt-1">{errors?.name}</p>}
              </div>

              {/* Телефон */}
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e: any) => {
                    const formatted = formatPhone(e?.target?.value ?? '');
                    setPhone(formatted);
                  }}
                  placeholder="+7 (___) ___-__-__"
                  className={`w-full bg-muted rounded px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary phone-input ${errors?.phone ? 'ring-2 ring-red-500' : ''}`}
                />
                {errors?.phone && <p className="text-red-400 text-xs mt-1">{errors?.phone}</p>}
              </div>

              {/* Услуга (из API) */}
              <div>
                <label className="block text-sm font-medium mb-2">Услуга</label>
                <select
                  value={serviceId}
                  onChange={(e: any) => handleServiceChange(e?.target?.value ?? '')}
                  className={`w-full bg-muted rounded px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary appearance-none ${
                    errors?.service ? 'ring-2 ring-red-500' : ''
                  } ${!serviceId ? 'text-muted-foreground' : ''}`}
                >
                  <option value="">Выберите услугу</option>
                  {servicesList?.map?.((s: any) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  )) ?? []}
                </select>
                {errors?.service && <p className="text-red-400 text-xs mt-1">{errors?.service}</p>}
              </div>

              {/* Барбер (из API) */}
              <div>
                <label className="block text-sm font-medium mb-2">Барбер</label>
                <select
                  value={barber}
                  onChange={(e: any) => handleBarberChange(e?.target?.value ?? '')}
                  className="w-full bg-muted rounded px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary appearance-none"
                  disabled={!serviceId} // Блокируем выбор барбера, пока не выбрана услуга
                >
                  <option value="">{serviceId ? 'Любой свободный мастер для этой услуги' : 'Сначала выберите услугу'}</option>
                  {barbersList?.map?.((b: any) => (
                    <option key={b.id} value={b.name}>
                      {b.name} {b.grade ? `(${b.grade.name})` : ''}
                    </option>
                  )) ?? []}
                </select>
              </div>

              {/* Дата */}
              {showDateTime && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block text-sm font-medium mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Дата
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e: any) => handleDateChange(e?.target?.value ?? '')}
                    className={`w-full bg-muted rounded px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary appearance-none ${errors?.date ? 'ring-2 ring-red-500' : ''}`}
                  >
                    <option value="">Выберите дату</option>
                    {availableDates?.map?.((date: string) => {
                      const isToday = date === new Date().toISOString().split('T')[0];
                      const label = isToday ? `Сегодня (${formatDate(date)})` : formatDate(date);
                      return (
                        <option key={date} value={date}>
                          {label}
                        </option>
                      );
                    }) ?? []}
                  </select>
                  {errors?.date && <p className="text-red-400 text-xs mt-1">{errors?.date}</p>}
                </div>
              )}

              {/* Время */}
              {showDateTime && selectedDate && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block text-sm font-medium mb-2">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Время
                  </label>
                  
                  {isLoadingTime ? (
                    <div className="flex justify-center items-center py-4">
                      <div className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full" />
                      <span className="ml-2 text-sm text-muted-foreground">Загрузка расписания...</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimesFromApi?.length > 0 ? (
                        availableTimesFromApi?.map?.((timeSlot: string) => {
                          const isSelected = selectedTime === timeSlot;
                          return (
                            <button
                              key={timeSlot}
                              type="button"
                              onClick={() => setSelectedTime(timeSlot)}
                              className={`py-2 px-3 rounded text-sm font-medium transition-all ${
                                isSelected
                                  ? 'bg-primary text-primary-foreground shadow-md'
                                  : 'bg-muted text-foreground hover:bg-primary/10'
                              }`}
                            >
                              {timeSlot}
                            </button>
                          );
                        }) ?? []
                      ) : (
                        <p className="text-muted-foreground text-sm col-span-3 text-center py-2">
                          {barber && selectedDate && serviceId ? 'Нет свободного времени на эту дату' : 'Выберите услугу, барбера и дату'}
                        </p>
                      )}
                    </div>
                  )}
                  {errors?.time && <p className="text-red-400 text-xs mt-1">{errors?.time}</p>}
                </div>
              )}

              {/* Согласие */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e: any) => setConsent(e?.target?.checked ?? false)}
                    className="mt-1 w-4 h-4 rounded accent-primary"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Согласен на обработку персональных данных
                  </span>
                </label>
                {errors?.consent && <p className="text-red-400 text-xs mt-1">{errors?.consent}</p>}
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Ошибка при отправке. Попробуйте ещё раз.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded font-display font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Записаться
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Ваши данные защищены и не передаются третьим лицам
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}