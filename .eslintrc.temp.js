// eslint-disable-next-line @skylib/custom/eslintrc-no-temp -- Postponed
module.exports = {
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "import/no-extraneous-dependencies": "off"
  },
  overrides: [
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
    // fixme - Vue file should be named after component
    {
      files: "*.vue",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-filename-check"
      ),
      rules: { "@skylib/custom/no-anonymous-return": "off" }
    },
    {
      files: "./tests/**",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-filename-check"
      ),
      rules: { "@skylib/custom/no-anonymous-return": "off" }
    }
  ]
};
