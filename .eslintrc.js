module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    // eslint-disable-next-line @skylib/disallow-by-regexp
    // temp
    "@skylib/no-mutable-signature": "off",
    "vue-scoped-css/enforce-style-type": ["warn", { allows: ["module"] }],
    "vue/custom-event-name-casing": ["warn", "camelCase"],
    "vue/v-on-function-call": ["warn", "never"]
  }
};
