[Quasar extension](../index.md) / [Exports](../modules.md) / [components/NumericInput.extras](../modules/components_NumericInput_extras.md) / [NumericInput](../modules/components_NumericInput_extras.NumericInput.md) / OwnProps

# Interface: OwnProps

[components/NumericInput.extras](../modules/components_NumericInput_extras.md).[NumericInput](../modules/components_NumericInput_extras.NumericInput.md).OwnProps

## Hierarchy

- **`OwnProps`**

  ↳ [`Props`](components_NumericInput_extras.NumericInput.Props.md)

## Table of contents

### Properties

- [bigStep](components_NumericInput_extras.NumericInput.OwnProps.md#bigstep)
- [max](components_NumericInput_extras.NumericInput.OwnProps.md#max)
- [min](components_NumericInput_extras.NumericInput.OwnProps.md#min)
- [modelValue](components_NumericInput_extras.NumericInput.OwnProps.md#modelvalue)
- [required](components_NumericInput_extras.NumericInput.OwnProps.md#required)
- [smallStep](components_NumericInput_extras.NumericInput.OwnProps.md#smallstep)
- [validationOptions](components_NumericInput_extras.NumericInput.OwnProps.md#validationoptions)

### Methods

- [onUpdate:modelValue](components_NumericInput_extras.NumericInput.OwnProps.md#onupdate:modelvalue)

## Properties

### bigStep

• `Optional` `Readonly` **bigStep**: `numberU`

___

### max

• `Optional` `Readonly` **max**: `numberU`

___

### min

• `Optional` `Readonly` **min**: `numberU`

___

### modelValue

• `Optional` `Readonly` **modelValue**: `numberU`

___

### required

• `Optional` `Readonly` **required**: `booleanU`

___

### smallStep

• `Optional` `Readonly` **smallStep**: `numberU`

___

### validationOptions

• `Optional` `Readonly` **validationOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `label?` | `Key`<`Word`\> |
| `max?` | `numberU` |
| `maxErrorMessage?` | `Key`<`Word`\> |
| `min?` | `numberU` |
| `minErrorMessage?` | `Key`<`Word`\> |
| `required?` | `boolean` |
| `requiredErrorMessage?` | `Key`<`Word`\> |
| `format?` | (`value`: `unknown`) => `T` |
| `minMaxFormat?` | (`value`: `Exclude`<`T`, `empty`\>) => `string` |

## Methods

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `numberU` | Value. |

#### Returns

`void`
