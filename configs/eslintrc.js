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
    "@skylib/quasar-extension/disallow-by-regexp": [
      "warn",
      {
        rules: [
          {
            contexts: ["code"],
            patterns: [
              /<!--\s*(fixme|todo|x{3})\s*-->/u.source,
              /<[^<>]+>(?![\n\r])\s[^\n\r<>]+<\/[^<>]+>/u.source,
              /<[^<>]+>[^\n\r<>]+(?![\n\r])\s<\/[^<>]+>/u.source
            ]
          },
          {
            contexts: ["code"],
            patterns: [/<q-btn(?![\w-])/u.source],
            subOptionsId: "BaseButton"
          },
          {
            contexts: ["code"],
            patterns: [/<q-card(?![\w-])/u.source],
            subOptionsId: "Card"
          },
          {
            contexts: ["code"],
            patterns: [/<q-card-actions(?![\w-])/u.source],
            subOptionsId: "CardActions"
          },
          {
            contexts: ["code"],
            patterns: [/<q-card-section(?![\w-])/u.source],
            subOptionsId: "CardSection"
          },
          {
            contexts: ["code"],
            patterns: [/<q-expansion-item(?![\w-])/u.source],
            subOptionsId: "ExpansionItem"
          },
          {
            contexts: ["code"],
            patterns: [/<q-field(?![\w-])/u.source],
            subOptionsId: "Field"
          },
          {
            contexts: ["code"],
            patterns: [/<q-form(?![\w-])/u.source],
            subOptionsId: "Form"
          },
          {
            contexts: ["code"],
            patterns: [/<q-input(?![\w-])/u.source],
            subOptionsId: "Input"
          },
          {
            contexts: ["code"],
            patterns: [/<q-item(?![\w-])/u.source],
            subOptionsId: "Item"
          },
          {
            contexts: ["code"],
            patterns: [/<q-knob(?![\w-])/u.source],
            subOptionsId: "Knob"
          },
          {
            contexts: ["code"],
            patterns: [/<q-menu(?![\w-])/u.source],
            subOptionsId: "Menu"
          },
          {
            contexts: ["code"],
            patterns: [/<q-option-group(?![\w-])/u.source],
            subOptionsId: "OptionGroup"
          },
          {
            contexts: ["code"],
            patterns: [/<q-popup-proxy(?![\w-])/u.source],
            subOptionsId: "PopupProxy"
          },
          {
            contexts: ["code"],
            patterns: [/<q-select(?![\w-])/u.source],
            subOptionsId: "Select"
          },
          {
            contexts: ["code"],
            patterns: [/<q-toggle(?![\w-])/u.source],
            subOptionsId: "Toggle"
          },
          {
            contexts: ["code"],
            patterns: [/<q-tooltip(?![\w-])/u.source],
            subOptionsId: "Tooltip"
          }
        ]
      }
    ],
    "@skylib/quasar-extension/no-restricted-syntax": [
      "warn",
      {
        rules: [
          {
            message: 'Use "findQuasarComponent" function',
            selector:
              "CallExpression[arguments.0.name=/^Q/u] > MemberExpression.callee[object.name=wrapper][property.name=findComponent]",
            subOptionsId: "prefer-findQuasarComponent"
          },
          {
            message: 'Use "OwnProps" interface',
            selector:
              "CallExpression[callee.name=/^(?:validateEmit|validateProps)$/u] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > TSQualifiedName.typeName > Identifier.right[name=Props]"
          },
          {
            message: "Unnecessary type parameter",
            selector:
              "CallExpression[callee.name=computed] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword)"
          },
          {
            message: "Invalid generic component name",
            selector:
              "CallExpression[callee.name=defineComponent] > ObjectExpression.arguments:first-child > Property.properties[key.name=components] > ObjectExpression.value > Property.properties[value.callee.object.name=generic] > Literal.key[value=/^(?:(?!__).)+$/u]"
          },
          {
            message: 'Unnecessary "undefined"',
            selector:
              "CallExpression[callee.name=ref] > Identifier.arguments[name=undefined]"
          },
          {
            message: 'Unnecessary "undefined"',
            selector:
              "CallExpression[callee.name=ref][arguments.length=0] > TSTypeParameterInstantiation.typeParameters > TSTypeReference.params > Identifier.typeName[name=/U$/u]"
          },
          {
            message: 'Unnecessary "undefined"',
            selector:
              "CallExpression[callee.name=ref][arguments.length=0] > TSTypeParameterInstantiation.typeParameters > TSUnionType.params > TSUndefinedKeyword.types"
          },
          {
            message: "Unnecessary type parameter",
            selector:
              "CallExpression[callee.name=ref][arguments.0.type=Literal] > TSTypeParameterInstantiation.typeParameters > :matches(TSBooleanKeyword, TSNumberKeyword, TSStringKeyword).params"
          },
          {
            message: 'Use "testComponents" instead',
            selector:
              "CallExpression[callee.object.name=wrapper][callee.property.name=findComponent] > MemberExpression.arguments:first-child > Identifier.object[name=components]"
          },
          {
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined] > Identifier.callee[name=/^(?:prop|validateEmit|validateExpose|validateProps)$/u]"
          },
          {
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined] > MemberExpression.callee[object.name=prop][property.name=/^(?:boolean|default|required)$/u]"
          },
          {
            message: "Missing type parameter",
            selector:
              "CallExpression[typeParameters=undefined][arguments.length=0] > Identifier.callee[name=ref]"
          },
          {
            message: 'Use "OwnProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=/^(?:Props|ParentProps)$/u] > TSInterfaceBody.body > .body"
          },
          {
            message: 'Use "OwnSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=/^(?:Slots|ParentSlots)$/u] > TSInterfaceBody.body > .body"
          },
          {
            message: 'Do not extend "OwnProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=OwnProps] > TSInterfaceHeritage.extends"
          },
          {
            message: 'Do not extend "OwnSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=OwnSlots] > TSInterfaceHeritage.extends"
          },
          {
            message: 'Extend "OwnProps" or "PluginProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Props][extends.length=1] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=OwnProps][name!=ParentProps][name!=PluginProps]"
          },
          {
            message: 'Extend "ParentProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Props][extends.length=2] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentProps][name!=PluginProps]"
          },
          {
            message: 'Extend "OwnProps" or "PluginProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Props][extends.length=2] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=OwnProps][name!=PluginProps]"
          },
          {
            message: 'Extend "ParentProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Props][extends.length=3] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentProps]"
          },
          {
            message: 'Extend "PluginProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Props][extends.length=3] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=PluginProps]"
          },
          {
            message: 'Extend "OwnProps" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Props][extends.length=3] > TSInterfaceHeritage.extends:nth-child(3) > Identifier.expression[name!=OwnProps]"
          },
          {
            message: "Too many extends",
            selector: "TSInterfaceDeclaration[id.name=Props][extends.length>3]"
          },
          {
            message: 'Extend "OwnSlots" or "PluginSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Slots][extends.length=1] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=OwnSlots][name!=ParentSlots][name!=PluginSlots]"
          },
          {
            message: 'Extend "ParentSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Slots][extends.length=2] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentSlots][name!=PluginSlots]"
          },
          {
            message: 'Extend "OwnSlots" or "PluginSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Slots][extends.length=2] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=OwnSlots][name!=PluginSlots]"
          },
          {
            message: 'Extend "ParentSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Slots][extends.length=3] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentSlots]"
          },
          {
            message: 'Extend "PluginSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Slots][extends.length=3] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=PluginSlots]"
          },
          {
            message: 'Extend "OwnSlots" interface',
            selector:
              "TSInterfaceDeclaration[id.name=Slots][extends.length=3] > TSInterfaceHeritage.extends:nth-child(3) > Identifier.expression[name!=OwnSlots]"
          },
          {
            message: "Too many extends",
            selector: "TSInterfaceDeclaration[id.name=Slots][extends.length>3]"
          },
          {
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
    ],
    "vue/no-restricted-syntax": [
      "warn",
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
