[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / Domain

# Interface: Domain

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).Domain

## Hierarchy

- [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

  ↳ **`Domain`**

## Table of contents

### Methods

- [add](typings_env.NodeJS.Domain.md#add)
- [addListener](typings_env.NodeJS.Domain.md#addlistener)
- [bind](typings_env.NodeJS.Domain.md#bind)
- [emit](typings_env.NodeJS.Domain.md#emit)
- [eventNames](typings_env.NodeJS.Domain.md#eventnames)
- [getMaxListeners](typings_env.NodeJS.Domain.md#getmaxlisteners)
- [intercept](typings_env.NodeJS.Domain.md#intercept)
- [listenerCount](typings_env.NodeJS.Domain.md#listenercount)
- [listeners](typings_env.NodeJS.Domain.md#listeners)
- [off](typings_env.NodeJS.Domain.md#off)
- [on](typings_env.NodeJS.Domain.md#on)
- [once](typings_env.NodeJS.Domain.md#once)
- [prependListener](typings_env.NodeJS.Domain.md#prependlistener)
- [prependOnceListener](typings_env.NodeJS.Domain.md#prependoncelistener)
- [rawListeners](typings_env.NodeJS.Domain.md#rawlisteners)
- [remove](typings_env.NodeJS.Domain.md#remove)
- [removeAllListeners](typings_env.NodeJS.Domain.md#removealllisteners)
- [removeListener](typings_env.NodeJS.Domain.md#removelistener)
- [run](typings_env.NodeJS.Domain.md#run)
- [setMaxListeners](typings_env.NodeJS.Domain.md#setmaxlisteners)

## Methods

### add

▸ **add**(`emitter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](typings_env.NodeJS.EventEmitter.md) \| [`Timer`](typings_env.NodeJS.Timer.md) |

#### Returns

`void`

___

### addListener

▸ **addListener**(`event`, `listener`): [`Domain`](typings_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](typings_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[addListener](typings_env.NodeJS.EventEmitter.md#addlistener)

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

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[emit](typings_env.NodeJS.EventEmitter.md#emit)

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

▸ **off**(`event`, `listener`): [`Domain`](typings_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](typings_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[off](typings_env.NodeJS.EventEmitter.md#off)

___

### on

▸ **on**(`event`, `listener`): [`Domain`](typings_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](typings_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[on](typings_env.NodeJS.EventEmitter.md#on)

___

### once

▸ **once**(`event`, `listener`): [`Domain`](typings_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](typings_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[once](typings_env.NodeJS.EventEmitter.md#once)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Domain`](typings_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](typings_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[prependListener](typings_env.NodeJS.EventEmitter.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Domain`](typings_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](typings_env.NodeJS.Domain.md)

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

### remove

▸ **remove**(`emitter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](typings_env.NodeJS.EventEmitter.md) \| [`Timer`](typings_env.NodeJS.Timer.md) |

#### Returns

`void`

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Domain`](typings_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Domain`](typings_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[removeAllListeners](typings_env.NodeJS.EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Domain`](typings_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](typings_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[removeListener](typings_env.NodeJS.EventEmitter.md#removelistener)

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

▸ **setMaxListeners**(`n`): [`Domain`](typings_env.NodeJS.Domain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Domain`](typings_env.NodeJS.Domain.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[setMaxListeners](typings_env.NodeJS.EventEmitter.md#setmaxlisteners)
