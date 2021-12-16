[Quasar Framework](../index.md) / [Exports](../modules.md) / testUtils

# Module: testUtils

## Table of contents

### Interfaces

- [CustomGlobalMountOptions](../interfaces/testUtils.CustomGlobalMountOptions.md)
- [TouchPanMock](../interfaces/testUtils.TouchPanMock.md)

### Functions

- [globalMountOptions](testUtils.md#globalmountoptions)
- [htmlToEqual](testUtils.md#htmltoequal)
- [jestReset](testUtils.md#jestreset)
- [jestSetup](testUtils.md#jestsetup)
- [mockTouchPan](testUtils.md#mocktouchpan)
- [textToEqual](testUtils.md#texttoequal)
- [toBeVisible](testUtils.md#tobevisible)
- [toExist](testUtils.md#toexist)
- [toHaveClass](testUtils.md#tohaveclass)

## Functions

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

### mockTouchPan

▸ **mockTouchPan**(): [`TouchPanMock`](../interfaces/testUtils.TouchPanMock.md)

Mocks v-touch-pan directive.

#### Returns

[`TouchPanMock`](../interfaces/testUtils.TouchPanMock.md)

Mock.

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
