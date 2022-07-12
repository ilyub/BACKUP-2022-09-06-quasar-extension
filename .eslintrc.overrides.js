module.exports = {
  extends: [
    require.resolve("@skylib/config/src/eslintrc.allow-process-env.js"),
    require.resolve("@skylib/config/src/eslintrc.allow-type-assertions")
  ],
  overrides: [
    {
      files: "./src/{boot,router}/*",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.allow-default-export"
      )
    },
    {
      files: "./src/{boot,router,samples}/**",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.allow-global-access"
      )
    }
  ]
};
