[Quasar extension](../index.md) / [Exports](../modules.md) / components/Select.extras

# Module: components/Select.extras

## Table of contents

### Interfaces

- [SelectOption](../interfaces/components_Select_extras.SelectOption.md)
- [SelectOwnProps](../interfaces/components_Select_extras.SelectOwnProps.md)
- [SelectParentProps](../interfaces/components_Select_extras.SelectParentProps.md)
- [SelectProps](../interfaces/components_Select_extras.SelectProps.md)

### Type aliases

- [GlobalSelect](components_Select_extras.md#globalselect)
- [SelectOptions](components_Select_extras.md#selectoptions)
- [SelectSlots](components_Select_extras.md#selectslots)

### Functions

- [isSelectOption](components_Select_extras.md#isselectoption)
- [isSelectOptions](components_Select_extras.md#isselectoptions)

## Type aliases

### GlobalSelect

Ƭ **GlobalSelect**<`T`\>: [`GlobalComponent`](../interfaces/components_api.GlobalComponent.md)<[`SelectProps`](../interfaces/components_Select_extras.SelectProps.md)<`T`\>, [`SelectSlots`](components_Select_extras.md#selectslots)\>

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

### SelectSlots

Ƭ **SelectSlots**: `QSelectSlots`

## Functions

### isSelectOption

▸ **isSelectOption**(`value`): value is SelectOption<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is SelectOption<unknown\>

___

### isSelectOptions

▸ **isSelectOptions**(`value`): value is readonly SelectOption<unknown\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly SelectOption<unknown\>[]
