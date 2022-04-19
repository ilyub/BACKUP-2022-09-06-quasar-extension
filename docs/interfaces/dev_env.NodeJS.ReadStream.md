[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / ReadStream

# Interface: ReadStream

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).ReadStream

## Hierarchy

- `ReadStream`

  ↳ **`ReadStream`**

## Table of contents

### Properties

- [bufferSize](dev_env.NodeJS.ReadStream.md#buffersize)
- [bytesRead](dev_env.NodeJS.ReadStream.md#bytesread)
- [bytesWritten](dev_env.NodeJS.ReadStream.md#byteswritten)
- [connecting](dev_env.NodeJS.ReadStream.md#connecting)
- [destroyed](dev_env.NodeJS.ReadStream.md#destroyed)
- [isRaw](dev_env.NodeJS.ReadStream.md#israw)
- [isTTY](dev_env.NodeJS.ReadStream.md#istty)
- [localAddress](dev_env.NodeJS.ReadStream.md#localaddress)
- [localPort](dev_env.NodeJS.ReadStream.md#localport)
- [readable](dev_env.NodeJS.ReadStream.md#readable)
- [readableEncoding](dev_env.NodeJS.ReadStream.md#readableencoding)
- [readableEnded](dev_env.NodeJS.ReadStream.md#readableended)
- [readableFlowing](dev_env.NodeJS.ReadStream.md#readableflowing)
- [readableHighWaterMark](dev_env.NodeJS.ReadStream.md#readablehighwatermark)
- [readableLength](dev_env.NodeJS.ReadStream.md#readablelength)
- [readableObjectMode](dev_env.NodeJS.ReadStream.md#readableobjectmode)
- [remoteAddress](dev_env.NodeJS.ReadStream.md#remoteaddress)
- [remoteFamily](dev_env.NodeJS.ReadStream.md#remotefamily)
- [remotePort](dev_env.NodeJS.ReadStream.md#remoteport)
- [writable](dev_env.NodeJS.ReadStream.md#writable)
- [writableCorked](dev_env.NodeJS.ReadStream.md#writablecorked)
- [writableEnded](dev_env.NodeJS.ReadStream.md#writableended)
- [writableFinished](dev_env.NodeJS.ReadStream.md#writablefinished)
- [writableHighWaterMark](dev_env.NodeJS.ReadStream.md#writablehighwatermark)
- [writableLength](dev_env.NodeJS.ReadStream.md#writablelength)
- [writableObjectMode](dev_env.NodeJS.ReadStream.md#writableobjectmode)

### Methods

- [[asyncIterator]](dev_env.NodeJS.ReadStream.md#[asynciterator])
- [\_construct](dev_env.NodeJS.ReadStream.md#_construct)
- [\_destroy](dev_env.NodeJS.ReadStream.md#_destroy)
- [\_final](dev_env.NodeJS.ReadStream.md#_final)
- [\_read](dev_env.NodeJS.ReadStream.md#_read)
- [\_write](dev_env.NodeJS.ReadStream.md#_write)
- [\_writev](dev_env.NodeJS.ReadStream.md#_writev)
- [addListener](dev_env.NodeJS.ReadStream.md#addlistener)
- [address](dev_env.NodeJS.ReadStream.md#address)
- [connect](dev_env.NodeJS.ReadStream.md#connect)
- [cork](dev_env.NodeJS.ReadStream.md#cork)
- [destroy](dev_env.NodeJS.ReadStream.md#destroy)
- [emit](dev_env.NodeJS.ReadStream.md#emit)
- [end](dev_env.NodeJS.ReadStream.md#end)
- [eventNames](dev_env.NodeJS.ReadStream.md#eventnames)
- [getMaxListeners](dev_env.NodeJS.ReadStream.md#getmaxlisteners)
- [isPaused](dev_env.NodeJS.ReadStream.md#ispaused)
- [listenerCount](dev_env.NodeJS.ReadStream.md#listenercount)
- [listeners](dev_env.NodeJS.ReadStream.md#listeners)
- [off](dev_env.NodeJS.ReadStream.md#off)
- [on](dev_env.NodeJS.ReadStream.md#on)
- [once](dev_env.NodeJS.ReadStream.md#once)
- [pause](dev_env.NodeJS.ReadStream.md#pause)
- [pipe](dev_env.NodeJS.ReadStream.md#pipe)
- [prependListener](dev_env.NodeJS.ReadStream.md#prependlistener)
- [prependOnceListener](dev_env.NodeJS.ReadStream.md#prependoncelistener)
- [push](dev_env.NodeJS.ReadStream.md#push)
- [rawListeners](dev_env.NodeJS.ReadStream.md#rawlisteners)
- [read](dev_env.NodeJS.ReadStream.md#read)
- [ref](dev_env.NodeJS.ReadStream.md#ref)
- [removeAllListeners](dev_env.NodeJS.ReadStream.md#removealllisteners)
- [removeListener](dev_env.NodeJS.ReadStream.md#removelistener)
- [resume](dev_env.NodeJS.ReadStream.md#resume)
- [setDefaultEncoding](dev_env.NodeJS.ReadStream.md#setdefaultencoding)
- [setEncoding](dev_env.NodeJS.ReadStream.md#setencoding)
- [setKeepAlive](dev_env.NodeJS.ReadStream.md#setkeepalive)
- [setMaxListeners](dev_env.NodeJS.ReadStream.md#setmaxlisteners)
- [setNoDelay](dev_env.NodeJS.ReadStream.md#setnodelay)
- [setRawMode](dev_env.NodeJS.ReadStream.md#setrawmode)
- [setTimeout](dev_env.NodeJS.ReadStream.md#settimeout)
- [uncork](dev_env.NodeJS.ReadStream.md#uncork)
- [unpipe](dev_env.NodeJS.ReadStream.md#unpipe)
- [unref](dev_env.NodeJS.ReadStream.md#unref)
- [unshift](dev_env.NodeJS.ReadStream.md#unshift)
- [wrap](dev_env.NodeJS.ReadStream.md#wrap)
- [write](dev_env.NodeJS.ReadStream.md#write)

## Properties

### bufferSize

• `Readonly` **bufferSize**: `number`

**`deprecated`** since v14.6.0 - Use `writableLength` instead.

#### Inherited from

tty.ReadStream.bufferSize

___

### bytesRead

• `Readonly` **bytesRead**: `number`

#### Inherited from

tty.ReadStream.bytesRead

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

#### Inherited from

tty.ReadStream.bytesWritten

___

### connecting

• `Readonly` **connecting**: `boolean`

#### Inherited from

tty.ReadStream.connecting

___

### destroyed

• `Readonly` **destroyed**: `boolean`

#### Inherited from

tty.ReadStream.destroyed

___

### isRaw

• **isRaw**: `boolean`

#### Inherited from

tty.ReadStream.isRaw

___

### isTTY

• **isTTY**: `boolean`

#### Inherited from

tty.ReadStream.isTTY

___

### localAddress

• `Readonly` **localAddress**: `string`

#### Inherited from

tty.ReadStream.localAddress

___

### localPort

• `Readonly` **localPort**: `number`

#### Inherited from

tty.ReadStream.localPort

___

### readable

• **readable**: `boolean`

#### Inherited from

tty.ReadStream.readable

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| `BufferEncoding`

#### Inherited from

tty.ReadStream.readableEncoding

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

#### Inherited from

tty.ReadStream.readableEnded

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

#### Inherited from

tty.ReadStream.readableFlowing

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

#### Inherited from

tty.ReadStream.readableHighWaterMark

___

### readableLength

• `Readonly` **readableLength**: `number`

#### Inherited from

tty.ReadStream.readableLength

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

#### Inherited from

tty.ReadStream.readableObjectMode

___

### remoteAddress

• `Optional` `Readonly` **remoteAddress**: `string`

#### Inherited from

tty.ReadStream.remoteAddress

___

### remoteFamily

• `Optional` `Readonly` **remoteFamily**: `string`

#### Inherited from

tty.ReadStream.remoteFamily

___

### remotePort

• `Optional` `Readonly` **remotePort**: `number`

#### Inherited from

tty.ReadStream.remotePort

___

### writable

• `Readonly` **writable**: `boolean`

#### Inherited from

tty.ReadStream.writable

___

### writableCorked

• `Readonly` **writableCorked**: `number`

#### Inherited from

tty.ReadStream.writableCorked

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

#### Inherited from

tty.ReadStream.writableEnded

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

#### Inherited from

tty.ReadStream.writableFinished

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

#### Inherited from

tty.ReadStream.writableHighWaterMark

___

### writableLength

• `Readonly` **writableLength**: `number`

#### Inherited from

tty.ReadStream.writableLength

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

#### Inherited from

tty.ReadStream.writableObjectMode

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

tty.ReadStream.\_\_@asyncIterator@11549

___

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.\_construct

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.\_destroy

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.\_final

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.\_read

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.\_write

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.\_writev

___

### addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

events.EventEmitter
  1. close
  2. connect
  3. data
  4. drain
  5. end
  6. error
  7. lookup
  8. timeout

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`had_error`: `boolean`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.addListener

___

### address

▸ **address**(): {} \| `AddressInfo`

#### Returns

{} \| `AddressInfo`

#### Inherited from

tty.ReadStream.address

___

### connect

▸ **connect**(`options`, `connectionListener?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SocketConnectOpts` |
| `connectionListener?` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.connect

▸ **connect**(`port`, `host`, `connectionListener?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `host` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.connect

▸ **connect**(`port`, `connectionListener?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `connectionListener?` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.connect

▸ **connect**(`path`, `connectionListener?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.connect

___

### cork

▸ **cork**(): `void`

#### Returns

`void`

#### Inherited from

tty.ReadStream.cork

___

### destroy

▸ **destroy**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.destroy

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

tty.ReadStream.emit

▸ **emit**(`event`, `had_error`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `had_error` | `boolean` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.emit

▸ **emit**(`event`, `data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `data` | `Buffer` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.emit

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.emit

▸ **emit**(`event`, `err`, `address`, `family`, `host`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `err` | `Error` |
| `address` | `string` |
| `family` | `string` \| `number` |
| `host` | `string` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.emit

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

tty.ReadStream.end

▸ **end**(`buffer`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.end

▸ **end**(`str`, `encoding?`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `Uint8Array` |
| `encoding?` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.end

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

tty.ReadStream.eventNames

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

tty.ReadStream.getMaxListeners

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.isPaused

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

tty.ReadStream.listenerCount

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

tty.ReadStream.listeners

___

### off

▸ **off**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.off

___

### on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`had_error`: `boolean`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

▸ **on**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.on

___

### once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`had_error`: `boolean`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

▸ **once**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.once

___

### pause

▸ **pause**(): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.pause

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

tty.ReadStream.pipe

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`had_error`: `boolean`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`had_error`: `boolean`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"lookup"`` |
| `listener` | (`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.prependOnceListener

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.push

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

tty.ReadStream.rawListeners

___

### read

▸ **read**(`size?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`any`

#### Inherited from

tty.ReadStream.read

___

### ref

▸ **ref**(): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.ref

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.removeAllListeners

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.removeListener

▸ **removeListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.removeListener

▸ **removeListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.removeListener

▸ **removeListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.removeListener

▸ **removeListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.removeListener

▸ **removeListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.removeListener

▸ **removeListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.removeListener

▸ **removeListener**(`event`, `listener`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.removeListener

___

### resume

▸ **resume**(): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.resume

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.setDefaultEncoding

___

### setEncoding

▸ **setEncoding**(`encoding?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | `BufferEncoding` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.setEncoding

___

### setKeepAlive

▸ **setKeepAlive**(`enable?`, `initialDelay?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.setKeepAlive

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.setMaxListeners

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.setNoDelay

___

### setRawMode

▸ **setRawMode**(`mode`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `boolean` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.setRawMode

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `callback?` | () => `void` |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.setTimeout

___

### uncork

▸ **uncork**(): `void`

#### Returns

`void`

#### Inherited from

tty.ReadStream.uncork

___

### unpipe

▸ **unpipe**(`destination?`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](dev_env.NodeJS.WritableStream.md) |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.unpipe

___

### unref

▸ **unref**(): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.unref

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`void`

#### Inherited from

tty.ReadStream.unshift

___

### wrap

▸ **wrap**(`oldStream`): [`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](dev_env.NodeJS.ReadableStream.md) |

#### Returns

[`ReadStream`](dev_env.NodeJS.ReadStream.md)

#### Inherited from

tty.ReadStream.wrap

___

### write

▸ **write**(`buffer`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `cb?` | (`err?`: `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.write

▸ **write**(`str`, `encoding?`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `Uint8Array` |
| `encoding?` | `BufferEncoding` |
| `cb?` | (`err?`: `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

tty.ReadStream.write
