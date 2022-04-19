[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / ReadableStream

# Interface: ReadableStream

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).ReadableStream

## Hierarchy

- [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

  ↳ **`ReadableStream`**

  ↳↳ [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

## Table of contents

### Properties

- [readable](dev_env.NodeJS.ReadableStream.md#readable)

### Methods

- [[asyncIterator]](dev_env.NodeJS.ReadableStream.md#[asynciterator])
- [addListener](dev_env.NodeJS.ReadableStream.md#addlistener)
- [emit](dev_env.NodeJS.ReadableStream.md#emit)
- [eventNames](dev_env.NodeJS.ReadableStream.md#eventnames)
- [getMaxListeners](dev_env.NodeJS.ReadableStream.md#getmaxlisteners)
- [isPaused](dev_env.NodeJS.ReadableStream.md#ispaused)
- [listenerCount](dev_env.NodeJS.ReadableStream.md#listenercount)
- [listeners](dev_env.NodeJS.ReadableStream.md#listeners)
- [off](dev_env.NodeJS.ReadableStream.md#off)
- [on](dev_env.NodeJS.ReadableStream.md#on)
- [once](dev_env.NodeJS.ReadableStream.md#once)
- [pause](dev_env.NodeJS.ReadableStream.md#pause)
- [pipe](dev_env.NodeJS.ReadableStream.md#pipe)
- [prependListener](dev_env.NodeJS.ReadableStream.md#prependlistener)
- [prependOnceListener](dev_env.NodeJS.ReadableStream.md#prependoncelistener)
- [rawListeners](dev_env.NodeJS.ReadableStream.md#rawlisteners)
- [read](dev_env.NodeJS.ReadableStream.md#read)
- [removeAllListeners](dev_env.NodeJS.ReadableStream.md#removealllisteners)
- [removeListener](dev_env.NodeJS.ReadableStream.md#removelistener)
- [resume](dev_env.NodeJS.ReadableStream.md#resume)
- [setEncoding](dev_env.NodeJS.ReadableStream.md#setencoding)
- [setMaxListeners](dev_env.NodeJS.ReadableStream.md#setmaxlisteners)
- [unpipe](dev_env.NodeJS.ReadableStream.md#unpipe)
- [unshift](dev_env.NodeJS.ReadableStream.md#unshift)
- [wrap](dev_env.NodeJS.ReadableStream.md#wrap)

## Properties

### readable

• **readable**: `boolean`

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`string` \| `Buffer`\>

#### Returns

`AsyncIterableIterator`<`string` \| `Buffer`\>

___

### addListener

▸ **addListener**(`event`, `listener`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

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

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

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

▸ **off**(`event`, `listener`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[off](dev_env.NodeJS.EventEmitter.md#off)

___

### on

▸ **on**(`event`, `listener`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[on](dev_env.NodeJS.EventEmitter.md#on)

___

### once

▸ **once**(`event`, `listener`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[once](dev_env.NodeJS.EventEmitter.md#once)

___

### pause

▸ **pause**(): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](dev_env.NodeJS.WritableStream.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[prependListener](dev_env.NodeJS.EventEmitter.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

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

### read

▸ **read**(`size?`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`string` \| `Buffer`

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[removeAllListeners](dev_env.NodeJS.EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[removeListener](dev_env.NodeJS.EventEmitter.md#removelistener)

___

### resume

▸ **resume**(): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[setMaxListeners](dev_env.NodeJS.EventEmitter.md#setmaxlisteners)

___

### unpipe

▸ **unpipe**(`destination?`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](dev_env.NodeJS.WritableStream.md) |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `string` \| `Uint8Array` |
| `encoding?` | `BufferEncoding` |

#### Returns

`void`

___

### wrap

▸ **wrap**(`oldStream`): [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](dev_env.NodeJS.ReadableStream.md) |

#### Returns

[`ReadableStream`](dev_env.NodeJS.ReadableStream.md)
