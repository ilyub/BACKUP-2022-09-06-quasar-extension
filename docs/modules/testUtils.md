[Quasar extension](../index.md) / [Exports](../modules.md) / testUtils

# Module: testUtils

## Table of contents

### Interfaces

- [CustomGlobalMountOptions](../interfaces/testUtils.CustomGlobalMountOptions.md)
- [TouchPanMock](../interfaces/testUtils.TouchPanMock.md)

### Functions

- [consoleWarnMock](testUtils.md#consolewarnmock)
- [findComponentFactory](testUtils.md#findcomponentfactory)
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

### consoleWarnMock

▸ **consoleWarnMock**(`prev`): (`value`: `unknown`) => `void`

Creates console.warn mock.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prev` | (`message`: `string`) => `void` | Orignial console.warn function. |

#### Returns

`fn`

Mock.

▸ (`value`): `void`

Creates console.warn mock.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

##### Returns

`void`

Mock.

___

### findComponentFactory

▸ **findComponentFactory**(`prefix`, `wrapper`): (`ref`: `string` \| `ComponentConstructor`<`any`, `any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\>) => `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

Finds component factory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | Prefix. |
| `wrapper` | `VueWrapper`<`any`\> | Wrapper. |

#### Returns

`fn`

Finds component function.

▸ (`ref`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `string` \| `ComponentConstructor`<`any`, `any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\> |

##### Returns

`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

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
