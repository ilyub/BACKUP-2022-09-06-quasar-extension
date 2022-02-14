[Quasar extension](../index.md) / [Exports](../modules.md) / components/api

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

- [ExtendPropOptions](components_api.md#extendpropoptions)
- [LooseRequired](components_api.md#looserequired)
- [PropOptionsBoolean](components_api.md#propoptionsboolean)
- [PropsToPropOptions](components_api.md#propstopropoptions)
- [SetupProps](components_api.md#setupprops)

### Functions

- [createInjectable](components_api.md#createinjectable)
- [injectRequire](components_api.md#injectrequire)
- [propOptions](components_api.md#propoptions)
- [propOptionsBoolean](components_api.md#propoptionsboolean)
- [propOptionsDefault](components_api.md#propoptionsdefault)
- [propOptionsRequired](components_api.md#propoptionsrequired)

## Type aliases

### ExtendPropOptions

Ƭ **ExtendPropOptions**<`T`, `B`\>: { readonly [K in Exclude<keyof T, keyof B\>]: T[K] } & `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `B` | `object` |

___

### LooseRequired

Ƭ **LooseRequired**<`T`\>: { [P in string & keyof T]: T[P] }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### PropOptionsBoolean

Ƭ **PropOptionsBoolean**: [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`boolean`\>

___

### PropsToPropOptions

Ƭ **PropsToPropOptions**<`T`, `B`\>: `Join2`<{ readonly [K in Exclude<OptionalKeys<T\>, keyof B\>]: PropOptions<T[K]\> }, { readonly [K in Exclude<RequiredKeys<T\>, keyof B\>]: PropOptionsRequired<T[K]\> }\> & `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `B` | `object` |

___

### SetupProps

Ƭ **SetupProps**<`T`\>: `Readonly`<[`LooseRequired`](components_api.md#looserequired)<`Readonly`<`ExtractPropTypes`<`T`\>\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

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

▸ **propOptionsBoolean**(`defVal?`): [`PropOptionsBoolean`](components_api.md#propoptionsboolean)

Creates Vue property.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `defVal` | `boolean` | `false` | Default value. |

#### Returns

[`PropOptionsBoolean`](components_api.md#propoptionsboolean)

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
