'use client';

import { useState } from 'react';
import { Trash2, Users, Calendar, Briefcase, LogOut, Plus, Edit2, Save, X, Award } from 'lucide-react';
import PhotoUploader from '@/components/photo-uploader';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'bookings' | 'barbers' | 'services' | 'grades'>('bookings');
  
  const [bookings, setBookings] = useState<any[]>([]);
  const [barbers, setBarbers] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [grades, setGrades] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [editingBarber, setEditingBarber] = useState<any>(null);
  const [newBarber, setNewBarber] = useState({ name: '', years: 0, photo: '', gradeId: '' });
  
  const [editingService, setEditingService] = useState<any>(null);
  const [newService, setNewService] = useState({ name: '' });
  
  const [editingGrade, setEditingGrade] = useState<any>(null);
  const [newGrade, setNewGrade] = useState({ name: '' });

  const ADMIN_PASSWORD = 'boroda2024';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      loadData();
    } else {
      alert('Неверный пароль');
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [bookingsRes, barbersRes, servicesRes, gradesRes] = await Promise.all([
        fetch('/api/admin/bookings'),
        fetch('/api/admin/barbers'),
        fetch('/api/admin/services'),
        fetch('/api/admin/grades'),
      ]);
      setBookings(await bookingsRes.json());
      setBarbers(await barbersRes.json());
      setServices(await servicesRes.json());
      setGrades(await gradesRes.json());
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBooking = async (id: string) => {
    if (!confirm('Удалить эту запись?')) return;
    try {
      await fetch(`/api/admin/bookings?id=${id}`, { method: 'DELETE' });
      loadData();
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  // === БАРБЕРЫ ===
  const handleAddBarber = async () => {
    if (!newBarber.name.trim()) return;
    try {
      const res = await fetch('/api/admin/barbers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newBarber, spec: '', initials: '' }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        alert(`Ошибка: ${errorText || 'Не удалось добавить'}`);
        return;
      }
      setNewBarber({ name: '', years: 0, photo: '', gradeId: '' });
      loadData();
    } catch (error) {
      console.error('Ошибка сети:', error);
      alert('Ошибка сети');
    }
  };

  const handleUpdateBarber = async () => {
    if (!editingBarber) return;
    try {
      const res = await fetch(`/api/admin/barbers/${editingBarber.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editingBarber.name,
          years: Number(editingBarber.years) || 0,
          spec: '',
          initials: '',
          photo: editingBarber.photo || null,
          gradeId: editingBarber.gradeId || null,
          isActive: editingBarber.isActive ?? true,
        }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        alert(`Ошибка: ${errorText || 'Не удалось сохранить'}`);
        return;
      }
      setEditingBarber(null);
      loadData();
    } catch (error) {
      console.error('Ошибка сети:', error);
      alert('Ошибка сети');
    }
  };

  const handleDeleteBarber = async (id: string) => {
    if (!confirm('Удалить этого барбера?')) return;
    try {
      await fetch(`/api/admin/barbers?id=${id}`, { method: 'DELETE' });
      loadData();
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  // === УСЛУГИ ===
  const handleAddService = async () => {
    if (!newService.name.trim()) return;
    try {
      const res = await fetch('/api/admin/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newService),
      });
      if (!res.ok) {
        const errorText = await res.text();
        alert(`Ошибка: ${errorText || 'Не удалось добавить'}`);
        return;
      }
      setNewService({ name: '' });
      loadData();
    } catch (error) {
      console.error('Ошибка добавления:', error);
    }
  };

  const handleUpdateService = async () => {
    if (!editingService) return;
    try {
      const res = await fetch(`/api/admin/services/${editingService.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editingService.name,
          isActive: editingService.isActive ?? true,
        }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        alert(`Ошибка: ${errorText || 'Не удалось сохранить'}`);
        return;
      }
      setEditingService(null);
      loadData();
    } catch (error) {
      console.error('Ошибка сети:', error);
      alert('Ошибка сети');
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm('Удалить эту услугу?')) return;
    try {
      await fetch(`/api/admin/services?id=${id}`, { method: 'DELETE' });
      loadData();
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  // === ГРАДАЦИИ ===
  const handleAddGrade = async () => {
    if (!newGrade.name.trim()) return;
    try {
      const res = await fetch('/api/admin/grades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGrade),
      });
      if (!res.ok) {
        const errorText = await res.text();
        alert(`Ошибка: ${errorText || 'Не удалось добавить'}`);
        return;
      }
      setNewGrade({ name: '' });
      loadData();
    } catch (error) {
      console.error('Ошибка добавления:', error);
    }
  };

  const handleUpdateGrade = async () => {
    if (!editingGrade) return;
    try {
      // Формируем массив услуг в формате, который ожидает бэкенд: { id: serviceId, price, isActive }
      const servicesPayload = (editingGrade.gradeServices || [])
        .filter((gs: any) => gs.isActive) // Отправляем только активные
        .map((gs: any) => ({
          id: gs.serviceId, 
          price: gs.price,
          isActive: gs.isActive,
        }));

      const res = await fetch(`/api/admin/grades/${editingGrade.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editingGrade.name,
          services: servicesPayload,
        }),
      });
      
      if (!res.ok) {
        const errorText = await res.text();
        alert(`Ошибка: ${errorText || 'Не удалось сохранить'}`);
        return;
      }
      setEditingGrade(null);
      loadData();
    } catch (error) {
      console.error('Ошибка сети:', error);
      alert('Ошибка сети');
    }
  };

  const handleDeleteGrade = async (id: string) => {
    if (!confirm('Удалить эту градацию?')) return;
    try {
      await fetch(`/api/admin/grades/${id}`, { method: 'DELETE' });
      loadData();
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  const toggleGradeService = (grade: any, serviceId: string) => {
    const updatedGrade = { ...grade };
    if (!updatedGrade.gradeServices) {
      updatedGrade.gradeServices = [];
    }
    const serviceIndex = updatedGrade.gradeServices.findIndex((gs: any) => gs.serviceId === serviceId);
    
    if (serviceIndex === -1) {
      updatedGrade.gradeServices.push({ serviceId, price: 0, isActive: true });
    } else {
      updatedGrade.gradeServices[serviceIndex].isActive = !updatedGrade.gradeServices[serviceIndex].isActive;
    }
    
    setEditingGrade(updatedGrade);
  };

  const updateGradeServicePrice = (grade: any, serviceId: string, price: number) => {
    const updatedGrade = { ...grade };
    if (!updatedGrade.gradeServices) {
      updatedGrade.gradeServices = [];
    }
    const serviceIndex = updatedGrade.gradeServices.findIndex((gs: any) => gs.serviceId === serviceId);
    
    if (serviceIndex !== -1) {
      updatedGrade.gradeServices[serviceIndex].price = price;
    }
    
    setEditingGrade(updatedGrade);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Админ-панель</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Введите пароль" 
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
            />
            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Админ-панель Boroda Barbershop</h1>
          <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <LogOut className="w-5 h-5" /> Выйти
          </button>
        </div>
        
        <div className="flex gap-4 mb-8 border-b border-gray-700 flex-wrap">
          <button onClick={() => setActiveTab('bookings')} className={`px-6 py-3 font-semibold transition ${activeTab === 'bookings' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
            <Calendar className="inline w-5 h-5 mr-2" /> Записи
          </button>
          <button onClick={() => setActiveTab('barbers')} className={`px-6 py-3 font-semibold transition ${activeTab === 'barbers' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
            <Users className="inline w-5 h-5 mr-2" /> Барберы
          </button>
          <button onClick={() => setActiveTab('services')} className={`px-6 py-3 font-semibold transition ${activeTab === 'services' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
            <Briefcase className="inline w-5 h-5 mr-2" /> Услуги
          </button>
          <button onClick={() => setActiveTab('grades')} className={`px-6 py-3 font-semibold transition ${activeTab === 'grades' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}>
            <Award className="inline w-5 h-5 mr-2" /> Градации
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full mx-auto" />
          </div>
        ) : (
          <>
            {/* === ЗАПИСИ === */}
            {activeTab === 'bookings' && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Все записи ({bookings.length})</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4">Дата</th>
                        <th className="text-left py-3 px-4">Время</th>
                        <th className="text-left py-3 px-4">Барбер</th>
                        <th className="text-left py-3 px-4">Клиент</th>
                        <th className="text-left py-3 px-4">Телефон</th>
                        <th className="text-left py-3 px-4">Услуга</th>
                        <th className="text-left py-3 px-4">Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-700 hover:bg-gray-750">
                          <td className="py-3 px-4">{booking.date}</td>
                          <td className="py-3 px-4">{booking.time}</td>
                          <td className="py-3 px-4">{booking.barber || 'Любой'}</td>
                          <td className="py-3 px-4">{booking.name}</td>
                          <td className="py-3 px-4">{booking.phone}</td>
                          <td className="py-3 px-4">{booking.service}</td>
                          <td className="py-3 px-4">
                            <button onClick={() => handleDeleteBooking(booking.id)} className="text-red-500 hover:text-red-400">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* === БАРБЕРЫ === */}
            {activeTab === 'barbers' && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Барберы ({barbers.length})</h2>
                
                <div className="mb-6 p-4 bg-gray-700 rounded-lg">
                  <h3 className="font-semibold mb-3">Добавить барбера</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="Имя" 
                      value={newBarber.name} 
                      onChange={(e) => setNewBarber({...newBarber, name: e.target.value})} 
                      className="px-3 py-2 bg-gray-600 rounded text-white" 
                    />
                    <input 
                      type="number" 
                      placeholder="Опыт (лет)" 
                      value={newBarber.years} 
                      onChange={(e) => setNewBarber({...newBarber, years: parseInt(e.target.value) || 0})} 
                      className="px-3 py-2 bg-gray-600 rounded text-white" 
                    />
                    <select 
                      value={newBarber.gradeId} 
                      onChange={(e) => setNewBarber({...newBarber, gradeId: e.target.value})} 
                      className="px-3 py-2 bg-gray-600 rounded text-white"
                    >
                      <option value="">Выберите градацию</option>
                      {grades.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                    </select>
                  </div>
                  
                  <div className="mt-3">
                    <label className="block text-sm font-medium mb-2 text-gray-300">Фото</label>
                    <PhotoUploader
                      currentPhoto={newBarber.photo}
                      onUploadComplete={(url) => setNewBarber({ ...newBarber, photo: url })}
                      label="Выбрать фото"
                    />
                  </div>

                  <button onClick={handleAddBarber} className="mt-4 bg-green-600 px-4 py-2 rounded font-semibold hover:bg-green-700 flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Добавить
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {barbers.map((barber) => (
                    <div key={barber.id} className="bg-gray-700 p-4 rounded-lg">
                      {editingBarber?.id === barber.id ? (
                        <div className="space-y-2">
                          <input 
                            type="text" 
                            value={editingBarber.name} 
                            onChange={(e) => setEditingBarber({...editingBarber, name: e.target.value})} 
                            className="w-full px-3 py-2 bg-gray-600 rounded text-white" 
                          />
                          <input 
                            type="number" 
                            value={editingBarber.years} 
                            onChange={(e) => setEditingBarber({...editingBarber, years: parseInt(e.target.value) || 0})} 
                            className="w-full px-3 py-2 bg-gray-600 rounded text-white" 
                          />
                          <select 
                            value={editingBarber.gradeId || ''} 
                            onChange={(e) => setEditingBarber({...editingBarber, gradeId: e.target.value})} 
                            className="w-full px-3 py-2 bg-gray-600 rounded text-white"
                          >
                            <option value="">Выберите градацию</option>
                            {grades.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                          </select>
                          
                          <div>
                            <label className="block text-xs font-medium mb-1 text-gray-300">Заменить фото</label>
                            <PhotoUploader
                              currentPhoto={editingBarber.photo}
                              onUploadComplete={(url) => setEditingBarber({ ...editingBarber, photo: url })}
                              label="Выбрать новое фото"
                            />
                          </div>
                          
                          <div className="flex gap-2 pt-2">
                            <button onClick={handleUpdateBarber} className="bg-blue-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-blue-700">
                              <Save className="w-3 h-3" /> Сохранить
                            </button>
                            <button onClick={() => setEditingBarber(null)} className="bg-gray-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-gray-500">
                              <X className="w-3 h-3" /> Отмена
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-start gap-4">
                            {barber.photo ? (
                              <img src={barber.photo} alt={barber.name} className="w-16 h-16 object-cover rounded-full border-2 border-gray-600 flex-shrink-0" />
                            ) : (
                              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                                <span className="font-display text-xl font-bold text-white">
                                  {barber.name.split(' ').map((n: string) => n[0]).join('')}
                                </span>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-lg truncate">{barber.name}</h3>
                              <p className="text-gray-400 text-sm">Опыт: {barber.years} лет</p>
                              {barber.grade && <p className="text-primary text-xs mt-1 font-medium">{barber.grade.name}</p>}
                            </div>
                          </div>
                          <div className="flex gap-3 mt-4 pt-3 border-t border-gray-600">
                            <button onClick={() => setEditingBarber(barber)} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                              <Edit2 className="w-4 h-4" /> Изменить
                            </button>
                            <button onClick={() => handleDeleteBarber(barber.id)} className="text-red-400 hover:text-red-300 flex items-center gap-1 text-sm">
                              <Trash2 className="w-4 h-4" /> Удалить
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* === УСЛУГИ === */}
            {activeTab === 'services' && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Услуги ({services.length})</h2>
                <div className="mb-6 p-4 bg-gray-700 rounded-lg">
                  <h3 className="font-semibold mb-3">Добавить услугу</h3>
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      placeholder="Название услуги" 
                      value={newService.name} 
                      onChange={(e) => setNewService({name: e.target.value})} 
                      className="flex-1 px-3 py-2 bg-gray-600 rounded text-white" 
                    />
                    <button onClick={handleAddService} className="bg-green-600 px-4 py-2 rounded font-semibold hover:bg-green-700 flex items-center gap-2">
                      <Plus className="w-4 h-4" /> Добавить
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="bg-gray-700 p-4 rounded-lg">
                      {editingService?.id === service.id ? (
                        <div className="space-y-2">
                          <input 
                            type="text" 
                            value={editingService.name} 
                            onChange={(e) => setEditingService({...editingService, name: e.target.value})} 
                            className="w-full px-3 py-2 bg-gray-600 rounded text-white" 
                          />
                          <div className="flex gap-2">
                            <button onClick={handleUpdateService} className="bg-blue-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-blue-700">
                              <Save className="w-3 h-3" /> Сохранить
                            </button>
                            <button onClick={() => setEditingService(null)} className="bg-gray-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-gray-500">
                              <X className="w-3 h-3" /> Отмена
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h3 className="font-semibold text-lg">{service.name}</h3>
                          <div className="flex gap-3 mt-3 pt-3 border-t border-gray-600">
                            <button onClick={() => setEditingService(service)} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                              <Edit2 className="w-4 h-4" /> Изменить
                            </button>
                            <button onClick={() => handleDeleteService(service.id)} className="text-red-400 hover:text-red-300 flex items-center gap-1 text-sm">
                              <Trash2 className="w-4 h-4" /> Удалить
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* === ГРАДАЦИИ === */}
            {activeTab === 'grades' && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Градации ({grades.length})</h2>
                <div className="mb-6 p-4 bg-gray-700 rounded-lg">
                  <h3 className="font-semibold mb-3">Добавить градацию</h3>
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      placeholder="Название градации" 
                      value={newGrade.name} 
                      onChange={(e) => setNewGrade({name: e.target.value})} 
                      className="flex-1 px-3 py-2 bg-gray-600 rounded text-white" 
                    />
                    <button onClick={handleAddGrade} className="bg-green-600 px-4 py-2 rounded font-semibold hover:bg-green-700 flex items-center gap-2">
                      <Plus className="w-4 h-4" /> Добавить
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  {grades.map((grade) => (
                    <div key={grade.id} className="bg-gray-700 p-4 rounded-lg">
                      {editingGrade?.id === grade.id ? (
                        <div className="space-y-4">
                          <input 
                            type="text" 
                            value={editingGrade.name} 
                            onChange={(e) => setEditingGrade({...editingGrade, name: e.target.value})} 
                            className="w-full px-3 py-2 bg-gray-600 rounded text-white" 
                          />
                          <div>
                            <h4 className="font-medium mb-2">Услуги и цены:</h4>
                            <div className="space-y-2">
                              {services.map((service) => {
                                const gradeService = (editingGrade.gradeServices || []).find((gs: any) => gs.serviceId === service.id);
                                const isActive = gradeService?.isActive || false;
                                const price = gradeService?.price || 0;
                                
                                return (
                                  <div key={service.id} className="flex items-center gap-3 bg-gray-600 p-2 rounded">
                                    <input 
                                      type="checkbox" 
                                      checked={isActive} 
                                      onChange={() => toggleGradeService(editingGrade, service.id)} 
                                      className="w-4 h-4" 
                                    />
                                    <span className="flex-1">{service.name}</span>
                                    <input 
                                      type="number" 
                                      value={price} 
                                      onChange={(e) => updateGradeServicePrice(editingGrade, service.id, parseInt(e.target.value) || 0)} 
                                      className="w-24 px-2 py-1 bg-gray-700 rounded text-white text-sm" 
                                      placeholder="Цена" 
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={handleUpdateGrade} className="bg-blue-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-blue-700">
                              <Save className="w-3 h-3" /> Сохранить
                            </button>
                            <button onClick={() => setEditingGrade(null)} className="bg-gray-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-gray-500">
                              <X className="w-3 h-3" /> Отмена
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{grade.name}</h3>
                            <p className="text-gray-400 text-sm">Барберов: {grade._count?.barbers || 0}</p>
                            <p className="text-gray-400 text-sm">Услуг: {(grade.gradeServices || []).filter((gs: any) => gs.isActive).length || 0}</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => setEditingGrade(grade)} className="text-blue-400 hover:text-blue-300">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDeleteGrade(grade.id)} className="text-red-400 hover:text-red-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}