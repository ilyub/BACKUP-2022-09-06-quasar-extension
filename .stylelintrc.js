module.exports = {
  extends: ["@skylib/config/src/stylelintrc"],
  rules: {
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    "plugin/no-unsupported-browser-features": [
      true,
      { ignore: ["css-sticky", "flexbox", "outline", "user-select-none"] }
    ]
  }
};
