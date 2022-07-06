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
- [onUpdate:modelValue](components_NumericInput_extras.NumericInput.OwnProps.md#onupdate:modelvalue)
- [required](components_NumericInput_extras.NumericInput.OwnProps.md#required)
- [smallStep](components_NumericInput_extras.NumericInput.OwnProps.md#smallstep)
- [validationOptions](components_NumericInput_extras.NumericInput.OwnProps.md#validationoptions)

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

### onUpdate:modelValue

• `Optional` `Readonly` **onUpdate:modelValue**: (`value`: `numberU`) => `void`

#### Type declaration

▸ (`value`): `void`

Emits model value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `numberU` | Value. |

##### Returns

`void`

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
| `format?` | (`value`: `unknown`) => `numberU` |
| `label?` | `Key`<`Word`\> |
| `max?` | `numberU` |
| `maxErrorMessage?` | `Key`<`Word`\> |
| `min?` | `numberU` |
| `minErrorMessage?` | `Key`<`Word`\> |
| `minMaxFormat?` | (`value`: `number`) => `string` |
| `required?` | `boolean` |
| `requiredErrorMessage?` | `Key`<`Word`\> |
