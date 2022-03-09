[Quasar extension](../index.md) / [Exports](../modules.md) / [components/PageTable.extras](../modules/components_PageTable_extras.md) / PageTableOwnProps

# Interface: PageTableOwnProps<T\>

[components/PageTable.extras](../modules/components_PageTable_extras.md).PageTableOwnProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

## Hierarchy

- **`PageTableOwnProps`**

  ↳ [`PageTableProps`](components_PageTable_extras.PageTableProps.md)

## Table of contents

### Properties

- [columns](components_PageTable_extras.PageTableOwnProps.md#columns)
- [externalSorting](components_PageTable_extras.PageTableOwnProps.md#externalsorting)
- [extraPageOffset](components_PageTable_extras.PageTableOwnProps.md#extrapageoffset)
- [pagination](components_PageTable_extras.PageTableOwnProps.md#pagination)
- [rowKey](components_PageTable_extras.PageTableOwnProps.md#rowkey)
- [rows](components_PageTable_extras.PageTableOwnProps.md#rows)
- [selectByRowClick](components_PageTable_extras.PageTableOwnProps.md#selectbyrowclick)
- [selected](components_PageTable_extras.PageTableOwnProps.md#selected)

### Methods

- [onUpdate:pagination](components_PageTable_extras.PageTableOwnProps.md#onupdate:pagination)
- [onUpdate:selected](components_PageTable_extras.PageTableOwnProps.md#onupdate:selected)

## Properties

### columns

• `Optional` `Readonly` **columns**: [`Columns`](../modules/components_PageTable_extras.md#columns)<`T`\>

___

### externalSorting

• `Optional` `Readonly` **externalSorting**: `booleanU`

___

### extraPageOffset

• `Optional` `Readonly` **extraPageOffset**: `stringU`

___

### pagination

• `Optional` `Readonly` **pagination**: [`Pagination`](components_PageTable_extras.Pagination.md)

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
| `value` | [`Pagination`](components_PageTable_extras.Pagination.md) | Value. |

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
