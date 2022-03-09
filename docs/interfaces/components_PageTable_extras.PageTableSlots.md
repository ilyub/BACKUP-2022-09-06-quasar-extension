[Quasar extension](../index.md) / [Exports](../modules.md) / [components/PageTable.extras](../modules/components_PageTable_extras.md) / PageTableSlots

# Interface: PageTableSlots<T\>

[components/PageTable.extras](../modules/components_PageTable_extras.md).PageTableSlots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

## Hierarchy

- `Omit`<`QTableSlots`, ``"body-cell"``\>

  ↳ **`PageTableSlots`**

## Table of contents

### Methods

- [body-cell](components_PageTable_extras.PageTableSlots.md#body-cell)
- [steady-bottom](components_PageTable_extras.PageTableSlots.md#steady-bottom)

## Methods

### body-cell

▸ `Readonly` **body-cell**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Body cell slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyCellSlotData`](components_PageTable_extras.BodyCellSlotData.md)<`T`\> | Scope. |

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Node.

___

### steady-bottom

▸ `Readonly` **steady-bottom**(): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Steady bottom slot.

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Node.
