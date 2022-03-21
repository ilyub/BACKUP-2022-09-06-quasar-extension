module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    "jest/prefer-lowercase-title": "off",
    "tsdoc/syntax": "off",
    // eslint-disable-next-line no-warning-comments
    // fixme: Only plain for components
    "vue-scoped-css/enforce-style-type": [
      "warn",
      { allows: ["module", "plain"] }
    ]
  }
};
