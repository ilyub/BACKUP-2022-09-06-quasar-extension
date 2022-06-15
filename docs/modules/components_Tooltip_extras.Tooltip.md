[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tooltip.extras](components_Tooltip_extras.md) / Tooltip

# Namespace: Tooltip

[components/Tooltip.extras](components_Tooltip_extras.md).Tooltip

## Table of contents

### Interfaces

- [Global](../interfaces/components_Tooltip_extras.Tooltip.Global.md)
- [ParentProps](../interfaces/components_Tooltip_extras.Tooltip.ParentProps.md)
- [ParentSlots](../interfaces/components_Tooltip_extras.Tooltip.ParentSlots.md)
- [PluginProps](../interfaces/components_Tooltip_extras.Tooltip.PluginProps.md)
- [Props](../interfaces/components_Tooltip_extras.Tooltip.Props.md)
- [Settings](../interfaces/components_Tooltip_extras.Tooltip.Settings.md)
- [Slots](../interfaces/components_Tooltip_extras.Tooltip.Slots.md)

### Variables

- [defaultSettings](components_Tooltip_extras.Tooltip.md#defaultsettings)

### Functions

- [injectSettings](components_Tooltip_extras.Tooltip.md#injectsettings)
- [provideSettings](components_Tooltip_extras.Tooltip.md#providesettings)
- [testProvideSettings](components_Tooltip_extras.Tooltip.md#testprovidesettings)
- [useDisableTooltips](components_Tooltip_extras.Tooltip.md#usedisabletooltips)

## Variables

### defaultSettings

• `Const` **defaultSettings**: `ComputedRef`<[`Settings`](../interfaces/components_Tooltip_extras.Tooltip.Settings.md)\>

## Functions

### injectSettings

▸ **injectSettings**(): `ComputedRef`<[`Settings`](../interfaces/components_Tooltip_extras.Tooltip.Settings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`Settings`](../interfaces/components_Tooltip_extras.Tooltip.Settings.md)\>

Settings.

___

### provideSettings

▸ **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Tooltip_extras.Tooltip.Settings.md)\> | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ **testProvideSettings**(`settings`): `IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Tooltip_extras.Tooltip.Settings.md)\>\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Tooltip_extras.Tooltip.Settings.md)\> | Settings. |

#### Returns

`IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Tooltip_extras.Tooltip.Settings.md)\>\>

Provide object.

___

### useDisableTooltips

▸ **useDisableTooltips**(): `Ref`<`boolean`\>

Use disable tooltips plugin.

#### Returns

`Ref`<`boolean`\>

Disable tooltips plugin.
