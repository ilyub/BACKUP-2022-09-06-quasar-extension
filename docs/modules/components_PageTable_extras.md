[Quasar extension](../index.md) / [Exports](../modules.md) / components/PageTable.extras

# Module: components/PageTable.extras

## Table of contents

### Interfaces

- [BodyCellSlotData](../interfaces/components_PageTable_extras.BodyCellSlotData.md)
- [Column](../interfaces/components_PageTable_extras.Column.md)
- [Field](../interfaces/components_PageTable_extras.Field.md)
- [PageTableOwnProps](../interfaces/components_PageTable_extras.PageTableOwnProps.md)
- [PageTableParentProps](../interfaces/components_PageTable_extras.PageTableParentProps.md)
- [PageTableProps](../interfaces/components_PageTable_extras.PageTableProps.md)
- [PageTableSettings](../interfaces/components_PageTable_extras.PageTableSettings.md)
- [PageTableSlots](../interfaces/components_PageTable_extras.PageTableSlots.md)
- [Pagination](../interfaces/components_PageTable_extras.Pagination.md)

### Type aliases

- [Align](components_PageTable_extras.md#align)
- [Columns](components_PageTable_extras.md#columns)
- [GlobalPageTable](components_PageTable_extras.md#globalpagetable)

### Variables

- [AlignVO](components_PageTable_extras.md#alignvo)

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
| `T` | `unknown` |

___

### GlobalPageTable

Ƭ **GlobalPageTable**<`T`\>: `GlobalComponentConstructor`<[`PageTableProps`](../interfaces/components_PageTable_extras.PageTableProps.md)<`T`\>, [`PageTableSlots`](../interfaces/components_PageTable_extras.PageTableSlots.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Variables

### AlignVO

• `Const` **AlignVO**: `ValidationObject`<[`Align`](components_PageTable_extras.md#align)\>

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
| `T` | `unknown` |

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
| `T` | `unknown` |

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
| `T` | `unknown` |

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
