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
- [InjectPageTableSettings](components_PageTable_extras.md#injectpagetablesettings)

### Variables

- [AlignVO](components_PageTable_extras.md#alignvo)
- [injectPageTableSettings](components_PageTable_extras.md#injectpagetablesettings)

### Functions

- [defaultPageTableSettings](components_PageTable_extras.md#defaultpagetablesettings)
- [isAlign](components_PageTable_extras.md#isalign)

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

___

### InjectPageTableSettings

Ƭ **InjectPageTableSettings**: [`ComputedInjectionKey`](components_api.md#computedinjectionkey)<[`PageTableSettings`](../interfaces/components_PageTable_extras.PageTableSettings.md)\>

## Variables

### AlignVO

• **AlignVO**: `ValidationObject`<[`Align`](components_PageTable_extras.md#align)\>

___

### injectPageTableSettings

• **injectPageTableSettings**: [`InjectPageTableSettings`](components_PageTable_extras.md#injectpagetablesettings)

## Functions

### defaultPageTableSettings

▸ **defaultPageTableSettings**(): [`PageTableSettings`](../interfaces/components_PageTable_extras.PageTableSettings.md)

Returns default settings.

#### Returns

[`PageTableSettings`](../interfaces/components_PageTable_extras.PageTableSettings.md)

Default settings.

___

### isAlign

▸ `Const` **isAlign**(`value`): value is Align

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Align
