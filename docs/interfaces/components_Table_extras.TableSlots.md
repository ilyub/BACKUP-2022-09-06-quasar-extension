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

- [body](components_Table_extras.TableSlots.md#body)
- [body-cell](components_Table_extras.TableSlots.md#body-cell)
- [body-cell-context](components_Table_extras.TableSlots.md#body-cell-context)
- [body-context](components_Table_extras.TableSlots.md#body-context)
- [body-selection](components_Table_extras.TableSlots.md#body-selection)
- [bottom](components_Table_extras.TableSlots.md#bottom)
- [bottom-row](components_Table_extras.TableSlots.md#bottom-row)
- [header](components_Table_extras.TableSlots.md#header)
- [header-cell](components_Table_extras.TableSlots.md#header-cell)
- [header-menu-append](components_Table_extras.TableSlots.md#header-menu-append)
- [header-menu-prepend](components_Table_extras.TableSlots.md#header-menu-prepend)
- [header-selection](components_Table_extras.TableSlots.md#header-selection)
- [item](components_Table_extras.TableSlots.md#item)
- [loading](components_Table_extras.TableSlots.md#loading)
- [no-data](components_Table_extras.TableSlots.md#no-data)
- [pagination](components_Table_extras.TableSlots.md#pagination)
- [steady-bottom](components_Table_extras.TableSlots.md#steady-bottom)
- [top](components_Table_extras.TableSlots.md#top)
- [top-left](components_Table_extras.TableSlots.md#top-left)
- [top-right](components_Table_extras.TableSlots.md#top-right)
- [top-row](components_Table_extras.TableSlots.md#top-row)
- [top-selection](components_Table_extras.TableSlots.md#top-selection)

## Methods

### body

▸ **body**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how a body row looks like; Suggestion: QTr + Td

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.__trClass` | `string` | Internal prop passed down to QTr (if used) |
| `scope.color` | `string` | Color name for component from the Quasar Color Palette |
| `scope.cols` | `any` | Column definitions |
| `scope.colsMap` | `any` | Column mapping (key is column name, value is column object) |
| `scope.dark` | `boolean` | Notify the component that the background is a dark color |
| `scope.dense` | `boolean` | Dense mode; occupies less space |
| `scope.expand` | `boolean` | Is row expanded? Can directly be assigned new Boolean value which changes expanded state |
| `scope.key` | `any` | Row's key |
| `scope.pageIndex` | `number` | Row's index (0 based) in the current page of the filtered and sorted table |
| `scope.row` | `any` | Row object |
| `scope.rowIndex` | `number` | Row's index (0 based) in the filtered and sorted table |
| `scope.selected` | `boolean` | (Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state |
| `scope.sort` | (`col`: `any`) => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.body

___

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

### bottom

▸ **bottom**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how table bottom looks like

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.inFullscreen` | `boolean` | Is table in fullscreen mode? |
| `scope.isFirstPage` | `boolean` | Are we on first page? |
| `scope.isLastPage` | `boolean` | Are we on last page? |
| `scope.pagesNumber` | `number` | Number of pages available |
| `scope.pagination` | `Object` | Pagination object |
| `scope.pagination.descending` | `boolean` | Is sorting in descending order? |
| `scope.pagination.page` | `number` | Page number (1-based) |
| `scope.pagination.rowsPerPage` | `number` | How many rows per page? 0 means Infinite |
| `scope.pagination.sortBy` | `string` | Column name (from column definition) |
| `scope.firstPage` | () => `void` | - |
| `scope.lastPage` | () => `void` | - |
| `scope.nextPage` | () => `void` | - |
| `scope.prevPage` | () => `void` | - |
| `scope.toggleFullscreen` | () => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.bottom

___

### bottom-row

▸ **bottom-row**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how bottom extra row looks like

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.cols` | `any` | Column definitions |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.bottom-row

___

### header

▸ **header**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how header looks like; Suggestion: QTr + QTh

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.__trClass` | `string` | Internal prop passed down to QTr (if used) |
| `scope.color` | `string` | Color name for component from the Quasar Color Palette |
| `scope.cols` | `any` | Column definitions |
| `scope.colsMap` | `any` | Column mapping (key is column name, value is column object) |
| `scope.dark` | `boolean` | Notify the component that the background is a dark color |
| `scope.dense` | `boolean` | Dense mode; occupies less space |
| `scope.expand` | `boolean` | Is row expanded? Can directly be assigned new Boolean value which changes expanded state |
| `scope.header` | `boolean` | Internal prop passed down to QTh (if used); Always 'true' |
| `scope.selected` | `boolean` | (Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state |
| `scope.sort` | (`col`: `any`) => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.header

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

### header-menu-append

▸ `Readonly` **header-menu-append**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Header menu append slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`HeaderMenuAppendSlotData`](components_Table_extras.HeaderMenuAppendSlotData.md) | Scope. |

#### Returns

readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Node.

___

### header-menu-prepend

▸ `Readonly` **header-menu-prepend**(`scope`): readonly `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Header menu prepend slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`HeaderMenuPrependSlotData`](components_Table_extras.HeaderMenuPrependSlotData.md) | Scope. |

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

### item

▸ **item**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to use for defining an item when in 'grid' mode; Suggestion: QCard

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.color` | `string` | Color name for component from the Quasar Color Palette |
| `scope.cols` | `any` | Column definitions |
| `scope.colsMap` | `any` | Column mapping (key is column name, value is column object) |
| `scope.dark` | `boolean` | Notify the component that the background is a dark color |
| `scope.dense` | `boolean` | Dense mode; occupies less space |
| `scope.expand` | `boolean` | Is row/item expanded? Can directly be assigned new Boolean value which changes expanded state |
| `scope.key` | `any` | Row/Item's key |
| `scope.pageIndex` | `number` | Row/Item's index (0 based) in the current page of the filtered and sorted table |
| `scope.row` | `any` | Row/Item object |
| `scope.rowIndex` | `number` | Row/Item's index (0 based) in the filtered and sorted table |
| `scope.selected` | `boolean` | (Only if using selection) Is row/item selected? Can directly be assigned new Boolean value which changes selection state |
| `scope.sort` | (`col`: `any`) => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.item

___

### loading

▸ **loading**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Override default effect when table is in loading state; Suggestion: QInnerLoading

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.loading

___

### no-data

▸ **no-data**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how the bottom will look like when is nothing to display

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.icon` | `string` | The suggested icon name (following Quasar convention) |
| `scope.message` | `string` | The suggested message |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.no-data

___

### pagination

▸ **pagination**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to override default pagination label and buttons

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.inFullscreen` | `boolean` | Is table in fullscreen mode? |
| `scope.isFirstPage` | `boolean` | Are we on first page? |
| `scope.isLastPage` | `boolean` | Are we on last page? |
| `scope.pagesNumber` | `number` | Number of pages available |
| `scope.pagination` | `Object` | Pagination object |
| `scope.pagination.descending` | `boolean` | Is sorting in descending order? |
| `scope.pagination.page` | `number` | Page number (1-based) |
| `scope.pagination.rowsPerPage` | `number` | How many rows per page? 0 means Infinite |
| `scope.pagination.sortBy` | `string` | Column name (from column definition) |
| `scope.firstPage` | () => `void` | - |
| `scope.lastPage` | () => `void` | - |
| `scope.nextPage` | () => `void` | - |
| `scope.prevPage` | () => `void` | - |
| `scope.toggleFullscreen` | () => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.pagination

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

___

### top

▸ **top**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how table top looks like

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.inFullscreen` | `boolean` | Is table in fullscreen mode? |
| `scope.isFirstPage` | `boolean` | Are we on first page? |
| `scope.isLastPage` | `boolean` | Are we on last page? |
| `scope.pagesNumber` | `number` | Number of pages available |
| `scope.pagination` | `Object` | Pagination object |
| `scope.pagination.descending` | `boolean` | Is sorting in descending order? |
| `scope.pagination.page` | `number` | Page number (1-based) |
| `scope.pagination.rowsPerPage` | `number` | How many rows per page? 0 means Infinite |
| `scope.pagination.sortBy` | `string` | Column name (from column definition) |
| `scope.firstPage` | () => `void` | - |
| `scope.lastPage` | () => `void` | - |
| `scope.nextPage` | () => `void` | - |
| `scope.prevPage` | () => `void` | - |
| `scope.toggleFullscreen` | () => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.top

___

### top-left

▸ **top-left**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how left part of the table top looks like

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.inFullscreen` | `boolean` | Is table in fullscreen mode? |
| `scope.isFirstPage` | `boolean` | Are we on first page? |
| `scope.isLastPage` | `boolean` | Are we on last page? |
| `scope.pagesNumber` | `number` | Number of pages available |
| `scope.pagination` | `Object` | Pagination object |
| `scope.pagination.descending` | `boolean` | Is sorting in descending order? |
| `scope.pagination.page` | `number` | Page number (1-based) |
| `scope.pagination.rowsPerPage` | `number` | How many rows per page? 0 means Infinite |
| `scope.pagination.sortBy` | `string` | Column name (from column definition) |
| `scope.firstPage` | () => `void` | - |
| `scope.lastPage` | () => `void` | - |
| `scope.nextPage` | () => `void` | - |
| `scope.prevPage` | () => `void` | - |
| `scope.toggleFullscreen` | () => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.top-left

___

### top-right

▸ **top-right**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how right part of the table top looks like

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.inFullscreen` | `boolean` | Is table in fullscreen mode? |
| `scope.isFirstPage` | `boolean` | Are we on first page? |
| `scope.isLastPage` | `boolean` | Are we on last page? |
| `scope.pagesNumber` | `number` | Number of pages available |
| `scope.pagination` | `Object` | Pagination object |
| `scope.pagination.descending` | `boolean` | Is sorting in descending order? |
| `scope.pagination.page` | `number` | Page number (1-based) |
| `scope.pagination.rowsPerPage` | `number` | How many rows per page? 0 means Infinite |
| `scope.pagination.sortBy` | `string` | Column name (from column definition) |
| `scope.firstPage` | () => `void` | - |
| `scope.lastPage` | () => `void` | - |
| `scope.nextPage` | () => `void` | - |
| `scope.prevPage` | () => `void` | - |
| `scope.toggleFullscreen` | () => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.top-right

___

### top-row

▸ **top-row**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how top extra row looks like

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.cols` | `any` | Column definitions |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.top-row

___

### top-selection

▸ **top-selection**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot to define how top table section looks like when user has selected at least one row

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.inFullscreen` | `boolean` | Is table in fullscreen mode? |
| `scope.isFirstPage` | `boolean` | Are we on first page? |
| `scope.isLastPage` | `boolean` | Are we on last page? |
| `scope.pagesNumber` | `number` | Number of pages available |
| `scope.pagination` | `Object` | Pagination object |
| `scope.pagination.descending` | `boolean` | Is sorting in descending order? |
| `scope.pagination.page` | `number` | Page number (1-based) |
| `scope.pagination.rowsPerPage` | `number` | How many rows per page? 0 means Infinite |
| `scope.pagination.sortBy` | `string` | Column name (from column definition) |
| `scope.firstPage` | () => `void` | - |
| `scope.lastPage` | () => `void` | - |
| `scope.nextPage` | () => `void` | - |
| `scope.prevPage` | () => `void` | - |
| `scope.toggleFullscreen` | () => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

Omit.top-selection
