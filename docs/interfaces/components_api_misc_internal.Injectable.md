[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/misc.internal](../modules/components_api_misc_internal.md) / Injectable

# Interface: Injectable<T\>

[components/api/misc.internal](../modules/components_api_misc_internal.md).Injectable

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [inject](components_api_misc_internal.Injectable.md#inject)
- [provide](components_api_misc_internal.Injectable.md#provide)
- [testProvide](components_api_misc_internal.Injectable.md#testprovide)

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

▸ `Readonly` **testProvide**(`value`): `IndexedObject`<`T`\>

Returns provide value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`IndexedObject`<`T`\>

Provide object.
