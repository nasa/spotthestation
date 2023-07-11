const { defaults: tsjPreset } = require("ts-jest/presets")

module.exports = {
  ...tsjPreset,
  preset: "jest-expo",
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "/detox", "@react-native", "<rootDir>/test", "<rootDir>/assets", "<rootDir>/app/services/reactotron"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/", "/detox", "@react-native", "<rootDir>/test", "<rootDir>/assets", "<rootDir>/app/services/reactotron", "<rootDir>/app/navigators", "<rootDir>/app/components"
  ],
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/test/setup.ts"],
}
