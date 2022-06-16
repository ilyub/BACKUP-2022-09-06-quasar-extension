[Quasar extension](../index.md) / [Exports](../modules.md) / test-utils/wrapper

# Module: test-utils/wrapper

## Table of contents

### Functions

- [findQuasarComponent](test_utils_wrapper.md#findquasarcomponent)
- [setData](test_utils_wrapper.md#setdata)

## Functions

### findQuasarComponent

▸ **findQuasarComponent**<`T`\>(`wrapper`, `ctor`): `VueWrapper`<`T`\>

Finds quasar component.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapper` | [`Wrapper`](test_utils_wrapper_internal.md#wrapper) | Wrapper. |
| `ctor` | `ComponentConstructor`<`T`, `any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\> | Component constructor. |

#### Returns

`VueWrapper`<`T`\>

Quasar component.

___

### setData

▸ **setData**(`wrapper`, `key`, `value`): `void`

Sets data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapper` | [`Wrapper`](test_utils_wrapper_internal.md#wrapper) | Wrapper. |
| `key` | `string` | Key. |
| `value` | `unknown` | Value. |

#### Returns

`void`
