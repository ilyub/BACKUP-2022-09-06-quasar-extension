module.exports = {
  rules: {
    "@skylib/custom/no-empty-interface": [
      "warn",
      {
        message: "Empty interface is not allowed",
        selector:
          "TSInterfaceDeclaration[body.body.length=0][extends=undefined] > .id[name!=Props]"
      }
    ],
    "vue/no-undef-components": ["warn", { ignorePatterns: [/^[mq]-/u.source] }]
  },
  overrides: [
    {
      files: "./src/boot/main.ts",
      rules: {
        // eslint-disable-next-line @skylib/custom/eslintrc-no-disable -- Ok
        "no-console": "off"
      }
    },
    {
      files: "./src/components/*.vue",
      rules: { "@skylib/vue-component-name": ["warn", { prefix: "m-" }] }
    },
    {
      files: "./src/samples/*.vue",
      rules: { "@skylib/vue-component-name": ["warn", { prefix: "sample-" }] }
    }
  ]
};
