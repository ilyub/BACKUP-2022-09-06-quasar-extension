[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / Socket

# Interface: Socket

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).Socket

## Hierarchy

- [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

  ↳ **`Socket`**

## Table of contents

### Properties

- [isTTY](typings_env.NodeJS.Socket.md#istty)
- [readable](typings_env.NodeJS.Socket.md#readable)
- [writable](typings_env.NodeJS.Socket.md#writable)

### Methods

- [[asyncIterator]](typings_env.NodeJS.Socket.md#[asynciterator])
- [addListener](typings_env.NodeJS.Socket.md#addlistener)
- [emit](typings_env.NodeJS.Socket.md#emit)
- [end](typings_env.NodeJS.Socket.md#end)
- [eventNames](typings_env.NodeJS.Socket.md#eventnames)
- [getMaxListeners](typings_env.NodeJS.Socket.md#getmaxlisteners)
- [isPaused](typings_env.NodeJS.Socket.md#ispaused)
- [listenerCount](typings_env.NodeJS.Socket.md#listenercount)
- [listeners](typings_env.NodeJS.Socket.md#listeners)
- [off](typings_env.NodeJS.Socket.md#off)
- [on](typings_env.NodeJS.Socket.md#on)
- [once](typings_env.NodeJS.Socket.md#once)
- [pause](typings_env.NodeJS.Socket.md#pause)
- [pipe](typings_env.NodeJS.Socket.md#pipe)
- [prependListener](typings_env.NodeJS.Socket.md#prependlistener)
- [prependOnceListener](typings_env.NodeJS.Socket.md#prependoncelistener)
- [rawListeners](typings_env.NodeJS.Socket.md#rawlisteners)
- [read](typings_env.NodeJS.Socket.md#read)
- [removeAllListeners](typings_env.NodeJS.Socket.md#removealllisteners)
- [removeListener](typings_env.NodeJS.Socket.md#removelistener)
- [resume](typings_env.NodeJS.Socket.md#resume)
- [setEncoding](typings_env.NodeJS.Socket.md#setencoding)
- [setMaxListeners](typings_env.NodeJS.Socket.md#setmaxlisteners)
- [unpipe](typings_env.NodeJS.Socket.md#unpipe)
- [unshift](typings_env.NodeJS.Socket.md#unshift)
- [wrap](typings_env.NodeJS.Socket.md#wrap)
- [write](typings_env.NodeJS.Socket.md#write)

## Properties

### isTTY

• `Optional` **isTTY**: ``true``

___

### readable

• **readable**: `boolean`

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[readable](typings_env.NodeJS.ReadWriteStream.md#readable)

___

### writable

• **writable**: `boolean`

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[writable](typings_env.NodeJS.ReadWriteStream.md#writable)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`string` \| `Buffer`\>

#### Returns

`AsyncIterableIterator`<`string` \| `Buffer`\>

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[[asyncIterator]](typings_env.NodeJS.ReadWriteStream.md#[asynciterator])

___

### addListener

▸ **addListener**(`event`, `listener`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[addListener](typings_env.NodeJS.ReadWriteStream.md#addlistener)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[emit](typings_env.NodeJS.ReadWriteStream.md#emit)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[end](typings_env.NodeJS.ReadWriteStream.md#end)

▸ **end**(`data`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[end](typings_env.NodeJS.ReadWriteStream.md#end)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[end](typings_env.NodeJS.ReadWriteStream.md#end)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[eventNames](typings_env.NodeJS.ReadWriteStream.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[getMaxListeners](typings_env.NodeJS.ReadWriteStream.md#getmaxlisteners)

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[isPaused](typings_env.NodeJS.ReadWriteStream.md#ispaused)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[listenerCount](typings_env.NodeJS.ReadWriteStream.md#listenercount)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[listeners](typings_env.NodeJS.ReadWriteStream.md#listeners)

___

### off

▸ **off**(`event`, `listener`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[off](typings_env.NodeJS.ReadWriteStream.md#off)

___

### on

▸ **on**(`event`, `listener`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[on](typings_env.NodeJS.ReadWriteStream.md#on)

___

### once

▸ **once**(`event`, `listener`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[once](typings_env.NodeJS.ReadWriteStream.md#once)

___

### pause

▸ **pause**(): [`Socket`](typings_env.NodeJS.Socket.md)

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[pause](typings_env.NodeJS.ReadWriteStream.md#pause)

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

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[pipe](typings_env.NodeJS.ReadWriteStream.md#pipe)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[prependListener](typings_env.NodeJS.ReadWriteStream.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[prependOnceListener](typings_env.NodeJS.ReadWriteStream.md#prependoncelistener)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[rawListeners](typings_env.NodeJS.ReadWriteStream.md#rawlisteners)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[read](typings_env.NodeJS.ReadWriteStream.md#read)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[removeAllListeners](typings_env.NodeJS.ReadWriteStream.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[removeListener](typings_env.NodeJS.ReadWriteStream.md#removelistener)

___

### resume

▸ **resume**(): [`Socket`](typings_env.NodeJS.Socket.md)

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[resume](typings_env.NodeJS.ReadWriteStream.md#resume)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[setEncoding](typings_env.NodeJS.ReadWriteStream.md#setencoding)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[setMaxListeners](typings_env.NodeJS.ReadWriteStream.md#setmaxlisteners)

___

### unpipe

▸ **unpipe**(`destination?`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](typings_env.NodeJS.WritableStream.md) |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[unpipe](typings_env.NodeJS.ReadWriteStream.md#unpipe)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[unshift](typings_env.NodeJS.ReadWriteStream.md#unshift)

___

### wrap

▸ **wrap**(`oldStream`): [`Socket`](typings_env.NodeJS.Socket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](typings_env.NodeJS.ReadableStream.md) |

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

#### Inherited from

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[wrap](typings_env.NodeJS.ReadWriteStream.md#wrap)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[write](typings_env.NodeJS.ReadWriteStream.md#write)

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

[ReadWriteStream](typings_env.NodeJS.ReadWriteStream.md).[write](typings_env.NodeJS.ReadWriteStream.md#write)
