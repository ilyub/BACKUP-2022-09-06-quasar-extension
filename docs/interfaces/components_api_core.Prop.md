[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/core](../modules/components_api_core.md) / Prop

# Interface: Prop<T\>

[components/api/core](../modules/components_api_core.md).Prop

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Callable

### Prop

▸ **Prop**<`K`\>(): [`PropOptions`](components_api_core.PropOptions.md)<`T`[`K`]\>

Creates Vue property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Returns

[`PropOptions`](components_api_core.PropOptions.md)<`T`[`K`]\>

Vue property.

## Table of contents

### Methods

- [boolean](components_api_core.Prop.md#boolean)
- [default](components_api_core.Prop.md#default)
- [required](components_api_core.Prop.md#required)

## Methods

### boolean

▸ `Readonly` **boolean**<`_K`\>(`defVal?`): [`PropOptionsBoolean`](components_api_core.PropOptionsBoolean.md)

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

[`PropOptionsBoolean`](components_api_core.PropOptionsBoolean.md)

Vue property.

___

### default

▸ `Readonly` **default**<`K`\>(`defVal`): [`PropOptionsDefault`](components_api_core.PropOptionsDefault.md)<`T`[`K`]\>

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

[`PropOptionsDefault`](components_api_core.PropOptionsDefault.md)<`T`[`K`]\>

Vue property.

___

### required

▸ `Readonly` **required**<`K`\>(): [`PropOptionsRequired`](components_api_core.PropOptionsRequired.md)<`T`[`K`]\>

Creates Vue property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Returns

[`PropOptionsRequired`](components_api_core.PropOptionsRequired.md)<`T`[`K`]\>

Vue property.
