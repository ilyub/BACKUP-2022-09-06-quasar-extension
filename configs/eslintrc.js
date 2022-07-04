module.exports = {
  rules: {
    "@skylib/quasar-extension/consistent-import": [
      "warn",
      {
        sources: [
          {
            altLocalNames: ["quasarTestUtils"],
            sourcePattern: "@skylib/quasar-extension/src/test-utils",
            type: "wildcard"
          }
        ]
      }
    ],
    "@skylib/quasar-extension/no-restricted-syntax": [
      "warn",
      {
        rules: [
          {
            _id: "vue-prefer-m-btn",
            message: 'Prefer "m-btn" component',
            selector: "VElement[name=q-btn]"
          },
          {
            _id: "vue-prefer-m-card",
            message: 'Prefer "m-card" component',
            selector: "VElement[name=q-card]"
          },
          {
            _id: "vue-prefer-m-card-actions",
            message: 'Prefer "m-card-actions" component',
            selector: "VElement[name=q-card-actions]"
          },
          {
            _id: "vue-prefer-m-card-section",
            message: 'Prefer "m-card-section" component',
            selector: "VElement[name=q-card-section]"
          },
          {
            _id: "vue-prefer-m-expansion-item",
            message: 'Prefer "m-expansion-item" component',
            selector: "VElement[name=q-expansion-item]"
          },
          {
            _id: "vue-prefer-m-field",
            message: 'Prefer "m-field" component',
            selector: "VElement[name=q-field]"
          },
          {
            _id: "vue-prefer-m-form",
            message: 'Prefer "m-form" component',
            selector: "VElement[name=q-form]"
          },
          {
            _id: "vue-prefer-m-input",
            message: 'Prefer "m-input" component',
            selector: "VElement[name=q-input]"
          },
          {
            _id: "vue-prefer-m-item",
            message: 'Prefer "m-item" component',
            selector: "VElement[name=q-item]"
          },
          {
            _id: "vue-prefer-m-knob",
            message: 'Prefer "m-knob" component',
            selector: "VElement[name=q-knob]"
          },
          {
            _id: "vue-prefer-m-menu",
            message: 'Prefer "m-menu" component',
            selector: "VElement[name=q-menu]"
          },
          {
            _id: "vue-prefer-m-option-group",
            message: 'Prefer "m-option-group" component',
            selector: "VElement[name=q-option-group]"
          },
          {
            _id: "vue-prefer-m-popup-proxy",
            message: 'Prefer "m-popup-proxy" component',
            selector: "VElement[name=q-popup-proxy]"
          },
          {
            _id: "vue-prefer-m-select",
            message: 'Prefer "m-select" component',
            selector: "VElement[name=q-select]"
          },
          {
            _id: "vue-prefer-m-toggle",
            message: 'Prefer "m-toggle" component',
            selector: "VElement[name=q-toggle]"
          },
          {
            _id: "vue-prefer-m-tooltip",
            message: 'Prefer "m-tooltip" component',
            selector: "VElement[name=q-tooltip]"
          },
          {
            _id: "vue-prefer-lang-var",
            message: 'Prefer "label" prop',
            selector: [
              "VElement[name=/^(?:m-button|m-form-button|m-icon-button|q-btn)$/u][children.length=1] > VExpressionContainer.children",
              "VElement[name=/^(?:m-button|m-form-button|m-icon-button|q-btn)$/u][children.length=3][children.0.value=/^\\s+$/u][children.2.value=/^\\s+$/u] > VExpressionContainer.children"
            ]
          },
          {
            _id: "vue-sort-v-bind",
            message: 'Move "v-bind" directive to the end',
            selector:
              "VElement[name=slot] > VStartTag.startTag > VAttribute.attributes:not(:last-child) > VDirectiveKey.key[argument=null] > VIdentifier.name[name=bind]"
          },
          {
            _id: "vue-prefer-lang-var",
            message: "Use lang variable",
            selector:
              "VElement[name=/^m-/u] > VStartTag > VAttribute > VIdentifier.key[name=/^(?:alt|aria-label|aria-placeholder|aria-roledescription|aria-valuetext|caption|confirmation|label|placeholder|title|tooltip|validation-label)$/u]"
          },
          {
            _id: "no-global-icons",
            filesToLint: ["*.vue"],
            message: "No global icons",
            selector:
              "ImportDeclaration[source.value=@skylib/facades] > ImportSpecifier[imported.name=icons]"
          },
          {
            _id: "no-global-lang",
            filesToLint: ["*.vue"],
            message: "No global lang",
            selector:
              "ImportDeclaration[source.value=@skylib/facades] > ImportSpecifier[imported.name=lang]"
          },
          {
            _id: "check-Props-extends",
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
          },
          {
            _id: "check-Slots-extends",
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
          },
          {
            _id: "check-generic-component-name",
            message: "Invalid generic component name",
            selector:
              "CallExpression[callee.name=defineComponent] > ObjectExpression > Property[key.name=components] > ObjectExpression > Property[value.callee.object.name=generic] > Literal.key[value=/^(?:(?!__).)+$/u]"
          },
          {
            _id: "prefer-validateEmit-OwnProps",
            message: 'Use "OwnProps" interface',
            selector:
              "CallExpression[callee.name=validateEmit] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > TSQualifiedName.typeName > Identifier.right[name=Props]"
          },
          {
            _id: "prefer-validateProps-OwnProps",
            message: 'Use "OwnProps" interface',
            selector:
              "CallExpression[callee.name=validateProps] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > TSQualifiedName.typeName > Identifier.right[name=Props]"
          },
          {
            _id: "prefer-findQuasarComponent",
            message: 'Use "findQuasarComponent" function',
            selector:
              "CallExpression[arguments.0.name=/^Q/u] > MemberExpression.callee[object.name=wrapper][property.name=findComponent]"
          },
          {
            _id: "require-computed-type-parameter",
            message: "Unnecessary type parameter",
            selector:
              "CallExpression[callee.name=computed] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword)"
          },
          {
            _id: "no-ref-undefined",
            message: 'Unnecessary "undefined"',
            selector: [
              "CallExpression[callee.name=ref] > Identifier.arguments[name=undefined]",
              "CallExpression[callee.name=ref][arguments.length=0] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > Identifier.typeName[name=/U$/u]",
              "CallExpression[callee.name=ref][arguments.length=0] > TSTypeParameterInstantiation.typeParameters > TSUnionType.params > TSUndefinedKeyword.types"
            ]
          },
          {
            _id: "no-ref-type-parameter",
            message: "Unnecessary type parameter",
            selector:
              "CallExpression[callee.name=ref][arguments.0.type=Literal] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword).params"
          },
          {
            _id: "prefer-testComponents",
            message: 'Prefer "testComponents"',
            selector:
              "CallExpression[callee.object.name=wrapper][callee.property.name=findComponent] > MemberExpression.arguments:first-child > Identifier.object[name=components]"
          },
          {
            _id: "require-validateEmit-type-parameter",
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined] > Identifier.callee[name=validateEmit]"
          },
          {
            _id: "require-validateExpose-type-parameter",
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined] > Identifier.callee[name=validateExpose]"
          },
          {
            _id: "require-validateProps-type-parameter",
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined] > Identifier.callee[name=validateProps]"
          },
          {
            _id: "require-prop-type-parameter",
            message: "Missing type parameter",
            selector: [
              "CallExpression[arguments.length=0][typeParameters=undefined] > Identifier.callee[name=prop]",
              "CallExpression[arguments.length=1][typeParameters=undefined] > MemberExpression.callee[object.name=prop][property.name=default]",
              "CallExpression[arguments.length=0][typeParameters=undefined] > MemberExpression.callee[object.name=prop][property.name=required]"
            ]
          },
          {
            _id: "require-ref-type-parameter",
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined][arguments.length=0] > Identifier.callee[name=ref]"
          },
          {
            _id: "prefer-OwnProps",
            message: 'Use "OwnProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=/^(?:Props|ParentProps)$/u] > TSInterfaceBody.body > .body"
          },
          {
            _id: "prefer-OwnSlots",
            message: 'Use "OwnSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=/^(?:Slots|ParentSlots)$/u] > TSInterfaceBody.body > .body"
          },
          {
            _id: "no-OwnProps-extends",
            message: 'Do not extend "OwnProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=OwnProps] > TSInterfaceHeritage.extends"
          },
          {
            _id: "no-OwnSlots-extends",
            message: 'Do not extend "OwnSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=OwnSlots] > TSInterfaceHeritage.extends"
          },
          {
            _id: "prefer-interface",
            message: "Use interface",
            selector:
              "TSTypeAliasDeclaration > Identifier.id[name=/^(?:Props|Slots)$/u]"
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
