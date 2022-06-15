[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/expect](../modules/dev_expect.md) / Matchers

# Interface: Matchers

[dev/expect](../modules/dev_expect.md).Matchers

## Table of contents

### Methods

- [toBeDefined](dev_expect.Matchers.md#tobedefined)
- [toStrictEqual](dev_expect.Matchers.md#tostrictequal)

## Methods

### toBeDefined

▸ `Readonly` **toBeDefined**(`got`): [`ExpectReturnType`](dev_expect.ExpectReturnType.md)

Core jest matcher.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got. |

#### Returns

[`ExpectReturnType`](dev_expect.ExpectReturnType.md)

Result object.

___

### toStrictEqual

▸ `Readonly` **toStrictEqual**(`got`, `expected`): [`ExpectReturnType`](dev_expect.ExpectReturnType.md)

Core jest matcher.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got. |
| `expected` | `unknown` | Expected. |

#### Returns

[`ExpectReturnType`](dev_expect.ExpectReturnType.md)

Result object.
