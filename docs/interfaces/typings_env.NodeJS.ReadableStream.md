[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / ReadableStream

# Interface: ReadableStream

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).ReadableStream

## Hierarchy

- [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

  ↳ **`ReadableStream`**

  ↳↳ [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

## Table of contents

### Properties

- [readable](typings_env.NodeJS.ReadableStream.md#readable)

### Methods

- [[asyncIterator]](typings_env.NodeJS.ReadableStream.md#[asynciterator])
- [addListener](typings_env.NodeJS.ReadableStream.md#addlistener)
- [emit](typings_env.NodeJS.ReadableStream.md#emit)
- [eventNames](typings_env.NodeJS.ReadableStream.md#eventnames)
- [getMaxListeners](typings_env.NodeJS.ReadableStream.md#getmaxlisteners)
- [isPaused](typings_env.NodeJS.ReadableStream.md#ispaused)
- [listenerCount](typings_env.NodeJS.ReadableStream.md#listenercount)
- [listeners](typings_env.NodeJS.ReadableStream.md#listeners)
- [off](typings_env.NodeJS.ReadableStream.md#off)
- [on](typings_env.NodeJS.ReadableStream.md#on)
- [once](typings_env.NodeJS.ReadableStream.md#once)
- [pause](typings_env.NodeJS.ReadableStream.md#pause)
- [pipe](typings_env.NodeJS.ReadableStream.md#pipe)
- [prependListener](typings_env.NodeJS.ReadableStream.md#prependlistener)
- [prependOnceListener](typings_env.NodeJS.ReadableStream.md#prependoncelistener)
- [rawListeners](typings_env.NodeJS.ReadableStream.md#rawlisteners)
- [read](typings_env.NodeJS.ReadableStream.md#read)
- [removeAllListeners](typings_env.NodeJS.ReadableStream.md#removealllisteners)
- [removeListener](typings_env.NodeJS.ReadableStream.md#removelistener)
- [resume](typings_env.NodeJS.ReadableStream.md#resume)
- [setEncoding](typings_env.NodeJS.ReadableStream.md#setencoding)
- [setMaxListeners](typings_env.NodeJS.ReadableStream.md#setmaxlisteners)
- [unpipe](typings_env.NodeJS.ReadableStream.md#unpipe)
- [unshift](typings_env.NodeJS.ReadableStream.md#unshift)
- [wrap](typings_env.NodeJS.ReadableStream.md#wrap)

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

▸ **addListener**(`event`, `listener`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[addListener](typings_env.NodeJS.EventEmitter.md#addlistener)

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

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[emit](typings_env.NodeJS.EventEmitter.md#emit)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[eventNames](typings_env.NodeJS.EventEmitter.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[getMaxListeners](typings_env.NodeJS.EventEmitter.md#getmaxlisteners)

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

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[listenerCount](typings_env.NodeJS.EventEmitter.md#listenercount)

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

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[listeners](typings_env.NodeJS.EventEmitter.md#listeners)

___

### off

▸ **off**(`event`, `listener`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[off](typings_env.NodeJS.EventEmitter.md#off)

___

### on

▸ **on**(`event`, `listener`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[on](typings_env.NodeJS.EventEmitter.md#on)

___

### once

▸ **once**(`event`, `listener`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[once](typings_env.NodeJS.EventEmitter.md#once)

___

### pause

▸ **pause**(): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](typings_env.NodeJS.WritableStream.md)<`T`\> |

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

▸ **prependListener**(`event`, `listener`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[prependListener](typings_env.NodeJS.EventEmitter.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[prependOnceListener](typings_env.NodeJS.EventEmitter.md#prependoncelistener)

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

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[rawListeners](typings_env.NodeJS.EventEmitter.md#rawlisteners)

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

▸ **removeAllListeners**(`event?`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[removeAllListeners](typings_env.NodeJS.EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[removeListener](typings_env.NodeJS.EventEmitter.md#removelistener)

___

### resume

▸ **resume**(): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[setMaxListeners](typings_env.NodeJS.EventEmitter.md#setmaxlisteners)

___

### unpipe

▸ **unpipe**(`destination?`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](typings_env.NodeJS.WritableStream.md) |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

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

▸ **wrap**(`oldStream`): [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](typings_env.NodeJS.ReadableStream.md) |

#### Returns

[`ReadableStream`](typings_env.NodeJS.ReadableStream.md)
