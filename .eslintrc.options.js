module.exports = {
  consistentImport: [
    {
      localName: "mdi",
      sourcePattern: "@mdi/js-dynamic",
      type: "wildcard"
    }
  ],
  es: true,
  extends: [
    require("@skylib/functions/src/configs/eslintrc.options")(
      "@skylib/functions/es/"
    ),
    require("@skylib/framework/src/configs/eslintrc.options")(
      "@skylib/framework/es/"
    ),
    require("./src/configs/eslintrc.options")("@/")
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
