[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / WritableStream

# Interface: WritableStream

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).WritableStream

## Hierarchy

- [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

  ↳ **`WritableStream`**

  ↳↳ [`ReadWriteStream`](typings_env.NodeJS.ReadWriteStream.md)

## Table of contents

### Properties

- [writable](typings_env.NodeJS.WritableStream.md#writable)

### Methods

- [addListener](typings_env.NodeJS.WritableStream.md#addlistener)
- [emit](typings_env.NodeJS.WritableStream.md#emit)
- [end](typings_env.NodeJS.WritableStream.md#end)
- [eventNames](typings_env.NodeJS.WritableStream.md#eventnames)
- [getMaxListeners](typings_env.NodeJS.WritableStream.md#getmaxlisteners)
- [listenerCount](typings_env.NodeJS.WritableStream.md#listenercount)
- [listeners](typings_env.NodeJS.WritableStream.md#listeners)
- [off](typings_env.NodeJS.WritableStream.md#off)
- [on](typings_env.NodeJS.WritableStream.md#on)
- [once](typings_env.NodeJS.WritableStream.md#once)
- [prependListener](typings_env.NodeJS.WritableStream.md#prependlistener)
- [prependOnceListener](typings_env.NodeJS.WritableStream.md#prependoncelistener)
- [rawListeners](typings_env.NodeJS.WritableStream.md#rawlisteners)
- [removeAllListeners](typings_env.NodeJS.WritableStream.md#removealllisteners)
- [removeListener](typings_env.NodeJS.WritableStream.md#removelistener)
- [setMaxListeners](typings_env.NodeJS.WritableStream.md#setmaxlisteners)
- [write](typings_env.NodeJS.WritableStream.md#write)

## Properties

### writable

• **writable**: `boolean`

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](typings_env.NodeJS.WritableStream.md)

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

### end

▸ **end**(`cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

`void`

▸ **end**(`data`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

`void`

▸ **end**(`str`, `encoding?`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

`void`

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

▸ **off**(`event`, `listener`): [`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[off](typings_env.NodeJS.EventEmitter.md#off)

___

### on

▸ **on**(`event`, `listener`): [`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[on](typings_env.NodeJS.EventEmitter.md#on)

___

### once

▸ **once**(`event`, `listener`): [`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[once](typings_env.NodeJS.EventEmitter.md#once)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[prependListener](typings_env.NodeJS.EventEmitter.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](typings_env.NodeJS.WritableStream.md)

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

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[removeAllListeners](typings_env.NodeJS.EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[removeListener](typings_env.NodeJS.EventEmitter.md#removelistener)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`WritableStream`](typings_env.NodeJS.WritableStream.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[setMaxListeners](typings_env.NodeJS.EventEmitter.md#setmaxlisteners)

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

▸ **write**(`str`, `encoding?`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | `BufferEncoding` |
| `cb?` | (`err?`: ``null`` \| `Error`) => `void` |

#### Returns

`boolean`
