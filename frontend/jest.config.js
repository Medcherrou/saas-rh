module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      { configFile: "./babel-jest.config.js" },
    ],
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
