[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/validation.internal](../modules/components_api_validation_internal.md) / Plugin

# Interface: Plugin<T\>

[components/api/validation.internal](../modules/components_api_validation_internal.md).Plugin

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [rules](components_api_validation_internal.Plugin.md#rules)
- [validate](components_api_validation_internal.Plugin.md#validate)
- [validateAsync](components_api_validation_internal.Plugin.md#validateasync)

## Properties

### rules

• `Readonly` **rules**: `ComputedRef`<[`ValidationRules`](../modules/components_api_validation_internal.md#validationrules)<`unknown`\>\>

___

### validate

• `Readonly` **validate**: (`value`: `T`, `context`: [`Context`](../enums/components_api_validation_internal.Context.md)) => `void`

#### Type declaration

▸ (`value`, `context`): `void`

Validates field.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `context` | [`Context`](../enums/components_api_validation_internal.Context.md) | Context. |

##### Returns

`void`

___

### validateAsync

• `Readonly` **validateAsync**: (`value`: `T`, `context`: [`Context`](../enums/components_api_validation_internal.Context.md)) => `Promise`<`boolean`\>

#### Type declaration

▸ (`value`, `context`): `Promise`<`boolean`\>

Validates field.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `context` | [`Context`](../enums/components_api_validation_internal.Context.md) | Context. |

##### Returns

`Promise`<`boolean`\>

Promise.
