import express from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

interface Logger {
  logging(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): void;
}

class LoggerMiddleware implements Logger {
  logging(
    request: express.Request<
      ParamsDictionary,
      any,
      any,
      ParsedQs,
      Record<string, any>
    >,
    response: express.Response<any, Record<string, any>>,
    next: express.NextFunction
  ): void {
    console.log(`${request.method} ${request.path}`);
    next();
  }
}

const logger = new LoggerMiddleware();

export default logger;
