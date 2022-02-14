[Quasar extension](../index.md) / [Exports](../modules.md) / components/Group.extras

# Module: components/Group.extras

## Table of contents

### Interfaces

- [GroupItem](../interfaces/components_Group_extras.GroupItem.md)

### Type aliases

- [GroupItems](components_Group_extras.md#groupitems)
- [GroupPropOptions](components_Group_extras.md#grouppropoptions)

### Functions

- [isGroupItem](components_Group_extras.md#isgroupitem)
- [isGroupItems](components_Group_extras.md#isgroupitems)

## Type aliases

### GroupItems

Ƭ **GroupItems**: readonly [`GroupItem`](../interfaces/components_Group_extras.GroupItem.md)[]

___

### GroupPropOptions

Ƭ **GroupPropOptions**: [`ExtendPropOptions`](components_api.md#extendpropoptions)<{ `items`: [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<[`GroupItems`](components_Group_extras.md#groupitems)\> ; `notFoundLabel`: [`PropOptions`](../interfaces/components_api.PropOptions.md)<`stringU`\> ; `searchString`: [`PropOptions`](../interfaces/components_api.PropOptions.md)<`stringU`\>  }, [`RootElementProps`](../interfaces/components_api_rootElement.RootElementProps.md)\>

## Functions

### isGroupItem

▸ `Const` **isGroupItem**(`value`): value is GroupItem

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is GroupItem

___

### isGroupItems

▸ `Const` **isGroupItems**(`value`): value is readonly GroupItem[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly GroupItem[]
