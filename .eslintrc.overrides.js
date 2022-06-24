const { eslint } = require("@skylib/config");

module.exports = {
  overrides: [
    {
      files: "./src/components/api/types/prop-options.ts",
      // eslint-disable-next-line @skylib/no-restricted-syntax -- Postponed
      rules: { "@skylib/primary-export-only": "off" }
    },
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
        // eslint-disable-next-line @skylib/no-restricted-syntax -- Postponed
        "@skylib/consistent-filename": "off",
        // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
        // fixme
        // eslint-disable-next-line @skylib/no-restricted-syntax -- Postponed
        "@skylib/only-export-name": "off"
      }
    },
    {
      files: "./src/components/*.vue",
      rules: { "@skylib/vue-component-name": ["warn", { prefix: "m-" }] }
    },
    {
      files: "./src/facade-implementations/*/index.ts",
      // eslint-disable-next-line @skylib/no-restricted-syntax -- Postponed
      rules: { "@skylib/only-export-name": "off" }
    },
    {
      files: "./src/samples/*.vue",
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
        rules: [
          ...eslint.boundaries.elementTypes.rules,
          {
            allow: "{src1,src2,src3,src4,src5,src6,src7}",
            from: [
              ["{src2,src3,src4,src5,src6,src7}", { dir1: "{boot,samples}" }]
            ]
          },
          ...eslint.boundaries.elementTypes.createRules(
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
          ...eslint.boundaries.elementTypes.createRules(
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
