[Quasar extension](../index.md) / [Exports](../modules.md) / components/Table.extras

# Module: components/Table.extras

## Table of contents

### Interfaces

- [AllSelectedData](../interfaces/components_Table_extras.AllSelectedData.md)
- [BodyCellSlotData](../interfaces/components_Table_extras.BodyCellSlotData.md)
- [BodySelectionSlotData](../interfaces/components_Table_extras.BodySelectionSlotData.md)
- [Column](../interfaces/components_Table_extras.Column.md)
- [Field](../interfaces/components_Table_extras.Field.md)
- [HeaderCellSlotData](../interfaces/components_Table_extras.HeaderCellSlotData.md)
- [HeaderSelectionSlotData](../interfaces/components_Table_extras.HeaderSelectionSlotData.md)
- [ModuleIcons](../interfaces/components_Table_extras.ModuleIcons.md)
- [ModuleWord](../interfaces/components_Table_extras.ModuleWord.md)
- [Pagination](../interfaces/components_Table_extras.Pagination.md)
- [SteadyBottomSlotData](../interfaces/components_Table_extras.SteadyBottomSlotData.md)
- [TableOwnProps](../interfaces/components_Table_extras.TableOwnProps.md)
- [TableParentProps](../interfaces/components_Table_extras.TableParentProps.md)
- [TableProps](../interfaces/components_Table_extras.TableProps.md)
- [TableSettings](../interfaces/components_Table_extras.TableSettings.md)
- [TableSlots](../interfaces/components_Table_extras.TableSlots.md)

### Type aliases

- [Align](components_Table_extras.md#align)
- [Columns](components_Table_extras.md#columns)
- [ColumnsOrder](components_Table_extras.md#columnsorder)
- [GlobalTable](components_Table_extras.md#globaltable)
- [HiddenColumns](components_Table_extras.md#hiddencolumns)

### Variables

- [AlignVO](components_Table_extras.md#alignvo)
- [icons](components_Table_extras.md#icons)
- [lang](components_Table_extras.md#lang)

### Functions

- [injectTableSettings](components_Table_extras.md#injecttablesettings)
- [isAlign](components_Table_extras.md#isalign)
- [isColumnFactory](components_Table_extras.md#iscolumnfactory)
- [isColumnsFactory](components_Table_extras.md#iscolumnsfactory)
- [isColumnsOrder](components_Table_extras.md#iscolumnsorder)
- [isFieldFactory](components_Table_extras.md#isfieldfactory)
- [isHiddenColumns](components_Table_extras.md#ishiddencolumns)
- [isPagination](components_Table_extras.md#ispagination)
- [provideTableSettings](components_Table_extras.md#providetablesettings)
- [testTableSettings](components_Table_extras.md#testtablesettings)

## Type aliases

### Align

Ƭ **Align**: ``"center"`` \| ``"left"`` \| ``"right"``

___

### Columns

Ƭ **Columns**<`T`\>: `ReadonlyArray`<[`Column`](../interfaces/components_Table_extras.Column.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

___

### ColumnsOrder

Ƭ **ColumnsOrder**: `ReadonlyMap`<`string`, `number`\>

___

### GlobalTable

Ƭ **GlobalTable**<`T`\>: [`GlobalComponent`](../interfaces/components_api.GlobalComponent.md)<[`TableProps`](../interfaces/components_Table_extras.TableProps.md)<`T`\>, [`TableSlots`](../interfaces/components_Table_extras.TableSlots.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

___

### HiddenColumns

Ƭ **HiddenColumns**: `ReadonlySet`<`string`\>

## Variables

### AlignVO

• `Const` **AlignVO**: `ValidationObject`<[`Align`](components_Table_extras.md#align)\>

___

### icons

• `Const` **icons**: `Icons`<keyof [`ModuleIcons`](../interfaces/components_Table_extras.ModuleIcons.md)\> = `baseIcons`

___

### lang

• `Const` **lang**: `DictionaryAndWords`<keyof [`ModuleWord`](../interfaces/components_Table_extras.ModuleWord.md)\> = `baseLang`

## Functions

### injectTableSettings

▸ **injectTableSettings**(): `ComputedRef`<[`TableSettings`](../interfaces/components_Table_extras.TableSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`TableSettings`](../interfaces/components_Table_extras.TableSettings.md)\>

Settings.

___

### isAlign

▸ **isAlign**(`value`): value is Align

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Align

___

### isColumnFactory

▸ **isColumnFactory**<`T`\>(): `is.Guard`<[`Column`](../interfaces/components_Table_extras.Column.md)<`T`\>\>

Creates guard for Column\<T\> type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

#### Returns

`is.Guard`<[`Column`](../interfaces/components_Table_extras.Column.md)<`T`\>\>

Guard for Column\<T\> type.

___

### isColumnsFactory

▸ **isColumnsFactory**<`T`\>(): `is.Guard`<[`Columns`](components_Table_extras.md#columns)<`T`\>\>

Creates guard for Columns\<T\> type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

#### Returns

`is.Guard`<[`Columns`](components_Table_extras.md#columns)<`T`\>\>

Guard for Columns\<T\> type.

___

### isColumnsOrder

▸ **isColumnsOrder**(`value`): value is ReadonlyMap<string, number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is ReadonlyMap<string, number\>

___

### isFieldFactory

▸ **isFieldFactory**<`T`\>(): `is.Guard`<[`Field`](../interfaces/components_Table_extras.Field.md)<`T`\>\>

Creates guard for Field\<T\> type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

#### Returns

`is.Guard`<[`Field`](../interfaces/components_Table_extras.Field.md)<`T`\>\>

Guard for Field\<T\> type.

___

### isHiddenColumns

▸ **isHiddenColumns**(`value`): value is ReadonlySet<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is ReadonlySet<string\>

___

### isPagination

▸ **isPagination**(`value`): value is Pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Pagination

___

### provideTableSettings

▸ **provideTableSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`TableSettings`](../interfaces/components_Table_extras.TableSettings.md) | Settings. |

#### Returns

`void`

___

### testTableSettings

▸ **testTableSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`TableSettings`](../interfaces/components_Table_extras.TableSettings.md) | Settings. |

#### Returns

`void`
