[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / [Table](../modules/components_Table_extras.Table.md) / Column

# Interface: Column<T\>

[components/Table.extras](../modules/components_Table_extras.md).[Table](../modules/components_Table_extras.Table.md).Column

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Table of contents

### Properties

- [align](components_Table_extras.Table.Column.md#align)
- [field](components_Table_extras.Table.Column.md#field)
- [label](components_Table_extras.Table.Column.md#label)
- [maxWidth](components_Table_extras.Table.Column.md#maxwidth)
- [minWidth](components_Table_extras.Table.Column.md#minwidth)
- [name](components_Table_extras.Table.Column.md#name)
- [sort](components_Table_extras.Table.Column.md#sort)
- [sortOrder](components_Table_extras.Table.Column.md#sortorder)
- [sortable](components_Table_extras.Table.Column.md#sortable)
- [width](components_Table_extras.Table.Column.md#width)

## Properties

### align

• `Readonly` **align**: [`Align`](../modules/components_Table_extras.Table.md#align)

___

### field

• `Readonly` **field**: (`row`: `T`) => `string`

#### Type declaration

▸ (`row`): `string`

Returns formatted field.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `T` | Row. |

##### Returns

`string`

Formatted field.

___

### label

• `Readonly` **label**: `Key`<`Word`\>

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

### sort

• `Optional` `Readonly` **sort**: (`value1`: `string`, `value2`: `string`, `row1`: `T`, `row2`: `T`) => `number`

#### Type declaration

▸ (`value1`, `value2`, `row1`, `row2`): `number`

Sort callback.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `string` | Value 1. |
| `value2` | `string` | Value 2. |
| `row1` | `T` | Row 1. |
| `row2` | `T` | Row 2. |

##### Returns

`number`

Comparison result.

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: ``"ad"`` \| ``"da"``

___

### sortable

• `Optional` `Readonly` **sortable**: `boolean`

___

### width

• `Optional` `Readonly` **width**: `number`
