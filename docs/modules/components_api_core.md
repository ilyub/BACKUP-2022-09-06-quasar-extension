[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/core

# Module: components/api/core

## Table of contents

### Interfaces

- [GlobalComponent](../interfaces/components_api_core.GlobalComponent.md)
- [Injectable](../interfaces/components_api_core.Injectable.md)
- [PropOptions](../interfaces/components_api_core.PropOptions.md)
- [PropOptionsBoolean](../interfaces/components_api_core.PropOptionsBoolean.md)
- [PropOptionsDefault](../interfaces/components_api_core.PropOptionsDefault.md)
- [PropOptionsRequired](../interfaces/components_api_core.PropOptionsRequired.md)
- [ValidateEmit2](../interfaces/components_api_core.ValidateEmit2.md)

### Type aliases

- [Capital](components_api_core.md#capital)
- [Emits](components_api_core.md#emits)
- [ExtendQuasarProps](components_api_core.md#extendquasarprops)
- [LooseRequired](components_api_core.md#looserequired)
- [NonCapital](components_api_core.md#noncapital)
- [SetupProps](components_api_core.md#setupprops)
- [ValidateEmit](components_api_core.md#validateemit)
- [ValidateEmit1](components_api_core.md#validateemit1)
- [ValidateProps](components_api_core.md#validateprops)

### Variables

- [prop](components_api_core.md#prop)

### Functions

- [classRef](components_api_core.md#classref)
- [createInjectable](components_api_core.md#createinjectable)
- [injectRequire](components_api_core.md#injectrequire)
- [propsToPropDefinitions](components_api_core.md#propstopropdefinitions)
- [validateEmit](components_api_core.md#validateemit-1)
- [validateProps](components_api_core.md#validateprops-1)

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

Ƭ **SetupProps**<`T`\>: `Readonly`<[`LooseRequired`](components_api_core.md#looserequired)<`Readonly`<`ExtractPropTypes`<`T`\>\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### ValidateEmit

Ƭ **ValidateEmit**<`T`\>: [`ValidateEmit1`](components_api_core.md#validateemit1)<`T`\> \| [`ValidateEmit2`](../interfaces/components_api_core.ValidateEmit2.md)

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

## Variables

### prop

• `Const` **prop**: { `boolean`: (`defVal`: `boolean`) => [`PropOptionsBoolean`](../interfaces/components_api_core.PropOptionsBoolean.md) ; `default`: <T\>(`defVal`: `T`) => [`PropOptionsDefault`](../interfaces/components_api_core.PropOptionsDefault.md)<`T`\> ; `required`: <T\>() => [`PropOptionsRequired`](../interfaces/components_api_core.PropOptionsRequired.md)<`T`\>  } & <T\>() => [`PropOptions`](../interfaces/components_api_core.PropOptions.md)<`undefined` \| `T`\>

Creates Vue property.

**`returns`** Vue property.

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

▸ **createInjectable**<`T`\>(`createDefault?`): [`Injectable`](../interfaces/components_api_core.Injectable.md)<`T`\>

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

[`Injectable`](../interfaces/components_api_core.Injectable.md)<`T`\>

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

### propsToPropDefinitions

▸ **propsToPropDefinitions**<`T`\>(): [`ExtendQuasarProps`](components_api_core.md#extendquasarprops)<`T`\>

Creates extandable quasar component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Returns

[`ExtendQuasarProps`](components_api_core.md#extendquasarprops)<`T`\>

Extandable quasar component.

___

### validateEmit

▸ **validateEmit**<`T`\>(`emit`): [`ValidateEmit`](components_api_core.md#validateemit)<`T`\>

Validates emit function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emit` | [`ValidateEmit`](components_api_core.md#validateemit)<`T`\> | Emit function. |

#### Returns

[`ValidateEmit`](components_api_core.md#validateemit)<`T`\>

Emit function.

___

### validateProps

▸ **validateProps**<`T`\>(`props`): [`ValidateProps`](components_api_core.md#validateprops)<`T`\>

Validates props.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ValidateProps`](components_api_core.md#validateprops)<`T`\> | Props. |

#### Returns

[`ValidateProps`](components_api_core.md#validateprops)<`T`\>

Props.
