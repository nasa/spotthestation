const { defaults: tsjPreset } = require("ts-jest/presets")

module.exports = {
  ...tsjPreset,
  preset: "jest-expo",
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      babelConfig: true,
    }]
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@react-native|react-native|@expo-.*|expo-.*|@react-navigation)",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "/detox", "__tests?__", "@react-native", "<rootDir>/test", "<rootDir>/assets", "<rootDir>/app/services/reactotron"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/", "/detox", "__tests?__", "@react-native", "<rootDir>/test", "<rootDir>/assets", "<rootDir>/app/services/reactotron", "<rootDir>/app/navigators", "<rootDir>/app/components"
  ],
  testEnvironment: "node",
  setupFiles: ["<rootDir>/test/setup.e2e.tsx"],
}
