[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / [Table](../modules/components_Table_extras.Table.md) / OwnProps

# Interface: OwnProps<T\>

[components/Table.extras](../modules/components_Table_extras.md).[Table](../modules/components_Table_extras.Table.md).OwnProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- **`OwnProps`**

  ↳ [`Props`](components_Table_extras.Table.Props.md)

## Table of contents

### Properties

- [binaryStateSortOff](components_Table_extras.Table.OwnProps.md#binarystatesortoff)
- [binaryStateSortOn](components_Table_extras.Table.OwnProps.md#binarystatesorton)
- [columnWidths](components_Table_extras.Table.OwnProps.md#columnwidths)
- [columns](components_Table_extras.Table.OwnProps.md#columns)
- [columnsOrder](components_Table_extras.Table.OwnProps.md#columnsorder)
- [externalSorting](components_Table_extras.Table.OwnProps.md#externalsorting)
- [flatOff](components_Table_extras.Table.OwnProps.md#flatoff)
- [flatOn](components_Table_extras.Table.OwnProps.md#flaton)
- [headerSeparatorOff](components_Table_extras.Table.OwnProps.md#headerseparatoroff)
- [headerSeparatorOn](components_Table_extras.Table.OwnProps.md#headerseparatoron)
- [hiddenColumns](components_Table_extras.Table.OwnProps.md#hiddencolumns)
- [manageColumns](components_Table_extras.Table.OwnProps.md#managecolumns)
- [multiSelect](components_Table_extras.Table.OwnProps.md#multiselect)
- [onUpdate:columnWidths](components_Table_extras.Table.OwnProps.md#onupdate:columnwidths)
- [onUpdate:columnsOrder](components_Table_extras.Table.OwnProps.md#onupdate:columnsorder)
- [onUpdate:hiddenColumns](components_Table_extras.Table.OwnProps.md#onupdate:hiddencolumns)
- [onUpdate:pagination](components_Table_extras.Table.OwnProps.md#onupdate:pagination)
- [onUpdate:selected](components_Table_extras.Table.OwnProps.md#onupdate:selected)
- [pagination](components_Table_extras.Table.OwnProps.md#pagination)
- [resizableColumns](components_Table_extras.Table.OwnProps.md#resizablecolumns)
- [rowKey](components_Table_extras.Table.OwnProps.md#rowkey)
- [rows](components_Table_extras.Table.OwnProps.md#rows)
- [selectByCheckbox](components_Table_extras.Table.OwnProps.md#selectbycheckbox)
- [selectByRowClick](components_Table_extras.Table.OwnProps.md#selectbyrowclick)
- [selected](components_Table_extras.Table.OwnProps.md#selected)
- [squareOff](components_Table_extras.Table.OwnProps.md#squareoff)
- [squareOn](components_Table_extras.Table.OwnProps.md#squareon)
- [sticky](components_Table_extras.Table.OwnProps.md#sticky)

## Properties

### binaryStateSortOff

• `Optional` `Readonly` **binaryStateSortOff**: `booleanU`

___

### binaryStateSortOn

• `Optional` `Readonly` **binaryStateSortOn**: `booleanU`

___

### columnWidths

• `Optional` `Readonly` **columnWidths**: [`ColumnWidths`](../modules/components_Table_extras.Table.md#columnwidths)

___

### columns

• `Optional` `Readonly` **columns**: [`Columns`](../modules/components_Table_extras.Table.md#columns)<`T`\>

___

### columnsOrder

• `Optional` `Readonly` **columnsOrder**: [`ColumnsOrder`](../modules/components_Table_extras.Table.md#columnsorder)

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

• `Optional` `Readonly` **hiddenColumns**: [`HiddenColumns`](../modules/components_Table_extras.Table.md#hiddencolumns)

___

### manageColumns

• `Optional` `Readonly` **manageColumns**: `booleanU`

___

### multiSelect

• `Optional` `Readonly` **multiSelect**: `booleanU`

___

### onUpdate:columnWidths

• `Optional` `Readonly` **onUpdate:columnWidths**: (`value`: [`ColumnWidths`](../modules/components_Table_extras.Table.md#columnwidths)) => `void`

#### Type declaration

▸ (`value`): `void`

Emits column widths.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`ColumnWidths`](../modules/components_Table_extras.Table.md#columnwidths) | Column widths. |

##### Returns

`void`

___

### onUpdate:columnsOrder

• `Optional` `Readonly` **onUpdate:columnsOrder**: (`value`: [`ColumnsOrder`](../modules/components_Table_extras.Table.md#columnsorder)) => `void`

#### Type declaration

▸ (`value`): `void`

Emits columns order.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`ColumnsOrder`](../modules/components_Table_extras.Table.md#columnsorder) | Columns order. |

##### Returns

`void`

___

### onUpdate:hiddenColumns

• `Optional` `Readonly` **onUpdate:hiddenColumns**: (`value`: [`HiddenColumns`](../modules/components_Table_extras.Table.md#hiddencolumns)) => `void`

#### Type declaration

▸ (`value`): `void`

Emits hidden columns.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`HiddenColumns`](../modules/components_Table_extras.Table.md#hiddencolumns) | Hidden columns. |

##### Returns

`void`

___

### onUpdate:pagination

• `Optional` `Readonly` **onUpdate:pagination**: (`value`: [`PaginationEmit`](components_Table_extras.Table.PaginationEmit.md)) => `void`

#### Type declaration

▸ (`value`): `void`

Emits pagination.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`PaginationEmit`](components_Table_extras.Table.PaginationEmit.md) | Pagination. |

##### Returns

`void`

___

### onUpdate:selected

• `Optional` `Readonly` **onUpdate:selected**: (`value`: `objects`) => `void`

#### Type declaration

▸ (`value`): `void`

Emits selected.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `objects` | Selected. |

##### Returns

`void`

___

### pagination

• `Optional` `Readonly` **pagination**: [`PaginationProp`](components_Table_extras.Table.PaginationProp.md)

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

• `Optional` `Readonly` **sticky**: `booleanU`
