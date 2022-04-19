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
    require("@skylib/functions/configs/eslintrc.options"),
    require("@skylib/framework/configs/eslintrc.options"),
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    // eslint-disable-next-line import/no-internal-modules -- Wait for @skylib/config update
    require("./configs/eslintrc.options")
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
