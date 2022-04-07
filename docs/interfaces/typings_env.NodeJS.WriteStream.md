[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / WriteStream

# Interface: WriteStream

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).WriteStream

## Hierarchy

- `WriteStream`

  ↳ **`WriteStream`**

## Table of contents

### Properties

- [bufferSize](typings_env.NodeJS.WriteStream.md#buffersize)
- [bytesRead](typings_env.NodeJS.WriteStream.md#bytesread)
- [bytesWritten](typings_env.NodeJS.WriteStream.md#byteswritten)
- [columns](typings_env.NodeJS.WriteStream.md#columns)
- [connecting](typings_env.NodeJS.WriteStream.md#connecting)
- [destroyed](typings_env.NodeJS.WriteStream.md#destroyed)
- [isTTY](typings_env.NodeJS.WriteStream.md#istty)
- [localAddress](typings_env.NodeJS.WriteStream.md#localaddress)
- [localPort](typings_env.NodeJS.WriteStream.md#localport)
- [readable](typings_env.NodeJS.WriteStream.md#readable)
- [readableEncoding](typings_env.NodeJS.WriteStream.md#readableencoding)
- [readableEnded](typings_env.NodeJS.WriteStream.md#readableended)
- [readableFlowing](typings_env.NodeJS.WriteStream.md#readableflowing)
- [readableHighWaterMark](typings_env.NodeJS.WriteStream.md#readablehighwatermark)
- [readableLength](typings_env.NodeJS.WriteStream.md#readablelength)
- [readableObjectMode](typings_env.NodeJS.WriteStream.md#readableobjectmode)
- [remoteAddress](typings_env.NodeJS.WriteStream.md#remoteaddress)
- [remoteFamily](typings_env.NodeJS.WriteStream.md#remotefamily)
- [remotePort](typings_env.NodeJS.WriteStream.md#remoteport)
- [rows](typings_env.NodeJS.WriteStream.md#rows)
- [writable](typings_env.NodeJS.WriteStream.md#writable)
- [writableCorked](typings_env.NodeJS.WriteStream.md#writablecorked)
- [writableEnded](typings_env.NodeJS.WriteStream.md#writableended)
- [writableFinished](typings_env.NodeJS.WriteStream.md#writablefinished)
- [writableHighWaterMark](typings_env.NodeJS.WriteStream.md#writablehighwatermark)
- [writableLength](typings_env.NodeJS.WriteStream.md#writablelength)
- [writableObjectMode](typings_env.NodeJS.WriteStream.md#writableobjectmode)

### Methods

- [[asyncIterator]](typings_env.NodeJS.WriteStream.md#[asynciterator])
- [\_construct](typings_env.NodeJS.WriteStream.md#_construct)
- [\_destroy](typings_env.NodeJS.WriteStream.md#_destroy)
- [\_final](typings_env.NodeJS.WriteStream.md#_final)
- [\_read](typings_env.NodeJS.WriteStream.md#_read)
- [\_write](typings_env.NodeJS.WriteStream.md#_write)
- [\_writev](typings_env.NodeJS.WriteStream.md#_writev)
- [addListener](typings_env.NodeJS.WriteStream.md#addlistener)
- [address](typings_env.NodeJS.WriteStream.md#address)
- [clearLine](typings_env.NodeJS.WriteStream.md#clearline)
- [clearScreenDown](typings_env.NodeJS.WriteStream.md#clearscreendown)
- [connect](typings_env.NodeJS.WriteStream.md#connect)
- [cork](typings_env.NodeJS.WriteStream.md#cork)
- [cursorTo](typings_env.NodeJS.WriteStream.md#cursorto)
- [destroy](typings_env.NodeJS.WriteStream.md#destroy)
- [emit](typings_env.NodeJS.WriteStream.md#emit)
- [end](typings_env.NodeJS.WriteStream.md#end)
- [eventNames](typings_env.NodeJS.WriteStream.md#eventnames)
- [getColorDepth](typings_env.NodeJS.WriteStream.md#getcolordepth)
- [getMaxListeners](typings_env.NodeJS.WriteStream.md#getmaxlisteners)
- [getWindowSize](typings_env.NodeJS.WriteStream.md#getwindowsize)
- [hasColors](typings_env.NodeJS.WriteStream.md#hascolors)
- [isPaused](typings_env.NodeJS.WriteStream.md#ispaused)
- [listenerCount](typings_env.NodeJS.WriteStream.md#listenercount)
- [listeners](typings_env.NodeJS.WriteStream.md#listeners)
- [moveCursor](typings_env.NodeJS.WriteStream.md#movecursor)
- [off](typings_env.NodeJS.WriteStream.md#off)
- [on](typings_env.NodeJS.WriteStream.md#on)
- [once](typings_env.NodeJS.WriteStream.md#once)
- [pause](typings_env.NodeJS.WriteStream.md#pause)
- [pipe](typings_env.NodeJS.WriteStream.md#pipe)
- [prependListener](typings_env.NodeJS.WriteStream.md#prependlistener)
- [prependOnceListener](typings_env.NodeJS.WriteStream.md#prependoncelistener)
- [push](typings_env.NodeJS.WriteStream.md#push)
- [rawListeners](typings_env.NodeJS.WriteStream.md#rawlisteners)
- [read](typings_env.NodeJS.WriteStream.md#read)
- [ref](typings_env.NodeJS.WriteStream.md#ref)
- [removeAllListeners](typings_env.NodeJS.WriteStream.md#removealllisteners)
- [removeListener](typings_env.NodeJS.WriteStream.md#removelistener)
- [resume](typings_env.NodeJS.WriteStream.md#resume)
- [setDefaultEncoding](typings_env.NodeJS.WriteStream.md#setdefaultencoding)
- [setEncoding](typings_env.NodeJS.WriteStream.md#setencoding)
- [setKeepAlive](typings_env.NodeJS.WriteStream.md#setkeepalive)
- [setMaxListeners](typings_env.NodeJS.WriteStream.md#setmaxlisteners)
- [setNoDelay](typings_env.NodeJS.WriteStream.md#setnodelay)
- [setTimeout](typings_env.NodeJS.WriteStream.md#settimeout)
- [uncork](typings_env.NodeJS.WriteStream.md#uncork)
- [unpipe](typings_env.NodeJS.WriteStream.md#unpipe)
- [unref](typings_env.NodeJS.WriteStream.md#unref)
- [unshift](typings_env.NodeJS.WriteStream.md#unshift)
- [wrap](typings_env.NodeJS.WriteStream.md#wrap)
- [write](typings_env.NodeJS.WriteStream.md#write)

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

tty.WriteStream.\_\_@asyncIterator@12768

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

▸ **addListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.addListener

▸ **addListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

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

▸ **connect**(`options`, `connectionListener?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SocketConnectOpts` |
| `connectionListener?` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.connect

▸ **connect**(`port`, `host`, `connectionListener?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `host` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.connect

▸ **connect**(`port`, `connectionListener?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `connectionListener?` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.connect

▸ **connect**(`path`, `connectionListener?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

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

▸ **off**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.off

___

### on

▸ **on**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.on

▸ **on**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.on

___

### once

▸ **once**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.once

▸ **once**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.once

___

### pause

▸ **pause**(): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.pause

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

tty.WriteStream.pipe

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.prependListener

▸ **prependListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resize"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

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

▸ **ref**(): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.ref

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeAllListeners

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.removeListener

___

### resume

▸ **resume**(): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.resume

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setDefaultEncoding

___

### setEncoding

▸ **setEncoding**(`encoding?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | `BufferEncoding` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setEncoding

___

### setKeepAlive

▸ **setKeepAlive**(`enable?`, `initialDelay?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setKeepAlive

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setMaxListeners

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.setNoDelay

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `callback?` | () => `void` |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

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

▸ **unpipe**(`destination?`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](typings_env.NodeJS.WritableStream.md) |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.unpipe

___

### unref

▸ **unref**(): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

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

▸ **wrap**(`oldStream`): [`WriteStream`](typings_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](typings_env.NodeJS.ReadableStream.md) |

#### Returns

[`WriteStream`](typings_env.NodeJS.WriteStream.md)

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
