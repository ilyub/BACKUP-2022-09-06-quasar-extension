[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / Process

# Interface: Process

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).Process

## Hierarchy

- [`EventEmitter`](typings_env.NodeJS.EventEmitter.md)

  ↳ **`Process`**

## Table of contents

### Properties

- [allowedNodeEnvironmentFlags](typings_env.NodeJS.Process.md#allowednodeenvironmentflags)
- [arch](typings_env.NodeJS.Process.md#arch)
- [argv](typings_env.NodeJS.Process.md#argv)
- [argv0](typings_env.NodeJS.Process.md#argv0)
- [config](typings_env.NodeJS.Process.md#config)
- [connected](typings_env.NodeJS.Process.md#connected)
- [debugPort](typings_env.NodeJS.Process.md#debugport)
- [domain](typings_env.NodeJS.Process.md#domain)
- [env](typings_env.NodeJS.Process.md#env)
- [execArgv](typings_env.NodeJS.Process.md#execargv)
- [execPath](typings_env.NodeJS.Process.md#execpath)
- [exitCode](typings_env.NodeJS.Process.md#exitcode)
- [features](typings_env.NodeJS.Process.md#features)
- [hrtime](typings_env.NodeJS.Process.md#hrtime)
- [mainModule](typings_env.NodeJS.Process.md#mainmodule)
- [memoryUsage](typings_env.NodeJS.Process.md#memoryusage)
- [pid](typings_env.NodeJS.Process.md#pid)
- [platform](typings_env.NodeJS.Process.md#platform)
- [ppid](typings_env.NodeJS.Process.md#ppid)
- [release](typings_env.NodeJS.Process.md#release)
- [report](typings_env.NodeJS.Process.md#report)
- [stderr](typings_env.NodeJS.Process.md#stderr)
- [stdin](typings_env.NodeJS.Process.md#stdin)
- [stdout](typings_env.NodeJS.Process.md#stdout)
- [title](typings_env.NodeJS.Process.md#title)
- [traceDeprecation](typings_env.NodeJS.Process.md#tracedeprecation)
- [version](typings_env.NodeJS.Process.md#version)
- [versions](typings_env.NodeJS.Process.md#versions)

### Methods

- [abort](typings_env.NodeJS.Process.md#abort)
- [addListener](typings_env.NodeJS.Process.md#addlistener)
- [chdir](typings_env.NodeJS.Process.md#chdir)
- [cpuUsage](typings_env.NodeJS.Process.md#cpuusage)
- [cwd](typings_env.NodeJS.Process.md#cwd)
- [disconnect](typings_env.NodeJS.Process.md#disconnect)
- [emit](typings_env.NodeJS.Process.md#emit)
- [emitWarning](typings_env.NodeJS.Process.md#emitwarning)
- [eventNames](typings_env.NodeJS.Process.md#eventnames)
- [exit](typings_env.NodeJS.Process.md#exit)
- [getMaxListeners](typings_env.NodeJS.Process.md#getmaxlisteners)
- [getegid](typings_env.NodeJS.Process.md#getegid)
- [geteuid](typings_env.NodeJS.Process.md#geteuid)
- [getgid](typings_env.NodeJS.Process.md#getgid)
- [getgroups](typings_env.NodeJS.Process.md#getgroups)
- [getuid](typings_env.NodeJS.Process.md#getuid)
- [hasUncaughtExceptionCaptureCallback](typings_env.NodeJS.Process.md#hasuncaughtexceptioncapturecallback)
- [kill](typings_env.NodeJS.Process.md#kill)
- [listenerCount](typings_env.NodeJS.Process.md#listenercount)
- [listeners](typings_env.NodeJS.Process.md#listeners)
- [nextTick](typings_env.NodeJS.Process.md#nexttick)
- [off](typings_env.NodeJS.Process.md#off)
- [on](typings_env.NodeJS.Process.md#on)
- [once](typings_env.NodeJS.Process.md#once)
- [openStdin](typings_env.NodeJS.Process.md#openstdin)
- [prependListener](typings_env.NodeJS.Process.md#prependlistener)
- [prependOnceListener](typings_env.NodeJS.Process.md#prependoncelistener)
- [rawListeners](typings_env.NodeJS.Process.md#rawlisteners)
- [removeAllListeners](typings_env.NodeJS.Process.md#removealllisteners)
- [removeListener](typings_env.NodeJS.Process.md#removelistener)
- [resourceUsage](typings_env.NodeJS.Process.md#resourceusage)
- [send](typings_env.NodeJS.Process.md#send)
- [setMaxListeners](typings_env.NodeJS.Process.md#setmaxlisteners)
- [setUncaughtExceptionCaptureCallback](typings_env.NodeJS.Process.md#setuncaughtexceptioncapturecallback)
- [setegid](typings_env.NodeJS.Process.md#setegid)
- [seteuid](typings_env.NodeJS.Process.md#seteuid)
- [setgid](typings_env.NodeJS.Process.md#setgid)
- [setgroups](typings_env.NodeJS.Process.md#setgroups)
- [setuid](typings_env.NodeJS.Process.md#setuid)
- [umask](typings_env.NodeJS.Process.md#umask)
- [uptime](typings_env.NodeJS.Process.md#uptime)

## Properties

### allowedNodeEnvironmentFlags

• **allowedNodeEnvironmentFlags**: `ReadonlySet`<`string`\>

The `process.allowedNodeEnvironmentFlags` property is a special,
read-only `Set` of flags allowable within the `NODE_OPTIONS`
environment variable.

___

### arch

• **arch**: `string`

___

### argv

• **argv**: `string`[]

___

### argv0

• **argv0**: `string`

___

### config

• **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target_defaults` | { `cflags`: `any`[] ; `default_configuration`: `string` ; `defines`: `string`[] ; `include_dirs`: `string`[] ; `libraries`: `string`[]  } |
| `target_defaults.cflags` | `any`[] |
| `target_defaults.default_configuration` | `string` |
| `target_defaults.defines` | `string`[] |
| `target_defaults.include_dirs` | `string`[] |
| `target_defaults.libraries` | `string`[] |
| `variables` | { `clang`: `number` ; `host_arch`: `string` ; `node_install_npm`: `boolean` ; `node_install_waf`: `boolean` ; `node_prefix`: `string` ; `node_shared_openssl`: `boolean` ; `node_shared_v8`: `boolean` ; `node_shared_zlib`: `boolean` ; `node_use_dtrace`: `boolean` ; `node_use_etw`: `boolean` ; `node_use_openssl`: `boolean` ; `target_arch`: `string` ; `v8_no_strict_aliasing`: `number` ; `v8_use_snapshot`: `boolean` ; `visibility`: `string`  } |
| `variables.clang` | `number` |
| `variables.host_arch` | `string` |
| `variables.node_install_npm` | `boolean` |
| `variables.node_install_waf` | `boolean` |
| `variables.node_prefix` | `string` |
| `variables.node_shared_openssl` | `boolean` |
| `variables.node_shared_v8` | `boolean` |
| `variables.node_shared_zlib` | `boolean` |
| `variables.node_use_dtrace` | `boolean` |
| `variables.node_use_etw` | `boolean` |
| `variables.node_use_openssl` | `boolean` |
| `variables.target_arch` | `string` |
| `variables.v8_no_strict_aliasing` | `number` |
| `variables.v8_use_snapshot` | `boolean` |
| `variables.visibility` | `string` |

___

### connected

• **connected**: `boolean`

___

### debugPort

• **debugPort**: `number`

___

### domain

• **domain**: [`Domain`](typings_env.NodeJS.Domain.md)

___

### env

• **env**: [`ProcessEnv`](typings_env.NodeJS.ProcessEnv.md)

___

### execArgv

• **execArgv**: `string`[]

___

### execPath

• **execPath**: `string`

___

### exitCode

• `Optional` **exitCode**: `number`

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debug` | `boolean` |
| `inspector` | `boolean` |
| `ipv6` | `boolean` |
| `tls` | `boolean` |
| `tls_alpn` | `boolean` |
| `tls_ocsp` | `boolean` |
| `tls_sni` | `boolean` |
| `uv` | `boolean` |

___

### hrtime

• **hrtime**: [`HRTime`](typings_env.NodeJS.HRTime.md)

___

### mainModule

• `Optional` **mainModule**: [`Module`](typings_env.NodeJS.Module.md)

**`deprecated`** since v14.0.0 - use `require.main` instead.

___

### memoryUsage

• **memoryUsage**: [`MemoryUsageFn`](typings_env.NodeJS.MemoryUsageFn.md)

___

### pid

• **pid**: `number`

___

### platform

• **platform**: [`Platform`](../modules/typings_env.NodeJS.md#platform)

___

### ppid

• **ppid**: `number`

___

### release

• **release**: [`ProcessRelease`](typings_env.NodeJS.ProcessRelease.md)

___

### report

• `Optional` **report**: [`ProcessReport`](typings_env.NodeJS.ProcessReport.md)

Only available with `--experimental-report`

___

### stderr

• **stderr**: [`WriteStream`](typings_env.NodeJS.WriteStream.md) & { `fd`: ``2``  }

Can also be a tty.WriteStream, not typed due to limitations.

___

### stdin

• **stdin**: [`ReadStream`](typings_env.NodeJS.ReadStream.md) & { `fd`: ``0``  }

___

### stdout

• **stdout**: [`WriteStream`](typings_env.NodeJS.WriteStream.md) & { `fd`: ``1``  }

Can also be a tty.WriteStream, not typed due to limitations.

___

### title

• **title**: `string`

___

### traceDeprecation

• **traceDeprecation**: `boolean`

___

### version

• **version**: `string`

___

### versions

• **versions**: [`ProcessVersions`](typings_env.NodeJS.ProcessVersions.md)

## Methods

### abort

▸ **abort**(): `never`

#### Returns

`never`

___

### addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/typings_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[addListener](typings_env.NodeJS.EventEmitter.md#addlistener)

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/typings_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/typings_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/typings_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/typings_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/typings_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/typings_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/typings_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/typings_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/typings_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/typings_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/typings_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

___

### chdir

▸ **chdir**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

___

### cpuUsage

▸ **cpuUsage**(`previousValue?`): [`CpuUsage`](typings_env.NodeJS.CpuUsage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `previousValue?` | [`CpuUsage`](typings_env.NodeJS.CpuUsage.md) |

#### Returns

[`CpuUsage`](typings_env.NodeJS.CpuUsage.md)

___

### cwd

▸ **cwd**(): `string`

#### Returns

`string`

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

___

### emit

▸ **emit**(`event`, `code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `code` | `number` |

#### Returns

`boolean`

#### Overrides

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[emit](typings_env.NodeJS.EventEmitter.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `code` | `number` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `promise`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `promise` | `Promise`<`any`\> |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `error`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `error` | `Error` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `error`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `error` | `Error` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `reason`, `promise`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `reason` | `any` |
| `promise` | `Promise`<`any`\> |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `warning`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `warning` | `Error` |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `message`, `sendHandle`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `message` | `any` |
| `sendHandle` | `any` |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `signal`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/typings_env.NodeJS.md#signals) |
| `signal` | [`Signals`](../modules/typings_env.NodeJS.md#signals) |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `eventName`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `eventName`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `eventName` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/typings_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.emit

___

### emitWarning

▸ **emitWarning**(`warning`, `ctor?`): `void`

The `process.emitWarning()` method can be used to emit custom or application specific process warnings.

These can be listened for by adding a handler to the `'warning'` event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `warning` | `string` \| `Error` | The warning to emit. |
| `ctor?` | `Function` | When `warning` is a `string`, `ctor` is an optional function used to limit the generated stack trace. Default: `process.emitWarning`. |

#### Returns

`void`

▸ **emitWarning**(`warning`, `type?`, `ctor?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `warning` | `string` \| `Error` |
| `type?` | `string` |
| `ctor?` | `Function` |

#### Returns

`void`

▸ **emitWarning**(`warning`, `type?`, `code?`, `ctor?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `warning` | `string` \| `Error` |
| `type?` | `string` |
| `code?` | `string` |
| `ctor?` | `Function` |

#### Returns

`void`

▸ **emitWarning**(`warning`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `warning` | `string` \| `Error` |
| `options?` | [`EmitWarningOptions`](typings_env.NodeJS.EmitWarningOptions.md) |

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

### exit

▸ **exit**(`code?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |

#### Returns

`never`

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[getMaxListeners](typings_env.NodeJS.EventEmitter.md#getmaxlisteners)

___

### getegid

▸ **getegid**(): `number`

#### Returns

`number`

___

### geteuid

▸ **geteuid**(): `number`

#### Returns

`number`

___

### getgid

▸ **getgid**(): `number`

#### Returns

`number`

___

### getgroups

▸ **getgroups**(): `number`[]

#### Returns

`number`[]

___

### getuid

▸ **getuid**(): `number`

#### Returns

`number`

___

### hasUncaughtExceptionCaptureCallback

▸ **hasUncaughtExceptionCaptureCallback**(): `boolean`

#### Returns

`boolean`

___

### kill

▸ **kill**(`pid`, `signal?`): ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid` | `number` |
| `signal?` | `string` \| `number` |

#### Returns

``true``

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

▸ **listeners**(`event`): [`BeforeExitListener`](../modules/typings_env.NodeJS.md#beforeexitlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |

#### Returns

[`BeforeExitListener`](../modules/typings_env.NodeJS.md#beforeexitlistener)[]

#### Overrides

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[listeners](typings_env.NodeJS.EventEmitter.md#listeners)

▸ **listeners**(`event`): [`DisconnectListener`](../modules/typings_env.NodeJS.md#disconnectlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |

#### Returns

[`DisconnectListener`](../modules/typings_env.NodeJS.md#disconnectlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`ExitListener`](../modules/typings_env.NodeJS.md#exitlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |

#### Returns

[`ExitListener`](../modules/typings_env.NodeJS.md#exitlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`RejectionHandledListener`](../modules/typings_env.NodeJS.md#rejectionhandledlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |

#### Returns

[`RejectionHandledListener`](../modules/typings_env.NodeJS.md#rejectionhandledlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |

#### Returns

[`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |

#### Returns

[`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`UnhandledRejectionListener`](../modules/typings_env.NodeJS.md#unhandledrejectionlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |

#### Returns

[`UnhandledRejectionListener`](../modules/typings_env.NodeJS.md#unhandledrejectionlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`WarningListener`](../modules/typings_env.NodeJS.md#warninglistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |

#### Returns

[`WarningListener`](../modules/typings_env.NodeJS.md#warninglistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`MessageListener`](../modules/typings_env.NodeJS.md#messagelistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |

#### Returns

[`MessageListener`](../modules/typings_env.NodeJS.md#messagelistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`SignalsListener`](../modules/typings_env.NodeJS.md#signalslistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/typings_env.NodeJS.md#signals) |

#### Returns

[`SignalsListener`](../modules/typings_env.NodeJS.md#signalslistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`NewListenerListener`](../modules/typings_env.NodeJS.md#newlistenerlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |

#### Returns

[`NewListenerListener`](../modules/typings_env.NodeJS.md#newlistenerlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`RemoveListenerListener`](../modules/typings_env.NodeJS.md#removelistenerlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |

#### Returns

[`RemoveListenerListener`](../modules/typings_env.NodeJS.md#removelistenerlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`MultipleResolveListener`](../modules/typings_env.NodeJS.md#multipleresolvelistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |

#### Returns

[`MultipleResolveListener`](../modules/typings_env.NodeJS.md#multipleresolvelistener)[]

#### Overrides

EventEmitter.listeners

___

### nextTick

▸ **nextTick**(`callback`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |
| `...args` | `any`[] |

#### Returns

`void`

___

### off

▸ **off**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[off](typings_env.NodeJS.EventEmitter.md#off)

___

### on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/typings_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[on](typings_env.NodeJS.EventEmitter.md#on)

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/typings_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/typings_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/typings_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/typings_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/typings_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/typings_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/typings_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/typings_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/typings_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/typings_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/typings_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

___

### once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/typings_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[once](typings_env.NodeJS.EventEmitter.md#once)

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/typings_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/typings_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/typings_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/typings_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/typings_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/typings_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/typings_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/typings_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/typings_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/typings_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/typings_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

___

### openStdin

▸ **openStdin**(): [`Socket`](typings_env.NodeJS.Socket.md)

#### Returns

[`Socket`](typings_env.NodeJS.Socket.md)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/typings_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[prependListener](typings_env.NodeJS.EventEmitter.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/typings_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/typings_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/typings_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/typings_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/typings_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/typings_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/typings_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/typings_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/typings_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/typings_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/typings_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/typings_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[prependOnceListener](typings_env.NodeJS.EventEmitter.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/typings_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/typings_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/typings_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/typings_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/typings_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/typings_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/typings_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/typings_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/typings_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/typings_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/typings_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/typings_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

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

▸ **removeAllListeners**(`event?`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[removeAllListeners](typings_env.NodeJS.EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[removeListener](typings_env.NodeJS.EventEmitter.md#removelistener)

___

### resourceUsage

▸ **resourceUsage**(): [`ResourceUsage`](typings_env.NodeJS.ResourceUsage.md)

#### Returns

[`ResourceUsage`](typings_env.NodeJS.ResourceUsage.md)

___

### send

▸ `Optional` **send**(`message`, `sendHandle?`, `options?`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `sendHandle?` | `any` |
| `options?` | `Object` |
| `options.swallowErrors?` | `boolean` |
| `callback?` | (`error`: ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Process`](typings_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Process`](typings_env.NodeJS.Process.md)

#### Inherited from

[EventEmitter](typings_env.NodeJS.EventEmitter.md).[setMaxListeners](typings_env.NodeJS.EventEmitter.md#setmaxlisteners)

___

### setUncaughtExceptionCaptureCallback

▸ **setUncaughtExceptionCaptureCallback**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | ``null`` \| (`err`: `Error`) => `void` |

#### Returns

`void`

___

### setegid

▸ **setegid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

___

### seteuid

▸ **seteuid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

___

### setgid

▸ **setgid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

___

### setgroups

▸ **setgroups**(`groups`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groups` | readonly (`string` \| `number`)[] |

#### Returns

`void`

___

### setuid

▸ **setuid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

___

### umask

▸ **umask**(): `number`

**`deprecated`** since v14.0.0 - Calling process.umask() with no argument causes
the process-wide umask to be written twice. This introduces a race condition between threads,
and is a potential security vulnerability. There is no safe, cross-platform alternative API.

#### Returns

`number`

▸ **umask**(`mask`): `number`

Can only be set if not in worker thread.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `string` \| `number` |

#### Returns

`number`

___

### uptime

▸ **uptime**(): `number`

#### Returns

`number`
