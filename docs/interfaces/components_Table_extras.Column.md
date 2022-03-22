[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / Column

# Interface: Column<T\>

[components/Table.extras](../modules/components_Table_extras.md).Column

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Table of contents

### Properties

- [align](components_Table_extras.Column.md#align)
- [field](components_Table_extras.Column.md#field)
- [label](components_Table_extras.Column.md#label)
- [maxWidth](components_Table_extras.Column.md#maxwidth)
- [minWidth](components_Table_extras.Column.md#minwidth)
- [name](components_Table_extras.Column.md#name)
- [sortOrder](components_Table_extras.Column.md#sortorder)
- [sortable](components_Table_extras.Column.md#sortable)
- [width](components_Table_extras.Column.md#width)

### Methods

- [sort](components_Table_extras.Column.md#sort)

## Properties

### align

• `Readonly` **align**: [`Align`](../modules/components_Table_extras.md#align)

___

### field

• `Readonly` **field**: [`Field`](components_Table_extras.Field.md)<`T`\>

___

### label

• `Readonly` **label**: `string`

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

___

### minWidth

• `Optional` `Readonly` **minWidth**: `number`

___

### name

• `Readonly` **name**: `string`

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: ``"ad"`` \| ``"da"``

___

### sortable

• `Optional` `Readonly` **sortable**: ``true``

___

### width

• `Optional` `Readonly` **width**: `number`

## Methods

### sort

▸ `Optional` `Readonly` **sort**(`value1`, `value2`, `row1`, `row2`): `number`

Sorting function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `string` | Value 1. |
| `value2` | `string` | Value 2. |
| `row1` | `T` | Row 1. |
| `row2` | `T` | Row 2. |

#### Returns

`number`

Comparison result.
