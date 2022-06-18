const api = require("@skylib/config/src/api");

// eslint-disable-next-line import/no-internal-modules -- Ok
const boundaries = require("@skylib/config/src/eslint/boundaries");

module.exports = {
  overrides: [
    {
      files: [
        "./src/components/*.generic.ts",
        "./src/components/*.internal.ts",
        "./src/components/*.extras.ts",
        "./src/samples/*.generic.ts",
        "./src/samples/*.internal.ts",
        "./src/samples/*.extras.ts"
      ],
      rules: {
        // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
        // fixme
        "@skylib/consistent-filename": "off",
        // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
        // fixme
        "@skylib/only-export-name": "off"
      }
    },
    {
      files: ["./src/components/*.vue"],
      rules: { "@skylib/vue-component-name": ["warn", { prefix: "m-" }] }
    },
    {
      files: ["./src/facade-implementations/*/index.ts"],
      rules: { "@skylib/only-export-name": "off" }
    },
    {
      files: ["./src/samples/*.vue"],
      rules: { "@skylib/vue-component-name": ["warn", { prefix: "sample-" }] }
    }
  ],
  rules: {
    "@skylib/optional-property-style": [
      "warn",
      {
        classes: "undefined",
        interfaces: "optional",
        overrides: [
          {
            patterns: ["Props$"],
            style: "combined",
            target: "interfaces"
          },
          {
            patterns: ["Props$"],
            propertyPatterns: ["^on[A-Z]"],
            style: "optional",
            target: "interfaces"
          }
        ]
      }
    ],
    "boundaries/element-types": [
      "warn",
      {
        default: "disallow",
        // eslint-disable-next-line @skylib/disallow-by-regexp -- Wait for @skylib/config update
        rules: [
          ...boundaries.rules["boundaries/element-types"][1].rules,
          ...api.eslint.boundaries.elementTypes.createRules(
            filename => ["src2", { dir1: "components", filename }],
            ["Form", "Tooltip"],
            ["BaseButton", "Field", "Item", "Menu", "Sortable", "Switchable"],
            [
              "Button",
              "DatetimePicker",
              "Droppable",
              "FormActions",
              "FormButton",
              "IconButton",
              "FormSection",
              "Input",
              "MenuItem",
              "NumericInput",
              "PageSection",
              "Section",
              "Subsection",
              "Table"
            ],
            ["Group", "IconPicker", "LanguagePicker", "TimeInput"]
          ),
          ...api.eslint.boundaries.elementTypes.createRules(
            filename => [
              "src3",
              {
                dir1: "components",
                dir2: "api",
                filename
              }
            ],
            "misc",
            "*"
          )
        ]
      }
    ]
  }
};
