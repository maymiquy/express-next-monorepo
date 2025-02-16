import express, { Application, Router } from "express";
import morgan from "morgan";
import cors from "cors";
import { LOG_FORMAT, NODE_ENV, PORT } from "./config/env";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleware/error.middleware";
import { logger, stream } from "@packages/logger";

interface Routes {
  path?: string;
  router: Router;
}

class Server {
  public server: Application;
  public env: string;
  public port: number;

  constructor(routes: Routes[]) {
    this.server = express();
    this.env = NODE_ENV;
    this.port = parseInt(PORT);

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan(LOG_FORMAT, { stream }));
    this.server.use(cors());
    this.server.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.server.use("/api", route.router);
    });
  }

  public getServer() {
    return this.server;
  }

  private initializeErrorHandling() {
    this.server.use(errorMiddleware);
  }

  public listen() {
    this.server.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }
}

export default Server;
