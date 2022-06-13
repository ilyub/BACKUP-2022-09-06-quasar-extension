[Quasar extension](../index.md) / [Exports](../modules.md) / [components/IconPicker.extras](components_IconPicker_extras.md) / IconPicker

# Namespace: IconPicker

[components/IconPicker.extras](components_IconPicker_extras.md).IconPicker

## Table of contents

### Interfaces

- [Global](../interfaces/components_IconPicker_extras.IconPicker.Global.md)
- [Icon](../interfaces/components_IconPicker_extras.IconPicker.Icon.md)
- [OwnProps](../interfaces/components_IconPicker_extras.IconPicker.OwnProps.md)
- [ParentProps](../interfaces/components_IconPicker_extras.IconPicker.ParentProps.md)
- [ParentSlots](../interfaces/components_IconPicker_extras.IconPicker.ParentSlots.md)
- [Props](../interfaces/components_IconPicker_extras.IconPicker.Props.md)
- [Settings](../interfaces/components_IconPicker_extras.IconPicker.Settings.md)
- [Slots](../interfaces/components_IconPicker_extras.IconPicker.Slots.md)
- [Word](../interfaces/components_IconPicker_extras.IconPicker.Word.md)

### Variables

- [defaultSettings](components_IconPicker_extras.IconPicker.md#defaultsettings)
- [icons](components_IconPicker_extras.IconPicker.md#icons)
- [lang](components_IconPicker_extras.IconPicker.md#lang)

### Functions

- [injectSettings](components_IconPicker_extras.IconPicker.md#injectsettings)
- [provideSettings](components_IconPicker_extras.IconPicker.md#providesettings)
- [testProvideSettings](components_IconPicker_extras.IconPicker.md#testprovidesettings)

## Variables

### defaultSettings

• `Const` **defaultSettings**: [`Settings`](../interfaces/components_IconPicker_extras.IconPicker.Settings.md)

___

### icons

• `Const` **icons**: `baseIcons.Icons`<keyof [`Icon`](../interfaces/components_IconPicker_extras.IconPicker.Icon.md)\> = `baseIcons`

___

### lang

• `Const` **lang**: `baseLang.Lang`<keyof [`Word`](../interfaces/components_IconPicker_extras.IconPicker.Word.md), `never`\> = `baseLang`

## Functions

### injectSettings

▸ **injectSettings**(): `ComputedRef`<[`Settings`](../interfaces/components_IconPicker_extras.IconPicker.Settings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`Settings`](../interfaces/components_IconPicker_extras.IconPicker.Settings.md)\>

Settings.

___

### provideSettings

▸ **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`Settings`](../interfaces/components_IconPicker_extras.IconPicker.Settings.md) | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ **testProvideSettings**(`settings`): `IndexedObject`<`unknown`\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`Settings`](../interfaces/components_IconPicker_extras.IconPicker.Settings.md) | Settings. |

#### Returns

`IndexedObject`<`unknown`\>

Provide object.
