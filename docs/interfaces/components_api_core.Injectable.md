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
- [test](components_api_core.Injectable.md#test)

## Methods

### inject

▸ `Readonly` **inject**(): `ComputedRef`<`T`\>

Injects settings.

#### Returns

`ComputedRef`<`T`\>

Settings.

___

### provide

▸ `Readonly` **provide**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => `T` | Settings. |

#### Returns

`void`

___

### test

▸ `Readonly` **test**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Rec`<`symbol`, `unknown`\> | Provide option. |
| `settings` | `T` | Settings. |

#### Returns

`void`
