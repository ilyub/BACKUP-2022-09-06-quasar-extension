[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/misc

# Module: components/api/misc

## Table of contents

### Interfaces

- [GlobalComponent](../interfaces/components_api_misc.GlobalComponent.md)
- [GlobalComponentInstance](../interfaces/components_api_misc.GlobalComponentInstance.md)

### Type aliases

- [ParentProps](components_api_misc.md#parentprops)
- [VNodes](components_api_misc.md#vnodes)

### Functions

- [classRef](components_api_misc.md#classref)
- [injectRequire](components_api_misc.md#injectrequire)
- [injectable](components_api_misc.md#injectable)
- [injectableSettings](components_api_misc.md#injectablesettings)
- [override](components_api_misc.md#override)
- [parentProps](components_api_misc.md#parentprops-1)
- [propFactory](components_api_misc.md#propfactory)
- [skipCheck](components_api_misc.md#skipcheck)
- [trigger](components_api_misc.md#trigger)
- [validateEmit](components_api_misc.md#validateemit)
- [validateExpose](components_api_misc.md#validateexpose)
- [validateProps](components_api_misc.md#validateprops)

## Type aliases

### ParentProps

Ƭ **ParentProps**<`T`\>: `Join2`<{ readonly [K in OptionalKeys<T\>]: PropOptions<T[K]\> }, { readonly [K in RequiredKeys<T\>]: PropOptionsRequired<T[K]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### VNodes

Ƭ **VNodes**: readonly `VNode`[]

## Functions

### classRef

▸ **classRef**<`T`\>(`value`): `Ref`<`T`\>

Creates Vue ref compatible with non-public class methods.

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

Vue ref.

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

### injectable

▸ **injectable**<`T`\>(`defVal`): [`Injectable`](../interfaces/components_api_core.Injectable.md)<`T`\>

Creates injectable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defVal` | `T` | Default value. |

#### Returns

[`Injectable`](../interfaces/components_api_core.Injectable.md)<`T`\>

Injectable.

___

### injectableSettings

▸ **injectableSettings**<`T`\>(`defaultSettings`): [`InjectableSettings`](../interfaces/components_api_core.InjectableSettings.md)<`T`\>

Creates injectable settings.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultSettings` | `ComputedRef`<`T`\> | Default settings. |

#### Returns

[`InjectableSettings`](../interfaces/components_api_core.InjectableSettings.md)<`T`\>

Injectable settings.

___

### override

▸ **override**(`setting`, `on`, `off`): `boolean`

Overrides setting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `setting` | `boolean` | Setting. |
| `on` | `boolean` | On prop. |
| `off` | `boolean` | Off prop. |

#### Returns

`boolean`

Overridden setting.

___

### parentProps

▸ **parentProps**<`T`\>(): [`ParentProps`](components_api_misc.md#parentprops)<`T`\>

Returns parent props.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Returns

[`ParentProps`](components_api_misc.md#parentprops)<`T`\>

Parent props.

___

### propFactory

▸ **propFactory**<`T`\>(): [`Prop`](../interfaces/components_api_core.Prop.md)<`T`\>

Creates prop function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Returns

[`Prop`](../interfaces/components_api_core.Prop.md)<`T`\>

Prop function.

___

### skipCheck

▸ **skipCheck**(...`_args`): `boolean`

Skips check.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `..._args` | `unknowns` | Arguments. |

#### Returns

`boolean`

_True_.

___

### trigger

▸ **trigger**(): [`Trigger`](../interfaces/components_api_core.Trigger.md)

Creates trigger.

#### Returns

[`Trigger`](../interfaces/components_api_core.Trigger.md)

Trigger.

___

### validateEmit

▸ **validateEmit**<`T`\>(`emit`): [`SetupEmit`](components_api_core.md#setupemit)<`T`\>

Validates emit function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emit` | [`SetupEmit`](components_api_core.md#setupemit)<`T`\> | Emit function. |

#### Returns

[`SetupEmit`](components_api_core.md#setupemit)<`T`\>

Emit function.

___

### validateExpose

▸ **validateExpose**<`T`\>(`expose`, `exposed`): `void`

Exposes data.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expose` | [`SetupExpose`](../interfaces/components_api_core.SetupExpose.md) | Expose function. |
| `exposed` | [`SetupExposed`](components_api_core.md#setupexposed)<`T`\> | Exposed data. |

#### Returns

`void`

___

### validateProps

▸ **validateProps**<`T`, `K`\>(`props`): [`SetupProps`](components_api_core.md#setupprops)<`T`, `K`\>

Validates props.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` & \`onA${string}\` \| `string` & \`onB${string}\` \| `string` & \`onC${string}\` \| `string` & \`onD${string}\` \| `string` & \`onE${string}\` \| `string` & \`onF${string}\` \| `string` & \`onG${string}\` \| `string` & \`onH${string}\` \| `string` & \`onI${string}\` \| `string` & \`onJ${string}\` \| `string` & \`onK${string}\` \| `string` & \`onL${string}\` \| `string` & \`onM${string}\` \| `string` & \`onN${string}\` \| `string` & \`onO${string}\` \| `string` & \`onP${string}\` \| `string` & \`onQ${string}\` \| `string` & \`onR${string}\` \| `string` & \`onS${string}\` \| `string` & \`onT${string}\` \| `string` & \`onU${string}\` \| `string` & \`onV${string}\` \| `string` & \`onW${string}\` \| `string` & \`onX${string}\` \| `string` & \`onY${string}\` \| `string` & \`onZ${string}\` = `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`SetupProps`](components_api_core.md#setupprops)<`T`, `K`\> | Props. |

#### Returns

[`SetupProps`](components_api_core.md#setupprops)<`T`, `K`\>

Props.
