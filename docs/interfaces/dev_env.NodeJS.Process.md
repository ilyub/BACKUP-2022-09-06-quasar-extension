[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / Process

# Interface: Process

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).Process

## Hierarchy

- [`EventEmitter`](dev_env.NodeJS.EventEmitter.md)

  ↳ **`Process`**

## Table of contents

### Properties

- [allowedNodeEnvironmentFlags](dev_env.NodeJS.Process.md#allowednodeenvironmentflags)
- [arch](dev_env.NodeJS.Process.md#arch)
- [argv](dev_env.NodeJS.Process.md#argv)
- [argv0](dev_env.NodeJS.Process.md#argv0)
- [config](dev_env.NodeJS.Process.md#config)
- [connected](dev_env.NodeJS.Process.md#connected)
- [debugPort](dev_env.NodeJS.Process.md#debugport)
- [domain](dev_env.NodeJS.Process.md#domain)
- [env](dev_env.NodeJS.Process.md#env)
- [execArgv](dev_env.NodeJS.Process.md#execargv)
- [execPath](dev_env.NodeJS.Process.md#execpath)
- [exitCode](dev_env.NodeJS.Process.md#exitcode)
- [features](dev_env.NodeJS.Process.md#features)
- [hrtime](dev_env.NodeJS.Process.md#hrtime)
- [mainModule](dev_env.NodeJS.Process.md#mainmodule)
- [memoryUsage](dev_env.NodeJS.Process.md#memoryusage)
- [pid](dev_env.NodeJS.Process.md#pid)
- [platform](dev_env.NodeJS.Process.md#platform)
- [ppid](dev_env.NodeJS.Process.md#ppid)
- [release](dev_env.NodeJS.Process.md#release)
- [report](dev_env.NodeJS.Process.md#report)
- [stderr](dev_env.NodeJS.Process.md#stderr)
- [stdin](dev_env.NodeJS.Process.md#stdin)
- [stdout](dev_env.NodeJS.Process.md#stdout)
- [title](dev_env.NodeJS.Process.md#title)
- [traceDeprecation](dev_env.NodeJS.Process.md#tracedeprecation)
- [version](dev_env.NodeJS.Process.md#version)
- [versions](dev_env.NodeJS.Process.md#versions)

### Methods

- [abort](dev_env.NodeJS.Process.md#abort)
- [addListener](dev_env.NodeJS.Process.md#addlistener)
- [chdir](dev_env.NodeJS.Process.md#chdir)
- [cpuUsage](dev_env.NodeJS.Process.md#cpuusage)
- [cwd](dev_env.NodeJS.Process.md#cwd)
- [disconnect](dev_env.NodeJS.Process.md#disconnect)
- [emit](dev_env.NodeJS.Process.md#emit)
- [emitWarning](dev_env.NodeJS.Process.md#emitwarning)
- [eventNames](dev_env.NodeJS.Process.md#eventnames)
- [exit](dev_env.NodeJS.Process.md#exit)
- [getMaxListeners](dev_env.NodeJS.Process.md#getmaxlisteners)
- [getegid](dev_env.NodeJS.Process.md#getegid)
- [geteuid](dev_env.NodeJS.Process.md#geteuid)
- [getgid](dev_env.NodeJS.Process.md#getgid)
- [getgroups](dev_env.NodeJS.Process.md#getgroups)
- [getuid](dev_env.NodeJS.Process.md#getuid)
- [hasUncaughtExceptionCaptureCallback](dev_env.NodeJS.Process.md#hasuncaughtexceptioncapturecallback)
- [kill](dev_env.NodeJS.Process.md#kill)
- [listenerCount](dev_env.NodeJS.Process.md#listenercount)
- [listeners](dev_env.NodeJS.Process.md#listeners)
- [nextTick](dev_env.NodeJS.Process.md#nexttick)
- [off](dev_env.NodeJS.Process.md#off)
- [on](dev_env.NodeJS.Process.md#on)
- [once](dev_env.NodeJS.Process.md#once)
- [openStdin](dev_env.NodeJS.Process.md#openstdin)
- [prependListener](dev_env.NodeJS.Process.md#prependlistener)
- [prependOnceListener](dev_env.NodeJS.Process.md#prependoncelistener)
- [rawListeners](dev_env.NodeJS.Process.md#rawlisteners)
- [removeAllListeners](dev_env.NodeJS.Process.md#removealllisteners)
- [removeListener](dev_env.NodeJS.Process.md#removelistener)
- [resourceUsage](dev_env.NodeJS.Process.md#resourceusage)
- [send](dev_env.NodeJS.Process.md#send)
- [setMaxListeners](dev_env.NodeJS.Process.md#setmaxlisteners)
- [setUncaughtExceptionCaptureCallback](dev_env.NodeJS.Process.md#setuncaughtexceptioncapturecallback)
- [setegid](dev_env.NodeJS.Process.md#setegid)
- [seteuid](dev_env.NodeJS.Process.md#seteuid)
- [setgid](dev_env.NodeJS.Process.md#setgid)
- [setgroups](dev_env.NodeJS.Process.md#setgroups)
- [setuid](dev_env.NodeJS.Process.md#setuid)
- [umask](dev_env.NodeJS.Process.md#umask)
- [uptime](dev_env.NodeJS.Process.md#uptime)

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

• **domain**: [`Domain`](dev_env.NodeJS.Domain.md)

___

### env

• **env**: [`ProcessEnv`](dev_env.NodeJS.ProcessEnv.md)

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

• **hrtime**: [`HRTime`](dev_env.NodeJS.HRTime.md)

___

### mainModule

• `Optional` **mainModule**: [`Module`](dev_env.NodeJS.Module.md)

**`deprecated`** since v14.0.0 - use `require.main` instead.

___

### memoryUsage

• **memoryUsage**: [`MemoryUsageFn`](dev_env.NodeJS.MemoryUsageFn.md)

___

### pid

• **pid**: `number`

___

### platform

• **platform**: [`Platform`](../modules/dev_env.NodeJS.md#platform)

___

### ppid

• **ppid**: `number`

___

### release

• **release**: [`ProcessRelease`](dev_env.NodeJS.ProcessRelease.md)

___

### report

• `Optional` **report**: [`ProcessReport`](dev_env.NodeJS.ProcessReport.md)

Only available with `--experimental-report`

___

### stderr

• **stderr**: [`WriteStream`](dev_env.NodeJS.WriteStream.md) & { `fd`: ``2``  }

Can also be a tty.WriteStream, not typed due to limitations.

___

### stdin

• **stdin**: [`ReadStream`](dev_env.NodeJS.ReadStream.md) & { `fd`: ``0``  }

___

### stdout

• **stdout**: [`WriteStream`](dev_env.NodeJS.WriteStream.md) & { `fd`: ``1``  }

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

• **versions**: [`ProcessVersions`](dev_env.NodeJS.ProcessVersions.md)

## Methods

### abort

▸ **abort**(): `never`

#### Returns

`never`

___

### addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/dev_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[addListener](dev_env.NodeJS.EventEmitter.md#addlistener)

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/dev_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/dev_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/dev_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/dev_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/dev_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/dev_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/dev_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/dev_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/dev_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/dev_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.addListener

▸ **addListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/dev_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

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

▸ **cpuUsage**(`previousValue?`): [`CpuUsage`](dev_env.NodeJS.CpuUsage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `previousValue?` | [`CpuUsage`](dev_env.NodeJS.CpuUsage.md) |

#### Returns

[`CpuUsage`](dev_env.NodeJS.CpuUsage.md)

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

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[emit](dev_env.NodeJS.EventEmitter.md#emit)

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

▸ **emit**(`event`, `message`, `sendHandle`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `message` | `any` |
| `sendHandle` | `any` |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `signal`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/dev_env.NodeJS.md#signals) |
| `signal` | [`Signals`](../modules/dev_env.NodeJS.md#signals) |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `eventName`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `eventName`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `eventName` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.emit

▸ **emit**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/dev_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

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
| `options?` | [`EmitWarningOptions`](dev_env.NodeJS.EmitWarningOptions.md) |

#### Returns

`void`

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[eventNames](dev_env.NodeJS.EventEmitter.md#eventnames)

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

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[getMaxListeners](dev_env.NodeJS.EventEmitter.md#getmaxlisteners)

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

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[listenerCount](dev_env.NodeJS.EventEmitter.md#listenercount)

___

### listeners

▸ **listeners**(`event`): [`BeforeExitListener`](../modules/dev_env.NodeJS.md#beforeexitlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |

#### Returns

[`BeforeExitListener`](../modules/dev_env.NodeJS.md#beforeexitlistener)[]

#### Overrides

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[listeners](dev_env.NodeJS.EventEmitter.md#listeners)

▸ **listeners**(`event`): [`DisconnectListener`](../modules/dev_env.NodeJS.md#disconnectlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |

#### Returns

[`DisconnectListener`](../modules/dev_env.NodeJS.md#disconnectlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`ExitListener`](../modules/dev_env.NodeJS.md#exitlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |

#### Returns

[`ExitListener`](../modules/dev_env.NodeJS.md#exitlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`RejectionHandledListener`](../modules/dev_env.NodeJS.md#rejectionhandledlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |

#### Returns

[`RejectionHandledListener`](../modules/dev_env.NodeJS.md#rejectionhandledlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |

#### Returns

[`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |

#### Returns

[`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`UnhandledRejectionListener`](../modules/dev_env.NodeJS.md#unhandledrejectionlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |

#### Returns

[`UnhandledRejectionListener`](../modules/dev_env.NodeJS.md#unhandledrejectionlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`WarningListener`](../modules/dev_env.NodeJS.md#warninglistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |

#### Returns

[`WarningListener`](../modules/dev_env.NodeJS.md#warninglistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`MessageListener`](../modules/dev_env.NodeJS.md#messagelistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |

#### Returns

[`MessageListener`](../modules/dev_env.NodeJS.md#messagelistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`SignalsListener`](../modules/dev_env.NodeJS.md#signalslistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/dev_env.NodeJS.md#signals) |

#### Returns

[`SignalsListener`](../modules/dev_env.NodeJS.md#signalslistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`NewListenerListener`](../modules/dev_env.NodeJS.md#newlistenerlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |

#### Returns

[`NewListenerListener`](../modules/dev_env.NodeJS.md#newlistenerlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`RemoveListenerListener`](../modules/dev_env.NodeJS.md#removelistenerlistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |

#### Returns

[`RemoveListenerListener`](../modules/dev_env.NodeJS.md#removelistenerlistener)[]

#### Overrides

EventEmitter.listeners

▸ **listeners**(`event`): [`MultipleResolveListener`](../modules/dev_env.NodeJS.md#multipleresolvelistener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |

#### Returns

[`MultipleResolveListener`](../modules/dev_env.NodeJS.md#multipleresolvelistener)[]

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

▸ **off**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[off](dev_env.NodeJS.EventEmitter.md#off)

___

### on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/dev_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[on](dev_env.NodeJS.EventEmitter.md#on)

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/dev_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/dev_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/dev_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/dev_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/dev_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/dev_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/dev_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/dev_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/dev_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/dev_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/dev_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

▸ **on**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.on

___

### once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/dev_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[once](dev_env.NodeJS.EventEmitter.md#once)

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/dev_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/dev_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/dev_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/dev_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/dev_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/dev_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/dev_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/dev_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/dev_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/dev_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

▸ **once**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/dev_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.once

___

### openStdin

▸ **openStdin**(): [`Socket`](dev_env.NodeJS.Socket.md)

#### Returns

[`Socket`](dev_env.NodeJS.Socket.md)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/dev_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[prependListener](dev_env.NodeJS.EventEmitter.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/dev_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/dev_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/dev_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/dev_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/dev_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/dev_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/dev_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/dev_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/dev_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/dev_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

▸ **prependListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/dev_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"beforeExit"`` |
| `listener` | [`BeforeExitListener`](../modules/dev_env.NodeJS.md#beforeexitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[prependOnceListener](dev_env.NodeJS.EventEmitter.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"disconnect"`` |
| `listener` | [`DisconnectListener`](../modules/dev_env.NodeJS.md#disconnectlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"exit"`` |
| `listener` | [`ExitListener`](../modules/dev_env.NodeJS.md#exitlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"rejectionHandled"`` |
| `listener` | [`RejectionHandledListener`](../modules/dev_env.NodeJS.md#rejectionhandledlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtException"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"uncaughtExceptionMonitor"`` |
| `listener` | [`UncaughtExceptionListener`](../modules/dev_env.NodeJS.md#uncaughtexceptionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unhandledRejection"`` |
| `listener` | [`UnhandledRejectionListener`](../modules/dev_env.NodeJS.md#unhandledrejectionlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"warning"`` |
| `listener` | [`WarningListener`](../modules/dev_env.NodeJS.md#warninglistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | [`MessageListener`](../modules/dev_env.NodeJS.md#messagelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Signals`](../modules/dev_env.NodeJS.md#signals) |
| `listener` | [`SignalsListener`](../modules/dev_env.NodeJS.md#signalslistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"newListener"`` |
| `listener` | [`NewListenerListener`](../modules/dev_env.NodeJS.md#newlistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removeListener"`` |
| `listener` | [`RemoveListenerListener`](../modules/dev_env.NodeJS.md#removelistenerlistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Overrides

EventEmitter.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"multipleResolves"`` |
| `listener` | [`MultipleResolveListener`](../modules/dev_env.NodeJS.md#multipleresolvelistener) |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

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

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[rawListeners](dev_env.NodeJS.EventEmitter.md#rawlisteners)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[removeAllListeners](dev_env.NodeJS.EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[removeListener](dev_env.NodeJS.EventEmitter.md#removelistener)

___

### resourceUsage

▸ **resourceUsage**(): [`ResourceUsage`](dev_env.NodeJS.ResourceUsage.md)

#### Returns

[`ResourceUsage`](dev_env.NodeJS.ResourceUsage.md)

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

▸ **setMaxListeners**(`n`): [`Process`](dev_env.NodeJS.Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Process`](dev_env.NodeJS.Process.md)

#### Inherited from

[EventEmitter](dev_env.NodeJS.EventEmitter.md).[setMaxListeners](dev_env.NodeJS.EventEmitter.md#setmaxlisteners)

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
