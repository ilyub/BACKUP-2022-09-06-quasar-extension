[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Select.extras](../modules/components_Select_extras.md) / SelectOwnProps

# Interface: SelectOwnProps<T\>

[components/Select.extras](../modules/components_Select_extras.md).SelectOwnProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`SelectOwnProps`**

  ↳ [`SelectProps`](components_Select_extras.SelectProps.md)

## Table of contents

### Properties

- [initialLabel](components_Select_extras.SelectOwnProps.md#initiallabel)
- [modelValue](components_Select_extras.SelectOwnProps.md#modelvalue)
- [options](components_Select_extras.SelectOwnProps.md#options)

### Methods

- [onUpdate:modelValue](components_Select_extras.SelectOwnProps.md#onupdate:modelvalue)

## Properties

### initialLabel

• `Optional` `Readonly` **initialLabel**: `stringU`

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

___

### options

• `Readonly` **options**: [`SelectOptions`](../modules/components_Select_extras.md#selectoptions)<`T`\>

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
