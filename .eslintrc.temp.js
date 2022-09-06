// eslint-disable-next-line @skylib/config/eslintrc/no-temp -- Postponed
module.exports = {
  rules: {
    "@skylib/consistent-optional-props": [
      "warn",
      {
        classes: "undefined",
        interfaces: "optional",
        overrides: [
          {
            _id: "PropsSlots",
            pattern: "^(?:Props|Slots|OwnProps|OwnSlots)$",
            style: "combined",
            target: "interfaces"
          },
          {
            _id: "PropsSlots.events",
            pattern: "^(?:Props|Slots|OwnProps|OwnSlots)$",
            propertyPattern: "^on[A-Z]",
            style: "optional",
            target: "interfaces"
          }
        ]
      }
    ],
    "@skylib/quasar-extension/vue/script/require-prop-type-param": "off",
    "@skylib/sort-statements": [
      "warn",
      {
        programOrder: [
          "ImportDeclaration",
          "ExportAllDeclaration",
          "ExportDeclaration",
          "ExportUnknown",
          "ExportTypeDeclaration",
          "ExportFunctionDeclaration",
          "Unknown",
          "TypeDeclaration",
          "FunctionDeclaration",
          "ExportDefaultDeclaration",
          "JestTest"
        ]
      }
    ],
    "@skylib/vue/sort-v-bind": "off",
    "node/no-extraneous-import": [
      "warn",
      { allowModules: ["@vue/test-utils"] }
    ],
    "vue/attributes-order": "error",
    "vue/no-bare-strings-in-template": [
      "warn",
      {
        allowlist: [
          "(",
          ")",
          ",",
          ".",
          "&",
          "+",
          "-",
          "=",
          "*",
          "/",
          "#",
          "%",
          "!",
          "?",
          ":",
          "[",
          "]",
          "{",
          "}",
          "<",
          ">",
          "\u00B7",
          "\u2022",
          "\u2010",
          "\u2013",
          "\u2014",
          "\u2212",
          "|",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ]
      }
    ]
  }
};
