module.exports = {
  consistentImport: [
    {
      localName: "mdi",
      sourcePattern: "@mdi/js-dynamic",
      type: "wildcard"
    },
    {
      localName: "expectMatchers",
      sourcePattern: "expect/build/matchers",
      type: "default"
    },
    {
      localName: "VueDraggable",
      sourcePattern: "vuedraggable",
      type: "default"
    },
    {
      localName: "app",
      sourcePattern: "@skylib/quasar-extension/src/application",
      type: "wildcard"
    },
    {
      localName: "components",
      sourcePattern: "@skylib/quasar-extension/src/components/index.components",
      type: "wildcard"
    },
    {
      localName: "extras",
      sourcePattern: "@skylib/quasar-extension/src/components/index.extras",
      type: "wildcard"
    },
    {
      sourcePattern: "@skylib/quasar-extension/src/test-utils",
      type: "wildcard"
    }
  ],
  extends: [
    "@skylib/functions/configs/eslintrc.options",
    "@skylib/facades/configs/eslintrc.options",
    "@skylib/framework/configs/eslintrc.options",
    "./configs/eslintrc.options.js"
  ],
  extraChoreLocations: [
    "src/App.vue",
    "src/application/**",
    "src/boot/**",
    "src/router/**",
    "src/routes.ts",
    "src/samples/**"
  ],
  extraDefaultExportLocations: [
    "__mocks__/flag-icon-css/*",
    "__mocks__/typeface-roboto-multilang/*"
  ],
  quasar: true,
  quasarGlobalComponents: [/^[mq]-/u.source]
};
