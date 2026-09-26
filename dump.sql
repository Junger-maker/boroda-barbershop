PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
);
INSERT INTO _prisma_migrations VALUES('26a72440-9381-49ba-944c-7dc752aa063c','c6481de7f726e814c1cfa957dddfdfd04af2cc060efb6265dddfccd3fcae033c',1790139386890,'20260923045626_init',NULL,NULL,1790139386889,1);
INSERT INTO _prisma_migrations VALUES('e12aab1d-7ce2-44ed-83b1-31df91bb4abd','9d8efe84a059c131fb87590c0f576b6ab01239dc1f9eef3056d692cbfb0740b1',1790427700206,'20260926130140_add_barber_photo',NULL,NULL,1790427700205,1);
INSERT INTO _prisma_migrations VALUES('d1021ebe-127a-4a4a-8415-5dad8f5dde35','96759bd40427673986785eda889e5ef9b832d58d3f9a542e7212f8d57cad4212',1790430743254,'20260926135223_add_grades',NULL,NULL,1790430743252,1);
CREATE TABLE IF NOT EXISTS "bookings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "barber" TEXT,
    "date" TEXT,
    "time" TEXT,
    "consent" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO bookings VALUES('cmudncht000000g8s0yp22tcn','fgf','''+7 (888) 888-88-88','Усы','Иван Степанов','2026-09-23','10:00',1,1790140354597);
INSERT INTO bookings VALUES('cmuib93b200000gdwifuopnov','s cuz z','''+7 (555) 555-55-55','Борода','Алексей Ковалёв','2026-09-27','14:00',1,1790422371326);
INSERT INTO bookings VALUES('cmuiba14y00010gdwimnfe8zy','dfbdfgsb','''+7 (888) 888-88-88','Комплекс','Алексей Ковалёв','2026-09-27','15:00',1,1790422415170);
INSERT INTO bookings VALUES('cmuidrlbo000a0gdw586we4fs','Амам','''+7 (444) 444-44-44','Стрижка','Влад','2026-09-27','13:00',1,1790426593716);
CREATE TABLE IF NOT EXISTS "services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO services VALUES('cmuidomro00020gdw8wspxe9v','Борода',1,1790426455620);
INSERT INTO services VALUES('cmuidopsd00030gdwtho5wdhr','Усы',1,1790426459533);
INSERT INTO services VALUES('cmuidottc00040gdwv25b9mur','Стрижка',1,1790426464752);
INSERT INTO services VALUES('cmuidoysi00050gdw9rrz4hea','Камуфляж седины',1,1790426471203);
INSERT INTO services VALUES('cmuidp27700060gdwj4il3bzg','Комплекс',1,1790426475620);
CREATE TABLE IF NOT EXISTS "schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "barberId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "schedules_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barbers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "grades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO grades VALUES('cmuig8v4y00000g8gzzocibhf','Барбер',1,1790430758818);
INSERT INTO grades VALUES('cmuig8v5200010g8gejmvi26f','Топ-барбер',1,1790430758822);
INSERT INTO grades VALUES('cmuig8v5300020g8goz0mj779','Эксперт-барбер',1,1790430758824);
CREATE TABLE IF NOT EXISTS "grade_services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gradeId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "grade_services_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "grades" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "grade_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO grade_services VALUES('cmuig8v5500040g8gvf7oi4xs','cmuig8v4y00000g8gzzocibhf','cmuidomro00020gdw8wspxe9v',1000,1,1790430758826);
INSERT INTO grade_services VALUES('cmuig8v5600060g8g0x48rvr2','cmuig8v5200010g8gejmvi26f','cmuidomro00020gdw8wspxe9v',1500,1,1790430758827);
INSERT INTO grade_services VALUES('cmuig8v5700080g8gleu4khug','cmuig8v5300020g8goz0mj779','cmuidomro00020gdw8wspxe9v',2000,1,1790430758828);
INSERT INTO grade_services VALUES('cmuig8v58000a0g8glrku1ozu','cmuig8v4y00000g8gzzocibhf','cmuidopsd00030gdwtho5wdhr',1000,1,1790430758828);
INSERT INTO grade_services VALUES('cmuig8v59000c0g8g24ynko27','cmuig8v5200010g8gejmvi26f','cmuidopsd00030gdwtho5wdhr',1500,1,1790430758829);
INSERT INTO grade_services VALUES('cmuig8v5a000e0g8gxdlym0wi','cmuig8v5300020g8goz0mj779','cmuidopsd00030gdwtho5wdhr',2000,1,1790430758830);
INSERT INTO grade_services VALUES('cmuig8v5a000g0g8g321tdkd4','cmuig8v4y00000g8gzzocibhf','cmuidottc00040gdwv25b9mur',1000,1,1790430758831);
INSERT INTO grade_services VALUES('cmuig8v5b000i0g8g0g6yp46b','cmuig8v5200010g8gejmvi26f','cmuidottc00040gdwv25b9mur',1500,1,1790430758831);
INSERT INTO grade_services VALUES('cmuig8v5c000k0g8ge4e56ikl','cmuig8v5300020g8goz0mj779','cmuidottc00040gdwv25b9mur',2000,1,1790430758832);
INSERT INTO grade_services VALUES('cmuig8v5c000m0g8gkbu8tabr','cmuig8v4y00000g8gzzocibhf','cmuidoysi00050gdw9rrz4hea',1000,1,1790430758833);
INSERT INTO grade_services VALUES('cmuig8v5d000o0g8gz48hmjxg','cmuig8v5200010g8gejmvi26f','cmuidoysi00050gdw9rrz4hea',1500,1,1790430758833);
INSERT INTO grade_services VALUES('cmuig8v5d000q0g8gjjrbe66u','cmuig8v5300020g8goz0mj779','cmuidoysi00050gdw9rrz4hea',2000,1,1790430758834);
INSERT INTO grade_services VALUES('cmuig8v5e000s0g8gpal53ww6','cmuig8v4y00000g8gzzocibhf','cmuidp27700060gdwj4il3bzg',1000,1,1790430758834);
INSERT INTO grade_services VALUES('cmuig8v5e000u0g8gsucusu3p','cmuig8v5200010g8gejmvi26f','cmuidp27700060gdwj4il3bzg',1500,1,1790430758835);
INSERT INTO grade_services VALUES('cmuig8v5f000w0g8gsvzqacv5','cmuig8v5300020g8goz0mj779','cmuidp27700060gdwj4il3bzg',2000,1,1790430758835);
CREATE TABLE IF NOT EXISTS "barbers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "years" INTEGER NOT NULL DEFAULT 0,
    "spec" TEXT NOT NULL DEFAULT '',
    "initials" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT 'bg-primary',
    "photo" TEXT,
    "gradeId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "barbers_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "grades" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO barbers VALUES('cmuidpoox00070gdwwkf4wuj8','Влад',5,'Эксперт-барбер','','bg-primary','/uploads/barbers/1790429053853-логотип_мориарти.png','cmuig8v5300020g8goz0mj779',1,1790426504770);
INSERT INTO barbers VALUES('cmuidpzv700080gdwdlj44fv4','Игорь',3,'Топ-барбер','','bg-primary',NULL,NULL,1,1790426519251);
INSERT INTO barbers VALUES('cmuidqeeg00090gdwuy2lp70v','Антон',3,'Топ-барбер','','bg-primary',NULL,NULL,1,1790426538088);
INSERT INTO barbers VALUES('cmuif8w7500000g02k0cqjtmd','Олег',5,'Эксперт-барбер','','bg-primary','/uploads/barbers/1790429079624-лого_адамас.png',NULL,1,1790429080577);
CREATE UNIQUE INDEX "services_name_key" ON "services"("name");
CREATE UNIQUE INDEX "schedules_barberId_date_time_key" ON "schedules"("barberId", "date", "time");
CREATE UNIQUE INDEX "barbers_name_key" ON "barbers"("name");
CREATE UNIQUE INDEX "grades_name_key" ON "grades"("name");
CREATE UNIQUE INDEX "grade_services_gradeId_serviceId_key" ON "grade_services"("gradeId", "serviceId");
COMMIT;
