[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/misc.internal](../modules/components_api_misc_internal.md) / Prop

# Interface: Prop<T\>

[components/api/misc.internal](../modules/components_api_misc_internal.md).Prop

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Callable

### Prop

▸ **Prop**<`K`\>(): [`PropOptions`](components_api_types_prop_options.PropOptions.md)<`T`[`K`]\>

Creates Vue property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Returns

[`PropOptions`](components_api_types_prop_options.PropOptions.md)<`T`[`K`]\>

Vue property.

## Table of contents

### Methods

- [boolean](components_api_misc_internal.Prop.md#boolean)
- [default](components_api_misc_internal.Prop.md#default)
- [required](components_api_misc_internal.Prop.md#required)

## Methods

### boolean

▸ `Readonly` **boolean**<`_K`\>(`defVal?`): [`PropOptionsBoolean`](components_api_types_prop_options.PropOptionsBoolean.md)

Creates Vue property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `_K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defVal?` | `boolean` | Default value. |

#### Returns

[`PropOptionsBoolean`](components_api_types_prop_options.PropOptionsBoolean.md)

Vue property.

___

### default

▸ `Readonly` **default**<`K`\>(`defVal`): [`PropOptionsDefault`](components_api_types_prop_options.PropOptionsDefault.md)<`Exclude`<`T`[`K`], `undefined`\>\>

Creates Vue property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defVal` | `Exclude`<`T`[`K`], `undefined`\> | Default value. |

#### Returns

[`PropOptionsDefault`](components_api_types_prop_options.PropOptionsDefault.md)<`Exclude`<`T`[`K`], `undefined`\>\>

Vue property.

___

### required

▸ `Readonly` **required**<`K`\>(): [`PropOptionsRequired`](components_api_types_prop_options.PropOptionsRequired.md)<`T`[`K`]\>

Creates Vue property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Returns

[`PropOptionsRequired`](components_api_types_prop_options.PropOptionsRequired.md)<`T`[`K`]\>

Vue property.
