[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / TableParentProps

# Interface: TableParentProps

[components/Table.extras](../modules/components_Table_extras.md).TableParentProps

## Hierarchy

- `Omit`<`QTableProps`, ``"binaryStateSort"`` \| ``"columns"`` \| ``"flat"`` \| ``"onUpdate:pagination"`` \| ``"onUpdate:selected"`` \| ``"pagination"`` \| ``"rowKey"`` \| ``"rows"`` \| ``"selected"`` \| ``"selection"`` \| ``"square"``\>

  ↳ **`TableParentProps`**

  ↳↳ [`TableProps`](components_Table_extras.TableProps.md)

## Table of contents

### Properties

- [bordered](components_Table_extras.TableParentProps.md#bordered)
- [cardClass](components_Table_extras.TableParentProps.md#cardclass)
- [cardContainerClass](components_Table_extras.TableParentProps.md#cardcontainerclass)
- [cardContainerStyle](components_Table_extras.TableParentProps.md#cardcontainerstyle)
- [cardStyle](components_Table_extras.TableParentProps.md#cardstyle)
- [color](components_Table_extras.TableParentProps.md#color)
- [columnSortOrder](components_Table_extras.TableParentProps.md#columnsortorder)
- [dark](components_Table_extras.TableParentProps.md#dark)
- [dense](components_Table_extras.TableParentProps.md#dense)
- [expanded](components_Table_extras.TableParentProps.md#expanded)
- [filter](components_Table_extras.TableParentProps.md#filter)
- [filterMethod](components_Table_extras.TableParentProps.md#filtermethod)
- [fullscreen](components_Table_extras.TableParentProps.md#fullscreen)
- [grid](components_Table_extras.TableParentProps.md#grid)
- [gridHeader](components_Table_extras.TableParentProps.md#gridheader)
- [hideBottom](components_Table_extras.TableParentProps.md#hidebottom)
- [hideHeader](components_Table_extras.TableParentProps.md#hideheader)
- [hideNoData](components_Table_extras.TableParentProps.md#hidenodata)
- [hidePagination](components_Table_extras.TableParentProps.md#hidepagination)
- [hideSelectedBanner](components_Table_extras.TableParentProps.md#hideselectedbanner)
- [iconFirstPage](components_Table_extras.TableParentProps.md#iconfirstpage)
- [iconLastPage](components_Table_extras.TableParentProps.md#iconlastpage)
- [iconNextPage](components_Table_extras.TableParentProps.md#iconnextpage)
- [iconPrevPage](components_Table_extras.TableParentProps.md#iconprevpage)
- [loading](components_Table_extras.TableParentProps.md#loading)
- [loadingLabel](components_Table_extras.TableParentProps.md#loadinglabel)
- [noDataLabel](components_Table_extras.TableParentProps.md#nodatalabel)
- [noResultsLabel](components_Table_extras.TableParentProps.md#noresultslabel)
- [noRouteFullscreenExit](components_Table_extras.TableParentProps.md#noroutefullscreenexit)
- [paginationLabel](components_Table_extras.TableParentProps.md#paginationlabel)
- [rowsPerPageLabel](components_Table_extras.TableParentProps.md#rowsperpagelabel)
- [rowsPerPageOptions](components_Table_extras.TableParentProps.md#rowsperpageoptions)
- [selectedRowsLabel](components_Table_extras.TableParentProps.md#selectedrowslabel)
- [separator](components_Table_extras.TableParentProps.md#separator)
- [sortMethod](components_Table_extras.TableParentProps.md#sortmethod)
- [tableClass](components_Table_extras.TableParentProps.md#tableclass)
- [tableColspan](components_Table_extras.TableParentProps.md#tablecolspan)
- [tableHeaderClass](components_Table_extras.TableParentProps.md#tableheaderclass)
- [tableHeaderStyle](components_Table_extras.TableParentProps.md#tableheaderstyle)
- [tableStyle](components_Table_extras.TableParentProps.md#tablestyle)
- [title](components_Table_extras.TableParentProps.md#title)
- [titleClass](components_Table_extras.TableParentProps.md#titleclass)
- [virtualScroll](components_Table_extras.TableParentProps.md#virtualscroll)
- [virtualScrollItemSize](components_Table_extras.TableParentProps.md#virtualscrollitemsize)
- [virtualScrollSliceRatioAfter](components_Table_extras.TableParentProps.md#virtualscrollsliceratioafter)
- [virtualScrollSliceRatioBefore](components_Table_extras.TableParentProps.md#virtualscrollsliceratiobefore)
- [virtualScrollSliceSize](components_Table_extras.TableParentProps.md#virtualscrollslicesize)
- [virtualScrollStickySizeEnd](components_Table_extras.TableParentProps.md#virtualscrollstickysizeend)
- [virtualScrollStickySizeStart](components_Table_extras.TableParentProps.md#virtualscrollstickysizestart)
- [virtualScrollTarget](components_Table_extras.TableParentProps.md#virtualscrolltarget)
- [visibleColumns](components_Table_extras.TableParentProps.md#visiblecolumns)
- [wrapCells](components_Table_extras.TableParentProps.md#wrapcells)

### Methods

- [onRequest](components_Table_extras.TableParentProps.md#onrequest)
- [onRowClick](components_Table_extras.TableParentProps.md#onrowclick)
- [onRowContextmenu](components_Table_extras.TableParentProps.md#onrowcontextmenu)
- [onRowDblclick](components_Table_extras.TableParentProps.md#onrowdblclick)
- [onSelection](components_Table_extras.TableParentProps.md#onselection)
- [onUpdate:expanded](components_Table_extras.TableParentProps.md#onupdate:expanded)
- [onVirtualScroll](components_Table_extras.TableParentProps.md#onvirtualscroll)

## Properties

### bordered

• `Optional` **bordered**: `boolean`

Applies a default border to the component

#### Inherited from

Omit.bordered

___

### cardClass

• `Optional` **cardClass**: `VueClassProp`

CSS classes to apply to the card (when in grid mode) or container card (when not in grid mode)

#### Inherited from

Omit.cardClass

___

### cardContainerClass

• `Optional` **cardContainerClass**: `VueClassProp`

CSS classes to apply to the cards container (when in grid mode)

#### Inherited from

Omit.cardContainerClass

___

### cardContainerStyle

• `Optional` **cardContainerStyle**: `VueStyleProp`

CSS style to apply to the cards container (when in grid mode)

#### Inherited from

Omit.cardContainerStyle

___

### cardStyle

• `Optional` **cardStyle**: `VueStyleProp`

CSS style to apply to the card (when in grid mode) or container card (when not in grid mode)

#### Inherited from

Omit.cardStyle

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette
Default value: grey-8

#### Inherited from

Omit.color

___

### columnSortOrder

• `Optional` **columnSortOrder**: ``"ad"`` \| ``"da"``

Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); It gets applied to all columns unless a column has its own sortOrder specified in the 'columns' definition prop
Default value: ad

#### Inherited from

Omit.columnSortOrder

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

Omit.dark

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; Connect with $q.screen for responsive behavior

#### Inherited from

Omit.dense

___

### expanded

• `Optional` **expanded**: `any`[]

Keeps the array with expanded rows keys
Default value: []

#### Inherited from

Omit.expanded

___

### filter

• `Optional` **filter**: `any`

String/Object to filter table with; When using an Object it requires 'filter-method' to also be specified since it will be a custom filtering

#### Inherited from

Omit.filter

___

### filterMethod

• `Optional` **filterMethod**: (`rows`: `any`[], `terms`: `any`, `cols`: `any`[], `getCellValue`: (`col`: `any`, `row`: `any`) => `any`) => `any`[]

#### Type declaration

▸ (`rows`, `terms`, `cols`, `getCellValue`): `any`[]

The actual filtering mechanism; For best performance, reference it from your scope and do not define it inline
Default value: (see source code)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `any`[] | Array of rows |
| `terms` | `any` | Terms to filter with (is essentially the 'filter' prop value) |
| `cols` | `any`[] | Column definitions |
| `getCellValue` | (`col`: `any`, `row`: `any`) => `any` | Optional function to get a cell value |

##### Returns

`any`[]

Filtered rows

#### Inherited from

Omit.filterMethod

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

Fullscreen mode

#### Inherited from

Omit.fullscreen

___

### grid

• `Optional` **grid**: `boolean`

Display data as a grid instead of the default table

#### Inherited from

Omit.grid

___

### gridHeader

• `Optional` **gridHeader**: `boolean`

Display header for grid-mode also

#### Inherited from

Omit.gridHeader

___

### hideBottom

• `Optional` **hideBottom**: `boolean`

Hide table bottom layer regardless of what it has to display

#### Inherited from

Omit.hideBottom

___

### hideHeader

• `Optional` **hideHeader**: `boolean`

Hide table header layer

#### Inherited from

Omit.hideHeader

___

### hideNoData

• `Optional` **hideNoData**: `boolean`

Hide the default no data bottom layer

#### Inherited from

Omit.hideNoData

___

### hidePagination

• `Optional` **hidePagination**: `boolean`

Hide the pagination controls at the bottom

#### Inherited from

Omit.hidePagination

___

### hideSelectedBanner

• `Optional` **hideSelectedBanner**: `boolean`

Hide the selected rows banner (if any)

#### Inherited from

Omit.hideSelectedBanner

___

### iconFirstPage

• `Optional` **iconFirstPage**: `string`

Icon name following Quasar convention for stepping to first page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

Omit.iconFirstPage

___

### iconLastPage

• `Optional` **iconLastPage**: `string`

Icon name following Quasar convention for stepping to last page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

Omit.iconLastPage

___

### iconNextPage

• `Optional` **iconNextPage**: `string`

Icon name following Quasar convention for stepping to next page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

Omit.iconNextPage

___

### iconPrevPage

• `Optional` **iconPrevPage**: `string`

Icon name following Quasar convention for stepping to previous page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

Omit.iconPrevPage

___

### loading

• `Optional` **loading**: `boolean`

Put Table into 'loading' state; Notify the user something is happening behind the scenes

#### Inherited from

Omit.loading

___

### loadingLabel

• `Optional` **loadingLabel**: `string`

Override default text to display when table is in loading state (see 'loading' prop)

#### Inherited from

Omit.loadingLabel

___

### noDataLabel

• `Optional` **noDataLabel**: `string`

Override default text to display when no data is available

#### Inherited from

Omit.noDataLabel

___

### noResultsLabel

• `Optional` **noResultsLabel**: `string`

Override default text to display when user filters the table and no matched results are found

#### Inherited from

Omit.noResultsLabel

___

### noRouteFullscreenExit

• `Optional` **noRouteFullscreenExit**: `boolean`

Changing route app won't exit fullscreen

#### Inherited from

Omit.noRouteFullscreenExit

___

### paginationLabel

• `Optional` **paginationLabel**: (`firstRowIndex`: `number`, `endRowIndex`: `number`, `totalRowsNumber`: `number`) => `string`

#### Type declaration

▸ (`firstRowIndex`, `endRowIndex`, `totalRowsNumber`): `string`

Text to override default pagination label at bottom of table (unless 'pagination' scoped slot is used); For best performance, reference it from your scope and do not define it inline

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstRowIndex` | `number` | Index of first displayed row |
| `endRowIndex` | `number` | Index of last displayed row |
| `totalRowsNumber` | `number` | Number of total rows available in data |

##### Returns

`string`

Label to display

#### Inherited from

Omit.paginationLabel

___

### rowsPerPageLabel

• `Optional` **rowsPerPageLabel**: `string`

Text to override default rows per page label at bottom of table

#### Inherited from

Omit.rowsPerPageLabel

___

### rowsPerPageOptions

• `Optional` **rowsPerPageOptions**: `any`[]

Options for user to pick (Numbers); Number 0 means 'Show all rows in one page'
Default value: [ 3, 5, 7, 10, 15, 20, 25, 50, 0 ]

#### Inherited from

Omit.rowsPerPageOptions

___

### selectedRowsLabel

• `Optional` **selectedRowsLabel**: (`numberOfRows`: `number`) => `string`

#### Type declaration

▸ (`numberOfRows`): `string`

Text to display when user selected at least one row; For best performance, reference it from your scope and do not define it inline

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numberOfRows` | `number` | Number of rows available |

##### Returns

`string`

Label to display

#### Inherited from

Omit.selectedRowsLabel

___

### separator

• `Optional` **separator**: ``"none"`` \| ``"horizontal"`` \| ``"vertical"`` \| ``"cell"``

Use a separator/border between rows, columns or all cells
Default value: horizontal

#### Inherited from

Omit.separator

___

### sortMethod

• `Optional` **sortMethod**: (`rows`: `any`[], `sortBy`: `string`, `descending`: `boolean`) => `any`[]

#### Type declaration

▸ (`rows`, `sortBy`, `descending`): `any`[]

The actual sort mechanism. Function (rows, sortBy, descending) => sorted rows; For best performance, reference it from your scope and do not define it inline
Default value: (see source code)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `any`[] | Array with rows |
| `sortBy` | `string` | Column name (from column definition) |
| `descending` | `boolean` | Is sorting in descending order? |

##### Returns

`any`[]

Sorted rows

#### Inherited from

Omit.sortMethod

___

### tableClass

• `Optional` **tableClass**: `VueClassProp`

CSS classes to apply to native HTML <table> element's wrapper (which is a DIV)

#### Inherited from

Omit.tableClass

___

### tableColspan

• `Optional` **tableColspan**: `string` \| `number`

The number of columns in the table (you need this if you use table-layout: fixed)

#### Inherited from

Omit.tableColspan

___

### tableHeaderClass

• `Optional` **tableHeaderClass**: `VueClassProp`

CSS classes to apply to header of native HTML <table> (which is a TR)

#### Inherited from

Omit.tableHeaderClass

___

### tableHeaderStyle

• `Optional` **tableHeaderStyle**: `VueStyleProp`

CSS style to apply to header of native HTML <table> (which is a TR)

#### Inherited from

Omit.tableHeaderStyle

___

### tableStyle

• `Optional` **tableStyle**: `VueStyleProp`

CSS style to apply to native HTML <table> element's wrapper (which is a DIV)

#### Inherited from

Omit.tableStyle

___

### title

• `Optional` **title**: `string`

Table title

#### Inherited from

Omit.title

___

### titleClass

• `Optional` **titleClass**: `VueClassProp`

CSS classes to apply to the title (if using 'title' prop)

#### Inherited from

Omit.titleClass

___

### virtualScroll

• `Optional` **virtualScroll**: `boolean`

Display data using QVirtualScroll (for non-grid mode only)

#### Inherited from

Omit.virtualScroll

___

### virtualScrollItemSize

• `Optional` **virtualScrollItemSize**: `string` \| `number`

Default size in pixels of a row; This value is used for rendering the initial table; Try to use a value close to the minimum size of a row
Default value: 48 (24 if dense)

#### Inherited from

Omit.virtualScrollItemSize

___

### virtualScrollSliceRatioAfter

• `Optional` **virtualScrollSliceRatioAfter**: `string` \| `number`

Ratio of number of rows in visible zone to render after it
Default value: 1

#### Inherited from

Omit.virtualScrollSliceRatioAfter

___

### virtualScrollSliceRatioBefore

• `Optional` **virtualScrollSliceRatioBefore**: `string` \| `number`

Ratio of number of rows in visible zone to render before it
Default value: 1

#### Inherited from

Omit.virtualScrollSliceRatioBefore

___

### virtualScrollSliceSize

• `Optional` **virtualScrollSliceSize**: `string` \| `number`

Minimum number of rows to render in the virtual list
Default value: 30

#### Inherited from

Omit.virtualScrollSliceSize

___

### virtualScrollStickySizeEnd

• `Optional` **virtualScrollStickySizeEnd**: `string` \| `number`

Size in pixels of the sticky footer part (if using one); A correct value will improve scroll precision
Default value: 0

#### Inherited from

Omit.virtualScrollStickySizeEnd

___

### virtualScrollStickySizeStart

• `Optional` **virtualScrollStickySizeStart**: `string` \| `number`

Size in pixels of the sticky header (if using one); A correct value will improve scroll precision
Default value: 0

#### Inherited from

Omit.virtualScrollStickySizeStart

___

### virtualScrollTarget

• `Optional` **virtualScrollTarget**: `string` \| `Element`

CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one

#### Inherited from

Omit.virtualScrollTarget

___

### visibleColumns

• `Optional` **visibleColumns**: `any`[]

Array of Strings defining column names ('name' property of each column from 'columns' prop definitions); Columns marked as 'required' are not affected by this property

#### Inherited from

Omit.visibleColumns

___

### wrapCells

• `Optional` **wrapCells**: `boolean`

Wrap text within table cells

#### Inherited from

Omit.wrapCells

## Methods

### onRequest

▸ `Optional` **onRequest**(`requestProp`): `void`

Emitted when a server request is triggered

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestProp` | `Object` | Props of the request |
| `requestProp.pagination` | `Object` | Pagination object |
| `requestProp.pagination.descending` | `boolean` | Is sorting in descending order? |
| `requestProp.pagination.page` | `number` | Page number (1-based) |
| `requestProp.pagination.rowsPerPage` | `number` | How many rows per page? 0 means Infinite |
| `requestProp.pagination.sortBy` | `string` | Column name (from column definition) |
| `requestProp.filter` | (`rows`: `any`[], `terms`: `any`, `cols?`: `any`[], `getCellValue?`: (`col`: `any`, `row`: `any`) => `any`) => `any`[] | - |
| `requestProp.getCellValue` | (`col`: `any`, `row`: `any`) => `any` | - |

#### Returns

`void`

#### Inherited from

Omit.onRequest

___

### onRowClick

▸ `Optional` **onRowClick**(`evt`, `row`, `index`): `void`

Emitted when user clicks/taps on a row; Is not emitted when using body/row/item scoped slots

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |
| `row` | `any` | The row upon which user has clicked/tapped |
| `index` | `number` | Index of the row in the current page |

#### Returns

`void`

#### Inherited from

Omit.onRowClick

___

### onRowContextmenu

▸ `Optional` **onRowContextmenu**(`evt`, `row`, `index`): `void`

Emitted when user right clicks/long taps on a row; Is not emitted when using body/row/item scoped slots

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |
| `row` | `any` | The row upon which user has right clicked/long tapped |
| `index` | `number` | Index of the row in the current page |

#### Returns

`void`

#### Inherited from

Omit.onRowContextmenu

___

### onRowDblclick

▸ `Optional` **onRowDblclick**(`evt`, `row`, `index`): `void`

Emitted when user quickly double clicks/taps on a row; Is not emitted when using body/row/item scoped slots; Please check JS dblclick event support before using

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |
| `row` | `any` | The row upon which user has double clicked/tapped |
| `index` | `number` | Index of the row in the current page |

#### Returns

`void`

#### Inherited from

Omit.onRowDblclick

___

### onSelection

▸ `Optional` **onSelection**(`details`): `void`

Emitted when user selects/unselects row(s)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `details` | `Object` | Selection details |
| `details.added` | `boolean` | Were the rows added to selection (true) or removed from selection (false) |
| `details.evt` | `Event` | JS event object |
| `details.keys` | `any`[] | Array of the keys of rows that were selected/unselected |
| `details.rows` | `any`[] | Array of row objects that were selected/unselected |

#### Returns

`void`

#### Inherited from

Omit.onSelection

___

### onUpdate:expanded

▸ `Optional` **onUpdate:expanded**(`newExpanded`): `void`

Used by Vue on 'v-model:expanded' prop for updating its value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newExpanded` | `any`[] | The updated expanded array |

#### Returns

`void`

#### Inherited from

Omit.onUpdate:expanded

___

### onVirtualScroll

▸ `Optional` **onVirtualScroll**(`details`): `void`

Emitted when the virtual scroll occurs, if using virtual scroll

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `details` | `Object` | Object of properties on the new scroll position |
| `details.direction` | ``"decrease"`` \| ``"increase"`` | Direction of change |
| `details.from` | `number` | The index of the first list item that is rendered (0 based) |
| `details.index` | `number` | Index of the list item that was scrolled into view (0 based) |
| `details.to` | `number` | The index of the last list item that is rendered (0 based) |

#### Returns

`void`

#### Inherited from

Omit.onVirtualScroll
