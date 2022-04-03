[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/slotNames](../modules/components_api_slotNames.md) / SlotsNames2

# Interface: SlotsNames2<T\>

[components/api/slotNames](../modules/components_api_slotNames.md).SlotsNames2

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

## Table of contents

### Properties

- [passThroughSlots](components_api_slotNames.SlotsNames2.md#passthroughslots)

### Methods

- [has](components_api_slotNames.SlotsNames2.md#has)
- [hasSome](components_api_slotNames.SlotsNames2.md#hassome)

## Properties

### passThroughSlots

• `Readonly` **passThroughSlots**: `nevers`

## Methods

### has

▸ `Readonly` **has**(`name`): `boolean`

Checks that slot exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `T` | Slot name. |

#### Returns

`boolean`

_True_ if slot exists, _false_ otherwise.

___

### hasSome

▸ `Readonly` **hasSome**(...`names`): `boolean`

Checks that some slot exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...names` | `T`[] | Slot names. |

#### Returns

`boolean`

_True_ if slot exists, _false_ otherwise.
