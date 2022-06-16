import shell from "shelljs";

const resetTestDatabase = async () => {
  if (process.env.NODE_ENV === "test") {
    shell.exec(`env DATABASE_URL=${process.env.TEST_DATABASE_URL} yarn seed`);
  }
};

export default resetTestDatabase;
