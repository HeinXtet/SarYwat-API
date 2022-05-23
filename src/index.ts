import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ConfigureApp } from "@config/index";
dotenv.config();

const app: Express = express();

const configureApp = new ConfigureApp();
configureApp.initApp(app);

configureApp.setupMiddleware();
configureApp.setupRoute();
configureApp.startApplication();
