[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Field.extras](../modules/components_Field_extras.md) / [Field](../modules/components_Field_extras.Field.md) / OwnProps

# Interface: OwnProps<T\>

[components/Field.extras](../modules/components_Field_extras.md).[Field](../modules/components_Field_extras.Field.md).OwnProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`OwnProps`**

  ↳ [`Props`](components_Field_extras.Field.Props.md)

## Table of contents

### Properties

- [disable](components_Field_extras.Field.OwnProps.md#disable)
- [focusableElement](components_Field_extras.Field.OwnProps.md#focusableelement)
- [format](components_Field_extras.Field.OwnProps.md#format)
- [modelValue](components_Field_extras.Field.OwnProps.md#modelvalue)
- [required](components_Field_extras.Field.OwnProps.md#required)
- [validationOptions](components_Field_extras.Field.OwnProps.md#validationoptions)

### Methods

- [onUpdate:modelValue](components_Field_extras.Field.OwnProps.md#onupdate:modelvalue)

## Properties

### disable

• `Optional` `Readonly` **disable**: `booleanU`

___

### focusableElement

• `Optional` `Readonly` **focusableElement**: `HTMLElement`

___

### format

• `Optional` `Readonly` **format**: [`Format`](components_Field_extras.Field.Format.md)<`T`\>

Formats value.

**`param`** Value.

**`returns`** Formatted value.

___

### modelValue

• `Readonly` **modelValue**: `T`

___

### required

• `Optional` `Readonly` **required**: `booleanU`

___

### validationOptions

• `Optional` `Readonly` **validationOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `label?` | `Key`<`Word`\> |
| `max?` | `T` |
| `maxErrorMessage?` | `Key`<`Word`\> |
| `min?` | `T` |
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
| `value` | `T` | Value. |

#### Returns

`void`
