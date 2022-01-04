[Quasar Framework](../index.md) / [Exports](../modules.md) / components/extras/VirtualScroll

# Module: components/extras/VirtualScroll

## Table of contents

### Interfaces

- [VirtualScrollEvent](../interfaces/components_extras_VirtualScroll.VirtualScrollEvent.md)

### Type aliases

- [Direction](components_extras_VirtualScroll.md#direction)

### Variables

- [DirectionVO](components_extras_VirtualScroll.md#directionvo)

### Functions

- [isDirection](components_extras_VirtualScroll.md#isdirection)
- [isVirtualScroll](components_extras_VirtualScroll.md#isvirtualscroll)
- [isVirtualScrollEvent](components_extras_VirtualScroll.md#isvirtualscrollevent)

## Type aliases

### Direction

Ƭ **Direction**: ``"decrease"`` \| ``"increase"``

## Variables

### DirectionVO

• **DirectionVO**: `ValidationObject`<[`Direction`](components_extras_VirtualScroll.md#direction)\>

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
