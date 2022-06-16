import { User } from "@prisma/client";
import users, { BaseUser } from "../mockObjects/users";
import prisma from "../utils/prisma";

const generateUsers = async (userList: Omit<User, 'id'>[]): Promise<void> => {
  prisma.user.createMany({
    data: userList,
    skipDuplicates: true
  });
}

async function seed() {
  await prisma.$connect();
  await generateUsers(users);
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })