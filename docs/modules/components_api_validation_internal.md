[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/validation.internal

# Module: components/api/validation.internal

## Table of contents

### Enumerations

- [Context](../enums/components_api_validation_internal.Context.md)

### Interfaces

- [Options](../interfaces/components_api_validation_internal.Options.md)
- [OwnProps](../interfaces/components_api_validation_internal.OwnProps.md)
- [Plugin](../interfaces/components_api_validation_internal.Plugin.md)
- [PluginWord](../interfaces/components_api_validation_internal.PluginWord.md)
- [Props](../interfaces/components_api_validation_internal.Props.md)
- [Rule](../interfaces/components_api_validation_internal.Rule.md)

### Type Aliases

- [Rules](components_api_validation_internal.md#rules)
- [ValidationRules](components_api_validation_internal.md#validationrules)

### Variables

- [lang](components_api_validation_internal.md#lang)

## Type Aliases

### Rules

Ƭ **Rules**<`T`\>: `ReadonlyArray`<[`Rule`](../interfaces/components_api_validation_internal.Rule.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### ValidationRules

Ƭ **ValidationRules**<`T`\>: `ReadonlyArray`<`ValidationRule`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Variables

### lang

• `Const` **lang**: `baseLang.Lang`<keyof [`PluginWord`](../interfaces/components_api_validation_internal.PluginWord.md), `never`\> = `baseLang`
