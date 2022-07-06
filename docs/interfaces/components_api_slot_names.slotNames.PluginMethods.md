[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/slot-names](../modules/components_api_slot_names.md) / [slotNames](../modules/components_api_slot_names.slotNames.md) / PluginMethods

# Interface: PluginMethods<T\>

[components/api/slot-names](../modules/components_api_slot_names.md).[slotNames](../modules/components_api_slot_names.slotNames.md).PluginMethods

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

## Table of contents

### Properties

- [has](components_api_slot_names.slotNames.PluginMethods.md#has)
- [hasSome](components_api_slot_names.slotNames.PluginMethods.md#hassome)
- [passThroughSlots](components_api_slot_names.slotNames.PluginMethods.md#passthroughslots)

## Properties

### has

• `Readonly` **has**: (`name`: `T`) => `boolean`

#### Type declaration

▸ (`name`): `boolean`

Checks if slot exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `T` | Slot name. |

##### Returns

`boolean`

_True_ if slot exists, _false_ otherwise.

___

### hasSome

• `Readonly` **hasSome**: (...`names`: readonly `T`[]) => `boolean`

#### Type declaration

▸ (...`names`): `boolean`

Checks if some slot exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...names` | readonly `T`[] | Slot names. |

##### Returns

`boolean`

_True_ if slot exists, _false_ otherwise.

___

### passThroughSlots

• `Readonly` **passThroughSlots**: `nevers`
