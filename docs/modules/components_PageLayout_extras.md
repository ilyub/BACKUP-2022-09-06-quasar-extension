[Quasar Framework](../index.md) / [Exports](../modules.md) / components/PageLayout.extras

# Module: components/PageLayout.extras

## Table of contents

### Interfaces

- [PageLayoutSettings](../interfaces/components_PageLayout_extras.PageLayoutSettings.md)

### Type aliases

- [InjectPageLayoutSettings](components_PageLayout_extras.md#injectpagelayoutsettings)

### Variables

- [icons](components_PageLayout_extras.md#icons)
- [injectPageLayoutSettings](components_PageLayout_extras.md#injectpagelayoutsettings)

### Functions

- [defaultPageLayoutSettings](components_PageLayout_extras.md#defaultpagelayoutsettings)
- [usePageContentHeight](components_PageLayout_extras.md#usepagecontentheight)

## Type aliases

### InjectPageLayoutSettings

Ƭ **InjectPageLayoutSettings**: [`ComputedInjectionKey`](components_api.md#computedinjectionkey)<[`PageLayoutSettings`](../interfaces/components_PageLayout_extras.PageLayoutSettings.md)\>

## Variables

### icons

• **icons**: `Icons`<``"close"``\> = `baseIcons`

___

### injectPageLayoutSettings

• **injectPageLayoutSettings**: [`InjectPageLayoutSettings`](components_PageLayout_extras.md#injectpagelayoutsettings)

## Functions

### defaultPageLayoutSettings

▸ **defaultPageLayoutSettings**(): [`PageLayoutSettings`](../interfaces/components_PageLayout_extras.PageLayoutSettings.md)

Returns default settings.

#### Returns

[`PageLayoutSettings`](../interfaces/components_PageLayout_extras.PageLayoutSettings.md)

Default settings.

___

### usePageContentHeight

▸ **usePageContentHeight**(`extraPageOffset`): `ComputedRef`<`string`\>

Page content height module.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extraPageOffset` | () => `stringU` | Extra page offset. |

#### Returns

`ComputedRef`<`string`\>

Page content height.
