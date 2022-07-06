[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/misc.internal](../modules/components_api_misc_internal.md) / Injectable

# Interface: Injectable<T\>

[components/api/misc.internal](../modules/components_api_misc_internal.md).Injectable

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [inject](components_api_misc_internal.Injectable.md#inject)
- [provide](components_api_misc_internal.Injectable.md#provide)
- [testProvide](components_api_misc_internal.Injectable.md#testprovide)

## Properties

### inject

• `Readonly` **inject**: () => `T`

#### Type declaration

▸ (): `T`

Injects settings.

##### Returns

`T`

Settings.

___

### provide

• `Readonly` **provide**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

Provides value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Default value. |

##### Returns

`void`

___

### testProvide

• `Readonly` **testProvide**: (`value`: `T`) => `IndexedObject`<`T`\>

#### Type declaration

▸ (`value`): `IndexedObject`<`T`\>

Returns provide value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

##### Returns

`IndexedObject`<`T`\>

Provide object.
