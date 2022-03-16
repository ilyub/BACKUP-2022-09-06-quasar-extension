[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / TableProps

# Interface: TableProps<T\>

[components/Table.extras](../modules/components_Table_extras.md).TableProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

## Hierarchy

- [`TableParentProps`](components_Table_extras.TableParentProps.md)

- [`TableOwnProps`](components_Table_extras.TableOwnProps.md)<`T`\>

  ↳ **`TableProps`**

## Table of contents

### Properties

- [columns](components_Table_extras.TableProps.md#columns)
- [externalSorting](components_Table_extras.TableProps.md#externalsorting)
- [pagination](components_Table_extras.TableProps.md#pagination)
- [rowKey](components_Table_extras.TableProps.md#rowkey)
- [rows](components_Table_extras.TableProps.md#rows)
- [selectByRowClick](components_Table_extras.TableProps.md#selectbyrowclick)
- [selected](components_Table_extras.TableProps.md#selected)

### Methods

- [onUpdate:pagination](components_Table_extras.TableProps.md#onupdate:pagination)
- [onUpdate:selected](components_Table_extras.TableProps.md#onupdate:selected)

## Properties

### columns

• `Optional` `Readonly` **columns**: [`Columns`](../modules/components_Table_extras.md#columns)<`T`\>

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[columns](components_Table_extras.TableOwnProps.md#columns)

___

### externalSorting

• `Optional` `Readonly` **externalSorting**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[externalSorting](components_Table_extras.TableOwnProps.md#externalsorting)

___

### pagination

• `Optional` `Readonly` **pagination**: [`Pagination`](components_Table_extras.Pagination.md)

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[pagination](components_Table_extras.TableOwnProps.md#pagination)

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

### selectByRowClick

• `Optional` `Readonly` **selectByRowClick**: `booleanU`

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[selectByRowClick](components_Table_extras.TableOwnProps.md#selectbyrowclick)

___

### selected

• `Optional` `Readonly` **selected**: readonly `T`[]

#### Inherited from

[TableOwnProps](components_Table_extras.TableOwnProps.md).[selected](components_Table_extras.TableOwnProps.md#selected)

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
