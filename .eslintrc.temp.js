module.exports = {
  // eslint-disable-next-line @skylib/config/eslintrc-no-rules -- Ok
  rules: {
    "@skylib/consistent-optional-props": [
      "warn",
      {
        classes: "undefined",
        interfaces: "optional",
        // eslint-disable-next-line @skylib/config/eslintrc-no-overrides -- Ok
        overrides: [
          {
            _id: "combined",
            pattern: "^(?:Props|Slots|OwnProps|OwnSlots)$",
            style: "combined",
            target: "interfaces"
          },
          {
            _id: "optional",
            propertyPattern: "^on[A-Z]",
            style: "optional",
            target: "interfaces"
          }
        ]
      }
    ],
    "@skylib/no-empty-interfaces": [
      "warn",
      { ignoreSelector: "Identifier[name=/^Props|Slots$/u]" }
    ],
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
