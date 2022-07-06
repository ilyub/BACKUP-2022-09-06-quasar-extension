[Quasar extension](../index.md) / [Exports](../modules.md) / components/Sortable.internal

# Module: components/Sortable.internal

## Table of contents

### Interfaces

- [Element](../interfaces/components_Sortable_internal.Element.md)
- [MoveData](../interfaces/components_Sortable_internal.MoveData.md)

### Type Aliases

- [Elements](components_Sortable_internal.md#elements)

### Functions

- [buildElements](components_Sortable_internal.md#buildelements)
- [isElement](components_Sortable_internal.md#iselement)
- [isElements](components_Sortable_internal.md#iselements)
- [isHtmlElement](components_Sortable_internal.md#ishtmlelement)
- [isMoveData](components_Sortable_internal.md#ismovedata)

## Type Aliases

### Elements

Ƭ **Elements**: readonly [`Element`](../interfaces/components_Sortable_internal.Element.md)[]

## Functions

### buildElements

▸ **buildElements**(`items`, `group`, `key`): `Writable`<[`Elements`](components_Sortable_internal.md#elements)\>

Builds vuedraggable elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `objects` | Items. |
| `group` | `string` | Group. |
| `key` | `string` | Key. |

#### Returns

`Writable`<[`Elements`](components_Sortable_internal.md#elements)\>

Elements.

___

### isElement

▸ **isElement**(`value`): value is Element

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is Element

_True_ if value type is T, _false_ otherwise.

___

### isElements

▸ **isElements**(`value`): value is readonly Element[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly Element[]

_True_ if value type is T, _false_ otherwise.

___

### isHtmlElement

▸ **isHtmlElement**(`value`): value is HTMLElement

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is HTMLElement

_True_ if value type is T, _false_ otherwise.

___

### isMoveData

▸ **isMoveData**(`value`): value is MoveData

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is MoveData

_True_ if value type is T, _false_ otherwise.
