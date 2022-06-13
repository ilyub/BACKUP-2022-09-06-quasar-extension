[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tab.extras](../modules/components_Tab_extras.md) / [Tab](../modules/components_Tab_extras.Tab.md) / Props

# Interface: Props<T\>

[components/Tab.extras](../modules/components_Tab_extras.md).[Tab](../modules/components_Tab_extras.Tab.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStrU` = `NumStrU` |

## Hierarchy

- [`ParentProps`](components_Tab_extras.Tab.ParentProps.md)

- [`OwnProps`](components_Tab_extras.Tab.OwnProps.md)<`T`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [alert](components_Tab_extras.Tab.Props.md#alert)
- [alertIcon](components_Tab_extras.Tab.Props.md#alerticon)
- [contentClass](components_Tab_extras.Tab.Props.md#contentclass)
- [disable](components_Tab_extras.Tab.Props.md#disable)
- [icon](components_Tab_extras.Tab.Props.md#icon)
- [label](components_Tab_extras.Tab.Props.md#label)
- [name](components_Tab_extras.Tab.Props.md#name)
- [noCaps](components_Tab_extras.Tab.Props.md#nocaps)
- [ripple](components_Tab_extras.Tab.Props.md#ripple)
- [tabindex](components_Tab_extras.Tab.Props.md#tabindex)

## Properties

### alert

• `Optional` **alert**: `string` \| `boolean`

Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color

#### Inherited from

[ParentProps](components_Tab_extras.Tab.ParentProps.md).[alert](components_Tab_extras.Tab.ParentProps.md#alert)

___

### alertIcon

• `Optional` **alertIcon**: `string`

Adds a floating icon to the tab, notifying the user there are some updates; It's displayed only if 'alert' is set; Can use the color specified by 'alert' prop

#### Inherited from

[ParentProps](components_Tab_extras.Tab.ParentProps.md).[alertIcon](components_Tab_extras.Tab.ParentProps.md#alerticon)

___

### contentClass

• `Optional` **contentClass**: `string`

Class definitions to be attributed to the content wrapper

#### Inherited from

[ParentProps](components_Tab_extras.Tab.ParentProps.md).[contentClass](components_Tab_extras.Tab.ParentProps.md#contentclass)

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

[ParentProps](components_Tab_extras.Tab.ParentProps.md).[disable](components_Tab_extras.Tab.ParentProps.md#disable)

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[ParentProps](components_Tab_extras.Tab.ParentProps.md).[icon](components_Tab_extras.Tab.ParentProps.md#icon)

___

### label

• `Optional` **label**: `string` \| `number`

A number or string to label the tab

#### Inherited from

[ParentProps](components_Tab_extras.Tab.ParentProps.md).[label](components_Tab_extras.Tab.ParentProps.md#label)

___

### name

• `Optional` `Readonly` **name**: `T`

#### Inherited from

[OwnProps](components_Tab_extras.Tab.OwnProps.md).[name](components_Tab_extras.Tab.OwnProps.md#name)

___

### noCaps

• `Optional` **noCaps**: `boolean`

Turns off capitalizing all letters within the tab (which is the default)

#### Inherited from

[ParentProps](components_Tab_extras.Tab.ParentProps.md).[noCaps](components_Tab_extras.Tab.ParentProps.md#nocaps)

___

### ripple

• `Optional` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

[ParentProps](components_Tab_extras.Tab.ParentProps.md).[ripple](components_Tab_extras.Tab.ParentProps.md#ripple)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[ParentProps](components_Tab_extras.Tab.ParentProps.md).[tabindex](components_Tab_extras.Tab.ParentProps.md#tabindex)
