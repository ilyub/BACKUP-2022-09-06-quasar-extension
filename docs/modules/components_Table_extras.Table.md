[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](components_Table_extras.md) / Table

# Namespace: Table

[components/Table.extras](components_Table_extras.md).Table

## Table of contents

### Interfaces

- [BodyCellSlotData](../interfaces/components_Table_extras.Table.BodyCellSlotData.md)
- [BodySlotData](../interfaces/components_Table_extras.Table.BodySlotData.md)
- [Column](../interfaces/components_Table_extras.Table.Column.md)
- [Global](../interfaces/components_Table_extras.Table.Global.md)
- [HeaderCellSlotData](../interfaces/components_Table_extras.Table.HeaderCellSlotData.md)
- [Icon](../interfaces/components_Table_extras.Table.Icon.md)
- [MultiSelectData](../interfaces/components_Table_extras.Table.MultiSelectData.md)
- [OwnProps](../interfaces/components_Table_extras.Table.OwnProps.md)
- [OwnSlots](../interfaces/components_Table_extras.Table.OwnSlots.md)
- [PaginationEmit](../interfaces/components_Table_extras.Table.PaginationEmit.md)
- [PaginationProp](../interfaces/components_Table_extras.Table.PaginationProp.md)
- [ParentProps](../interfaces/components_Table_extras.Table.ParentProps.md)
- [ParentSlots](../interfaces/components_Table_extras.Table.ParentSlots.md)
- [Props](../interfaces/components_Table_extras.Table.Props.md)
- [Settings](../interfaces/components_Table_extras.Table.Settings.md)
- [Slots](../interfaces/components_Table_extras.Table.Slots.md)
- [Word](../interfaces/components_Table_extras.Table.Word.md)

### Type Aliases

- [Align](components_Table_extras.Table.md#align)
- [ColumnWidths](components_Table_extras.Table.md#columnwidths)
- [Columns](components_Table_extras.Table.md#columns)
- [ColumnsOrder](components_Table_extras.Table.md#columnsorder)
- [HiddenColumns](components_Table_extras.Table.md#hiddencolumns)

### Variables

- [defaultSettings](components_Table_extras.Table.md#defaultsettings)
- [icons](components_Table_extras.Table.md#icons)
- [lang](components_Table_extras.Table.md#lang)

### Functions

- [injectSettings](components_Table_extras.Table.md#injectsettings)
- [provideSettings](components_Table_extras.Table.md#providesettings)
- [testProvideSettings](components_Table_extras.Table.md#testprovidesettings)

## Type Aliases

### Align

Ƭ **Align**: ``"center"`` \| ``"left"`` \| ``"right"``

___

### ColumnWidths

Ƭ **ColumnWidths**: `ReadonlyMap`<`string`, `number`\>

___

### Columns

Ƭ **Columns**<`T`\>: `ReadonlyArray`<[`Column`](../interfaces/components_Table_extras.Table.Column.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

___

### ColumnsOrder

Ƭ **ColumnsOrder**: `ReadonlyMap`<`string`, `number`\>

___

### HiddenColumns

Ƭ **HiddenColumns**: `ReadonlySet`<`string`\>

## Variables

### defaultSettings

• `Const` **defaultSettings**: `ComputedRef`<[`Settings`](../interfaces/components_Table_extras.Table.Settings.md)\>

___

### icons

• `Const` **icons**: `baseIcons.Icons`<keyof [`Icon`](../interfaces/components_Table_extras.Table.Icon.md)\> = `baseIcons`

___

### lang

• `Const` **lang**: `baseLang.Lang`<keyof [`Word`](../interfaces/components_Table_extras.Table.Word.md), `never`\> = `baseLang`

## Functions

### injectSettings

▸ **injectSettings**(): `ComputedRef`<[`Settings`](../interfaces/components_Table_extras.Table.Settings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`Settings`](../interfaces/components_Table_extras.Table.Settings.md)\>

Settings.

___

### provideSettings

▸ **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Table_extras.Table.Settings.md)\> | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ **testProvideSettings**(`settings`): `IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Table_extras.Table.Settings.md)\>\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Table_extras.Table.Settings.md)\> | Settings. |

#### Returns

`IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Table_extras.Table.Settings.md)\>\>

Provide object.
