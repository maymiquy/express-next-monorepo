import { config } from "dotenv";
config();

type Env = {
  NODE_ENV: string;
  PORT: string;
  JWT_SECRET_KEY: string;
  LOG_FORMAT: string;
  LOG_DIR: string;
  ORIGIN: string;
};

export const CREDENTIALS = process.env.CREDENTIALS === "true";
const env = process.env as unknown as Env;

export const { NODE_ENV, PORT, JWT_SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = {
  NODE_ENV: env.NODE_ENV,
  PORT: env.PORT,
  JWT_SECRET_KEY: env.JWT_SECRET_KEY,
  LOG_FORMAT: env.LOG_FORMAT,
  LOG_DIR: env.LOG_DIR,
  ORIGIN: env.ORIGIN,
};
