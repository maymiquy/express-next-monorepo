import supertest from "supertest";
import { describe, it, expect } from "@jest/globals";
import Server from "../server";
import Root from "../routes/root";

const createServer = () => new Server([new Root()]).getServer();

describe("Server", () => {
  it("health check returns 200", async () => {
    await supertest(createServer())
      .get("/api/")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ status: "OK", message: "Hello World" });
      });
  });

  it("message endpoint returns expected response", async () => {
    const testName = "jared";
    await supertest(createServer())
      .get(`/api/test/${testName}`)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          status: "OK",
          message: "Test with parameter",
          name: testName,
        });
      });
  });
});
