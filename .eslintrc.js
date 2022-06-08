module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  overrides: [
    {
      files: [
        "./src/components/*.core.ts",
        "./src/components/*.generic.ts",
        "./src/components/*.extras.ts",
        "./src/samples/*.core.ts",
        "./src/samples/*.generic.ts",
        "./src/samples/*.extras.ts"
      ],
      rules: {
        // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
        // fixme
        "@skylib/consistent-filename": "off",
        // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
        // fixme
        "@skylib/only-export-name": "off"
      }
    },
    {
      files: ["./src/components/*.vue"],
      rules: { "@skylib/vue-component-name": ["warn", { prefix: "m-" }] }
    },
    {
      files: ["./src/facade-implementations/*/index.ts"],
      rules: { "@skylib/only-export-name": "off" }
    },
    {
      files: ["./src/samples/*.vue"],
      rules: { "@skylib/vue-component-name": ["warn", { prefix: "sample-" }] }
    }
  ],
  rules: {
    "@skylib/optional-property-style": [
      "warn",
      {
        classes: "undefined",
        interfaces: "optional",
        overrides: [
          {
            patterns: ["Props$"],
            style: "combined",
            target: "interfaces"
          },
          {
            patterns: ["Props$"],
            propertyPatterns: ["^on[A-Z]"],
            style: "optional",
            target: "interfaces"
          }
        ]
      }
    ],
    // eslint-disable-next-line no-warning-comments -- Postponed
    // fixme
    "boundaries/element-types": "off"
  }
};
