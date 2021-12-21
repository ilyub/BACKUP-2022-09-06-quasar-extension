[Quasar Framework](../index.md) / [Exports](../modules.md) / components/Tooltip.extras

# Module: components/Tooltip.extras

## Table of contents

### Interfaces

- [TooltipSettings](../interfaces/components_Tooltip_extras.TooltipSettings.md)

### Type aliases

- [Direction](components_Tooltip_extras.md#direction)
- [InjectTooltipSettings](components_Tooltip_extras.md#injecttooltipsettings)

### Variables

- [DirectionVO](components_Tooltip_extras.md#directionvo)
- [injectTooltipSettings](components_Tooltip_extras.md#injecttooltipsettings)

### Functions

- [defaultTooltipSettings](components_Tooltip_extras.md#defaulttooltipsettings)
- [isDirection](components_Tooltip_extras.md#isdirection)

## Type aliases

### Direction

Ƭ **Direction**: ``"down"`` \| ``"down-left"`` \| ``"down-right"`` \| ``"left"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right"`` \| ``"right-down"`` \| ``"right-up"`` \| ``"up"`` \| ``"up-left"`` \| ``"up-right"``

___

### InjectTooltipSettings

Ƭ **InjectTooltipSettings**: [`ComputedInjectionKey`](components_api.md#computedinjectionkey)<[`TooltipSettings`](../interfaces/components_Tooltip_extras.TooltipSettings.md)\>

## Variables

### DirectionVO

• **DirectionVO**: `ValidationObject`<[`Direction`](components_Tooltip_extras.md#direction)\>

___

### injectTooltipSettings

• **injectTooltipSettings**: [`InjectTooltipSettings`](components_Tooltip_extras.md#injecttooltipsettings)

## Functions

### defaultTooltipSettings

▸ **defaultTooltipSettings**(): [`TooltipSettings`](../interfaces/components_Tooltip_extras.TooltipSettings.md)

Returns default settings.

#### Returns

[`TooltipSettings`](../interfaces/components_Tooltip_extras.TooltipSettings.md)

Default settings.

___

### isDirection

▸ `Const` **isDirection**(`value`): value is Direction

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Direction
