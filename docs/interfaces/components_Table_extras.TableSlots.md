[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / TableSlots

# Interface: TableSlots<T\>

[components/Table.extras](../modules/components_Table_extras.md).TableSlots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- `Omit`<`QTableSlots`, ``"body-cell"`` \| ``"body-selection"`` \| ``"header-cell"`` \| ``"header-selection"`` \| \`body-cell-${string}\`\>

  ↳ **`TableSlots`**

## Table of contents

### Methods

- [body-cell](components_Table_extras.TableSlots.md#body-cell)
- [body-cell-context](components_Table_extras.TableSlots.md#body-cell-context)
- [body-context](components_Table_extras.TableSlots.md#body-context)
- [body-selection](components_Table_extras.TableSlots.md#body-selection)
- [header-cell](components_Table_extras.TableSlots.md#header-cell)
- [header-selection](components_Table_extras.TableSlots.md#header-selection)
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

### body-cell-context

▸ `Readonly` **body-cell-context**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Body context menu slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyCellContextSlotData`](components_Table_extras.BodyCellContextSlotData.md)<`T`\> | Scope. |

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Node.

___

### body-context

▸ `Readonly` **body-context**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Body context menu slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyContextSlotData`](components_Table_extras.BodyContextSlotData.md)<`T`\> | Scope. |

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Node.

___

### body-selection

▸ `Readonly` **body-selection**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Body selection slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodySelectionSlotData`](components_Table_extras.BodySelectionSlotData.md)<`T`\> | Scope. |

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Node.

___

### header-cell

▸ `Readonly` **header-cell**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Header cell slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`HeaderCellSlotData`](components_Table_extras.HeaderCellSlotData.md)<`T`\> | Scope. |

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Node.

___

### header-selection

▸ `Readonly` **header-selection**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Header selection slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`HeaderSelectionSlotData`](components_Table_extras.HeaderSelectionSlotData.md) | Scope. |

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
