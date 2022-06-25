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
            filesToLint: ["*.vue"],
            message: "No global icons",
            selector:
              "ImportDeclaration[source.value=@skylib/facades] > ImportSpecifier[imported.name=icons]",
            subOptionsId: "no-global-icons"
          },
          {
            filesToLint: ["*.vue"],
            message: "No global lang",
            selector:
              "ImportDeclaration[source.value=@skylib/facades] > ImportSpecifier[imported.name=lang]",
            subOptionsId: "no-global-lang"
          },
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
            ],
            subOptionsId: "check-Props-extends"
          },
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
            ],
            subOptionsId: "check-Slots-extends"
          },
          {
            message: "Invalid generic component name",
            selector:
              "CallExpression[callee.name=defineComponent] > ObjectExpression.arguments:first-child > Property.properties[key.name=components] > ObjectExpression.value > Property.properties[value.callee.object.name=generic] > Literal.key[value=/^(?:(?!__).)+$/u]",
            subOptionsId: "check-generic-component-name"
          },
          {
            message: 'Use "OwnProps" interface',
            selector:
              "CallExpression[callee.name=validateEmit] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > TSQualifiedName.typeName > Identifier.right[name=Props]",
            subOptionsId: "prefer-validateEmit-OwnProps"
          },
          {
            message: 'Use "OwnProps" interface',
            selector:
              "CallExpression[callee.name=validateProps] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > TSQualifiedName.typeName > Identifier.right[name=Props]",
            subOptionsId: "prefer-validateProps-OwnProps"
          },
          {
            message: 'Use "findQuasarComponent" function',
            selector:
              "CallExpression[arguments.0.name=/^Q/u] > MemberExpression.callee[object.name=wrapper][property.name=findComponent]",
            subOptionsId: "prefer-findQuasarComponent"
          },
          {
            message: "Unnecessary type parameter",
            selector:
              "CallExpression[callee.name=computed] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword)",
            subOptionsId: "require-computed-type-parameter"
          },
          {
            message: 'Unnecessary "undefined"',
            selector: [
              "CallExpression[callee.name=ref] > Identifier.arguments[name=undefined]",
              "CallExpression[callee.name=ref][arguments.length=0] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > Identifier.typeName[name=/U$/u]",
              "CallExpression[callee.name=ref][arguments.length=0] > TSTypeParameterInstantiation.typeParameters > TSUnionType.params > TSUndefinedKeyword.types"
            ],
            subOptionsId: "no-ref-undefined"
          },
          {
            message: "Unnecessary type parameter",
            selector:
              "CallExpression[callee.name=ref][arguments.0.type=Literal] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword).params",
            subOptionsId: "no-ref-type-parameter"
          },
          {
            message: 'Prefer "testComponents"',
            selector:
              "CallExpression[callee.object.name=wrapper][callee.property.name=findComponent] > MemberExpression.arguments:first-child > Identifier.object[name=components]",
            subOptionsId: "prefer-testComponents"
          },
          {
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined] > Identifier.callee[name=validateEmit]",
            subOptionsId: "require-validateEmit-type-parameter"
          },
          {
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined] > Identifier.callee[name=validateExpose]",
            subOptionsId: "require-validateExpose-type-parameter"
          },
          {
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined] > Identifier.callee[name=validateProps]",
            subOptionsId: "require-validateProps-type-parameter"
          },
          {
            message: "Missing type parameter",
            selector: [
              "CallExpression[arguments.length=0][typeParameters=undefined] > Identifier.callee[name=prop]",
              "CallExpression[arguments.length=1][typeParameters=undefined] > MemberExpression.callee[object.name=prop][property.name=default]",
              "CallExpression[arguments.length=0][typeParameters=undefined] > MemberExpression.callee[object.name=prop][property.name=required]"
            ],
            subOptionsId: "require-prop-type-parameter"
          },
          {
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined][arguments.length=0] > Identifier.callee[name=ref]",
            subOptionsId: "require-ref-type-parameter"
          },
          {
            message: 'Use "OwnProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=/^(?:Props|ParentProps)$/u] > TSInterfaceBody.body > .body",
            subOptionsId: "prefer-OwnProps"
          },
          {
            message: 'Use "OwnSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=/^(?:Slots|ParentSlots)$/u] > TSInterfaceBody.body > .body",
            subOptionsId: "prefer-OwnSlots"
          },
          {
            message: 'Do not extend "OwnProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=OwnProps] > TSInterfaceHeritage.extends",
            subOptionsId: "no-OwnProps-extends"
          },
          {
            message: 'Do not extend "OwnSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=OwnSlots] > TSInterfaceHeritage.extends",
            subOptionsId: "no-OwnSlots-extends"
          },
          {
            message: "Use interface",
            selector:
              "TSTypeAliasDeclaration > Identifier.id[name=/^(?:Props|Slots)$/u]",
            subOptionsId: "prefer-interface"
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
    ],
    "vue/no-restricted-syntax": [
      "warn",
      { message: 'Prefer "m-btn" component', selector: "VElement[name=q-btn]" },
      {
        message: 'Prefer "m-card" component',
        selector: "VElement[name=q-card]"
      },
      {
        message: 'Prefer "m-card-actions" component',
        selector: "VElement[name=q-card-actions]"
      },
      {
        message: 'Prefer "m-card-section" component',
        selector: "VElement[name=q-card-section]"
      },
      {
        message: 'Prefer "m-expansion-item" component',
        selector: "VElement[name=q-expansion-item]"
      },
      {
        message: 'Prefer "m-field" component',
        selector: "VElement[name=q-field]"
      },
      {
        message: 'Prefer "m-form" component',
        selector: "VElement[name=q-form]"
      },
      {
        message: 'Prefer "m-input" component',
        selector: "VElement[name=q-input]"
      },
      {
        message: 'Prefer "m-item" component',
        selector: "VElement[name=q-item]"
      },
      {
        message: 'Prefer "m-knob" component',
        selector: "VElement[name=q-knob]"
      },
      {
        message: 'Prefer "m-menu" component',
        selector: "VElement[name=q-menu]"
      },
      {
        message: 'Prefer "m-option-group" component',
        selector: "VElement[name=q-option-group]"
      },
      {
        message: 'Prefer "m-popup-proxy" component',
        selector: "VElement[name=q-popup-proxy]"
      },
      {
        message: 'Prefer "m-select" component',
        selector: "VElement[name=q-select]"
      },
      {
        message: 'Prefer "m-toggle" component',
        selector: "VElement[name=q-toggle]"
      },
      {
        message: 'Prefer "m-zzzzz" component',
        selector: "VElement[name=q-zzzzz]"
      },
      {
        message: 'Prefer "m-tooltip" component',
        selector: "VElement[name=q-tooltip]"
      },
      {
        message: 'Prefer "label" prop',
        selector:
          "VElement[name=/^(?:m-button|m-form-button|m-icon-button|q-btn)$/u][children.length=1] > VExpressionContainer.children"
      },
      {
        message: 'Prefer "label" prop',
        selector:
          "VElement[name=/^(?:m-button|m-form-button|m-icon-button|q-btn)$/u][children.length=3][children.0.value=/^\\s+$/u][children.2.value=/^\\s+$/u] > VExpressionContainer.children"
      },
      {
        message: 'Move "v-bind" directive to the end',
        selector:
          "VElement[name=slot] > VStartTag.startTag > VAttribute.attributes:not(:last-child) > VDirectiveKey.key[argument=null] > VIdentifier.name[name=bind]"
      },
      {
        message: "Use lang variable",
        selector:
          "VElement[name=/^m-/u] > VStartTag > VAttribute > VIdentifier.key[name=/^(?:alt|aria-label|aria-placeholder|aria-roledescription|aria-valuetext|caption|confirmation|label|placeholder|title|tooltip|validation-label)$/u]"
      },
      {
        message: "Unexpected empty line",
        selector: "VElement[name=template] VText[value=/^\n\n/u]"
      }
    ]
  }
};
