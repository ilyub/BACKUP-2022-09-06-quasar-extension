[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / Domain

# Interface: Domain

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).Domain

## Hierarchy

- [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

  ↳ **`Domain`**

## Table of contents

### Methods

- [add](dev_env.NodeJS.Domain.md#add)
- [addListener](dev_env.NodeJS.Domain.md#addlistener)
- [bind](dev_env.NodeJS.Domain.md#bind)
- [emit](dev_env.NodeJS.Domain.md#emit)
- [eventNames](dev_env.NodeJS.Domain.md#eventnames)
- [getMaxListeners](dev_env.NodeJS.Domain.md#getmaxlisteners)
- [intercept](dev_env.NodeJS.Domain.md#intercept)
- [listenerCount](dev_env.NodeJS.Domain.md#listenercount)
- [listeners](dev_env.NodeJS.Domain.md#listeners)
- [off](dev_env.NodeJS.Domain.md#off)
- [on](dev_env.NodeJS.Domain.md#on)
- [once](dev_env.NodeJS.Domain.md#once)
- [prependListener](dev_env.NodeJS.Domain.md#prependlistener)
- [prependOnceListener](dev_env.NodeJS.Domain.md#prependoncelistener)
- [rawListeners](dev_env.NodeJS.Domain.md#rawlisteners)
- [remove](dev_env.NodeJS.Domain.md#remove)
- [removeAllListeners](dev_env.NodeJS.Domain.md#removealllisteners)
- [removeListener](dev_env.NodeJS.Domain.md#removelistener)
- [run](dev_env.NodeJS.Domain.md#run)
- [setMaxListeners](dev_env.NodeJS.Domain.md#setmaxlisteners)

## Methods

### add

▸ **add**(`emitter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](dev_env.NodeJS.EventEmitter.md) \| [`Timer`](dev_env.NodeJS.Timer.md) |

#### Returns

`void`

___

### addListener

▸ **addListener**(`event`, `listener`): [`Domain`](dev_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](dev_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[addListener](dev_env.NodeJS.EventEmitter.md#addlistener)

___

### bind

▸ **bind**<`T`\>(`cb`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `T` |

#### Returns

`T`

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

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[emit](dev_env.NodeJS.EventEmitter.md#emit)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[eventNames](dev_env.NodeJS.EventEmitter.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[getMaxListeners](dev_env.NodeJS.EventEmitter.md#getmaxlisteners)

___

### intercept

▸ **intercept**<`T`\>(`cb`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `T` |

#### Returns

`T`

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

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[listenerCount](dev_env.NodeJS.EventEmitter.md#listenercount)

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

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[listeners](dev_env.NodeJS.EventEmitter.md#listeners)

___

### off

▸ **off**(`event`, `listener`): [`Domain`](dev_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](dev_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[off](dev_env.NodeJS.EventEmitter.md#off)

___

### on

▸ **on**(`event`, `listener`): [`Domain`](dev_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](dev_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[on](dev_env.NodeJS.EventEmitter.md#on)

___

### once

▸ **once**(`event`, `listener`): [`Domain`](dev_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](dev_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[once](dev_env.NodeJS.EventEmitter.md#once)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Domain`](dev_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](dev_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[prependListener](dev_env.NodeJS.EventEmitter.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Domain`](dev_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](dev_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[prependOnceListener](dev_env.NodeJS.EventEmitter.md#prependoncelistener)

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

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[rawListeners](dev_env.NodeJS.EventEmitter.md#rawlisteners)

___

### remove

▸ **remove**(`emitter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](dev_env.NodeJS.EventEmitter.md) \| [`Timer`](dev_env.NodeJS.Timer.md) |

#### Returns

`void`

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Domain`](dev_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Domain`](dev_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[removeAllListeners](dev_env.NodeJS.EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Domain`](dev_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](dev_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[removeListener](dev_env.NodeJS.EventEmitter.md#removelistener)

___

### run

▸ **run**<`T`\>(`fn`, ...`args`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `T` |
| `...args` | `any`[] |

#### Returns

`T`

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Domain`](dev_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Domain`](dev_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[setMaxListeners](dev_env.NodeJS.EventEmitter.md#setmaxlisteners)
