[Quasar extension](../index.md) / [Exports](../modules.md) / components/api

# Module: components/api

## Table of contents

### Namespaces

- [prop](components_api.prop.md)

### Interfaces

- [GlobalComponent](../interfaces/components_api.GlobalComponent.md)
- [Injectable](../interfaces/components_api.Injectable.md)
- [PropOptions](../interfaces/components_api.PropOptions.md)
- [PropOptionsBoolean](../interfaces/components_api.PropOptionsBoolean.md)
- [PropOptionsDefault](../interfaces/components_api.PropOptionsDefault.md)
- [PropOptionsRequired](../interfaces/components_api.PropOptionsRequired.md)
- [ValidateEmit2](../interfaces/components_api.ValidateEmit2.md)

### Type aliases

- [Capital](components_api.md#capital)
- [Emits](components_api.md#emits)
- [ExtendQuasarProps](components_api.md#extendquasarprops)
- [LooseRequired](components_api.md#looserequired)
- [NonCapital](components_api.md#noncapital)
- [SetupProps](components_api.md#setupprops)
- [ValidateEmit](components_api.md#validateemit)
- [ValidateEmit1](components_api.md#validateemit1)
- [ValidateProps](components_api.md#validateprops)

### Functions

- [classRef](components_api.md#classref)
- [createInjectable](components_api.md#createinjectable)
- [injectRequire](components_api.md#injectrequire)
- [prop](components_api.md#prop)
- [propOptionsBoolean](components_api.md#propoptionsboolean)
- [propOptionsDefault](components_api.md#propoptionsdefault)
- [propOptionsRequired](components_api.md#propoptionsrequired)
- [propsToPropDefinitions](components_api.md#propstopropdefinitions)
- [validateEmit](components_api.md#validateemit)
- [validateProps](components_api.md#validateprops)

## Type aliases

### Capital

Ƭ **Capital**: ``"A"`` \| ``"B"`` \| ``"C"`` \| ``"D"`` \| ``"E"`` \| ``"F"`` \| ``"G"`` \| ``"H"`` \| ``"I"`` \| ``"J"`` \| ``"K"`` \| ``"L"`` \| ``"M"`` \| ``"N"`` \| ``"O"`` \| ``"P"`` \| ``"Q"`` \| ``"R"`` \| ``"S"`` \| ``"T"`` \| ``"U"`` \| ``"V"`` \| ``"W"`` \| ``"X"`` \| ``"Y"`` \| ``"Z"``

___

### Emits

Ƭ **Emits**: { readonly [K in \`on${Capital}${string}\`]: Function }

___

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

### NonCapital

Ƭ **NonCapital**: ``"a"`` \| ``"b"`` \| ``"c"`` \| ``"d"`` \| ``"e"`` \| ``"f"`` \| ``"g"`` \| ``"h"`` \| ``"i"`` \| ``"j"`` \| ``"k"`` \| ``"l"`` \| ``"m"`` \| ``"n"`` \| ``"o"`` \| ``"p"`` \| ``"q"`` \| ``"r"`` \| ``"s"`` \| ``"t"`` \| ``"u"`` \| ``"v"`` \| ``"w"`` \| ``"x"`` \| ``"y"`` \| ``"z"``

___

### SetupProps

Ƭ **SetupProps**<`T`\>: `Readonly`<[`LooseRequired`](components_api.md#looserequired)<`Readonly`<`ExtractPropTypes`<`T`\>\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### ValidateEmit

Ƭ **ValidateEmit**<`T`\>: [`ValidateEmit1`](components_api.md#validateemit1)<`T`\> \| [`ValidateEmit2`](../interfaces/components_api.ValidateEmit2.md)

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ValidateEmit1

Ƭ **ValidateEmit1**<`T`\>: `ValueOf`<{ [K in keyof T & \`on${Capital}${string}\`]: T[K] extends Callable \| undefined ? Function : never }\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ValidateProps

Ƭ **ValidateProps**<`T`\>: `Omit`<`T`, \`on${Capital}${string}\`\>

#### Type parameters

| Name |
| :------ |
| `T` |

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

### prop

▸ **prop**<`T`\>(): [`PropOptions`](../interfaces/components_api.PropOptions.md)<`T` \| `undefined`\>

Creates Vue property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PropOptions`](../interfaces/components_api.PropOptions.md)<`T` \| `undefined`\>

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

▸ **propOptionsDefault**<`T`\>(`defVal`): [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Creates Vue property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defVal` | `T` | Default value. |

#### Returns

[`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Vue property.

___

### propOptionsRequired

▸ **propOptionsRequired**<`T`\>(): [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

Creates Vue property.

#### Type parameters

| Name |
| :------ |
| `T` |

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

### validateEmit

▸ **validateEmit**<`T`\>(`emit`): [`ValidateEmit`](components_api.md#validateemit)<`T`\>

Validates emit function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emit` | [`ValidateEmit`](components_api.md#validateemit)<`T`\> | Emit function. |

#### Returns

[`ValidateEmit`](components_api.md#validateemit)<`T`\>

Emit function.

___

### validateProps

▸ **validateProps**<`T`\>(`props`): [`ValidateProps`](components_api.md#validateprops)<`T`\>

Validates props.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ValidateProps`](components_api.md#validateprops)<`T`\> | Props. |

#### Returns

[`ValidateProps`](components_api.md#validateprops)<`T`\>

Props.
