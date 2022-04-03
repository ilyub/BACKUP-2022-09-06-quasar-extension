[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / TableProps

# Interface: TableProps<T\>

[components/Table.extras](../modules/components_Table_extras.md).TableProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- [`TableParentProps`](components_Table_extras.TableParentProps.md)

- [`TableOwnProps`](components_Table_extras.TableOwnProps.md)<`T`\>

  ↳ **`TableProps`**

## Table of contents

### Properties

- [binaryStateSortOff](components_Table_extras.TableProps.md#binarystatesortoff)
- [binaryStateSortOn](components_Table_extras.TableProps.md#binarystatesorton)
- [bordered](components_Table_extras.TableProps.md#bordered)
- [cardClass](components_Table_extras.TableProps.md#cardclass)
- [cardContainerClass](components_Table_extras.TableProps.md#cardcontainerclass)
- [cardContainerStyle](components_Table_extras.TableProps.md#cardcontainerstyle)
- [cardStyle](components_Table_extras.TableProps.md#cardstyle)
- [color](components_Table_extras.TableProps.md#color)
- [columnSortOrder](components_Table_extras.TableProps.md#columnsortorder)
- [columnWidths](components_Table_extras.TableProps.md#columnwidths)
- [columns](components_Table_extras.TableProps.md#columns)
- [columnsOrder](components_Table_extras.TableProps.md#columnsorder)
- [dark](components_Table_extras.TableProps.md#dark)
- [dense](components_Table_extras.TableProps.md#dense)
- [expanded](components_Table_extras.TableProps.md#expanded)
- [externalSorting](components_Table_extras.TableProps.md#externalsorting)
- [filter](components_Table_extras.TableProps.md#filter)
- [filterMethod](components_Table_extras.TableProps.md#filtermethod)
- [flatOff](components_Table_extras.TableProps.md#flatoff)
- [flatOn](components_Table_extras.TableProps.md#flaton)
- [fullscreen](components_Table_extras.TableProps.md#fullscreen)
- [grid](components_Table_extras.TableProps.md#grid)
- [gridHeader](components_Table_extras.TableProps.md#gridheader)
- [headerSeparatorOff](components_Table_extras.TableProps.md#headerseparatoroff)
- [headerSeparatorOn](components_Table_extras.TableProps.md#headerseparatoron)
- [hiddenColumns](components_Table_extras.TableProps.md#hiddencolumns)
- [hideBottom](components_Table_extras.TableProps.md#hidebottom)
- [hideHeader](components_Table_extras.TableProps.md#hideheader)
- [hideNoData](components_Table_extras.TableProps.md#hidenodata)
- [hidePagination](components_Table_extras.TableProps.md#hidepagination)
- [hideSelectedBanner](components_Table_extras.TableProps.md#hideselectedbanner)
- [iconFirstPage](components_Table_extras.TableProps.md#iconfirstpage)
- [iconLastPage](components_Table_extras.TableProps.md#iconlastpage)
- [iconNextPage](components_Table_extras.TableProps.md#iconnextpage)
- [iconPrevPage](components_Table_extras.TableProps.md#iconprevpage)
- [loading](components_Table_extras.TableProps.md#loading)
- [loadingLabel](components_Table_extras.TableProps.md#loadinglabel)
- [manageColumns](components_Table_extras.TableProps.md#managecolumns)
- [multiselect](components_Table_extras.TableProps.md#multiselect)
- [noDataLabel](components_Table_extras.TableProps.md#nodatalabel)
- [noResultsLabel](components_Table_extras.TableProps.md#noresultslabel)
- [noRouteFullscreenExit](components_Table_extras.TableProps.md#noroutefullscreenexit)
- [pagination](components_Table_extras.TableProps.md#pagination)
- [paginationLabel](components_Table_extras.TableProps.md#paginationlabel)
- [resizableColumns](components_Table_extras.TableProps.md#resizablecolumns)
- [rowKey](components_Table_extras.TableProps.md#rowkey)
- [rows](components_Table_extras.TableProps.md#rows)
- [rowsPerPageLabel](components_Table_extras.TableProps.md#rowsperpagelabel)
- [rowsPerPageOptions](components_Table_extras.TableProps.md#rowsperpageoptions)
- [selectByCheckbox](components_Table_extras.TableProps.md#selectbycheckbox)
- [selectByRowClick](components_Table_extras.TableProps.md#selectbyrowclick)
- [selected](components_Table_extras.TableProps.md#selected)
- [selectedRowsLabel](components_Table_extras.TableProps.md#selectedrowslabel)
- [separator](components_Table_extras.TableProps.md#separator)
- [sortMethod](components_Table_extras.TableProps.md#sortmethod)
- [squareOff](components_Table_extras.TableProps.md#squareoff)
- [squareOn](components_Table_extras.TableProps.md#squareon)
- [sticky](components_Table_extras.TableProps.md#sticky)
- [tableClass](components_Table_extras.TableProps.md#tableclass)
- [tableColspan](components_Table_extras.TableProps.md#tablecolspan)
- [tableHeaderClass](components_Table_extras.TableProps.md#tableheaderclass)
- [tableHeaderStyle](components_Table_extras.TableProps.md#tableheaderstyle)
- [tableStyle](components_Table_extras.TableProps.md#tablestyle)
- [title](components_Table_extras.TableProps.md#title)
- [titleClass](components_Table_extras.TableProps.md#titleclass)
- [virtualScroll](components_Table_extras.TableProps.md#virtualscroll)
- [virtualScrollItemSize](components_Table_extras.TableProps.md#virtualscrollitemsize)
- [virtualScrollSliceRatioAfter](components_Table_extras.TableProps.md#virtualscrollsliceratioafter)
- [virtualScrollSliceRatioBefore](components_Table_extras.TableProps.md#virtualscrollsliceratiobefore)
- [virtualScrollSliceSize](components_Table_extras.TableProps.md#virtualscrollslicesize)
- [virtualScrollStickySizeEnd](components_Table_extras.TableProps.md#virtualscrollstickysizeend)
- [virtualScrollStickySizeStart](components_Table_extras.TableProps.md#virtualscrollstickysizestart)
- [virtualScrollTarget](components_Table_extras.TableProps.md#virtualscrolltarget)
- [visibleColumns](components_Table_extras.TableProps.md#visiblecolumns)
- [wrapCells](components_Table_extras.TableProps.md#wrapcells)

### Methods

- [onRequest](components_Table_extras.TableProps.md#onrequest)
- [onRowClick](components_Table_extras.TableProps.md#onrowclick)
- [onRowContextmenu](components_Table_extras.TableProps.md#onrowcontextmenu)
- [onRowDblclick](components_Table_extras.TableProps.md#onrowdblclick)
- [onSelection](components_Table_extras.TableProps.md#onselection)
- [onUpdate:columnWidths](components_Table_extras.TableProps.md#onupdate:columnwidths)
- [onUpdate:columnsOrder](components_Table_extras.TableProps.md#onupdate:columnsorder)
- [onUpdate:expanded](components_Table_extras.TableProps.md#onupdate:expanded)
- [onUpdate:hiddenColumns](components_Table_extras.TableProps.md#onupdate:hiddencolumns)
- [onUpdate:pagination](components_Table_extras.TableProps.md#onupdate:pagination)
- [onUpdate:selected](components_Table_extras.TableProps.md#onupdate:selected)
- [onVirtualScroll](components_Table_extras.TableProps.md#onvirtualscroll)

## Properties

### binaryStateSortOff

• `Optional` `Readonly` **binaryStateSortOff**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[binaryStateSortOff](components_Table_extras.TableOwnProps.md#binarystatesortoff)

___

### binaryStateSortOn

• `Optional` `Readonly` **binaryStateSortOn**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[binaryStateSortOn](components_Table_extras.TableOwnProps.md#binarystatesorton)

___

### bordered

• `Optional` **bordered**: `boolean`

Applies a default border to the component

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[bordered](components_Table_extras.TableParentProps.md#bordered)

___

### cardClass

• `Optional` **cardClass**: `VueClassProp`

CSS classes to apply to the card (when in grid mode) or container card (when not in grid mode)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[cardClass](components_Table_extras.TableParentProps.md#cardclass)

___

### cardContainerClass

• `Optional` **cardContainerClass**: `VueClassProp`

CSS classes to apply to the cards container (when in grid mode)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[cardContainerClass](components_Table_extras.TableParentProps.md#cardcontainerclass)

___

### cardContainerStyle

• `Optional` **cardContainerStyle**: `VueStyleProp`

CSS style to apply to the cards container (when in grid mode)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[cardContainerStyle](components_Table_extras.TableParentProps.md#cardcontainerstyle)

___

### cardStyle

• `Optional` **cardStyle**: `VueStyleProp`

CSS style to apply to the card (when in grid mode) or container card (when not in grid mode)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[cardStyle](components_Table_extras.TableParentProps.md#cardstyle)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette
Default value: grey-8

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[color](components_Table_extras.TableParentProps.md#color)

___

### columnSortOrder

• `Optional` **columnSortOrder**: ``"ad"`` \| ``"da"``

Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); It gets applied to all columns unless a column has its own sortOrder specified in the 'columns' definition prop
Default value: ad

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[columnSortOrder](components_Table_extras.TableParentProps.md#columnsortorder)

___

### columnWidths

• `Optional` `Readonly` **columnWidths**: [`ColumnWidths`](../modules/components_Table_extras.md#columnwidths)

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[columnWidths](components_Table_extras.TableOwnProps.md#columnwidths)

___

### columns

• `Optional` `Readonly` **columns**: [`Columns`](../modules/components_Table_extras.md#columns)<`T`\>

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[columns](components_Table_extras.TableOwnProps.md#columns)

___

### columnsOrder

• `Optional` `Readonly` **columnsOrder**: [`ColumnsOrder`](../modules/components_Table_extras.md#columnsorder)

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[columnsOrder](components_Table_extras.TableOwnProps.md#columnsorder)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[dark](components_Table_extras.TableParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; Connect with $q.screen for responsive behavior

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[dense](components_Table_extras.TableParentProps.md#dense)

___

### expanded

• `Optional` **expanded**: `any`[]

Keeps the array with expanded rows keys
Default value: []

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[expanded](components_Table_extras.TableParentProps.md#expanded)

___

### externalSorting

• `Optional` `Readonly` **externalSorting**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[externalSorting](components_Table_extras.TableOwnProps.md#externalsorting)

___

### filter

• `Optional` **filter**: `any`

String/Object to filter table with; When using an Object it requires 'filter-method' to also be specified since it will be a custom filtering

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[filter](components_Table_extras.TableParentProps.md#filter)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[filterMethod](components_Table_extras.TableParentProps.md#filtermethod)

___

### flatOff

• `Optional` `Readonly` **flatOff**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[flatOff](components_Table_extras.TableOwnProps.md#flatoff)

___

### flatOn

• `Optional` `Readonly` **flatOn**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[flatOn](components_Table_extras.TableOwnProps.md#flaton)

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

Fullscreen mode

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[fullscreen](components_Table_extras.TableParentProps.md#fullscreen)

___

### grid

• `Optional` **grid**: `boolean`

Display data as a grid instead of the default table

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[grid](components_Table_extras.TableParentProps.md#grid)

___

### gridHeader

• `Optional` **gridHeader**: `boolean`

Display header for grid-mode also

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[gridHeader](components_Table_extras.TableParentProps.md#gridheader)

___

### headerSeparatorOff

• `Optional` `Readonly` **headerSeparatorOff**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[headerSeparatorOff](components_Table_extras.TableOwnProps.md#headerseparatoroff)

___

### headerSeparatorOn

• `Optional` `Readonly` **headerSeparatorOn**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[headerSeparatorOn](components_Table_extras.TableOwnProps.md#headerseparatoron)

___

### hiddenColumns

• `Optional` `Readonly` **hiddenColumns**: [`HiddenColumns`](../modules/components_Table_extras.md#hiddencolumns)

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[hiddenColumns](components_Table_extras.TableOwnProps.md#hiddencolumns)

___

### hideBottom

• `Optional` **hideBottom**: `boolean`

Hide table bottom layer regardless of what it has to display

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[hideBottom](components_Table_extras.TableParentProps.md#hidebottom)

___

### hideHeader

• `Optional` **hideHeader**: `boolean`

Hide table header layer

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[hideHeader](components_Table_extras.TableParentProps.md#hideheader)

___

### hideNoData

• `Optional` **hideNoData**: `boolean`

Hide the default no data bottom layer

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[hideNoData](components_Table_extras.TableParentProps.md#hidenodata)

___

### hidePagination

• `Optional` **hidePagination**: `boolean`

Hide the pagination controls at the bottom

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[hidePagination](components_Table_extras.TableParentProps.md#hidepagination)

___

### hideSelectedBanner

• `Optional` **hideSelectedBanner**: `boolean`

Hide the selected rows banner (if any)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[hideSelectedBanner](components_Table_extras.TableParentProps.md#hideselectedbanner)

___

### iconFirstPage

• `Optional` **iconFirstPage**: `string`

Icon name following Quasar convention for stepping to first page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[iconFirstPage](components_Table_extras.TableParentProps.md#iconfirstpage)

___

### iconLastPage

• `Optional` **iconLastPage**: `string`

Icon name following Quasar convention for stepping to last page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[iconLastPage](components_Table_extras.TableParentProps.md#iconlastpage)

___

### iconNextPage

• `Optional` **iconNextPage**: `string`

Icon name following Quasar convention for stepping to next page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[iconNextPage](components_Table_extras.TableParentProps.md#iconnextpage)

___

### iconPrevPage

• `Optional` **iconPrevPage**: `string`

Icon name following Quasar convention for stepping to previous page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[iconPrevPage](components_Table_extras.TableParentProps.md#iconprevpage)

___

### loading

• `Optional` **loading**: `boolean`

Put Table into 'loading' state; Notify the user something is happening behind the scenes

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[loading](components_Table_extras.TableParentProps.md#loading)

___

### loadingLabel

• `Optional` **loadingLabel**: `string`

Override default text to display when table is in loading state (see 'loading' prop)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[loadingLabel](components_Table_extras.TableParentProps.md#loadinglabel)

___

### manageColumns

• `Optional` `Readonly` **manageColumns**: `boolean`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[manageColumns](components_Table_extras.TableOwnProps.md#managecolumns)

___

### multiselect

• `Optional` `Readonly` **multiselect**: `boolean`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[multiselect](components_Table_extras.TableOwnProps.md#multiselect)

___

### noDataLabel

• `Optional` **noDataLabel**: `string`

Override default text to display when no data is available

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[noDataLabel](components_Table_extras.TableParentProps.md#nodatalabel)

___

### noResultsLabel

• `Optional` **noResultsLabel**: `string`

Override default text to display when user filters the table and no matched results are found

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[noResultsLabel](components_Table_extras.TableParentProps.md#noresultslabel)

___

### noRouteFullscreenExit

• `Optional` **noRouteFullscreenExit**: `boolean`

Changing route app won't exit fullscreen

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[noRouteFullscreenExit](components_Table_extras.TableParentProps.md#noroutefullscreenexit)

___

### pagination

• `Optional` `Readonly` **pagination**: [`Pagination`](components_Table_extras.Pagination.md)

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[pagination](components_Table_extras.TableOwnProps.md#pagination)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[paginationLabel](components_Table_extras.TableParentProps.md#paginationlabel)

___

### resizableColumns

• `Optional` `Readonly` **resizableColumns**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[resizableColumns](components_Table_extras.TableOwnProps.md#resizablecolumns)

___

### rowKey

• `Optional` `Readonly` **rowKey**: `stringU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[rowKey](components_Table_extras.TableOwnProps.md#rowkey)

___

### rows

• `Optional` `Readonly` **rows**: readonly `T`[]

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[rows](components_Table_extras.TableOwnProps.md#rows)

___

### rowsPerPageLabel

• `Optional` **rowsPerPageLabel**: `string`

Text to override default rows per page label at bottom of table

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[rowsPerPageLabel](components_Table_extras.TableParentProps.md#rowsperpagelabel)

___

### rowsPerPageOptions

• `Optional` **rowsPerPageOptions**: `any`[]

Options for user to pick (Numbers); Number 0 means 'Show all rows in one page'
Default value: [ 3, 5, 7, 10, 15, 20, 25, 50, 0 ]

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[rowsPerPageOptions](components_Table_extras.TableParentProps.md#rowsperpageoptions)

___

### selectByCheckbox

• `Optional` `Readonly` **selectByCheckbox**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[selectByCheckbox](components_Table_extras.TableOwnProps.md#selectbycheckbox)

___

### selectByRowClick

• `Optional` `Readonly` **selectByRowClick**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[selectByRowClick](components_Table_extras.TableOwnProps.md#selectbyrowclick)

___

### selected

• `Optional` `Readonly` **selected**: readonly `T`[]

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[selected](components_Table_extras.TableOwnProps.md#selected)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[selectedRowsLabel](components_Table_extras.TableParentProps.md#selectedrowslabel)

___

### separator

• `Optional` **separator**: ``"none"`` \| ``"horizontal"`` \| ``"vertical"`` \| ``"cell"``

Use a separator/border between rows, columns or all cells
Default value: horizontal

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[separator](components_Table_extras.TableParentProps.md#separator)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[sortMethod](components_Table_extras.TableParentProps.md#sortmethod)

___

### squareOff

• `Optional` `Readonly` **squareOff**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[squareOff](components_Table_extras.TableOwnProps.md#squareoff)

___

### squareOn

• `Optional` `Readonly` **squareOn**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[squareOn](components_Table_extras.TableOwnProps.md#squareon)

___

### sticky

• `Optional` `Readonly` **sticky**: `boolean`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[sticky](components_Table_extras.TableOwnProps.md#sticky)

___

### tableClass

• `Optional` **tableClass**: `VueClassProp`

CSS classes to apply to native HTML <table> element's wrapper (which is a DIV)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[tableClass](components_Table_extras.TableParentProps.md#tableclass)

___

### tableColspan

• `Optional` **tableColspan**: `string` \| `number`

The number of columns in the table (you need this if you use table-layout: fixed)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[tableColspan](components_Table_extras.TableParentProps.md#tablecolspan)

___

### tableHeaderClass

• `Optional` **tableHeaderClass**: `VueClassProp`

CSS classes to apply to header of native HTML <table> (which is a TR)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[tableHeaderClass](components_Table_extras.TableParentProps.md#tableheaderclass)

___

### tableHeaderStyle

• `Optional` **tableHeaderStyle**: `VueStyleProp`

CSS style to apply to header of native HTML <table> (which is a TR)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[tableHeaderStyle](components_Table_extras.TableParentProps.md#tableheaderstyle)

___

### tableStyle

• `Optional` **tableStyle**: `VueStyleProp`

CSS style to apply to native HTML <table> element's wrapper (which is a DIV)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[tableStyle](components_Table_extras.TableParentProps.md#tablestyle)

___

### title

• `Optional` **title**: `string`

Table title

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[title](components_Table_extras.TableParentProps.md#title)

___

### titleClass

• `Optional` **titleClass**: `VueClassProp`

CSS classes to apply to the title (if using 'title' prop)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[titleClass](components_Table_extras.TableParentProps.md#titleclass)

___

### virtualScroll

• `Optional` **virtualScroll**: `boolean`

Display data using QVirtualScroll (for non-grid mode only)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[virtualScroll](components_Table_extras.TableParentProps.md#virtualscroll)

___

### virtualScrollItemSize

• `Optional` **virtualScrollItemSize**: `string` \| `number`

Default size in pixels of a row; This value is used for rendering the initial table; Try to use a value close to the minimum size of a row
Default value: 48 (24 if dense)

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[virtualScrollItemSize](components_Table_extras.TableParentProps.md#virtualscrollitemsize)

___

### virtualScrollSliceRatioAfter

• `Optional` **virtualScrollSliceRatioAfter**: `string` \| `number`

Ratio of number of rows in visible zone to render after it
Default value: 1

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[virtualScrollSliceRatioAfter](components_Table_extras.TableParentProps.md#virtualscrollsliceratioafter)

___

### virtualScrollSliceRatioBefore

• `Optional` **virtualScrollSliceRatioBefore**: `string` \| `number`

Ratio of number of rows in visible zone to render before it
Default value: 1

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[virtualScrollSliceRatioBefore](components_Table_extras.TableParentProps.md#virtualscrollsliceratiobefore)

___

### virtualScrollSliceSize

• `Optional` **virtualScrollSliceSize**: `string` \| `number`

Minimum number of rows to render in the virtual list
Default value: 30

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[virtualScrollSliceSize](components_Table_extras.TableParentProps.md#virtualscrollslicesize)

___

### virtualScrollStickySizeEnd

• `Optional` **virtualScrollStickySizeEnd**: `string` \| `number`

Size in pixels of the sticky footer part (if using one); A correct value will improve scroll precision
Default value: 0

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[virtualScrollStickySizeEnd](components_Table_extras.TableParentProps.md#virtualscrollstickysizeend)

___

### virtualScrollStickySizeStart

• `Optional` **virtualScrollStickySizeStart**: `string` \| `number`

Size in pixels of the sticky header (if using one); A correct value will improve scroll precision
Default value: 0

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[virtualScrollStickySizeStart](components_Table_extras.TableParentProps.md#virtualscrollstickysizestart)

___

### virtualScrollTarget

• `Optional` **virtualScrollTarget**: `string` \| `Element`

CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[virtualScrollTarget](components_Table_extras.TableParentProps.md#virtualscrolltarget)

___

### visibleColumns

• `Optional` **visibleColumns**: `any`[]

Array of Strings defining column names ('name' property of each column from 'columns' prop definitions); Columns marked as 'required' are not affected by this property

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[visibleColumns](components_Table_extras.TableParentProps.md#visiblecolumns)

___

### wrapCells

• `Optional` **wrapCells**: `boolean`

Wrap text within table cells

#### Inherited from

[TableParentProps](components_Table_extras.TableParentProps.md).[wrapCells](components_Table_extras.TableParentProps.md#wrapcells)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[onRequest](components_Table_extras.TableParentProps.md#onrequest)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[onRowClick](components_Table_extras.TableParentProps.md#onrowclick)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[onRowContextmenu](components_Table_extras.TableParentProps.md#onrowcontextmenu)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[onRowDblclick](components_Table_extras.TableParentProps.md#onrowdblclick)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[onSelection](components_Table_extras.TableParentProps.md#onselection)

___

### onUpdate:columnWidths

▸ `Optional` `Readonly` **onUpdate:columnWidths**(`value`): `void`

Emits column order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`ColumnWidths`](../modules/components_Table_extras.md#columnwidths) | Column order. |

#### Returns

`void`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[onUpdate:columnWidths](components_Table_extras.TableOwnProps.md#onupdate:columnwidths)

___

### onUpdate:columnsOrder

▸ `Optional` `Readonly` **onUpdate:columnsOrder**(`value`): `void`

Emits column order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`ColumnsOrder`](../modules/components_Table_extras.md#columnsorder) | Column order. |

#### Returns

`void`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[onUpdate:columnsOrder](components_Table_extras.TableOwnProps.md#onupdate:columnsorder)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[onUpdate:expanded](components_Table_extras.TableParentProps.md#onupdate:expanded)

___

### onUpdate:hiddenColumns

▸ `Optional` `Readonly` **onUpdate:hiddenColumns**(`value`): `void`

Emits hidden columns.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`HiddenColumns`](../modules/components_Table_extras.md#hiddencolumns) | Hidden columns. |

#### Returns

`void`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[onUpdate:hiddenColumns](components_Table_extras.TableOwnProps.md#onupdate:hiddencolumns)

___

### onUpdate:pagination

▸ `Optional` `Readonly` **onUpdate:pagination**(`value`): `void`

Emits "pagination" value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Pagination`](components_Table_extras.Pagination.md) | Value. |

#### Returns

`void`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[onUpdate:pagination](components_Table_extras.TableOwnProps.md#onupdate:pagination)

___

### onUpdate:selected

▸ `Optional` `Readonly` **onUpdate:selected**(`value`): `void`

Emits "selected" value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `objects` | Value. |

#### Returns

`void`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[onUpdate:selected](components_Table_extras.TableOwnProps.md#onupdate:selected)

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

[TableParentProps](components_Table_extras.TableParentProps.md).[onVirtualScroll](components_Table_extras.TableParentProps.md#onvirtualscroll)
