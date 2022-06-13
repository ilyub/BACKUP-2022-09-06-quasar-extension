[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/lang-props](components_api_lang_props.md) / langProps

# Namespace: langProps

[components/api/lang-props](components_api_lang_props.md).langProps

## Table of contents

### Type aliases

- [OwnProps](components_api_lang_props.langProps.md#ownprops)
- [Plugin](components_api_lang_props.langProps.md#plugin)
- [PropOptionsRecord](components_api_lang_props.langProps.md#propoptionsrecord)
- [Props](components_api_lang_props.langProps.md#props)

## Type aliases

### OwnProps

Ƭ **OwnProps**<`T`\>: { readonly [K in T]?: lang.Key }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

___

### Plugin

Ƭ **Plugin**<`T`\>: { readonly [K in \`${T}Key\`]: ComputedRef<lang.Key \| undefined\> } & { readonly [K in T]: ComputedRef<stringU\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

___

### PropOptionsRecord

Ƭ **PropOptionsRecord**<`T`\>: { readonly [K in T]: PropOptions<lang.Key \| undefined\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

___

### Props

Ƭ **Props**<`T`\>: [`OwnProps`](components_api_lang_props.langProps.md#ownprops)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
