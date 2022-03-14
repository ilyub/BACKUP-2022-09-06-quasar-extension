[Quasar extension](../index.md) / [Exports](../modules.md) / testUtils

# Module: testUtils

## Table of contents

### Interfaces

- [CustomGlobalMountOptions](../interfaces/testUtils.CustomGlobalMountOptions.md)
- [TouchPanMock](../interfaces/testUtils.TouchPanMock.md)

### Functions

- [findComponentFactory](testUtils.md#findcomponentfactory)
- [findElementFactory](testUtils.md#findelementfactory)
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

## Functions

### findComponentFactory

▸ **findComponentFactory**(`prefix`, `wrapper`): (`ref`: `string` \| `ComponentConstructor`<`any`, `any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\>) => `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Find component factory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | Prefix. |
| `wrapper` | `VueWrapper`<`any`\> | Wrapper. |

#### Returns

`fn`

Find component function.

▸ (`ref`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `string` \| `ComponentConstructor`<`any`, `any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\> |

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

### findFactory

▸ **findFactory**(`prefix`, `wrapper`): `Object`

Find component factory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | Prefix. |
| `wrapper` | `VueWrapper`<`any`\> | Wrapper. |

#### Returns

`Object`

Find component function.

| Name | Type |
| :------ | :------ |
| `comp` | `ReturnType`<typeof [`findComponentFactory`](testUtils.md#findcomponentfactory)\> |
| `elem` | `ReturnType`<typeof [`findElementFactory`](testUtils.md#findelementfactory)\> |

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

▸ **htmlToEqual**(`got`, `expected`): `testUtils.ExpectReturnType`

Checks that Vue wrapper contains expected HTML code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `expected` | `string` | Expected HTML code. |

#### Returns

`testUtils.ExpectReturnType`

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

▸ **textToEqual**(`got`, `expected`): `testUtils.ExpectReturnType`

Checks that Vue wrapper contains expected text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `expected` | `string` | Expected text. |

#### Returns

`testUtils.ExpectReturnType`

Result object.

___

### toBeVisible

▸ **toBeVisible**(`got`): `testUtils.ExpectReturnType`

Checks that Vue wrapper is visible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |

#### Returns

`testUtils.ExpectReturnType`

Result object.

___

### toExist

▸ **toExist**(`got`): `testUtils.ExpectReturnType`

Checks that Vue wrapper exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |

#### Returns

`testUtils.ExpectReturnType`

Result object.

___

### toHaveClass

▸ **toHaveClass**(`got`, `expected`): `testUtils.ExpectReturnType`

Checks that Vue wrapper has class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `expected` | `string` | Expected class name. |

#### Returns

`testUtils.ExpectReturnType`

Result object.

___

### touchPanMock

▸ **touchPanMock**(): [`TouchPanMock`](../interfaces/testUtils.TouchPanMock.md)

Mocks v-touch-pan directive.

#### Returns

[`TouchPanMock`](../interfaces/testUtils.TouchPanMock.md)

Mock.
