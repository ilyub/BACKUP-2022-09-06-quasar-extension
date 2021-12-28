module.exports = {
  es: true,
  extraChoreLocations: [
    "src/App.vue",
    "src/boot/**",
    "src/router/**",
    "src/routes.ts",
    "src/typings/**"
  ],
  readonlyIgnoreTypes: [
    "App",
    "ComponentOptionsBase",
    "ComputedRef",
    "DirectiveBinding",
    "DOMWrapper",
    "FunctionalComponent",
    "HTMLElement",
    "InjectionKey",
    "ObjectDirective",
    "Ref",
    "SetupContext",
    "VueWrapper"
  ]
};
