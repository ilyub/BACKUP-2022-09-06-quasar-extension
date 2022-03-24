[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/confirmedClickModule

# Module: components/api/confirmedClickModule

## Table of contents

### Interfaces

- [ConfirmedClickModule](../interfaces/components_api_confirmedClickModule.ConfirmedClickModule.md)
- [ConfirmedClickProps](../interfaces/components_api_confirmedClickModule.ConfirmedClickProps.md)
- [ModuleWord](../interfaces/components_api_confirmedClickModule.ModuleWord.md)

### Variables

- [confirmedClickEmits](components_api_confirmedClickModule.md#confirmedclickemits)
- [confirmedClickProps](components_api_confirmedClickModule.md#confirmedclickprops)
- [lang](components_api_confirmedClickModule.md#lang)

### Functions

- [useConfirmedClick](components_api_confirmedClickModule.md#useconfirmedclick)

## Variables

### confirmedClickEmits

• `Const` **confirmedClickEmits**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `confirmedClick` | () => `boolean` |

___

### confirmedClickProps

• `Const` **confirmedClickProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `confirmation` | [`PropOptions`](../interfaces/components_api.PropOptions.md)<`undefined` \| `string`\> |

___

### lang

• `Const` **lang**: `DictionaryAndWords`<keyof [`ModuleWord`](../interfaces/components_api_confirmedClickModule.ModuleWord.md)\> = `baseLang`

## Functions

### useConfirmedClick

▸ **useConfirmedClick**(`props`, `emit`): [`ConfirmedClickModule`](../interfaces/components_api_confirmedClickModule.ConfirmedClickModule.md)

Confirmed click module.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ValidateProps`](components_api.md#validateprops)<[`ConfirmedClickProps`](../interfaces/components_api_confirmedClickModule.ConfirmedClickProps.md)\> | Props. |
| `emit` | [`ValidateEmit`](components_api.md#validateemit)<[`ConfirmedClickProps`](../interfaces/components_api_confirmedClickModule.ConfirmedClickProps.md)\> | Emit function. |

#### Returns

[`ConfirmedClickModule`](../interfaces/components_api_confirmedClickModule.ConfirmedClickModule.md)

Confirmed click module.
