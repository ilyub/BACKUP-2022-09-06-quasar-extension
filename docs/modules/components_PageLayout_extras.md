[Quasar extension](../index.md) / [Exports](../modules.md) / components/PageLayout.extras

# Module: components/PageLayout.extras

## Table of contents

### Interfaces

- [ModuleIcons](../interfaces/components_PageLayout_extras.ModuleIcons.md)
- [PageLayoutProps](../interfaces/components_PageLayout_extras.PageLayoutProps.md)
- [PageLayoutSettings](../interfaces/components_PageLayout_extras.PageLayoutSettings.md)
- [PageLayoutSlots](../interfaces/components_PageLayout_extras.PageLayoutSlots.md)

### Type aliases

- [GlobalPageLayout](components_PageLayout_extras.md#globalpagelayout)

### Variables

- [icons](components_PageLayout_extras.md#icons)

### Functions

- [injectPageLayoutSettings](components_PageLayout_extras.md#injectpagelayoutsettings)
- [providePageLayoutSettings](components_PageLayout_extras.md#providepagelayoutsettings)
- [testPageLayoutSettings](components_PageLayout_extras.md#testpagelayoutsettings)

## Type aliases

### GlobalPageLayout

Ƭ **GlobalPageLayout**: [`GlobalComponent`](../interfaces/components_api.GlobalComponent.md)<[`PageLayoutProps`](../interfaces/components_PageLayout_extras.PageLayoutProps.md), [`PageLayoutSlots`](../interfaces/components_PageLayout_extras.PageLayoutSlots.md)\>

## Variables

### icons

• `Const` **icons**: `Icons`<``"close"``\> = `baseIcons`

## Functions

### injectPageLayoutSettings

▸ **injectPageLayoutSettings**(): `ComputedRef`<[`PageLayoutSettings`](../interfaces/components_PageLayout_extras.PageLayoutSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`PageLayoutSettings`](../interfaces/components_PageLayout_extras.PageLayoutSettings.md)\>

Settings.

___

### providePageLayoutSettings

▸ **providePageLayoutSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`PageLayoutSettings`](../interfaces/components_PageLayout_extras.PageLayoutSettings.md) | Settings. |

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
| `settings` | [`PageLayoutSettings`](../interfaces/components_PageLayout_extras.PageLayoutSettings.md) | Settings. |

#### Returns

`void`
