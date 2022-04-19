[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / Module

# Interface: Module

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).Module

## Table of contents

### Properties

- [children](dev_env.NodeJS.Module.md#children)
- [exports](dev_env.NodeJS.Module.md#exports)
- [filename](dev_env.NodeJS.Module.md#filename)
- [id](dev_env.NodeJS.Module.md#id)
- [isPreloading](dev_env.NodeJS.Module.md#ispreloading)
- [loaded](dev_env.NodeJS.Module.md#loaded)
- [parent](dev_env.NodeJS.Module.md#parent)
- [path](dev_env.NodeJS.Module.md#path)
- [paths](dev_env.NodeJS.Module.md#paths)
- [require](dev_env.NodeJS.Module.md#require)

## Properties

### children

• **children**: [`Module`](dev_env.NodeJS.Module.md)[]

___

### exports

• **exports**: `any`

___

### filename

• **filename**: `string`

___

### id

• **id**: `string`

___

### isPreloading

• **isPreloading**: `boolean`

`true` if the module is running during the Node.js preload

___

### loaded

• **loaded**: `boolean`

___

### parent

• **parent**: `undefined` \| ``null`` \| [`Module`](dev_env.NodeJS.Module.md)

**`deprecated`** since 14.6.0 Please use `require.main` and `module.children` instead.

___

### path

• **path**: `string`

**`since`** 11.14.0

The directory name of the module. This is usually the same as the path.dirname() of the module.id.

___

### paths

• **paths**: `string`[]

___

### require

• **require**: [`Require`](dev_env.NodeJS.Require.md)
