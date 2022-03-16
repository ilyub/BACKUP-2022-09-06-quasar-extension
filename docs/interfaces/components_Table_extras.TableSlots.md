[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / TableSlots

# Interface: TableSlots<T\>

[components/Table.extras](../modules/components_Table_extras.md).TableSlots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

## Hierarchy

- `Omit`<`QTableSlots`, ``"body-cell"``\>

  ↳ **`TableSlots`**

## Table of contents

### Methods

- [body-cell](components_Table_extras.TableSlots.md#body-cell)
- [steady-bottom](components_Table_extras.TableSlots.md#steady-bottom)

## Methods

### body-cell

▸ `Readonly` **body-cell**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Body cell slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyCellSlotData`](components_Table_extras.BodyCellSlotData.md)<`T`\> | Scope. |

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Node.

___

### steady-bottom

▸ `Readonly` **steady-bottom**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Steady bottom slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`SteadyBottomSlotData`](components_Table_extras.SteadyBottomSlotData.md) | Scope. |

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Node.
