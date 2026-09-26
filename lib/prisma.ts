import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client/web';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({
  adapter: new PrismaLibSql(createClient({
    url: "libsql://boroda-db-junger-maker.aws-eu-west-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3OTA0MzM2OTQsImlkIjoiMDFhMGRlMjktMWUwMS03NmNlLWE2ZjktNWNhOWJkOTc4MjA5Iiwia2lkIjoidjhEa1RjZHVPRDZkQ3dOejV0LTBtV3JzVzB3NUI3aWdoWGczTHdpSXpwdyIsInJpZCI6IjZlMmYwZTg0LWVmMmQtNDI0My05MDViLWZjOTQ5ZTE1ODFhYiJ9.RpccCGtzHTBGMVoyy_D0EWWlCk9AJUvZhzJw-75qP4Y3vJxyynAQsvtVp2rO0c4mXGQ9aBIeWNIVCzZZhZIqBA"
  }))
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
