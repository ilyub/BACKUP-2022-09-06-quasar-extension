[Quasar Framework](../index.md) / [Exports](../modules.md) / components/extras/QVirtualScroll

# Module: components/extras/QVirtualScroll

## Table of contents

### Interfaces

- [VirtualScrollEvent](../interfaces/components_extras_QVirtualScroll.VirtualScrollEvent.md)

### Type aliases

- [Direction](components_extras_QVirtualScroll.md#direction)

### Variables

- [DirectionVO](components_extras_QVirtualScroll.md#directionvo)

### Functions

- [isDirection](components_extras_QVirtualScroll.md#isdirection)
- [isVirtualScroll](components_extras_QVirtualScroll.md#isvirtualscroll)
- [isVirtualScrollEvent](components_extras_QVirtualScroll.md#isvirtualscrollevent)

## Type aliases

### Direction

Ƭ **Direction**: ``"decrease"`` \| ``"increase"``

## Variables

### DirectionVO

• **DirectionVO**: `ValidationObject`<[`Direction`](components_extras_QVirtualScroll.md#direction)\>

## Functions

### isDirection

▸ `Const` **isDirection**(`value`): value is Direction

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Direction

___

### isVirtualScroll

▸ **isVirtualScroll**(`value`): value is QVirtualScroll

Checks that value type is QVirtualScroll.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is QVirtualScroll

_True_ if value type is QVirtualScroll, _false_ otherwise.

___

### isVirtualScrollEvent

▸ `Const` **isVirtualScrollEvent**(`value`): value is VirtualScrollEvent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is VirtualScrollEvent
