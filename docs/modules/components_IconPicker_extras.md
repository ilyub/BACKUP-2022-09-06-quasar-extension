[Quasar extension](../index.md) / [Exports](../modules.md) / components/IconPicker.extras

# Module: components/IconPicker.extras

## Table of contents

### Interfaces

- [IconPickerOwnProps](../interfaces/components_IconPicker_extras.IconPickerOwnProps.md)
- [IconPickerProps](../interfaces/components_IconPicker_extras.IconPickerProps.md)
- [IconPickerSettings](../interfaces/components_IconPicker_extras.IconPickerSettings.md)

### Type aliases

- [GlobalIconPicker](components_IconPicker_extras.md#globaliconpicker)
- [IconPickerParentProps](components_IconPicker_extras.md#iconpickerparentprops)
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

Ƭ **GlobalIconPicker**: `GlobalComponentConstructor`<[`IconPickerProps`](../interfaces/components_IconPicker_extras.IconPickerProps.md), [`IconPickerSlots`](components_IconPicker_extras.md#iconpickerslots)\>

___

### IconPickerParentProps

Ƭ **IconPickerParentProps**: [`ReadonlyOmit`](components_api.md#readonlyomit)<[`IconButtonProps`](../interfaces/components_IconButton_extras.IconButtonProps.md), ``"modelValue"``\>

___

### IconPickerSlots

Ƭ **IconPickerSlots**: [`IconButtonSlots`](components_IconButton_extras.md#iconbuttonslots)

## Variables

### icons

• **icons**: `Icons`<``"chevronLeft"`` \| ``"chevronRight"`` \| ``"close"``\> = `baseIcons`

___

### lang

• **lang**: `DictionaryAndWords`<``"IconPicker"`` \| ``"Of"``\> = `baseLang`

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
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`IconPickerSettings`](../interfaces/components_IconPicker_extras.IconPickerSettings.md) | Settings. |

#### Returns

`void`
