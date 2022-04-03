[Quasar extension](../index.md) / [Exports](../modules.md) / [typings/env](../modules/typings_env.md) / [NodeJS](../modules/typings_env.NodeJS.md) / Module

# Interface: Module

[typings/env](../modules/typings_env.md).[NodeJS](../modules/typings_env.NodeJS.md).Module

## Table of contents

### Properties

- [children](typings_env.NodeJS.Module.md#children)
- [exports](typings_env.NodeJS.Module.md#exports)
- [filename](typings_env.NodeJS.Module.md#filename)
- [id](typings_env.NodeJS.Module.md#id)
- [isPreloading](typings_env.NodeJS.Module.md#ispreloading)
- [loaded](typings_env.NodeJS.Module.md#loaded)
- [parent](typings_env.NodeJS.Module.md#parent)
- [path](typings_env.NodeJS.Module.md#path)
- [paths](typings_env.NodeJS.Module.md#paths)
- [require](typings_env.NodeJS.Module.md#require)

## Properties

### children

• **children**: [`Module`](typings_env.NodeJS.Module.md)[]

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

• **parent**: `undefined` \| ``null`` \| [`Module`](typings_env.NodeJS.Module.md)

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

• **require**: [`Require`](typings_env.NodeJS.Require.md)
