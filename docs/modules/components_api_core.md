[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/core

# Module: components/api/core

## Table of contents

### Interfaces

- [Injectable](../interfaces/components_api_core.Injectable.md)
- [InjectableSettings](../interfaces/components_api_core.InjectableSettings.md)
- [Prop](../interfaces/components_api_core.Prop.md)
- [PropOptions](../interfaces/components_api_core.PropOptions.md)
- [PropOptionsBoolean](../interfaces/components_api_core.PropOptionsBoolean.md)
- [PropOptionsDefault](../interfaces/components_api_core.PropOptionsDefault.md)
- [PropOptionsRequired](../interfaces/components_api_core.PropOptionsRequired.md)
- [SetupExpose](../interfaces/components_api_core.SetupExpose.md)
- [Trigger](../interfaces/components_api_core.Trigger.md)

### Type aliases

- [Emits](components_api_core.md#emits)
- [SetupEmit](components_api_core.md#setupemit)
- [SetupEmitAux](components_api_core.md#setupemitaux)
- [SetupExposed](components_api_core.md#setupexposed)
- [SetupProps](components_api_core.md#setupprops)

## Type aliases

### Emits

Ƭ **Emits**: { readonly [K in \`on${UppercaseLetter}${string}\`]: Function }

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
