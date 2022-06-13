[Quasar extension](../index.md) / [Exports](../modules.md) / components/Sortable.core

# Module: components/Sortable.core

## Table of contents

### Interfaces

- [Element](../interfaces/components_Sortable_core.Element.md)
- [MoveData](../interfaces/components_Sortable_core.MoveData.md)

### Type aliases

- [Elements](components_Sortable_core.md#elements)

### Functions

- [buildElements](components_Sortable_core.md#buildelements)
- [isElement](components_Sortable_core.md#iselement)
- [isElements](components_Sortable_core.md#iselements)
- [isHtmlElement](components_Sortable_core.md#ishtmlelement)
- [isMoveData](components_Sortable_core.md#ismovedata)

## Type aliases

### Elements

Ƭ **Elements**: readonly [`Element`](../interfaces/components_Sortable_core.Element.md)[]

## Functions

### buildElements

▸ **buildElements**(`items`, `group`, `key`): `Writable`<[`Elements`](components_Sortable_core.md#elements)\>

Builds vuedraggable elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `objects` | Items. |
| `group` | `string` | Group. |
| `key` | `string` | Key. |

#### Returns

`Writable`<[`Elements`](components_Sortable_core.md#elements)\>

Elements.

___

### isElement

▸ **isElement**(`value`): value is Element

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Element

___

### isElements

▸ **isElements**(`value`): value is readonly Element[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly Element[]

___

### isHtmlElement

▸ **isHtmlElement**(`value`): value is HTMLElement

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is HTMLElement

___

### isMoveData

▸ **isMoveData**(`value`): value is MoveData

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is MoveData
