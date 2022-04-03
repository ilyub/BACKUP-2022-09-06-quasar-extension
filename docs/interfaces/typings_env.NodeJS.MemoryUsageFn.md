[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / MemoryUsageFn

# Interface: MemoryUsageFn

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).MemoryUsageFn

## Callable

### MemoryUsageFn

▸ **MemoryUsageFn**(): [`MemoryUsage`](typings_env.NodeJS.MemoryUsage.md)

The `process.memoryUsage()` method iterate over each page to gather informations about memory
usage which can be slow depending on the program memory allocations.

#### Returns

[`MemoryUsage`](typings_env.NodeJS.MemoryUsage.md)

## Table of contents

### Methods

- [rss](typings_env.NodeJS.MemoryUsageFn.md#rss)

## Methods

### rss

▸ **rss**(): `number`

method returns an integer representing the Resident Set Size (RSS) in bytes.

#### Returns

`number`
