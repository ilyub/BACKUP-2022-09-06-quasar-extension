[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Switchable.extras](components_Switchable_extras.md) / Switchable

# Namespace: Switchable

[components/Switchable.extras](components_Switchable_extras.md).Switchable

## Table of contents

### Interfaces

- [Global](../interfaces/components_Switchable_extras.Switchable.Global.md)
- [OwnProps](../interfaces/components_Switchable_extras.Switchable.OwnProps.md)
- [OwnSlots](../interfaces/components_Switchable_extras.Switchable.OwnSlots.md)
- [Props](../interfaces/components_Switchable_extras.Switchable.Props.md)
- [Settings](../interfaces/components_Switchable_extras.Switchable.Settings.md)
- [Slots](../interfaces/components_Switchable_extras.Switchable.Slots.md)

### Type Aliases

- [Transition](components_Switchable_extras.Switchable.md#transition)

### Variables

- [defaultSettings](components_Switchable_extras.Switchable.md#defaultsettings)

### Functions

- [injectSettings](components_Switchable_extras.Switchable.md#injectsettings)
- [provideSettings](components_Switchable_extras.Switchable.md#providesettings)
- [testProvideSettings](components_Switchable_extras.Switchable.md#testprovidesettings)

## Type Aliases

### Transition

Ƭ **Transition**: ``"none"`` \| ``"slide"``

## Variables

### defaultSettings

• `Const` **defaultSettings**: `ComputedRef`<[`Settings`](../interfaces/components_Switchable_extras.Switchable.Settings.md)\>

## Functions

### injectSettings

▸ **injectSettings**(): `ComputedRef`<[`Settings`](../interfaces/components_Switchable_extras.Switchable.Settings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`Settings`](../interfaces/components_Switchable_extras.Switchable.Settings.md)\>

Settings.

___

### provideSettings

▸ **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Switchable_extras.Switchable.Settings.md)\> | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ **testProvideSettings**(`settings`): `IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Switchable_extras.Switchable.Settings.md)\>\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_Switchable_extras.Switchable.Settings.md)\> | Settings. |

#### Returns

`IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_Switchable_extras.Switchable.Settings.md)\>\>

Provide object.
