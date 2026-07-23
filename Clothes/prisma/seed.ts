// Reference seed entry for a future Next.js/Prisma app.
// Product source of truth for this static build currently lives in js/data.js.
import { PrismaClient } from '@prisma/client';
import products from '../seed/products.json';

const prisma = new PrismaClient();

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product
    });
  }
}

main().finally(async () => prisma.$disconnect());
