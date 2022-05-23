import { Router, Request, Response, response } from "express";

interface AuthRouter {
  getRoute(): Router;
}

class AuthRouterImpl implements AuthRouter {
  getRoute(): Router {
    const router = Router();
    router.get("auth", (request: Request, reqsonse: Response) => {
      console.log("auth api call");
      response.send({
        message: "HELLO FROM AUTH API",
      });
    });
    return router;
  }
}

export default AuthRouterImpl;
