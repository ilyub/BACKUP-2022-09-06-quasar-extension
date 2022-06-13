[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Sortable.extras](../modules/components_Sortable_extras.md) / [Sortable](../modules/components_Sortable_extras.Sortable.md) / OwnSlots

# Interface: OwnSlots<T\>

[components/Sortable.extras](../modules/components_Sortable_extras.md).[Sortable](../modules/components_Sortable_extras.Sortable.md).OwnSlots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- **`OwnSlots`**

  ↳ [`Slots`](components_Sortable_extras.Sortable.Slots.md)

## Table of contents

### Methods

- [footer](components_Sortable_extras.Sortable.OwnSlots.md#footer)
- [header](components_Sortable_extras.Sortable.OwnSlots.md#header)
- [item](components_Sortable_extras.Sortable.OwnSlots.md#item)

## Methods

### footer

▸ `Readonly` **footer**(): [`VNodes`](../modules/components_api_misc.md#vnodes)

Footer slot.

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### header

▸ `Readonly` **header**(): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header slot.

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### item

▸ `Readonly` **item**(`data`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Item slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ItemSlotData`](components_Sortable_extras.Sortable.ItemSlotData.md)<`T`\> | Data. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.
