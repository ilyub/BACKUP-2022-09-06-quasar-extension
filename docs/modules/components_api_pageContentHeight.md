[Quasar Framework](../index.md) / [Exports](../modules.md) / components/api/pageContentHeight

# Module: components/api/pageContentHeight

## Table of contents

### Functions

- [injectPageOffset](components_api_pageContentHeight.md#injectpageoffset)
- [providePageOffset](components_api_pageContentHeight.md#providepageoffset)
- [testPageOffset](components_api_pageContentHeight.md#testpageoffset)
- [usePageContentHeight](components_api_pageContentHeight.md#usepagecontentheight)

## Functions

### injectPageOffset

▸ **injectPageOffset**(): `ComputedRef`<`stringU`\>

Injects settings.

#### Returns

`ComputedRef`<`stringU`\>

Settings.

___

### providePageOffset

▸ **providePageOffset**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => `stringU` | Settings. |

#### Returns

`void`

___

### testPageOffset

▸ **testPageOffset**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | `stringU` | Settings. |

#### Returns

`void`

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
