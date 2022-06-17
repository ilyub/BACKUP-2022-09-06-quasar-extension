/* eslint-disable no-template-curly-in-string -- Ok */

module.exports = {
  extends: [
    require.resolve("@skylib/config/src/eslintrc"),
    "./configs/eslintrc.js"
  ],
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
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      { allowExpressions: true }
    ],
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    "boundaries/element-types": [
      "warn",
      {
        default: "disallow",
        rules: [
          {
            allow: [
              [
                "{src1,src2,src3,src4,src5,src6,src7}",
                { filename: "${filename}" }
              ]
            ],
            from: "{src1,src2,src3,src4,src5,src6,src7}"
          },
          {
            allow: "{src1,src2,src3,src4,src5,src6,src7}",
            from: [
              "mocks",
              "tests",
              ["{src1,src2,src3,src4,src5,src6,src7}", { filename: "index" }],
              [
                "{src2,src3,src4,src5,src6,src7}",
                { dir1: "{boot,samples,test-utils}" }
              ]
            ]
          },
          { allow: ["src2"], from: ["src1"] },
          { allow: ["src3"], from: ["src2"] },
          { allow: ["src4"], from: ["src3"] },
          { allow: ["src5"], from: ["src4"] },
          { allow: ["src6"], from: ["src5"] },
          { allow: ["src7"], from: ["src6"] },
          {
            allow: [
              ["src2", { dir1: "components", filename: "Form" }],
              ["src2", { dir1: "components", filename: "Tooltip" }]
            ],
            from: [
              ["src2", { dir1: "components", filename: "BaseButton" }],
              ["src2", { dir1: "components", filename: "Menu" }],
              ["src2", { dir1: "components", filename: "Sortable" }]
            ]
          },
          {
            allow: [
              ["src2", { dir1: "components", filename: "BaseButton" }],
              ["src2", { dir1: "components", filename: "Field" }],
              ["src2", { dir1: "components", filename: "Item" }],
              ["src2", { dir1: "components", filename: "Menu" }],
              ["src2", { dir1: "components", filename: "Sortable" }],
              ["src2", { dir1: "components", filename: "Switchable" }]
            ],
            from: [
              ["src2", { dir1: "components", filename: "Button" }],
              ["src2", { dir1: "components", filename: "DatetimePicker" }],
              ["src2", { dir1: "components", filename: "Droppable" }],
              ["src2", { dir1: "components", filename: "FormActions" }],
              ["src2", { dir1: "components", filename: "FormButton" }],
              ["src2", { dir1: "components", filename: "IconButton" }],
              ["src2", { dir1: "components", filename: "FormSection" }],
              ["src2", { dir1: "components", filename: "Input" }],
              ["src2", { dir1: "components", filename: "MenuItem" }],
              ["src2", { dir1: "components", filename: "NumericInput" }],
              ["src2", { dir1: "components", filename: "PageSection" }],
              ["src2", { dir1: "components", filename: "Section" }],
              ["src2", { dir1: "components", filename: "Subsection" }],
              ["src2", { dir1: "components", filename: "Table" }]
            ]
          },
          {
            allow: [
              ["src2", { dir1: "components", filename: "IconButton" }],
              ["src2", { dir1: "components", filename: "NumericInput" }],
              ["src2", { dir1: "components", filename: "PageSection" }],
              ["src2", { dir1: "components", filename: "Subsection" }],
              ["src2", { dir1: "components", filename: "Section" }]
            ],
            from: [
              ["src2", { dir1: "components", filename: "Group" }],
              ["src2", { dir1: "components", filename: "IconPicker" }],
              ["src2", { dir1: "components", filename: "LanguagePicker" }],
              ["src2", { dir1: "components", filename: "TimeInput" }]
            ]
          },
          {
            allow: [
              [
                "src3",
                {
                  dir1: "components",
                  dir2: "api",
                  filename: "misc"
                }
              ]
            ],
            from: [["src3", { dir1: "components", dir2: "api" }]]
          }
        ]
      }
    ]
  },
  settings: {
    "boundaries/elements": [
      // eslint-disable-next-line no-restricted-syntax -- Postponed
      ...(() => {
        const capture = [];

        let dirs = "";

        const part = "([a-zA-Z0-9-]+)";

        const result = [];

        for (let i = 1; i <= 7; i++) {
          result.push(
            {
              capture: [...capture, "filename", "suffix", "ext"],
              mode: "file",
              pattern: [`./src/${dirs}${part}().${part}`],
              type: `src${i}`
            },
            {
              capture: [...capture, "filename", "suffix", "ext"],
              mode: "file",
              pattern: [`./src/${dirs}${part}.${part}.${part}`],
              type: `src${i}`
            }
          );

          capture.push(`dir${i}`);

          dirs = `${dirs}*/`;
        }

        return result;
      })(),
      {
        mode: "file",
        pattern: "./configs/**",
        type: "configs"
      },
      {
        mode: "file",
        pattern: "./__mocks__/**",
        type: "mocks"
      },
      {
        mode: "file",
        pattern: "./tests/**",
        type: "tests"
      }
    ]
  }
};
