[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/validation](../modules/components_api_validation.md) / [validation](../modules/components_api_validation.validation.md) / Options

# Interface: Options<T\>

[components/api/validation](../modules/components_api_validation.md).[validation](../modules/components_api_validation.validation.md).Options

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [format](components_api_validation.validation.Options.md#format)
- [label](components_api_validation.validation.Options.md#label)
- [max](components_api_validation.validation.Options.md#max)
- [maxErrorMessage](components_api_validation.validation.Options.md#maxerrormessage)
- [min](components_api_validation.validation.Options.md#min)
- [minErrorMessage](components_api_validation.validation.Options.md#minerrormessage)
- [minMaxFormat](components_api_validation.validation.Options.md#minmaxformat)
- [required](components_api_validation.validation.Options.md#required)
- [requiredErrorMessage](components_api_validation.validation.Options.md#requirederrormessage)

## Properties

### format

• `Readonly` **format**: (`value`: `unknown`) => `T`

#### Type declaration

▸ (`value`): `T`

Formats value for validation.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

##### Returns

`T`

Formatted value.

___

### label

• `Optional` `Readonly` **label**: `Key`<`Word`\>

___

### max

• `Optional` `Readonly` **max**: `T`

___

### maxErrorMessage

• `Optional` `Readonly` **maxErrorMessage**: `Key`<`Word`\>

___

### min

• `Optional` `Readonly` **min**: `T`

___

### minErrorMessage

• `Optional` `Readonly` **minErrorMessage**: `Key`<`Word`\>

___

### minMaxFormat

• `Optional` `Readonly` **minMaxFormat**: (`value`: `Exclude`<`T`, `empty`\>) => `string`

#### Type declaration

▸ (`value`): `string`

Formats min/max value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Exclude`<`T`, `empty`\> | Value. |

##### Returns

`string`

Formatted value.l.

___

### required

• `Optional` `Readonly` **required**: `boolean`

___

### requiredErrorMessage

• `Optional` `Readonly` **requiredErrorMessage**: `Key`<`Word`\>
