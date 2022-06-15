[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Sortable.extras](components_Sortable_extras.md) / Sortable

# Namespace: Sortable

[components/Sortable.extras](components_Sortable_extras.md).Sortable

## Table of contents

### Interfaces

- [Global](../interfaces/components_Sortable_extras.Sortable.Global.md)
- [ItemSlotData](../interfaces/components_Sortable_extras.Sortable.ItemSlotData.md)
- [Move](../interfaces/components_Sortable_extras.Sortable.Move.md)
- [OwnProps](../interfaces/components_Sortable_extras.Sortable.OwnProps.md)
- [OwnSlots](../interfaces/components_Sortable_extras.Sortable.OwnSlots.md)
- [ParentProps](../interfaces/components_Sortable_extras.Sortable.ParentProps.md)
- [ParentSlots](../interfaces/components_Sortable_extras.Sortable.ParentSlots.md)
- [Props](../interfaces/components_Sortable_extras.Sortable.Props.md)
- [Settings](../interfaces/components_Sortable_extras.Sortable.Settings.md)
- [Slots](../interfaces/components_Sortable_extras.Sortable.Slots.md)
- [VueDraggableElement](../interfaces/components_Sortable_extras.Sortable.VueDraggableElement.md)
- [VueDraggableItemSlotData](../interfaces/components_Sortable_extras.Sortable.VueDraggableItemSlotData.md)
- [VueDraggableProps](../interfaces/components_Sortable_extras.Sortable.VueDraggableProps.md)
- [VueDraggableSlots](../interfaces/components_Sortable_extras.Sortable.VueDraggableSlots.md)

### Variables

- [defaultSettings](components_Sortable_extras.Sortable.md#defaultsettings)

### Functions

- [injectSettings](components_Sortable_extras.Sortable.md#injectsettings)
- [provideSettings](components_Sortable_extras.Sortable.md#providesettings)
- [testProvideSettings](components_Sortable_extras.Sortable.md#testprovidesettings)

## Variables

### defaultSettings

• `Const` **defaultSettings**: `ComputedRef`<[`Settings`](../interfaces/components_Sortable_extras.Sortable.Settings.md)\>

## Functions

### injectSettings

▸ **injectSettings**(): `ComputedRef`<[`Settings`](../interfaces/components_Sortable_extras.Sortable.Settings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`Settings`](../interfaces/components_Sortable_extras.Sortable.Settings.md)\>

Settings.

___

### provideSettings

▸ **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Sortable_extras.Sortable.Settings.md)\> | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ **testProvideSettings**(`settings`): `IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Sortable_extras.Sortable.Settings.md)\>\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Sortable_extras.Sortable.Settings.md)\> | Settings. |

#### Returns

`IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Sortable_extras.Sortable.Settings.md)\>\>

Provide object.
