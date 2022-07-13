module.exports = {
  extends: [
    require.resolve("@skylib/config/src/eslintrc"),
    require.resolve("@skylib/functions/configs/eslintrc"),
    require.resolve("@skylib/facades/configs/eslintrc"),
    require.resolve("@skylib/framework/configs/eslintrc"),
    "./configs/eslintrc",
    "./configs/eslintrc.extras",
    "./.eslintrc.overrides",
    "./.eslintrc.rule-overrides",
    "./.eslintrc.temp"
  ]
};
