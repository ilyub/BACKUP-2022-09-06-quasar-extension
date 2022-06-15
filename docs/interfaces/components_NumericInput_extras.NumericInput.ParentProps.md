[Quasar extension](../index.md) / [Exports](../modules.md) / [components/NumericInput.extras](../modules/components_NumericInput_extras.md) / [NumericInput](../modules/components_NumericInput_extras.NumericInput.md) / ParentProps

# Interface: ParentProps

[components/NumericInput.extras](../modules/components_NumericInput_extras.md).[NumericInput](../modules/components_NumericInput_extras.NumericInput.md).ParentProps

## Hierarchy

- `Omit`<[`Props`](components_Field_extras.Field.Props.md)<`numberU`\>, keyof [`OwnProps`](components_NumericInput_extras.NumericInput.OwnProps.md)\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_NumericInput_extras.NumericInput.Props.md)

## Table of contents

### Properties

- [autofocus](components_NumericInput_extras.NumericInput.ParentProps.md#autofocus)
- [bgColor](components_NumericInput_extras.NumericInput.ParentProps.md#bgcolor)
- [borderless](components_NumericInput_extras.NumericInput.ParentProps.md#borderless)
- [bottomSlots](components_NumericInput_extras.NumericInput.ParentProps.md#bottomslots)
- [clearIcon](components_NumericInput_extras.NumericInput.ParentProps.md#clearicon)
- [clearable](components_NumericInput_extras.NumericInput.ParentProps.md#clearable)
- [color](components_NumericInput_extras.NumericInput.ParentProps.md#color)
- [counter](components_NumericInput_extras.NumericInput.ParentProps.md#counter)
- [dark](components_NumericInput_extras.NumericInput.ParentProps.md#dark)
- [dense](components_NumericInput_extras.NumericInput.ParentProps.md#dense)
- [disable](components_NumericInput_extras.NumericInput.ParentProps.md#disable)
- [error](components_NumericInput_extras.NumericInput.ParentProps.md#error)
- [errorMessage](components_NumericInput_extras.NumericInput.ParentProps.md#errormessage)
- [filled](components_NumericInput_extras.NumericInput.ParentProps.md#filled)
- [focusableElement](components_NumericInput_extras.NumericInput.ParentProps.md#focusableelement)
- [for](components_NumericInput_extras.NumericInput.ParentProps.md#for)
- [format](components_NumericInput_extras.NumericInput.ParentProps.md#format)
- [hideBottomSpace](components_NumericInput_extras.NumericInput.ParentProps.md#hidebottomspace)
- [hideHint](components_NumericInput_extras.NumericInput.ParentProps.md#hidehint)
- [hint](components_NumericInput_extras.NumericInput.ParentProps.md#hint)
- [itemAligned](components_NumericInput_extras.NumericInput.ParentProps.md#itemaligned)
- [label](components_NumericInput_extras.NumericInput.ParentProps.md#label)
- [labelColor](components_NumericInput_extras.NumericInput.ParentProps.md#labelcolor)
- [labelSlot](components_NumericInput_extras.NumericInput.ParentProps.md#labelslot)
- [lazyRules](components_NumericInput_extras.NumericInput.ParentProps.md#lazyrules)
- [loading](components_NumericInput_extras.NumericInput.ParentProps.md#loading)
- [maxlength](components_NumericInput_extras.NumericInput.ParentProps.md#maxlength)
- [name](components_NumericInput_extras.NumericInput.ParentProps.md#name)
- [noErrorIcon](components_NumericInput_extras.NumericInput.ParentProps.md#noerroricon)
- [outlined](components_NumericInput_extras.NumericInput.ParentProps.md#outlined)
- [placeholder](components_NumericInput_extras.NumericInput.ParentProps.md#placeholder)
- [prefix](components_NumericInput_extras.NumericInput.ParentProps.md#prefix)
- [reactiveRules](components_NumericInput_extras.NumericInput.ParentProps.md#reactiverules)
- [readonly](components_NumericInput_extras.NumericInput.ParentProps.md#readonly)
- [rounded](components_NumericInput_extras.NumericInput.ParentProps.md#rounded)
- [rules](components_NumericInput_extras.NumericInput.ParentProps.md#rules)
- [rulesOnChange](components_NumericInput_extras.NumericInput.ParentProps.md#rulesonchange)
- [rulesOnInput](components_NumericInput_extras.NumericInput.ParentProps.md#rulesoninput)
- [rulesOnSubmit](components_NumericInput_extras.NumericInput.ParentProps.md#rulesonsubmit)
- [square](components_NumericInput_extras.NumericInput.ParentProps.md#square)
- [stackLabel](components_NumericInput_extras.NumericInput.ParentProps.md#stacklabel)
- [standout](components_NumericInput_extras.NumericInput.ParentProps.md#standout)
- [suffix](components_NumericInput_extras.NumericInput.ParentProps.md#suffix)

### Methods

- [onBlur](components_NumericInput_extras.NumericInput.ParentProps.md#onblur)
- [onClear](components_NumericInput_extras.NumericInput.ParentProps.md#onclear)
- [onFocus](components_NumericInput_extras.NumericInput.ParentProps.md#onfocus)

## Properties

### autofocus

• `Optional` **autofocus**: `boolean`

Focus field on initial component render

#### Inherited from

Omit.autofocus

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

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

Omit.dense

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

Omit.disable

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

### filled

• `Optional` **filled**: `boolean`

Use 'filled' design for the field

#### Inherited from

Omit.filled

___

### focusableElement

• `Optional` `Readonly` **focusableElement**: `HTMLElement`

#### Inherited from

Omit.focusableElement

___

### for

• `Optional` **for**: `string`

Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well

#### Inherited from

Omit.for

___

### format

• `Optional` `Readonly` **format**: [`Format`](components_Field_extras.Field.Format.md)<`numberU`\>

Formats value.

**`param`** Value.

**`returns`** Formatted value.

#### Inherited from

Omit.format

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

### itemAligned

• `Optional` **itemAligned**: `boolean`

Match inner content alignment to that of QItem

#### Inherited from

Omit.itemAligned

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

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

### placeholder

• **placeholder**: `undefined` \| `Key`<`Word`\>

#### Inherited from

Omit.placeholder

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

### rulesOnChange

• `Optional` `Readonly` **rulesOnChange**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`numberU`\>

#### Inherited from

Omit.rulesOnChange

___

### rulesOnInput

• `Optional` `Readonly` **rulesOnInput**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`numberU`\>

#### Inherited from

Omit.rulesOnInput

___

### rulesOnSubmit

• `Optional` `Readonly` **rulesOnSubmit**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`numberU`\>

#### Inherited from

Omit.rulesOnSubmit

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
