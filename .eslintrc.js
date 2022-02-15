module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "vue/match-component-file-name": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-unregistered-components": [
      "warn",
      { ignorePatterns: [/^[mq]-/u.source] }
    ]
  },
  // @skylib/sort-keys break
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "@skylib/require-jsdoc": "off"
      }
    }
  ]
};
