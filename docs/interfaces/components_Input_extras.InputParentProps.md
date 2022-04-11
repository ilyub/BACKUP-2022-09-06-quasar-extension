[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Input.extras](../modules/components_Input_extras.md) / InputParentProps

# Interface: InputParentProps

[components/Input.extras](../modules/components_Input_extras.md).InputParentProps

## Hierarchy

- `Omit`<`QInputProps`, ``"disable"`` \| ``"modelValue"`` \| ``"onUpdate:modelValue"``\>

  ↳ **`InputParentProps`**

  ↳↳ [`InputProps`](components_Input_extras.InputProps.md)

## Table of contents

### Properties

- [autofocus](components_Input_extras.InputParentProps.md#autofocus)
- [autogrow](components_Input_extras.InputParentProps.md#autogrow)
- [bgColor](components_Input_extras.InputParentProps.md#bgcolor)
- [borderless](components_Input_extras.InputParentProps.md#borderless)
- [bottomSlots](components_Input_extras.InputParentProps.md#bottomslots)
- [clearIcon](components_Input_extras.InputParentProps.md#clearicon)
- [clearable](components_Input_extras.InputParentProps.md#clearable)
- [color](components_Input_extras.InputParentProps.md#color)
- [counter](components_Input_extras.InputParentProps.md#counter)
- [dark](components_Input_extras.InputParentProps.md#dark)
- [debounce](components_Input_extras.InputParentProps.md#debounce)
- [dense](components_Input_extras.InputParentProps.md#dense)
- [error](components_Input_extras.InputParentProps.md#error)
- [errorMessage](components_Input_extras.InputParentProps.md#errormessage)
- [fillMask](components_Input_extras.InputParentProps.md#fillmask)
- [filled](components_Input_extras.InputParentProps.md#filled)
- [for](components_Input_extras.InputParentProps.md#for)
- [hideBottomSpace](components_Input_extras.InputParentProps.md#hidebottomspace)
- [hideHint](components_Input_extras.InputParentProps.md#hidehint)
- [hint](components_Input_extras.InputParentProps.md#hint)
- [inputClass](components_Input_extras.InputParentProps.md#inputclass)
- [inputStyle](components_Input_extras.InputParentProps.md#inputstyle)
- [itemAligned](components_Input_extras.InputParentProps.md#itemaligned)
- [label](components_Input_extras.InputParentProps.md#label)
- [labelColor](components_Input_extras.InputParentProps.md#labelcolor)
- [labelSlot](components_Input_extras.InputParentProps.md#labelslot)
- [lazyRules](components_Input_extras.InputParentProps.md#lazyrules)
- [loading](components_Input_extras.InputParentProps.md#loading)
- [mask](components_Input_extras.InputParentProps.md#mask)
- [maxlength](components_Input_extras.InputParentProps.md#maxlength)
- [name](components_Input_extras.InputParentProps.md#name)
- [noErrorIcon](components_Input_extras.InputParentProps.md#noerroricon)
- [outlined](components_Input_extras.InputParentProps.md#outlined)
- [prefix](components_Input_extras.InputParentProps.md#prefix)
- [reactiveRules](components_Input_extras.InputParentProps.md#reactiverules)
- [readonly](components_Input_extras.InputParentProps.md#readonly)
- [reverseFillMask](components_Input_extras.InputParentProps.md#reversefillmask)
- [rounded](components_Input_extras.InputParentProps.md#rounded)
- [rules](components_Input_extras.InputParentProps.md#rules)
- [shadowText](components_Input_extras.InputParentProps.md#shadowtext)
- [square](components_Input_extras.InputParentProps.md#square)
- [stackLabel](components_Input_extras.InputParentProps.md#stacklabel)
- [standout](components_Input_extras.InputParentProps.md#standout)
- [suffix](components_Input_extras.InputParentProps.md#suffix)
- [type](components_Input_extras.InputParentProps.md#type)
- [unmaskedValue](components_Input_extras.InputParentProps.md#unmaskedvalue)

### Methods

- [onBlur](components_Input_extras.InputParentProps.md#onblur)
- [onClear](components_Input_extras.InputParentProps.md#onclear)
- [onFocus](components_Input_extras.InputParentProps.md#onfocus)

## Properties

### autofocus

• `Optional` **autofocus**: `boolean`

Focus field on initial component render

#### Inherited from

Omit.autofocus

___

### autogrow

• `Optional` **autogrow**: `boolean`

Make field autogrow along with its content (uses a textarea)

#### Inherited from

Omit.autogrow

___

### bgColor

• `Optional` **bgColor**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

Omit.bgColor

___

### borderless

• `Optional` **borderless**: `boolean`

Use 'borderless' design for the field

#### Inherited from

Omit.borderless

___

### bottomSlots

• `Optional` **bottomSlots**: `boolean`

Enables bottom slots ('error', 'hint', 'counter')

#### Inherited from

Omit.bottomSlots

___

### clearIcon

• `Optional` **clearIcon**: `string`

Custom icon to use for the clear button when using along with 'clearable' prop

#### Inherited from

Omit.clearIcon

___

### clearable

• `Optional` **clearable**: `boolean`

Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null

#### Inherited from

Omit.clearable

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

Omit.color

___

### counter

• `Optional` **counter**: `boolean`

Show an automatic counter on bottom right

#### Inherited from

Omit.counter

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

Omit.dark

___

### debounce

• `Optional` **debounce**: `string` \| `number`

Debounce amount (in milliseconds) when updating model

#### Inherited from

Omit.debounce

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

Omit.dense

___

### error

• `Optional` **error**: `boolean`

Does field have validation errors?

#### Inherited from

Omit.error

___

### errorMessage

• `Optional` **errorMessage**: `string`

Validation error message (gets displayed only if 'error' is set to 'true')

#### Inherited from

Omit.errorMessage

___

### fillMask

• `Optional` **fillMask**: `string` \| `boolean`

Fills string with specified characters (or underscore if value is not string) to fill mask's length

#### Inherited from

Omit.fillMask

___

### filled

• `Optional` **filled**: `boolean`

Use 'filled' design for the field

#### Inherited from

Omit.filled

___

### for

• `Optional` **for**: `string`

Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well

#### Inherited from

Omit.for

___

### hideBottomSpace

• `Optional` **hideBottomSpace**: `boolean`

Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content

#### Inherited from

Omit.hideBottomSpace

___

### hideHint

• `Optional` **hideHint**: `boolean`

Hide the helper (hint) text when field doesn't have focus

#### Inherited from

Omit.hideHint

___

### hint

• `Optional` **hint**: `string`

Helper (hint) text which gets placed below your wrapped form component

#### Inherited from

Omit.hint

___

### inputClass

• `Optional` **inputClass**: `VueClassProp`

Class definitions to be attributed to the underlying input tag

#### Inherited from

Omit.inputClass

___

### inputStyle

• `Optional` **inputStyle**: `VueStyleProp`

Style definitions to be attributed to the underlying input tag

#### Inherited from

Omit.inputStyle

___

### itemAligned

• `Optional` **itemAligned**: `boolean`

Match inner content alignment to that of QItem

#### Inherited from

Omit.itemAligned

___

### label

• `Optional` **label**: `string`

A text label that will “float” up above the input field, once the field gets focus

#### Inherited from

Omit.label

___

### labelColor

• `Optional` **labelColor**: `string`

Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused

#### Inherited from

Omit.labelColor

___

### labelSlot

• `Optional` **labelSlot**: `boolean`

Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set

#### Inherited from

Omit.labelSlot

___

### lazyRules

• `Optional` **lazyRules**: `boolean` \| ``"ondemand"``

If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself

#### Inherited from

Omit.lazyRules

___

### loading

• `Optional` **loading**: `boolean`

Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.

#### Inherited from

Omit.loading

___

### mask

• `Optional` **mask**: `string`

Custom mask or one of the predefined mask names

#### Inherited from

Omit.mask

___

### maxlength

• `Optional` **maxlength**: `string` \| `number`

Specify a max length of model

#### Inherited from

Omit.maxlength

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists

#### Inherited from

Omit.name

___

### noErrorIcon

• `Optional` **noErrorIcon**: `boolean`

Hide error icon when there is an error

#### Inherited from

Omit.noErrorIcon

___

### outlined

• `Optional` **outlined**: `boolean`

Use 'outlined' design for the field

#### Inherited from

Omit.outlined

___

### prefix

• `Optional` **prefix**: `string`

Prefix

#### Inherited from

Omit.prefix

___

### reactiveRules

• `Optional` **reactiveRules**: `boolean`

By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it

#### Inherited from

Omit.reactiveRules

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

Omit.readonly

___

### reverseFillMask

• `Optional` **reverseFillMask**: `boolean`

Fills string from the right side of the mask

#### Inherited from

Omit.reverseFillMask

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a small standard border-radius for a squared shape of the component

#### Inherited from

Omit.rounded

___

### rules

• `Optional` **rules**: `ValidationRule`<`any`\>[]

Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules

#### Inherited from

Omit.rules

___

### shadowText

• `Optional` **shadowText**: `string`

Text to be displayed as shadow at the end of the text in the control; Does NOT applies to type=file

#### Inherited from

Omit.shadowText

___

### square

• `Optional` **square**: `boolean`

Remove border-radius so borders are squared; Overrides 'rounded' prop

#### Inherited from

Omit.square

___

### stackLabel

• `Optional` **stackLabel**: `boolean`

Label will be always shown above the field regardless of field content (if any)

#### Inherited from

Omit.stackLabel

___

### standout

• `Optional` **standout**: `string` \| `boolean`

Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)

#### Inherited from

Omit.standout

___

### suffix

• `Optional` **suffix**: `string`

Suffix

#### Inherited from

Omit.suffix

___

### type

• `Optional` **type**: ``"number"`` \| ``"date"`` \| ``"time"`` \| ``"email"`` \| ``"text"`` \| ``"password"`` \| ``"textarea"`` \| ``"search"`` \| ``"tel"`` \| ``"file"`` \| ``"url"``

Input type
Default value: text

#### Inherited from

Omit.type

___

### unmaskedValue

• `Optional` **unmaskedValue**: `boolean`

Model will be unmasked (won't contain tokens/separation characters)

#### Inherited from

Omit.unmaskedValue

## Methods

### onBlur

▸ `Optional` **onBlur**(`evt`): `void`

Emitted when component loses focus

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

Omit.onBlur

___

### onClear

▸ `Optional` **onClear**(`value`): `void`

When using the 'clearable' property, this event is emitted when the clear icon is clicked

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The previous value before clearing it |

#### Returns

`void`

#### Inherited from

Omit.onClear

___

### onFocus

▸ `Optional` **onFocus**(`evt`): `void`

Emitted when component gets focused

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

Omit.onFocus
