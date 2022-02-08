module.exports = {
  es: true,
  extraChoreLocations: [
    "src/App.vue",
    "src/boot/**",
    "src/chore/**",
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
    "Element",
    "FunctionalComponent",
    "HTMLElement",
    "InjectionKey",
    "ObjectDirective",
    "PropOptions",
    "PropOptionsDefault",
    "PropOptionsRequired",
    "QVirtualScroll",
    "Ref",
    "SetupContext",
    "VueWrapper"
  ]
};
