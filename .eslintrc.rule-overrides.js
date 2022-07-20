// eslint-disable-next-line @skylib/disallow-import/no-internal-modules -- Wait for @skylib/config update
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
      rules: {
        "@skylib/match-filename": [
          "warn",
          {
            format: "kebabCase",
            prefix: "m-",
            selector:
              "CallExpression[callee.name=defineComponent] > ObjectExpression > Property[key.name=name] > Literal.value"
          }
        ]
      }
    },
    {
      files: "./src/samples/*.vue",
      rules: {
        "@skylib/match-filename": [
          "warn",
          {
            format: "kebabCase",
            prefix: "sample-",
            selector:
              "CallExpression[callee.name=defineComponent] > ObjectExpression > Property[key.name=name] > Literal.value"
          }
        ]
      }
    }
  ]
};
