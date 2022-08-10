const { eslint } = require("@skylib/config/api");

const consistentImport = eslint.rules["@skylib/consistent-import"];

module.exports = {
  rules: {
    "@skylib/consistent-import": [
      "warn",
      {
        sources: [
          ...consistentImport.sources,
          {
            _id: "app",
            localName: "app",
            source: "@skylib/quasar-extension/src/application",
            wildcard: true
          },
          {
            _id: "app/lang",
            source: "@skylib/quasar-extension/src/application/lang",
            wildcard: true
          },
          {
            _id: "app/lang",
            source: "@skylib/quasar-extension/src/application/lang",
            wildcard: true
          },
          {
            _id: "components/api/index.directives",
            localName: "directives",
            source:
              "@skylib/quasar-extension/src/components/api/index.directives",
            wildcard: true
          },
          {
            _id: "components/api/index.plugins",
            localName: "plugins",
            source: "@skylib/quasar-extension/src/components/api/index.plugins",
            wildcard: true
          },
          {
            _id: "components/api/injections",
            source: "@skylib/quasar-extension/src/components/api/injections",
            wildcard: true
          },
          {
            _id: "components/index.components",
            source: "@skylib/quasar-extension/src/components/index.components",
            wildcard: true
          },
          {
            _id: "components/index.extras",
            localName: "extras",
            source: "@skylib/quasar-extension/src/components/index.extras",
            wildcard: true
          },
          {
            _id: "components/index.generic",
            localName: "generic",
            source: "@skylib/quasar-extension/src/components/index.generic",
            wildcard: true
          },
          {
            _id: "components/index.test-components",
            localName: "testComponents",
            source:
              "@skylib/quasar-extension/src/components/index.test-components",
            wildcard: true
          },
          {
            _id: "facade-implementations",
            localName: "implementations",
            source: "@skylib/quasar-extension/src/facade-implementations",
            wildcard: true
          },
          {
            _id: "facade-implementations/reactive-storage",
            source:
              "@skylib/quasar-extension/src/facade-implementations/reactive-storage",
            wildcard: true
          },
          {
            _id: "samples/index.components",
            localName: "components",
            source: "@skylib/quasar-extension/src/samples/index.components",
            wildcard: true
          },
          {
            _id: "test-utils/mocks",
            source: "@skylib/quasar-extension/src/test-utils/mocks",
            wildcard: true
          }
        ]
      }
    ],
    "@skylib/no-sibling-import": [
      "warn",
      {
        folders: [
          {
            filesToLint: ["./*"],
            levels: [["./jest.config"], ["./jest.config.fast"]]
          },
          {
            filesToLint: ["./src/components/*"],
            levels: [
              ["./Tooltip.internal"],
              [
                "./Field",
                "./Field.extras",
                "./Form",
                "./Form.extras",
                "./OptionGroup",
                "./OptionGroup.extras",
                "./Select",
                "./Select.extras",
                "./Switchable",
                "./Switchable.extras",
                "./Tooltip",
                "./Tooltip.extras"
              ],
              ["./Field.generic", "./OptionGroup.generic", "./Select.generic"],
              [
                "./FormActions",
                "./FormActions.extras",
                "./FormSection",
                "./FormSection.extras",
                "./Input",
                "./Input.extras",
                "./Item",
                "./Item.extras",
                "./Menu",
                "./Menu.extras",
                "./NumericInput",
                "./NumericInput.extras",
                "./PageSection",
                "./PageSection.extras",
                "./Section",
                "./Section.extras",
                "./Subsection",
                "./Subsection.extras"
              ],
              [
                "./BaseButton",
                "./BaseButton.extras",
                "./Group",
                "./Group.extras",
                "./MenuItem",
                "./MenuItem.extras",
                "./Sortable",
                "./Sortable.extras"
              ],
              ["./Group.generic", "./Sortable.generic"],
              ["./Droppable", "./Droppable.extras"],
              ["./Droppable.generic"],
              ["./Table", "./Table.extras"],
              ["./Table.generic"],
              [
                "./Button",
                "./Button.extras",
                "./FormButton",
                "./FormButton.extras",
                "./IconButton",
                "./IconButton.extras"
              ],
              [
                "./DatetimePicker",
                "./DatetimePicker.extras",
                "./IconPicker",
                "./IconPicker.extras",
                "./LanguagePicker",
                "./LanguagePicker.extras",
                "./Tab",
                "./Tab.extras",
                "./TabPanel",
                "./TabPanel.extras",
                "./TabPanels",
                "./TabPanels.extras",
                "./Tabs",
                "./Tabs.extras",
                "./TimeInput",
                "./TimeInput.extras"
              ],
              [
                "./Tab.generic",
                "./TabPanel.generic",
                "./TabPanels.generic",
                "./Tabs.generic"
              ]
            ]
          },
          {
            filesToLint: ["./src/components/api/*"],
            levels: [
              ["./misc"],
              [
                "./async-click",
                "./confirmed-click",
                "./direction",
                "./injections",
                "./lang-props",
                "./validation"
              ]
            ]
          }
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
        "@skylib/vue/component-name": [
          "warn",
          {
            format: "kebab-case",
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
        "@skylib/vue/component-name": [
          "warn",
          {
            format: "kebab-case",
            prefix: "sample-",
            selector:
              "CallExpression[callee.name=defineComponent] > ObjectExpression > Property[key.name=name] > Literal.value"
          }
        ]
      }
    }
  ]
};
