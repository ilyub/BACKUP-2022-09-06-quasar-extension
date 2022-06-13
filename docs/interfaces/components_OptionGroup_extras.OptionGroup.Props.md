[Quasar extension](../index.md) / [Exports](../modules.md) / [components/OptionGroup.extras](../modules/components_OptionGroup_extras.md) / [OptionGroup](../modules/components_OptionGroup_extras.OptionGroup.md) / Props

# Interface: Props<T\>

[components/OptionGroup.extras](../modules/components_OptionGroup_extras.md).[OptionGroup](../modules/components_OptionGroup_extras.OptionGroup.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ParentProps`](components_OptionGroup_extras.OptionGroup.ParentProps.md)

- [`OwnProps`](components_OptionGroup_extras.OptionGroup.OwnProps.md)<`T`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [color](components_OptionGroup_extras.OptionGroup.Props.md#color)
- [dark](components_OptionGroup_extras.OptionGroup.Props.md#dark)
- [dense](components_OptionGroup_extras.OptionGroup.Props.md#dense)
- [disable](components_OptionGroup_extras.OptionGroup.Props.md#disable)
- [inline](components_OptionGroup_extras.OptionGroup.Props.md#inline)
- [keepColor](components_OptionGroup_extras.OptionGroup.Props.md#keepcolor)
- [leftLabel](components_OptionGroup_extras.OptionGroup.Props.md#leftlabel)
- [modelValue](components_OptionGroup_extras.OptionGroup.Props.md#modelvalue)
- [name](components_OptionGroup_extras.OptionGroup.Props.md#name)
- [options](components_OptionGroup_extras.OptionGroup.Props.md#options)
- [size](components_OptionGroup_extras.OptionGroup.Props.md#size)
- [type](components_OptionGroup_extras.OptionGroup.Props.md#type)

### Methods

- [onUpdate:modelValue](components_OptionGroup_extras.OptionGroup.Props.md#onupdate:modelvalue)

## Properties

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_OptionGroup_extras.OptionGroup.ParentProps.md).[color](components_OptionGroup_extras.OptionGroup.ParentProps.md#color)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_OptionGroup_extras.OptionGroup.ParentProps.md).[dark](components_OptionGroup_extras.OptionGroup.ParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_OptionGroup_extras.OptionGroup.ParentProps.md).[dense](components_OptionGroup_extras.OptionGroup.ParentProps.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[OwnProps](components_OptionGroup_extras.OptionGroup.OwnProps.md).[disable](components_OptionGroup_extras.OptionGroup.OwnProps.md#disable)

___

### inline

• `Optional` `Readonly` **inline**: `booleanU`

#### Inherited from

[OwnProps](components_OptionGroup_extras.OptionGroup.OwnProps.md).[inline](components_OptionGroup_extras.OptionGroup.OwnProps.md#inline)

___

### keepColor

• `Optional` **keepColor**: `boolean`

Should the color (if specified any) be kept when input components are unticked?

#### Inherited from

[ParentProps](components_OptionGroup_extras.OptionGroup.ParentProps.md).[keepColor](components_OptionGroup_extras.OptionGroup.ParentProps.md#keepcolor)

___

### leftLabel

• `Optional` **leftLabel**: `boolean`

Label (if any specified) should be displayed on the left side of the input components

#### Inherited from

[ParentProps](components_OptionGroup_extras.OptionGroup.ParentProps.md).[leftLabel](components_OptionGroup_extras.OptionGroup.ParentProps.md#leftlabel)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

#### Inherited from

[OwnProps](components_OptionGroup_extras.OptionGroup.OwnProps.md).[modelValue](components_OptionGroup_extras.OptionGroup.OwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the controls; Useful if dealing with forms submitted directly to a URL

#### Inherited from

[ParentProps](components_OptionGroup_extras.OptionGroup.ParentProps.md).[name](components_OptionGroup_extras.OptionGroup.ParentProps.md#name)

___

### options

• `Readonly` **options**: [`Options`](../modules/components_OptionGroup_extras.OptionGroup.md#options)<`T`\>

#### Inherited from

[OwnProps](components_OptionGroup_extras.OptionGroup.OwnProps.md).[options](components_OptionGroup_extras.OptionGroup.OwnProps.md#options)

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

[ParentProps](components_OptionGroup_extras.OptionGroup.ParentProps.md).[size](components_OptionGroup_extras.OptionGroup.ParentProps.md#size)

___

### type

• `Optional` **type**: ``"radio"`` \| ``"checkbox"`` \| ``"toggle"``

The type of input component to be used
Default value: radio

#### Inherited from

[ParentProps](components_OptionGroup_extras.OptionGroup.ParentProps.md).[type](components_OptionGroup_extras.OptionGroup.ParentProps.md#type)

## Methods

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_OptionGroup_extras.OptionGroup.OwnProps.md).[onUpdate:modelValue](components_OptionGroup_extras.OptionGroup.OwnProps.md#onupdate:modelvalue)
