const { eslint } = require("@skylib/config/api");

const consistentImport = eslint.rules["@skylib/consistent-import/project"];

module.exports = {
  rules: {
    "@skylib/consistent-import/project": [
      "warn",
      {
        sources: [
          {
            _id: "app",
            localName: "app",
            source: "@skylib/quasar-extension/src/application",
            type: "wildcard"
          },
          ...consistentImport.sources
        ]
      }
    ]
  },
  overrides: [
    {
      files: "*.vue",
      rules: {
        "vue/no-undef-components": [
          "warn",
          { ignorePatterns: [/^[mq]-/u.source] }
        ]
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
