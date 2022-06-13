[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/slot-names](../modules/components_api_slot_names.md) / [slotNames](../modules/components_api_slot_names.slotNames.md) / PluginMethods

# Interface: PluginMethods<T\>

[components/api/slot-names](../modules/components_api_slot_names.md).[slotNames](../modules/components_api_slot_names.slotNames.md).PluginMethods

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

## Table of contents

### Properties

- [passThroughSlots](components_api_slot_names.slotNames.PluginMethods.md#passthroughslots)

### Methods

- [has](components_api_slot_names.slotNames.PluginMethods.md#has)
- [hasSome](components_api_slot_names.slotNames.PluginMethods.md#hassome)

## Properties

### passThroughSlots

• `Readonly` **passThroughSlots**: `nevers`

## Methods

### has

▸ `Readonly` **has**(`name`): `boolean`

Checks if slot exists.

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

Checks if some slot exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...names` | `T`[] | Slot names. |

#### Returns

`boolean`

_True_ if slot exists, _false_ otherwise.
