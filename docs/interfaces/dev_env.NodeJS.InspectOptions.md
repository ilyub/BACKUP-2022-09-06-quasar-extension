[Quasar extension](../index.md) / [Exports](../modules.md) / [dev/env](../modules/dev_env.md) / [NodeJS](../modules/dev_env.NodeJS.md) / InspectOptions

# Interface: InspectOptions

[dev/env](../modules/dev_env.md).[NodeJS](../modules/dev_env.NodeJS.md).InspectOptions

## Table of contents

### Properties

- [breakLength](dev_env.NodeJS.InspectOptions.md#breaklength)
- [colors](dev_env.NodeJS.InspectOptions.md#colors)
- [compact](dev_env.NodeJS.InspectOptions.md#compact)
- [customInspect](dev_env.NodeJS.InspectOptions.md#custominspect)
- [depth](dev_env.NodeJS.InspectOptions.md#depth)
- [getters](dev_env.NodeJS.InspectOptions.md#getters)
- [maxArrayLength](dev_env.NodeJS.InspectOptions.md#maxarraylength)
- [maxStringLength](dev_env.NodeJS.InspectOptions.md#maxstringlength)
- [showHidden](dev_env.NodeJS.InspectOptions.md#showhidden)
- [showProxy](dev_env.NodeJS.InspectOptions.md#showproxy)
- [sorted](dev_env.NodeJS.InspectOptions.md#sorted)

## Properties

### breakLength

• `Optional` **breakLength**: `number`

___

### colors

• `Optional` **colors**: `boolean`

___

### compact

• `Optional` **compact**: `number` \| `boolean`

Setting this to `false` causes each object key
to be displayed on a new line. It will also add new lines to text that is
longer than `breakLength`. If set to a number, the most `n` inner elements
are united on a single line as long as all properties fit into
`breakLength`. Short array elements are also grouped together. Note that no
text will be reduced below 16 characters, no matter the `breakLength` size.
For more information, see the example below.

**`default`** `true`

___

### customInspect

• `Optional` **customInspect**: `boolean`

___

### depth

• `Optional` **depth**: ``null`` \| `number`

**`default`** 2

___

### getters

• `Optional` **getters**: `boolean` \| ``"get"`` \| ``"set"``

If set to `true`, getters are going to be
inspected as well. If set to `'get'` only getters without setter are going
to be inspected. If set to `'set'` only getters having a corresponding
setter are going to be inspected. This might cause side effects depending on
the getter function.

**`default`** `false`

___

### maxArrayLength

• `Optional` **maxArrayLength**: ``null`` \| `number`

___

### maxStringLength

• `Optional` **maxStringLength**: ``null`` \| `number`

Specifies the maximum number of characters to
include when formatting. Set to `null` or `Infinity` to show all elements.
Set to `0` or negative to show no characters.

**`default`** 10000

___

### showHidden

• `Optional` **showHidden**: `boolean`

___

### showProxy

• `Optional` **showProxy**: `boolean`

___

### sorted

• `Optional` **sorted**: `boolean` \| (`a`: `string`, `b`: `string`) => `number`
