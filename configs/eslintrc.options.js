module.exports = {
  consistentImport: [
    {
      altLocalNames: ["quasarTestUtils"],
      sourcePattern: "@skylib/quasar-extension/src/test-utils",
      type: "wildcard"
    }
  ],
  disallowByRegexp: [
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
      subOptionsId: "quasar-extension.BaseButton"
    },
    {
      contexts: ["code"],
      patterns: [/<q-card(?![\w-])/u.source],
      subOptionsId: "quasar-extension.Card"
    },
    {
      contexts: ["code"],
      patterns: [/<q-card-actions(?![\w-])/u.source],
      subOptionsId: "quasar-extension.CardActions"
    },
    {
      contexts: ["code"],
      patterns: [/<q-card-section(?![\w-])/u.source],
      subOptionsId: "quasar-extension.CardSection"
    },
    {
      contexts: ["code"],
      patterns: [/<q-expansion-item(?![\w-])/u.source],
      subOptionsId: "quasar-extension.ExpansionItem"
    },
    {
      contexts: ["code"],
      patterns: [/<q-form(?![\w-])/u.source],
      subOptionsId: "quasar-extension.Form"
    },
    {
      contexts: ["code"],
      patterns: [/<q-input(?![\w-])/u.source],
      subOptionsId: "quasar-extension.Input"
    },
    {
      contexts: ["code"],
      patterns: [/<q-item(?![\w-])/u.source],
      subOptionsId: "quasar-extension.Item"
    },
    {
      contexts: ["code"],
      patterns: [/<q-knob(?![\w-])/u.source],
      subOptionsId: "quasar-extension.Knob"
    },
    {
      contexts: ["code"],
      patterns: [/<q-menu(?![\w-])/u.source],
      subOptionsId: "quasar-extension.Menu"
    },
    {
      contexts: ["code"],
      patterns: [/<q-option-group(?![\w-])/u.source],
      subOptionsId: "quasar-extension.OptionGroup"
    },
    {
      contexts: ["code"],
      patterns: [/<q-popup-proxy(?![\w-])/u.source],
      subOptionsId: "quasar-extension.PopupProxy"
    },
    {
      contexts: ["code"],
      patterns: [/<q-select(?![\w-])/u.source],
      subOptionsId: "quasar-extension.Select"
    },
    {
      contexts: ["code"],
      patterns: [/<q-toggle(?![\w-])/u.source],
      subOptionsId: "quasar-extension.Toggle"
    },
    {
      contexts: ["code"],
      patterns: [/<q-tooltip(?![\w-])/u.source],
      subOptionsId: "quasar-extension.Tooltip"
    }
  ],
  extraDefaultExportLocations: ["./src/boot/*", "./src/router/index.ts"],
  noRestrictedSyntax: [
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
      message: 'Use "Props" interface',
      selector:
        "CallExpression[callee.name=prop] > TSTypeParameterInstantiation.typeParameters > TSIndexedAccessType.params > TSTypeReference.objectType > TSQualifiedName.typeName > Identifier.right[name=OwnProps]"
    },
    {
      message: 'Use "Props" interface',
      selector:
        "CallExpression[callee.object.name=prop][callee.property.name=/^(?:default|required)$/u] > TSTypeParameterInstantiation.typeParameters > TSIndexedAccessType.params > TSTypeReference.objectType > TSQualifiedName.typeName > Identifier.right[name=OwnProps]"
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
      message: 'Prefer "Omit<..., keyof OwnProps>"',
      selector:
        "TSInterfaceDeclaration[id.name=ParentProps] > TSInterfaceHeritage.extends > *.expression[name!=Omit]"
    },
    {
      message: 'Prefer "Omit<..., keyof OwnSlots>"',
      selector:
        "TSInterfaceDeclaration[id.name=ParentSlots] > TSInterfaceHeritage.extends > *.expression[name!=Omit]"
    },
    {
      message: 'Extend "ParentProps" interfaces',
      selector:
        "TSInterfaceDeclaration[id.name=Props] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentProps]"
    },
    {
      message: 'Extend "OwnProps" interfaces',
      selector:
        "TSInterfaceDeclaration[id.name=Props] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=OwnProps]"
    },
    {
      message: 'Extend "ParentSlots" interfaces',
      selector:
        "TSInterfaceDeclaration[id.name=Slots] > TSInterfaceHeritage.extends:first-child > Identifier.expression[name!=ParentSlots]"
    },
    {
      message: 'Extend "OwnSlots" interfaces',
      selector:
        "TSInterfaceDeclaration[id.name=Slots] > TSInterfaceHeritage.extends:nth-child(2) > Identifier.expression[name!=OwnSlots]"
    },
    {
      message: 'Extend "ParentProps" and "OwnProps" interfaces',
      selector: "TSInterfaceDeclaration[id.name=Props][extends.length!=2]"
    },
    {
      message: 'Extend "ParentSlots" and "OwnSlots" interfaces',
      selector: "TSInterfaceDeclaration[id.name=Slots][extends.length!=2]"
    },
    {
      message: "Use interface",
      selector:
        "TSTypeAliasDeclaration > Identifier.id[name=/^(?:Props|Slots)$/u]"
    }
  ],
  readonlyTypes: [
    "^ComponentOptionsBase$",
    "^ComputedRef$",
    "^Ref",
    "^VNode$",
    "^VueWrapper$"
  ]
};
