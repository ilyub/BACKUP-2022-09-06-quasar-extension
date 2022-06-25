const ignoreTypes = [
  "^ComponentOptionsBase$",
  "^ComputedRef$",
  "^Promise$",
  "^Readonly",
  "^VueWrapper$",
  "^Writable"
];

// eslint-disable-next-line @skylib/no-restricted-syntax -- Postponed
module.exports = {
  overrides: [
    { files: "*.vue", rules: { "@skylib/consistent-filename": "off" } },
    {
      files: "./src/samples/**",
      rules: { "import/no-relative-parent-imports": "off" }
    },
    {
      files: [
        "./src/components/BaseButton.vue",
        "./src/components/Card.vue",
        "./src/components/CardActions.vue",
        "./src/components/CardSection.vue",
        "./src/components/ExpansionItem.vue",
        "./src/components/Field.vue",
        "./src/components/Form.vue",
        "./src/components/Item.vue",
        "./src/components/Knob.vue",
        "./src/components/Menu.vue",
        "./src/components/OptionGroup.vue",
        "./src/components/PopupProxy.vue",
        "./src/components/Select.vue",
        "./src/components/Toggle.vue",
        "./src/components/Tooltip.vue"
      ],
      rules: { "vue/no-restricted-syntax": "off" }
    }
  ],
  rules: {
    "@skylib/no-mutable-signature": [
      "warn",
      {
        ignoreClasses: true,
        ignoreIdentifiers: [/^mutable/u.source],
        ignoreInferredTypes: true,
        ignoreInterfaces: true,
        ignoreNumberSignature: true,
        ignoreTypes
      }
    ],
    "@skylib/prefer-readonly": [
      "warn",
      {
        ignoreClasses: true,
        ignoreIdentifiers: [/^mutable/u.source],
        ignoreInferredTypes: true,
        ignoreInterfaces: true,
        ignoreTypes
      }
    ],
    "github/unescaped-html-literal": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "vue/no-undef-components": ["warn", { ignorePatterns: [/^[mq]-/u.source] }],
    "vue/require-expose": "off",
    "xss/no-mixed-html": "off"
  }
};
