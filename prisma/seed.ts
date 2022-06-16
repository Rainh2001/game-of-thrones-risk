import { User } from "@prisma/client";
import users, { BaseUser } from "../mockObjects/users";
import prisma from "./prisma";

const generateUsers = async (userList: BaseUser[]): Promise<void> => {
  await prisma.user.createMany({
    data: userList,
    skipDuplicates: true,
  });
};

async function seed() {
  await generateUsers(users);
}

seed();
