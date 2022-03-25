[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Select.extras](../modules/components_Select_extras.md) / SelectProps

# Interface: SelectProps<T\>

[components/Select.extras](../modules/components_Select_extras.md).SelectProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`SelectParentProps`](components_Select_extras.SelectParentProps.md)

- [`SelectOwnProps`](components_Select_extras.SelectOwnProps.md)<`T`\>

  ↳ **`SelectProps`**

## Table of contents

### Properties

- [initialLabel](components_Select_extras.SelectProps.md#initiallabel)
- [modelValue](components_Select_extras.SelectProps.md#modelvalue)
- [options](components_Select_extras.SelectProps.md#options)

### Methods

- [onUpdate:modelValue](components_Select_extras.SelectProps.md#onupdate:modelvalue)

## Properties

### initialLabel

• `Optional` `Readonly` **initialLabel**: `stringU`

#### Inherited from

[SelectOwnProps](components_Select_extras.SelectOwnProps.md).[initialLabel](components_Select_extras.SelectOwnProps.md#initiallabel)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

#### Inherited from

[SelectOwnProps](components_Select_extras.SelectOwnProps.md).[modelValue](components_Select_extras.SelectOwnProps.md#modelvalue)

___

### options

• `Readonly` **options**: [`SelectOptions`](../modules/components_Select_extras.md#selectoptions)<`T`\>

#### Inherited from

[SelectOwnProps](components_Select_extras.SelectOwnProps.md).[options](components_Select_extras.SelectOwnProps.md#options)

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

[SelectOwnProps](components_Select_extras.SelectOwnProps.md).[onUpdate:modelValue](components_Select_extras.SelectOwnProps.md#onupdate:modelvalue)
