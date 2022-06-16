[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/misc

# Module: components/api/misc

## Table of contents

### Interfaces

- [GlobalComponent](../interfaces/components_api_misc.GlobalComponent.md)

### Type Aliases

- [VNodes](components_api_misc.md#vnodes)

### Variables

- [prop](components_api_misc.md#prop)

### Functions

- [classRef](components_api_misc.md#classref)
- [injectRequire](components_api_misc.md#injectrequire)
- [injectable](components_api_misc.md#injectable)
- [injectableSettings](components_api_misc.md#injectablesettings)
- [injectableTrigger](components_api_misc.md#injectabletrigger)
- [override](components_api_misc.md#override)
- [parentProps](components_api_misc.md#parentprops)
- [propFactory](components_api_misc.md#propfactory)
- [skipCheck](components_api_misc.md#skipcheck)
- [toComputed](components_api_misc.md#tocomputed)
- [validateEmit](components_api_misc.md#validateemit)
- [validateExpose](components_api_misc.md#validateexpose)
- [validateProps](components_api_misc.md#validateprops)

## Type Aliases

### VNodes

Ƭ **VNodes**: readonly `VNode`[]

## Variables

### prop

• `Const` **prop**: <T\>() => [`PropOptions`](../interfaces/components_api_types_prop_options.PropOptions.md)<`T`\> & `Readonly`<{ `boolean`: (`defVal`: `boolean`) => [`PropOptionsBoolean`](../interfaces/components_api_types_prop_options.PropOptionsBoolean.md) ; `default`: <T\>(`defVal`: `Exclude`<`T`, `undefined`\>) => [`PropOptionsDefault`](../interfaces/components_api_types_prop_options.PropOptionsDefault.md)<`Exclude`<`T`, `undefined`\>\> ; `required`: <T\>() => [`PropOptionsRequired`](../interfaces/components_api_types_prop_options.PropOptionsRequired.md)<`T`\>  }\>

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

▸ **injectable**<`T`\>(`defVal`): [`Injectable`](../interfaces/components_api_misc_internal.Injectable.md)<`T`\>

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

[`Injectable`](../interfaces/components_api_misc_internal.Injectable.md)<`T`\>

Injectable.

___

### injectableSettings

▸ **injectableSettings**<`T`\>(`defaultSettings`): [`InjectableSettings`](../interfaces/components_api_misc_internal.InjectableSettings.md)<`ComputedRef`<`T`\>\>

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

[`InjectableSettings`](../interfaces/components_api_misc_internal.InjectableSettings.md)<`ComputedRef`<`T`\>\>

Injectable settings.

___

### injectableTrigger

▸ **injectableTrigger**(): [`InjectableTrigger`](../interfaces/components_api_misc_internal.InjectableTrigger.md)

Creates trigger.

#### Returns

[`InjectableTrigger`](../interfaces/components_api_misc_internal.InjectableTrigger.md)

Trigger.

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

▸ **parentProps**<`T`\>(): [`ParentProps`](components_api_misc_internal.md#parentprops)<`T`\>

Returns parent props.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Returns

[`ParentProps`](components_api_misc_internal.md#parentprops)<`T`\>

Parent props.

___

### propFactory

▸ **propFactory**<`T`\>(): [`Prop`](../interfaces/components_api_misc_internal.Prop.md)<`T`\>

Creates prop function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Returns

[`Prop`](../interfaces/components_api_misc_internal.Prop.md)<`T`\>

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

### toComputed

▸ **toComputed**<`T`\>(`value`): `ComputedRef`<`T`\>

Converts value to computed value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`ComputedRef`<`T`\>

Computed value.

___

### validateEmit

▸ **validateEmit**<`T`\>(`_emit`): `void`

Validates emit function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_emit` | [`SetupEmit`](components_api_misc_internal.md#setupemit)<`T`\> | Emit function. |

#### Returns

`void`

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
| `expose` | [`SetupExpose`](../interfaces/components_api_misc_internal.SetupExpose.md) | Expose function. |
| `exposed` | [`SetupExposed`](components_api_misc_internal.md#setupexposed)<`T`\> | Exposed data. |

#### Returns

`void`

___

### validateProps

▸ **validateProps**<`T`, `K`\>(`_props`): `void`

Validates props.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends \`onA${string}\` \| \`onB${string}\` \| \`onC${string}\` \| \`onD${string}\` \| \`onE${string}\` \| \`onF${string}\` \| \`onG${string}\` \| \`onH${string}\` \| \`onI${string}\` \| \`onJ${string}\` \| \`onK${string}\` \| \`onL${string}\` \| \`onM${string}\` \| \`onN${string}\` \| \`onO${string}\` \| \`onP${string}\` \| \`onQ${string}\` \| \`onR${string}\` \| \`onS${string}\` \| \`onT${string}\` \| \`onU${string}\` \| \`onV${string}\` \| \`onW${string}\` \| \`onX${string}\` \| \`onY${string}\` \| \`onZ${string}\` = `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_props` | [`SetupProps`](components_api_misc_internal.md#setupprops)<`T`, `K`\> | Props. |

#### Returns

`void`
