[Quasar extension](../index.md) / [Exports](../modules.md) / components/Select.extras

# Module: components/Select.extras

## Table of contents

### Interfaces

- [SelectOption](../interfaces/components_Select_extras.SelectOption.md)

### Type aliases

- [SelectOptions](components_Select_extras.md#selectoptions)
- [SelectPropOptions](components_Select_extras.md#selectpropoptions)

### Functions

- [isSelectOption](components_Select_extras.md#isselectoption)
- [isSelectOptions](components_Select_extras.md#isselectoptions)

## Type aliases

### SelectOptions

Ƭ **SelectOptions**<`T`\>: `ReadonlyArray`<[`SelectOption`](../interfaces/components_Select_extras.SelectOption.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### SelectPropOptions

Ƭ **SelectPropOptions**: [`PropsToPropOptions`](components_api.md#propstopropoptions)<`QSelectProps`, { `modelValue`: [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`unknown`\> ; `options`: [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<[`SelectOptions`](components_Select_extras.md#selectoptions)\>  }\>

## Functions

### isSelectOption

▸ `Const` **isSelectOption**(`value`): value is SelectOption<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is SelectOption<unknown\>

___

### isSelectOptions

▸ `Const` **isSelectOptions**(`value`): value is readonly SelectOption<unknown\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly SelectOption<unknown\>[]
