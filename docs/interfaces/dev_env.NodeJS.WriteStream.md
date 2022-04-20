[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / WriteStream

# Interface: WriteStream

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).WriteStream

## Hierarchy

- `WriteStream`

  ↳ **`WriteStream`**

## Table of contents

### Properties

- [bufferSize](dev_env.NodeJS.WriteStream.md#buffersize)
- [bytesRead](dev_env.NodeJS.WriteStream.md#bytesread)
- [bytesWritten](dev_env.NodeJS.WriteStream.md#byteswritten)
- [columns](dev_env.NodeJS.WriteStream.md#columns)
- [connecting](dev_env.NodeJS.WriteStream.md#connecting)
- [destroyed](dev_env.NodeJS.WriteStream.md#destroyed)
- [isTTY](dev_env.NodeJS.WriteStream.md#istty)
- [localAddress](dev_env.NodeJS.WriteStream.md#localaddress)
- [localPort](dev_env.NodeJS.WriteStream.md#localport)
- [readable](dev_env.NodeJS.WriteStream.md#readable)
- [readableEncoding](dev_env.NodeJS.WriteStream.md#readableencoding)
- [readableEnded](dev_env.NodeJS.WriteStream.md#readableended)
- [readableFlowing](dev_env.NodeJS.WriteStream.md#readableflowing)
- [readableHighWaterMark](dev_env.NodeJS.WriteStream.md#readablehighwatermark)
- [readableLength](dev_env.NodeJS.WriteStream.md#readablelength)
- [readableObjectMode](dev_env.NodeJS.WriteStream.md#readableobjectmode)
- [remoteAddress](dev_env.NodeJS.WriteStream.md#remoteaddress)
- [remoteFamily](dev_env.NodeJS.WriteStream.md#remotefamily)
- [remotePort](dev_env.NodeJS.WriteStream.md#remoteport)
- [rows](dev_env.NodeJS.WriteStream.md#rows)
- [writable](dev_env.NodeJS.WriteStream.md#writable)
- [writableCorked](dev_env.NodeJS.WriteStream.md#writablecorked)
- [writableEnded](dev_env.NodeJS.WriteStream.md#writableended)
- [writableFinished](dev_env.NodeJS.WriteStream.md#writablefinished)
- [writableHighWaterMark](dev_env.NodeJS.WriteStream.md#writablehighwatermark)
- [writableLength](dev_env.NodeJS.WriteStream.md#writablelength)
- [writableObjectMode](dev_env.NodeJS.WriteStream.md#writableobjectmode)

### Methods

- [[asyncIterator]](dev_env.NodeJS.WriteStream.md#[asynciterator])
- [\_construct](dev_env.NodeJS.WriteStream.md#_construct)
- [\_destroy](dev_env.NodeJS.WriteStream.md#_destroy)
- [\_final](dev_env.NodeJS.WriteStream.md#_final)
- [\_read](dev_env.NodeJS.WriteStream.md#_read)
- [\_write](dev_env.NodeJS.WriteStream.md#_write)
- [\_writev](dev_env.NodeJS.WriteStream.md#_writev)
- [addListener](dev_env.NodeJS.WriteStream.md#addlistener)
- [address](dev_env.NodeJS.WriteStream.md#address)
- [clearLine](dev_env.NodeJS.WriteStream.md#clearline)
- [clearScreenDown](dev_env.NodeJS.WriteStream.md#clearscreendown)
- [connect](dev_env.NodeJS.WriteStream.md#connect)
- [cork](dev_env.NodeJS.WriteStream.md#cork)
- [cursorTo](dev_env.NodeJS.WriteStream.md#cursorto)
- [destroy](dev_env.NodeJS.WriteStream.md#destroy)
- [emit](dev_env.NodeJS.WriteStream.md#emit)
- [end](dev_env.NodeJS.WriteStream.md#end)
- [eventNames](dev_env.NodeJS.WriteStream.md#eventnames)
- [getColorDepth](dev_env.NodeJS.WriteStream.md#getcolordepth)
- [getMaxListeners](dev_env.NodeJS.WriteStream.md#getmaxlisteners)
- [getWindowSize](dev_env.NodeJS.WriteStream.md#getwindowsize)
- [hasColors](dev_env.NodeJS.WriteStream.md#hascolors)
- [isPaused](dev_env.NodeJS.WriteStream.md#ispaused)
- [listenerCount](dev_env.NodeJS.WriteStream.md#listenercount)
- [listeners](dev_env.NodeJS.WriteStream.md#listeners)
- [moveCursor](dev_env.NodeJS.WriteStream.md#movecursor)
- [off](dev_env.NodeJS.WriteStream.md#off)
- [on](dev_env.NodeJS.WriteStream.md#on)
- [once](dev_env.NodeJS.WriteStream.md#once)
- [pause](dev_env.NodeJS.WriteStream.md#pause)
- [pipe](dev_env.NodeJS.WriteStream.md#pipe)
- [prependListener](dev_env.NodeJS.WriteStream.md#prependlistener)
- [prependOnceListener](dev_env.NodeJS.WriteStream.md#prependoncelistener)
- [push](dev_env.NodeJS.WriteStream.md#push)
- [rawListeners](dev_env.NodeJS.WriteStream.md#rawlisteners)
- [read](dev_env.NodeJS.WriteStream.md#read)
- [ref](dev_env.NodeJS.WriteStream.md#ref)
- [removeAllListeners](dev_env.NodeJS.WriteStream.md#removealllisteners)
- [removeListener](dev_env.NodeJS.WriteStream.md#removelistener)
- [resume](dev_env.NodeJS.WriteStream.md#resume)
- [setDefaultEncoding](dev_env.NodeJS.WriteStream.md#setdefaultencoding)
- [setEncoding](dev_env.NodeJS.WriteStream.md#setencoding)
- [setKeepAlive](dev_env.NodeJS.WriteStream.md#setkeepalive)
- [setMaxListeners](dev_env.NodeJS.WriteStream.md#setmaxlisteners)
- [setNoDelay](dev_env.NodeJS.WriteStream.md#setnodelay)
- [setTimeout](dev_env.NodeJS.WriteStream.md#settimeout)
- [uncork](dev_env.NodeJS.WriteStream.md#uncork)
- [unpipe](dev_env.NodeJS.WriteStream.md#unpipe)
- [unref](dev_env.NodeJS.WriteStream.md#unref)
- [unshift](dev_env.NodeJS.WriteStream.md#unshift)
- [wrap](dev_env.NodeJS.WriteStream.md#wrap)
- [write](dev_env.NodeJS.WriteStream.md#write)

## Properties

### bufferSize

• `Readonly` **bufferSize**: `number`

**`deprecated`** since v14.6.0 - Use `writableLength` instead.

#### Inherited from

tty.WriteStream.bufferSize

___

### bytesRead

• `Readonly` **bytesRead**: `number`

#### Inherited from

tty.WriteStream.bytesRead

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

#### Inherited from

tty.WriteStream.bytesWritten

___

### columns

• **columns**: `number`

#### Inherited from

tty.WriteStream.columns

___

### connecting

• `Readonly` **connecting**: `boolean`

#### Inherited from

tty.WriteStream.connecting

___

### destroyed

• `Readonly` **destroyed**: `boolean`

#### Inherited from

tty.WriteStream.destroyed

___

### isTTY

• **isTTY**: `boolean`

#### Inherited from

tty.WriteStream.isTTY

___

### localAddress

• `Readonly` **localAddress**: `string`

#### Inherited from

tty.WriteStream.localAddress

___

### localPort

• `Readonly` **localPort**: `number`

#### Inherited from

tty.WriteStream.localPort

___

### readable

• **readable**: `boolean`

#### Inherited from

tty.WriteStream.readable

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| `BufferEncoding`

#### Inherited from

tty.WriteStream.readableEncoding

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

#### Inherited from

tty.WriteStream.readableEnded

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

#### Inherited from

tty.WriteStream.readableFlowing

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

#### Inherited from

tty.WriteStream.readableHighWaterMark

___

### readableLength

• `Readonly` **readableLength**: `number`

#### Inherited from

tty.WriteStream.readableLength

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

#### Inherited from

tty.WriteStream.readableObjectMode

___

### remoteAddress

• `Optional` `Readonly` **remoteAddress**: `string`

#### Inherited from

tty.WriteStream.remoteAddress

___

### remoteFamily

• `Optional` `Readonly` **remoteFamily**: `string`

#### Inherited from

tty.WriteStream.remoteFamily

___

### remotePort

• `Optional` `Readonly` **remotePort**: `number`

#### Inherited from

tty.WriteStream.remotePort

___

### rows

• **rows**: `number`

#### Inherited from

tty.WriteStream.rows

___

### writable

• `Readonly` **writable**: `boolean`

#### Inherited from

tty.WriteStream.writable

___

### writableCorked

• `Readonly` **writableCorked**: `number`

#### Inherited from

tty.WriteStream.writableCorked

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

#### Inherited from

tty.WriteStream.writableEnded

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

#### Inherited from

tty.WriteStream.writableFinished

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

#### Inherited from

tty.WriteStream.writableHighWaterMark

___

### writableLength

• `Readonly` **writableLength**: `number`

#### Inherited from

tty.WriteStream.writableLength

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

#### Inherited from

tty.WriteStream.writableObjectMode

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

tty.WriteStream.\_\_@asyncIterator@11550

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

tty.WriteStream.\_construct

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

tty.WriteStream.\_destroy

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

tty.WriteStream.\_final

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

tty.WriteStream.\_read

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

tty.WriteStream.\_write

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

tty.WriteStream.\_writev

___

### addListener

▸ **addListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.addListener

▸ **addListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.addListener

___

### address

▸ **address**(): {} \| `AddressInfo`

#### Returns

{} \| `AddressInfo`

#### Inherited from

tty.WriteStream.address

___

### clearLine

▸ **clearLine**(`dir`, `callback?`): `boolean`

Clears the current line of this WriteStream in a direction identified by `dir`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `Direction` |
| `callback?` | () => `void` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.clearLine

___

### clearScreenDown

▸ **clearScreenDown**(`callback?`): `boolean`

Clears this `WriteStream` from the current cursor down.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.clearScreenDown

___

### connect

▸ **connect**(`options`, `connectionListener?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SocketConnectOpts` |
| `connectionListener?` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.connect

▸ **connect**(`port`, `host`, `connectionListener?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `host` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.connect

▸ **connect**(`port`, `connectionListener?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `connectionListener?` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.connect

▸ **connect**(`path`, `connectionListener?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.connect

___

### cork

▸ **cork**(): `void`

#### Returns

`void`

#### Inherited from

tty.WriteStream.cork

___

### cursorTo

▸ **cursorTo**(`x`, `y?`, `callback?`): `boolean`

Moves this WriteStream's cursor to the specified position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |
| `callback?` | () => `void` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.cursorTo

▸ **cursorTo**(`x`, `callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `callback` | () => `void` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.cursorTo

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

tty.WriteStream.destroy

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

tty.WriteStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.emit

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

tty.WriteStream.end

▸ **end**(`buffer`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

tty.WriteStream.end

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

tty.WriteStream.end

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

tty.WriteStream.eventNames

___

### getColorDepth

▸ **getColorDepth**(`env?`): `number`

**`default`** `process.env`

#### Parameters

| Name | Type |
| :------ | :------ |
| `env?` | `Object` |

#### Returns

`number`

#### Inherited from

tty.WriteStream.getColorDepth

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

tty.WriteStream.getMaxListeners

___

### getWindowSize

▸ **getWindowSize**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Inherited from

tty.WriteStream.getWindowSize

___

### hasColors

▸ **hasColors**(`depth?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `depth?` | `number` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.hasColors

▸ **hasColors**(`env?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `env?` | `Object` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.hasColors

▸ **hasColors**(`depth`, `env?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `depth` | `number` |
| `env?` | `Object` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.hasColors

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.isPaused

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

tty.WriteStream.listenerCount

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

tty.WriteStream.listeners

___

### moveCursor

▸ **moveCursor**(`dx`, `dy`, `callback?`): `boolean`

Moves this WriteStream's cursor relative to its current position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |
| `callback?` | () => `void` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.moveCursor

___

### off

▸ **off**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.off

___

### on

▸ **on**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.on

▸ **on**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.on

___

### once

▸ **once**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.once

▸ **once**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.once

___

### pause

▸ **pause**(): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.pause

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

tty.WriteStream.pipe

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.prependListener

▸ **prependListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.prependOnceListener

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

tty.WriteStream.push

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

tty.WriteStream.rawListeners

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

tty.WriteStream.read

___

### ref

▸ **ref**(): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.ref

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeAllListeners

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

___

### resume

▸ **resume**(): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.resume

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setDefaultEncoding

___

### setEncoding

▸ **setEncoding**(`encoding?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | `BufferEncoding` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setEncoding

___

### setKeepAlive

▸ **setKeepAlive**(`enable?`, `initialDelay?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setKeepAlive

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setMaxListeners

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setNoDelay

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `callback?` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setTimeout

___

### uncork

▸ **uncork**(): `void`

#### Returns

`void`

#### Inherited from

tty.WriteStream.uncork

___

### unpipe

▸ **unpipe**(`destination?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](dev_env.NodeJS.WritableStream.md) |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.unpipe

___

### unref

▸ **unref**(): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.unref

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

tty.WriteStream.unshift

___

### wrap

▸ **wrap**(`oldStream`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](dev_env.NodeJS.ReadableStream.md) |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.wrap

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

tty.WriteStream.write

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

tty.WriteStream.write
