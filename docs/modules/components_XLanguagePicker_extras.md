[Quasar Framework](../index.md) / [Exports](../modules.md) / components/XLanguagePicker.extras

# Module: components/XLanguagePicker.extras

## Table of contents

### Interfaces

- [LanguagePickerItem](../interfaces/components_XLanguagePicker_extras.LanguagePickerItem.md)
- [LanguagePickerSettings](../interfaces/components_XLanguagePicker_extras.LanguagePickerSettings.md)

### Type aliases

- [ChangeLanguageAction](components_XLanguagePicker_extras.md#changelanguageaction)
- [LanguagePickerItems](components_XLanguagePicker_extras.md#languagepickeritems)

### Functions

- [injectLanguagePickerSettings](components_XLanguagePicker_extras.md#injectlanguagepickersettings)
- [provideLanguagePickerSettings](components_XLanguagePicker_extras.md#providelanguagepickersettings)
- [testLanguagePickerSettings](components_XLanguagePicker_extras.md#testlanguagepickersettings)

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

### LanguagePickerItems

Ƭ **LanguagePickerItems**: readonly [`LanguagePickerItem`](../interfaces/components_XLanguagePicker_extras.LanguagePickerItem.md)[]

## Functions

### injectLanguagePickerSettings

▸ **injectLanguagePickerSettings**(): `ComputedRef`<[`LanguagePickerSettings`](../interfaces/components_XLanguagePicker_extras.LanguagePickerSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`LanguagePickerSettings`](../interfaces/components_XLanguagePicker_extras.LanguagePickerSettings.md)\>

Settings.

___

### provideLanguagePickerSettings

▸ **provideLanguagePickerSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`LanguagePickerSettings`](../interfaces/components_XLanguagePicker_extras.LanguagePickerSettings.md) | Settings. |

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
| `settings` | [`LanguagePickerSettings`](../interfaces/components_XLanguagePicker_extras.LanguagePickerSettings.md) | Settings. |

#### Returns

`void`
