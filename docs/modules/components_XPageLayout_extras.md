[Quasar Framework](../index.md) / [Exports](../modules.md) / components/XPageLayout.extras

# Module: components/XPageLayout.extras

## Table of contents

### Interfaces

- [PageLayoutSettings](../interfaces/components_XPageLayout_extras.PageLayoutSettings.md)

### Variables

- [icons](components_XPageLayout_extras.md#icons)

### Functions

- [injectPageLayoutSettings](components_XPageLayout_extras.md#injectpagelayoutsettings)
- [providePageLayoutSettings](components_XPageLayout_extras.md#providepagelayoutsettings)
- [testPageLayoutSettings](components_XPageLayout_extras.md#testpagelayoutsettings)

## Variables

### icons

• **icons**: `Icons`<``"close"``\> = `baseIcons`

## Functions

### injectPageLayoutSettings

▸ **injectPageLayoutSettings**(): `ComputedRef`<[`PageLayoutSettings`](../interfaces/components_XPageLayout_extras.PageLayoutSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`PageLayoutSettings`](../interfaces/components_XPageLayout_extras.PageLayoutSettings.md)\>

Settings.

___

### providePageLayoutSettings

▸ **providePageLayoutSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`PageLayoutSettings`](../interfaces/components_XPageLayout_extras.PageLayoutSettings.md) | Settings. |

#### Returns

`void`

___

### testPageLayoutSettings

▸ **testPageLayoutSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`PageLayoutSettings`](../interfaces/components_XPageLayout_extras.PageLayoutSettings.md) | Settings. |

#### Returns

`void`
