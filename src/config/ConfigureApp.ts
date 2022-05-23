import { Express } from "express";
import { Logger } from "@middleware/index";
import dotenv from "dotenv";
import { AuthRouter } from "@router/index";
import { FirebaseAdminHelper } from "@config/index";

dotenv.config();

class ConfigureApp {
  port = process.env.PORT;
  express?: Express = null;

  /**
   * Configure App and PORT (optional)
   * @param express
   * @param port
   */
  constructor(express?: Express, port?: string) {
    this.express = express;
    this.port = port;
  }

  /**
   * Configure PORT
   * @param port
   */
  setupPort = (port?: string) => {
    this.port = port;
  };

  /**
   * Application setup
   * @param express
   */
  initApp = (express: Express) => {
    this.express = express;
  };

  /**
   * Setup firebase admin
   */
  setupFirebaseAdmin = () => {
    FirebaseAdminHelper.initFirebaseAdmin();
  };
  /**
   * Application Middleware configure
   */
  setupMiddleware = () => {
    this.express.use(Logger.logging);
  };

  /**
   * Application Route configure
   */
  setupRoute = () => {
    this.express.use("/api/auth", AuthRouter.routes());
  };

  /**
   * Start App
   */
  startApplication = () => {
    this.express.listen(this.port, () => {
      console.log(
        `[server]: Server is running  ddsfas at https://localhost:${this.port}`
      );
    });
  };
}

export default ConfigureApp;
