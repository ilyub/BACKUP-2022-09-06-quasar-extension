[Quasar extension](../index.md) / [Exports](../modules.md) / [components/TimeInput.extras](../modules/components_TimeInput_extras.md) / TimeInputProps

# Interface: TimeInputProps

[components/TimeInput.extras](../modules/components_TimeInput_extras.md).TimeInputProps

## Hierarchy

- [`TimeInputParentProps`](components_TimeInput_extras.TimeInputParentProps.md)

- [`TimeInputOwnProps`](components_TimeInput_extras.TimeInputOwnProps.md)

  ↳ **`TimeInputProps`**

## Table of contents

### Properties

- [autofocus](components_TimeInput_extras.TimeInputProps.md#autofocus)
- [bgColor](components_TimeInput_extras.TimeInputProps.md#bgcolor)
- [borderless](components_TimeInput_extras.TimeInputProps.md#borderless)
- [bottomSlots](components_TimeInput_extras.TimeInputProps.md#bottomslots)
- [clearIcon](components_TimeInput_extras.TimeInputProps.md#clearicon)
- [clearable](components_TimeInput_extras.TimeInputProps.md#clearable)
- [color](components_TimeInput_extras.TimeInputProps.md#color)
- [counter](components_TimeInput_extras.TimeInputProps.md#counter)
- [dark](components_TimeInput_extras.TimeInputProps.md#dark)
- [dense](components_TimeInput_extras.TimeInputProps.md#dense)
- [disable](components_TimeInput_extras.TimeInputProps.md#disable)
- [error](components_TimeInput_extras.TimeInputProps.md#error)
- [errorMessage](components_TimeInput_extras.TimeInputProps.md#errormessage)
- [filled](components_TimeInput_extras.TimeInputProps.md#filled)
- [for](components_TimeInput_extras.TimeInputProps.md#for)
- [hideBottomSpace](components_TimeInput_extras.TimeInputProps.md#hidebottomspace)
- [hideHint](components_TimeInput_extras.TimeInputProps.md#hidehint)
- [hint](components_TimeInput_extras.TimeInputProps.md#hint)
- [itemAligned](components_TimeInput_extras.TimeInputProps.md#itemaligned)
- [label](components_TimeInput_extras.TimeInputProps.md#label)
- [labelColor](components_TimeInput_extras.TimeInputProps.md#labelcolor)
- [labelSlot](components_TimeInput_extras.TimeInputProps.md#labelslot)
- [lazyRules](components_TimeInput_extras.TimeInputProps.md#lazyrules)
- [loading](components_TimeInput_extras.TimeInputProps.md#loading)
- [maxlength](components_TimeInput_extras.TimeInputProps.md#maxlength)
- [modelValue](components_TimeInput_extras.TimeInputProps.md#modelvalue)
- [name](components_TimeInput_extras.TimeInputProps.md#name)
- [noErrorIcon](components_TimeInput_extras.TimeInputProps.md#noerroricon)
- [outlined](components_TimeInput_extras.TimeInputProps.md#outlined)
- [prefix](components_TimeInput_extras.TimeInputProps.md#prefix)
- [reactiveRules](components_TimeInput_extras.TimeInputProps.md#reactiverules)
- [readonly](components_TimeInput_extras.TimeInputProps.md#readonly)
- [rounded](components_TimeInput_extras.TimeInputProps.md#rounded)
- [rules](components_TimeInput_extras.TimeInputProps.md#rules)
- [square](components_TimeInput_extras.TimeInputProps.md#square)
- [stackLabel](components_TimeInput_extras.TimeInputProps.md#stacklabel)
- [standout](components_TimeInput_extras.TimeInputProps.md#standout)
- [suffix](components_TimeInput_extras.TimeInputProps.md#suffix)

### Methods

- [onBlur](components_TimeInput_extras.TimeInputProps.md#onblur)
- [onClear](components_TimeInput_extras.TimeInputProps.md#onclear)
- [onFocus](components_TimeInput_extras.TimeInputProps.md#onfocus)
- [onUpdate:modelValue](components_TimeInput_extras.TimeInputProps.md#onupdate:modelvalue)

## Properties

### autofocus

• `Optional` **autofocus**: `boolean`

Focus field on initial component render

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[autofocus](components_TimeInput_extras.TimeInputParentProps.md#autofocus)

___

### bgColor

• `Optional` **bgColor**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[bgColor](components_TimeInput_extras.TimeInputParentProps.md#bgcolor)

___

### borderless

• `Optional` **borderless**: `boolean`

Use 'borderless' design for the field

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[borderless](components_TimeInput_extras.TimeInputParentProps.md#borderless)

___

### bottomSlots

• `Optional` **bottomSlots**: `boolean`

Enables bottom slots ('error', 'hint', 'counter')

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[bottomSlots](components_TimeInput_extras.TimeInputParentProps.md#bottomslots)

___

### clearIcon

• `Optional` **clearIcon**: `string`

Custom icon to use for the clear button when using along with 'clearable' prop

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[clearIcon](components_TimeInput_extras.TimeInputParentProps.md#clearicon)

___

### clearable

• `Optional` **clearable**: `boolean`

Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[clearable](components_TimeInput_extras.TimeInputParentProps.md#clearable)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[color](components_TimeInput_extras.TimeInputParentProps.md#color)

___

### counter

• `Optional` **counter**: `boolean`

Show an automatic counter on bottom right

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[counter](components_TimeInput_extras.TimeInputParentProps.md#counter)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[dark](components_TimeInput_extras.TimeInputParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[dense](components_TimeInput_extras.TimeInputParentProps.md#dense)

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[disable](components_TimeInput_extras.TimeInputParentProps.md#disable)

___

### error

• `Optional` **error**: `boolean`

Does field have validation errors?

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[error](components_TimeInput_extras.TimeInputParentProps.md#error)

___

### errorMessage

• `Optional` **errorMessage**: `string`

Validation error message (gets displayed only if 'error' is set to 'true')

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[errorMessage](components_TimeInput_extras.TimeInputParentProps.md#errormessage)

___

### filled

• `Optional` **filled**: `boolean`

Use 'filled' design for the field

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[filled](components_TimeInput_extras.TimeInputParentProps.md#filled)

___

### for

• `Optional` **for**: `string`

Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[for](components_TimeInput_extras.TimeInputParentProps.md#for)

___

### hideBottomSpace

• `Optional` **hideBottomSpace**: `boolean`

Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[hideBottomSpace](components_TimeInput_extras.TimeInputParentProps.md#hidebottomspace)

___

### hideHint

• `Optional` **hideHint**: `boolean`

Hide the helper (hint) text when field doesn't have focus

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[hideHint](components_TimeInput_extras.TimeInputParentProps.md#hidehint)

___

### hint

• `Optional` **hint**: `string`

Helper (hint) text which gets placed below your wrapped form component

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[hint](components_TimeInput_extras.TimeInputParentProps.md#hint)

___

### itemAligned

• `Optional` **itemAligned**: `boolean`

Match inner content alignment to that of QItem

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[itemAligned](components_TimeInput_extras.TimeInputParentProps.md#itemaligned)

___

### label

• `Optional` **label**: `string`

A text label that will “float” up above the input field, once the field gets focus

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[label](components_TimeInput_extras.TimeInputParentProps.md#label)

___

### labelColor

• `Optional` **labelColor**: `string`

Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[labelColor](components_TimeInput_extras.TimeInputParentProps.md#labelcolor)

___

### labelSlot

• `Optional` **labelSlot**: `boolean`

Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[labelSlot](components_TimeInput_extras.TimeInputParentProps.md#labelslot)

___

### lazyRules

• `Optional` **lazyRules**: `boolean` \| ``"ondemand"``

If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[lazyRules](components_TimeInput_extras.TimeInputParentProps.md#lazyrules)

___

### loading

• `Optional` **loading**: `boolean`

Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[loading](components_TimeInput_extras.TimeInputParentProps.md#loading)

___

### maxlength

• `Optional` **maxlength**: `string` \| `number`

Specify a max length of model

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[maxlength](components_TimeInput_extras.TimeInputParentProps.md#maxlength)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `numberU`

#### Inherited from

[TimeInputOwnProps](components_TimeInput_extras.TimeInputOwnProps.md).[modelValue](components_TimeInput_extras.TimeInputOwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[name](components_TimeInput_extras.TimeInputParentProps.md#name)

___

### noErrorIcon

• `Optional` **noErrorIcon**: `boolean`

Hide error icon when there is an error

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[noErrorIcon](components_TimeInput_extras.TimeInputParentProps.md#noerroricon)

___

### outlined

• `Optional` **outlined**: `boolean`

Use 'outlined' design for the field

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[outlined](components_TimeInput_extras.TimeInputParentProps.md#outlined)

___

### prefix

• `Optional` **prefix**: `string`

Prefix

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[prefix](components_TimeInput_extras.TimeInputParentProps.md#prefix)

___

### reactiveRules

• `Optional` **reactiveRules**: `boolean`

By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[reactiveRules](components_TimeInput_extras.TimeInputParentProps.md#reactiverules)

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[readonly](components_TimeInput_extras.TimeInputParentProps.md#readonly)

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a small standard border-radius for a squared shape of the component

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[rounded](components_TimeInput_extras.TimeInputParentProps.md#rounded)

___

### rules

• `Optional` **rules**: `ValidationRule`<`any`\>[]

Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[rules](components_TimeInput_extras.TimeInputParentProps.md#rules)

___

### square

• `Optional` **square**: `boolean`

Remove border-radius so borders are squared; Overrides 'rounded' prop

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[square](components_TimeInput_extras.TimeInputParentProps.md#square)

___

### stackLabel

• `Optional` **stackLabel**: `boolean`

Label will be always shown above the field regardless of field content (if any)

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[stackLabel](components_TimeInput_extras.TimeInputParentProps.md#stacklabel)

___

### standout

• `Optional` **standout**: `string` \| `boolean`

Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[standout](components_TimeInput_extras.TimeInputParentProps.md#standout)

___

### suffix

• `Optional` **suffix**: `string`

Suffix

#### Inherited from

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[suffix](components_TimeInput_extras.TimeInputParentProps.md#suffix)

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

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[onBlur](components_TimeInput_extras.TimeInputParentProps.md#onblur)

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

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[onClear](components_TimeInput_extras.TimeInputParentProps.md#onclear)

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

[TimeInputParentProps](components_TimeInput_extras.TimeInputParentProps.md).[onFocus](components_TimeInput_extras.TimeInputParentProps.md#onfocus)

___

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `numberU` | Value. |

#### Returns

`void`

#### Inherited from

[TimeInputOwnProps](components_TimeInput_extras.TimeInputOwnProps.md).[onUpdate:modelValue](components_TimeInput_extras.TimeInputOwnProps.md#onupdate:modelvalue)
