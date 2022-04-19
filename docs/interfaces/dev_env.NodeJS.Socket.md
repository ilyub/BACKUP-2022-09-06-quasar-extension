[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / Socket

# Interface: Socket

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).Socket

## Hierarchy

- [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

  ↳ **`Socket`**

## Table of contents

### Properties

- [isTTY](dev_env.NodeJS.Socket.md#istty)
- [readable](dev_env.NodeJS.Socket.md#readable)
- [writable](dev_env.NodeJS.Socket.md#writable)

### Methods

- [[asyncIterator]](dev_env.NodeJS.Socket.md#[asynciterator])
- [addListener](dev_env.NodeJS.Socket.md#addlistener)
- [emit](dev_env.NodeJS.Socket.md#emit)
- [end](dev_env.NodeJS.Socket.md#end)
- [eventNames](dev_env.NodeJS.Socket.md#eventnames)
- [getMaxListeners](dev_env.NodeJS.Socket.md#getmaxlisteners)
- [isPaused](dev_env.NodeJS.Socket.md#ispaused)
- [listenerCount](dev_env.NodeJS.Socket.md#listenercount)
- [listeners](dev_env.NodeJS.Socket.md#listeners)
- [off](dev_env.NodeJS.Socket.md#off)
- [on](dev_env.NodeJS.Socket.md#on)
- [once](dev_env.NodeJS.Socket.md#once)
- [pause](dev_env.NodeJS.Socket.md#pause)
- [pipe](dev_env.NodeJS.Socket.md#pipe)
- [prependListener](dev_env.NodeJS.Socket.md#prependlistener)
- [prependOnceListener](dev_env.NodeJS.Socket.md#prependoncelistener)
- [rawListeners](dev_env.NodeJS.Socket.md#rawlisteners)
- [read](dev_env.NodeJS.Socket.md#read)
- [removeAllListeners](dev_env.NodeJS.Socket.md#removealllisteners)
- [removeListener](dev_env.NodeJS.Socket.md#removelistener)
- [resume](dev_env.NodeJS.Socket.md#resume)
- [setEncoding](dev_env.NodeJS.Socket.md#setencoding)
- [setMaxListeners](dev_env.NodeJS.Socket.md#setmaxlisteners)
- [unpipe](dev_env.NodeJS.Socket.md#unpipe)
- [unshift](dev_env.NodeJS.Socket.md#unshift)
- [wrap](dev_env.NodeJS.Socket.md#wrap)
- [write](dev_env.NodeJS.Socket.md#write)

## Properties

### isTTY

• `Optional` **isTTY**: ``true``

___

### readable

• **readable**: `boolean`

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[readable](dev_env.NodeJS.ReadWriteStream.md#readable)

___

### writable

• **writable**: `boolean`

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[writable](dev_env.NodeJS.ReadWriteStream.md#writable)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`string` \| `Buffer`\>

#### Returns

`AsyncIterableIterator`<`string` \| `Buffer`\>

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[[asyncIterator]](dev_env.NodeJS.ReadWriteStream.md#[asynciterator])

___

### addListener

▸ **addListener**(`event`, `listener`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[addListener](dev_env.NodeJS.ReadWriteStream.md#addlistener)

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

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[emit](dev_env.NodeJS.ReadWriteStream.md#emit)

___

### end

▸ **end**(`cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[end](dev_env.NodeJS.ReadWriteStream.md#end)

▸ **end**(`data`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[end](dev_env.NodeJS.ReadWriteStream.md#end)

▸ **end**(`str`, `encoding?`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[end](dev_env.NodeJS.ReadWriteStream.md#end)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[eventNames](dev_env.NodeJS.ReadWriteStream.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[getMaxListeners](dev_env.NodeJS.ReadWriteStream.md#getmaxlisteners)

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[isPaused](dev_env.NodeJS.ReadWriteStream.md#ispaused)

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

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[listenerCount](dev_env.NodeJS.ReadWriteStream.md#listenercount)

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

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[listeners](dev_env.NodeJS.ReadWriteStream.md#listeners)

___

### off

▸ **off**(`event`, `listener`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[off](dev_env.NodeJS.ReadWriteStream.md#off)

___

### on

▸ **on**(`event`, `listener`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[on](dev_env.NodeJS.ReadWriteStream.md#on)

___

### once

▸ **once**(`event`, `listener`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[once](dev_env.NodeJS.ReadWriteStream.md#once)

___

### pause

▸ **pause**(): [`Socket`](dev_env.NodeJS.Socket.md)

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[pause](dev_env.NodeJS.ReadWriteStream.md#pause)

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

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[pipe](dev_env.NodeJS.ReadWriteStream.md#pipe)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[prependListener](dev_env.NodeJS.ReadWriteStream.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[prependOnceListener](dev_env.NodeJS.ReadWriteStream.md#prependoncelistener)

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

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[rawListeners](dev_env.NodeJS.ReadWriteStream.md#rawlisteners)

___

### read

▸ **read**(`size?`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`string` \| `Buffer`

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[read](dev_env.NodeJS.ReadWriteStream.md#read)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[removeAllListeners](dev_env.NodeJS.ReadWriteStream.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[removeListener](dev_env.NodeJS.ReadWriteStream.md#removelistener)

___

### resume

▸ **resume**(): [`Socket`](dev_env.NodeJS.Socket.md)

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[resume](dev_env.NodeJS.ReadWriteStream.md#resume)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[setEncoding](dev_env.NodeJS.ReadWriteStream.md#setencoding)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[setMaxListeners](dev_env.NodeJS.ReadWriteStream.md#setmaxlisteners)

___

### unpipe

▸ **unpipe**(`destination?`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](dev_env.NodeJS.WritableStream.md) |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[unpipe](dev_env.NodeJS.ReadWriteStream.md#unpipe)

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

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[unshift](dev_env.NodeJS.ReadWriteStream.md#unshift)

___

### wrap

▸ **wrap**(`oldStream`): [`Socket`](dev_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](dev_env.NodeJS.ReadableStream.md) |

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[wrap](dev_env.NodeJS.ReadWriteStream.md#wrap)

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

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[write](dev_env.NodeJS.ReadWriteStream.md#write)

▸ **write**(`str`, `encoding?`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | `BufferEncoding` |
| `cb?` | (`err?`: ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[ReadWriteStream](dev_env.NodeJS.ReadWriteStream.md).[write](dev_env.NodeJS.ReadWriteStream.md#write)
