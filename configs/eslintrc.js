module.exports = {
  rules: {
    "vue/no-bare-strings-in-template": [
      "warn",
      {
        allowlist: [
          "!",
          '"',
          "#",
          "$",
          "%",
          "&",
          "'",
          "(",
          ")",
          "*",
          "+",
          ",",
          "-",
          ".",
          "/",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          ":",
          ";",
          "<",
          "=",
          ">",
          "?",
          "@",
          "[",
          "\\",
          "]",
          "^",
          "_",
          "`",
          "{",
          "|",
          "}",
          "~",
          "\u2013"
        ],
        attributes: {
          "/.+/u": [
            "alt",
            "aria-label",
            "aria-placeholder",
            "aria-roledescription",
            "aria-valuetext",
            "caption",
            "confirmation",
            "label",
            "placeholder",
            "title",
            "tooltip",
            "validation-label"
          ]
        },
        directives: ["v-text"]
      }
    ],
    "vue/no-restricted-syntax": [
      "warn",
      {
        message: "Use lang variable",
        selector:
          "VAttribute > VIdentifier.key[name=/^(?:alt|aria-label|aria-placeholder|aria-roledescription|aria-valuetext|caption|confirmation|label|placeholder|title|tooltip|validation-label)$/u]"
      },
      // eslint-disable-next-line no-warning-comments -- Postponed
      // fixme
      {
        message: "Unexpected empty line",
        selector: "VElement[name=template] VText[value=/^\n\n/u]"
      }
    ]
  }
};
