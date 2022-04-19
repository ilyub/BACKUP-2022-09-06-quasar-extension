[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / ReadWriteStream

# Interface: ReadWriteStream

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).ReadWriteStream

## Hierarchy

- [`ReadableStream`](dev_env.NodeJS.ReadableStream.md)

- [`WritableStream`](dev_env.NodeJS.WritableStream.md)

  ↳ **`ReadWriteStream`**

  ↳↳ [`Socket`](dev_env.NodeJS.Socket.md)

## Table of contents

### Properties

- [readable](dev_env.NodeJS.ReadWriteStream.md#readable)
- [writable](dev_env.NodeJS.ReadWriteStream.md#writable)

### Methods

- [[asyncIterator]](dev_env.NodeJS.ReadWriteStream.md#[asynciterator])
- [addListener](dev_env.NodeJS.ReadWriteStream.md#addlistener)
- [emit](dev_env.NodeJS.ReadWriteStream.md#emit)
- [end](dev_env.NodeJS.ReadWriteStream.md#end)
- [eventNames](dev_env.NodeJS.ReadWriteStream.md#eventnames)
- [getMaxListeners](dev_env.NodeJS.ReadWriteStream.md#getmaxlisteners)
- [isPaused](dev_env.NodeJS.ReadWriteStream.md#ispaused)
- [listenerCount](dev_env.NodeJS.ReadWriteStream.md#listenercount)
- [listeners](dev_env.NodeJS.ReadWriteStream.md#listeners)
- [off](dev_env.NodeJS.ReadWriteStream.md#off)
- [on](dev_env.NodeJS.ReadWriteStream.md#on)
- [once](dev_env.NodeJS.ReadWriteStream.md#once)
- [pause](dev_env.NodeJS.ReadWriteStream.md#pause)
- [pipe](dev_env.NodeJS.ReadWriteStream.md#pipe)
- [prependListener](dev_env.NodeJS.ReadWriteStream.md#prependlistener)
- [prependOnceListener](dev_env.NodeJS.ReadWriteStream.md#prependoncelistener)
- [rawListeners](dev_env.NodeJS.ReadWriteStream.md#rawlisteners)
- [read](dev_env.NodeJS.ReadWriteStream.md#read)
- [removeAllListeners](dev_env.NodeJS.ReadWriteStream.md#removealllisteners)
- [removeListener](dev_env.NodeJS.ReadWriteStream.md#removelistener)
- [resume](dev_env.NodeJS.ReadWriteStream.md#resume)
- [setEncoding](dev_env.NodeJS.ReadWriteStream.md#setencoding)
- [setMaxListeners](dev_env.NodeJS.ReadWriteStream.md#setmaxlisteners)
- [unpipe](dev_env.NodeJS.ReadWriteStream.md#unpipe)
- [unshift](dev_env.NodeJS.ReadWriteStream.md#unshift)
- [wrap](dev_env.NodeJS.ReadWriteStream.md#wrap)
- [write](dev_env.NodeJS.ReadWriteStream.md#write)

## Properties

### readable

• **readable**: `boolean`

#### Inherited from

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[readable](dev_env.NodeJS.ReadableStream.md#readable)

___

### writable

• **writable**: `boolean`

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[writable](dev_env.NodeJS.WritableStream.md#writable)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`string` \| `Buffer`\>

#### Returns

`AsyncIterableIterator`<`string` \| `Buffer`\>

#### Inherited from

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[[asyncIterator]](dev_env.NodeJS.ReadableStream.md#[asynciterator])

___

### addListener

▸ **addListener**(`event`, `listener`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[addListener](dev_env.NodeJS.WritableStream.md#addlistener)

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

[WritableStream](dev_env.NodeJS.WritableStream.md).[emit](dev_env.NodeJS.WritableStream.md#emit)

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

[WritableStream](dev_env.NodeJS.WritableStream.md).[end](dev_env.NodeJS.WritableStream.md#end)

▸ **end**(`data`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[end](dev_env.NodeJS.WritableStream.md#end)

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

[WritableStream](dev_env.NodeJS.WritableStream.md).[end](dev_env.NodeJS.WritableStream.md#end)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[eventNames](dev_env.NodeJS.WritableStream.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[getMaxListeners](dev_env.NodeJS.WritableStream.md#getmaxlisteners)

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[isPaused](dev_env.NodeJS.ReadableStream.md#ispaused)

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

[WritableStream](dev_env.NodeJS.WritableStream.md).[listenerCount](dev_env.NodeJS.WritableStream.md#listenercount)

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

[WritableStream](dev_env.NodeJS.WritableStream.md).[listeners](dev_env.NodeJS.WritableStream.md#listeners)

___

### off

▸ **off**(`event`, `listener`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[off](dev_env.NodeJS.WritableStream.md#off)

___

### on

▸ **on**(`event`, `listener`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[on](dev_env.NodeJS.WritableStream.md#on)

___

### once

▸ **once**(`event`, `listener`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[once](dev_env.NodeJS.WritableStream.md#once)

___

### pause

▸ **pause**(): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[pause](dev_env.NodeJS.ReadableStream.md#pause)

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

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[pipe](dev_env.NodeJS.ReadableStream.md#pipe)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[prependListener](dev_env.NodeJS.WritableStream.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[prependOnceListener](dev_env.NodeJS.WritableStream.md#prependoncelistener)

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

[WritableStream](dev_env.NodeJS.WritableStream.md).[rawListeners](dev_env.NodeJS.WritableStream.md#rawlisteners)

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

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[read](dev_env.NodeJS.ReadableStream.md#read)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[removeAllListeners](dev_env.NodeJS.WritableStream.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[removeListener](dev_env.NodeJS.WritableStream.md#removelistener)

___

### resume

▸ **resume**(): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[resume](dev_env.NodeJS.ReadableStream.md#resume)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[setEncoding](dev_env.NodeJS.ReadableStream.md#setencoding)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[WritableStream](dev_env.NodeJS.WritableStream.md).[setMaxListeners](dev_env.NodeJS.WritableStream.md#setmaxlisteners)

___

### unpipe

▸ **unpipe**(`destination?`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](dev_env.NodeJS.WritableStream.md) |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[unpipe](dev_env.NodeJS.ReadableStream.md#unpipe)

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

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[unshift](dev_env.NodeJS.ReadableStream.md#unshift)

___

### wrap

▸ **wrap**(`oldStream`): [`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](dev_env.NodeJS.ReadableStream.md) |

#### Returns

[`ReadWriteStream`](dev_env.NodeJS.ReadWriteStream.md)

#### Inherited from

[ReadableStream](dev_env.NodeJS.ReadableStream.md).[wrap](dev_env.NodeJS.ReadableStream.md#wrap)

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

[WritableStream](dev_env.NodeJS.WritableStream.md).[write](dev_env.NodeJS.WritableStream.md#write)

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

[WritableStream](dev_env.NodeJS.WritableStream.md).[write](dev_env.NodeJS.WritableStream.md#write)
