import { Sequelize } from "sequelize";
import dotenv from "dotenv";
class DatabaseConnection {
  async setup() {
    const {
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      DATABASE_HOST,
    } = process.env;
    const sequelize = new Sequelize(
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      {
        host: DATABASE_HOST,
        dialect: "mysql",
        dialectOptions: {
          // Your mysql2 options here
        },
      }
    );
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

const databaseConnection = new DatabaseConnection();

export default databaseConnection;
