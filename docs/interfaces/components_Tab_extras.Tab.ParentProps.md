[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tab.extras](../modules/components_Tab_extras.md) / [Tab](../modules/components_Tab_extras.Tab.md) / ParentProps

# Interface: ParentProps

[components/Tab.extras](../modules/components_Tab_extras.md).[Tab](../modules/components_Tab_extras.Tab.md).ParentProps

## Hierarchy

- `Omit`<`QTabProps`, keyof [`OwnProps`](components_Tab_extras.Tab.OwnProps.md)\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_Tab_extras.Tab.Props.md)

## Table of contents

### Properties

- [alert](components_Tab_extras.Tab.ParentProps.md#alert)
- [alertIcon](components_Tab_extras.Tab.ParentProps.md#alerticon)
- [contentClass](components_Tab_extras.Tab.ParentProps.md#contentclass)
- [disable](components_Tab_extras.Tab.ParentProps.md#disable)
- [icon](components_Tab_extras.Tab.ParentProps.md#icon)
- [label](components_Tab_extras.Tab.ParentProps.md#label)
- [noCaps](components_Tab_extras.Tab.ParentProps.md#nocaps)
- [ripple](components_Tab_extras.Tab.ParentProps.md#ripple)
- [tabindex](components_Tab_extras.Tab.ParentProps.md#tabindex)

## Properties

### alert

• `Optional` **alert**: `string` \| `boolean`

Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color

#### Inherited from

Omit.alert

___

### alertIcon

• `Optional` **alertIcon**: `string`

Adds a floating icon to the tab, notifying the user there are some updates; It's displayed only if 'alert' is set; Can use the color specified by 'alert' prop

#### Inherited from

Omit.alertIcon

___

### contentClass

• `Optional` **contentClass**: `string`

Class definitions to be attributed to the content wrapper

#### Inherited from

Omit.contentClass

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

Omit.disable

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

Omit.icon

___

### label

• `Optional` **label**: `string` \| `number`

A number or string to label the tab

#### Inherited from

Omit.label

___

### noCaps

• `Optional` **noCaps**: `boolean`

Turns off capitalizing all letters within the tab (which is the default)

#### Inherited from

Omit.noCaps

___

### ripple

• `Optional` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

Omit.ripple

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

Omit.tabindex
