module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    "vue/match-component-file-name": [
      "warn",
      {
        extensions: ["vue"],
        shouldMatchCase: false
      }
    ]
  }
};
