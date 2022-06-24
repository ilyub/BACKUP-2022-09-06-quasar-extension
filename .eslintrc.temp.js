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
    "vue/no-undef-components": ["warn", { ignorePatterns: [/^[mq]-/u.source] }],
    "vue/require-expose": "off",
    "xss/no-mixed-html": "off"
  }
};
