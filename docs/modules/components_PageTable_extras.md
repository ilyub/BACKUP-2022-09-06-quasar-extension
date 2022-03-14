[Quasar extension](../index.md) / [Exports](../modules.md) / components/PageTable.extras

# Module: components/PageTable.extras

## Table of contents

### Interfaces

- [BodyCellSlotData](../interfaces/components_PageTable_extras.BodyCellSlotData.md)
- [Column](../interfaces/components_PageTable_extras.Column.md)
- [Field](../interfaces/components_PageTable_extras.Field.md)
- [ModuleIcons](../interfaces/components_PageTable_extras.ModuleIcons.md)
- [ModuleWord](../interfaces/components_PageTable_extras.ModuleWord.md)
- [PageTableOwnProps](../interfaces/components_PageTable_extras.PageTableOwnProps.md)
- [PageTableParentProps](../interfaces/components_PageTable_extras.PageTableParentProps.md)
- [PageTableProps](../interfaces/components_PageTable_extras.PageTableProps.md)
- [PageTableSettings](../interfaces/components_PageTable_extras.PageTableSettings.md)
- [PageTableSlots](../interfaces/components_PageTable_extras.PageTableSlots.md)
- [Pagination](../interfaces/components_PageTable_extras.Pagination.md)
- [SteadyBottomSlotData](../interfaces/components_PageTable_extras.SteadyBottomSlotData.md)

### Type aliases

- [Align](components_PageTable_extras.md#align)
- [Columns](components_PageTable_extras.md#columns)
- [GlobalPageTable](components_PageTable_extras.md#globalpagetable)

### Variables

- [AlignVO](components_PageTable_extras.md#alignvo)
- [icons](components_PageTable_extras.md#icons)
- [lang](components_PageTable_extras.md#lang)

### Functions

- [injectPageTableSettings](components_PageTable_extras.md#injectpagetablesettings)
- [isAlign](components_PageTable_extras.md#isalign)
- [isColumnFactory](components_PageTable_extras.md#iscolumnfactory)
- [isColumnsFactory](components_PageTable_extras.md#iscolumnsfactory)
- [isFieldFactory](components_PageTable_extras.md#isfieldfactory)
- [isPagination](components_PageTable_extras.md#ispagination)
- [providePageTableSettings](components_PageTable_extras.md#providepagetablesettings)
- [testPageTableSettings](components_PageTable_extras.md#testpagetablesettings)

## Type aliases

### Align

Ƭ **Align**: ``"center"`` \| ``"left"`` \| ``"right"``

___

### Columns

Ƭ **Columns**<`T`\>: `ReadonlyArray`<[`Column`](../interfaces/components_PageTable_extras.Column.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

___

### GlobalPageTable

Ƭ **GlobalPageTable**<`T`\>: [`GlobalComponent`](../interfaces/components_api.GlobalComponent.md)<[`PageTableProps`](../interfaces/components_PageTable_extras.PageTableProps.md)<`T`\>, [`PageTableSlots`](../interfaces/components_PageTable_extras.PageTableSlots.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

## Variables

### AlignVO

• `Const` **AlignVO**: `ValidationObject`<[`Align`](components_PageTable_extras.md#align)\>

___

### icons

• `Const` **icons**: `Icons`<keyof [`ModuleIcons`](../interfaces/components_PageTable_extras.ModuleIcons.md)\> = `baseIcons`

___

### lang

• `Const` **lang**: `DictionaryAndWords`<keyof [`ModuleWord`](../interfaces/components_PageTable_extras.ModuleWord.md)\> = `baseLang`

## Functions

### injectPageTableSettings

▸ **injectPageTableSettings**(): `ComputedRef`<[`PageTableSettings`](../interfaces/components_PageTable_extras.PageTableSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`PageTableSettings`](../interfaces/components_PageTable_extras.PageTableSettings.md)\>

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

▸ **isColumnFactory**<`T`\>(): `is.Guard`<[`Column`](../interfaces/components_PageTable_extras.Column.md)<`T`\>\>

Creates guard for Column\<T\> type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Returns

`is.Guard`<[`Column`](../interfaces/components_PageTable_extras.Column.md)<`T`\>\>

Guard for Column\<T\> type.

___

### isColumnsFactory

▸ **isColumnsFactory**<`T`\>(): `is.Guard`<[`Columns`](components_PageTable_extras.md#columns)<`T`\>\>

Creates guard for Columns\<T\> type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Returns

`is.Guard`<[`Columns`](components_PageTable_extras.md#columns)<`T`\>\>

Guard for Columns\<T\> type.

___

### isFieldFactory

▸ **isFieldFactory**<`T`\>(): `is.Guard`<[`Field`](../interfaces/components_PageTable_extras.Field.md)<`T`\>\>

Creates guard for Field\<T\> type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Returns

`is.Guard`<[`Field`](../interfaces/components_PageTable_extras.Field.md)<`T`\>\>

Guard for Field\<T\> type.

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

### providePageTableSettings

▸ **providePageTableSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`PageTableSettings`](../interfaces/components_PageTable_extras.PageTableSettings.md) | Settings. |

#### Returns

`void`

___

### testPageTableSettings

▸ **testPageTableSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`PageTableSettings`](../interfaces/components_PageTable_extras.PageTableSettings.md) | Settings. |

#### Returns

`void`
