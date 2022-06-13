[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/slot-names](components_api_slot_names.md) / slotNames

# Namespace: slotNames

[components/api/slot-names](components_api_slot_names.md).slotNames

## Table of contents

### Interfaces

- [PluginMethods](../interfaces/components_api_slot_names.slotNames.PluginMethods.md)

### Type aliases

- [Plugin](components_api_slot_names.slotNames.md#plugin)
- [UsableSlots](components_api_slot_names.slotNames.md#usableslots)

## Type aliases

### Plugin

Ƭ **Plugin**<`T`\>: `ComputedRef`<[`PluginMethods`](../interfaces/components_api_slot_names.slotNames.PluginMethods.md)<`T`\> & [`UsableSlots`](components_api_slot_names.slotNames.md#usableslots)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

___

### UsableSlots

Ƭ **UsableSlots**<`T`\>: { readonly [K in T as CamelCase<K\>]: K }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |
