module.exports = {
  rules: {
    "@skylib/consistent-import/quasar": [
      "warn",
      {
        sources: [
          {
            _id: "test-utils",
            altLocalNames: ["quasarTestUtils"],
            source: "@skylib/quasar-extension/src/test-utils",
            type: "wildcard"
          }
        ]
      }
    ],
    "@skylib/custom/quasar/check-Props-extends": [
      "warn",
      {
        message: "Incorrect extends",
        selector: [
          "TSInterfaceDeclaration[id.name=Props][extends.length=1] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=OwnProps][name!=ParentProps][name!=PluginProps]",
          "TSInterfaceDeclaration[id.name=Props][extends.length=2] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentProps][name!=PluginProps]",
          "TSInterfaceDeclaration[id.name=Props][extends.length=2] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=OwnProps][name!=PluginProps]",
          "TSInterfaceDeclaration[id.name=Props][extends.length=3] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentProps]",
          "TSInterfaceDeclaration[id.name=Props][extends.length=3] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=PluginProps]",
          "TSInterfaceDeclaration[id.name=Props][extends.length=3] > TSInterfaceHeritage.extends:nth-child(3) > Identifier.expression[name!=OwnProps]",
          "TSInterfaceDeclaration[id.name=Props][extends.length>3]"
        ]
      }
    ],
    "@skylib/custom/quasar/check-Slots-extends": [
      "warn",
      {
        message: 'Extend "OwnSlots" or "PluginSlots" interface',
        selector: [
          "TSInterfaceDeclaration[id.name=Slots][extends.length=1] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=OwnSlots][name!=ParentSlots][name!=PluginSlots]",
          "TSInterfaceDeclaration[id.name=Slots][extends.length=2] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentSlots][name!=PluginSlots]",
          "TSInterfaceDeclaration[id.name=Slots][extends.length=2] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=OwnSlots][name!=PluginSlots]",
          "TSInterfaceDeclaration[id.name=Slots][extends.length=3] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentSlots]",
          "TSInterfaceDeclaration[id.name=Slots][extends.length=3] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=PluginSlots]",
          "TSInterfaceDeclaration[id.name=Slots][extends.length=3] > TSInterfaceHeritage.extends:nth-child(3) > Identifier.expression[name!=OwnSlots]",
          "TSInterfaceDeclaration[id.name=Slots][extends.length>3]"
        ]
      }
    ],
    "@skylib/custom/quasar/check-generic-component-name": [
      "warn",
      {
        message: "Invalid generic component name",
        selector:
          "CallExpression[callee.name=defineComponent] > ObjectExpression > Property[key.name=components] > ObjectExpression > Property[value.callee.object.name=generic] > Literal.key[value=/^(?:(?!__).)+$/u]"
      }
    ],
    "@skylib/custom/quasar/no-OwnProps-extends": [
      "warn",
      {
        message: 'Do not extend "OwnProps" interface',
        selector:
          "TSInterfaceDeclaration[id.name=OwnProps] > TSInterfaceHeritage.extends"
      }
    ],
    "@skylib/custom/quasar/no-OwnSlots-extends": [
      "warn",
      {
        message: 'Do not extend "OwnSlots" interface',
        selector:
          "TSInterfaceDeclaration[id.name=OwnSlots] > TSInterfaceHeritage.extends"
      }
    ],
    "@skylib/custom/quasar/no-global-icons": [
      "warn",
      {
        filesToLint: ["*.vue"],
        message: "No global icons",
        selector:
          "ImportDeclaration[source.value=@skylib/facades] > ImportSpecifier[imported.name=icons]"
      }
    ],
    "@skylib/custom/quasar/no-global-lang": [
      "warn",
      {
        filesToLint: ["*.vue"],
        message: "No global lang",
        selector:
          "ImportDeclaration[source.value=@skylib/facades] > ImportSpecifier[imported.name=lang]"
      }
    ],
    "@skylib/custom/quasar/no-ref-type-parameter": [
      "warn",
      {
        message: "Unnecessary type parameter",
        selector:
          "CallExpression[callee.name=ref][arguments.0.type=Literal] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword).params"
      }
    ],
    "@skylib/custom/quasar/no-ref-undefined": [
      "warn",
      {
        message: 'Unnecessary "undefined"',
        selector: [
          "CallExpression[callee.name=ref] > Identifier.arguments[name=undefined]",
          "CallExpression[callee.name=ref][arguments.length=0] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > Identifier.typeName[name=/U$/u]",
          "CallExpression[callee.name=ref][arguments.length=0] > TSTypeParameterInstantiation.typeParameters > TSUnionType.params > TSUndefinedKeyword.types"
        ]
      }
    ],
    "@skylib/custom/quasar/prefer-OwnProps": [
      "warn",
      {
        message: 'Use "OwnProps" interface',
        selector:
          "TSInterfaceDeclaration[id.name=/^(?:Props|ParentProps)$/u] > TSInterfaceBody.body > .body"
      }
    ],
    "@skylib/custom/quasar/prefer-OwnSlots": [
      "warn",
      {
        message: 'Use "OwnSlots" interface',
        selector:
          "TSInterfaceDeclaration[id.name=/^(?:Slots|ParentSlots)$/u] > TSInterfaceBody.body > .body"
      }
    ],
    "@skylib/custom/quasar/prefer-findQuasarComponent": [
      "warn",
      {
        message: 'Use "findQuasarComponent" function',
        selector:
          "CallExpression[arguments.0.name=/^Q/u] > MemberExpression.callee[object.name=wrapper][property.name=findComponent]"
      }
    ],
    "@skylib/custom/quasar/prefer-interface": [
      "warn",
      {
        message: "Use interface",
        selector:
          "TSTypeAliasDeclaration > Identifier.id[name=/^(?:Props|Slots)$/u]"
      }
    ],
    "@skylib/custom/quasar/prefer-testComponents": [
      "warn",
      {
        message: 'Prefer "testComponents"',
        selector:
          "CallExpression[callee.object.name=wrapper][callee.property.name=findComponent] > MemberExpression.arguments:first-child > Identifier.object[name=components]"
      }
    ],
    "@skylib/custom/quasar/prefer-validateEmit-OwnProps": [
      "warn",
      {
        message: 'Use "OwnProps" interface',
        selector:
          "CallExpression[callee.name=validateEmit] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > TSQualifiedName.typeName > Identifier.right[name=Props]"
      }
    ],
    "@skylib/custom/quasar/prefer-validateProps-OwnProps": [
      "warn",
      {
        message: 'Use "OwnProps" interface',
        selector:
          "CallExpression[callee.name=validateProps] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > TSQualifiedName.typeName > Identifier.right[name=Props]"
      }
    ],
    "@skylib/custom/quasar/require-computed-type-parameter": [
      "warn",
      {
        message: "Unnecessary type parameter",
        selector:
          "CallExpression[callee.name=computed] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword)"
      }
    ],
    "@skylib/custom/quasar/require-prop-type-parameter": [
      "warn",
      {
        message: "Missing type parameter",
        selector: [
          "CallExpression[arguments.length=0][typeParameters=undefined] > Identifier.callee[name=prop]",
          "CallExpression[arguments.length=1][typeParameters=undefined] > MemberExpression.callee[object.name=prop][property.name=default]",
          "CallExpression[arguments.length=0][typeParameters=undefined] > MemberExpression.callee[object.name=prop][property.name=required]"
        ]
      }
    ],
    "@skylib/custom/quasar/require-ref-type-parameter": [
      "warn",
      {
        message: "Missing type parameter",
        selector:
          "CallExpression[typeParameters=undefined][arguments.length=0] > Identifier.callee[name=ref]"
      }
    ],
    "@skylib/custom/quasar/require-validateEmit-type-parameter": [
      "warn",
      {
        message: "Missing type parameter",
        selector:
          "CallExpression[typeParameters=undefined] > Identifier.callee[name=validateEmit]"
      }
    ],
    "@skylib/custom/quasar/require-validateExpose-type-parameter": [
      "warn",
      {
        message: "Missing type parameter",
        selector:
          "CallExpression[typeParameters=undefined] > Identifier.callee[name=validateExpose]"
      }
    ],
    "@skylib/custom/quasar/require-validateProps-type-parameter": [
      "warn",
      {
        message: "Missing type parameter",
        selector:
          "CallExpression[typeParameters=undefined] > Identifier.callee[name=validateProps]"
      }
    ],
    "@skylib/custom/quasar/vue-no-mixed-classes": [
      "warn",
      {
        message: "Do not mix module and static classes",
        selector:
          "VExpressionContainer > TemplateLiteral > MemberExpression > Identifier[name=$style]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-label-prop": [
      "warn",
      {
        message: 'Prefer "label" prop',
        selector: [
          "VElement[name=/^(?:m-button|m-form-button|m-icon-button|q-btn)$/u][children.length=1] > VExpressionContainer.children",
          "VElement[name=/^(?:m-button|m-form-button|m-icon-button|q-btn)$/u][children.length=3][children.0.value=/^\\s+$/u][children.2.value=/^\\s+$/u] > VExpressionContainer.children"
        ]
      }
    ],
    "@skylib/custom/quasar/vue-prefer-lang-var": [
      "warn",
      {
        message: "Use lang variable",
        selector:
          "VElement[name=/^m-/u] > VStartTag > VAttribute > VIdentifier.key[name=/^(?:alt|aria-label|aria-placeholder|aria-roledescription|aria-valuetext|caption|confirmation|label|placeholder|title|tooltip|validation-label)$/u]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-btn": [
      "warn",
      { message: 'Prefer "m-btn" component', selector: "VElement[name=q-btn]" }
    ],
    "@skylib/custom/quasar/vue-prefer-m-card": [
      "warn",
      {
        message: 'Prefer "m-card" component',
        selector: "VElement[name=q-card]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-card-actions": [
      "warn",
      {
        message: 'Prefer "m-card-actions" component',
        selector: "VElement[name=q-card-actions]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-card-section": [
      "warn",
      {
        message: 'Prefer "m-card-section" component',
        selector: "VElement[name=q-card-section]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-expansion-item": [
      "warn",
      {
        message: 'Prefer "m-expansion-item" component',
        selector: "VElement[name=q-expansion-item]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-field": [
      "warn",
      {
        message: 'Prefer "m-field" component',
        selector: "VElement[name=q-field]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-form": [
      "warn",
      {
        message: 'Prefer "m-form" component',
        selector: "VElement[name=q-form]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-input": [
      "warn",
      {
        message: 'Prefer "m-input" component',
        selector: "VElement[name=q-input]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-item": [
      "warn",
      {
        message: 'Prefer "m-item" component',
        selector: "VElement[name=q-item]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-knob": [
      "warn",
      {
        message: 'Prefer "m-knob" component',
        selector: "VElement[name=q-knob]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-menu": [
      "warn",
      {
        message: 'Prefer "m-menu" component',
        selector: "VElement[name=q-menu]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-option-group": [
      "warn",
      {
        message: 'Prefer "m-option-group" component',
        selector: "VElement[name=q-option-group]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-popup-proxy": [
      "warn",
      {
        message: 'Prefer "m-popup-proxy" component',
        selector: "VElement[name=q-popup-proxy]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-select": [
      "warn",
      {
        message: 'Prefer "m-select" component',
        selector: "VElement[name=q-select]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-toggle": [
      "warn",
      {
        message: 'Prefer "m-toggle" component',
        selector: "VElement[name=q-toggle]"
      }
    ],
    "@skylib/custom/quasar/vue-prefer-m-tooltip": [
      "warn",
      {
        message: 'Prefer "m-tooltip" component',
        selector: "VElement[name=q-tooltip]"
      }
    ],
    "@skylib/custom/quasar/vue-sort-v-bind": [
      "warn",
      {
        message: 'Move "v-bind" directive to the end',
        selector:
          "VElement[name=slot] > VStartTag.startTag > VAttribute.attributes:not(:last-child) > VDirectiveKey.key[argument=null] > VIdentifier.name[name=bind]"
      }
    ],
    "@skylib/optional-property-style": [
      "warn",
      {
        classes: "undefined",
        interfaces: "optional",
        overrides: [
          {
            _id: "props",
            patterns: ["Props$"],
            style: "combined",
            target: "interfaces"
          },
          {
            _id: "props-emit",
            patterns: ["Props$"],
            propertyPatterns: ["^on[A-Z]"],
            style: "optional",
            target: "interfaces"
          }
        ]
      }
    ],
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
    ]
  }
};
