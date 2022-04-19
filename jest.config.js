const config = require("@skylib/config/src/jest-preset");

module.exports = {
  collectCoverageFrom: [
    ...config.collectCoverageFrom,
    // eslint-disable-next-line no-warning-comments
    // fixme: Wait for @skylib/config update
    "!src/**/*.{js,jsx}",
    "!src/App.vue",
    "!src/boot/**",
    "!src/router/**",
    "!src/routes.ts",
    "!src/samples/**"
  ],
  moduleNameMapper: {
    ...config.moduleNameMapper,
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    [/^@$/u.source]: "<rootDir>/src",
    [/^flag-icon-css\/flags\/1x1\/(\w+)\.svg$/u.source]:
      "<rootDir>/__mocks__/flag-icon-css/$1.js",
    [/^lodash-es$/u.source]: "lodash",
    [/^typeface-roboto-multilang\/(\w+)\.css$/u.source]:
      "<rootDir>/__mocks__/typeface-roboto-multilang/$1.js"
  },
  preset: "@skylib/config/src",
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  testEnvironment: "@skylib/config/src/jest-env-jsdom",
  transform: { ...config.transform, [/\.vue$/u.source]: "@vue/vue3-jest" }
};
