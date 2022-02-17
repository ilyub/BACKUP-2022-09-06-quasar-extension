[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Droppable.extras](../modules/components_Droppable_extras.md) / DroppableSlots

# Interface: DroppableSlots

[components/Droppable.extras](../modules/components_Droppable_extras.md).DroppableSlots

## Hierarchy

- [`SortableSlots`](components_Sortable_extras.SortableSlots.md)

  ↳ **`DroppableSlots`**

## Table of contents

### Methods

- [default](components_Droppable_extras.DroppableSlots.md#default)
- [footer](components_Droppable_extras.DroppableSlots.md#footer)
- [header](components_Droppable_extras.DroppableSlots.md#header)
- [item](components_Droppable_extras.DroppableSlots.md#item)

## Methods

### default

▸ `Readonly` **default**(): readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Default slot.

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Node.

___

### footer

▸ `Readonly` **footer**(): readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Footer slot.

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Node.

#### Inherited from

[SortableSlots](components_Sortable_extras.SortableSlots.md).[footer](components_Sortable_extras.SortableSlots.md#footer)

___

### header

▸ `Readonly` **header**(): readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Header slot.

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { [key: string]: `any`;  }\>[]

Node.

#### Inherited from

[SortableSlots](components_Sortable_extras.SortableSlots.md).[header](components_Sortable_extras.SortableSlots.md#header)

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

#### Inherited from

[SortableSlots](components_Sortable_extras.SortableSlots.md).[item](components_Sortable_extras.SortableSlots.md#item)
