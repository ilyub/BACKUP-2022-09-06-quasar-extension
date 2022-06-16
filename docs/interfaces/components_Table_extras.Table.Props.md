[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / [Table](../modules/components_Table_extras.Table.md) / Props

# Interface: Props<T\>

[components/Table.extras](../modules/components_Table_extras.md).[Table](../modules/components_Table_extras.Table.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- [`ParentProps`](components_Table_extras.Table.ParentProps.md)

- [`OwnProps`](components_Table_extras.Table.OwnProps.md)<`T`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [binaryStateSort](components_Table_extras.Table.Props.md#binarystatesort)
- [binaryStateSortOff](components_Table_extras.Table.Props.md#binarystatesortoff)
- [binaryStateSortOn](components_Table_extras.Table.Props.md#binarystatesorton)
- [bordered](components_Table_extras.Table.Props.md#bordered)
- [cardClass](components_Table_extras.Table.Props.md#cardclass)
- [cardContainerClass](components_Table_extras.Table.Props.md#cardcontainerclass)
- [cardContainerStyle](components_Table_extras.Table.Props.md#cardcontainerstyle)
- [cardStyle](components_Table_extras.Table.Props.md#cardstyle)
- [color](components_Table_extras.Table.Props.md#color)
- [columnSortOrder](components_Table_extras.Table.Props.md#columnsortorder)
- [columnWidths](components_Table_extras.Table.Props.md#columnwidths)
- [columns](components_Table_extras.Table.Props.md#columns)
- [columnsOrder](components_Table_extras.Table.Props.md#columnsorder)
- [dark](components_Table_extras.Table.Props.md#dark)
- [dense](components_Table_extras.Table.Props.md#dense)
- [expanded](components_Table_extras.Table.Props.md#expanded)
- [externalSorting](components_Table_extras.Table.Props.md#externalsorting)
- [filter](components_Table_extras.Table.Props.md#filter)
- [filterMethod](components_Table_extras.Table.Props.md#filtermethod)
- [flat](components_Table_extras.Table.Props.md#flat)
- [flatOff](components_Table_extras.Table.Props.md#flatoff)
- [flatOn](components_Table_extras.Table.Props.md#flaton)
- [fullscreen](components_Table_extras.Table.Props.md#fullscreen)
- [grid](components_Table_extras.Table.Props.md#grid)
- [gridHeader](components_Table_extras.Table.Props.md#gridheader)
- [headerSeparatorOff](components_Table_extras.Table.Props.md#headerseparatoroff)
- [headerSeparatorOn](components_Table_extras.Table.Props.md#headerseparatoron)
- [hiddenColumns](components_Table_extras.Table.Props.md#hiddencolumns)
- [hideBottom](components_Table_extras.Table.Props.md#hidebottom)
- [hideHeader](components_Table_extras.Table.Props.md#hideheader)
- [hideNoData](components_Table_extras.Table.Props.md#hidenodata)
- [hidePagination](components_Table_extras.Table.Props.md#hidepagination)
- [hideSelectedBanner](components_Table_extras.Table.Props.md#hideselectedbanner)
- [iconFirstPage](components_Table_extras.Table.Props.md#iconfirstpage)
- [iconLastPage](components_Table_extras.Table.Props.md#iconlastpage)
- [iconNextPage](components_Table_extras.Table.Props.md#iconnextpage)
- [iconPrevPage](components_Table_extras.Table.Props.md#iconprevpage)
- [loading](components_Table_extras.Table.Props.md#loading)
- [loadingLabel](components_Table_extras.Table.Props.md#loadinglabel)
- [manageColumns](components_Table_extras.Table.Props.md#managecolumns)
- [multiSelect](components_Table_extras.Table.Props.md#multiselect)
- [noDataLabel](components_Table_extras.Table.Props.md#nodatalabel)
- [noResultsLabel](components_Table_extras.Table.Props.md#noresultslabel)
- [noRouteFullscreenExit](components_Table_extras.Table.Props.md#noroutefullscreenexit)
- [pagination](components_Table_extras.Table.Props.md#pagination)
- [paginationLabel](components_Table_extras.Table.Props.md#paginationlabel)
- [resizableColumns](components_Table_extras.Table.Props.md#resizablecolumns)
- [rowKey](components_Table_extras.Table.Props.md#rowkey)
- [rows](components_Table_extras.Table.Props.md#rows)
- [rowsPerPageLabel](components_Table_extras.Table.Props.md#rowsperpagelabel)
- [rowsPerPageOptions](components_Table_extras.Table.Props.md#rowsperpageoptions)
- [selectByCheckbox](components_Table_extras.Table.Props.md#selectbycheckbox)
- [selectByRowClick](components_Table_extras.Table.Props.md#selectbyrowclick)
- [selected](components_Table_extras.Table.Props.md#selected)
- [selectedRowsLabel](components_Table_extras.Table.Props.md#selectedrowslabel)
- [selection](components_Table_extras.Table.Props.md#selection)
- [separator](components_Table_extras.Table.Props.md#separator)
- [sortMethod](components_Table_extras.Table.Props.md#sortmethod)
- [square](components_Table_extras.Table.Props.md#square)
- [squareOff](components_Table_extras.Table.Props.md#squareoff)
- [squareOn](components_Table_extras.Table.Props.md#squareon)
- [sticky](components_Table_extras.Table.Props.md#sticky)
- [tableClass](components_Table_extras.Table.Props.md#tableclass)
- [tableColspan](components_Table_extras.Table.Props.md#tablecolspan)
- [tableHeaderClass](components_Table_extras.Table.Props.md#tableheaderclass)
- [tableHeaderStyle](components_Table_extras.Table.Props.md#tableheaderstyle)
- [tableStyle](components_Table_extras.Table.Props.md#tablestyle)
- [title](components_Table_extras.Table.Props.md#title)
- [titleClass](components_Table_extras.Table.Props.md#titleclass)
- [virtualScroll](components_Table_extras.Table.Props.md#virtualscroll)
- [virtualScrollItemSize](components_Table_extras.Table.Props.md#virtualscrollitemsize)
- [virtualScrollSliceRatioAfter](components_Table_extras.Table.Props.md#virtualscrollsliceratioafter)
- [virtualScrollSliceRatioBefore](components_Table_extras.Table.Props.md#virtualscrollsliceratiobefore)
- [virtualScrollSliceSize](components_Table_extras.Table.Props.md#virtualscrollslicesize)
- [virtualScrollStickySizeEnd](components_Table_extras.Table.Props.md#virtualscrollstickysizeend)
- [virtualScrollStickySizeStart](components_Table_extras.Table.Props.md#virtualscrollstickysizestart)
- [virtualScrollTarget](components_Table_extras.Table.Props.md#virtualscrolltarget)
- [visibleColumns](components_Table_extras.Table.Props.md#visiblecolumns)
- [wrapCells](components_Table_extras.Table.Props.md#wrapcells)

### Methods

- [onRequest](components_Table_extras.Table.Props.md#onrequest)
- [onRowClick](components_Table_extras.Table.Props.md#onrowclick)
- [onRowContextmenu](components_Table_extras.Table.Props.md#onrowcontextmenu)
- [onRowDblclick](components_Table_extras.Table.Props.md#onrowdblclick)
- [onSelection](components_Table_extras.Table.Props.md#onselection)
- [onUpdate:columnWidths](components_Table_extras.Table.Props.md#onupdate:columnwidths)
- [onUpdate:columnsOrder](components_Table_extras.Table.Props.md#onupdate:columnsorder)
- [onUpdate:expanded](components_Table_extras.Table.Props.md#onupdate:expanded)
- [onUpdate:hiddenColumns](components_Table_extras.Table.Props.md#onupdate:hiddencolumns)
- [onUpdate:pagination](components_Table_extras.Table.Props.md#onupdate:pagination)
- [onUpdate:selected](components_Table_extras.Table.Props.md#onupdate:selected)
- [onVirtualScroll](components_Table_extras.Table.Props.md#onvirtualscroll)

## Properties

### binaryStateSort

• `Optional` **binaryStateSort**: `boolean`

Skip the third state (unsorted) when user toggles column sort direction

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[binaryStateSort](components_Table_extras.Table.ParentProps.md#binarystatesort)

___

### binaryStateSortOff

• `Optional` `Readonly` **binaryStateSortOff**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[binaryStateSortOff](components_Table_extras.Table.OwnProps.md#binarystatesortoff)

___

### binaryStateSortOn

• `Optional` `Readonly` **binaryStateSortOn**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[binaryStateSortOn](components_Table_extras.Table.OwnProps.md#binarystatesorton)

___

### bordered

• `Optional` **bordered**: `boolean`

Applies a default border to the component

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[bordered](components_Table_extras.Table.ParentProps.md#bordered)

___

### cardClass

• `Optional` **cardClass**: `VueClassProp`

CSS classes to apply to the card (when in grid mode) or container card (when not in grid mode)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[cardClass](components_Table_extras.Table.ParentProps.md#cardclass)

___

### cardContainerClass

• `Optional` **cardContainerClass**: `VueClassProp`

CSS classes to apply to the cards container (when in grid mode)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[cardContainerClass](components_Table_extras.Table.ParentProps.md#cardcontainerclass)

___

### cardContainerStyle

• `Optional` **cardContainerStyle**: `VueStyleProp`

CSS style to apply to the cards container (when in grid mode)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[cardContainerStyle](components_Table_extras.Table.ParentProps.md#cardcontainerstyle)

___

### cardStyle

• `Optional` **cardStyle**: `VueStyleProp`

CSS style to apply to the card (when in grid mode) or container card (when not in grid mode)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[cardStyle](components_Table_extras.Table.ParentProps.md#cardstyle)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette
Default value: grey-8

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[color](components_Table_extras.Table.ParentProps.md#color)

___

### columnSortOrder

• `Optional` **columnSortOrder**: ``"ad"`` \| ``"da"``

Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); It gets applied to all columns unless a column has its own sortOrder specified in the 'columns' definition prop
Default value: ad

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[columnSortOrder](components_Table_extras.Table.ParentProps.md#columnsortorder)

___

### columnWidths

• `Optional` `Readonly` **columnWidths**: [`ColumnWidths`](../modules/components_Table_extras.Table.md#columnwidths)

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[columnWidths](components_Table_extras.Table.OwnProps.md#columnwidths)

___

### columns

• `Optional` `Readonly` **columns**: [`Columns`](../modules/components_Table_extras.Table.md#columns)<`T`\>

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[columns](components_Table_extras.Table.OwnProps.md#columns)

___

### columnsOrder

• `Optional` `Readonly` **columnsOrder**: [`ColumnsOrder`](../modules/components_Table_extras.Table.md#columnsorder)

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[columnsOrder](components_Table_extras.Table.OwnProps.md#columnsorder)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[dark](components_Table_extras.Table.ParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; Connect with $q.screen for responsive behavior

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[dense](components_Table_extras.Table.ParentProps.md#dense)

___

### expanded

• `Optional` **expanded**: `any`[]

Keeps the array with expanded rows keys
Default value: []

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[expanded](components_Table_extras.Table.ParentProps.md#expanded)

___

### externalSorting

• `Optional` `Readonly` **externalSorting**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[externalSorting](components_Table_extras.Table.OwnProps.md#externalsorting)

___

### filter

• `Optional` **filter**: `any`

String/Object to filter table with; When using an Object it requires 'filter-method' to also be specified since it will be a custom filtering

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[filter](components_Table_extras.Table.ParentProps.md#filter)

___

### filterMethod

• `Optional` **filterMethod**: (`rows`: readonly `any`[], `terms`: `any`, `cols`: readonly `any`[], `getCellValue`: (`col`: `any`, `row`: `any`) => `any`) => readonly `any`[]

#### Type declaration

▸ (`rows`, `terms`, `cols`, `getCellValue`): readonly `any`[]

The actual filtering mechanism; For best performance, reference it from your scope and do not define it inline
Default value: (see source code)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | readonly `any`[] | Array of rows |
| `terms` | `any` | Terms to filter with (is essentially the 'filter' prop value) |
| `cols` | readonly `any`[] | Column definitions |
| `getCellValue` | (`col`: `any`, `row`: `any`) => `any` | Optional function to get a cell value |

##### Returns

readonly `any`[]

Filtered rows

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[filterMethod](components_Table_extras.Table.ParentProps.md#filtermethod)

___

### flat

• `Optional` **flat**: `boolean`

Applies a 'flat' design (no default shadow)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[flat](components_Table_extras.Table.ParentProps.md#flat)

___

### flatOff

• `Optional` `Readonly` **flatOff**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[flatOff](components_Table_extras.Table.OwnProps.md#flatoff)

___

### flatOn

• `Optional` `Readonly` **flatOn**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[flatOn](components_Table_extras.Table.OwnProps.md#flaton)

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

Fullscreen mode

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[fullscreen](components_Table_extras.Table.ParentProps.md#fullscreen)

___

### grid

• `Optional` **grid**: `boolean`

Display data as a grid instead of the default table

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[grid](components_Table_extras.Table.ParentProps.md#grid)

___

### gridHeader

• `Optional` **gridHeader**: `boolean`

Display header for grid-mode also

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[gridHeader](components_Table_extras.Table.ParentProps.md#gridheader)

___

### headerSeparatorOff

• `Optional` `Readonly` **headerSeparatorOff**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[headerSeparatorOff](components_Table_extras.Table.OwnProps.md#headerseparatoroff)

___

### headerSeparatorOn

• `Optional` `Readonly` **headerSeparatorOn**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[headerSeparatorOn](components_Table_extras.Table.OwnProps.md#headerseparatoron)

___

### hiddenColumns

• `Optional` `Readonly` **hiddenColumns**: [`HiddenColumns`](../modules/components_Table_extras.Table.md#hiddencolumns)

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[hiddenColumns](components_Table_extras.Table.OwnProps.md#hiddencolumns)

___

### hideBottom

• `Optional` **hideBottom**: `boolean`

Hide table bottom layer regardless of what it has to display

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[hideBottom](components_Table_extras.Table.ParentProps.md#hidebottom)

___

### hideHeader

• `Optional` **hideHeader**: `boolean`

Hide table header layer

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[hideHeader](components_Table_extras.Table.ParentProps.md#hideheader)

___

### hideNoData

• `Optional` **hideNoData**: `boolean`

Hide the default no data bottom layer

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[hideNoData](components_Table_extras.Table.ParentProps.md#hidenodata)

___

### hidePagination

• `Optional` **hidePagination**: `boolean`

Hide the pagination controls at the bottom

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[hidePagination](components_Table_extras.Table.ParentProps.md#hidepagination)

___

### hideSelectedBanner

• `Optional` **hideSelectedBanner**: `boolean`

Hide the selected rows banner (if any)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[hideSelectedBanner](components_Table_extras.Table.ParentProps.md#hideselectedbanner)

___

### iconFirstPage

• `Optional` **iconFirstPage**: `string`

Icon name following Quasar convention for stepping to first page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[iconFirstPage](components_Table_extras.Table.ParentProps.md#iconfirstpage)

___

### iconLastPage

• `Optional` **iconLastPage**: `string`

Icon name following Quasar convention for stepping to last page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[iconLastPage](components_Table_extras.Table.ParentProps.md#iconlastpage)

___

### iconNextPage

• `Optional` **iconNextPage**: `string`

Icon name following Quasar convention for stepping to next page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[iconNextPage](components_Table_extras.Table.ParentProps.md#iconnextpage)

___

### iconPrevPage

• `Optional` **iconPrevPage**: `string`

Icon name following Quasar convention for stepping to previous page; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[iconPrevPage](components_Table_extras.Table.ParentProps.md#iconprevpage)

___

### loading

• `Optional` **loading**: `boolean`

Put Table into 'loading' state; Notify the user something is happening behind the scenes

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[loading](components_Table_extras.Table.ParentProps.md#loading)

___

### loadingLabel

• `Optional` **loadingLabel**: `string`

Override default text to display when table is in loading state (see 'loading' prop)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[loadingLabel](components_Table_extras.Table.ParentProps.md#loadinglabel)

___

### manageColumns

• `Optional` `Readonly` **manageColumns**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[manageColumns](components_Table_extras.Table.OwnProps.md#managecolumns)

___

### multiSelect

• `Optional` `Readonly` **multiSelect**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[multiSelect](components_Table_extras.Table.OwnProps.md#multiselect)

___

### noDataLabel

• `Optional` **noDataLabel**: `string`

Override default text to display when no data is available

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[noDataLabel](components_Table_extras.Table.ParentProps.md#nodatalabel)

___

### noResultsLabel

• `Optional` **noResultsLabel**: `string`

Override default text to display when user filters the table and no matched results are found

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[noResultsLabel](components_Table_extras.Table.ParentProps.md#noresultslabel)

___

### noRouteFullscreenExit

• `Optional` **noRouteFullscreenExit**: `boolean`

Changing route app won't exit fullscreen

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[noRouteFullscreenExit](components_Table_extras.Table.ParentProps.md#noroutefullscreenexit)

___

### pagination

• `Optional` `Readonly` **pagination**: [`PaginationProp`](components_Table_extras.Table.PaginationProp.md)

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[pagination](components_Table_extras.Table.OwnProps.md#pagination)

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

[ParentProps](components_Table_extras.Table.ParentProps.md).[paginationLabel](components_Table_extras.Table.ParentProps.md#paginationlabel)

___

### resizableColumns

• `Optional` `Readonly` **resizableColumns**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[resizableColumns](components_Table_extras.Table.OwnProps.md#resizablecolumns)

___

### rowKey

• `Optional` `Readonly` **rowKey**: `stringU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[rowKey](components_Table_extras.Table.OwnProps.md#rowkey)

___

### rows

• `Optional` `Readonly` **rows**: readonly `T`[]

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[rows](components_Table_extras.Table.OwnProps.md#rows)

___

### rowsPerPageLabel

• `Optional` **rowsPerPageLabel**: `string`

Text to override default rows per page label at bottom of table

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[rowsPerPageLabel](components_Table_extras.Table.ParentProps.md#rowsperpagelabel)

___

### rowsPerPageOptions

• `Optional` **rowsPerPageOptions**: readonly `any`[]

Options for user to pick (Numbers); Number 0 means 'Show all rows in one page'
Default value: [ 3, 5, 7, 10, 15, 20, 25, 50, 0 ]

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[rowsPerPageOptions](components_Table_extras.Table.ParentProps.md#rowsperpageoptions)

___

### selectByCheckbox

• `Optional` `Readonly` **selectByCheckbox**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[selectByCheckbox](components_Table_extras.Table.OwnProps.md#selectbycheckbox)

___

### selectByRowClick

• `Optional` `Readonly` **selectByRowClick**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[selectByRowClick](components_Table_extras.Table.OwnProps.md#selectbyrowclick)

___

### selected

• `Optional` `Readonly` **selected**: readonly `T`[]

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[selected](components_Table_extras.Table.OwnProps.md#selected)

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

[ParentProps](components_Table_extras.Table.ParentProps.md).[selectedRowsLabel](components_Table_extras.Table.ParentProps.md#selectedrowslabel)

___

### selection

• `Optional` **selection**: ``"none"`` \| ``"multiple"`` \| ``"single"``

Selection type
Default value: none

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[selection](components_Table_extras.Table.ParentProps.md#selection)

___

### separator

• `Optional` **separator**: ``"none"`` \| ``"vertical"`` \| ``"horizontal"`` \| ``"cell"``

Use a separator/border between rows, columns or all cells
Default value: horizontal

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[separator](components_Table_extras.Table.ParentProps.md#separator)

___

### sortMethod

• `Optional` **sortMethod**: (`rows`: readonly `any`[], `sortBy`: `string`, `descending`: `boolean`) => readonly `any`[]

#### Type declaration

▸ (`rows`, `sortBy`, `descending`): readonly `any`[]

The actual sort mechanism. Function (rows, sortBy, descending) => sorted rows; For best performance, reference it from your scope and do not define it inline
Default value: (see source code)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | readonly `any`[] | Array with rows |
| `sortBy` | `string` | Column name (from column definition) |
| `descending` | `boolean` | Is sorting in descending order? |

##### Returns

readonly `any`[]

Sorted rows

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[sortMethod](components_Table_extras.Table.ParentProps.md#sortmethod)

___

### square

• `Optional` **square**: `boolean`

Removes border-radius so borders are squared

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[square](components_Table_extras.Table.ParentProps.md#square)

___

### squareOff

• `Optional` `Readonly` **squareOff**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[squareOff](components_Table_extras.Table.OwnProps.md#squareoff)

___

### squareOn

• `Optional` `Readonly` **squareOn**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[squareOn](components_Table_extras.Table.OwnProps.md#squareon)

___

### sticky

• `Optional` `Readonly` **sticky**: `booleanU`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[sticky](components_Table_extras.Table.OwnProps.md#sticky)

___

### tableClass

• `Optional` **tableClass**: `VueClassProp`

CSS classes to apply to native HTML <table> element's wrapper (which is a DIV)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[tableClass](components_Table_extras.Table.ParentProps.md#tableclass)

___

### tableColspan

• `Optional` **tableColspan**: `string` \| `number`

The number of columns in the table (you need this if you use table-layout: fixed)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[tableColspan](components_Table_extras.Table.ParentProps.md#tablecolspan)

___

### tableHeaderClass

• `Optional` **tableHeaderClass**: `VueClassProp`

CSS classes to apply to header of native HTML <table> (which is a TR)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[tableHeaderClass](components_Table_extras.Table.ParentProps.md#tableheaderclass)

___

### tableHeaderStyle

• `Optional` **tableHeaderStyle**: `VueStyleProp`

CSS style to apply to header of native HTML <table> (which is a TR)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[tableHeaderStyle](components_Table_extras.Table.ParentProps.md#tableheaderstyle)

___

### tableStyle

• `Optional` **tableStyle**: `VueStyleProp`

CSS style to apply to native HTML <table> element's wrapper (which is a DIV)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[tableStyle](components_Table_extras.Table.ParentProps.md#tablestyle)

___

### title

• `Optional` **title**: `string`

Table title

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[title](components_Table_extras.Table.ParentProps.md#title)

___

### titleClass

• `Optional` **titleClass**: `VueClassProp`

CSS classes to apply to the title (if using 'title' prop)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[titleClass](components_Table_extras.Table.ParentProps.md#titleclass)

___

### virtualScroll

• `Optional` **virtualScroll**: `boolean`

Display data using QVirtualScroll (for non-grid mode only)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[virtualScroll](components_Table_extras.Table.ParentProps.md#virtualscroll)

___

### virtualScrollItemSize

• `Optional` **virtualScrollItemSize**: `string` \| `number`

Default size in pixels of a row; This value is used for rendering the initial table; Try to use a value close to the minimum size of a row
Default value: 48 (24 if dense)

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[virtualScrollItemSize](components_Table_extras.Table.ParentProps.md#virtualscrollitemsize)

___

### virtualScrollSliceRatioAfter

• `Optional` **virtualScrollSliceRatioAfter**: `string` \| `number`

Ratio of number of rows in visible zone to render after it
Default value: 1

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[virtualScrollSliceRatioAfter](components_Table_extras.Table.ParentProps.md#virtualscrollsliceratioafter)

___

### virtualScrollSliceRatioBefore

• `Optional` **virtualScrollSliceRatioBefore**: `string` \| `number`

Ratio of number of rows in visible zone to render before it
Default value: 1

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[virtualScrollSliceRatioBefore](components_Table_extras.Table.ParentProps.md#virtualscrollsliceratiobefore)

___

### virtualScrollSliceSize

• `Optional` **virtualScrollSliceSize**: `string` \| `number`

Minimum number of rows to render in the virtual list
Default value: 30

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[virtualScrollSliceSize](components_Table_extras.Table.ParentProps.md#virtualscrollslicesize)

___

### virtualScrollStickySizeEnd

• `Optional` **virtualScrollStickySizeEnd**: `string` \| `number`

Size in pixels of the sticky footer part (if using one); A correct value will improve scroll precision
Default value: 0

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[virtualScrollStickySizeEnd](components_Table_extras.Table.ParentProps.md#virtualscrollstickysizeend)

___

### virtualScrollStickySizeStart

• `Optional` **virtualScrollStickySizeStart**: `string` \| `number`

Size in pixels of the sticky header (if using one); A correct value will improve scroll precision
Default value: 0

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[virtualScrollStickySizeStart](components_Table_extras.Table.ParentProps.md#virtualscrollstickysizestart)

___

### virtualScrollTarget

• `Optional` **virtualScrollTarget**: `string` \| `Element`

CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[virtualScrollTarget](components_Table_extras.Table.ParentProps.md#virtualscrolltarget)

___

### visibleColumns

• `Optional` **visibleColumns**: readonly `any`[]

Array of Strings defining column names ('name' property of each column from 'columns' prop definitions); Columns marked as 'required' are not affected by this property

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[visibleColumns](components_Table_extras.Table.ParentProps.md#visiblecolumns)

___

### wrapCells

• `Optional` **wrapCells**: `boolean`

Wrap text within table cells

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[wrapCells](components_Table_extras.Table.ParentProps.md#wrapcells)

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
| `requestProp.filter` | (`rows`: readonly `any`[], `terms`: `any`, `cols?`: readonly `any`[], `getCellValue?`: (`col`: `any`, `row`: `any`) => `any`) => readonly `any`[] | - |
| `requestProp.getCellValue` | (`col`: `any`, `row`: `any`) => `any` | - |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[onRequest](components_Table_extras.Table.ParentProps.md#onrequest)

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

[ParentProps](components_Table_extras.Table.ParentProps.md).[onRowClick](components_Table_extras.Table.ParentProps.md#onrowclick)

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

[ParentProps](components_Table_extras.Table.ParentProps.md).[onRowContextmenu](components_Table_extras.Table.ParentProps.md#onrowcontextmenu)

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

[ParentProps](components_Table_extras.Table.ParentProps.md).[onRowDblclick](components_Table_extras.Table.ParentProps.md#onrowdblclick)

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
| `details.keys` | readonly `any`[] | Array of the keys of rows that were selected/unselected |
| `details.rows` | readonly `any`[] | Array of row objects that were selected/unselected |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[onSelection](components_Table_extras.Table.ParentProps.md#onselection)

___

### onUpdate:columnWidths

▸ `Optional` `Readonly` **onUpdate:columnWidths**(`value`): `void`

Emits column widths.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`ColumnWidths`](../modules/components_Table_extras.Table.md#columnwidths) | Column widths. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[onUpdate:columnWidths](components_Table_extras.Table.OwnProps.md#onupdate:columnwidths)

___

### onUpdate:columnsOrder

▸ `Optional` `Readonly` **onUpdate:columnsOrder**(`value`): `void`

Emits columns order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`ColumnsOrder`](../modules/components_Table_extras.Table.md#columnsorder) | Columns order. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[onUpdate:columnsOrder](components_Table_extras.Table.OwnProps.md#onupdate:columnsorder)

___

### onUpdate:expanded

▸ `Optional` **onUpdate:expanded**(`newExpanded`): `void`

Used by Vue on 'v-model:expanded' prop for updating its value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newExpanded` | readonly `any`[] | The updated expanded array |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[onUpdate:expanded](components_Table_extras.Table.ParentProps.md#onupdate:expanded)

___

### onUpdate:hiddenColumns

▸ `Optional` `Readonly` **onUpdate:hiddenColumns**(`value`): `void`

Emits hidden columns.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`HiddenColumns`](../modules/components_Table_extras.Table.md#hiddencolumns) | Hidden columns. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[onUpdate:hiddenColumns](components_Table_extras.Table.OwnProps.md#onupdate:hiddencolumns)

___

### onUpdate:pagination

▸ `Optional` `Readonly` **onUpdate:pagination**(`value`): `void`

Emits pagination.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`PaginationEmit`](components_Table_extras.Table.PaginationEmit.md) | Pagination. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[onUpdate:pagination](components_Table_extras.Table.OwnProps.md#onupdate:pagination)

___

### onUpdate:selected

▸ `Optional` `Readonly` **onUpdate:selected**(`value`): `void`

Emits selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `objects` | Selected. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_Table_extras.Table.OwnProps.md).[onUpdate:selected](components_Table_extras.Table.OwnProps.md#onupdate:selected)

___

### onVirtualScroll

▸ `Optional` **onVirtualScroll**(`details`): `void`

Emitted when the virtual scroll occurs, if using virtual scroll

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `details` | `Object` | Object of properties on the new scroll position |
| `details.direction` | ``"increase"`` \| ``"decrease"`` | Direction of change |
| `details.from` | `number` | The index of the first list item that is rendered (0 based) |
| `details.index` | `number` | Index of the list item that was scrolled into view (0 based) |
| `details.to` | `number` | The index of the last list item that is rendered (0 based) |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Table_extras.Table.ParentProps.md).[onVirtualScroll](components_Table_extras.Table.ParentProps.md#onvirtualscroll)
