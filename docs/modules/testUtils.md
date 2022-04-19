[Quasar extension](../index.md) / [Exports](../modules.md) / testUtils

# Module: testUtils

## Table of contents

### Interfaces

- [CustomGlobalMountOptions](../interfaces/testUtils.CustomGlobalMountOptions.md)
- [TouchPanMock](../interfaces/testUtils.TouchPanMock.md)

### Type aliases

- [VueWrapper](testUtils.md#vuewrapper)

### Functions

- [clearEmitted](testUtils.md#clearemitted)
- [findComponentByRefFactory](testUtils.md#findcomponentbyreffactory)
- [findComponentFactory](testUtils.md#findcomponentfactory)
- [findElementFactory](testUtils.md#findelementfactory)
- [findElementsFactory](testUtils.md#findelementsfactory)
- [findFactory](testUtils.md#findfactory)
- [globalMountOptions](testUtils.md#globalmountoptions)
- [htmlToEqual](testUtils.md#htmltoequal)
- [jestReset](testUtils.md#jestreset)
- [jestSetup](testUtils.md#jestsetup)
- [textToEqual](testUtils.md#texttoequal)
- [toBeVisible](testUtils.md#tobevisible)
- [toExist](testUtils.md#toexist)
- [toHaveClass](testUtils.md#tohaveclass)
- [touchPanMock](testUtils.md#touchpanmock)

## Type aliases

### VueWrapper

Ƭ **VueWrapper**: `vueTestUtils.VueWrapper`<`any`\>

## Functions

### clearEmitted

▸ **clearEmitted**(`wrapper`): `void`

Clears emitted events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapper` | [`VueWrapper`](testUtils.md#vuewrapper) | Wrapper. |

#### Returns

`void`

___

### findComponentByRefFactory

▸ **findComponentByRefFactory**(`wrapper`): (`ref`: `string`) => `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Find component factory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapper` | `VueWrapper`<`any`\> | Wrapper. |

#### Returns

`fn`

Find component function.

▸ (`ref`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `string` |

##### Returns

`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

___

### findComponentFactory

▸ **findComponentFactory**(`prefix`, `wrapper`): (`ref`: `string` \| `ComponentConstructor`<`any`, `any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\>, `index`: `number`) => `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Find component factory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | Prefix. |
| `wrapper` | `VueWrapper`<`any`\> | Wrapper. |

#### Returns

`fn`

Find component function.

▸ (`ref`, `index?`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ref` | `string` \| `ComponentConstructor`<`any`, `any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\> | `undefined` |
| `index` | `number` | `0` |

##### Returns

`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

___

### findElementFactory

▸ **findElementFactory**(`prefix`, `wrapper`): (`ref`: `string`) => `DOMWrapper`<`Element`\>

Find HTML element factory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | Prefix. |
| `wrapper` | `VueWrapper`<`any`\> | Wrapper. |

#### Returns

`fn`

Find HTML element function.

▸ (`ref`): `DOMWrapper`<`Element`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `string` |

##### Returns

`DOMWrapper`<`Element`\>

___

### findElementsFactory

▸ **findElementsFactory**(`prefix`, `wrapper`): (`ref`: `string`) => `DOMWrapper`<`Element`\>[]

Find HTML element factory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | Prefix. |
| `wrapper` | `VueWrapper`<`any`\> | Wrapper. |

#### Returns

`fn`

Find HTML element function.

▸ (`ref`): `DOMWrapper`<`Element`\>[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `string` |

##### Returns

`DOMWrapper`<`Element`\>[]

___

### findFactory

▸ **findFactory**(`prefix`, `wrapper`): `Object`

Find component factory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | Prefix. |
| `wrapper` | [`VueWrapper`](testUtils.md#vuewrapper) | Wrapper. |

#### Returns

`Object`

Find component function.

| Name | Type |
| :------ | :------ |
| `comp` | `ReturnType`<typeof [`findComponentFactory`](testUtils.md#findcomponentfactory)\> |
| `compByRef` | `ReturnType`<typeof [`findComponentByRefFactory`](testUtils.md#findcomponentbyreffactory)\> |
| `elem` | `ReturnType`<typeof [`findElementFactory`](testUtils.md#findelementfactory)\> |
| `elems` | `ReturnType`<typeof [`findElementsFactory`](testUtils.md#findelementsfactory)\> |

___

### globalMountOptions

▸ **globalMountOptions**(`options?`): `GlobalMountOptions`

Returns global mount options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CustomGlobalMountOptions`](../interfaces/testUtils.CustomGlobalMountOptions.md) | Options. |

#### Returns

`GlobalMountOptions`

Global mount options.

___

### htmlToEqual

▸ **htmlToEqual**(`got`, ...`args`): `ExpectReturnType`

Checks that Vue wrapper contains expected HTML code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [expected: string] | - |

#### Returns

`ExpectReturnType`

Result object.

___

### jestReset

▸ **jestReset**(): `void`

Jest reset.

#### Returns

`void`

___

### jestSetup

▸ **jestSetup**(): `void`

Jest setup.

#### Returns

`void`

___

### textToEqual

▸ **textToEqual**(`got`, ...`args`): `ExpectReturnType`

Checks that Vue wrapper contains expected text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [expected: string] | - |

#### Returns

`ExpectReturnType`

Result object.

___

### toBeVisible

▸ **toBeVisible**(`got`, ...`args`): `ExpectReturnType`

Checks that Vue wrapper is visible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [] | - |

#### Returns

`ExpectReturnType`

Result object.

___

### toExist

▸ **toExist**(`got`, ...`args`): `ExpectReturnType`

Checks that Vue wrapper exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [] | - |

#### Returns

`ExpectReturnType`

Result object.

___

### toHaveClass

▸ **toHaveClass**(`got`, ...`args`): `ExpectReturnType`

Checks that Vue wrapper has class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [expected: string] | - |

#### Returns

`ExpectReturnType`

Result object.

___

### touchPanMock

▸ **touchPanMock**(): [`TouchPanMock`](../interfaces/testUtils.TouchPanMock.md)

Mocks v-touch-pan directive.

#### Returns

[`TouchPanMock`](../interfaces/testUtils.TouchPanMock.md)

Mock.
