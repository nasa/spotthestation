const { defaults: tsjPreset } = require("ts-jest/presets")

module.exports = {
  ...tsjPreset,
  preset: "jest-expo",
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      babelConfig: true,
    }]
  },
  moduleNameMapper: {
    '^[./a-zA-Z0-9$_-]+\\.mtl$': '<rootDir>/test/mockFile.tsx',
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@react-native|react-native|@expo-.*|expo-.*|expo|@react-navigation)",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/e2e", "/detox", "@react-native", "<rootDir>/test", "<rootDir>/assets", "<rootDir>/app/services/reactotron"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/", "/detox", "@react-native", "<rootDir>/test", "<rootDir>/assets", "<rootDir>/app/services/reactotron", "<rootDir>/app/navigators", "<rootDir>/app/components"
  ],
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/test/setup.unit.tsx"],
  workerIdleMemoryLimit: "1GB",
}
