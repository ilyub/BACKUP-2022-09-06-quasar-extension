[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/misc.internal

# Module: components/api/misc.internal

## Table of contents

### Interfaces

- [GlobalComponentInstance](../interfaces/components_api_misc_internal.GlobalComponentInstance.md)
- [Injectable](../interfaces/components_api_misc_internal.Injectable.md)
- [InjectableSettings](../interfaces/components_api_misc_internal.InjectableSettings.md)
- [InjectableTrigger](../interfaces/components_api_misc_internal.InjectableTrigger.md)
- [Prop](../interfaces/components_api_misc_internal.Prop.md)
- [SetupExpose](../interfaces/components_api_misc_internal.SetupExpose.md)

### Type Aliases

- [Emits](components_api_misc_internal.md#emits)
- [ParentProps](components_api_misc_internal.md#parentprops)
- [PropBooleanKeys](components_api_misc_internal.md#propbooleankeys)
- [PropOptionalKeys](components_api_misc_internal.md#propoptionalkeys)
- [PropRequiredKeys](components_api_misc_internal.md#proprequiredkeys)
- [SetupEmit](components_api_misc_internal.md#setupemit)
- [SetupEmitAux](components_api_misc_internal.md#setupemitaux)
- [SetupExposed](components_api_misc_internal.md#setupexposed)
- [SetupProps](components_api_misc_internal.md#setupprops)

## Type Aliases

### Emits

Ƭ **Emits**: { readonly [K in \`on${UppercaseLetter}${string}\`]: Function }

___

### ParentProps

Ƭ **ParentProps**<`T`\>: `Join2`<{ readonly [K in OptionalKeys<T\>]: PropOptions<T[K]\> }, { readonly [K in RequiredKeys<T\>]: PropOptionsRequired<T[K]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### PropBooleanKeys

Ƭ **PropBooleanKeys**<`T`\>: `PickKeys`<`T`, `booleanU`, ``"extends->"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### PropOptionalKeys

Ƭ **PropOptionalKeys**<`T`\>: `FilterKeys`<`T`, `booleanU`, ``"extends->"``\> & `OptionalKeys`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### PropRequiredKeys

Ƭ **PropRequiredKeys**<`T`\>: `FilterKeys`<`T`, `booleanU`, ``"extends->"``\> & `RequiredKeys`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### SetupEmit

Ƭ **SetupEmit**<`T`\>: `ValueOf`<{ [K in keyof T]: SetupEmitAux<K, Exclude<T[K], undefined\>\> }\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### SetupEmitAux

Ƭ **SetupEmitAux**<`K`, `V`\>: `V` extends `Callable` ? `K` extends \`on${UppercaseLetter}${infer B}\` ? `K` extends \`on${infer A}${B}\` ? (`event`: \`${Uncapitalize<A\>}${B}\`, ...`args`: `Parameters`<`V`\>) => `ReturnType`<`V`\> : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

___

### SetupExposed

Ƭ **SetupExposed**<`T`\>: { readonly [K in keyof T]: ComputedRef<T[K]\> \| Ref<T[K]\> \| T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### SetupProps

Ƭ **SetupProps**<`T`, `K`\>: `Omit`<`T`, `Exclude`<keyof `T` & \`on${UppercaseLetter}${string}\`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` & \`on${UppercaseLetter}${string}\` = `never` |
