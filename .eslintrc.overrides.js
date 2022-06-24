module.exports = {
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
    }
  ]
};
