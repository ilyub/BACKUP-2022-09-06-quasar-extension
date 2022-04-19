[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / EventEmitter

# Interface: EventEmitter

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).EventEmitter

## Hierarchy

- **`EventEmitter`**

  ↳ [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

  ↳ [`WritableStream`](dev_env.NodeJS.WritableStream.md)

  ↳ [`Domain`](dev_env.NodeJS.Domain.md)

  ↳ [`Process`](dev_env.NodeJS.Process.md)

## Table of contents

### Methods

- [addListener](dev_env.NodeJS.EventEmitter.md#addlistener)
- [emit](dev_env.NodeJS.EventEmitter.md#emit)
- [eventNames](dev_env.NodeJS.EventEmitter.md#eventnames)
- [getMaxListeners](dev_env.NodeJS.EventEmitter.md#getmaxlisteners)
- [listenerCount](dev_env.NodeJS.EventEmitter.md#listenercount)
- [listeners](dev_env.NodeJS.EventEmitter.md#listeners)
- [off](dev_env.NodeJS.EventEmitter.md#off)
- [on](dev_env.NodeJS.EventEmitter.md#on)
- [once](dev_env.NodeJS.EventEmitter.md#once)
- [prependListener](dev_env.NodeJS.EventEmitter.md#prependlistener)
- [prependOnceListener](dev_env.NodeJS.EventEmitter.md#prependoncelistener)
- [rawListeners](dev_env.NodeJS.EventEmitter.md#rawlisteners)
- [removeAllListeners](dev_env.NodeJS.EventEmitter.md#removealllisteners)
- [removeListener](dev_env.NodeJS.EventEmitter.md#removelistener)
- [setMaxListeners](dev_env.NodeJS.EventEmitter.md#setmaxlisteners)

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

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

▸ **off**(`event`, `listener`): [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

___

### on

▸ **on**(`event`, `listener`): [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

___

### once

▸ **once**(`event`, `listener`): [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

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

▸ **removeAllListeners**(`event?`): [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`EventEmitter`](dev_env.NodeJS.EventEmitter.md)
