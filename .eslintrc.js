module.exports = {
  extends: [
    require.resolve("@skylib/config/src/eslintrc"),
    require.resolve("@skylib/config/src/eslintrc.allow-type-assertions"),
    require.resolve("@skylib/functions/configs/eslintrc"),
    require.resolve("@skylib/facades/configs/eslintrc"),
    require.resolve("@skylib/framework/configs/eslintrc")
  ],
  overrides: [
    {
      extends: require.resolve("@skylib/config/src/eslintrc.chore"),
      files: ["./src/App.vue", "./src/{application,router,samples}/**"]
    },
    {
      extends: [
        require.resolve("@skylib/config/src/eslintrc.allow-default-export"),
        require.resolve("@skylib/config/src/eslintrc.allow-global-access")
      ],
      files: "./src/{boot,router}/*"
    },
    {
      extends: [
        "./configs/eslintrc",
        "./.eslintrc.overrides",
        "./.eslintrc.temp"
      ],
      files: "**"
    }
  ]
};
