[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/misc.internal](../modules/components_api_misc_internal.md) / Prop

# Interface: Prop<T\>

[components/api/misc.internal](../modules/components_api_misc_internal.md).Prop

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Callable

### Prop

▸ **Prop**<`K`\>(`key`): [`PropOptions`](components_api_types_prop_options.PropOptions.md)<`T`[`K`]\>

Creates Vue property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |

#### Returns

[`PropOptions`](components_api_types_prop_options.PropOptions.md)<`T`[`K`]\>

Vue property.

## Table of contents

### Properties

- [boolean](components_api_misc_internal.Prop.md#boolean)
- [default](components_api_misc_internal.Prop.md#default)
- [required](components_api_misc_internal.Prop.md#required)

## Properties

### boolean

• `Readonly` **boolean**: <K\>(`key`: `K`, `defVal?`: `boolean`) => [`PropOptionsBoolean`](components_api_types_prop_options.PropOptionsBoolean.md)

#### Type declaration

▸ <`K`\>(`key`, `defVal?`): [`PropOptionsBoolean`](components_api_types_prop_options.PropOptionsBoolean.md)

Creates Vue property.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `defVal?` | `boolean` | Default value. |

##### Returns

[`PropOptionsBoolean`](components_api_types_prop_options.PropOptionsBoolean.md)

Vue property.

___

### default

• `Readonly` **default**: <K\>(`key`: `K`, `defVal`: `Exclude`<`T`[`K`], `undefined`\>) => [`PropOptionsDefault`](components_api_types_prop_options.PropOptionsDefault.md)<`Exclude`<`T`[`K`], `undefined`\>\>

#### Type declaration

▸ <`K`\>(`key`, `defVal`): [`PropOptionsDefault`](components_api_types_prop_options.PropOptionsDefault.md)<`Exclude`<`T`[`K`], `undefined`\>\>

Creates Vue property.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `defVal` | `Exclude`<`T`[`K`], `undefined`\> | Default value. |

##### Returns

[`PropOptionsDefault`](components_api_types_prop_options.PropOptionsDefault.md)<`Exclude`<`T`[`K`], `undefined`\>\>

Vue property.

___

### required

• `Readonly` **required**: <K\>(`key`: `K`) => [`PropOptionsRequired`](components_api_types_prop_options.PropOptionsRequired.md)<`T`[`K`]\>

#### Type declaration

▸ <`K`\>(`key`): [`PropOptionsRequired`](components_api_types_prop_options.PropOptionsRequired.md)<`T`[`K`]\>

Creates Vue property.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |

##### Returns

[`PropOptionsRequired`](components_api_types_prop_options.PropOptionsRequired.md)<`T`[`K`]\>

Vue property.
