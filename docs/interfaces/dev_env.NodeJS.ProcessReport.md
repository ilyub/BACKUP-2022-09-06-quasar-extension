[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / ProcessReport

# Interface: ProcessReport

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).ProcessReport

## Table of contents

### Properties

- [directory](dev_env.NodeJS.ProcessReport.md#directory)
- [filename](dev_env.NodeJS.ProcessReport.md#filename)
- [reportOnFatalError](dev_env.NodeJS.ProcessReport.md#reportonfatalerror)
- [reportOnSignal](dev_env.NodeJS.ProcessReport.md#reportonsignal)
- [reportOnUncaughtException](dev_env.NodeJS.ProcessReport.md#reportonuncaughtexception)
- [signal](dev_env.NodeJS.ProcessReport.md#signal)

### Methods

- [getReport](dev_env.NodeJS.ProcessReport.md#getreport)
- [writeReport](dev_env.NodeJS.ProcessReport.md#writereport)

## Properties

### directory

• **directory**: `string`

Directory where the report is written.
working directory of the Node.js process.

**`default`** '' indicating that reports are written to the current

___

### filename

• **filename**: `string`

Filename where the report is written.
The default value is the empty string.

**`default`** '' the output filename will be comprised of a timestamp,
PID, and sequence number.

___

### reportOnFatalError

• **reportOnFatalError**: `boolean`

If true, a diagnostic report is generated on fatal errors,
such as out of memory errors or failed C++ assertions.

**`default`** false

___

### reportOnSignal

• **reportOnSignal**: `boolean`

If true, a diagnostic report is generated when the process
receives the signal specified by process.report.signal.

**`default`** false

___

### reportOnUncaughtException

• **reportOnUncaughtException**: `boolean`

If true, a diagnostic report is generated on uncaught exception.

**`default`** false

___

### signal

• **signal**: [`Signals`](../modules/dev_env.NodeJS.md#signals)

The signal used to trigger the creation of a diagnostic report.

**`default`** 'SIGUSR2'

## Methods

### getReport

▸ **getReport**(`err?`): `string`

Returns a JSON-formatted diagnostic report for the running process.
The report's JavaScript stack trace is taken from err, if present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | `Error` |

#### Returns

`string`

___

### writeReport

▸ **writeReport**(`fileName?`): `string`

Writes a diagnostic report to a file. If filename is not provided, the default filename
includes the date, time, PID, and a sequence number.
The report's JavaScript stack trace is taken from err, if present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName?` | `string` | Name of the file where the report is written. This should be a relative path, that will be appended to the directory specified in `process.report.directory`, or the current working directory of the Node.js process, if unspecified. |

#### Returns

`string`

Filename of the generated report.

▸ **writeReport**(`error?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

#### Returns

`string`

▸ **writeReport**(`fileName?`, `err?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName?` | `string` |
| `err?` | `Error` |

#### Returns

`string`
