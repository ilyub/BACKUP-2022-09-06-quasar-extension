[Quasar extension](../index.md) / [Exports](../modules.md) / [components/LanguagePicker.extras](components_LanguagePicker_extras.md) / LanguagePicker

# Namespace: LanguagePicker

[components/LanguagePicker.extras](components_LanguagePicker_extras.md).LanguagePicker

## Table of contents

### Interfaces

- [Global](../interfaces/components_LanguagePicker_extras.LanguagePicker.Global.md)
- [Option](../interfaces/components_LanguagePicker_extras.LanguagePicker.Option.md)
- [OwnProps](../interfaces/components_LanguagePicker_extras.LanguagePicker.OwnProps.md)
- [ParentProps](../interfaces/components_LanguagePicker_extras.LanguagePicker.ParentProps.md)
- [ParentSlots](../interfaces/components_LanguagePicker_extras.LanguagePicker.ParentSlots.md)
- [Props](../interfaces/components_LanguagePicker_extras.LanguagePicker.Props.md)
- [Settings](../interfaces/components_LanguagePicker_extras.LanguagePicker.Settings.md)
- [Slots](../interfaces/components_LanguagePicker_extras.LanguagePicker.Slots.md)

### Type aliases

- [Options](components_LanguagePicker_extras.LanguagePicker.md#options)

### Variables

- [defaultSettings](components_LanguagePicker_extras.LanguagePicker.md#defaultsettings)

### Functions

- [injectSettings](components_LanguagePicker_extras.LanguagePicker.md#injectsettings)
- [provideSettings](components_LanguagePicker_extras.LanguagePicker.md#providesettings)
- [testProvideSettings](components_LanguagePicker_extras.LanguagePicker.md#testprovidesettings)

## Type aliases

### Options

Ƭ **Options**: readonly [`Option`](../interfaces/components_LanguagePicker_extras.LanguagePicker.Option.md)[]

## Variables

### defaultSettings

• `Const` **defaultSettings**: [`Settings`](../interfaces/components_LanguagePicker_extras.LanguagePicker.Settings.md)

## Functions

### injectSettings

▸ **injectSettings**(): `ComputedRef`<[`Settings`](../interfaces/components_LanguagePicker_extras.LanguagePicker.Settings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`Settings`](../interfaces/components_LanguagePicker_extras.LanguagePicker.Settings.md)\>

Settings.

___

### provideSettings

▸ **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`Settings`](../interfaces/components_LanguagePicker_extras.LanguagePicker.Settings.md) | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ **testProvideSettings**(`settings`): `IndexedObject`<`unknown`\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`Settings`](../interfaces/components_LanguagePicker_extras.LanguagePicker.Settings.md) | Settings. |

#### Returns

`IndexedObject`<`unknown`\>

Provide object.
