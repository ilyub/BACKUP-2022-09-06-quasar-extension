[Quasar extension](../index.md) / [Exports](../modules.md) / [components/PageTable.extras](../modules/components_PageTable_extras.md) / PageTableSlots

# Interface: PageTableSlots<T\>

[components/PageTable.extras](../modules/components_PageTable_extras.md).PageTableSlots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- `Omit`<`QTableSlots`, ``"body-cell"``\>

  ↳ **`PageTableSlots`**

## Table of contents

### Methods

- [body-cell](components_PageTable_extras.PageTableSlots.md#body-cell)

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
