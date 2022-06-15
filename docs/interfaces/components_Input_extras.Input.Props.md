[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Input.extras](../modules/components_Input_extras.md) / [Input](../modules/components_Input_extras.Input.md) / Props

# Interface: Props

[components/Input.extras](../modules/components_Input_extras.md).[Input](../modules/components_Input_extras.Input.md).Props

## Hierarchy

- [`ParentProps`](components_Input_extras.Input.ParentProps.md)

- [`OwnProps`](components_Input_extras.Input.OwnProps.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [autofocus](components_Input_extras.Input.Props.md#autofocus)
- [bgColor](components_Input_extras.Input.Props.md#bgcolor)
- [borderless](components_Input_extras.Input.Props.md#borderless)
- [bottomSlots](components_Input_extras.Input.Props.md#bottomslots)
- [clearIcon](components_Input_extras.Input.Props.md#clearicon)
- [clearable](components_Input_extras.Input.Props.md#clearable)
- [color](components_Input_extras.Input.Props.md#color)
- [counter](components_Input_extras.Input.Props.md#counter)
- [dark](components_Input_extras.Input.Props.md#dark)
- [dense](components_Input_extras.Input.Props.md#dense)
- [disable](components_Input_extras.Input.Props.md#disable)
- [error](components_Input_extras.Input.Props.md#error)
- [errorMessage](components_Input_extras.Input.Props.md#errormessage)
- [filled](components_Input_extras.Input.Props.md#filled)
- [focusableElement](components_Input_extras.Input.Props.md#focusableelement)
- [for](components_Input_extras.Input.Props.md#for)
- [format](components_Input_extras.Input.Props.md#format)
- [hideBottomSpace](components_Input_extras.Input.Props.md#hidebottomspace)
- [hideHint](components_Input_extras.Input.Props.md#hidehint)
- [hint](components_Input_extras.Input.Props.md#hint)
- [itemAligned](components_Input_extras.Input.Props.md#itemaligned)
- [label](components_Input_extras.Input.Props.md#label)
- [labelColor](components_Input_extras.Input.Props.md#labelcolor)
- [labelSlot](components_Input_extras.Input.Props.md#labelslot)
- [lazyRules](components_Input_extras.Input.Props.md#lazyrules)
- [loading](components_Input_extras.Input.Props.md#loading)
- [mask](components_Input_extras.Input.Props.md#mask)
- [maxlength](components_Input_extras.Input.Props.md#maxlength)
- [modelValue](components_Input_extras.Input.Props.md#modelvalue)
- [name](components_Input_extras.Input.Props.md#name)
- [noErrorIcon](components_Input_extras.Input.Props.md#noerroricon)
- [outlined](components_Input_extras.Input.Props.md#outlined)
- [placeholder](components_Input_extras.Input.Props.md#placeholder)
- [prefix](components_Input_extras.Input.Props.md#prefix)
- [reactiveRules](components_Input_extras.Input.Props.md#reactiverules)
- [readonly](components_Input_extras.Input.Props.md#readonly)
- [required](components_Input_extras.Input.Props.md#required)
- [rounded](components_Input_extras.Input.Props.md#rounded)
- [rules](components_Input_extras.Input.Props.md#rules)
- [rulesOnChange](components_Input_extras.Input.Props.md#rulesonchange)
- [rulesOnInput](components_Input_extras.Input.Props.md#rulesoninput)
- [rulesOnSubmit](components_Input_extras.Input.Props.md#rulesonsubmit)
- [square](components_Input_extras.Input.Props.md#square)
- [stackLabel](components_Input_extras.Input.Props.md#stacklabel)
- [standout](components_Input_extras.Input.Props.md#standout)
- [suffix](components_Input_extras.Input.Props.md#suffix)
- [validationOptions](components_Input_extras.Input.Props.md#validationoptions)

### Methods

- [onBlur](components_Input_extras.Input.Props.md#onblur)
- [onClear](components_Input_extras.Input.Props.md#onclear)
- [onFocus](components_Input_extras.Input.Props.md#onfocus)
- [onUpdate:modelValue](components_Input_extras.Input.Props.md#onupdate:modelvalue)

## Properties

### autofocus

• `Optional` **autofocus**: `boolean`

Focus field on initial component render

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[autofocus](components_Input_extras.Input.ParentProps.md#autofocus)

___

### bgColor

• `Optional` **bgColor**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[bgColor](components_Input_extras.Input.ParentProps.md#bgcolor)

___

### borderless

• `Optional` **borderless**: `boolean`

Use 'borderless' design for the field

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[borderless](components_Input_extras.Input.ParentProps.md#borderless)

___

### bottomSlots

• `Optional` **bottomSlots**: `boolean`

Enables bottom slots ('error', 'hint', 'counter')

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[bottomSlots](components_Input_extras.Input.ParentProps.md#bottomslots)

___

### clearIcon

• `Optional` **clearIcon**: `string`

Custom icon to use for the clear button when using along with 'clearable' prop

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[clearIcon](components_Input_extras.Input.ParentProps.md#clearicon)

___

### clearable

• `Optional` **clearable**: `boolean`

Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[clearable](components_Input_extras.Input.ParentProps.md#clearable)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[color](components_Input_extras.Input.ParentProps.md#color)

___

### counter

• `Optional` **counter**: `boolean`

Show an automatic counter on bottom right

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[counter](components_Input_extras.Input.ParentProps.md#counter)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[dark](components_Input_extras.Input.ParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[dense](components_Input_extras.Input.ParentProps.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[disable](components_Input_extras.Input.ParentProps.md#disable)

___

### error

• `Optional` **error**: `boolean`

Does field have validation errors?

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[error](components_Input_extras.Input.ParentProps.md#error)

___

### errorMessage

• `Optional` **errorMessage**: `string`

Validation error message (gets displayed only if 'error' is set to 'true')

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[errorMessage](components_Input_extras.Input.ParentProps.md#errormessage)

___

### filled

• `Optional` **filled**: `boolean`

Use 'filled' design for the field

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[filled](components_Input_extras.Input.ParentProps.md#filled)

___

### focusableElement

• `Optional` `Readonly` **focusableElement**: `HTMLElement`

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[focusableElement](components_Input_extras.Input.ParentProps.md#focusableelement)

___

### for

• `Optional` **for**: `string`

Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[for](components_Input_extras.Input.ParentProps.md#for)

___

### format

• `Optional` `Readonly` **format**: [`Format`](components_Field_extras.Field.Format.md)<`stringU`\>

Formats value.

**`param`** Value.

**`returns`** Formatted value.

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[format](components_Input_extras.Input.ParentProps.md#format)

___

### hideBottomSpace

• `Optional` **hideBottomSpace**: `boolean`

Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[hideBottomSpace](components_Input_extras.Input.ParentProps.md#hidebottomspace)

___

### hideHint

• `Optional` **hideHint**: `boolean`

Hide the helper (hint) text when field doesn't have focus

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[hideHint](components_Input_extras.Input.ParentProps.md#hidehint)

___

### hint

• `Optional` **hint**: `string`

Helper (hint) text which gets placed below your wrapped form component

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[hint](components_Input_extras.Input.ParentProps.md#hint)

___

### itemAligned

• `Optional` **itemAligned**: `boolean`

Match inner content alignment to that of QItem

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[itemAligned](components_Input_extras.Input.ParentProps.md#itemaligned)

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[label](components_Input_extras.Input.ParentProps.md#label)

___

### labelColor

• `Optional` **labelColor**: `string`

Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[labelColor](components_Input_extras.Input.ParentProps.md#labelcolor)

___

### labelSlot

• `Optional` **labelSlot**: `boolean`

Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[labelSlot](components_Input_extras.Input.ParentProps.md#labelslot)

___

### lazyRules

• `Optional` **lazyRules**: `boolean` \| ``"ondemand"``

If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[lazyRules](components_Input_extras.Input.ParentProps.md#lazyrules)

___

### loading

• `Optional` **loading**: `boolean`

Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[loading](components_Input_extras.Input.ParentProps.md#loading)

___

### mask

• `Optional` `Readonly` **mask**: `stringU`

#### Inherited from

[OwnProps](components_Input_extras.Input.OwnProps.md).[mask](components_Input_extras.Input.OwnProps.md#mask)

___

### maxlength

• `Optional` **maxlength**: `string` \| `number`

Specify a max length of model

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[maxlength](components_Input_extras.Input.ParentProps.md#maxlength)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `stringU`

#### Inherited from

[OwnProps](components_Input_extras.Input.OwnProps.md).[modelValue](components_Input_extras.Input.OwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[name](components_Input_extras.Input.ParentProps.md#name)

___

### noErrorIcon

• `Optional` **noErrorIcon**: `boolean`

Hide error icon when there is an error

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[noErrorIcon](components_Input_extras.Input.ParentProps.md#noerroricon)

___

### outlined

• `Optional` **outlined**: `boolean`

Use 'outlined' design for the field

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[outlined](components_Input_extras.Input.ParentProps.md#outlined)

___

### placeholder

• **placeholder**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[placeholder](components_Input_extras.Input.ParentProps.md#placeholder)

___

### prefix

• `Optional` **prefix**: `string`

Prefix

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[prefix](components_Input_extras.Input.ParentProps.md#prefix)

___

### reactiveRules

• `Optional` **reactiveRules**: `boolean`

By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[reactiveRules](components_Input_extras.Input.ParentProps.md#reactiverules)

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[readonly](components_Input_extras.Input.ParentProps.md#readonly)

___

### required

• `Optional` `Readonly` **required**: `booleanU`

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[required](components_Input_extras.Input.ParentProps.md#required)

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a small standard border-radius for a squared shape of the component

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[rounded](components_Input_extras.Input.ParentProps.md#rounded)

___

### rules

• `Optional` **rules**: `ValidationRule`<`any`\>[]

Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[rules](components_Input_extras.Input.ParentProps.md#rules)

___

### rulesOnChange

• `Optional` `Readonly` **rulesOnChange**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`stringU`\>

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[rulesOnChange](components_Input_extras.Input.ParentProps.md#rulesonchange)

___

### rulesOnInput

• `Optional` `Readonly` **rulesOnInput**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`stringU`\>

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[rulesOnInput](components_Input_extras.Input.ParentProps.md#rulesoninput)

___

### rulesOnSubmit

• `Optional` `Readonly` **rulesOnSubmit**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`stringU`\>

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[rulesOnSubmit](components_Input_extras.Input.ParentProps.md#rulesonsubmit)

___

### square

• `Optional` **square**: `boolean`

Remove border-radius so borders are squared; Overrides 'rounded' prop

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[square](components_Input_extras.Input.ParentProps.md#square)

___

### stackLabel

• `Optional` **stackLabel**: `boolean`

Label will be always shown above the field regardless of field content (if any)

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[stackLabel](components_Input_extras.Input.ParentProps.md#stacklabel)

___

### standout

• `Optional` **standout**: `string` \| `boolean`

Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[standout](components_Input_extras.Input.ParentProps.md#standout)

___

### suffix

• `Optional` **suffix**: `string`

Suffix

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[suffix](components_Input_extras.Input.ParentProps.md#suffix)

___

### validationOptions

• `Optional` `Readonly` **validationOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `label?` | `Key`<`Word`\> |
| `max?` | `stringU` |
| `maxErrorMessage?` | `Key`<`Word`\> |
| `min?` | `stringU` |
| `minErrorMessage?` | `Key`<`Word`\> |
| `required?` | `boolean` |
| `requiredErrorMessage?` | `Key`<`Word`\> |
| `format?` | (`value`: `unknown`) => `T` |
| `minMaxFormat?` | (`value`: `Exclude`<`T`, `empty`\>) => `string` |

#### Inherited from

[ParentProps](components_Input_extras.Input.ParentProps.md).[validationOptions](components_Input_extras.Input.ParentProps.md#validationoptions)

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

[ParentProps](components_Input_extras.Input.ParentProps.md).[onBlur](components_Input_extras.Input.ParentProps.md#onblur)

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

[ParentProps](components_Input_extras.Input.ParentProps.md).[onClear](components_Input_extras.Input.ParentProps.md#onclear)

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

[ParentProps](components_Input_extras.Input.ParentProps.md).[onFocus](components_Input_extras.Input.ParentProps.md#onfocus)

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

[OwnProps](components_Input_extras.Input.OwnProps.md).[onUpdate:modelValue](components_Input_extras.Input.OwnProps.md#onupdate:modelvalue)
