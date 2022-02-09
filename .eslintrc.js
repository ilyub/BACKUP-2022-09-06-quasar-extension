module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    "vue/match-component-file-name": "off",
    "vue/no-multiple-template-root": "off"
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
