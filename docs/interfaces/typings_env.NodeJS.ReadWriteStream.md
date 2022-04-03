[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / ReadWriteStream

# Interface: ReadWriteStream

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).ReadWriteStream

## Hierarchy

- [`ReadableStream`](typings_env.NodeJS.ReadableStream.md)

- [`WritableStream`](typings_env.NodeJS.WritableStream.md)

  ↳ **`ReadWriteStream`**

  ↳↳ [`Socket`](typings_env.NodeJS.Socket.md)

## Table of contents

### Properties

- [readable](typings_env.NodeJS.ReadWriteStream.md#readable)
- [writable](typings_env.NodeJS.ReadWriteStream.md#writable)

### Methods

- [[asyncIterator]](typings_env.NodeJS.ReadWriteStream.md#[asynciterator])
- [addListener](typings_env.NodeJS.ReadWriteStream.md#addlistener)
- [emit](typings_env.NodeJS.ReadWriteStream.md#emit)
- [end](typings_env.NodeJS.ReadWriteStream.md#end)
- [eventNames](typings_env.NodeJS.ReadWriteStream.md#eventnames)
- [getMaxListeners](typings_env.NodeJS.ReadWriteStream.md#getmaxlisteners)
- [isPaused](typings_env.NodeJS.ReadWriteStream.md#ispaused)
- [listenerCount](typings_env.NodeJS.ReadWriteStream.md#listenercount)
- [listeners](typings_env.NodeJS.ReadWriteStream.md#listeners)
- [off](typings_env.NodeJS.ReadWriteStream.md#off)
- [on](typings_env.NodeJS.ReadWriteStream.md#on)
- [once](typings_env.NodeJS.ReadWriteStream.md#once)
- [pause](typings_env.NodeJS.ReadWriteStream.md#pause)
- [pipe](typings_env.NodeJS.ReadWriteStream.md#pipe)
- [prependListener](typings_env.NodeJS.ReadWriteStream.md#prependlistener)
- [prependOnceListener](typings_env.NodeJS.ReadWriteStream.md#prependoncelistener)
- [rawListeners](typings_env.NodeJS.ReadWriteStream.md#rawlisteners)
- [read](typings_env.NodeJS.ReadWriteStream.md#read)
- [removeAllListeners](typings_env.NodeJS.ReadWriteStream.md#removealllisteners)
- [removeListener](typings_env.NodeJS.ReadWriteStream.md#removelistener)
- [resume](typings_env.NodeJS.ReadWriteStream.md#resume)
- [setEncoding](typings_env.NodeJS.ReadWriteStream.md#setencoding)
- [setMaxListeners](typings_env.NodeJS.ReadWriteStream.md#setmaxlisteners)
- [unpipe](typings_env.NodeJS.ReadWriteStream.md#unpipe)
- [unshift](typings_env.NodeJS.ReadWriteStream.md#unshift)
- [wrap](typings_env.NodeJS.ReadWriteStream.md#wrap)
- [write](typings_env.NodeJS.ReadWriteStream.md#write)

## Properties

### readable

• **readable**: `boolean`

#### Inherited from

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[readable](typings_env.NodeJS.ReadableStream.md#readable)

___

### writable

• **writable**: `boolean`

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[writable](typings_env.NodeJS.WritableStream.md#writable)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`string` \| `Buffer`\>

#### Returns

`AsyncIterableIterator`<`string` \| `Buffer`\>

#### Inherited from

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[[asyncIterator]](typings_env.NodeJS.ReadableStream.md#[asynciterator])

___

### addListener

▸ **addListener**(`event`, `listener`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[addListener](typings_env.NodeJS.WritableStream.md#addlistener)

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

[WritableStream](typings_env.NodeJS.WritableStream.md).[emit](typings_env.NodeJS.WritableStream.md#emit)

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

[WritableStream](typings_env.NodeJS.WritableStream.md).[end](typings_env.NodeJS.WritableStream.md#end)

▸ **end**(`data`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[end](typings_env.NodeJS.WritableStream.md#end)

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

[WritableStream](typings_env.NodeJS.WritableStream.md).[end](typings_env.NodeJS.WritableStream.md#end)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[eventNames](typings_env.NodeJS.WritableStream.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[getMaxListeners](typings_env.NodeJS.WritableStream.md#getmaxlisteners)

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[isPaused](typings_env.NodeJS.ReadableStream.md#ispaused)

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

[WritableStream](typings_env.NodeJS.WritableStream.md).[listenerCount](typings_env.NodeJS.WritableStream.md#listenercount)

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

[WritableStream](typings_env.NodeJS.WritableStream.md).[listeners](typings_env.NodeJS.WritableStream.md#listeners)

___

### off

▸ **off**(`event`, `listener`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[off](typings_env.NodeJS.WritableStream.md#off)

___

### on

▸ **on**(`event`, `listener`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[on](typings_env.NodeJS.WritableStream.md#on)

___

### once

▸ **once**(`event`, `listener`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[once](typings_env.NodeJS.WritableStream.md#once)

___

### pause

▸ **pause**(): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[pause](typings_env.NodeJS.ReadableStream.md#pause)

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

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[pipe](typings_env.NodeJS.ReadableStream.md#pipe)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[prependListener](typings_env.NodeJS.WritableStream.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[prependOnceListener](typings_env.NodeJS.WritableStream.md#prependoncelistener)

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

[WritableStream](typings_env.NodeJS.WritableStream.md).[rawListeners](typings_env.NodeJS.WritableStream.md#rawlisteners)

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

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[read](typings_env.NodeJS.ReadableStream.md#read)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[removeAllListeners](typings_env.NodeJS.WritableStream.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[removeListener](typings_env.NodeJS.WritableStream.md#removelistener)

___

### resume

▸ **resume**(): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[resume](typings_env.NodeJS.ReadableStream.md#resume)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[setEncoding](typings_env.NodeJS.ReadableStream.md#setencoding)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](typings_env.NodeJS.WritableStream.md).[setMaxListeners](typings_env.NodeJS.WritableStream.md#setmaxlisteners)

___

### unpipe

▸ **unpipe**(`destination?`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](typings_env.NodeJS.WritableStream.md) |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[unpipe](typings_env.NodeJS.ReadableStream.md#unpipe)

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

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[unshift](typings_env.NodeJS.ReadableStream.md#unshift)

___

### wrap

▸ **wrap**(`oldStream`): [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](typings_env.NodeJS.ReadableStream.md) |

#### Returns

[`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](typings_env.NodeJS.ReadableStream.md).[wrap](typings_env.NodeJS.ReadableStream.md#wrap)

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

[WritableStream](typings_env.NodeJS.WritableStream.md).[write](typings_env.NodeJS.WritableStream.md#write)

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

[WritableStream](typings_env.NodeJS.WritableStream.md).[write](typings_env.NodeJS.WritableStream.md#write)
