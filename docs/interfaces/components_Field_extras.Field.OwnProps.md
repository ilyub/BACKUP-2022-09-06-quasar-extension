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
- [onUpdate:modelValue](components_Field_extras.Field.OwnProps.md#onupdate:modelvalue)
- [required](components_Field_extras.Field.OwnProps.md#required)
- [validationOptions](components_Field_extras.Field.OwnProps.md#validationoptions)

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

**`Param`**

Value.

___

### modelValue

• `Readonly` **modelValue**: `T`

___

### onUpdate:modelValue

• `Optional` `Readonly` **onUpdate:modelValue**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

Emits model value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

##### Returns

`void`

___

### required

• `Optional` `Readonly` **required**: `booleanU`

___

### validationOptions

• `Optional` `Readonly` **validationOptions**: `Optional`<[`Options`](components_api_validation_internal.Options.md)<`T`\>\>
