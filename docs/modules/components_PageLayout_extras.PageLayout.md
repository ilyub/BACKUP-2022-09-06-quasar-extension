[Quasar extension](../index.md) / [Exports](../modules.md) / [components/PageLayout.extras](components_PageLayout_extras.md) / PageLayout

# Namespace: PageLayout

[components/PageLayout.extras](components_PageLayout_extras.md).PageLayout

## Table of contents

### Interfaces

- [Global](../interfaces/components_PageLayout_extras.PageLayout.Global.md)
- [Icon](../interfaces/components_PageLayout_extras.PageLayout.Icon.md)
- [OwnProps](../interfaces/components_PageLayout_extras.PageLayout.OwnProps.md)
- [OwnSlots](../interfaces/components_PageLayout_extras.PageLayout.OwnSlots.md)
- [PluginProps](../interfaces/components_PageLayout_extras.PageLayout.PluginProps.md)
- [Props](../interfaces/components_PageLayout_extras.PageLayout.Props.md)
- [Settings](../interfaces/components_PageLayout_extras.PageLayout.Settings.md)
- [Slots](../interfaces/components_PageLayout_extras.PageLayout.Slots.md)

### Variables

- [defaultSettings](components_PageLayout_extras.PageLayout.md#defaultsettings)
- [icons](components_PageLayout_extras.PageLayout.md#icons)

### Functions

- [injectSettings](components_PageLayout_extras.PageLayout.md#injectsettings)
- [provideSettings](components_PageLayout_extras.PageLayout.md#providesettings)
- [testProvideSettings](components_PageLayout_extras.PageLayout.md#testprovidesettings)

## Variables

### defaultSettings

• `Const` **defaultSettings**: [`Settings`](../interfaces/components_PageLayout_extras.PageLayout.Settings.md)

___

### icons

• `Const` **icons**: `baseIcons.Icons`<keyof [`Icon`](../interfaces/components_PageLayout_extras.PageLayout.Icon.md)\> = `baseIcons`

## Functions

### injectSettings

▸ **injectSettings**(): `ComputedRef`<[`Settings`](../interfaces/components_PageLayout_extras.PageLayout.Settings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`Settings`](../interfaces/components_PageLayout_extras.PageLayout.Settings.md)\>

Settings.

___

### provideSettings

▸ **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`Settings`](../interfaces/components_PageLayout_extras.PageLayout.Settings.md) | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ **testProvideSettings**(`settings`): `IndexedObject`<`unknown`\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`Settings`](../interfaces/components_PageLayout_extras.PageLayout.Settings.md) | Settings. |

#### Returns

`IndexedObject`<`unknown`\>

Provide object.
