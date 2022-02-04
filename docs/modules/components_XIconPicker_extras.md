[Quasar Framework](../index.md) / [Exports](../modules.md) / components/XIconPicker.extras

# Module: components/XIconPicker.extras

## Table of contents

### Interfaces

- [IconPickerSettings](../interfaces/components_XIconPicker_extras.IconPickerSettings.md)

### Variables

- [icons](components_XIconPicker_extras.md#icons)
- [lang](components_XIconPicker_extras.md#lang)

### Functions

- [injectIconPickerSettings](components_XIconPicker_extras.md#injecticonpickersettings)
- [provideIconPickerSettings](components_XIconPicker_extras.md#provideiconpickersettings)
- [testIconPickerSettings](components_XIconPicker_extras.md#testiconpickersettings)

## Variables

### icons

• **icons**: `Icons`<``"chevronLeft"`` \| ``"chevronRight"`` \| ``"close"``\> = `baseIcons`

___

### lang

• **lang**: `DictionaryAndWords`<``"IconPicker"`` \| ``"Of"``\> = `baseLang`

## Functions

### injectIconPickerSettings

▸ **injectIconPickerSettings**(): `ComputedRef`<[`IconPickerSettings`](../interfaces/components_XIconPicker_extras.IconPickerSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`IconPickerSettings`](../interfaces/components_XIconPicker_extras.IconPickerSettings.md)\>

Settings.

___

### provideIconPickerSettings

▸ **provideIconPickerSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`IconPickerSettings`](../interfaces/components_XIconPicker_extras.IconPickerSettings.md) | Settings. |

#### Returns

`void`

___

### testIconPickerSettings

▸ **testIconPickerSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`IconPickerSettings`](../interfaces/components_XIconPicker_extras.IconPickerSettings.md) | Settings. |

#### Returns

`void`
