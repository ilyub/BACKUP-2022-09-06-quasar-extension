[Quasar extension](../index.md) / [Exports](../modules.md) / components/LanguagePicker.extras

# Module: components/LanguagePicker.extras

## Table of contents

### Interfaces

- [LanguagePickerItem](../interfaces/components_LanguagePicker_extras.LanguagePickerItem.md)
- [LanguagePickerOptions](../interfaces/components_LanguagePicker_extras.LanguagePickerOptions.md)
- [LanguagePickerOwnProps](../interfaces/components_LanguagePicker_extras.LanguagePickerOwnProps.md)
- [LanguagePickerProps](../interfaces/components_LanguagePicker_extras.LanguagePickerProps.md)
- [LanguagePickerSettings](../interfaces/components_LanguagePicker_extras.LanguagePickerSettings.md)

### Type aliases

- [ChangeLanguageAction](components_LanguagePicker_extras.md#changelanguageaction)
- [GlobalLanguagePicker](components_LanguagePicker_extras.md#globallanguagepicker)
- [LanguagePickerItems](components_LanguagePicker_extras.md#languagepickeritems)
- [LanguagePickerParentProps](components_LanguagePicker_extras.md#languagepickerparentprops)
- [LanguagePickerSlots](components_LanguagePicker_extras.md#languagepickerslots)

### Functions

- [injectLanguagePickerSettings](components_LanguagePicker_extras.md#injectlanguagepickersettings)
- [provideLanguagePickerSettings](components_LanguagePicker_extras.md#providelanguagepickersettings)
- [testLanguagePickerSettings](components_LanguagePicker_extras.md#testlanguagepickersettings)

## Type aliases

### ChangeLanguageAction

Ƭ **ChangeLanguageAction**: (`language`: `LocaleName`) => `void`

#### Type declaration

▸ (`language`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `LocaleName` |

##### Returns

`void`

___

### GlobalLanguagePicker

Ƭ **GlobalLanguagePicker**: `GlobalComponentConstructor`<[`LanguagePickerProps`](../interfaces/components_LanguagePicker_extras.LanguagePickerProps.md), [`LanguagePickerSlots`](components_LanguagePicker_extras.md#languagepickerslots)\>

___

### LanguagePickerItems

Ƭ **LanguagePickerItems**: readonly [`LanguagePickerItem`](../interfaces/components_LanguagePicker_extras.LanguagePickerItem.md)[]

___

### LanguagePickerParentProps

Ƭ **LanguagePickerParentProps**: [`IconButtonProps`](../interfaces/components_IconButton_extras.IconButtonProps.md)

___

### LanguagePickerSlots

Ƭ **LanguagePickerSlots**: [`IconButtonSlots`](components_IconButton_extras.md#iconbuttonslots)

## Functions

### injectLanguagePickerSettings

▸ **injectLanguagePickerSettings**(): `ComputedRef`<[`LanguagePickerSettings`](../interfaces/components_LanguagePicker_extras.LanguagePickerSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`LanguagePickerSettings`](../interfaces/components_LanguagePicker_extras.LanguagePickerSettings.md)\>

Settings.

___

### provideLanguagePickerSettings

▸ **provideLanguagePickerSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`LanguagePickerSettings`](../interfaces/components_LanguagePicker_extras.LanguagePickerSettings.md) | Settings. |

#### Returns

`void`

___

### testLanguagePickerSettings

▸ **testLanguagePickerSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`LanguagePickerSettings`](../interfaces/components_LanguagePicker_extras.LanguagePickerSettings.md) | Settings. |

#### Returns

`void`
