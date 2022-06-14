module.exports = {
  consistentImport: [
    {
      localName: "mdi",
      sourcePattern: "@mdi/js-dynamic",
      type: "wildcard"
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
  noRestrictedSyntax: [
    {
      message: 'Use "Props" interface',
      selector:
        "CallExpression[callee.name=prop] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword, TSTypeReference).params"
    },
    {
      message: 'Use "Props" interface',
      selector:
        "CallExpression[callee.object.name=prop][callee.property.name=/^(?:default|required)$/u] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword, TSTypeReference).params"
    }
  ],
  quasar: true,
  quasarGlobalComponents: [/^[mq]-/u.source]
};
