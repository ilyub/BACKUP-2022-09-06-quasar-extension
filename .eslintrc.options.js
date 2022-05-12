module.exports = {
  consistentImport: [
    {
      localName: "mdi",
      sourcePattern: "@mdi/js-dynamic",
      type: "wildcard"
    },
    {
      autoImportSource: "@/testUtils",
      sourcePattern: "@skylib/quasar/src/testUtils",
      type: "wildcard"
    }
  ],
  extends: [
    "@skylib/functions/configs/eslintrc.options.js",
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/facades update
    // fixme
    // "@skylib/facades/configs/eslintrc.options.js",
    "@skylib/framework/configs/eslintrc.options.js",
    "./configs/eslintrc.options.js"
  ],
  extraChoreLocations: [
    "src/App.vue",
    "src/boot/**",
    "src/router/**",
    "src/routes.ts",
    "src/samples/**",
    "src/typings/**"
  ],
  extraDefaultExportLocations: [
    "__mocks__/flag-icon-css/*",
    "__mocks__/typeface-roboto-multilang/*"
  ],
  quasar: true,
  quasarGlobalComponents: [/^[mq]-/u.source]
};
