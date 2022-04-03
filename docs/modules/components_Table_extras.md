[Quasar extension](../index.md) / [Exports](../modules.md) / components/Table.extras

# Module: components/Table.extras

## Table of contents

### Interfaces

- [BodyCellContextSlotData](../interfaces/components_Table_extras.BodyCellContextSlotData.md)
- [BodyCellSlotData](../interfaces/components_Table_extras.BodyCellSlotData.md)
- [BodyContextSlotData](../interfaces/components_Table_extras.BodyContextSlotData.md)
- [BodySelectionSlotData](../interfaces/components_Table_extras.BodySelectionSlotData.md)
- [Column](../interfaces/components_Table_extras.Column.md)
- [Field](../interfaces/components_Table_extras.Field.md)
- [HeaderCellSlotData](../interfaces/components_Table_extras.HeaderCellSlotData.md)
- [HeaderMenuAppendSlotData](../interfaces/components_Table_extras.HeaderMenuAppendSlotData.md)
- [HeaderMenuPrependSlotData](../interfaces/components_Table_extras.HeaderMenuPrependSlotData.md)
- [HeaderSelectionSlotData](../interfaces/components_Table_extras.HeaderSelectionSlotData.md)
- [ModuleIcons](../interfaces/components_Table_extras.ModuleIcons.md)
- [ModuleWord](../interfaces/components_Table_extras.ModuleWord.md)
- [MultiSelectData](../interfaces/components_Table_extras.MultiSelectData.md)
- [Pagination](../interfaces/components_Table_extras.Pagination.md)
- [SteadyBottomSlotData](../interfaces/components_Table_extras.SteadyBottomSlotData.md)
- [TableOwnProps](../interfaces/components_Table_extras.TableOwnProps.md)
- [TableParentProps](../interfaces/components_Table_extras.TableParentProps.md)
- [TableProps](../interfaces/components_Table_extras.TableProps.md)
- [TableSettings](../interfaces/components_Table_extras.TableSettings.md)
- [TableSlots](../interfaces/components_Table_extras.TableSlots.md)
- [TableState](../interfaces/components_Table_extras.TableState.md)

### Type aliases

- [Align](components_Table_extras.md#align)
- [ColumnWidths](components_Table_extras.md#columnwidths)
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
- [isColumnWidths](components_Table_extras.md#iscolumnwidths)
- [isColumnsOrder](components_Table_extras.md#iscolumnsorder)
- [isHiddenColumns](components_Table_extras.md#ishiddencolumns)
- [isPagination](components_Table_extras.md#ispagination)
- [isTableState](components_Table_extras.md#istablestate)
- [isTableStateU](components_Table_extras.md#istablestateu)
- [provideTableSettings](components_Table_extras.md#providetablesettings)
- [testTableSettings](components_Table_extras.md#testtablesettings)
- [useTableState](components_Table_extras.md#usetablestate)

## Type aliases

### Align

Ƭ **Align**: ``"center"`` \| ``"left"`` \| ``"right"``

___

### ColumnWidths

Ƭ **ColumnWidths**: `ReadonlyMap`<`string`, `number`\>

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

### isColumnWidths

▸ **isColumnWidths**(`value`): value is ReadonlyMap<string, number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is ReadonlyMap<string, number\>

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

### isTableState

▸ **isTableState**(`value`): value is TableState

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is TableState

___

### isTableStateU

▸ **isTableStateU**(`value`): value is undefined \| TableState

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| TableState

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
| `mutableProvide` | `TypedObject`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`TableSettings`](../interfaces/components_Table_extras.TableSettings.md) | Settings. |

#### Returns

`void`

___

### useTableState

▸ **useTableState**(`initialState`, `sortBy`, `descending`): `Object`

Table state module.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `ComputedRef`<[`TableState`](../interfaces/components_Table_extras.TableState.md)\> | Initial state. |
| `sortBy` | `ComputedRef`<`stringU`\> | Sort by. |
| `descending` | `ComputedRef`<`booleanU`\> | Descending. |

#### Returns

`Object`

Table state module.

| Name | Type |
| :------ | :------ |
| `columnWidths` | `Ref`<[`ColumnWidths`](components_Table_extras.md#columnwidths)\> |
| `columnsOrder` | `Ref`<[`ColumnsOrder`](components_Table_extras.md#columnsorder)\> |
| `hiddenColumns` | `Ref`<[`HiddenColumns`](components_Table_extras.md#hiddencolumns)\> |
| `initialState` | `ComputedRef`<[`TableState`](../interfaces/components_Table_extras.TableState.md)\> |
| `modified` | `ComputedRef`<`boolean`\> |
| `state` | `ComputedRef`<[`TableState`](../interfaces/components_Table_extras.TableState.md)\> |
