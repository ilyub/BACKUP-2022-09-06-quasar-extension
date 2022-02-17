[Quasar extension](../index.md) / [Exports](../modules.md) / components/Select.extras

# Module: components/Select.extras

## Table of contents

### Interfaces

- [SelectOption](../interfaces/components_Select_extras.SelectOption.md)
- [SelectOwnProps](../interfaces/components_Select_extras.SelectOwnProps.md)
- [SelectProps](../interfaces/components_Select_extras.SelectProps.md)

### Type aliases

- [GlobalSelect](components_Select_extras.md#globalselect)
- [SelectOptions](components_Select_extras.md#selectoptions)
- [SelectParentProps](components_Select_extras.md#selectparentprops)
- [SelectSlots](components_Select_extras.md#selectslots)

### Functions

- [isSelectOption](components_Select_extras.md#isselectoption)
- [isSelectOptions](components_Select_extras.md#isselectoptions)

## Type aliases

### GlobalSelect

Ƭ **GlobalSelect**<`T`\>: `GlobalComponentConstructor`<[`SelectProps`](../interfaces/components_Select_extras.SelectProps.md)<`T`\>, [`SelectSlots`](components_Select_extras.md#selectslots)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### SelectOptions

Ƭ **SelectOptions**<`T`\>: `ReadonlyArray`<[`SelectOption`](../interfaces/components_Select_extras.SelectOption.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### SelectParentProps

Ƭ **SelectParentProps**: [`ReadonlyOmit`](components_api.md#readonlyomit)<`QSelectProps`, ``"modelValue"`` \| ``"options"``\>

___

### SelectSlots

Ƭ **SelectSlots**: `QSelectSlots`

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
