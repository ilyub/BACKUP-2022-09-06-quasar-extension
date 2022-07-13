module.exports = {
  rules: {
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
    "@skylib/custom/quasar/prefer-Props-interface": [
      "warn",
      {
        message: "Use interface",
        selector: "TSTypeAliasDeclaration > Identifier.id[name=Props]"
      }
    ],
    "@skylib/custom/quasar/prefer-Slots-interface": [
      "warn",
      {
        message: "Use interface",
        selector: "TSTypeAliasDeclaration > Identifier.id[name=Slots]"
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
    ]
  }
};
