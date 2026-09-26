-- CreateTable
CREATE TABLE "grades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "grade_services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gradeId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "grade_services_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "grades" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "grade_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_barbers" (
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
INSERT INTO "new_barbers" ("color", "created_at", "id", "initials", "isActive", "name", "photo", "spec", "years") SELECT "color", "created_at", "id", "initials", "isActive", "name", "photo", "spec", "years" FROM "barbers";
DROP TABLE "barbers";
ALTER TABLE "new_barbers" RENAME TO "barbers";
CREATE UNIQUE INDEX "barbers_name_key" ON "barbers"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "grades_name_key" ON "grades"("name");

-- CreateIndex
CREATE UNIQUE INDEX "grade_services_gradeId_serviceId_key" ON "grade_services"("gradeId", "serviceId");
