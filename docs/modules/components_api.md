[Quasar Framework](../index.md) / [Exports](../modules.md) / components/api

# Module: components/api

## Table of contents

### Namespaces

- [propOptions](components_api.propOptions.md)

### Interfaces

- [Injectable](../interfaces/components_api.Injectable.md)
- [PropOptions](../interfaces/components_api.PropOptions.md)
- [PropOptionsDefault](../interfaces/components_api.PropOptionsDefault.md)
- [PropOptionsRequired](../interfaces/components_api.PropOptionsRequired.md)

### Type aliases

- [PropsToPropOptions](components_api.md#propstopropoptions)

### Functions

- [createInjectable](components_api.md#createinjectable)
- [injectRequire](components_api.md#injectrequire)
- [propOptions](components_api.md#propoptions)
- [propOptionsBoolean](components_api.md#propoptionsboolean)
- [propOptionsDefault](components_api.md#propoptionsdefault)
- [propOptionsRequired](components_api.md#propoptionsrequired)

## Type aliases

### PropsToPropOptions

Ƭ **PropsToPropOptions**<`T`\>: { readonly [K in keyof T]-?: PropOptions<T[K]\> }

#### Type parameters

| Name |
| :------ |
| `T` |

## Functions

### createInjectable

▸ **createInjectable**<`T`\>(`createDefault?`): [`Injectable`](../interfaces/components_api.Injectable.md)<`T`\>

Creates injectable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createDefault?` | () => `T` | Returns default value. |

#### Returns

[`Injectable`](../interfaces/components_api.Injectable.md)<`T`\>

Injectable.

___

### injectRequire

▸ **injectRequire**<`T`\>(`key`): `T`

Injects required value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `InjectionKey`<`T`\> | Key. |

#### Returns

`T`

Value.

___

### propOptions

▸ **propOptions**<`T`\>(`validator`): [`PropOptions`](../interfaces/components_api.PropOptions.md)<`T`\>

Creates Vue property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validator` | `Guard`<`T`\> | Validator. |

#### Returns

[`PropOptions`](../interfaces/components_api.PropOptions.md)<`T`\>

Vue property.

___

### propOptionsBoolean

▸ **propOptionsBoolean**(`defVal?`): [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`boolean`\>

Creates Vue property.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `defVal` | `boolean` | `false` | Default value. |

#### Returns

[`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`boolean`\>

Vue property.

___

### propOptionsDefault

▸ **propOptionsDefault**<`T`\>(`validator`, `defVal`): [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Creates Vue property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validator` | `Guard`<`T`\> | Validator. |
| `defVal` | `T` | Default value. |

#### Returns

[`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Vue property.

___

### propOptionsRequired

▸ **propOptionsRequired**<`T`\>(`validator`): [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

Creates Vue property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validator` | `Guard`<`T`\> | Validator. |

#### Returns

[`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

Vue property.
