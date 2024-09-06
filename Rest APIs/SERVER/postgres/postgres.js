import { Sequelize } from "sequelize";

// Default Superuser is postgres. password-root1234
const sequelize = new Sequelize("postgres", "postgres", "root1234", {
  host: "localhost",
  dialect: "postgres",
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connection };
