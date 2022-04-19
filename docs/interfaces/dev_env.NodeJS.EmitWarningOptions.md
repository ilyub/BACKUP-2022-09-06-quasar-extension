[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / EmitWarningOptions

# Interface: EmitWarningOptions

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).EmitWarningOptions

## Table of contents

### Properties

- [code](dev_env.NodeJS.EmitWarningOptions.md#code)
- [ctor](dev_env.NodeJS.EmitWarningOptions.md#ctor)
- [detail](dev_env.NodeJS.EmitWarningOptions.md#detail)
- [type](dev_env.NodeJS.EmitWarningOptions.md#type)

## Properties

### code

• `Optional` **code**: `string`

A unique identifier for the warning instance being emitted.

___

### ctor

• `Optional` **ctor**: `Function`

When `warning` is a `string`, `ctor` is an optional function used to limit the generated stack trace.

**`default`** process.emitWarning

___

### detail

• `Optional` **detail**: `string`

Additional text to include with the error.

___

### type

• `Optional` **type**: `string`

When `warning` is a `string`, `type` is the name to use for the _type_ of warning being emitted.

**`default`** 'Warning'
