import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    '\\.css$': 'jest-transform-stub',
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Adjust path if necessary
  testEnvironment: "jsdom",
};

export default config;
