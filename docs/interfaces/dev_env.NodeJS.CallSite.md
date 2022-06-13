[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / CallSite

# Interface: CallSite

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).CallSite

## Table of contents

### Methods

- [getColumnNumber](dev_env.NodeJS.CallSite.md#getcolumnnumber)
- [getEvalOrigin](dev_env.NodeJS.CallSite.md#getevalorigin)
- [getFileName](dev_env.NodeJS.CallSite.md#getfilename)
- [getFunction](dev_env.NodeJS.CallSite.md#getfunction)
- [getFunctionName](dev_env.NodeJS.CallSite.md#getfunctionname)
- [getLineNumber](dev_env.NodeJS.CallSite.md#getlinenumber)
- [getMethodName](dev_env.NodeJS.CallSite.md#getmethodname)
- [getThis](dev_env.NodeJS.CallSite.md#getthis)
- [getTypeName](dev_env.NodeJS.CallSite.md#gettypename)
- [isConstructor](dev_env.NodeJS.CallSite.md#isconstructor)
- [isEval](dev_env.NodeJS.CallSite.md#iseval)
- [isNative](dev_env.NodeJS.CallSite.md#isnative)
- [isToplevel](dev_env.NodeJS.CallSite.md#istoplevel)

## Methods

### getColumnNumber

▸ **getColumnNumber**(): ``null`` \| `number`

Current column number [if this function was defined in a script]

#### Returns

``null`` \| `number`

___

### getEvalOrigin

▸ **getEvalOrigin**(): `undefined` \| `string`

A call site object representing the location where eval was called
[if this function was created using a call to eval]

#### Returns

`undefined` \| `string`

___

### getFileName

▸ **getFileName**(): ``null`` \| `string`

Name of the script [if this function was defined in a script]

#### Returns

``null`` \| `string`

___

### getFunction

▸ **getFunction**(): `undefined` \| `Function`

Current function

#### Returns

`undefined` \| `Function`

___

### getFunctionName

▸ **getFunctionName**(): ``null`` \| `string`

Name of the current function, typically its name property.
If a name property is not available an attempt will be made to try
to infer a name from the function's context.

#### Returns

``null`` \| `string`

___

### getLineNumber

▸ **getLineNumber**(): ``null`` \| `number`

Current line number [if this function was defined in a script]

#### Returns

``null`` \| `number`

___

### getMethodName

▸ **getMethodName**(): ``null`` \| `string`

Name of the property [of "this" or one of its prototypes] that holds
the current function

#### Returns

``null`` \| `string`

___

### getThis

▸ **getThis**(): `unknown`

Value of "this"

#### Returns

`unknown`

___

### getTypeName

▸ **getTypeName**(): ``null`` \| `string`

Type of "this" as a string.
This is the name of the function stored in the constructor field of
"this", if available.  Otherwise the object's [[Class]] internal
property.

#### Returns

``null`` \| `string`

___

### isConstructor

▸ **isConstructor**(): `boolean`

Is this a constructor call?

#### Returns

`boolean`

___

### isEval

▸ **isEval**(): `boolean`

Does this call take place in code defined by a call to eval?

#### Returns

`boolean`

___

### isNative

▸ **isNative**(): `boolean`

Is this call in native V8 code?

#### Returns

`boolean`

___

### isToplevel

▸ **isToplevel**(): `boolean`

Is this a toplevel invocation, that is, is "this" the global object?

#### Returns

`boolean`
