const { eslint } = require("@skylib/config");

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
