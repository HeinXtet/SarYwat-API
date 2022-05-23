import { Express } from "express";
import { Logger } from "@middleware/index";
import dotenv from "dotenv";
dotenv.config();

class ConfigureApp {
  constructor(express?: Express) {
    this.express = express;
  }
  express?: Express = null;
  port = process.env.PORT;

  initApp = (express: Express) => {
    this.express = express;
  };

  setupMiddleware = () => {
    this.express.use(new Logger().logging);
  };

  setupRoute = () => {};

  startApplication = () => {
    this.express.listen(this.port, () => {
      console.log(
        `[server]: Server is running  ddsfas at https://localhost:${this.port}`
      );
    });
  };
}

export default ConfigureApp;
