[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/slotNames

# Module: components/api/slotNames

## Table of contents

### Interfaces

- [SlotsNames2](../interfaces/components_api_slotNames.SlotsNames2.md)

### Type aliases

- [SlotsNames](components_api_slotNames.md#slotsnames)
- [SlotsNames1](components_api_slotNames.md#slotsnames1)

### Functions

- [useSlotsNames](components_api_slotNames.md#useslotsnames)

## Type aliases

### SlotsNames

Ƭ **SlotsNames**<`T`\>: [`SlotsNames1`](components_api_slotNames.md#slotsnames1)<`T`\> & [`SlotsNames2`](../interfaces/components_api_slotNames.SlotsNames2.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

___

### SlotsNames1

Ƭ **SlotsNames1**<`T`\>: { readonly [K in T as CamelCase<K\>]: K }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

## Functions

### useSlotsNames

▸ **useSlotsNames**<`T`\>(): <U\>(...`useKeys`: `U`[]) => `ComputedRef`<[`SlotsNames`](components_api_slotNames.md#slotsnames)<`U`\>\>

Slot names module.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

Slot names.

▸ <`U`\>(...`useKeys`): `ComputedRef`<[`SlotsNames`](components_api_slotNames.md#slotsnames)<`U`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` \| `number` \| `symbol` = `never` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...useKeys` | `U`[] |

##### Returns

`ComputedRef`<[`SlotsNames`](components_api_slotNames.md#slotsnames)<`U`\>\>
