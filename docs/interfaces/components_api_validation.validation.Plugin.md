[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/validation](../modules/components_api_validation.md) / [validation](../modules/components_api_validation.validation.md) / Plugin

# Interface: Plugin<T\>

[components/api/validation](../modules/components_api_validation.md).[validation](../modules/components_api_validation.validation.md).Plugin

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [rules](components_api_validation.validation.Plugin.md#rules)
- [validate](components_api_validation.validation.Plugin.md#validate)
- [validateAsync](components_api_validation.validation.Plugin.md#validateasync)

## Properties

### rules

• `Readonly` **rules**: `ComputedRef`<`ValidationRule`<`unknown`\>[]\>

___

### validate

• `Readonly` **validate**: (`value`: `T`, `context`: [`Context`](../modules/components_api_validation.validation.md#context)) => `void`

#### Type declaration

▸ (`value`, `context`): `void`

Validates field.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `context` | [`Context`](../modules/components_api_validation.validation.md#context) | Context. |

##### Returns

`void`

___

### validateAsync

• `Readonly` **validateAsync**: (`value`: `T`, `context`: [`Context`](../modules/components_api_validation.validation.md#context)) => `Promise`<`boolean`\>

#### Type declaration

▸ (`value`, `context`): `Promise`<`boolean`\>

Validates field.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `context` | [`Context`](../modules/components_api_validation.validation.md#context) | Context. |

##### Returns

`Promise`<`boolean`\>

Promise.
