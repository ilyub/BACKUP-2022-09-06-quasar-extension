const { jest } = require("@skylib/config");

module.exports = {
  collectCoverageFrom: [
    ...jest.preset.collectCoverageFrom,
    "!src/App.vue",
    "!src/application/**",
    "!src/boot/**",
    "!src/router/**",
    "!src/routes.ts",
    "!src/samples/**"
  ],
  moduleNameMapper: {
    ...jest.preset.moduleNameMapper,
    [/^flag-icon-css\/flags\/1x1\/(\w+)\.svg$/u.source]:
      "<rootDir>/__mocks__/flag-icon-css/$1.js",
    [/^typeface-roboto-multilang\/(\w+)\.css$/u.source]:
      "<rootDir>/__mocks__/typeface-roboto-multilang/$1.js"
  },
  preset: "@skylib/config/src",
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  testEnvironment: "@skylib/config/src/jest-env-jsdom"
};
