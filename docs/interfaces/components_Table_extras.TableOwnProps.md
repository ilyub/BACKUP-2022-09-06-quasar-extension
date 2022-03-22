[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / TableOwnProps

# Interface: TableOwnProps<T\>

[components/Table.extras](../modules/components_Table_extras.md).TableOwnProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- **`TableOwnProps`**

  ↳ [`TableProps`](components_Table_extras.TableProps.md)

## Table of contents

### Properties

- [binaryStateSortOff](components_Table_extras.TableOwnProps.md#binarystatesortoff)
- [binaryStateSortOn](components_Table_extras.TableOwnProps.md#binarystatesorton)
- [columnWidths](components_Table_extras.TableOwnProps.md#columnwidths)
- [columns](components_Table_extras.TableOwnProps.md#columns)
- [columnsOrder](components_Table_extras.TableOwnProps.md#columnsorder)
- [externalSorting](components_Table_extras.TableOwnProps.md#externalsorting)
- [flatOff](components_Table_extras.TableOwnProps.md#flatoff)
- [flatOn](components_Table_extras.TableOwnProps.md#flaton)
- [headerSeparatorOff](components_Table_extras.TableOwnProps.md#headerseparatoroff)
- [headerSeparatorOn](components_Table_extras.TableOwnProps.md#headerseparatoron)
- [hiddenColumns](components_Table_extras.TableOwnProps.md#hiddencolumns)
- [manageColumns](components_Table_extras.TableOwnProps.md#managecolumns)
- [multiselect](components_Table_extras.TableOwnProps.md#multiselect)
- [pagination](components_Table_extras.TableOwnProps.md#pagination)
- [resizableColumns](components_Table_extras.TableOwnProps.md#resizablecolumns)
- [rowKey](components_Table_extras.TableOwnProps.md#rowkey)
- [rows](components_Table_extras.TableOwnProps.md#rows)
- [selectByCheckbox](components_Table_extras.TableOwnProps.md#selectbycheckbox)
- [selectByRowClick](components_Table_extras.TableOwnProps.md#selectbyrowclick)
- [selected](components_Table_extras.TableOwnProps.md#selected)
- [squareOff](components_Table_extras.TableOwnProps.md#squareoff)
- [squareOn](components_Table_extras.TableOwnProps.md#squareon)
- [sticky](components_Table_extras.TableOwnProps.md#sticky)

### Methods

- [onUpdate:columnWidths](components_Table_extras.TableOwnProps.md#onupdate:columnwidths)
- [onUpdate:columnsOrder](components_Table_extras.TableOwnProps.md#onupdate:columnsorder)
- [onUpdate:hiddenColumns](components_Table_extras.TableOwnProps.md#onupdate:hiddencolumns)
- [onUpdate:pagination](components_Table_extras.TableOwnProps.md#onupdate:pagination)
- [onUpdate:selected](components_Table_extras.TableOwnProps.md#onupdate:selected)

## Properties

### binaryStateSortOff

• `Optional` `Readonly` **binaryStateSortOff**: `booleanU`

___

### binaryStateSortOn

• `Optional` `Readonly` **binaryStateSortOn**: `booleanU`

___

### columnWidths

• `Optional` `Readonly` **columnWidths**: [`ColumnWidths`](../modules/components_Table_extras.md#columnwidths)

___

### columns

• `Optional` `Readonly` **columns**: [`Columns`](../modules/components_Table_extras.md#columns)<`T`\>

___

### columnsOrder

• `Optional` `Readonly` **columnsOrder**: [`ColumnsOrder`](../modules/components_Table_extras.md#columnsorder)

___

### externalSorting

• `Optional` `Readonly` **externalSorting**: `booleanU`

___

### flatOff

• `Optional` `Readonly` **flatOff**: `booleanU`

___

### flatOn

• `Optional` `Readonly` **flatOn**: `booleanU`

___

### headerSeparatorOff

• `Optional` `Readonly` **headerSeparatorOff**: `booleanU`

___

### headerSeparatorOn

• `Optional` `Readonly` **headerSeparatorOn**: `booleanU`

___

### hiddenColumns

• `Optional` `Readonly` **hiddenColumns**: [`HiddenColumns`](../modules/components_Table_extras.md#hiddencolumns)

___

### manageColumns

• `Optional` `Readonly` **manageColumns**: `boolean`

___

### multiselect

• `Optional` `Readonly` **multiselect**: `boolean`

___

### pagination

• `Optional` `Readonly` **pagination**: [`Pagination`](components_Table_extras.Pagination.md)

___

### resizableColumns

• `Optional` `Readonly` **resizableColumns**: `booleanU`

___

### rowKey

• `Optional` `Readonly` **rowKey**: `stringU`

___

### rows

• `Optional` `Readonly` **rows**: readonly `T`[]

___

### selectByCheckbox

• `Optional` `Readonly` **selectByCheckbox**: `booleanU`

___

### selectByRowClick

• `Optional` `Readonly` **selectByRowClick**: `booleanU`

___

### selected

• `Optional` `Readonly` **selected**: readonly `T`[]

___

### squareOff

• `Optional` `Readonly` **squareOff**: `booleanU`

___

### squareOn

• `Optional` `Readonly` **squareOn**: `booleanU`

___

### sticky

• `Optional` `Readonly` **sticky**: `boolean`

## Methods

### onUpdate:columnWidths

▸ `Optional` `Readonly` **onUpdate:columnWidths**(`value`): `void`

Emits column order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`ColumnWidths`](../modules/components_Table_extras.md#columnwidths) | Column order. |

#### Returns

`void`

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
