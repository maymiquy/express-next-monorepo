/** @type {import('jest').Config} */
const config = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@packages/logger$": "<rootDir>/node_modules/@packages/logger/dist/cjs/index.cjs",
  },
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/dist",
  ],
  preset: "ts-jest",
};

export default config;
