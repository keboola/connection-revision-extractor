module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  transform: {
    "^.+.ts$": "ts-jest"
  },
  testRegex: "^.+.test.(ts|js)$",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  moduleDirectories: ["node_modules", "src", "tests"]
};
