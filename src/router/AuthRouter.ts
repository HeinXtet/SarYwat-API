import express, { Router, Request, Response } from "express";

interface AuthRouter {
  routes(): Router;
  router: Router;
}

class AuthRouterImpl implements AuthRouter {
  router = express.Router();
  routes(): express.Router {
    this.router.get("/", (request: Request, response: Response) => {
      console.log("auth api call");
      response.send({
        message: "HELLO FROM AUTH API",
      });
    });
    return this.router;
  }
}

const authRouter = new AuthRouterImpl();

export default authRouter;
