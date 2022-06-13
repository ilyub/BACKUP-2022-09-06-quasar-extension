[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / [Table](../modules/components_Table_extras.Table.md) / Slots

# Interface: Slots<T\>

[components/Table.extras](../modules/components_Table_extras.md).[Table](../modules/components_Table_extras.Table.md).Slots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- [`ParentSlots`](components_Table_extras.Table.ParentSlots.md)

- [`OwnSlots`](components_Table_extras.Table.OwnSlots.md)<`T`\>

  ↳ **`Slots`**

## Table of contents

### Methods

- [body](components_Table_extras.Table.Slots.md#body)
- [body-cell](components_Table_extras.Table.Slots.md#body-cell)
- [body-cell-context](components_Table_extras.Table.Slots.md#body-cell-context)
- [body-context](components_Table_extras.Table.Slots.md#body-context)
- [body-selection](components_Table_extras.Table.Slots.md#body-selection)
- [bottom](components_Table_extras.Table.Slots.md#bottom)
- [bottom-row](components_Table_extras.Table.Slots.md#bottom-row)
- [header](components_Table_extras.Table.Slots.md#header)
- [header-cell](components_Table_extras.Table.Slots.md#header-cell)
- [header-menu-append](components_Table_extras.Table.Slots.md#header-menu-append)
- [header-menu-prepend](components_Table_extras.Table.Slots.md#header-menu-prepend)
- [header-selection](components_Table_extras.Table.Slots.md#header-selection)
- [item](components_Table_extras.Table.Slots.md#item)
- [loading](components_Table_extras.Table.Slots.md#loading)
- [no-data](components_Table_extras.Table.Slots.md#no-data)
- [pagination](components_Table_extras.Table.Slots.md#pagination)
- [steady-bottom](components_Table_extras.Table.Slots.md#steady-bottom)
- [top](components_Table_extras.Table.Slots.md#top)
- [top-left](components_Table_extras.Table.Slots.md#top-left)
- [top-right](components_Table_extras.Table.Slots.md#top-right)
- [top-row](components_Table_extras.Table.Slots.md#top-row)
- [top-selection](components_Table_extras.Table.Slots.md#top-selection)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[body](components_Table_extras.Table.ParentSlots.md#body)

___

### body-cell

▸ `Readonly` **body-cell**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body cell slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyCellSlotData`](components_Table_extras.Table.BodyCellSlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[body-cell](components_Table_extras.Table.OwnSlots.md#body-cell)

___

### body-cell-context

▸ `Readonly` **body-cell-context**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body cell context slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyCellSlotData`](components_Table_extras.Table.BodyCellSlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[body-cell-context](components_Table_extras.Table.OwnSlots.md#body-cell-context)

___

### body-context

▸ `Readonly` **body-context**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodySlotData`](components_Table_extras.Table.BodySlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[body-context](components_Table_extras.Table.OwnSlots.md#body-context)

___

### body-selection

▸ `Readonly` **body-selection**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body selection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodySlotData`](components_Table_extras.Table.BodySlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[body-selection](components_Table_extras.Table.OwnSlots.md#body-selection)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[bottom](components_Table_extras.Table.ParentSlots.md#bottom)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[bottom-row](components_Table_extras.Table.ParentSlots.md#bottom-row)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[header](components_Table_extras.Table.ParentSlots.md#header)

___

### header-cell

▸ `Readonly` **header-cell**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header cell slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`HeaderCellSlotData`](components_Table_extras.Table.HeaderCellSlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[header-cell](components_Table_extras.Table.OwnSlots.md#header-cell)

___

### header-menu-append

▸ `Readonly` **header-menu-append**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header menu append slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[header-menu-append](components_Table_extras.Table.OwnSlots.md#header-menu-append)

___

### header-menu-prepend

▸ `Readonly` **header-menu-prepend**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header menu prepend slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[header-menu-prepend](components_Table_extras.Table.OwnSlots.md#header-menu-prepend)

___

### header-selection

▸ `Readonly` **header-selection**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header selection slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[header-selection](components_Table_extras.Table.OwnSlots.md#header-selection)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[item](components_Table_extras.Table.ParentSlots.md#item)

___

### loading

▸ **loading**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Override default effect when table is in loading state; Suggestion: QInnerLoading

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[loading](components_Table_extras.Table.ParentSlots.md#loading)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[no-data](components_Table_extras.Table.ParentSlots.md#no-data)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[pagination](components_Table_extras.Table.ParentSlots.md#pagination)

___

### steady-bottom

▸ `Readonly` **steady-bottom**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Steady bottom slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[steady-bottom](components_Table_extras.Table.OwnSlots.md#steady-bottom)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[top](components_Table_extras.Table.ParentSlots.md#top)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[top-left](components_Table_extras.Table.ParentSlots.md#top-left)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[top-right](components_Table_extras.Table.ParentSlots.md#top-right)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[top-row](components_Table_extras.Table.ParentSlots.md#top-row)

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

[ParentSlots](components_Table_extras.Table.ParentSlots.md).[top-selection](components_Table_extras.Table.ParentSlots.md#top-selection)
