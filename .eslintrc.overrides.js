module.exports = {
  overrides: [
    {
      files: ["./src/{application,boot,router,samples}/**", "./src/App.vue"],
      extends: require.resolve("@skylib/config/src/eslintrc.chore")
    },
    {
      files: "./src/{boot,router}/*",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.allow-default-export"
      )
    },
    {
      files: ["./src/{boot,router}/*", "./src/samples/**"],
      extends: require.resolve(
        "@skylib/config/src/eslintrc.allow-global-access"
      )
    },
    {
      files: [
        "./src/application/lang/{en,ru}.ts",
        "./src/components/Sortable.internal.ts"
      ],
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-html-literal-check"
      )
    },
    {
      files: "./src/components/api/types/prop-options.ts",
      extends: require.resolve(
        "@skylib/config/src/eslintrc.skip-only-export-check"
      )
    }
  ]
};
