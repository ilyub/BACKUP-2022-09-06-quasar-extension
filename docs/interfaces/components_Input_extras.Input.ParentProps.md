[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Input.extras](../modules/components_Input_extras.md) / [Input](../modules/components_Input_extras.Input.md) / ParentProps

# Interface: ParentProps

[components/Input.extras](../modules/components_Input_extras.md).[Input](../modules/components_Input_extras.Input.md).ParentProps

## Hierarchy

- `Omit`<[`Props`](components_Field_extras.Field.Props.md)<`stringU`\>, keyof [`OwnProps`](components_Input_extras.Input.OwnProps.md)\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_Input_extras.Input.Props.md)

## Table of contents

### Properties

- [disable](components_Input_extras.Input.ParentProps.md#disable)
- [focusableElement](components_Input_extras.Input.ParentProps.md#focusableelement)
- [format](components_Input_extras.Input.ParentProps.md#format)
- [label](components_Input_extras.Input.ParentProps.md#label)
- [placeholder](components_Input_extras.Input.ParentProps.md#placeholder)
- [required](components_Input_extras.Input.ParentProps.md#required)
- [rulesOnChange](components_Input_extras.Input.ParentProps.md#rulesonchange)
- [rulesOnInput](components_Input_extras.Input.ParentProps.md#rulesoninput)
- [rulesOnSubmit](components_Input_extras.Input.ParentProps.md#rulesonsubmit)
- [validationOptions](components_Input_extras.Input.ParentProps.md#validationoptions)

## Properties

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

Omit.disable

___

### focusableElement

• `Optional` `Readonly` **focusableElement**: `HTMLElement`

#### Inherited from

Omit.focusableElement

___

### format

• `Optional` `Readonly` **format**: [`Format`](components_Field_extras.Field.Format.md)<`stringU`\>

Formats value.

**`Param`**

Value.

#### Inherited from

Omit.format

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

Omit.label

___

### placeholder

• **placeholder**: `undefined` \| `Key`<`Word`\>

#### Inherited from

Omit.placeholder

___

### required

• `Optional` `Readonly` **required**: `booleanU`

#### Inherited from

Omit.required

___

### rulesOnChange

• `Optional` `Readonly` **rulesOnChange**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`stringU`\>

#### Inherited from

Omit.rulesOnChange

___

### rulesOnInput

• `Optional` `Readonly` **rulesOnInput**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`stringU`\>

#### Inherited from

Omit.rulesOnInput

___

### rulesOnSubmit

• `Optional` `Readonly` **rulesOnSubmit**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`stringU`\>

#### Inherited from

Omit.rulesOnSubmit

___

### validationOptions

• `Optional` `Readonly` **validationOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format?` | (`value`: `unknown`) => `stringU` |
| `label?` | `Key`<`Word`\> |
| `max?` | `stringU` |
| `maxErrorMessage?` | `Key`<`Word`\> |
| `min?` | `stringU` |
| `minErrorMessage?` | `Key`<`Word`\> |
| `minMaxFormat?` | (`value`: `string`) => `string` |
| `required?` | `boolean` |
| `requiredErrorMessage?` | `Key`<`Word`\> |

#### Inherited from

Omit.validationOptions
