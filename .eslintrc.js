module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  overrides: [
    {
      files: ["./src/components/*.generic.ts"],
      rules: { "@skylib/only-export-name": "off" }
    },
    {
      files: ["./src/components/*.vue"],
      rules: { "@skylib/vue-component-name": ["warn", { prefix: "m-" }] }
    },
    {
      files: ["./src/samples/*.vue"],
      rules: { "@skylib/vue-component-name": ["warn", { prefix: "sample-" }] }
    }
  ],
  // eslint-disable-next-line no-warning-comments
  // fixme
  rules: {
    "@skylib/no-multi-type-tuples": "off",
    "@skylib/no-mutable-signature": "off",
    "@skylib/no-unsafe-object-assignment": "off",
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
    "@skylib/prefer-readonly": "off",
    "@skylib/prefer-readonly-props": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "eslint-comments/require-description": "off"
  }
};
