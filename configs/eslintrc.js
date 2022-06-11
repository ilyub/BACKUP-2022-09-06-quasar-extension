module.exports = {
  rules: {
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    "vue/no-restricted-syntax": [
      "warn",
      {
        message: "Unexpected empty line",
        selector: "VElement[name=template] VText[value=/^\n\n/u]"
      }
    ]
  }
};
