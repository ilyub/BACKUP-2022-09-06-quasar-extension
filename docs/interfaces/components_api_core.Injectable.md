[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/core](../modules/components_api_core.md) / Injectable

# Interface: Injectable<T\>

[components/api/core](../modules/components_api_core.md).Injectable

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [inject](components_api_core.Injectable.md#inject)
- [provide](components_api_core.Injectable.md#provide)
- [testProvide](components_api_core.Injectable.md#testprovide)

## Methods

### inject

▸ `Readonly` **inject**(): `T`

Injects settings.

#### Returns

`T`

Settings.

___

### provide

▸ `Readonly` **provide**(`value`): `void`

Provides value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Default value. |

#### Returns

`void`

___

### testProvide

▸ `Readonly` **testProvide**(`value`): `IndexedObject`<`unknown`\>

Returns provide value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`IndexedObject`<`unknown`\>

Provide object.
