[Quasar extension](../index.md) / [Exports](../modules.md) / [components/NumericInput.extras](../modules/components_NumericInput_extras.md) / [NumericInput](../modules/components_NumericInput_extras.NumericInput.md) / Props

# Interface: Props

[components/NumericInput.extras](../modules/components_NumericInput_extras.md).[NumericInput](../modules/components_NumericInput_extras.NumericInput.md).Props

## Hierarchy

- [`ParentProps`](components_NumericInput_extras.NumericInput.ParentProps.md)

- [`OwnProps`](components_NumericInput_extras.NumericInput.OwnProps.md)

  ↳ **`Props`**

  ↳↳ [`ParentProps`](components_TimeInput_extras.TimeInput.ParentProps.md)

## Table of contents

### Properties

- [bigStep](components_NumericInput_extras.NumericInput.Props.md#bigstep)
- [disable](components_NumericInput_extras.NumericInput.Props.md#disable)
- [focusableElement](components_NumericInput_extras.NumericInput.Props.md#focusableelement)
- [format](components_NumericInput_extras.NumericInput.Props.md#format)
- [label](components_NumericInput_extras.NumericInput.Props.md#label)
- [max](components_NumericInput_extras.NumericInput.Props.md#max)
- [min](components_NumericInput_extras.NumericInput.Props.md#min)
- [modelValue](components_NumericInput_extras.NumericInput.Props.md#modelvalue)
- [onUpdate:modelValue](components_NumericInput_extras.NumericInput.Props.md#onupdate:modelvalue)
- [placeholder](components_NumericInput_extras.NumericInput.Props.md#placeholder)
- [required](components_NumericInput_extras.NumericInput.Props.md#required)
- [rulesOnChange](components_NumericInput_extras.NumericInput.Props.md#rulesonchange)
- [rulesOnInput](components_NumericInput_extras.NumericInput.Props.md#rulesoninput)
- [rulesOnSubmit](components_NumericInput_extras.NumericInput.Props.md#rulesonsubmit)
- [smallStep](components_NumericInput_extras.NumericInput.Props.md#smallstep)
- [validationOptions](components_NumericInput_extras.NumericInput.Props.md#validationoptions)

## Properties

### bigStep

• `Optional` `Readonly` **bigStep**: `numberU`

#### Inherited from

[OwnProps](components_NumericInput_extras.NumericInput.OwnProps.md).[bigStep](components_NumericInput_extras.NumericInput.OwnProps.md#bigstep)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[ParentProps](components_NumericInput_extras.NumericInput.ParentProps.md).[disable](components_NumericInput_extras.NumericInput.ParentProps.md#disable)

___

### focusableElement

• `Optional` `Readonly` **focusableElement**: `HTMLElement`

#### Inherited from

[ParentProps](components_NumericInput_extras.NumericInput.ParentProps.md).[focusableElement](components_NumericInput_extras.NumericInput.ParentProps.md#focusableelement)

___

### format

• `Optional` `Readonly` **format**: [`Format`](components_Field_extras.Field.Format.md)<`numberU`\>

Formats value.

**`Param`**

Value.

#### Inherited from

[ParentProps](components_NumericInput_extras.NumericInput.ParentProps.md).[format](components_NumericInput_extras.NumericInput.ParentProps.md#format)

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[ParentProps](components_NumericInput_extras.NumericInput.ParentProps.md).[label](components_NumericInput_extras.NumericInput.ParentProps.md#label)

___

### max

• `Optional` `Readonly` **max**: `numberU`

#### Inherited from

[OwnProps](components_NumericInput_extras.NumericInput.OwnProps.md).[max](components_NumericInput_extras.NumericInput.OwnProps.md#max)

___

### min

• `Optional` `Readonly` **min**: `numberU`

#### Inherited from

[OwnProps](components_NumericInput_extras.NumericInput.OwnProps.md).[min](components_NumericInput_extras.NumericInput.OwnProps.md#min)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `numberU`

#### Inherited from

[OwnProps](components_NumericInput_extras.NumericInput.OwnProps.md).[modelValue](components_NumericInput_extras.NumericInput.OwnProps.md#modelvalue)

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

#### Inherited from

[OwnProps](components_NumericInput_extras.NumericInput.OwnProps.md).[onUpdate:modelValue](components_NumericInput_extras.NumericInput.OwnProps.md#onupdate:modelvalue)

___

### placeholder

• **placeholder**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[ParentProps](components_NumericInput_extras.NumericInput.ParentProps.md).[placeholder](components_NumericInput_extras.NumericInput.ParentProps.md#placeholder)

___

### required

• `Optional` `Readonly` **required**: `booleanU`

#### Inherited from

[OwnProps](components_NumericInput_extras.NumericInput.OwnProps.md).[required](components_NumericInput_extras.NumericInput.OwnProps.md#required)

___

### rulesOnChange

• `Optional` `Readonly` **rulesOnChange**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`numberU`\>

#### Inherited from

[ParentProps](components_NumericInput_extras.NumericInput.ParentProps.md).[rulesOnChange](components_NumericInput_extras.NumericInput.ParentProps.md#rulesonchange)

___

### rulesOnInput

• `Optional` `Readonly` **rulesOnInput**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`numberU`\>

#### Inherited from

[ParentProps](components_NumericInput_extras.NumericInput.ParentProps.md).[rulesOnInput](components_NumericInput_extras.NumericInput.ParentProps.md#rulesoninput)

___

### rulesOnSubmit

• `Optional` `Readonly` **rulesOnSubmit**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`numberU`\>

#### Inherited from

[ParentProps](components_NumericInput_extras.NumericInput.ParentProps.md).[rulesOnSubmit](components_NumericInput_extras.NumericInput.ParentProps.md#rulesonsubmit)

___

### smallStep

• `Optional` `Readonly` **smallStep**: `numberU`

#### Inherited from

[OwnProps](components_NumericInput_extras.NumericInput.OwnProps.md).[smallStep](components_NumericInput_extras.NumericInput.OwnProps.md#smallstep)

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

#### Inherited from

[OwnProps](components_NumericInput_extras.NumericInput.OwnProps.md).[validationOptions](components_NumericInput_extras.NumericInput.OwnProps.md#validationoptions)
