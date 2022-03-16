[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / TableOwnProps

# Interface: TableOwnProps<T\>

[components/Table.extras](../modules/components_Table_extras.md).TableOwnProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

## Hierarchy

- **`TableOwnProps`**

  ↳ [`TableProps`](components_Table_extras.TableProps.md)

## Table of contents

### Properties

- [columns](components_Table_extras.TableOwnProps.md#columns)
- [externalSorting](components_Table_extras.TableOwnProps.md#externalsorting)
- [pagination](components_Table_extras.TableOwnProps.md#pagination)
- [rowKey](components_Table_extras.TableOwnProps.md#rowkey)
- [rows](components_Table_extras.TableOwnProps.md#rows)
- [selectByRowClick](components_Table_extras.TableOwnProps.md#selectbyrowclick)
- [selected](components_Table_extras.TableOwnProps.md#selected)

### Methods

- [onUpdate:pagination](components_Table_extras.TableOwnProps.md#onupdate:pagination)
- [onUpdate:selected](components_Table_extras.TableOwnProps.md#onupdate:selected)

## Properties

### columns

• `Optional` `Readonly` **columns**: [`Columns`](../modules/components_Table_extras.md#columns)<`T`\>

___

### externalSorting

• `Optional` `Readonly` **externalSorting**: `booleanU`

___

### pagination

• `Optional` `Readonly` **pagination**: [`Pagination`](components_Table_extras.Pagination.md)

___

### rowKey

• `Optional` `Readonly` **rowKey**: `stringU`

___

### rows

• `Optional` `Readonly` **rows**: readonly `T`[]

___

### selectByRowClick

• `Optional` `Readonly` **selectByRowClick**: `booleanU`

___

### selected

• `Optional` `Readonly` **selected**: readonly `T`[]

## Methods

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
