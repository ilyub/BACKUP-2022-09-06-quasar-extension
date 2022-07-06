[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Sortable.extras](../modules/components_Sortable_extras.md) / [Sortable](../modules/components_Sortable_extras.Sortable.md) / VueDraggableSlots

# Interface: VueDraggableSlots

[components/Sortable.extras](../modules/components_Sortable_extras.md).[Sortable](../modules/components_Sortable_extras.Sortable.md).VueDraggableSlots

## Table of contents

### Properties

- [footer](components_Sortable_extras.Sortable.VueDraggableSlots.md#footer)
- [header](components_Sortable_extras.Sortable.VueDraggableSlots.md#header)
- [item](components_Sortable_extras.Sortable.VueDraggableSlots.md#item)

## Properties

### footer

• `Readonly` **footer**: () => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (): [`VNodes`](../modules/components_api_misc.md#vnodes)

Footer slot.

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### header

• `Readonly` **header**: () => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header slot.

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### item

• `Readonly` **item**: (`data`: [`VueDraggableItemSlotData`](components_Sortable_extras.Sortable.VueDraggableItemSlotData.md)) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`data`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Item slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`VueDraggableItemSlotData`](components_Sortable_extras.Sortable.VueDraggableItemSlotData.md) | Data. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.
