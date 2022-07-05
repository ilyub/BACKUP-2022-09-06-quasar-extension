// eslint-disable-next-line @skylib/no-restricted-syntax/eslintrc-no-temp -- Postponed
module.exports = {
  overrides: [
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
    // fixme - Vue file should be named after component
    {
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-filename-check"
      ),
      files: "*.vue"
    }
  ],
  rules: { "import/no-extraneous-dependencies": "off" }
};
