[Quasar Framework](../index.md) / [Exports](../modules.md) / components/PageTable.extras

# Module: components/PageTable.extras

## Table of contents

### Interfaces

- [BodyCellSlotData](../interfaces/components_PageTable_extras.BodyCellSlotData.md)
- [Column](../interfaces/components_PageTable_extras.Column.md)
- [PageTableSettings](../interfaces/components_PageTable_extras.PageTableSettings.md)

### Type aliases

- [Align](components_PageTable_extras.md#align)
- [Columns](components_PageTable_extras.md#columns)
- [Field](components_PageTable_extras.md#field)
- [PageTablePropOptions](components_PageTable_extras.md#pagetablepropoptions)

### Variables

- [AlignVO](components_PageTable_extras.md#alignvo)

### Functions

- [injectPageTableSettings](components_PageTable_extras.md#injectpagetablesettings)
- [isAlign](components_PageTable_extras.md#isalign)
- [isBodyCellSlotDataFactory](components_PageTable_extras.md#isbodycellslotdatafactory)
- [isColumnFactory](components_PageTable_extras.md#iscolumnfactory)
- [isColumnsFactory](components_PageTable_extras.md#iscolumnsfactory)
- [isFieldFactory](components_PageTable_extras.md#isfieldfactory)
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

### Field

Ƭ **Field**<`T`\>: (`row`: `T`) => `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Type declaration

▸ (`row`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |

##### Returns

`string`

___

### PageTablePropOptions

Ƭ **PageTablePropOptions**<`T`\>: [`PropsToPropOptions`](components_api.md#propstopropoptions)<`QTableProps`, { `columns`: [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<[`Columns`](components_PageTable_extras.md#columns)<`T`\>\> ; `extraPageOffset`: [`PropOptions`](../interfaces/components_api.PropOptions.md)<`stringU`\> ; `limit`: [`PropOptions`](../interfaces/components_api.PropOptions.md)<`numberU`\> ; `rows`: [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<readonly `T`[]\> ; `selected`: [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<readonly `T`[]\>  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Variables

### AlignVO

• **AlignVO**: `ValidationObject`<[`Align`](components_PageTable_extras.md#align)\>

## Functions

### injectPageTableSettings

▸ **injectPageTableSettings**(): `ComputedRef`<[`PageTableSettings`](../interfaces/components_PageTable_extras.PageTableSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`PageTableSettings`](../interfaces/components_PageTable_extras.PageTableSettings.md)\>

Settings.

___

### isAlign

▸ `Const` **isAlign**(`value`): value is Align

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Align

___

### isBodyCellSlotDataFactory

▸ **isBodyCellSlotDataFactory**<`T`\>(`guard`): `is.Guard`<[`BodyCellSlotData`](../interfaces/components_PageTable_extras.BodyCellSlotData.md)<`T`\>\>

Creates guard for BodyCellSlotData\<T\> type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | `Guard`<`T`\> | Guard for type T. |

#### Returns

`is.Guard`<[`BodyCellSlotData`](../interfaces/components_PageTable_extras.BodyCellSlotData.md)<`T`\>\>

Guard for BodyCellSlotData\<T\> type.

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

▸ **isFieldFactory**<`T`\>(): `is.Guard`<[`Field`](components_PageTable_extras.md#field)<`T`\>\>

Creates guard for Field\<T\> type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Returns

`is.Guard`<[`Field`](components_PageTable_extras.md#field)<`T`\>\>

Guard for Field\<T\> type.

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
