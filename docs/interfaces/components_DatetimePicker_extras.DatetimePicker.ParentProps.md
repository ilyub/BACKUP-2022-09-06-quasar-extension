[Quasar extension](../index.md) / [Exports](../modules.md) / [components/DatetimePicker.extras](../modules/components_DatetimePicker_extras.md) / [DatetimePicker](../modules/components_DatetimePicker_extras.DatetimePicker.md) / ParentProps

# Interface: ParentProps

[components/DatetimePicker.extras](../modules/components_DatetimePicker_extras.md).[DatetimePicker](../modules/components_DatetimePicker_extras.DatetimePicker.md).ParentProps

## Hierarchy

- `Omit`<[`Props`](components_Field_extras.Field.Props.md)<`stringU`\>, keyof [`OwnProps`](components_DatetimePicker_extras.DatetimePicker.OwnProps.md)\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_DatetimePicker_extras.DatetimePicker.Props.md)

## Table of contents

### Properties

- [disable](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#disable)
- [focusableElement](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#focusableelement)
- [format](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#format)
- [label](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#label)
- [placeholder](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#placeholder)
- [required](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#required)
- [rulesOnChange](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#rulesonchange)
- [rulesOnInput](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#rulesoninput)
- [rulesOnSubmit](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#rulesonsubmit)
- [validationOptions](components_DatetimePicker_extras.DatetimePicker.ParentProps.md#validationoptions)

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
