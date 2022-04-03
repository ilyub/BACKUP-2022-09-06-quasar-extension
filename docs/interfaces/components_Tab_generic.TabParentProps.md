[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tab.generic](../modules/components_Tab_generic.md) / TabParentProps

# Interface: TabParentProps

[components/Tab.generic](../modules/components_Tab_generic.md).TabParentProps

## Hierarchy

- `Readonly`<`Omit`<`QTabProps`, keyof [`TabOwnProps`](components_Tab_generic.TabOwnProps.md)\>\>

  ↳ **`TabParentProps`**

  ↳↳ [`TabProps`](components_Tab_generic.TabProps.md)

## Table of contents

### Properties

- [alert](components_Tab_generic.TabParentProps.md#alert)
- [alertIcon](components_Tab_generic.TabParentProps.md#alerticon)
- [contentClass](components_Tab_generic.TabParentProps.md#contentclass)
- [disable](components_Tab_generic.TabParentProps.md#disable)
- [icon](components_Tab_generic.TabParentProps.md#icon)
- [label](components_Tab_generic.TabParentProps.md#label)
- [noCaps](components_Tab_generic.TabParentProps.md#nocaps)
- [ripple](components_Tab_generic.TabParentProps.md#ripple)
- [tabindex](components_Tab_generic.TabParentProps.md#tabindex)

## Properties

### alert

• `Optional` `Readonly` **alert**: `string` \| `boolean`

Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color

#### Inherited from

Readonly.alert

___

### alertIcon

• `Optional` `Readonly` **alertIcon**: `string`

Adds a floating icon to the tab, notifying the user there are some updates; It's displayed only if 'alert' is set; Can use the color specified by 'alert' prop

#### Inherited from

Readonly.alertIcon

___

### contentClass

• `Optional` `Readonly` **contentClass**: `string`

Class definitions to be attributed to the content wrapper

#### Inherited from

Readonly.contentClass

___

### disable

• `Optional` `Readonly` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

Readonly.disable

___

### icon

• `Optional` `Readonly` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

Readonly.icon

___

### label

• `Optional` `Readonly` **label**: `string` \| `number`

A number or string to label the tab

#### Inherited from

Readonly.label

___

### noCaps

• `Optional` `Readonly` **noCaps**: `boolean`

Turns off capitalizing all letters within the tab (which is the default)

#### Inherited from

Readonly.noCaps

___

### ripple

• `Optional` `Readonly` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

Readonly.ripple

___

### tabindex

• `Optional` `Readonly` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

Readonly.tabindex
