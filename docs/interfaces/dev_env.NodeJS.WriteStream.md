[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / WriteStream

# Interface: WriteStream

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).WriteStream

## Hierarchy

- `WriteStream`

  ↳ **`WriteStream`**

## Table of contents

### Properties

- [allowHalfOpen](dev_env.NodeJS.WriteStream.md#allowhalfopen)
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
- [readableAborted](dev_env.NodeJS.WriteStream.md#readableaborted)
- [readableDidRead](dev_env.NodeJS.WriteStream.md#readabledidread)
- [readableEncoding](dev_env.NodeJS.WriteStream.md#readableencoding)
- [readableEnded](dev_env.NodeJS.WriteStream.md#readableended)
- [readableFlowing](dev_env.NodeJS.WriteStream.md#readableflowing)
- [readableHighWaterMark](dev_env.NodeJS.WriteStream.md#readablehighwatermark)
- [readableLength](dev_env.NodeJS.WriteStream.md#readablelength)
- [readableObjectMode](dev_env.NodeJS.WriteStream.md#readableobjectmode)
- [readyState](dev_env.NodeJS.WriteStream.md#readystate)
- [remoteAddress](dev_env.NodeJS.WriteStream.md#remoteaddress)
- [remoteFamily](dev_env.NodeJS.WriteStream.md#remotefamily)
- [remotePort](dev_env.NodeJS.WriteStream.md#remoteport)
- [rows](dev_env.NodeJS.WriteStream.md#rows)
- [timeout](dev_env.NodeJS.WriteStream.md#timeout)
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

### allowHalfOpen

• **allowHalfOpen**: `boolean`

If `false` then the stream will automatically end the writable side when the
readable side ends. Set initially by the `allowHalfOpen` constructor option,
which defaults to `false`.

This can be changed manually to change the half-open behavior of an existing`Duplex` stream instance, but must be changed before the `'end'` event is
emitted.

**`since`** v0.9.4

#### Inherited from

tty.WriteStream.allowHalfOpen

___

### bufferSize

• `Readonly` **bufferSize**: `number`

This property shows the number of characters buffered for writing. The buffer
may contain strings whose length after encoding is not yet known. So this number
is only an approximation of the number of bytes in the buffer.

`net.Socket` has the property that `socket.write()` always works. This is to
help users get up and running quickly. The computer cannot always keep up
with the amount of data that is written to a socket. The network connection
simply might be too slow. Node.js will internally queue up the data written to a
socket and send it out over the wire when it is possible.

The consequence of this internal buffering is that memory may grow.
Users who experience large or growing `bufferSize` should attempt to
"throttle" the data flows in their program with `socket.pause()` and `socket.resume()`.

**`since`** v0.3.8

**`deprecated`** Since v14.6.0 - Use `writableLength` instead.

#### Inherited from

tty.WriteStream.bufferSize

___

### bytesRead

• `Readonly` **bytesRead**: `number`

The amount of received bytes.

**`since`** v0.5.3

#### Inherited from

tty.WriteStream.bytesRead

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

The amount of bytes sent.

**`since`** v0.5.3

#### Inherited from

tty.WriteStream.bytesWritten

___

### columns

• **columns**: `number`

A `number` specifying the number of columns the TTY currently has. This property
is updated whenever the `'resize'` event is emitted.

**`since`** v0.7.7

#### Inherited from

tty.WriteStream.columns

___

### connecting

• `Readonly` **connecting**: `boolean`

If `true`,`socket.connect(options[, connectListener])` was
called and has not yet finished. It will stay `true` until the socket becomes
connected, then it is set to `false` and the `'connect'` event is emitted. Note
that the `socket.connect(options[, connectListener])` callback is a listener for the `'connect'` event.

**`since`** v6.1.0

#### Inherited from

tty.WriteStream.connecting

___

### destroyed

• `Readonly` **destroyed**: `boolean`

See `writable.destroyed` for further details.

#### Inherited from

tty.WriteStream.destroyed

___

### isTTY

• **isTTY**: `boolean`

A `boolean` that is always `true`.

**`since`** v0.5.8

#### Inherited from

tty.WriteStream.isTTY

___

### localAddress

• `Optional` `Readonly` **localAddress**: `string`

The string representation of the local IP address the remote client is
connecting on. For example, in a server listening on `'0.0.0.0'`, if a client
connects on `'192.168.1.1'`, the value of `socket.localAddress` would be`'192.168.1.1'`.

**`since`** v0.9.6

#### Inherited from

tty.WriteStream.localAddress

___

### localPort

• `Optional` `Readonly` **localPort**: `number`

The numeric representation of the local port. For example, `80` or `21`.

**`since`** v0.9.6

#### Inherited from

tty.WriteStream.localPort

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**`since`** v11.4.0

#### Inherited from

tty.WriteStream.readable

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

**`since`** v16.8.0

**`experimental`**

#### Inherited from

tty.WriteStream.readableAborted

___

### readableDidRead

• `Readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

**`since`** v16.7.0, v14.18.0

**`experimental`**

#### Inherited from

tty.WriteStream.readableDidRead

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| `BufferEncoding`

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

**`since`** v12.7.0

#### Inherited from

tty.WriteStream.readableEncoding

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

**`since`** v12.9.0

#### Inherited from

tty.WriteStream.readableEnded

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

**`since`** v9.4.0

#### Inherited from

tty.WriteStream.readableFlowing

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

**`since`** v9.3.0

#### Inherited from

tty.WriteStream.readableHighWaterMark

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**`since`** v9.4.0

#### Inherited from

tty.WriteStream.readableLength

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

**`since`** v12.3.0

#### Inherited from

tty.WriteStream.readableObjectMode

___

### readyState

• `Readonly` **readyState**: `SocketReadyState`

This property represents the state of the connection as a string.

**`see`** {https://nodejs.org/api/net.html#socketreadystate}

**`since`** v0.5.0

#### Inherited from

tty.WriteStream.readyState

___

### remoteAddress

• `Optional` `Readonly` **remoteAddress**: `string`

The string representation of the remote IP address. For example,`'74.125.127.100'` or `'2001:4860:a005::68'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**`since`** v0.5.10

#### Inherited from

tty.WriteStream.remoteAddress

___

### remoteFamily

• `Optional` `Readonly` **remoteFamily**: `string`

The string representation of the remote IP family. `'IPv4'` or `'IPv6'`.

**`since`** v0.11.14

#### Inherited from

tty.WriteStream.remoteFamily

___

### remotePort

• `Optional` `Readonly` **remotePort**: `number`

The numeric representation of the remote port. For example, `80` or `21`.

**`since`** v0.5.10

#### Inherited from

tty.WriteStream.remotePort

___

### rows

• **rows**: `number`

A `number` specifying the number of rows the TTY currently has. This property
is updated whenever the `'resize'` event is emitted.

**`since`** v0.7.7

#### Inherited from

tty.WriteStream.rows

___

### timeout

• `Optional` `Readonly` **timeout**: `number`

The socket timeout in milliseconds as set by socket.setTimeout(). It is undefined if a timeout has not been set.

**`since`** v10.7.0

#### Inherited from

tty.WriteStream.timeout

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

tty.WriteStream.\_\_@asyncIterator@13602

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

Returns the bound `address`, the address `family` name and `port` of the
socket as reported by the operating system:`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`

**`since`** v0.1.90

#### Returns

{} \| `AddressInfo`

#### Inherited from

tty.WriteStream.address

___

### clearLine

▸ **clearLine**(`dir`, `callback?`): `boolean`

`writeStream.clearLine()` clears the current line of this `WriteStream` in a
direction identified by `dir`.

**`since`** v0.7.7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `Direction` | - |
| `callback?` | () => `void` | Invoked once the operation completes. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Inherited from

tty.WriteStream.clearLine

___

### clearScreenDown

▸ **clearScreenDown**(`callback?`): `boolean`

`writeStream.clearScreenDown()` clears this `WriteStream` from the current
cursor down.

**`since`** v0.7.7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | () => `void` | Invoked once the operation completes. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Inherited from

tty.WriteStream.clearScreenDown

___

### connect

▸ **connect**(`options`, `connectionListener?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

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

`writeStream.cursorTo()` moves this `WriteStream`'s cursor to the specified
position.

**`since`** v0.7.7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | - |
| `y?` | `number` | - |
| `callback?` | () => `void` | Invoked once the operation completes. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

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

▸ **destroy**(`error?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

**`since`** v8.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Error which will be passed as payload in `'error'` event |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

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

▸ **end**(`callback?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

**`since`** v0.1.90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | () => `void` | Optional callback for when the socket is finished. |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

The socket itself.

#### Inherited from

tty.WriteStream.end

▸ **end**(`buffer`, `callback?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `callback?` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.end

▸ **end**(`str`, `encoding?`, `callback?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `Uint8Array` |
| `encoding?` | `BufferEncoding` |
| `callback?` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.end

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

tty.WriteStream.eventNames

___

### getColorDepth

▸ **getColorDepth**(`env?`): `number`

Returns:

* `1` for 2,
* `4` for 16,
* `8` for 256,
* `24` for 16,777,216 colors supported.

Use this to determine what colors the terminal supports. Due to the nature of
colors in terminals it is possible to either have false positives or false
negatives. It depends on process information and the environment variables that
may lie about what terminal is used.
It is possible to pass in an `env` object to simulate the usage of a specific
terminal. This can be useful to check how specific environment settings behave.

To enforce a specific color support, use one of the below environment settings.

* 2 colors: `FORCE_COLOR = 0` (Disables colors)
* 16 colors: `FORCE_COLOR = 1`
* 256 colors: `FORCE_COLOR = 2`
* 16,777,216 colors: `FORCE_COLOR = 3`

Disabling color support is also possible by using the `NO_COLOR` and`NODE_DISABLE_COLORS` environment variables.

**`since`** v9.9.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `env?` | `object` |

#### Returns

`number`

#### Inherited from

tty.WriteStream.getColorDepth

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to {@link defaultMaxListeners}.

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

tty.WriteStream.getMaxListeners

___

### getWindowSize

▸ **getWindowSize**(): [`number`, `number`]

`writeStream.getWindowSize()` returns the size of the TTY
corresponding to this `WriteStream`. The array is of the type`[numColumns, numRows]` where `numColumns` and `numRows` represent the number
of columns and rows in the corresponding TTY.

**`since`** v0.7.7

#### Returns

[`number`, `number`]

#### Inherited from

tty.WriteStream.getWindowSize

___

### hasColors

▸ **hasColors**(`count?`): `boolean`

Returns `true` if the `writeStream` supports at least as many colors as provided
in `count`. Minimum support is 2 (black and white).

This has the same false positives and negatives as described in `writeStream.getColorDepth()`.

```js
process.stdout.hasColors();
// Returns true or false depending on if `stdout` supports at least 16 colors.
process.stdout.hasColors(256);
// Returns true or false depending on if `stdout` supports at least 256 colors.
process.stdout.hasColors({ TMUX: '1' });
// Returns true.
process.stdout.hasColors(2 ** 24, { TMUX: '1' });
// Returns false (the environment setting pretends to support 2 ** 8 colors).
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `count?` | `number` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.hasColors

▸ **hasColors**(`env?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `env?` | `object` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.hasColors

▸ **hasColors**(`count`, `env?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `env?` | `object` |

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.hasColors

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

**`since`** v0.11.14

#### Returns

`boolean`

#### Inherited from

tty.WriteStream.isPaused

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

tty.WriteStream.listenerCount

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

tty.WriteStream.listeners

___

### moveCursor

▸ **moveCursor**(`dx`, `dy`, `callback?`): `boolean`

`writeStream.moveCursor()` moves this `WriteStream`'s cursor _relative_ to its
current position.

**`since`** v0.7.7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dx` | `number` | - |
| `dy` | `number` | - |
| `callback?` | () => `void` | Invoked once the operation completes. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Inherited from

tty.WriteStream.moveCursor

___

### off

▸ **off**(`eventName`, `listener`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
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

Pauses the reading of data. That is, `'data'` events will not be emitted.
Useful to throttle back an upload.

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

The socket itself.

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

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

tty.WriteStream.rawListeners

___

### read

▸ **read**(`size?`): `any`

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](dev_env.NodeJS.WriteStream.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Inherited from

tty.WriteStream.read

___

### ref

▸ **ref**(): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Opposite of `unref()`, calling `ref()` on a previously `unref`ed socket will_not_ let the program exit if it's the only socket left (the default behavior).
If the socket is `ref`ed calling `ref` again will have no effect.

**`since`** v0.9.1

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

The socket itself.

#### Inherited from

tty.WriteStream.ref

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

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

Resumes reading after a call to `socket.pause()`.

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

The socket itself.

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

Set the encoding for the socket as a `Readable Stream`. See `readable.setEncoding()` for more information.

**`since`** v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | `BufferEncoding` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

The socket itself.

#### Inherited from

tty.WriteStream.setEncoding

___

### setKeepAlive

▸ **setKeepAlive**(`enable?`, `initialDelay?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Enable/disable keep-alive functionality, and optionally set the initial
delay before the first keepalive probe is sent on an idle socket.

Set `initialDelay` (in milliseconds) to set the delay between the last
data packet received and the first keepalive probe. Setting `0` for`initialDelay` will leave the value unchanged from the default
(or previous) setting.

Enabling the keep-alive functionality will set the following socket options:

* `SO_KEEPALIVE=1`
* `TCP_KEEPIDLE=initialDelay`
* `TCP_KEEPCNT=10`
* `TCP_KEEPINTVL=1`

**`since`** v0.1.92

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

The socket itself.

#### Inherited from

tty.WriteStream.setKeepAlive

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

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

Enable/disable the use of Nagle's algorithm.

When a TCP connection is created, it will have Nagle's algorithm enabled.

Nagle's algorithm delays data before it is sent via the network. It attempts
to optimize throughput at the expense of latency.

Passing `true` for `noDelay` or not passing an argument will disable Nagle's
algorithm for the socket. Passing `false` for `noDelay` will enable Nagle's
algorithm.

**`since`** v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

The socket itself.

#### Inherited from

tty.WriteStream.setNoDelay

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Sets the socket to timeout after `timeout` milliseconds of inactivity on
the socket. By default `net.Socket` do not have a timeout.

When an idle timeout is triggered the socket will receive a `'timeout'` event but the connection will not be severed. The user must manually call `socket.end()` or `socket.destroy()` to
end the connection.

```js
socket.setTimeout(3000);
socket.on('timeout', () => {
  console.log('socket timeout');
  socket.end();
});
```

If `timeout` is 0, then the existing idle timeout is disabled.

The optional `callback` parameter will be added as a one-time listener for the `'timeout'` event.

**`since`** v0.1.90

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `callback?` | () => `void` |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

The socket itself.

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

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](dev_env.NodeJS.WriteStream.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | [`WritableStream`](dev_env.NodeJS.WritableStream.md) | Optional specific stream to unpipe |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.unpipe

___

### unref

▸ **unref**(): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Calling `unref()` on a socket will allow the program to exit if this is the only
active socket in the event system. If the socket is already `unref`ed calling`unref()` again will have no effect.

**`since`** v0.9.1

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

The socket itself.

#### Inherited from

tty.WriteStream.unref

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](dev_env.NodeJS.WriteStream.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](dev_env.NodeJS.WriteStream.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](dev_env.NodeJS.WriteStream.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

**`since`** v0.9.11

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | `BufferEncoding` | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

#### Inherited from

tty.WriteStream.unshift

___

### wrap

▸ **wrap**(`stream`): [`WriteStream`](dev_env.NodeJS.WriteStream.md)

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](dev_env.NodeJS.WriteStream.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](dev_env.NodeJS.ReadableStream.md) | An "old style" readable stream |

#### Returns

[`WriteStream`](dev_env.NodeJS.WriteStream.md)

#### Inherited from

tty.WriteStream.wrap

___

### write

▸ **write**(`buffer`, `cb?`): `boolean`

Sends data on the socket. The second parameter specifies the encoding in the
case of a string. It defaults to UTF8 encoding.

Returns `true` if the entire data was flushed successfully to the kernel
buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.

The optional `callback` parameter will be executed when the data is finally
written out, which may not be immediately.

See `Writable` stream `write()` method for more
information.

**`since`** v0.1.90

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
