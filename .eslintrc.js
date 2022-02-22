module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    "vue-scoped-css/enforce-style-type": ["warn", { allows: ["module"] }]
  }
};
