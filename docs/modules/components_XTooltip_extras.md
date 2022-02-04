[Quasar Framework](../index.md) / [Exports](../modules.md) / components/XTooltip.extras

# Module: components/XTooltip.extras

## Table of contents

### Interfaces

- [DisableTooltips](../interfaces/components_XTooltip_extras.DisableTooltips.md)
- [TooltipSettings](../interfaces/components_XTooltip_extras.TooltipSettings.md)

### Type aliases

- [Direction](components_XTooltip_extras.md#direction)

### Variables

- [DirectionVO](components_XTooltip_extras.md#directionvo)
- [disabled](components_XTooltip_extras.md#disabled)

### Functions

- [injectTooltipSettings](components_XTooltip_extras.md#injecttooltipsettings)
- [isDirection](components_XTooltip_extras.md#isdirection)
- [isDirectionU](components_XTooltip_extras.md#isdirectionu)
- [provideTooltipSettings](components_XTooltip_extras.md#providetooltipsettings)
- [testTooltipSettings](components_XTooltip_extras.md#testtooltipsettings)
- [useDisableTooltips](components_XTooltip_extras.md#usedisabletooltips)

## Type aliases

### Direction

Ƭ **Direction**: ``"down"`` \| ``"down-left"`` \| ``"down-right"`` \| ``"left"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right"`` \| ``"right-down"`` \| ``"right-up"`` \| ``"up"`` \| ``"up-left"`` \| ``"up-right"``

## Variables

### DirectionVO

• **DirectionVO**: `ValidationObject`<[`Direction`](components_XTooltip_extras.md#direction)\>

___

### disabled

• **disabled**: `ComputedRef`<`boolean`\>

## Functions

### injectTooltipSettings

▸ **injectTooltipSettings**(): `ComputedRef`<[`TooltipSettings`](../interfaces/components_XTooltip_extras.TooltipSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`TooltipSettings`](../interfaces/components_XTooltip_extras.TooltipSettings.md)\>

Settings.

___

### isDirection

▸ `Const` **isDirection**(`value`): value is Direction

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Direction

___

### isDirectionU

▸ `Const` **isDirectionU**(`value`): value is undefined \| Direction

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| Direction

___

### provideTooltipSettings

▸ **provideTooltipSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`TooltipSettings`](../interfaces/components_XTooltip_extras.TooltipSettings.md) | Settings. |

#### Returns

`void`

___

### testTooltipSettings

▸ **testTooltipSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`TooltipSettings`](../interfaces/components_XTooltip_extras.TooltipSettings.md) | Settings. |

#### Returns

`void`

___

### useDisableTooltips

▸ **useDisableTooltips**(): [`DisableTooltips`](../interfaces/components_XTooltip_extras.DisableTooltips.md)

Returns DisableTooltips mixin.

#### Returns

[`DisableTooltips`](../interfaces/components_XTooltip_extras.DisableTooltips.md)

DisableTooltips mixin.
