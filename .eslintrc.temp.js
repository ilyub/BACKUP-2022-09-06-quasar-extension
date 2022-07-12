// eslint-disable-next-line @skylib/custom/eslintrc-no-temp -- Postponed
module.exports = {
  overrides: [
    {
      files: "*.vue",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-filename-check"
      )
    }
  ]
};
