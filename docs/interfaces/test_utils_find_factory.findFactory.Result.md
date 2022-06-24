[Quasar extension](../index.md) / [Exports](../modules.md) / [test-utils/find-factory](../modules/test_utils_find_factory.md) / [findFactory](../modules/test_utils_find_factory.findFactory.md) / Result

# Interface: Result

[test-utils/find-factory](../modules/test_utils_find_factory.md).[findFactory](../modules/test_utils_find_factory.findFactory.md).Result

## Table of contents

### Methods

- [comp](test_utils_find_factory.findFactory.Result.md#comp)
- [compByRef](test_utils_find_factory.findFactory.Result.md#compbyref)
- [compElem](test_utils_find_factory.findFactory.Result.md#compelem)
- [comps](test_utils_find_factory.findFactory.Result.md#comps)
- [elem](test_utils_find_factory.findFactory.Result.md#elem)
- [elems](test_utils_find_factory.findFactory.Result.md#elems)

## Methods

### comp

▸ `Readonly` **comp**(`ref`, `index?`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Finds component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |
| `index?` | `number` | Index. |

#### Returns

`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Wrapper.

___

### compByRef

▸ `Readonly` **compByRef**(`ref`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Finds component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |

#### Returns

`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Wrapper.

___

### compElem

▸ `Readonly` **compElem**(`ref`, `ref2`): [`DOMWrapper`](test_utils_core.DOMWrapper.md)

Finds element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Component reference. |
| `ref2` | `string` | Element reference. |

#### Returns

[`DOMWrapper`](test_utils_core.DOMWrapper.md)

Wrapper.

___

### comps

▸ `Readonly` **comps**(`ref`): [`WrapperLikes`](../modules/test_utils_core.md#wrapperlikes)

Finds components.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |

#### Returns

[`WrapperLikes`](../modules/test_utils_core.md#wrapperlikes)

Wrappers.

___

### elem

▸ `Readonly` **elem**(`ref`, `index?`): [`DOMWrapper`](test_utils_core.DOMWrapper.md)

Finds element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |
| `index?` | `number` | Index. |

#### Returns

[`DOMWrapper`](test_utils_core.DOMWrapper.md)

Wrapper.

___

### elems

▸ `Readonly` **elems**(`ref`): [`DOMWrappers`](../modules/test_utils_core.md#domwrappers)

Finds elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | Reference. |

#### Returns

[`DOMWrappers`](../modules/test_utils_core.md#domwrappers)

Wrappers.
