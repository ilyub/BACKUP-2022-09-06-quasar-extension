[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / MemoryUsageFn

# Interface: MemoryUsageFn

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).MemoryUsageFn

## Callable

### MemoryUsageFn

▸ **MemoryUsageFn**(): [`MemoryUsage`](dev_env.NodeJS.MemoryUsage.md)

The `process.memoryUsage()` method iterate over each page to gather informations about memory
usage which can be slow depending on the program memory allocations.

#### Returns

[`MemoryUsage`](dev_env.NodeJS.MemoryUsage.md)

## Table of contents

### Methods

- [rss](dev_env.NodeJS.MemoryUsageFn.md#rss)

## Methods

### rss

▸ **rss**(): `number`

method returns an integer representing the Resident Set Size (RSS) in bytes.

#### Returns

`number`
