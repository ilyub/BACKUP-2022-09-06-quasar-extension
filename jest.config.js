const config = require("@skylib/config/src/jest-preset");

module.exports = {
  collectCoverageFrom: [
    ...config.collectCoverageFrom,
    "!src/App.vue",
    "!src/boot/**",
    "!src/router/**",
    "!src/routes.ts"
  ],
  globals: {
    ...config.globals,
    "__DEV__": true,
    "vue-jest": { pug: { doctype: "html" } }
  },
  moduleNameMapper: {
    ...config.moduleNameMapper,
    [/^flag-icon-css\/flags\/1x1\/ru\.svg$/u.source]:
      "<rootDir>/__mocks__/flag-icon-css/ru.js",
    [/^flag-icon-css\/flags\/1x1\/us\.svg$/u.source]:
      "<rootDir>/__mocks__/flag-icon-css/us.js",
    [/^typeface-roboto-multilang\/cyrillic\.css$/u.source]:
      "<rootDir>/__mocks__/typeface-roboto-multilang/cyrillic.js",
    [/^typeface-roboto-multilang\/latin-ext\.css$/u.source]:
      "<rootDir>/__mocks__/typeface-roboto-multilang/latin-ext.js"
  },
  preset: "@skylib/config/src",
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  testEnvironment: undefined,
  transform: {
    ...config.transform,
    [/\.vue$/u.source]: "vue-jest"
  }
};
