[Quasar extension](../index.md) / [Exports](../modules.md) / components/IconPicker.extras

# Module: components/IconPicker.extras

## Table of contents

### Interfaces

- [IconPickerOwnProps](../interfaces/components_IconPicker_extras.IconPickerOwnProps.md)
- [IconPickerParentProps](../interfaces/components_IconPicker_extras.IconPickerParentProps.md)
- [IconPickerProps](../interfaces/components_IconPicker_extras.IconPickerProps.md)
- [IconPickerSettings](../interfaces/components_IconPicker_extras.IconPickerSettings.md)
- [ModuleIcons](../interfaces/components_IconPicker_extras.ModuleIcons.md)
- [ModuleWord](../interfaces/components_IconPicker_extras.ModuleWord.md)

### Type aliases

- [GlobalIconPicker](components_IconPicker_extras.md#globaliconpicker)
- [IconPickerSlots](components_IconPicker_extras.md#iconpickerslots)

### Variables

- [icons](components_IconPicker_extras.md#icons)
- [lang](components_IconPicker_extras.md#lang)

### Functions

- [injectIconPickerSettings](components_IconPicker_extras.md#injecticonpickersettings)
- [provideIconPickerSettings](components_IconPicker_extras.md#provideiconpickersettings)
- [testIconPickerSettings](components_IconPicker_extras.md#testiconpickersettings)

## Type aliases

### GlobalIconPicker

Ƭ **GlobalIconPicker**: [`GlobalComponent`](../interfaces/components_api_core.GlobalComponent.md)<[`IconPickerProps`](../interfaces/components_IconPicker_extras.IconPickerProps.md), [`IconPickerSlots`](components_IconPicker_extras.md#iconpickerslots)\>

___

### IconPickerSlots

Ƭ **IconPickerSlots**: [`IconButtonSlots`](components_IconButton_extras.md#iconbuttonslots)

## Variables

### icons

• `Const` **icons**: `baseIcons.Icons`<``"chevronLeft"`` \| ``"chevronRight"`` \| ``"close"``\> = `baseIcons`

___

### lang

• `Const` **lang**: `baseLang.Lang`<keyof [`ModuleWord`](../interfaces/components_IconPicker_extras.ModuleWord.md), `never`\> = `baseLang`

## Functions

### injectIconPickerSettings

▸ **injectIconPickerSettings**(): `ComputedRef`<[`IconPickerSettings`](../interfaces/components_IconPicker_extras.IconPickerSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`IconPickerSettings`](../interfaces/components_IconPicker_extras.IconPickerSettings.md)\>

Settings.

___

### provideIconPickerSettings

▸ **provideIconPickerSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`IconPickerSettings`](../interfaces/components_IconPicker_extras.IconPickerSettings.md) | Settings. |

#### Returns

`void`

___

### testIconPickerSettings

▸ **testIconPickerSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Rec`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`IconPickerSettings`](../interfaces/components_IconPicker_extras.IconPickerSettings.md) | Settings. |

#### Returns

`void`
