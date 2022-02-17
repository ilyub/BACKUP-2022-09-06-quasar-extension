[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Sortable.extras](../modules/components_Sortable_extras.md) / SortableSlots

# Interface: SortableSlots

[components/Sortable.extras](../modules/components_Sortable_extras.md).SortableSlots

## Hierarchy

- **`SortableSlots`**

  ↳ [`DroppableSlots`](components_Droppable_extras.DroppableSlots.md)

## Table of contents

### Methods

- [footer](components_Sortable_extras.SortableSlots.md#footer)
- [header](components_Sortable_extras.SortableSlots.md#header)
- [item](components_Sortable_extras.SortableSlots.md#item)

## Methods

### footer

▸ `Readonly` **footer**(): readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Footer slot.

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Node.

___

### header

▸ `Readonly` **header**(): readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Header slot.

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Node.

___

### item

▸ `Readonly` **item**(`data`): readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Item slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ItemSlotData`](components_Sortable_extras.ItemSlotData.md) | Data. |

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Node.
