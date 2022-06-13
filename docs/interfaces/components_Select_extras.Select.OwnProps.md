[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Select.extras](../modules/components_Select_extras.md) / [Select](../modules/components_Select_extras.Select.md) / OwnProps

# Interface: OwnProps<T\>

[components/Select.extras](../modules/components_Select_extras.md).[Select](../modules/components_Select_extras.Select.md).OwnProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`OwnProps`**

  ↳ [`Props`](components_Select_extras.Select.Props.md)

## Table of contents

### Properties

- [disable](components_Select_extras.Select.OwnProps.md#disable)
- [modelValue](components_Select_extras.Select.OwnProps.md#modelvalue)
- [options](components_Select_extras.Select.OwnProps.md#options)
- [required](components_Select_extras.Select.OwnProps.md#required)
- [validationLabel](components_Select_extras.Select.OwnProps.md#validationlabel)

### Methods

- [onUpdate:modelValue](components_Select_extras.Select.OwnProps.md#onupdate:modelvalue)

## Properties

### disable

• `Optional` `Readonly` **disable**: `booleanU`

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

___

### options

• `Readonly` **options**: [`Options`](../modules/components_Select_extras.Select.md#options)<`T`\>

___

### required

• `Optional` `Readonly` **required**: `booleanU`

___

### validationLabel

• `Optional` `Readonly` **validationLabel**: `Key`<`Word`\>

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
