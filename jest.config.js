const config = require("@skylib/config/src/jest-preset");

module.exports = {
  collectCoverageFrom: [
    ...config.collectCoverageFrom,
    "!src/App.vue",
    "!src/boot/**",
    "!src/chore/**",
    "!src/router/**",
    "!src/routes.ts"
  ],
  moduleNameMapper: {
    ...config.moduleNameMapper,
    [/^flag-icon-css\/flags\/1x1\/(\w+)\.svg$/u.source]:
      "<rootDir>/__mocks__/flag-icon-css/$1.js",
    [/^typeface-roboto-multilang\/(\w+)\.css$/u.source]:
      "<rootDir>/__mocks__/typeface-roboto-multilang/$1.js"
  },
  preset: "@skylib/config/src",
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  testEnvironment: "@skylib/config/src/jest-env-jsdom",
  transform: {
    ...config.transform,
    [/\.vue$/u.source]: "@vue/vue3-jest"
  }
};
