[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tab.generic](../modules/components_Tab_generic.md) / TabProps

# Interface: TabProps<T\>

[components/Tab.generic](../modules/components_Tab_generic.md).TabProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStrU` = `NumStrU` |

## Hierarchy

- [`TabOwnProps`](components_Tab_generic.TabOwnProps.md)<`T`\>

- [`TabParentProps`](components_Tab_generic.TabParentProps.md)

  ↳ **`TabProps`**

## Table of contents

### Properties

- [alert](components_Tab_generic.TabProps.md#alert)
- [alertIcon](components_Tab_generic.TabProps.md#alerticon)
- [contentClass](components_Tab_generic.TabProps.md#contentclass)
- [disable](components_Tab_generic.TabProps.md#disable)
- [icon](components_Tab_generic.TabProps.md#icon)
- [label](components_Tab_generic.TabProps.md#label)
- [name](components_Tab_generic.TabProps.md#name)
- [noCaps](components_Tab_generic.TabProps.md#nocaps)
- [ripple](components_Tab_generic.TabProps.md#ripple)
- [tabindex](components_Tab_generic.TabProps.md#tabindex)

## Properties

### alert

• `Optional` `Readonly` **alert**: `string` \| `boolean`

Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color

#### Inherited from

[TabParentProps](components_Tab_generic.TabParentProps.md).[alert](components_Tab_generic.TabParentProps.md#alert)

___

### alertIcon

• `Optional` `Readonly` **alertIcon**: `string`

Adds a floating icon to the tab, notifying the user there are some updates; It's displayed only if 'alert' is set; Can use the color specified by 'alert' prop

#### Inherited from

[TabParentProps](components_Tab_generic.TabParentProps.md).[alertIcon](components_Tab_generic.TabParentProps.md#alerticon)

___

### contentClass

• `Optional` `Readonly` **contentClass**: `string`

Class definitions to be attributed to the content wrapper

#### Inherited from

[TabParentProps](components_Tab_generic.TabParentProps.md).[contentClass](components_Tab_generic.TabParentProps.md#contentclass)

___

### disable

• `Optional` `Readonly` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

[TabParentProps](components_Tab_generic.TabParentProps.md).[disable](components_Tab_generic.TabParentProps.md#disable)

___

### icon

• `Optional` `Readonly` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[TabParentProps](components_Tab_generic.TabParentProps.md).[icon](components_Tab_generic.TabParentProps.md#icon)

___

### label

• `Optional` `Readonly` **label**: `string` \| `number`

A number or string to label the tab

#### Inherited from

[TabParentProps](components_Tab_generic.TabParentProps.md).[label](components_Tab_generic.TabParentProps.md#label)

___

### name

• `Optional` `Readonly` **name**: `T`

#### Inherited from

[TabOwnProps](components_Tab_generic.TabOwnProps.md).[name](components_Tab_generic.TabOwnProps.md#name)

___

### noCaps

• `Optional` `Readonly` **noCaps**: `boolean`

Turns off capitalizing all letters within the tab (which is the default)

#### Inherited from

[TabParentProps](components_Tab_generic.TabParentProps.md).[noCaps](components_Tab_generic.TabParentProps.md#nocaps)

___

### ripple

• `Optional` `Readonly` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

[TabParentProps](components_Tab_generic.TabParentProps.md).[ripple](components_Tab_generic.TabParentProps.md#ripple)

___

### tabindex

• `Optional` `Readonly` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[TabParentProps](components_Tab_generic.TabParentProps.md).[tabindex](components_Tab_generic.TabParentProps.md#tabindex)
