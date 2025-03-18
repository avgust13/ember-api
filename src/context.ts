import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma,
};

// Ensure Prisma connection is properly managed
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
