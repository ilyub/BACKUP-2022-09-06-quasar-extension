[Quasar extension](../index.md) / [Exports](../modules.md) / components/Tooltip.extras

# Module: components/Tooltip.extras

## Table of contents

### Interfaces

- [DisableTooltips](../interfaces/components_Tooltip_extras.DisableTooltips.md)
- [TooltipOwnProps](../interfaces/components_Tooltip_extras.TooltipOwnProps.md)
- [TooltipProps](../interfaces/components_Tooltip_extras.TooltipProps.md)
- [TooltipSettings](../interfaces/components_Tooltip_extras.TooltipSettings.md)

### Type aliases

- [Direction](components_Tooltip_extras.md#direction)
- [GlobalTooltip](components_Tooltip_extras.md#globaltooltip)
- [TooltipParentProps](components_Tooltip_extras.md#tooltipparentprops)
- [TooltipSlots](components_Tooltip_extras.md#tooltipslots)

### Variables

- [DirectionVO](components_Tooltip_extras.md#directionvo)
- [disabled](components_Tooltip_extras.md#disabled)

### Functions

- [injectTooltipSettings](components_Tooltip_extras.md#injecttooltipsettings)
- [isDirection](components_Tooltip_extras.md#isdirection)
- [isDirectionU](components_Tooltip_extras.md#isdirectionu)
- [provideTooltipSettings](components_Tooltip_extras.md#providetooltipsettings)
- [testTooltipSettings](components_Tooltip_extras.md#testtooltipsettings)
- [useDisableTooltips](components_Tooltip_extras.md#usedisabletooltips)

## Type aliases

### Direction

Ƭ **Direction**: ``"down-left"`` \| ``"down-right"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"left"`` \| ``"right-down"`` \| ``"right-up"`` \| ``"right"`` \| ``"up-left"`` \| ``"up-right"`` \| ``"up"``

___

### GlobalTooltip

Ƭ **GlobalTooltip**: [`GlobalComponent`](../interfaces/components_api_core.GlobalComponent.md)<[`TooltipProps`](../interfaces/components_Tooltip_extras.TooltipProps.md), [`TooltipSlots`](components_Tooltip_extras.md#tooltipslots)\>

___

### TooltipParentProps

Ƭ **TooltipParentProps**: `QTooltipProps`

___

### TooltipSlots

Ƭ **TooltipSlots**: `QTooltipSlots`

## Variables

### DirectionVO

• `Const` **DirectionVO**: `ValidationObject`<[`Direction`](components_Tooltip_extras.md#direction)\>

___

### disabled

• `Const` **disabled**: `ComputedRef`<`boolean`\>

## Functions

### injectTooltipSettings

▸ **injectTooltipSettings**(): `ComputedRef`<[`TooltipSettings`](../interfaces/components_Tooltip_extras.TooltipSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`TooltipSettings`](../interfaces/components_Tooltip_extras.TooltipSettings.md)\>

Settings.

___

### isDirection

▸ **isDirection**(`value`): value is Direction

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Direction

___

### isDirectionU

▸ **isDirectionU**(`value`): value is undefined \| Direction

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
| `settings` | () => [`TooltipSettings`](../interfaces/components_Tooltip_extras.TooltipSettings.md) | Settings. |

#### Returns

`void`

___

### testTooltipSettings

▸ **testTooltipSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Rec`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`TooltipSettings`](../interfaces/components_Tooltip_extras.TooltipSettings.md) | Settings. |

#### Returns

`void`

___

### useDisableTooltips

▸ **useDisableTooltips**(): [`DisableTooltips`](../interfaces/components_Tooltip_extras.DisableTooltips.md)

Returns DisableTooltips mixin.

#### Returns

[`DisableTooltips`](../interfaces/components_Tooltip_extras.DisableTooltips.md)

DisableTooltips mixin.
