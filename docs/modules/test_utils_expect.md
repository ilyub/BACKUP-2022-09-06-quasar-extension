[Quasar extension](../index.md) / [Exports](../modules.md) / test-utils/expect

# Module: test-utils/expect

## Table of contents

### Variables

- [matchers](test_utils_expect.md#matchers)

### Functions

- [htmlToEqual](test_utils_expect.md#htmltoequal)
- [textToEqual](test_utils_expect.md#texttoequal)
- [toBeVisible](test_utils_expect.md#tobevisible)
- [toExist](test_utils_expect.md#toexist)
- [toHaveClass](test_utils_expect.md#tohaveclass)

## Variables

### matchers

• `Const` **matchers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `htmlToEqual` | `ExpectFromMatcher`<``"htmlToEqual"``\> |
| `textToEqual` | `ExpectFromMatcher`<``"textToEqual"``\> |
| `toBeVisible` | `ExpectFromMatcher`<``"toBeVisible"``\> |
| `toExist` | `ExpectFromMatcher`<``"toExist"``\> |
| `toHaveClass` | `ExpectFromMatcher`<``"toHaveClass"``\> |

## Functions

### htmlToEqual

▸ **htmlToEqual**(`got`, ...`args`): `ExpectReturnType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `got` | `unknown` |
| `...args` | [expected: string] |

#### Returns

`ExpectReturnType`

___

### textToEqual

▸ **textToEqual**(`got`, ...`args`): `ExpectReturnType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `got` | `unknown` |
| `...args` | [expected: string] |

#### Returns

`ExpectReturnType`

___

### toBeVisible

▸ **toBeVisible**(`got`, ...`args`): `ExpectReturnType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `got` | `unknown` |
| `...args` | [] |

#### Returns

`ExpectReturnType`

___

### toExist

▸ **toExist**(`got`, ...`args`): `ExpectReturnType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `got` | `unknown` |
| `...args` | [] |

#### Returns

`ExpectReturnType`

___

### toHaveClass

▸ **toHaveClass**(`got`, ...`args`): `ExpectReturnType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `got` | `unknown` |
| `...args` | [expected: string] |

#### Returns

`ExpectReturnType`
