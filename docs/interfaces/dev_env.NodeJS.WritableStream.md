[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / WritableStream

# Interface: WritableStream

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).WritableStream

## Hierarchy

- [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

  ↳ **`WritableStream`**

  ↳↳ [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

## Table of contents

### Properties

- [writable](dev_env.NodeJS.WritableStream.md#writable)

### Methods

- [addListener](dev_env.NodeJS.WritableStream.md#addlistener)
- [emit](dev_env.NodeJS.WritableStream.md#emit)
- [end](dev_env.NodeJS.WritableStream.md#end)
- [eventNames](dev_env.NodeJS.WritableStream.md#eventnames)
- [getMaxListeners](dev_env.NodeJS.WritableStream.md#getmaxlisteners)
- [listenerCount](dev_env.NodeJS.WritableStream.md#listenercount)
- [listeners](dev_env.NodeJS.WritableStream.md#listeners)
- [off](dev_env.NodeJS.WritableStream.md#off)
- [on](dev_env.NodeJS.WritableStream.md#on)
- [once](dev_env.NodeJS.WritableStream.md#once)
- [prependListener](dev_env.NodeJS.WritableStream.md#prependlistener)
- [prependOnceListener](dev_env.NodeJS.WritableStream.md#prependoncelistener)
- [rawListeners](dev_env.NodeJS.WritableStream.md#rawlisteners)
- [removeAllListeners](dev_env.NodeJS.WritableStream.md#removealllisteners)
- [removeListener](dev_env.NodeJS.WritableStream.md#removelistener)
- [setMaxListeners](dev_env.NodeJS.WritableStream.md#setmaxlisteners)
- [write](dev_env.NodeJS.WritableStream.md#write)

## Properties

### writable

• **writable**: `boolean`

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[addListener](dev_env.NodeJS.EventEmitter.md#addlistener)

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

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[emit](dev_env.NodeJS.EventEmitter.md#emit)

___

### end

▸ **end**(`cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

`void`

▸ **end**(`data`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

`void`

▸ **end**(`str`, `encoding?`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

`void`

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[eventNames](dev_env.NodeJS.EventEmitter.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[getMaxListeners](dev_env.NodeJS.EventEmitter.md#getmaxlisteners)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[listenerCount](dev_env.NodeJS.EventEmitter.md#listenercount)

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[listeners](dev_env.NodeJS.EventEmitter.md#listeners)

___

### off

▸ **off**(`event`, `listener`): [`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[off](dev_env.NodeJS.EventEmitter.md#off)

___

### on

▸ **on**(`event`, `listener`): [`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[on](dev_env.NodeJS.EventEmitter.md#on)

___

### once

▸ **once**(`event`, `listener`): [`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[once](dev_env.NodeJS.EventEmitter.md#once)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[prependListener](dev_env.NodeJS.EventEmitter.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[prependOnceListener](dev_env.NodeJS.EventEmitter.md#prependoncelistener)

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[rawListeners](dev_env.NodeJS.EventEmitter.md#rawlisteners)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[removeAllListeners](dev_env.NodeJS.EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[removeListener](dev_env.NodeJS.EventEmitter.md#removelistener)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`WritableStream`](dev_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[setMaxListeners](dev_env.NodeJS.EventEmitter.md#setmaxlisteners)

___

### write

▸ **write**(`buffer`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `cb?` | (`err?`: ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

▸ **write**(`str`, `encoding?`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | `BufferEncoding` |
| `cb?` | (`err?`: ``null`` \| `Error`) => `void` |

#### Returns

`boolean`
