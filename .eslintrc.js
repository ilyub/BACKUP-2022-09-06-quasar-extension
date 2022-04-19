module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  // eslint-disable-next-line no-warning-comments
  // fixme
  rules: {
    "@skylib/no-multi-type-tuples": "off",
    "@skylib/no-mutable-signature": "off",
    "@skylib/no-unsafe-object-assignment": "off",
    "@skylib/prefer-readonly": "off",
    "@skylib/prefer-readonly-props": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "eslint-comments/require-description": "off",
    "import/no-internal-modules": [
      "warn",
      {
        allow: [
          "@skylib/*/configs/*",
          "@skylib/*/dist/testUtils",
          "@skylib/config/src/*",
          "@vue/test-utils/dist/types",
          "date-fns/locale/*",
          "flag-icon-css/flags/1x1/*.svg",
          "jest-extended/all",
          "quasar/wrappers",
          "ts-toolbelt/**",
          "typeface-roboto-multilang/*.css",
          "src/testUtils"
        ]
      }
    ]
  }
};
