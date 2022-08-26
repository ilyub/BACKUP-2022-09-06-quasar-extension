module.exports = {
  extends: [
    "./node_modules/@skylib/config/eslint/options/allow-process-env",
    "./node_modules/@skylib/config/eslint/options/allow-type-assertions"
  ],
  overrides: [
    {
      files: ["./jest.config.js", "./src/application/lang/{en,ru}.ts"],
      extends:
        "./node_modules/@skylib/config/eslint/options/skip-html-literal-check"
    },
    {
      files: "./src/{boot,router}/*",
      extends: [
        "./node_modules/@skylib/config/eslint/options/allow-default-export",
        "./node_modules/@skylib/config/eslint/options/allow-global-access"
      ]
    },
    {
      files: "./src/samples/**",
      extends:
        "./node_modules/@skylib/config/eslint/options/allow-global-access"
    }
  ]
};
