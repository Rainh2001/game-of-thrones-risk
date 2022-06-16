import users from "../mockObjects/users";
import prisma from "../prisma/prisma";
import resetTestDatabase from "../utils/testing/resetDatabase";

describe("prisma", () => {
  it("connects to test db", async () => {
    prisma.$connect();
  });

  it("seed is successful in test db", async () => {
    await resetTestDatabase();
    expect(await prisma.user.findMany()).toHaveLength(users.length);
  });
});
