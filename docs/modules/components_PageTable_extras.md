[Quasar Framework](../index.md) / [Exports](../modules.md) / components/PageTable.extras

# Module: components/PageTable.extras

## Table of contents

### Interfaces

- [Column](../interfaces/components_PageTable_extras.Column.md)
- [PageTableSettings](../interfaces/components_PageTable_extras.PageTableSettings.md)

### Type aliases

- [Align](components_PageTable_extras.md#align)
- [Columns](components_PageTable_extras.md#columns)
- [Field](components_PageTable_extras.md#field)

### Variables

- [AlignVO](components_PageTable_extras.md#alignvo)

### Functions

- [injectPageTableSettings](components_PageTable_extras.md#injectpagetablesettings)
- [isAlign](components_PageTable_extras.md#isalign)
- [providePageTableSettings](components_PageTable_extras.md#providepagetablesettings)
- [testPageTableSettings](components_PageTable_extras.md#testpagetablesettings)

## Type aliases

### Align

Ƭ **Align**: ``"center"`` \| ``"left"`` \| ``"right"``

___

### Columns

Ƭ **Columns**<`T`\>: `ReadonlyArray`<[`Column`](../interfaces/components_PageTable_extras.Column.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Field

Ƭ **Field**<`T`\>: (`row`: `T`) => `string`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`row`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |

##### Returns

`string`

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
