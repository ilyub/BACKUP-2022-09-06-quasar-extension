[Quasar extension](../index.md) / [Exports](../modules.md) / [components/PageTable.extras](../modules/components_PageTable_extras.md) / PageTableProps

# Interface: PageTableProps<T\>

[components/PageTable.extras](../modules/components_PageTable_extras.md).PageTableProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

## Hierarchy

- [`PageTableParentProps`](components_PageTable_extras.PageTableParentProps.md)

- [`PageTableOwnProps`](components_PageTable_extras.PageTableOwnProps.md)<`T`\>

  ↳ **`PageTableProps`**

## Table of contents

### Properties

- [columns](components_PageTable_extras.PageTableProps.md#columns)
- [externalSorting](components_PageTable_extras.PageTableProps.md#externalsorting)
- [extraPageOffset](components_PageTable_extras.PageTableProps.md#extrapageoffset)
- [pagination](components_PageTable_extras.PageTableProps.md#pagination)
- [rowKey](components_PageTable_extras.PageTableProps.md#rowkey)
- [rows](components_PageTable_extras.PageTableProps.md#rows)
- [selectByRowClick](components_PageTable_extras.PageTableProps.md#selectbyrowclick)
- [selected](components_PageTable_extras.PageTableProps.md#selected)

### Methods

- [onUpdate:pagination](components_PageTable_extras.PageTableProps.md#onupdate:pagination)
- [onUpdate:selected](components_PageTable_extras.PageTableProps.md#onupdate:selected)

## Properties

### columns

• `Optional` `Readonly` **columns**: [`Columns`](../modules/components_PageTable_extras.md#columns)<`T`\>

#### Inherited from

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[columns](components_PageTable_extras.PageTableOwnProps.md#columns)

___

### externalSorting

• `Optional` `Readonly` **externalSorting**: `booleanU`

#### Inherited from

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[externalSorting](components_PageTable_extras.PageTableOwnProps.md#externalsorting)

___

### extraPageOffset

• `Optional` `Readonly` **extraPageOffset**: `stringU`

#### Inherited from

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[extraPageOffset](components_PageTable_extras.PageTableOwnProps.md#extrapageoffset)

___

### pagination

• `Optional` `Readonly` **pagination**: [`Pagination`](components_PageTable_extras.Pagination.md)

#### Inherited from

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[pagination](components_PageTable_extras.PageTableOwnProps.md#pagination)

___

### rowKey

• `Optional` `Readonly` **rowKey**: `stringU`

#### Inherited from

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[rowKey](components_PageTable_extras.PageTableOwnProps.md#rowkey)

___

### rows

• `Optional` `Readonly` **rows**: readonly `T`[]

#### Inherited from

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[rows](components_PageTable_extras.PageTableOwnProps.md#rows)

___

### selectByRowClick

• `Optional` `Readonly` **selectByRowClick**: `booleanU`

#### Inherited from

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[selectByRowClick](components_PageTable_extras.PageTableOwnProps.md#selectbyrowclick)

___

### selected

• `Optional` `Readonly` **selected**: readonly `T`[]

#### Inherited from

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[selected](components_PageTable_extras.PageTableOwnProps.md#selected)

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

#### Inherited from

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[onUpdate:pagination](components_PageTable_extras.PageTableOwnProps.md#onupdate:pagination)

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

[PageTableOwnProps](components_PageTable_extras.PageTableOwnProps.md).[onUpdate:selected](components_PageTable_extras.PageTableOwnProps.md#onupdate:selected)
