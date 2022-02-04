[Quasar Framework](../index.md) / [Exports](../modules.md) / [components/api](../modules/components_api.md) / Injectable

# Interface: Injectable<T\>

[components/api](../modules/components_api.md).Injectable

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [inject](components_api.Injectable.md#inject)
- [provide](components_api.Injectable.md#provide)
- [test](components_api.Injectable.md#test)

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
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | `T` | Settings. |

#### Returns

`void`
