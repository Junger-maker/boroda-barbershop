import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Создаём градации
  const barber = await prisma.grade.upsert({
    where: { name: 'Барбер' },
    update: {},
    create: { name: 'Барбер' },
  });
  const topBarber = await prisma.grade.upsert({
    where: { name: 'Топ-барбер' },
    update: {},
    create: { name: 'Топ-барбер' },
  });
  const expert = await prisma.grade.upsert({
    where: { name: 'Эксперт-барбер' },
    update: {},
    create: { name: 'Эксперт-барбер' },
  });

  // Получаем все услуги
  const services = await prisma.service.findMany();
  
  // Добавляем услуги в градации с ценами
  for (const service of services) {
    await prisma.gradeService.upsert({
      where: { gradeId_serviceId: { gradeId: barber.id, serviceId: service.id } },
      update: {},
      create: { gradeId: barber.id, serviceId: service.id, price: 1000, isActive: true },
    });
    await prisma.gradeService.upsert({
      where: { gradeId_serviceId: { gradeId: topBarber.id, serviceId: service.id } },
      update: {},
      create: { gradeId: topBarber.id, serviceId: service.id, price: 1500, isActive: true },
    });
    await prisma.gradeService.upsert({
      where: { gradeId_serviceId: { gradeId: expert.id, serviceId: service.id } },
      update: {},
      create: { gradeId: expert.id, serviceId: service.id, price: 2000, isActive: true },
    });
  }

  console.log('✅ Градации и услуги созданы!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
