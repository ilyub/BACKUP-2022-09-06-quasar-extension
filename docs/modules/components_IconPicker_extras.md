[Quasar Framework](../index.md) / [Exports](../modules.md) / components/IconPicker.extras

# Module: components/IconPicker.extras

## Table of contents

### Interfaces

- [IconPickerSettings](../interfaces/components_IconPicker_extras.IconPickerSettings.md)

### Type aliases

- [IconPickerPropOptions](components_IconPicker_extras.md#iconpickerpropoptions)

### Variables

- [icons](components_IconPicker_extras.md#icons)
- [lang](components_IconPicker_extras.md#lang)

### Functions

- [injectIconPickerSettings](components_IconPicker_extras.md#injecticonpickersettings)
- [provideIconPickerSettings](components_IconPicker_extras.md#provideiconpickersettings)
- [testIconPickerSettings](components_IconPicker_extras.md#testiconpickersettings)

## Type aliases

### IconPickerPropOptions

Ƭ **IconPickerPropOptions**: [`ExtendPropOptions`](components_api.md#extendpropoptions)<[`IconButtonPropOptions`](components_IconButton_extras.md#iconbuttonpropoptions), { `cols`: [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`number`\> ; `modelValue`: [`PropOptions`](../interfaces/components_api.PropOptions.md)<`stringU`\> ; `placeholder`: [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`string`\> ; `rows`: [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`number`\> ; `spinnerSize`: [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`string`\>  }\>

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
