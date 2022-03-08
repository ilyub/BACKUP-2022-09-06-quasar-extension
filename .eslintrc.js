module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    // eslint-disable-next-line @skylib/disallow-by-regexp
    // temp
    "@skylib/no-mutable-signature": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        format: ["camelCase"],
        leadingUnderscore: "allow",
        selector: ["default"]
      },
      {
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
        selector: ["function", "typeLike", "variable"]
      },
      {
        // eslint-disable-next-line unicorn/no-null
        format: null,
        selector: [
          "objectLiteralMethod",
          "objectLiteralProperty",
          "typeProperty"
        ]
      }
    ],
    "pii/no-phone-number": "off",
    "vue-scoped-css/enforce-style-type": ["warn", { allows: ["module"] }],
    "vue/custom-event-name-casing": ["warn", "camelCase"],
    "vue/v-on-function-call": ["warn", "never"]
  }
};
