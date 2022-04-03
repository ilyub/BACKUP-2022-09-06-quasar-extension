[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / EventEmitter

# Interface: EventEmitter

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).EventEmitter

## Hierarchy

- **`EventEmitter`**

  ↳ [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

  ↳ [`WritableStream`](typings_env.NodeJS.WritableStream.md)

  ↳ [`Domain`](typings_env.NodeJS.Domain.md)

  ↳ [`Process`](typings_env.NodeJS.Process.md)

## Table of contents

### Methods

- [addListener](typings_env.NodeJS.EventEmitter.md#addlistener)
- [emit](typings_env.NodeJS.EventEmitter.md#emit)
- [eventNames](typings_env.NodeJS.EventEmitter.md#eventnames)
- [getMaxListeners](typings_env.NodeJS.EventEmitter.md#getmaxlisteners)
- [listenerCount](typings_env.NodeJS.EventEmitter.md#listenercount)
- [listeners](typings_env.NodeJS.EventEmitter.md#listeners)
- [off](typings_env.NodeJS.EventEmitter.md#off)
- [on](typings_env.NodeJS.EventEmitter.md#on)
- [once](typings_env.NodeJS.EventEmitter.md#once)
- [prependListener](typings_env.NodeJS.EventEmitter.md#prependlistener)
- [prependOnceListener](typings_env.NodeJS.EventEmitter.md#prependoncelistener)
- [rawListeners](typings_env.NodeJS.EventEmitter.md#rawlisteners)
- [removeAllListeners](typings_env.NodeJS.EventEmitter.md#removealllisteners)
- [removeListener](typings_env.NodeJS.EventEmitter.md#removelistener)
- [setMaxListeners](typings_env.NodeJS.EventEmitter.md#setmaxlisteners)

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

___

### off

▸ **off**(`event`, `listener`): [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

___

### on

▸ **on**(`event`, `listener`): [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

___

### once

▸ **once**(`event`, `listener`): [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`EventEmitter`](typings_env.NodeJS.EventEmitter.md)
