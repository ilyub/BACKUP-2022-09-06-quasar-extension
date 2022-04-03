[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Select.extras](../modules/components_Select_extras.md) / SelectProps

# Interface: SelectProps<T\>

[components/Select.extras](../modules/components_Select_extras.md).SelectProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`SelectParentProps`](components_Select_extras.SelectParentProps.md)

- [`SelectOwnProps`](components_Select_extras.SelectOwnProps.md)<`T`\>

  ↳ **`SelectProps`**

## Table of contents

### Properties

- [autocomplete](components_Select_extras.SelectProps.md#autocomplete)
- [autofocus](components_Select_extras.SelectProps.md#autofocus)
- [behavior](components_Select_extras.SelectProps.md#behavior)
- [bgColor](components_Select_extras.SelectProps.md#bgcolor)
- [borderless](components_Select_extras.SelectProps.md#borderless)
- [bottomSlots](components_Select_extras.SelectProps.md#bottomslots)
- [clearIcon](components_Select_extras.SelectProps.md#clearicon)
- [clearable](components_Select_extras.SelectProps.md#clearable)
- [color](components_Select_extras.SelectProps.md#color)
- [counter](components_Select_extras.SelectProps.md#counter)
- [dark](components_Select_extras.SelectProps.md#dark)
- [dense](components_Select_extras.SelectProps.md#dense)
- [disable](components_Select_extras.SelectProps.md#disable)
- [displayValue](components_Select_extras.SelectProps.md#displayvalue)
- [displayValueHtml](components_Select_extras.SelectProps.md#displayvaluehtml)
- [dropdownIcon](components_Select_extras.SelectProps.md#dropdownicon)
- [emitValue](components_Select_extras.SelectProps.md#emitvalue)
- [error](components_Select_extras.SelectProps.md#error)
- [errorMessage](components_Select_extras.SelectProps.md#errormessage)
- [fillInput](components_Select_extras.SelectProps.md#fillinput)
- [filled](components_Select_extras.SelectProps.md#filled)
- [for](components_Select_extras.SelectProps.md#for)
- [hideBottomSpace](components_Select_extras.SelectProps.md#hidebottomspace)
- [hideDropdownIcon](components_Select_extras.SelectProps.md#hidedropdownicon)
- [hideHint](components_Select_extras.SelectProps.md#hidehint)
- [hideSelected](components_Select_extras.SelectProps.md#hideselected)
- [hint](components_Select_extras.SelectProps.md#hint)
- [initialLabel](components_Select_extras.SelectProps.md#initiallabel)
- [inputClass](components_Select_extras.SelectProps.md#inputclass)
- [inputDebounce](components_Select_extras.SelectProps.md#inputdebounce)
- [inputStyle](components_Select_extras.SelectProps.md#inputstyle)
- [itemAligned](components_Select_extras.SelectProps.md#itemaligned)
- [label](components_Select_extras.SelectProps.md#label)
- [labelColor](components_Select_extras.SelectProps.md#labelcolor)
- [labelSlot](components_Select_extras.SelectProps.md#labelslot)
- [lazyRules](components_Select_extras.SelectProps.md#lazyrules)
- [loading](components_Select_extras.SelectProps.md#loading)
- [mapOptions](components_Select_extras.SelectProps.md#mapoptions)
- [maxValues](components_Select_extras.SelectProps.md#maxvalues)
- [menuAnchor](components_Select_extras.SelectProps.md#menuanchor)
- [menuOffset](components_Select_extras.SelectProps.md#menuoffset)
- [menuSelf](components_Select_extras.SelectProps.md#menuself)
- [menuShrink](components_Select_extras.SelectProps.md#menushrink)
- [modelValue](components_Select_extras.SelectProps.md#modelvalue)
- [multiple](components_Select_extras.SelectProps.md#multiple)
- [name](components_Select_extras.SelectProps.md#name)
- [newValueMode](components_Select_extras.SelectProps.md#newvaluemode)
- [noErrorIcon](components_Select_extras.SelectProps.md#noerroricon)
- [optionDisable](components_Select_extras.SelectProps.md#optiondisable)
- [optionLabel](components_Select_extras.SelectProps.md#optionlabel)
- [optionValue](components_Select_extras.SelectProps.md#optionvalue)
- [options](components_Select_extras.SelectProps.md#options)
- [optionsCover](components_Select_extras.SelectProps.md#optionscover)
- [optionsDark](components_Select_extras.SelectProps.md#optionsdark)
- [optionsDense](components_Select_extras.SelectProps.md#optionsdense)
- [optionsHtml](components_Select_extras.SelectProps.md#optionshtml)
- [optionsSelectedClass](components_Select_extras.SelectProps.md#optionsselectedclass)
- [outlined](components_Select_extras.SelectProps.md#outlined)
- [popupContentClass](components_Select_extras.SelectProps.md#popupcontentclass)
- [popupContentStyle](components_Select_extras.SelectProps.md#popupcontentstyle)
- [prefix](components_Select_extras.SelectProps.md#prefix)
- [reactiveRules](components_Select_extras.SelectProps.md#reactiverules)
- [readonly](components_Select_extras.SelectProps.md#readonly)
- [rounded](components_Select_extras.SelectProps.md#rounded)
- [rules](components_Select_extras.SelectProps.md#rules)
- [square](components_Select_extras.SelectProps.md#square)
- [stackLabel](components_Select_extras.SelectProps.md#stacklabel)
- [standout](components_Select_extras.SelectProps.md#standout)
- [suffix](components_Select_extras.SelectProps.md#suffix)
- [tabindex](components_Select_extras.SelectProps.md#tabindex)
- [tableColspan](components_Select_extras.SelectProps.md#tablecolspan)
- [transitionDuration](components_Select_extras.SelectProps.md#transitionduration)
- [transitionHide](components_Select_extras.SelectProps.md#transitionhide)
- [transitionShow](components_Select_extras.SelectProps.md#transitionshow)
- [useChips](components_Select_extras.SelectProps.md#usechips)
- [useInput](components_Select_extras.SelectProps.md#useinput)
- [virtualScrollHorizontal](components_Select_extras.SelectProps.md#virtualscrollhorizontal)
- [virtualScrollItemSize](components_Select_extras.SelectProps.md#virtualscrollitemsize)
- [virtualScrollSliceRatioAfter](components_Select_extras.SelectProps.md#virtualscrollsliceratioafter)
- [virtualScrollSliceRatioBefore](components_Select_extras.SelectProps.md#virtualscrollsliceratiobefore)
- [virtualScrollSliceSize](components_Select_extras.SelectProps.md#virtualscrollslicesize)
- [virtualScrollStickySizeEnd](components_Select_extras.SelectProps.md#virtualscrollstickysizeend)
- [virtualScrollStickySizeStart](components_Select_extras.SelectProps.md#virtualscrollstickysizestart)

### Methods

- [onAdd](components_Select_extras.SelectProps.md#onadd)
- [onClear](components_Select_extras.SelectProps.md#onclear)
- [onFilter](components_Select_extras.SelectProps.md#onfilter)
- [onFilterAbort](components_Select_extras.SelectProps.md#onfilterabort)
- [onInputValue](components_Select_extras.SelectProps.md#oninputvalue)
- [onNewValue](components_Select_extras.SelectProps.md#onnewvalue)
- [onPopupHide](components_Select_extras.SelectProps.md#onpopuphide)
- [onPopupShow](components_Select_extras.SelectProps.md#onpopupshow)
- [onRemove](components_Select_extras.SelectProps.md#onremove)
- [onUpdate:modelValue](components_Select_extras.SelectProps.md#onupdate:modelvalue)
- [onVirtualScroll](components_Select_extras.SelectProps.md#onvirtualscroll)

## Properties

### autocomplete

• `Optional` **autocomplete**: `string`

Autocomplete attribute for field

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[autocomplete](components_Select_extras.SelectParentProps.md#autocomplete)

___

### autofocus

• `Optional` **autofocus**: `boolean`

Focus field on initial component render

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[autofocus](components_Select_extras.SelectParentProps.md#autofocus)

___

### behavior

• `Optional` **behavior**: ``"default"`` \| ``"menu"`` \| ``"dialog"``

Overrides the default dynamic mode of showing as menu on desktop and dialog on mobiles
Default value: default

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[behavior](components_Select_extras.SelectParentProps.md#behavior)

___

### bgColor

• `Optional` **bgColor**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[bgColor](components_Select_extras.SelectParentProps.md#bgcolor)

___

### borderless

• `Optional` **borderless**: `boolean`

Use 'borderless' design for the field

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[borderless](components_Select_extras.SelectParentProps.md#borderless)

___

### bottomSlots

• `Optional` **bottomSlots**: `boolean`

Enables bottom slots ('error', 'hint', 'counter')

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[bottomSlots](components_Select_extras.SelectParentProps.md#bottomslots)

___

### clearIcon

• `Optional` **clearIcon**: `string`

Custom icon to use for the clear button when using along with 'clearable' prop

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[clearIcon](components_Select_extras.SelectParentProps.md#clearicon)

___

### clearable

• `Optional` **clearable**: `boolean`

Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[clearable](components_Select_extras.SelectParentProps.md#clearable)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[color](components_Select_extras.SelectParentProps.md#color)

___

### counter

• `Optional` **counter**: `boolean`

Show an automatic counter on bottom right

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[counter](components_Select_extras.SelectParentProps.md#counter)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[dark](components_Select_extras.SelectParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[dense](components_Select_extras.SelectParentProps.md#dense)

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[disable](components_Select_extras.SelectParentProps.md#disable)

___

### displayValue

• `Optional` **displayValue**: `string` \| `number`

Override default selection string, if not using 'selected' slot/scoped slot and if not using 'use-chips' prop

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[displayValue](components_Select_extras.SelectParentProps.md#displayvalue)

___

### displayValueHtml

• `Optional` **displayValueHtml**: `boolean`

Force render the selected option(s) as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'selected' or 'selected-item' slots!

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[displayValueHtml](components_Select_extras.SelectParentProps.md#displayvaluehtml)

___

### dropdownIcon

• `Optional` **dropdownIcon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[dropdownIcon](components_Select_extras.SelectParentProps.md#dropdownicon)

___

### emitValue

• `Optional` **emitValue**: `boolean`

Update model with the value of the selected option instead of the whole option

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[emitValue](components_Select_extras.SelectParentProps.md#emitvalue)

___

### error

• `Optional` **error**: `boolean`

Does field have validation errors?

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[error](components_Select_extras.SelectParentProps.md#error)

___

### errorMessage

• `Optional` **errorMessage**: `string`

Validation error message (gets displayed only if 'error' is set to 'true')

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[errorMessage](components_Select_extras.SelectParentProps.md#errormessage)

___

### fillInput

• `Optional` **fillInput**: `boolean`

Fills the input with current value; Useful along with 'hide-selected'; Does NOT works along with 'multiple' selection

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[fillInput](components_Select_extras.SelectParentProps.md#fillinput)

___

### filled

• `Optional` **filled**: `boolean`

Use 'filled' design for the field

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[filled](components_Select_extras.SelectParentProps.md#filled)

___

### for

• `Optional` **for**: `string`

Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[for](components_Select_extras.SelectParentProps.md#for)

___

### hideBottomSpace

• `Optional` **hideBottomSpace**: `boolean`

Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[hideBottomSpace](components_Select_extras.SelectParentProps.md#hidebottomspace)

___

### hideDropdownIcon

• `Optional` **hideDropdownIcon**: `boolean`

Hides dropdown icon

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[hideDropdownIcon](components_Select_extras.SelectParentProps.md#hidedropdownicon)

___

### hideHint

• `Optional` **hideHint**: `boolean`

Hide the helper (hint) text when field doesn't have focus

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[hideHint](components_Select_extras.SelectParentProps.md#hidehint)

___

### hideSelected

• `Optional` **hideSelected**: `boolean`

Hides selection; Use the underlying input tag to hold the label (instead of showing it to the right of the input) of the selected option; Only works for non 'multiple' Selects

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[hideSelected](components_Select_extras.SelectParentProps.md#hideselected)

___

### hint

• `Optional` **hint**: `string`

Helper (hint) text which gets placed below your wrapped form component

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[hint](components_Select_extras.SelectParentProps.md#hint)

___

### initialLabel

• `Optional` `Readonly` **initialLabel**: `stringU`

#### Inherited from

[SelectOwnProps](components_Select_extras.SelectOwnProps.md).[initialLabel](components_Select_extras.SelectOwnProps.md#initiallabel)

___

### inputClass

• `Optional` **inputClass**: `VueClassProp`

Class definitions to be attributed to the underlying input tag

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[inputClass](components_Select_extras.SelectParentProps.md#inputclass)

___

### inputDebounce

• `Optional` **inputDebounce**: `string` \| `number`

Debounce the input model update with an amount of milliseconds
Default value: 500

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[inputDebounce](components_Select_extras.SelectParentProps.md#inputdebounce)

___

### inputStyle

• `Optional` **inputStyle**: `VueStyleProp`

Style definitions to be attributed to the underlying input tag

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[inputStyle](components_Select_extras.SelectParentProps.md#inputstyle)

___

### itemAligned

• `Optional` **itemAligned**: `boolean`

Match inner content alignment to that of QItem

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[itemAligned](components_Select_extras.SelectParentProps.md#itemaligned)

___

### label

• `Optional` **label**: `string`

A text label that will “float” up above the input field, once the field gets focus

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[label](components_Select_extras.SelectParentProps.md#label)

___

### labelColor

• `Optional` **labelColor**: `string`

Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[labelColor](components_Select_extras.SelectParentProps.md#labelcolor)

___

### labelSlot

• `Optional` **labelSlot**: `boolean`

Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[labelSlot](components_Select_extras.SelectParentProps.md#labelslot)

___

### lazyRules

• `Optional` **lazyRules**: `boolean` \| ``"ondemand"``

If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[lazyRules](components_Select_extras.SelectParentProps.md#lazyrules)

___

### loading

• `Optional` **loading**: `boolean`

Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[loading](components_Select_extras.SelectParentProps.md#loading)

___

### mapOptions

• `Optional` **mapOptions**: `boolean`

Try to map labels of model from 'options' Array; has a small performance penalty; If you are using emit-value you will probably need to use map-options to display the label text in the select field rather than the value;  Refer to the 'Affecting model' section above

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[mapOptions](components_Select_extras.SelectParentProps.md#mapoptions)

___

### maxValues

• `Optional` **maxValues**: `string` \| `number`

Allow a maximum number of selections that the user can do

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[maxValues](components_Select_extras.SelectParentProps.md#maxvalues)

___

### menuAnchor

• `Optional` **menuAnchor**: ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center left"`` \| ``"center middle"`` \| ``"center right"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the starting position or anchor point of the options list relative to the field (only in menu mode)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[menuAnchor](components_Select_extras.SelectParentProps.md#menuanchor)

___

### menuOffset

• `Optional` **menuOffset**: `any`[]

An array of two numbers to offset the options list horizontally and vertically in pixels (only in menu mode)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[menuOffset](components_Select_extras.SelectParentProps.md#menuoffset)

___

### menuSelf

• `Optional` **menuSelf**: ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center left"`` \| ``"center middle"`` \| ``"center right"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the options list's own position relative to its target (only in menu mode)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[menuSelf](components_Select_extras.SelectParentProps.md#menuself)

___

### menuShrink

• `Optional` **menuShrink**: `boolean`

Allow the options list to be narrower than the field (only in menu mode)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[menuShrink](components_Select_extras.SelectParentProps.md#menushrink)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

#### Inherited from

[SelectOwnProps](components_Select_extras.SelectOwnProps.md).[modelValue](components_Select_extras.SelectOwnProps.md#modelvalue)

___

### multiple

• `Optional` **multiple**: `boolean`

Allow multiple selection; Model must be Array

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[multiple](components_Select_extras.SelectParentProps.md#multiple)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[name](components_Select_extras.SelectParentProps.md#name)

___

### newValueMode

• `Optional` **newValueMode**: ``"toggle"`` \| ``"add"`` \| ``"add-unique"``

Enables creation of new values and defines behavior when a new value is added: 'add' means it adds the value (even if possible duplicate), 'add-unique' adds only unique values, and 'toggle' adds or removes the value (based on if it exists or not already); When using this prop then listening for @new-value becomes optional (only to override the behavior defined by 'new-value-mode')

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[newValueMode](components_Select_extras.SelectParentProps.md#newvaluemode)

___

### noErrorIcon

• `Optional` **noErrorIcon**: `boolean`

Hide error icon when there is an error

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[noErrorIcon](components_Select_extras.SelectParentProps.md#noerroricon)

___

### optionDisable

• `Optional` **optionDisable**: `string` \| (`option`: `any`) => `boolean`

Property of option which tells it's disabled; The value of the property must be a Boolean; If using a function then for best performance, reference it from your scope and do not define it inline
Default value: disable

**`param`** The current option being processed

**`returns`** If true, the current option will be disabled

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[optionDisable](components_Select_extras.SelectParentProps.md#optiondisable)

___

### optionLabel

• `Optional` **optionLabel**: `string` \| (`option`: `any`) => `string`

Property of option which holds the 'label'; If using a function then for best performance, reference it from your scope and do not define it inline
Default value: label

**`param`** The current option being processed

**`returns`** Label of the current option

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[optionLabel](components_Select_extras.SelectParentProps.md#optionlabel)

___

### optionValue

• `Optional` **optionValue**: `string` \| (`option`: `any`) => `any`

Property of option which holds the 'value'; If using a function then for best performance, reference it from your scope and do not define it inline
Default value: value

**`param`** The current option being processed

**`returns`** Value of the current option

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[optionValue](components_Select_extras.SelectParentProps.md#optionvalue)

___

### options

• `Readonly` **options**: [`SelectOptions`](../modules/components_Select_extras.md#selectoptions)<`T`\>

#### Inherited from

[SelectOwnProps](components_Select_extras.SelectOwnProps.md).[options](components_Select_extras.SelectOwnProps.md#options)

___

### optionsCover

• `Optional` **optionsCover**: `boolean`

Expanded menu will cover the component (will not work along with 'use-input' prop for obvious reasons)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[optionsCover](components_Select_extras.SelectParentProps.md#optionscover)

___

### optionsDark

• `Optional` **optionsDark**: `boolean`

Options menu will be colored with a dark color

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[optionsDark](components_Select_extras.SelectParentProps.md#optionsdark)

___

### optionsDense

• `Optional` **optionsDense**: `boolean`

Dense mode for options list; occupies less space

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[optionsDense](components_Select_extras.SelectParentProps.md#optionsdense)

___

### optionsHtml

• `Optional` **optionsHtml**: `boolean`

Force render the options as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'option' slot!

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[optionsHtml](components_Select_extras.SelectParentProps.md#optionshtml)

___

### optionsSelectedClass

• `Optional` **optionsSelectedClass**: `string`

CSS class name for options that are active/selected; Set it to an empty string to stop applying the default (which is text-* where * is the 'color' prop value)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[optionsSelectedClass](components_Select_extras.SelectParentProps.md#optionsselectedclass)

___

### outlined

• `Optional` **outlined**: `boolean`

Use 'outlined' design for the field

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[outlined](components_Select_extras.SelectParentProps.md#outlined)

___

### popupContentClass

• `Optional` **popupContentClass**: `string`

Class definitions to be attributed to the popup content

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[popupContentClass](components_Select_extras.SelectParentProps.md#popupcontentclass)

___

### popupContentStyle

• `Optional` **popupContentStyle**: `VueStyleProp`

Style definitions to be attributed to the popup content

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[popupContentStyle](components_Select_extras.SelectParentProps.md#popupcontentstyle)

___

### prefix

• `Optional` **prefix**: `string`

Prefix

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[prefix](components_Select_extras.SelectParentProps.md#prefix)

___

### reactiveRules

• `Optional` **reactiveRules**: `boolean`

By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[reactiveRules](components_Select_extras.SelectParentProps.md#reactiverules)

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[readonly](components_Select_extras.SelectParentProps.md#readonly)

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a small standard border-radius for a squared shape of the component

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[rounded](components_Select_extras.SelectParentProps.md#rounded)

___

### rules

• `Optional` **rules**: `ValidationRule`<`any`\>[]

Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[rules](components_Select_extras.SelectParentProps.md#rules)

___

### square

• `Optional` **square**: `boolean`

Remove border-radius so borders are squared; Overrides 'rounded' prop

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[square](components_Select_extras.SelectParentProps.md#square)

___

### stackLabel

• `Optional` **stackLabel**: `boolean`

Label will be always shown above the field regardless of field content (if any)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[stackLabel](components_Select_extras.SelectParentProps.md#stacklabel)

___

### standout

• `Optional` **standout**: `string` \| `boolean`

Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[standout](components_Select_extras.SelectParentProps.md#standout)

___

### suffix

• `Optional` **suffix**: `string`

Suffix

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[suffix](components_Select_extras.SelectParentProps.md#suffix)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[tabindex](components_Select_extras.SelectParentProps.md#tabindex)

___

### tableColspan

• `Optional` **tableColspan**: `string` \| `number`

The number of columns in the table (you need this if you use table-layout: fixed)

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[tableColspan](components_Select_extras.SelectParentProps.md#tablecolspan)

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration when hiding the menu/dialog (in milliseconds, without unit)
Default value: 300

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[transitionDuration](components_Select_extras.SelectParentProps.md#transitionduration)

___

### transitionHide

• `Optional` **transitionHide**: `string`

Transition when hiding the menu/dialog; One of Quasar's embedded transitions
Default value: fade

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[transitionHide](components_Select_extras.SelectParentProps.md#transitionhide)

___

### transitionShow

• `Optional` **transitionShow**: `string`

Transition when showing the menu/dialog; One of Quasar's embedded transitions
Default value: fade

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[transitionShow](components_Select_extras.SelectParentProps.md#transitionshow)

___

### useChips

• `Optional` **useChips**: `boolean`

Use QChip to show what is currently selected

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[useChips](components_Select_extras.SelectParentProps.md#usechips)

___

### useInput

• `Optional` **useInput**: `boolean`

Use an input tag where users can type

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[useInput](components_Select_extras.SelectParentProps.md#useinput)

___

### virtualScrollHorizontal

• `Optional` **virtualScrollHorizontal**: `boolean`

Make virtual list work in horizontal mode

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[virtualScrollHorizontal](components_Select_extras.SelectParentProps.md#virtualscrollhorizontal)

___

### virtualScrollItemSize

• `Optional` **virtualScrollItemSize**: `string` \| `number`

Default size in pixels (height if vertical, width if horizontal) of an item; This value is used for rendering the initial list; Try to use a value close to the minimum size of an item
Default value: 24

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[virtualScrollItemSize](components_Select_extras.SelectParentProps.md#virtualscrollitemsize)

___

### virtualScrollSliceRatioAfter

• `Optional` **virtualScrollSliceRatioAfter**: `string` \| `number`

Ratio of number of items in visible zone to render after it
Default value: 1

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[virtualScrollSliceRatioAfter](components_Select_extras.SelectParentProps.md#virtualscrollsliceratioafter)

___

### virtualScrollSliceRatioBefore

• `Optional` **virtualScrollSliceRatioBefore**: `string` \| `number`

Ratio of number of items in visible zone to render before it
Default value: 1

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[virtualScrollSliceRatioBefore](components_Select_extras.SelectParentProps.md#virtualscrollsliceratiobefore)

___

### virtualScrollSliceSize

• `Optional` **virtualScrollSliceSize**: `string` \| `number`

Minimum number of items to render in the virtual list
Default value: 30

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[virtualScrollSliceSize](components_Select_extras.SelectParentProps.md#virtualscrollslicesize)

___

### virtualScrollStickySizeEnd

• `Optional` **virtualScrollStickySizeEnd**: `string` \| `number`

Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the end of the list; A correct value will improve scroll precision
Default value: 0

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[virtualScrollStickySizeEnd](components_Select_extras.SelectParentProps.md#virtualscrollstickysizeend)

___

### virtualScrollStickySizeStart

• `Optional` **virtualScrollStickySizeStart**: `string` \| `number`

Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the start of the list; A correct value will improve scroll precision
Default value: 0

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[virtualScrollStickySizeStart](components_Select_extras.SelectParentProps.md#virtualscrollstickysizestart)

## Methods

### onAdd

▸ `Optional` **onAdd**(`details`): `void`

Emitted when an option is added to the selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `details` | `Object` | Addition details |
| `details.index` | `number` | Model index at which addition took place |
| `details.value` | `any` | The actual value that was added |

#### Returns

`void`

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onAdd](components_Select_extras.SelectParentProps.md#onadd)

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

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onClear](components_Select_extras.SelectParentProps.md#onclear)

___

### onFilter

▸ `Optional` **onFilter**(`inputValue`, `doneFn`, `abortFn`): `void`

Emitted when user wants to filter a value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputValue` | `string` | What the user typed |
| `doneFn` | (`callbackFn`: () => `void`, `afterFn?`: (`ref`: `QSelect`) => `void`) => `void` | Supply a function which makes the necessary updates |
| `abortFn` | () => `void` | Call this function if something went wrong |

#### Returns

`void`

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onFilter](components_Select_extras.SelectParentProps.md#onfilter)

___

### onFilterAbort

▸ `Optional` **onFilterAbort**(): `void`

Emitted when a filtering was aborted; Probably a new one was requested?

#### Returns

`void`

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onFilterAbort](components_Select_extras.SelectParentProps.md#onfilterabort)

___

### onInputValue

▸ `Optional` **onInputValue**(`value`): `void`

Emitted when the value in the text input changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | New text value |

#### Returns

`void`

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onInputValue](components_Select_extras.SelectParentProps.md#oninputvalue)

___

### onNewValue

▸ `Optional` **onNewValue**(`inputValue`, `doneFn`): `void`

Enables creation of new values; Emitted when a new value has been created; You can override 'new-value-mode' property with it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputValue` | `string` | What the user typed |
| `doneFn` | (`item?`: `any`, `mode?`: ``"toggle"`` \| ``"add"`` \| ``"add-unique"``) => `void` | Adds (optional) value to the model; Do not forget to call it after you validate the newly created value; Call it with no parameters if nothing should be added |

#### Returns

`void`

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onNewValue](components_Select_extras.SelectParentProps.md#onnewvalue)

___

### onPopupHide

▸ `Optional` **onPopupHide**(`evt`): `void`

Emitted when the select options menu or dialog is hidden.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onPopupHide](components_Select_extras.SelectParentProps.md#onpopuphide)

___

### onPopupShow

▸ `Optional` **onPopupShow**(`evt`): `void`

Emitted when the select options menu or dialog is shown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onPopupShow](components_Select_extras.SelectParentProps.md#onpopupshow)

___

### onRemove

▸ `Optional` **onRemove**(`details`): `void`

Emitted when an option is removed from selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `details` | `Object` | Removal details |
| `details.index` | `number` | Model index at which removal took place |
| `details.value` | `any` | The actual value that was removed |

#### Returns

`void`

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onRemove](components_Select_extras.SelectParentProps.md#onremove)

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

[SelectOwnProps](components_Select_extras.SelectOwnProps.md).[onUpdate:modelValue](components_Select_extras.SelectOwnProps.md#onupdate:modelvalue)

___

### onVirtualScroll

▸ `Optional` **onVirtualScroll**(`details`): `void`

Emitted when the virtual scroll occurs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `details` | `Object` | Object of properties on the new scroll position |
| `details.direction` | ``"decrease"`` \| ``"increase"`` | Direction of change |
| `details.from` | `number` | The index of the first list item that is rendered (0 based) |
| `details.index` | `number` | Index of the list item that was scrolled into view (0 based) |
| `details.ref` | `QSelect` | Vue reference to the QSelect |
| `details.to` | `number` | The index of the last list item that is rendered (0 based) |

#### Returns

`void`

#### Inherited from

[SelectParentProps](components_Select_extras.SelectParentProps.md).[onVirtualScroll](components_Select_extras.SelectParentProps.md#onvirtualscroll)
