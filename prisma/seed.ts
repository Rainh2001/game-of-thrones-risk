import prisma from "../utils/prisma";

async function main() {
  await seed();
}

async function seed() {
  prisma.$connect();
}
