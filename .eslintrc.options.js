module.exports = {
  es: true,
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
  quasarGlobalComponents: [/^[mq]-/u.source],
  readonlyIgnoreTypes: [
    "AxiosInstance",
    "ComponentOptionsBase",
    "ComputedRef",
    "HTMLElement",
    "InjectionKey",
    "PropOptions",
    "Ref",
    "Router",
    "SetupContext",
    "VueWrapper"
  ]
};
