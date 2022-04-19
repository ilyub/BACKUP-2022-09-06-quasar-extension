[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](dev_env.md) / NodeJS

# Namespace: NodeJS

[dev/env](dev_env.md).NodeJS

## Table of contents

### Interfaces

- [CallSite](../interfaces/dev_env.NodeJS.CallSite.md)
- [ConsoleConstructor](../interfaces/dev_env.NodeJS.ConsoleConstructor.md)
- [ConsoleConstructorOptions](../interfaces/dev_env.NodeJS.ConsoleConstructorOptions.md)
- [CpuUsage](../interfaces/dev_env.NodeJS.CpuUsage.md)
- [Dict](../interfaces/dev_env.NodeJS.Dict.md)
- [Domain](../interfaces/dev_env.NodeJS.Domain.md)
- [EmitWarningOptions](../interfaces/dev_env.NodeJS.EmitWarningOptions.md)
- [ErrnoException](../interfaces/dev_env.NodeJS.ErrnoException.md)
- [EventEmitter](../interfaces/dev_env.NodeJS.EventEmitter.md)
- [Global](../interfaces/dev_env.NodeJS.Global.md)
- [HRTime](../interfaces/dev_env.NodeJS.HRTime.md)
- [Immediate](../interfaces/dev_env.NodeJS.Immediate.md)
- [InspectOptions](../interfaces/dev_env.NodeJS.InspectOptions.md)
- [MemoryUsage](../interfaces/dev_env.NodeJS.MemoryUsage.md)
- [MemoryUsageFn](../interfaces/dev_env.NodeJS.MemoryUsageFn.md)
- [Module](../interfaces/dev_env.NodeJS.Module.md)
- [Process](../interfaces/dev_env.NodeJS.Process.md)
- [ProcessEnv](../interfaces/dev_env.NodeJS.ProcessEnv.md)
- [ProcessRelease](../interfaces/dev_env.NodeJS.ProcessRelease.md)
- [ProcessReport](../interfaces/dev_env.NodeJS.ProcessReport.md)
- [ProcessVersions](../interfaces/dev_env.NodeJS.ProcessVersions.md)
- [ReadOnlyDict](../interfaces/dev_env.NodeJS.ReadOnlyDict.md)
- [ReadStream](../interfaces/dev_env.NodeJS.ReadStream.md)
- [ReadWriteStream](../interfaces/dev_env.NodeJS.ReadWriteStream.md)
- [ReadableStream](../interfaces/dev_env.NodeJS.ReadableStream.md)
- [RefCounted](../interfaces/dev_env.NodeJS.RefCounted.md)
- [Require](../interfaces/dev_env.NodeJS.Require.md)
- [RequireExtensions](../interfaces/dev_env.NodeJS.RequireExtensions.md)
- [RequireResolve](../interfaces/dev_env.NodeJS.RequireResolve.md)
- [ResourceUsage](../interfaces/dev_env.NodeJS.ResourceUsage.md)
- [Socket](../interfaces/dev_env.NodeJS.Socket.md)
- [Timeout](../interfaces/dev_env.NodeJS.Timeout.md)
- [Timer](../interfaces/dev_env.NodeJS.Timer.md)
- [WritableStream](../interfaces/dev_env.NodeJS.WritableStream.md)
- [WriteStream](../interfaces/dev_env.NodeJS.WriteStream.md)

### Type aliases

- [ArrayBufferView](dev_env.NodeJS.md#arraybufferview)
- [BeforeExitListener](dev_env.NodeJS.md#beforeexitlistener)
- [DisconnectListener](dev_env.NodeJS.md#disconnectlistener)
- [ExitListener](dev_env.NodeJS.md#exitlistener)
- [MessageListener](dev_env.NodeJS.md#messagelistener)
- [MultipleResolveListener](dev_env.NodeJS.md#multipleresolvelistener)
- [MultipleResolveType](dev_env.NodeJS.md#multipleresolvetype)
- [NewListenerListener](dev_env.NodeJS.md#newlistenerlistener)
- [Platform](dev_env.NodeJS.md#platform)
- [RejectionHandledListener](dev_env.NodeJS.md#rejectionhandledlistener)
- [RemoveListenerListener](dev_env.NodeJS.md#removelistenerlistener)
- [Signals](dev_env.NodeJS.md#signals)
- [SignalsListener](dev_env.NodeJS.md#signalslistener)
- [TypedArray](dev_env.NodeJS.md#typedarray)
- [UncaughtExceptionListener](dev_env.NodeJS.md#uncaughtexceptionlistener)
- [UncaughtExceptionOrigin](dev_env.NodeJS.md#uncaughtexceptionorigin)
- [UnhandledRejectionListener](dev_env.NodeJS.md#unhandledrejectionlistener)
- [WarningListener](dev_env.NodeJS.md#warninglistener)

## Type aliases

### ArrayBufferView

Ƭ **ArrayBufferView**: [`TypedArray`](dev_env.NodeJS.md#typedarray) \| `DataView`

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

Ƭ **MultipleResolveListener**: (`type`: [`MultipleResolveType`](dev_env.NodeJS.md#multipleresolvetype), `promise`: `Promise`<`any`\>, `value`: `any`) => `void`

#### Type declaration

▸ (`type`, `promise`, `value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`MultipleResolveType`](dev_env.NodeJS.md#multipleresolvetype) |
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

Ƭ **SignalsListener**: (`signal`: [`Signals`](dev_env.NodeJS.md#signals)) => `void`

#### Type declaration

▸ (`signal`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | [`Signals`](dev_env.NodeJS.md#signals) |

##### Returns

`void`

___

### TypedArray

Ƭ **TypedArray**: `Uint8Array` \| `Uint8ClampedArray` \| `Uint16Array` \| `Uint32Array` \| `Int8Array` \| `Int16Array` \| `Int32Array` \| `BigUint64Array` \| `BigInt64Array` \| `Float32Array` \| `Float64Array`

___

### UncaughtExceptionListener

Ƭ **UncaughtExceptionListener**: (`error`: `Error`, `origin`: [`UncaughtExceptionOrigin`](dev_env.NodeJS.md#uncaughtexceptionorigin)) => `void`

#### Type declaration

▸ (`error`, `origin`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `origin` | [`UncaughtExceptionOrigin`](dev_env.NodeJS.md#uncaughtexceptionorigin) |

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
