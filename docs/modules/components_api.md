[Quasar extension](../index.md) / [Exports](../modules.md) / components/api

# Module: components/api

## Table of contents

### Namespaces

- [propOptions](components_api.propOptions.md)

### Interfaces

- [Injectable](../interfaces/components_api.Injectable.md)
- [PropOptions](../interfaces/components_api.PropOptions.md)
- [PropOptionsBoolean](../interfaces/components_api.PropOptionsBoolean.md)
- [PropOptionsDefault](../interfaces/components_api.PropOptionsDefault.md)
- [PropOptionsRequired](../interfaces/components_api.PropOptionsRequired.md)

### Type aliases

- [ExtendQuasarProps](components_api.md#extendquasarprops)
- [LooseRequired](components_api.md#looserequired)
- [SetupProps](components_api.md#setupprops)

### Functions

- [classRef](components_api.md#classref)
- [createInjectable](components_api.md#createinjectable)
- [injectRequire](components_api.md#injectrequire)
- [propOptions](components_api.md#propoptions)
- [propOptionsBoolean](components_api.md#propoptionsboolean)
- [propOptionsDefault](components_api.md#propoptionsdefault)
- [propOptionsRequired](components_api.md#propoptionsrequired)
- [propsToPropDefinitions](components_api.md#propstopropdefinitions)
- [validateProps](components_api.md#validateprops)

## Type aliases

### ExtendQuasarProps

Ƭ **ExtendQuasarProps**<`T`\>: `Join2`<{ readonly [K in OptionalKeys<T\>]: PropOptions<T[K]\> }, { readonly [K in RequiredKeys<T\>]: PropOptionsRequired<T[K]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### LooseRequired

Ƭ **LooseRequired**<`T`\>: { [P in string & keyof T]: T[P] }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### SetupProps

Ƭ **SetupProps**<`T`\>: `Readonly`<[`LooseRequired`](components_api.md#looserequired)<`Readonly`<`ExtractPropTypes`<`T`\>\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Functions

### classRef

▸ **classRef**<`T`\>(`value`): `Ref`<`T`\>

Returns Vue reference compatible with non-public class methods.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`Ref`<`T`\>

Vue reference.

___

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

▸ **propOptionsBoolean**(`defVal?`): [`PropOptionsBoolean`](../interfaces/components_api.PropOptionsBoolean.md)

Creates Vue property.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `defVal` | `boolean` | `false` | Default value. |

#### Returns

[`PropOptionsBoolean`](../interfaces/components_api.PropOptionsBoolean.md)

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

___

### propsToPropDefinitions

▸ **propsToPropDefinitions**<`T`\>(): [`ExtendQuasarProps`](components_api.md#extendquasarprops)<`T`\>

Creates extandable quasar component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Returns

[`ExtendQuasarProps`](components_api.md#extendquasarprops)<`T`\>

Extandable quasar component.

___

### validateProps

▸ **validateProps**<`T`\>(`props`): `T`

Validates props.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `T` | Props. |

#### Returns

`T`

Props.
