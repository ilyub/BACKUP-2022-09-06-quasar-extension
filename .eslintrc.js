module.exports = {
  extends: [
    require.resolve("@skylib/config/src/eslintrc"),
    require.resolve("@skylib/config/src/eslintrc.allow-type-assertions"),
    require.resolve("@skylib/functions/configs/eslintrc"),
    require.resolve("@skylib/facades/configs/eslintrc"),
    require.resolve("@skylib/framework/configs/eslintrc"),
    "./configs/eslintrc",
    "./.eslintrc.overrides",
    "./.eslintrc.rule-overrides",
    "./.eslintrc.temp"
  ],
  // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
  // fixme
  settings: {
    "boundaries/elements": [
      {
        mode: "full",
        pattern: "./api/**",
        type: "api"
      },
      {
        mode: "full",
        pattern: "./bin/**",
        type: "bin"
      },
      {
        mode: "full",
        pattern: "./configs/**",
        type: "configs"
      },
      {
        mode: "full",
        pattern: "./fixtures/**",
        type: "fixtures"
      },
      {
        mode: "full",
        pattern: "./__mocks__/**",
        type: "mocks"
      },
      {
        mode: "full",
        pattern: "./tests/**",
        type: "tests"
      },
      // eslint-disable-next-line @skylib/no-restricted-syntax/prefer-evaluate -- Wait for @skylib/functions update
      ...(() => {
        const capture = [];

        let directories = "";

        const part = "([a-zA-Z0-9-]+)";

        const result = [];

        for (let index = 1; index <= 7; index++) {
          result.push(
            {
              capture: [...capture, "filename", "suffix", "ext"],
              mode: "full",
              pattern: `./src/${directories}${part}().${part}`,
              type: `src${index}`
            },
            {
              capture: [...capture, "filename", "suffix", "ext"],
              mode: "full",
              pattern: `./src/${directories}${part}.${part}.${part}`,
              type: `src${index}`
            }
          );

          capture.push(`dir${index}`);

          directories = `${directories}*/`;
        }

        return result;
      })()
    ]
  }
};
