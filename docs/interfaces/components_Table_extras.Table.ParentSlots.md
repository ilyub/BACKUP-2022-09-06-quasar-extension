[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / [Table](../modules/components_Table_extras.Table.md) / ParentSlots

# Interface: ParentSlots

[components/Table.extras](../modules/components_Table_extras.md).[Table](../modules/components_Table_extras.Table.md).ParentSlots

## Hierarchy

- `Omit`<`QTableSlots`, keyof [`OwnSlots`](components_Table_extras.Table.OwnSlots.md) \| \`body-cell-${string}\`\>

  ↳ **`ParentSlots`**

  ↳↳ [`Slots`](components_Table_extras.Table.Slots.md)

## Table of contents

### Methods

- [body](components_Table_extras.Table.ParentSlots.md#body)
- [bottom](components_Table_extras.Table.ParentSlots.md#bottom)
- [bottom-row](components_Table_extras.Table.ParentSlots.md#bottom-row)
- [header](components_Table_extras.Table.ParentSlots.md#header)
- [item](components_Table_extras.Table.ParentSlots.md#item)
- [loading](components_Table_extras.Table.ParentSlots.md#loading)
- [no-data](components_Table_extras.Table.ParentSlots.md#no-data)
- [pagination](components_Table_extras.Table.ParentSlots.md#pagination)
- [top](components_Table_extras.Table.ParentSlots.md#top)
- [top-left](components_Table_extras.Table.ParentSlots.md#top-left)
- [top-right](components_Table_extras.Table.ParentSlots.md#top-right)
- [top-row](components_Table_extras.Table.ParentSlots.md#top-row)
- [top-selection](components_Table_extras.Table.ParentSlots.md#top-selection)

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
