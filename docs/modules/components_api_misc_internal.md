[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/misc.internal

# Module: components/api/misc.internal

## Table of contents

### Interfaces

- [GlobalComponentInstance](../interfaces/components_api_misc_internal.GlobalComponentInstance.md)
- [Injectable](../interfaces/components_api_misc_internal.Injectable.md)
- [InjectableSettings](../interfaces/components_api_misc_internal.InjectableSettings.md)
- [InjectableTrigger](../interfaces/components_api_misc_internal.InjectableTrigger.md)
- [Prop](../interfaces/components_api_misc_internal.Prop.md)

### Type Aliases

- [Emit](components_api_misc_internal.md#emit)
- [EmitAux](components_api_misc_internal.md#emitaux)
- [Emits](components_api_misc_internal.md#emits)
- [ParentProps](components_api_misc_internal.md#parentprops)
- [PropBooleanKeys](components_api_misc_internal.md#propbooleankeys)
- [PropOptionalKeys](components_api_misc_internal.md#propoptionalkeys)
- [PropRequiredKeys](components_api_misc_internal.md#proprequiredkeys)
- [Props](components_api_misc_internal.md#props)

## Type Aliases

### Emit

Ƭ **Emit**<`T`\>: `ValueOf`<{ [K in keyof T]: EmitAux<K, Exclude<T[K], undefined\>\> }\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### EmitAux

Ƭ **EmitAux**<`K`, `V`\>: `V` extends `types.fn.Callable` ? `K` extends \`on${types.string.UppercaseLetter}${infer B}\` ? `K` extends \`on${infer A}${B}\` ? (`event`: \`${Uncapitalize<A\>}${B}\`, ...`args`: `Parameters`<`V`\>) => `ReturnType`<`V`\> : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

___

### Emits

Ƭ **Emits**: { readonly [K in \`on${types.string.UppercaseLetter}${string}\`]: Function }

___

### ParentProps

Ƭ **ParentProps**<`T`\>: `And`<{ readonly [K in types.object.keys.Optional<T\>]: PropOptions<T[K]\> }, { readonly [K in types.object.keys.Required<T\>]: PropOptionsRequired<T[K]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### PropBooleanKeys

Ƭ **PropBooleanKeys**<`T`\>: `types.object.keys.Pick`<`T`, `booleanU`, ``"extends->"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### PropOptionalKeys

Ƭ **PropOptionalKeys**<`T`\>: `And`<`types.object.keys.Filter`<`T`, `booleanU`, ``"extends->"``\>, `types.object.keys.Optional`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### PropRequiredKeys

Ƭ **PropRequiredKeys**<`T`\>: `And`<`types.object.keys.Filter`<`T`, `booleanU`, ``"extends->"``\>, `types.object.keys.Required`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Props

Ƭ **Props**<`T`, `K`\>: `Omit`<`T`, `Exclude`<keyof `T` & \`on${types.string.UppercaseLetter}${string}\`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` & \`on${types.string.UppercaseLetter}${string}\` = `never` |
