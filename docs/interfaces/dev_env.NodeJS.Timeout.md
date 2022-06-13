[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / Timeout

# Interface: Timeout

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).Timeout

## Hierarchy

- [`Timer`](dev_env.NodeJS.Timer.md)

  ↳ **`Timeout`**

## Table of contents

### Methods

- [[toPrimitive]](dev_env.NodeJS.Timeout.md#[toprimitive])
- [hasRef](dev_env.NodeJS.Timeout.md#hasref)
- [ref](dev_env.NodeJS.Timeout.md#ref)
- [refresh](dev_env.NodeJS.Timeout.md#refresh)
- [unref](dev_env.NodeJS.Timeout.md#unref)

## Methods

### [toPrimitive]

▸ **[toPrimitive]**(): `number`

#### Returns

`number`

#### Overrides

[Timer](dev_env.NodeJS.Timer.md).[[toPrimitive]](dev_env.NodeJS.Timer.md#[toprimitive])

___

### hasRef

▸ **hasRef**(): `boolean`

If true, the `Timeout` object will keep the Node.js event loop active.

**`since`** v11.0.0

#### Returns

`boolean`

#### Overrides

[Timer](dev_env.NodeJS.Timer.md).[hasRef](dev_env.NodeJS.Timer.md#hasref)

___

### ref

▸ **ref**(): [`Timeout`](dev_env.NodeJS.Timeout.md)

#### Returns

[`Timeout`](dev_env.NodeJS.Timeout.md)

#### Inherited from

[Timer](dev_env.NodeJS.Timer.md).[ref](dev_env.NodeJS.Timer.md#ref)

___

### refresh

▸ **refresh**(): [`Timeout`](dev_env.NodeJS.Timeout.md)

Sets the timer's start time to the current time, and reschedules the timer to
call its callback at the previously specified duration adjusted to the current
time. This is useful for refreshing a timer without allocating a new
JavaScript object.

Using this on a timer that has already called its callback will reactivate the
timer.

**`since`** v10.2.0

#### Returns

[`Timeout`](dev_env.NodeJS.Timeout.md)

a reference to `timeout`

#### Overrides

[Timer](dev_env.NodeJS.Timer.md).[refresh](dev_env.NodeJS.Timer.md#refresh)

___

### unref

▸ **unref**(): [`Timeout`](dev_env.NodeJS.Timeout.md)

#### Returns

[`Timeout`](dev_env.NodeJS.Timeout.md)

#### Inherited from

[Timer](dev_env.NodeJS.Timer.md).[unref](dev_env.NodeJS.Timer.md#unref)
