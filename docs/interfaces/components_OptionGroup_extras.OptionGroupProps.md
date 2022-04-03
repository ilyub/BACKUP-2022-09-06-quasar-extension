[Quasar extension](../index.md) / [Exports](../modules.md) / [components/OptionGroup.extras](../modules/components_OptionGroup_extras.md) / OptionGroupProps

# Interface: OptionGroupProps<T\>

[components/OptionGroup.extras](../modules/components_OptionGroup_extras.md).OptionGroupProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`OptionGroupParentProps`](components_OptionGroup_extras.OptionGroupParentProps.md)

- [`OptionGroupOwnProps`](components_OptionGroup_extras.OptionGroupOwnProps.md)<`T`\>

  ↳ **`OptionGroupProps`**

## Table of contents

### Properties

- [color](components_OptionGroup_extras.OptionGroupProps.md#color)
- [dark](components_OptionGroup_extras.OptionGroupProps.md#dark)
- [dense](components_OptionGroup_extras.OptionGroupProps.md#dense)
- [disable](components_OptionGroup_extras.OptionGroupProps.md#disable)
- [inline](components_OptionGroup_extras.OptionGroupProps.md#inline)
- [keepColor](components_OptionGroup_extras.OptionGroupProps.md#keepcolor)
- [leftLabel](components_OptionGroup_extras.OptionGroupProps.md#leftlabel)
- [modelValue](components_OptionGroup_extras.OptionGroupProps.md#modelvalue)
- [name](components_OptionGroup_extras.OptionGroupProps.md#name)
- [options](components_OptionGroup_extras.OptionGroupProps.md#options)
- [size](components_OptionGroup_extras.OptionGroupProps.md#size)
- [type](components_OptionGroup_extras.OptionGroupProps.md#type)

### Methods

- [onUpdate:modelValue](components_OptionGroup_extras.OptionGroupProps.md#onupdate:modelvalue)

## Properties

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[OptionGroupParentProps](components_OptionGroup_extras.OptionGroupParentProps.md).[color](components_OptionGroup_extras.OptionGroupParentProps.md#color)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[OptionGroupParentProps](components_OptionGroup_extras.OptionGroupParentProps.md).[dark](components_OptionGroup_extras.OptionGroupParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[OptionGroupParentProps](components_OptionGroup_extras.OptionGroupParentProps.md).[dense](components_OptionGroup_extras.OptionGroupParentProps.md#dense)

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

[OptionGroupParentProps](components_OptionGroup_extras.OptionGroupParentProps.md).[disable](components_OptionGroup_extras.OptionGroupParentProps.md#disable)

___

### inline

• `Optional` `Readonly` **inline**: `boolean`

#### Inherited from

[OptionGroupOwnProps](components_OptionGroup_extras.OptionGroupOwnProps.md).[inline](components_OptionGroup_extras.OptionGroupOwnProps.md#inline)

___

### keepColor

• `Optional` **keepColor**: `boolean`

Should the color (if specified any) be kept when input components are unticked?

#### Inherited from

[OptionGroupParentProps](components_OptionGroup_extras.OptionGroupParentProps.md).[keepColor](components_OptionGroup_extras.OptionGroupParentProps.md#keepcolor)

___

### leftLabel

• `Optional` **leftLabel**: `boolean`

Label (if any specified) should be displayed on the left side of the input components

#### Inherited from

[OptionGroupParentProps](components_OptionGroup_extras.OptionGroupParentProps.md).[leftLabel](components_OptionGroup_extras.OptionGroupParentProps.md#leftlabel)

___

### modelValue

• `Readonly` **modelValue**: `T`

#### Inherited from

[OptionGroupOwnProps](components_OptionGroup_extras.OptionGroupOwnProps.md).[modelValue](components_OptionGroup_extras.OptionGroupOwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the controls; Useful if dealing with forms submitted directly to a URL

#### Inherited from

[OptionGroupParentProps](components_OptionGroup_extras.OptionGroupParentProps.md).[name](components_OptionGroup_extras.OptionGroupParentProps.md#name)

___

### options

• `Readonly` **options**: [`OptionGroupOptions`](../modules/components_OptionGroup_extras.md#optiongroupoptions)<`T`\>

#### Inherited from

[OptionGroupOwnProps](components_OptionGroup_extras.OptionGroupOwnProps.md).[options](components_OptionGroup_extras.OptionGroupOwnProps.md#options)

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

[OptionGroupParentProps](components_OptionGroup_extras.OptionGroupParentProps.md).[size](components_OptionGroup_extras.OptionGroupParentProps.md#size)

___

### type

• `Optional` **type**: ``"radio"`` \| ``"checkbox"`` \| ``"toggle"``

The type of input component to be used
Default value: radio

#### Inherited from

[OptionGroupParentProps](components_OptionGroup_extras.OptionGroupParentProps.md).[type](components_OptionGroup_extras.OptionGroupParentProps.md#type)

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

[OptionGroupOwnProps](components_OptionGroup_extras.OptionGroupOwnProps.md).[onUpdate:modelValue](components_OptionGroup_extras.OptionGroupOwnProps.md#onupdate:modelvalue)
