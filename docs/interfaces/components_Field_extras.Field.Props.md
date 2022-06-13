[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Field.extras](../modules/components_Field_extras.md) / [Field](../modules/components_Field_extras.Field.md) / Props

# Interface: Props<T\>

[components/Field.extras](../modules/components_Field_extras.md).[Field](../modules/components_Field_extras.Field.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ParentProps`](components_Field_extras.Field.ParentProps.md)

- [`PluginProps`](components_Field_extras.Field.PluginProps.md)<`T`\>

- [`OwnProps`](components_Field_extras.Field.OwnProps.md)<`T`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [autofocus](components_Field_extras.Field.Props.md#autofocus)
- [bgColor](components_Field_extras.Field.Props.md#bgcolor)
- [borderless](components_Field_extras.Field.Props.md#borderless)
- [bottomSlots](components_Field_extras.Field.Props.md#bottomslots)
- [clearIcon](components_Field_extras.Field.Props.md#clearicon)
- [clearable](components_Field_extras.Field.Props.md#clearable)
- [color](components_Field_extras.Field.Props.md#color)
- [counter](components_Field_extras.Field.Props.md#counter)
- [dark](components_Field_extras.Field.Props.md#dark)
- [dense](components_Field_extras.Field.Props.md#dense)
- [disable](components_Field_extras.Field.Props.md#disable)
- [error](components_Field_extras.Field.Props.md#error)
- [errorMessage](components_Field_extras.Field.Props.md#errormessage)
- [filled](components_Field_extras.Field.Props.md#filled)
- [focusableElement](components_Field_extras.Field.Props.md#focusableelement)
- [for](components_Field_extras.Field.Props.md#for)
- [hideBottomSpace](components_Field_extras.Field.Props.md#hidebottomspace)
- [hideHint](components_Field_extras.Field.Props.md#hidehint)
- [hint](components_Field_extras.Field.Props.md#hint)
- [itemAligned](components_Field_extras.Field.Props.md#itemaligned)
- [label](components_Field_extras.Field.Props.md#label)
- [labelColor](components_Field_extras.Field.Props.md#labelcolor)
- [labelSlot](components_Field_extras.Field.Props.md#labelslot)
- [lazyRules](components_Field_extras.Field.Props.md#lazyrules)
- [loading](components_Field_extras.Field.Props.md#loading)
- [maxlength](components_Field_extras.Field.Props.md#maxlength)
- [modelValue](components_Field_extras.Field.Props.md#modelvalue)
- [name](components_Field_extras.Field.Props.md#name)
- [noErrorIcon](components_Field_extras.Field.Props.md#noerroricon)
- [outlined](components_Field_extras.Field.Props.md#outlined)
- [placeholder](components_Field_extras.Field.Props.md#placeholder)
- [prefix](components_Field_extras.Field.Props.md#prefix)
- [reactiveRules](components_Field_extras.Field.Props.md#reactiverules)
- [readonly](components_Field_extras.Field.Props.md#readonly)
- [required](components_Field_extras.Field.Props.md#required)
- [rounded](components_Field_extras.Field.Props.md#rounded)
- [rules](components_Field_extras.Field.Props.md#rules)
- [rulesOnChange](components_Field_extras.Field.Props.md#rulesonchange)
- [rulesOnInput](components_Field_extras.Field.Props.md#rulesoninput)
- [rulesOnSubmit](components_Field_extras.Field.Props.md#rulesonsubmit)
- [square](components_Field_extras.Field.Props.md#square)
- [stackLabel](components_Field_extras.Field.Props.md#stacklabel)
- [standout](components_Field_extras.Field.Props.md#standout)
- [suffix](components_Field_extras.Field.Props.md#suffix)
- [validationOptions](components_Field_extras.Field.Props.md#validationoptions)

### Methods

- [onBlur](components_Field_extras.Field.Props.md#onblur)
- [onClear](components_Field_extras.Field.Props.md#onclear)
- [onFocus](components_Field_extras.Field.Props.md#onfocus)
- [onUpdate:modelValue](components_Field_extras.Field.Props.md#onupdate:modelvalue)

## Properties

### autofocus

• `Optional` **autofocus**: `boolean`

Focus field on initial component render

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[autofocus](components_Field_extras.Field.ParentProps.md#autofocus)

___

### bgColor

• `Optional` **bgColor**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[bgColor](components_Field_extras.Field.ParentProps.md#bgcolor)

___

### borderless

• `Optional` **borderless**: `boolean`

Use 'borderless' design for the field

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[borderless](components_Field_extras.Field.ParentProps.md#borderless)

___

### bottomSlots

• `Optional` **bottomSlots**: `boolean`

Enables bottom slots ('error', 'hint', 'counter')

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[bottomSlots](components_Field_extras.Field.ParentProps.md#bottomslots)

___

### clearIcon

• `Optional` **clearIcon**: `string`

Custom icon to use for the clear button when using along with 'clearable' prop

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[clearIcon](components_Field_extras.Field.ParentProps.md#clearicon)

___

### clearable

• `Optional` **clearable**: `boolean`

Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[clearable](components_Field_extras.Field.ParentProps.md#clearable)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[color](components_Field_extras.Field.ParentProps.md#color)

___

### counter

• `Optional` **counter**: `boolean`

Show an automatic counter on bottom right

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[counter](components_Field_extras.Field.ParentProps.md#counter)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[dark](components_Field_extras.Field.ParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[dense](components_Field_extras.Field.ParentProps.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[disable](components_Field_extras.Field.OwnProps.md#disable)

___

### error

• `Optional` **error**: `boolean`

Does field have validation errors?

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[error](components_Field_extras.Field.ParentProps.md#error)

___

### errorMessage

• `Optional` **errorMessage**: `string`

Validation error message (gets displayed only if 'error' is set to 'true')

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[errorMessage](components_Field_extras.Field.ParentProps.md#errormessage)

___

### filled

• `Optional` **filled**: `boolean`

Use 'filled' design for the field

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[filled](components_Field_extras.Field.ParentProps.md#filled)

___

### focusableElement

• `Optional` `Readonly` **focusableElement**: `HTMLElement`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[focusableElement](components_Field_extras.Field.OwnProps.md#focusableelement)

___

### for

• `Optional` **for**: `string`

Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[for](components_Field_extras.Field.ParentProps.md#for)

___

### hideBottomSpace

• `Optional` **hideBottomSpace**: `boolean`

Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[hideBottomSpace](components_Field_extras.Field.ParentProps.md#hidebottomspace)

___

### hideHint

• `Optional` **hideHint**: `boolean`

Hide the helper (hint) text when field doesn't have focus

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[hideHint](components_Field_extras.Field.ParentProps.md#hidehint)

___

### hint

• `Optional` **hint**: `string`

Helper (hint) text which gets placed below your wrapped form component

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[hint](components_Field_extras.Field.ParentProps.md#hint)

___

### itemAligned

• `Optional` **itemAligned**: `boolean`

Match inner content alignment to that of QItem

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[itemAligned](components_Field_extras.Field.ParentProps.md#itemaligned)

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[label](components_Field_extras.Field.PluginProps.md#label)

___

### labelColor

• `Optional` **labelColor**: `string`

Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[labelColor](components_Field_extras.Field.ParentProps.md#labelcolor)

___

### labelSlot

• `Optional` **labelSlot**: `boolean`

Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[labelSlot](components_Field_extras.Field.ParentProps.md#labelslot)

___

### lazyRules

• `Optional` **lazyRules**: `boolean` \| ``"ondemand"``

If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[lazyRules](components_Field_extras.Field.ParentProps.md#lazyrules)

___

### loading

• `Optional` **loading**: `boolean`

Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[loading](components_Field_extras.Field.ParentProps.md#loading)

___

### maxlength

• `Optional` **maxlength**: `string` \| `number`

Specify a max length of model

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[maxlength](components_Field_extras.Field.ParentProps.md#maxlength)

___

### modelValue

• `Readonly` **modelValue**: `T`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[modelValue](components_Field_extras.Field.OwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[name](components_Field_extras.Field.ParentProps.md#name)

___

### noErrorIcon

• `Optional` **noErrorIcon**: `boolean`

Hide error icon when there is an error

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[noErrorIcon](components_Field_extras.Field.ParentProps.md#noerroricon)

___

### outlined

• `Optional` **outlined**: `boolean`

Use 'outlined' design for the field

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[outlined](components_Field_extras.Field.ParentProps.md#outlined)

___

### placeholder

• **placeholder**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[placeholder](components_Field_extras.Field.PluginProps.md#placeholder)

___

### prefix

• `Optional` **prefix**: `string`

Prefix

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[prefix](components_Field_extras.Field.ParentProps.md#prefix)

___

### reactiveRules

• `Optional` **reactiveRules**: `boolean`

By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[reactiveRules](components_Field_extras.Field.ParentProps.md#reactiverules)

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[readonly](components_Field_extras.Field.ParentProps.md#readonly)

___

### required

• `Optional` `Readonly` **required**: `booleanU`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[required](components_Field_extras.Field.OwnProps.md#required)

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a small standard border-radius for a squared shape of the component

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[rounded](components_Field_extras.Field.ParentProps.md#rounded)

___

### rules

• `Optional` **rules**: `ValidationRule`<`any`\>[]

Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[rules](components_Field_extras.Field.ParentProps.md#rules)

___

### rulesOnChange

• `Optional` `Readonly` **rulesOnChange**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[rulesOnChange](components_Field_extras.Field.PluginProps.md#rulesonchange)

___

### rulesOnInput

• `Optional` `Readonly` **rulesOnInput**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[rulesOnInput](components_Field_extras.Field.PluginProps.md#rulesoninput)

___

### rulesOnSubmit

• `Optional` `Readonly` **rulesOnSubmit**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[rulesOnSubmit](components_Field_extras.Field.PluginProps.md#rulesonsubmit)

___

### square

• `Optional` **square**: `boolean`

Remove border-radius so borders are squared; Overrides 'rounded' prop

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[square](components_Field_extras.Field.ParentProps.md#square)

___

### stackLabel

• `Optional` **stackLabel**: `boolean`

Label will be always shown above the field regardless of field content (if any)

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[stackLabel](components_Field_extras.Field.ParentProps.md#stacklabel)

___

### standout

• `Optional` **standout**: `string` \| `boolean`

Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[standout](components_Field_extras.Field.ParentProps.md#standout)

___

### suffix

• `Optional` **suffix**: `string`

Suffix

#### Inherited from

[ParentProps](components_Field_extras.Field.ParentProps.md).[suffix](components_Field_extras.Field.ParentProps.md#suffix)

___

### validationOptions

• `Optional` `Readonly` **validationOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `label?` | `Key`<`Word`\> |
| `max?` | `T` |
| `maxErrorMessage?` | `Key`<`Word`\> |
| `min?` | `T` |
| `minErrorMessage?` | `Key`<`Word`\> |
| `required?` | `boolean` |
| `requiredErrorMessage?` | `Key`<`Word`\> |
| `format?` | (`value`: `unknown`) => `T` |
| `minMaxFormat?` | (`value`: `Exclude`<`T`, `empty`\>) => `string` |

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[validationOptions](components_Field_extras.Field.OwnProps.md#validationoptions)

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

[ParentProps](components_Field_extras.Field.ParentProps.md).[onBlur](components_Field_extras.Field.ParentProps.md#onblur)

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

[ParentProps](components_Field_extras.Field.ParentProps.md).[onClear](components_Field_extras.Field.ParentProps.md#onclear)

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

[ParentProps](components_Field_extras.Field.ParentProps.md).[onFocus](components_Field_extras.Field.ParentProps.md#onfocus)

___

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[onUpdate:modelValue](components_Field_extras.Field.OwnProps.md#onupdate:modelvalue)
