[Quasar extension](../index.md) / [Exports](../modules.md) / [components/BaseButton.extras](components_BaseButton_extras.md) / BaseButton

# Namespace: BaseButton

[components/BaseButton.extras](components_BaseButton_extras.md).BaseButton

## Table of contents

### Interfaces

- [Global](../interfaces/components_BaseButton_extras.BaseButton.Global.md)
- [OwnProps](../interfaces/components_BaseButton_extras.BaseButton.OwnProps.md)
- [ParentProps](../interfaces/components_BaseButton_extras.BaseButton.ParentProps.md)
- [ParentSlots](../interfaces/components_BaseButton_extras.BaseButton.ParentSlots.md)
- [PluginProps](../interfaces/components_BaseButton_extras.BaseButton.PluginProps.md)
- [Props](../interfaces/components_BaseButton_extras.BaseButton.Props.md)
- [Settings](../interfaces/components_BaseButton_extras.BaseButton.Settings.md)
- [Slots](../interfaces/components_BaseButton_extras.BaseButton.Slots.md)

### Type Aliases

- [Global2](components_BaseButton_extras.BaseButton.md#global2)

### Variables

- [defaultSettings](components_BaseButton_extras.BaseButton.md#defaultsettings)

### Functions

- [injectSettings](components_BaseButton_extras.BaseButton.md#injectsettings)
- [provideSettings](components_BaseButton_extras.BaseButton.md#providesettings)
- [testProvideSettings](components_BaseButton_extras.BaseButton.md#testprovidesettings)

## Type Aliases

### Global2

Ƭ **Global2**: { [K in keyof Global]: Global[K] \| Ref<Global[K]\> }

## Variables

### defaultSettings

• `Const` **defaultSettings**: `ComputedRef`<[`Settings`](../interfaces/components_BaseButton_extras.BaseButton.Settings.md)\>

## Functions

### injectSettings

▸ **injectSettings**(): `ComputedRef`<[`Settings`](../interfaces/components_BaseButton_extras.BaseButton.Settings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`Settings`](../interfaces/components_BaseButton_extras.BaseButton.Settings.md)\>

Settings.

___

### provideSettings

▸ **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_BaseButton_extras.BaseButton.Settings.md)\> | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ **testProvideSettings**(`settings`): `IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_BaseButton_extras.BaseButton.Settings.md)\>\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `ComputedRef`<[`Settings`](../interfaces/components_BaseButton_extras.BaseButton.Settings.md)\> | Settings. |

#### Returns

`IndexedObject`<`ComputedRef`<[`Settings`](../interfaces/components_BaseButton_extras.BaseButton.Settings.md)\>\>

Provide object.
