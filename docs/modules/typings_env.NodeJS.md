[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](typings_env.md) / NodeJS

# Namespace: NodeJS

[typings/env](typings_env.md).NodeJS

## Table of contents

### Interfaces

- [CallSite](../interfaces/typings_env.NodeJS.CallSite.md)
- [ConsoleConstructor](../interfaces/typings_env.NodeJS.ConsoleConstructor.md)
- [ConsoleConstructorOptions](../interfaces/typings_env.NodeJS.ConsoleConstructorOptions.md)
- [CpuUsage](../interfaces/typings_env.NodeJS.CpuUsage.md)
- [Dict](../interfaces/typings_env.NodeJS.Dict.md)
- [Domain](../interfaces/typings_env.NodeJS.Domain.md)
- [EmitWarningOptions](../interfaces/typings_env.NodeJS.EmitWarningOptions.md)
- [ErrnoException](../interfaces/typings_env.NodeJS.ErrnoException.md)
- [EventEmitter](../interfaces/typings_env.NodeJS.EventEmitter.md)
- [Global](../interfaces/typings_env.NodeJS.Global.md)
- [HRTime](../interfaces/typings_env.NodeJS.HRTime.md)
- [Immediate](../interfaces/typings_env.NodeJS.Immediate.md)
- [InspectOptions](../interfaces/typings_env.NodeJS.InspectOptions.md)
- [MemoryUsage](../interfaces/typings_env.NodeJS.MemoryUsage.md)
- [MemoryUsageFn](../interfaces/typings_env.NodeJS.MemoryUsageFn.md)
- [Module](../interfaces/typings_env.NodeJS.Module.md)
- [Process](../interfaces/typings_env.NodeJS.Process.md)
- [ProcessEnv](../interfaces/typings_env.NodeJS.ProcessEnv.md)
- [ProcessRelease](../interfaces/typings_env.NodeJS.ProcessRelease.md)
- [ProcessReport](../interfaces/typings_env.NodeJS.ProcessReport.md)
- [ProcessVersions](../interfaces/typings_env.NodeJS.ProcessVersions.md)
- [ReadOnlyDict](../interfaces/typings_env.NodeJS.ReadOnlyDict.md)
- [ReadStream](../interfaces/typings_env.NodeJS.ReadStream.md)
- [ReadWriteStream](../interfaces/typings_env.NodeJS.ReadWriteStream.md)
- [ReadableStream](../interfaces/typings_env.NodeJS.ReadableStream.md)
- [RefCounted](../interfaces/typings_env.NodeJS.RefCounted.md)
- [Require](../interfaces/typings_env.NodeJS.Require.md)
- [RequireExtensions](../interfaces/typings_env.NodeJS.RequireExtensions.md)
- [RequireResolve](../interfaces/typings_env.NodeJS.RequireResolve.md)
- [ResourceUsage](../interfaces/typings_env.NodeJS.ResourceUsage.md)
- [Socket](../interfaces/typings_env.NodeJS.Socket.md)
- [Timeout](../interfaces/typings_env.NodeJS.Timeout.md)
- [Timer](../interfaces/typings_env.NodeJS.Timer.md)
- [WritableStream](../interfaces/typings_env.NodeJS.WritableStream.md)
- [WriteStream](../interfaces/typings_env.NodeJS.WriteStream.md)

### Type aliases

- [ArrayBufferView](typings_env.NodeJS.md#arraybufferview)
- [BeforeExitListener](typings_env.NodeJS.md#beforeexitlistener)
- [DisconnectListener](typings_env.NodeJS.md#disconnectlistener)
- [ExitListener](typings_env.NodeJS.md#exitlistener)
- [MessageListener](typings_env.NodeJS.md#messagelistener)
- [MultipleResolveListener](typings_env.NodeJS.md#multipleresolvelistener)
- [MultipleResolveType](typings_env.NodeJS.md#multipleresolvetype)
- [NewListenerListener](typings_env.NodeJS.md#newlistenerlistener)
- [Platform](typings_env.NodeJS.md#platform)
- [RejectionHandledListener](typings_env.NodeJS.md#rejectionhandledlistener)
- [RemoveListenerListener](typings_env.NodeJS.md#removelistenerlistener)
- [Signals](typings_env.NodeJS.md#signals)
- [SignalsListener](typings_env.NodeJS.md#signalslistener)
- [TypedArray](typings_env.NodeJS.md#typedarray)
- [UncaughtExceptionListener](typings_env.NodeJS.md#uncaughtexceptionlistener)
- [UncaughtExceptionOrigin](typings_env.NodeJS.md#uncaughtexceptionorigin)
- [UnhandledRejectionListener](typings_env.NodeJS.md#unhandledrejectionlistener)
- [WarningListener](typings_env.NodeJS.md#warninglistener)

## Type aliases

### ArrayBufferView

Ƭ **ArrayBufferView**: [`TypedArray`](typings_env.NodeJS.md#typedarray) \| `DataView`

___

### BeforeExitListener

Ƭ **BeforeExitListener**: (`code`: `number`) => `void`

#### Type declaration

▸ (`code`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

##### Returns

`void`

___

### DisconnectListener

Ƭ **DisconnectListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### ExitListener

Ƭ **ExitListener**: (`code`: `number`) => `void`

#### Type declaration

▸ (`code`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

##### Returns

`void`

___

### MessageListener

Ƭ **MessageListener**: (`message`: `any`, `sendHandle`: `any`) => `void`

#### Type declaration

▸ (`message`, `sendHandle`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `sendHandle` | `any` |

##### Returns

`void`

___

### MultipleResolveListener

Ƭ **MultipleResolveListener**: (`type`: [`MultipleResolveType`](typings_env.NodeJS.md#multipleresolvetype), `promise`: `Promise`<`any`\>, `value`: `any`) => `void`

#### Type declaration

▸ (`type`, `promise`, `value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`MultipleResolveType`](typings_env.NodeJS.md#multipleresolvetype) |
| `promise` | `Promise`<`any`\> |
| `value` | `any` |

##### Returns

`void`

___

### MultipleResolveType

Ƭ **MultipleResolveType**: ``"resolve"`` \| ``"reject"``

___

### NewListenerListener

Ƭ **NewListenerListener**: (`type`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => `void`

#### Type declaration

▸ (`type`, `listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

`void`

___

### Platform

Ƭ **Platform**: ``"aix"`` \| ``"android"`` \| ``"darwin"`` \| ``"freebsd"`` \| ``"linux"`` \| ``"openbsd"`` \| ``"sunos"`` \| ``"win32"`` \| ``"cygwin"`` \| ``"netbsd"``

___

### RejectionHandledListener

Ƭ **RejectionHandledListener**: (`promise`: `Promise`<`any`\>) => `void`

#### Type declaration

▸ (`promise`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`any`\> |

##### Returns

`void`

___

### RemoveListenerListener

Ƭ **RemoveListenerListener**: (`type`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => `void`

#### Type declaration

▸ (`type`, `listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

`void`

___

### Signals

Ƭ **Signals**: ``"SIGABRT"`` \| ``"SIGALRM"`` \| ``"SIGBUS"`` \| ``"SIGCHLD"`` \| ``"SIGCONT"`` \| ``"SIGFPE"`` \| ``"SIGHUP"`` \| ``"SIGILL"`` \| ``"SIGINT"`` \| ``"SIGIO"`` \| ``"SIGIOT"`` \| ``"SIGKILL"`` \| ``"SIGPIPE"`` \| ``"SIGPOLL"`` \| ``"SIGPROF"`` \| ``"SIGPWR"`` \| ``"SIGQUIT"`` \| ``"SIGSEGV"`` \| ``"SIGSTKFLT"`` \| ``"SIGSTOP"`` \| ``"SIGSYS"`` \| ``"SIGTERM"`` \| ``"SIGTRAP"`` \| ``"SIGTSTP"`` \| ``"SIGTTIN"`` \| ``"SIGTTOU"`` \| ``"SIGUNUSED"`` \| ``"SIGURG"`` \| ``"SIGUSR1"`` \| ``"SIGUSR2"`` \| ``"SIGVTALRM"`` \| ``"SIGWINCH"`` \| ``"SIGXCPU"`` \| ``"SIGXFSZ"`` \| ``"SIGBREAK"`` \| ``"SIGLOST"`` \| ``"SIGINFO"``

___

### SignalsListener

Ƭ **SignalsListener**: (`signal`: [`Signals`](typings_env.NodeJS.md#signals)) => `void`

#### Type declaration

▸ (`signal`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | [`Signals`](typings_env.NodeJS.md#signals) |

##### Returns

`void`

___

### TypedArray

Ƭ **TypedArray**: `Uint8Array` \| `Uint8ClampedArray` \| `Uint16Array` \| `Uint32Array` \| `Int8Array` \| `Int16Array` \| `Int32Array` \| `BigUint64Array` \| `BigInt64Array` \| `Float32Array` \| `Float64Array`

___

### UncaughtExceptionListener

Ƭ **UncaughtExceptionListener**: (`error`: `Error`, `origin`: [`UncaughtExceptionOrigin`](typings_env.NodeJS.md#uncaughtexceptionorigin)) => `void`

#### Type declaration

▸ (`error`, `origin`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `origin` | [`UncaughtExceptionOrigin`](typings_env.NodeJS.md#uncaughtexceptionorigin) |

##### Returns

`void`

___

### UncaughtExceptionOrigin

Ƭ **UncaughtExceptionOrigin**: ``"uncaughtException"`` \| ``"unhandledRejection"``

___

### UnhandledRejectionListener

Ƭ **UnhandledRejectionListener**: (`reason`: {} \| ``null`` \| `undefined`, `promise`: `Promise`<`any`\>) => `void`

#### Type declaration

▸ (`reason`, `promise`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | {} \| ``null`` \| `undefined` |
| `promise` | `Promise`<`any`\> |

##### Returns

`void`

___

### WarningListener

Ƭ **WarningListener**: (`warning`: `Error`) => `void`

#### Type declaration

▸ (`warning`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `warning` | `Error` |

##### Returns

`void`
