[Quasar extension](../index.md) / [Exports](../modules.md) / components/OptionGroup.extras

# Module: components/OptionGroup.extras

## Table of contents

### Interfaces

- [OptionGroupOption](../interfaces/components_OptionGroup_extras.OptionGroupOption.md)

### Type aliases

- [OptionGroupOptions](components_OptionGroup_extras.md#optiongroupoptions)
- [OptionGroupPropOptions](components_OptionGroup_extras.md#optiongrouppropoptions)

### Functions

- [isOptionGroupOption](components_OptionGroup_extras.md#isoptiongroupoption)
- [isOptionGroupOptions](components_OptionGroup_extras.md#isoptiongroupoptions)

## Type aliases

### OptionGroupOptions

Ƭ **OptionGroupOptions**<`T`\>: `ReadonlyArray`<[`OptionGroupOption`](../interfaces/components_OptionGroup_extras.OptionGroupOption.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### OptionGroupPropOptions

Ƭ **OptionGroupPropOptions**: [`PropsToPropOptions`](components_api.md#propstopropoptions)<`QOptionGroupProps`, { `modelValue`: [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`unknown`\> ; `options`: [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<[`OptionGroupOptions`](components_OptionGroup_extras.md#optiongroupoptions)\>  }\>

## Functions

### isOptionGroupOption

▸ `Const` **isOptionGroupOption**(`value`): value is OptionGroupOption<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is OptionGroupOption<unknown\>

___

### isOptionGroupOptions

▸ `Const` **isOptionGroupOptions**(`value`): value is readonly OptionGroupOption<unknown\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly OptionGroupOption<unknown\>[]
