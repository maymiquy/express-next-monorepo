import { Router } from "express";

class Root {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    // Root route
    this.router.get("/", (req, res) => {
      res.status(200).json({
        status: "OK",
        message: "Hello World",
      });
    });

    this.router.get("/test/:name", (req, res) => {
      res.status(200).json({
        status: "OK",
        message: "Test with parameter",
        name: req.params.name,
      });
    });
  }
}

export default Root;
