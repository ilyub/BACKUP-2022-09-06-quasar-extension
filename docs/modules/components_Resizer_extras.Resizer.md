[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Resizer.extras](components_Resizer_extras.md) / Resizer

# Namespace: Resizer

[components/Resizer.extras](components_Resizer_extras.md).Resizer

## Table of contents

### Interfaces

- [Global](../interfaces/components_Resizer_extras.Resizer.Global.md)
- [OwnProps](../interfaces/components_Resizer_extras.Resizer.OwnProps.md)
- [OwnSlots](../interfaces/components_Resizer_extras.Resizer.OwnSlots.md)
- [Props](../interfaces/components_Resizer_extras.Resizer.Props.md)
- [Settings](../interfaces/components_Resizer_extras.Resizer.Settings.md)
- [Slots](../interfaces/components_Resizer_extras.Resizer.Slots.md)

### Variables

- [defaultSettings](components_Resizer_extras.Resizer.md#defaultsettings)

### Functions

- [injectSettings](components_Resizer_extras.Resizer.md#injectsettings)
- [provideSettings](components_Resizer_extras.Resizer.md#providesettings)
- [testProvideSettings](components_Resizer_extras.Resizer.md#testprovidesettings)

## Variables

### defaultSettings

• `Const` **defaultSettings**: `ComputedRef`<[`Settings`](../interfaces/components_Resizer_extras.Resizer.Settings.md)\>

## Functions

### injectSettings

▸ **injectSettings**(): `ComputedRef`<[`Settings`](../interfaces/components_Resizer_extras.Resizer.Settings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`Settings`](../interfaces/components_Resizer_extras.Resizer.Settings.md)\>

Settings.

___

### provideSettings

▸ **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Resizer_extras.Resizer.Settings.md)\> | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ **testProvideSettings**(`settings`): `IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Resizer_extras.Resizer.Settings.md)\>\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Resizer_extras.Resizer.Settings.md)\> | Settings. |

#### Returns

`IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Resizer_extras.Resizer.Settings.md)\>\>

Provide object.
