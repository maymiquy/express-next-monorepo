import { describe, it, expect, jest } from "@jest/globals";
import { logger } from "..";

jest.spyOn(global.console, "log");

describe("@repo/logger", () => {
  it("It should be log info", () => {
    const logSpy = jest.spyOn(logger, "info").mockImplementation(() => logger);
    logger.info("its running");
    expect(logSpy).toBeCalledWith("its running");
    logSpy.mockRestore();
  });

  it("It should be log error", () => {
    const errorSpy = jest
      .spyOn(logger, "error")
      .mockImplementation(() => logger);
    logger.error("error message");
    expect(errorSpy).toBeCalledWith("error message");
    errorSpy.mockRestore();
  });

  it("It should be log warn", () => {
    const warnSpy = jest.spyOn(logger, "warn").mockImplementation(() => logger);
    logger.warn("warn message");
    expect(warnSpy).toBeCalledWith("warn message");
    warnSpy.mockRestore();
  });

  it("It should be log http", () => {
    const httpSpy = jest.spyOn(logger, "http").mockImplementation(() => logger);
    logger.http("http request");
    expect(httpSpy).toBeCalledWith("http request");
    httpSpy.mockRestore();
  });

  it("It should be log verbose", () => {
    const verboseSpy = jest
      .spyOn(logger, "verbose")
      .mockImplementation(() => logger);
    logger.verbose("verbose message");
    expect(verboseSpy).toBeCalledWith("verbose message");
    verboseSpy.mockRestore();
  });

  it("It should be log debug", () => {
    const debugSpy = jest
      .spyOn(logger, "debug")
      .mockImplementation(() => logger);
    logger.debug("debug message");
    expect(debugSpy).toBeCalledWith("debug message");
    debugSpy.mockRestore();
  });

  it("It should be log silly", () => {
    const sillySpy = jest
      .spyOn(logger, "silly")
      .mockImplementation(() => logger);
    logger.silly("silly message");
    expect(sillySpy).toBeCalledWith("silly message");
    sillySpy.mockRestore();
  });
});
