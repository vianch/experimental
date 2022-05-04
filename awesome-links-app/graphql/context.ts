import { PrismaClient } from '@prisma/client';

import prisma from '../lib/prisma.service';

export type ContextType = {
  prisma: PrismaClient;
};

async function createContexts(): Promise<ContextType> {
  return {
    prisma,
  }
}

export default createContexts;
