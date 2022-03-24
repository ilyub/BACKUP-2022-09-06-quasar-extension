[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api](components_api.md) / prop

# Namespace: prop

[components/api](components_api.md).prop

## Table of contents

### Variables

- [boolean](components_api.prop.md#boolean)
- [default](components_api.prop.md#default)
- [required](components_api.prop.md#required)

## Variables

### boolean

• **boolean**: (`defVal`: `boolean`) => [`PropOptionsBoolean`](../interfaces/components_api.PropOptionsBoolean.md)

#### Type declaration

▸ (`defVal?`): [`PropOptionsBoolean`](../interfaces/components_api.PropOptionsBoolean.md)

Creates Vue property.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `defVal` | `boolean` | `false` | Default value. |

##### Returns

[`PropOptionsBoolean`](../interfaces/components_api.PropOptionsBoolean.md)

Vue property.

___

### default

• **default**: <T\>(`defVal`: `T`) => [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

#### Type declaration

▸ <`T`\>(`defVal`): [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Creates Vue property.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defVal` | `T` | Default value. |

##### Returns

[`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Vue property.

___

### required

• **required**: <T\>() => [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

#### Type declaration

▸ <`T`\>(): [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

Creates Vue property.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

Vue property.
