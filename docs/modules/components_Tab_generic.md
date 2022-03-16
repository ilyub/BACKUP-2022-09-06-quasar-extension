[Quasar extension](../index.md) / [Exports](../modules.md) / components/Tab.generic

# Module: components/Tab.generic

## Table of contents

### Interfaces

- [TabOption](../interfaces/components_Tab_generic.TabOption.md)
- [TabOwnProps](../interfaces/components_Tab_generic.TabOwnProps.md)
- [TabParentProps](../interfaces/components_Tab_generic.TabParentProps.md)
- [TabProps](../interfaces/components_Tab_generic.TabProps.md)

### Type aliases

- [GlobalTab](components_Tab_generic.md#globaltab)
- [TabOptions](components_Tab_generic.md#taboptions)
- [TabSlots](components_Tab_generic.md#tabslots)

### Functions

- [genericTab](components_Tab_generic.md#generictab)

## Type aliases

### GlobalTab

Ƭ **GlobalTab**<`T`\>: [`GlobalComponent`](../interfaces/components_api.GlobalComponent.md)<[`TabProps`](../interfaces/components_Tab_generic.TabProps.md)<`T`\>, [`TabSlots`](components_Tab_generic.md#tabslots)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStrU` = `NumStrU` |

___

### TabOptions

Ƭ **TabOptions**<`T`\>: `ReadonlyArray`<[`TabOption`](../interfaces/components_Tab_generic.TabOption.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStrU` = `NumStrU` |

___

### TabSlots

Ƭ **TabSlots**: `QTabSlots`

## Functions

### genericTab

▸ **genericTab**<`T`\>(): [`GlobalTab`](components_Tab_generic.md#globaltab)<`T`\>

Generic Tab component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStrU` |

#### Returns

[`GlobalTab`](components_Tab_generic.md#globaltab)<`T`\>

Tab component.
