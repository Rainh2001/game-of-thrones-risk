import prisma from "../utils/prisma";

describe("prisma", () => {
  it("connects to test db", async () => {
    prisma.$connect();
  });
});
