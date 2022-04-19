[Quasar extension](../index.md) / [Exports](../modules.md) / components/Resizer.extras

# Module: components/Resizer.extras

## Table of contents

### Interfaces

- [ResizerProps](../interfaces/components_Resizer_extras.ResizerProps.md)
- [ResizerSettings](../interfaces/components_Resizer_extras.ResizerSettings.md)
- [ResizerSlots](../interfaces/components_Resizer_extras.ResizerSlots.md)

### Type aliases

- [GlobalResizer](components_Resizer_extras.md#globalresizer)

### Functions

- [injectResizerSettings](components_Resizer_extras.md#injectresizersettings)
- [provideResizerSettings](components_Resizer_extras.md#provideresizersettings)
- [testResizerSettings](components_Resizer_extras.md#testresizersettings)

## Type aliases

### GlobalResizer

Ƭ **GlobalResizer**: [`GlobalComponent`](../interfaces/components_api_core.GlobalComponent.md)<[`ResizerProps`](../interfaces/components_Resizer_extras.ResizerProps.md), [`ResizerSlots`](../interfaces/components_Resizer_extras.ResizerSlots.md)\>

## Functions

### injectResizerSettings

▸ **injectResizerSettings**(): `ComputedRef`<[`ResizerSettings`](../interfaces/components_Resizer_extras.ResizerSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`ResizerSettings`](../interfaces/components_Resizer_extras.ResizerSettings.md)\>

Settings.

___

### provideResizerSettings

▸ **provideResizerSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`ResizerSettings`](../interfaces/components_Resizer_extras.ResizerSettings.md) | Settings. |

#### Returns

`void`

___

### testResizerSettings

▸ **testResizerSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Rec`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`ResizerSettings`](../interfaces/components_Resizer_extras.ResizerSettings.md) | Settings. |

#### Returns

`void`
