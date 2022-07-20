[Quasar extension](../index.md) / [Exports](../modules.md) / [test-utils/find-factory](../modules/test_utils_find_factory.md) / [findFactory](../modules/test_utils_find_factory.findFactory.md) / Result

# Interface: Result<T\>

[test-utils/find-factory](../modules/test_utils_find_factory.md).[findFactory](../modules/test_utils_find_factory.findFactory.md).Result

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

## Table of contents

### Properties

- [comp](test_utils_find_factory.findFactory.Result.md#comp)
- [compByRef](test_utils_find_factory.findFactory.Result.md#compbyref)
- [compElem](test_utils_find_factory.findFactory.Result.md#compelem)
- [comps](test_utils_find_factory.findFactory.Result.md#comps)
- [elem](test_utils_find_factory.findFactory.Result.md#elem)
- [elems](test_utils_find_factory.findFactory.Result.md#elems)
- [vm](test_utils_find_factory.findFactory.Result.md#vm)

## Properties

### comp

• `Readonly` **comp**: (`ref`: `string`, `index?`: `number`) => `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

#### Type declaration

▸ (`ref`, `index?`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Finds component.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |
| `index?` | `number` | Index. |

##### Returns

`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Wrapper.

___

### compByRef

• `Readonly` **compByRef**: (`ref`: `string`) => `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

#### Type declaration

▸ (`ref`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Finds component.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |

##### Returns

`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Wrapper.

___

### compElem

• `Readonly` **compElem**: (`ref`: `string`, `ref2`: `string`) => [`DOMWrapper`](test_utils_core.DOMWrapper.md)

#### Type declaration

▸ (`ref`, `ref2`): [`DOMWrapper`](test_utils_core.DOMWrapper.md)

Finds element.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Component reference. |
| `ref2` | `string` | Element reference. |

##### Returns

[`DOMWrapper`](test_utils_core.DOMWrapper.md)

Wrapper.

___

### comps

• `Readonly` **comps**: (`ref`: `string`) => [`WrapperLikes`](../modules/test_utils_core.md#wrapperlikes)

#### Type declaration

▸ (`ref`): [`WrapperLikes`](../modules/test_utils_core.md#wrapperlikes)

Finds components.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |

##### Returns

[`WrapperLikes`](../modules/test_utils_core.md#wrapperlikes)

Wrappers.

___

### elem

• `Readonly` **elem**: (`ref`: `string`, `index?`: `number`) => [`DOMWrapper`](test_utils_core.DOMWrapper.md)

#### Type declaration

▸ (`ref`, `index?`): [`DOMWrapper`](test_utils_core.DOMWrapper.md)

Finds element.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |
| `index?` | `number` | Index. |

##### Returns

[`DOMWrapper`](test_utils_core.DOMWrapper.md)

Wrapper.

___

### elems

• `Readonly` **elems**: (`ref`: `string`) => [`DOMWrappers`](../modules/test_utils_core.md#domwrappers)

#### Type declaration

▸ (`ref`): [`DOMWrappers`](../modules/test_utils_core.md#domwrappers)

Finds elements.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |

##### Returns

[`DOMWrappers`](../modules/test_utils_core.md#domwrappers)

Wrappers.

___

### vm

• `Readonly` **vm**: `T`
