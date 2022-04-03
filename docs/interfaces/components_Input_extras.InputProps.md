[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Input.extras](../modules/components_Input_extras.md) / InputProps

# Interface: InputProps

[components/Input.extras](../modules/components_Input_extras.md).InputProps

## Hierarchy

- [`InputParentProps`](components_Input_extras.InputParentProps.md)

- [`InputOwnProps`](components_Input_extras.InputOwnProps.md)

  ↳ **`InputProps`**

## Table of contents

### Properties

- [autofocus](components_Input_extras.InputProps.md#autofocus)
- [autogrow](components_Input_extras.InputProps.md#autogrow)
- [bgColor](components_Input_extras.InputProps.md#bgcolor)
- [borderless](components_Input_extras.InputProps.md#borderless)
- [bottomSlots](components_Input_extras.InputProps.md#bottomslots)
- [clearIcon](components_Input_extras.InputProps.md#clearicon)
- [clearable](components_Input_extras.InputProps.md#clearable)
- [color](components_Input_extras.InputProps.md#color)
- [counter](components_Input_extras.InputProps.md#counter)
- [dark](components_Input_extras.InputProps.md#dark)
- [debounce](components_Input_extras.InputProps.md#debounce)
- [dense](components_Input_extras.InputProps.md#dense)
- [disable](components_Input_extras.InputProps.md#disable)
- [error](components_Input_extras.InputProps.md#error)
- [errorMessage](components_Input_extras.InputProps.md#errormessage)
- [fillMask](components_Input_extras.InputProps.md#fillmask)
- [filled](components_Input_extras.InputProps.md#filled)
- [for](components_Input_extras.InputProps.md#for)
- [hideBottomSpace](components_Input_extras.InputProps.md#hidebottomspace)
- [hideHint](components_Input_extras.InputProps.md#hidehint)
- [hint](components_Input_extras.InputProps.md#hint)
- [inputClass](components_Input_extras.InputProps.md#inputclass)
- [inputStyle](components_Input_extras.InputProps.md#inputstyle)
- [itemAligned](components_Input_extras.InputProps.md#itemaligned)
- [label](components_Input_extras.InputProps.md#label)
- [labelColor](components_Input_extras.InputProps.md#labelcolor)
- [labelSlot](components_Input_extras.InputProps.md#labelslot)
- [lazyRules](components_Input_extras.InputProps.md#lazyrules)
- [loading](components_Input_extras.InputProps.md#loading)
- [mask](components_Input_extras.InputProps.md#mask)
- [maxlength](components_Input_extras.InputProps.md#maxlength)
- [modelValue](components_Input_extras.InputProps.md#modelvalue)
- [name](components_Input_extras.InputProps.md#name)
- [noErrorIcon](components_Input_extras.InputProps.md#noerroricon)
- [outlined](components_Input_extras.InputProps.md#outlined)
- [prefix](components_Input_extras.InputProps.md#prefix)
- [reactiveRules](components_Input_extras.InputProps.md#reactiverules)
- [readonly](components_Input_extras.InputProps.md#readonly)
- [reverseFillMask](components_Input_extras.InputProps.md#reversefillmask)
- [rounded](components_Input_extras.InputProps.md#rounded)
- [rules](components_Input_extras.InputProps.md#rules)
- [shadowText](components_Input_extras.InputProps.md#shadowtext)
- [square](components_Input_extras.InputProps.md#square)
- [stackLabel](components_Input_extras.InputProps.md#stacklabel)
- [standout](components_Input_extras.InputProps.md#standout)
- [suffix](components_Input_extras.InputProps.md#suffix)
- [type](components_Input_extras.InputProps.md#type)
- [unmaskedValue](components_Input_extras.InputProps.md#unmaskedvalue)

### Methods

- [onBlur](components_Input_extras.InputProps.md#onblur)
- [onClear](components_Input_extras.InputProps.md#onclear)
- [onFocus](components_Input_extras.InputProps.md#onfocus)
- [onUpdate:modelValue](components_Input_extras.InputProps.md#onupdate:modelvalue)

## Properties

### autofocus

• `Optional` **autofocus**: `boolean`

Focus field on initial component render

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[autofocus](components_Input_extras.InputParentProps.md#autofocus)

___

### autogrow

• `Optional` **autogrow**: `boolean`

Make field autogrow along with its content (uses a textarea)

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[autogrow](components_Input_extras.InputParentProps.md#autogrow)

___

### bgColor

• `Optional` **bgColor**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[bgColor](components_Input_extras.InputParentProps.md#bgcolor)

___

### borderless

• `Optional` **borderless**: `boolean`

Use 'borderless' design for the field

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[borderless](components_Input_extras.InputParentProps.md#borderless)

___

### bottomSlots

• `Optional` **bottomSlots**: `boolean`

Enables bottom slots ('error', 'hint', 'counter')

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[bottomSlots](components_Input_extras.InputParentProps.md#bottomslots)

___

### clearIcon

• `Optional` **clearIcon**: `string`

Custom icon to use for the clear button when using along with 'clearable' prop

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[clearIcon](components_Input_extras.InputParentProps.md#clearicon)

___

### clearable

• `Optional` **clearable**: `boolean`

Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[clearable](components_Input_extras.InputParentProps.md#clearable)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[color](components_Input_extras.InputParentProps.md#color)

___

### counter

• `Optional` **counter**: `boolean`

Show an automatic counter on bottom right

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[counter](components_Input_extras.InputParentProps.md#counter)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[dark](components_Input_extras.InputParentProps.md#dark)

___

### debounce

• `Optional` **debounce**: `string` \| `number`

Debounce amount (in milliseconds) when updating model

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[debounce](components_Input_extras.InputParentProps.md#debounce)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[dense](components_Input_extras.InputParentProps.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[InputOwnProps](components_Input_extras.InputOwnProps.md).[disable](components_Input_extras.InputOwnProps.md#disable)

___

### error

• `Optional` **error**: `boolean`

Does field have validation errors?

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[error](components_Input_extras.InputParentProps.md#error)

___

### errorMessage

• `Optional` **errorMessage**: `string`

Validation error message (gets displayed only if 'error' is set to 'true')

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[errorMessage](components_Input_extras.InputParentProps.md#errormessage)

___

### fillMask

• `Optional` **fillMask**: `string` \| `boolean`

Fills string with specified characters (or underscore if value is not string) to fill mask's length

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[fillMask](components_Input_extras.InputParentProps.md#fillmask)

___

### filled

• `Optional` **filled**: `boolean`

Use 'filled' design for the field

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[filled](components_Input_extras.InputParentProps.md#filled)

___

### for

• `Optional` **for**: `string`

Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[for](components_Input_extras.InputParentProps.md#for)

___

### hideBottomSpace

• `Optional` **hideBottomSpace**: `boolean`

Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[hideBottomSpace](components_Input_extras.InputParentProps.md#hidebottomspace)

___

### hideHint

• `Optional` **hideHint**: `boolean`

Hide the helper (hint) text when field doesn't have focus

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[hideHint](components_Input_extras.InputParentProps.md#hidehint)

___

### hint

• `Optional` **hint**: `string`

Helper (hint) text which gets placed below your wrapped form component

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[hint](components_Input_extras.InputParentProps.md#hint)

___

### inputClass

• `Optional` **inputClass**: `VueClassProp`

Class definitions to be attributed to the underlying input tag

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[inputClass](components_Input_extras.InputParentProps.md#inputclass)

___

### inputStyle

• `Optional` **inputStyle**: `VueStyleProp`

Style definitions to be attributed to the underlying input tag

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[inputStyle](components_Input_extras.InputParentProps.md#inputstyle)

___

### itemAligned

• `Optional` **itemAligned**: `boolean`

Match inner content alignment to that of QItem

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[itemAligned](components_Input_extras.InputParentProps.md#itemaligned)

___

### label

• `Optional` **label**: `string`

A text label that will “float” up above the input field, once the field gets focus

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[label](components_Input_extras.InputParentProps.md#label)

___

### labelColor

• `Optional` **labelColor**: `string`

Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[labelColor](components_Input_extras.InputParentProps.md#labelcolor)

___

### labelSlot

• `Optional` **labelSlot**: `boolean`

Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[labelSlot](components_Input_extras.InputParentProps.md#labelslot)

___

### lazyRules

• `Optional` **lazyRules**: `boolean` \| ``"ondemand"``

If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[lazyRules](components_Input_extras.InputParentProps.md#lazyrules)

___

### loading

• `Optional` **loading**: `boolean`

Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[loading](components_Input_extras.InputParentProps.md#loading)

___

### mask

• `Optional` **mask**: `string`

Custom mask or one of the predefined mask names

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[mask](components_Input_extras.InputParentProps.md#mask)

___

### maxlength

• `Optional` **maxlength**: `string` \| `number`

Specify a max length of model

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[maxlength](components_Input_extras.InputParentProps.md#maxlength)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `stringU`

#### Inherited from

[InputOwnProps](components_Input_extras.InputOwnProps.md).[modelValue](components_Input_extras.InputOwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[name](components_Input_extras.InputParentProps.md#name)

___

### noErrorIcon

• `Optional` **noErrorIcon**: `boolean`

Hide error icon when there is an error

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[noErrorIcon](components_Input_extras.InputParentProps.md#noerroricon)

___

### outlined

• `Optional` **outlined**: `boolean`

Use 'outlined' design for the field

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[outlined](components_Input_extras.InputParentProps.md#outlined)

___

### prefix

• `Optional` **prefix**: `string`

Prefix

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[prefix](components_Input_extras.InputParentProps.md#prefix)

___

### reactiveRules

• `Optional` **reactiveRules**: `boolean`

By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[reactiveRules](components_Input_extras.InputParentProps.md#reactiverules)

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[readonly](components_Input_extras.InputParentProps.md#readonly)

___

### reverseFillMask

• `Optional` **reverseFillMask**: `boolean`

Fills string from the right side of the mask

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[reverseFillMask](components_Input_extras.InputParentProps.md#reversefillmask)

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a small standard border-radius for a squared shape of the component

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[rounded](components_Input_extras.InputParentProps.md#rounded)

___

### rules

• `Optional` **rules**: `ValidationRule`<`any`\>[]

Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[rules](components_Input_extras.InputParentProps.md#rules)

___

### shadowText

• `Optional` **shadowText**: `string`

Text to be displayed as shadow at the end of the text in the control; Does NOT applies to type=file

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[shadowText](components_Input_extras.InputParentProps.md#shadowtext)

___

### square

• `Optional` **square**: `boolean`

Remove border-radius so borders are squared; Overrides 'rounded' prop

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[square](components_Input_extras.InputParentProps.md#square)

___

### stackLabel

• `Optional` **stackLabel**: `boolean`

Label will be always shown above the field regardless of field content (if any)

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[stackLabel](components_Input_extras.InputParentProps.md#stacklabel)

___

### standout

• `Optional` **standout**: `string` \| `boolean`

Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[standout](components_Input_extras.InputParentProps.md#standout)

___

### suffix

• `Optional` **suffix**: `string`

Suffix

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[suffix](components_Input_extras.InputParentProps.md#suffix)

___

### type

• `Optional` **type**: ``"number"`` \| ``"date"`` \| ``"time"`` \| ``"text"`` \| ``"password"`` \| ``"textarea"`` \| ``"email"`` \| ``"search"`` \| ``"tel"`` \| ``"file"`` \| ``"url"``

Input type
Default value: text

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[type](components_Input_extras.InputParentProps.md#type)

___

### unmaskedValue

• `Optional` **unmaskedValue**: `boolean`

Model will be unmasked (won't contain tokens/separation characters)

#### Inherited from

[InputParentProps](components_Input_extras.InputParentProps.md).[unmaskedValue](components_Input_extras.InputParentProps.md#unmaskedvalue)

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

[InputParentProps](components_Input_extras.InputParentProps.md).[onBlur](components_Input_extras.InputParentProps.md#onblur)

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

[InputParentProps](components_Input_extras.InputParentProps.md).[onClear](components_Input_extras.InputParentProps.md#onclear)

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

[InputParentProps](components_Input_extras.InputParentProps.md).[onFocus](components_Input_extras.InputParentProps.md#onfocus)

___

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `stringU` | Value. |

#### Returns

`void`

#### Inherited from

[InputOwnProps](components_Input_extras.InputOwnProps.md).[onUpdate:modelValue](components_Input_extras.InputOwnProps.md#onupdate:modelvalue)
