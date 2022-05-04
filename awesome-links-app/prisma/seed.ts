// DATA
import { links } from '../data/links';

// Lib
import prisma from '../lib/prisma.service';

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin-email@test.com',
      role: 'ADMIN',
      image: '',
    },
  });

  await prisma.link.createMany({
    data: links,
  });
}

main().catch(error => {
  console.error(error);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
