[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / Immediate

# Interface: Immediate

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).Immediate

## Hierarchy

- [`RefCounted`](dev_env.NodeJS.RefCounted.md)

  ↳ **`Immediate`**

## Table of contents

### Properties

- [\_onImmediate](dev_env.NodeJS.Immediate.md#_onimmediate)

### Methods

- [hasRef](dev_env.NodeJS.Immediate.md#hasref)
- [ref](dev_env.NodeJS.Immediate.md#ref)
- [unref](dev_env.NodeJS.Immediate.md#unref)

## Properties

### \_onImmediate

• **\_onImmediate**: `Function`

## Methods

### hasRef

▸ **hasRef**(): `boolean`

If true, the `Immediate` object will keep the Node.js event loop active.

**`since`** v11.0.0

#### Returns

`boolean`

___

### ref

▸ **ref**(): [`Immediate`](dev_env.NodeJS.Immediate.md)

#### Returns

[`Immediate`](dev_env.NodeJS.Immediate.md)

#### Inherited from

[RefCounted](dev_env.NodeJS.RefCounted.md).[ref](dev_env.NodeJS.RefCounted.md#ref)

___

### unref

▸ **unref**(): [`Immediate`](dev_env.NodeJS.Immediate.md)

#### Returns

[`Immediate`](dev_env.NodeJS.Immediate.md)

#### Inherited from

[RefCounted](dev_env.NodeJS.RefCounted.md).[unref](dev_env.NodeJS.RefCounted.md#unref)
