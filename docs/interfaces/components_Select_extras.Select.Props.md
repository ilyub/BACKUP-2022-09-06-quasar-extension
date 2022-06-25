[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Select.extras](../modules/components_Select_extras.md) / [Select](../modules/components_Select_extras.Select.md) / Props

# Interface: Props<T\>

[components/Select.extras](../modules/components_Select_extras.md).[Select](../modules/components_Select_extras.Select.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ParentProps`](components_Select_extras.Select.ParentProps.md)

- [`PluginProps`](components_Select_extras.Select.PluginProps.md)<`T`\>

- [`OwnProps`](components_Select_extras.Select.OwnProps.md)<`T`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [autocomplete](components_Select_extras.Select.Props.md#autocomplete)
- [autofocus](components_Select_extras.Select.Props.md#autofocus)
- [behavior](components_Select_extras.Select.Props.md#behavior)
- [bgColor](components_Select_extras.Select.Props.md#bgcolor)
- [borderless](components_Select_extras.Select.Props.md#borderless)
- [bottomSlots](components_Select_extras.Select.Props.md#bottomslots)
- [clearIcon](components_Select_extras.Select.Props.md#clearicon)
- [clearable](components_Select_extras.Select.Props.md#clearable)
- [color](components_Select_extras.Select.Props.md#color)
- [counter](components_Select_extras.Select.Props.md#counter)
- [dark](components_Select_extras.Select.Props.md#dark)
- [dense](components_Select_extras.Select.Props.md#dense)
- [disable](components_Select_extras.Select.Props.md#disable)
- [displayValue](components_Select_extras.Select.Props.md#displayvalue)
- [displayValueHtml](components_Select_extras.Select.Props.md#displayvaluehtml)
- [dropdownIcon](components_Select_extras.Select.Props.md#dropdownicon)
- [emitValue](components_Select_extras.Select.Props.md#emitvalue)
- [error](components_Select_extras.Select.Props.md#error)
- [errorMessage](components_Select_extras.Select.Props.md#errormessage)
- [fillInput](components_Select_extras.Select.Props.md#fillinput)
- [filled](components_Select_extras.Select.Props.md#filled)
- [for](components_Select_extras.Select.Props.md#for)
- [hideBottomSpace](components_Select_extras.Select.Props.md#hidebottomspace)
- [hideDropdownIcon](components_Select_extras.Select.Props.md#hidedropdownicon)
- [hideHint](components_Select_extras.Select.Props.md#hidehint)
- [hideSelected](components_Select_extras.Select.Props.md#hideselected)
- [hint](components_Select_extras.Select.Props.md#hint)
- [initialLabel](components_Select_extras.Select.Props.md#initiallabel)
- [inputClass](components_Select_extras.Select.Props.md#inputclass)
- [inputDebounce](components_Select_extras.Select.Props.md#inputdebounce)
- [inputStyle](components_Select_extras.Select.Props.md#inputstyle)
- [itemAligned](components_Select_extras.Select.Props.md#itemaligned)
- [label](components_Select_extras.Select.Props.md#label)
- [labelColor](components_Select_extras.Select.Props.md#labelcolor)
- [labelSlot](components_Select_extras.Select.Props.md#labelslot)
- [loading](components_Select_extras.Select.Props.md#loading)
- [mapOptions](components_Select_extras.Select.Props.md#mapoptions)
- [maxValues](components_Select_extras.Select.Props.md#maxvalues)
- [menuAnchor](components_Select_extras.Select.Props.md#menuanchor)
- [menuOffset](components_Select_extras.Select.Props.md#menuoffset)
- [menuSelf](components_Select_extras.Select.Props.md#menuself)
- [menuShrink](components_Select_extras.Select.Props.md#menushrink)
- [modelValue](components_Select_extras.Select.Props.md#modelvalue)
- [multiple](components_Select_extras.Select.Props.md#multiple)
- [name](components_Select_extras.Select.Props.md#name)
- [newValueMode](components_Select_extras.Select.Props.md#newvaluemode)
- [noErrorIcon](components_Select_extras.Select.Props.md#noerroricon)
- [optionDisable](components_Select_extras.Select.Props.md#optiondisable)
- [optionLabel](components_Select_extras.Select.Props.md#optionlabel)
- [optionValue](components_Select_extras.Select.Props.md#optionvalue)
- [options](components_Select_extras.Select.Props.md#options)
- [optionsCover](components_Select_extras.Select.Props.md#optionscover)
- [optionsDark](components_Select_extras.Select.Props.md#optionsdark)
- [optionsDense](components_Select_extras.Select.Props.md#optionsdense)
- [optionsHtml](components_Select_extras.Select.Props.md#optionshtml)
- [optionsSelectedClass](components_Select_extras.Select.Props.md#optionsselectedclass)
- [outlined](components_Select_extras.Select.Props.md#outlined)
- [popupContentClass](components_Select_extras.Select.Props.md#popupcontentclass)
- [popupContentStyle](components_Select_extras.Select.Props.md#popupcontentstyle)
- [prefix](components_Select_extras.Select.Props.md#prefix)
- [readonly](components_Select_extras.Select.Props.md#readonly)
- [required](components_Select_extras.Select.Props.md#required)
- [rounded](components_Select_extras.Select.Props.md#rounded)
- [rulesOnChange](components_Select_extras.Select.Props.md#rulesonchange)
- [rulesOnInput](components_Select_extras.Select.Props.md#rulesoninput)
- [rulesOnSubmit](components_Select_extras.Select.Props.md#rulesonsubmit)
- [square](components_Select_extras.Select.Props.md#square)
- [stackLabel](components_Select_extras.Select.Props.md#stacklabel)
- [standout](components_Select_extras.Select.Props.md#standout)
- [suffix](components_Select_extras.Select.Props.md#suffix)
- [tabindex](components_Select_extras.Select.Props.md#tabindex)
- [tableColspan](components_Select_extras.Select.Props.md#tablecolspan)
- [transitionDuration](components_Select_extras.Select.Props.md#transitionduration)
- [transitionHide](components_Select_extras.Select.Props.md#transitionhide)
- [transitionShow](components_Select_extras.Select.Props.md#transitionshow)
- [useChips](components_Select_extras.Select.Props.md#usechips)
- [useInput](components_Select_extras.Select.Props.md#useinput)
- [validationLabel](components_Select_extras.Select.Props.md#validationlabel)
- [virtualScrollHorizontal](components_Select_extras.Select.Props.md#virtualscrollhorizontal)
- [virtualScrollItemSize](components_Select_extras.Select.Props.md#virtualscrollitemsize)
- [virtualScrollSliceRatioAfter](components_Select_extras.Select.Props.md#virtualscrollsliceratioafter)
- [virtualScrollSliceRatioBefore](components_Select_extras.Select.Props.md#virtualscrollsliceratiobefore)
- [virtualScrollSliceSize](components_Select_extras.Select.Props.md#virtualscrollslicesize)
- [virtualScrollStickySizeEnd](components_Select_extras.Select.Props.md#virtualscrollstickysizeend)
- [virtualScrollStickySizeStart](components_Select_extras.Select.Props.md#virtualscrollstickysizestart)

### Methods

- [onAdd](components_Select_extras.Select.Props.md#onadd)
- [onClear](components_Select_extras.Select.Props.md#onclear)
- [onFilter](components_Select_extras.Select.Props.md#onfilter)
- [onFilterAbort](components_Select_extras.Select.Props.md#onfilterabort)
- [onInputValue](components_Select_extras.Select.Props.md#oninputvalue)
- [onNewValue](components_Select_extras.Select.Props.md#onnewvalue)
- [onPopupHide](components_Select_extras.Select.Props.md#onpopuphide)
- [onPopupShow](components_Select_extras.Select.Props.md#onpopupshow)
- [onRemove](components_Select_extras.Select.Props.md#onremove)
- [onUpdate:modelValue](components_Select_extras.Select.Props.md#onupdate:modelvalue)
- [onVirtualScroll](components_Select_extras.Select.Props.md#onvirtualscroll)

## Properties

### autocomplete

• `Optional` **autocomplete**: `string`

Autocomplete attribute for field

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[autocomplete](components_Select_extras.Select.ParentProps.md#autocomplete)

___

### autofocus

• `Optional` **autofocus**: `boolean`

Focus field on initial component render

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[autofocus](components_Select_extras.Select.ParentProps.md#autofocus)

___

### behavior

• `Optional` **behavior**: ``"default"`` \| ``"dialog"`` \| ``"menu"``

Overrides the default dynamic mode of showing as menu on desktop and dialog on mobiles
Default value: default

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[behavior](components_Select_extras.Select.ParentProps.md#behavior)

___

### bgColor

• `Optional` **bgColor**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[bgColor](components_Select_extras.Select.ParentProps.md#bgcolor)

___

### borderless

• `Optional` **borderless**: `boolean`

Use 'borderless' design for the field

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[borderless](components_Select_extras.Select.ParentProps.md#borderless)

___

### bottomSlots

• `Optional` **bottomSlots**: `boolean`

Enables bottom slots ('error', 'hint', 'counter')

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[bottomSlots](components_Select_extras.Select.ParentProps.md#bottomslots)

___

### clearIcon

• `Optional` **clearIcon**: `string`

Custom icon to use for the clear button when using along with 'clearable' prop

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[clearIcon](components_Select_extras.Select.ParentProps.md#clearicon)

___

### clearable

• `Optional` **clearable**: `boolean`

Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[clearable](components_Select_extras.Select.ParentProps.md#clearable)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[color](components_Select_extras.Select.ParentProps.md#color)

___

### counter

• `Optional` **counter**: `boolean`

Show an automatic counter on bottom right

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[counter](components_Select_extras.Select.ParentProps.md#counter)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[dark](components_Select_extras.Select.ParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[dense](components_Select_extras.Select.ParentProps.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[disable](components_Select_extras.Select.OwnProps.md#disable)

___

### displayValue

• `Optional` **displayValue**: `string` \| `number`

Override default selection string, if not using 'selected' slot/scoped slot and if not using 'use-chips' prop

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[displayValue](components_Select_extras.Select.ParentProps.md#displayvalue)

___

### displayValueHtml

• `Optional` **displayValueHtml**: `boolean`

Force render the selected option(s) as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'selected' or 'selected-item' slots!

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[displayValueHtml](components_Select_extras.Select.ParentProps.md#displayvaluehtml)

___

### dropdownIcon

• `Optional` **dropdownIcon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[dropdownIcon](components_Select_extras.Select.ParentProps.md#dropdownicon)

___

### emitValue

• `Optional` **emitValue**: `boolean`

Update model with the value of the selected option instead of the whole option

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[emitValue](components_Select_extras.Select.ParentProps.md#emitvalue)

___

### error

• `Optional` **error**: `boolean`

Does field have validation errors?

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[error](components_Select_extras.Select.ParentProps.md#error)

___

### errorMessage

• `Optional` **errorMessage**: `string`

Validation error message (gets displayed only if 'error' is set to 'true')

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[errorMessage](components_Select_extras.Select.ParentProps.md#errormessage)

___

### fillInput

• `Optional` **fillInput**: `boolean`

Fills the input with current value; Useful along with 'hide-selected'; Does NOT works along with 'multiple' selection

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[fillInput](components_Select_extras.Select.ParentProps.md#fillinput)

___

### filled

• `Optional` **filled**: `boolean`

Use 'filled' design for the field

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[filled](components_Select_extras.Select.ParentProps.md#filled)

___

### for

• `Optional` **for**: `string`

Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[for](components_Select_extras.Select.ParentProps.md#for)

___

### hideBottomSpace

• `Optional` **hideBottomSpace**: `boolean`

Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[hideBottomSpace](components_Select_extras.Select.ParentProps.md#hidebottomspace)

___

### hideDropdownIcon

• `Optional` **hideDropdownIcon**: `boolean`

Hides dropdown icon

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[hideDropdownIcon](components_Select_extras.Select.ParentProps.md#hidedropdownicon)

___

### hideHint

• `Optional` **hideHint**: `boolean`

Hide the helper (hint) text when field doesn't have focus

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[hideHint](components_Select_extras.Select.ParentProps.md#hidehint)

___

### hideSelected

• `Optional` **hideSelected**: `boolean`

Hides selection; Use the underlying input tag to hold the label (instead of showing it to the right of the input) of the selected option; Only works for non 'multiple' Selects

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[hideSelected](components_Select_extras.Select.ParentProps.md#hideselected)

___

### hint

• `Optional` **hint**: `string`

Helper (hint) text which gets placed below your wrapped form component

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[hint](components_Select_extras.Select.ParentProps.md#hint)

___

### initialLabel

• **initialLabel**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[initialLabel](components_Select_extras.Select.PluginProps.md#initiallabel)

___

### inputClass

• `Optional` **inputClass**: `VueClassProp`

Class definitions to be attributed to the underlying input tag

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[inputClass](components_Select_extras.Select.ParentProps.md#inputclass)

___

### inputDebounce

• `Optional` **inputDebounce**: `string` \| `number`

Debounce the input model update with an amount of milliseconds
Default value: 500

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[inputDebounce](components_Select_extras.Select.ParentProps.md#inputdebounce)

___

### inputStyle

• `Optional` **inputStyle**: `VueStyleProp`

Style definitions to be attributed to the underlying input tag

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[inputStyle](components_Select_extras.Select.ParentProps.md#inputstyle)

___

### itemAligned

• `Optional` **itemAligned**: `boolean`

Match inner content alignment to that of QItem

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[itemAligned](components_Select_extras.Select.ParentProps.md#itemaligned)

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[label](components_Select_extras.Select.PluginProps.md#label)

___

### labelColor

• `Optional` **labelColor**: `string`

Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[labelColor](components_Select_extras.Select.ParentProps.md#labelcolor)

___

### labelSlot

• `Optional` **labelSlot**: `boolean`

Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[labelSlot](components_Select_extras.Select.ParentProps.md#labelslot)

___

### loading

• `Optional` **loading**: `boolean`

Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[loading](components_Select_extras.Select.ParentProps.md#loading)

___

### mapOptions

• `Optional` **mapOptions**: `boolean`

Try to map labels of model from 'options' Array; has a small performance penalty; If you are using emit-value you will probably need to use map-options to display the label text in the select field rather than the value;  Refer to the 'Affecting model' section above

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[mapOptions](components_Select_extras.Select.ParentProps.md#mapoptions)

___

### maxValues

• `Optional` **maxValues**: `string` \| `number`

Allow a maximum number of selections that the user can do

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[maxValues](components_Select_extras.Select.ParentProps.md#maxvalues)

___

### menuAnchor

• `Optional` **menuAnchor**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the starting position or anchor point of the options list relative to the field (only in menu mode)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[menuAnchor](components_Select_extras.Select.ParentProps.md#menuanchor)

___

### menuOffset

• `Optional` **menuOffset**: readonly `any`[]

An array of two numbers to offset the options list horizontally and vertically in pixels (only in menu mode)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[menuOffset](components_Select_extras.Select.ParentProps.md#menuoffset)

___

### menuSelf

• `Optional` **menuSelf**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the options list's own position relative to its target (only in menu mode)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[menuSelf](components_Select_extras.Select.ParentProps.md#menuself)

___

### menuShrink

• `Optional` **menuShrink**: `boolean`

Allow the options list to be narrower than the field (only in menu mode)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[menuShrink](components_Select_extras.Select.ParentProps.md#menushrink)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[modelValue](components_Select_extras.Select.OwnProps.md#modelvalue)

___

### multiple

• `Optional` **multiple**: `boolean`

Allow multiple selection; Model must be Array

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[multiple](components_Select_extras.Select.ParentProps.md#multiple)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[name](components_Select_extras.Select.ParentProps.md#name)

___

### newValueMode

• `Optional` **newValueMode**: ``"toggle"`` \| ``"add"`` \| ``"add-unique"``

Enables creation of new values and defines behavior when a new value is added: 'add' means it adds the value (even if possible duplicate), 'add-unique' adds only unique values, and 'toggle' adds or removes the value (based on if it exists or not already); When using this prop then listening for @new-value becomes optional (only to override the behavior defined by 'new-value-mode')

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[newValueMode](components_Select_extras.Select.ParentProps.md#newvaluemode)

___

### noErrorIcon

• `Optional` **noErrorIcon**: `boolean`

Hide error icon when there is an error

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[noErrorIcon](components_Select_extras.Select.ParentProps.md#noerroricon)

___

### optionDisable

• `Optional` **optionDisable**: `string` \| (`option`: `any`) => `boolean`

Property of option which tells it's disabled; The value of the property must be a Boolean; If using a function then for best performance, reference it from your scope and do not define it inline
Default value: disable

**`param`** The current option being processed

**`returns`** If true, the current option will be disabled

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[optionDisable](components_Select_extras.Select.ParentProps.md#optiondisable)

___

### optionLabel

• `Optional` **optionLabel**: `string` \| (`option`: `any`) => `string`

Property of option which holds the 'label'; If using a function then for best performance, reference it from your scope and do not define it inline
Default value: label

**`param`** The current option being processed

**`returns`** Label of the current option

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[optionLabel](components_Select_extras.Select.ParentProps.md#optionlabel)

___

### optionValue

• `Optional` **optionValue**: `string` \| (`option`: `any`) => `any`

Property of option which holds the 'value'; If using a function then for best performance, reference it from your scope and do not define it inline
Default value: value

**`param`** The current option being processed

**`returns`** Value of the current option

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[optionValue](components_Select_extras.Select.ParentProps.md#optionvalue)

___

### options

• `Readonly` **options**: [`Options`](../modules/components_Select_extras.Select.md#options)<`T`\>

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[options](components_Select_extras.Select.OwnProps.md#options)

___

### optionsCover

• `Optional` **optionsCover**: `boolean`

Expanded menu will cover the component (will not work along with 'use-input' prop for obvious reasons)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[optionsCover](components_Select_extras.Select.ParentProps.md#optionscover)

___

### optionsDark

• `Optional` **optionsDark**: `boolean`

Options menu will be colored with a dark color

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[optionsDark](components_Select_extras.Select.ParentProps.md#optionsdark)

___

### optionsDense

• `Optional` **optionsDense**: `boolean`

Dense mode for options list; occupies less space

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[optionsDense](components_Select_extras.Select.ParentProps.md#optionsdense)

___

### optionsHtml

• `Optional` **optionsHtml**: `boolean`

Force render the options as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'option' slot!

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[optionsHtml](components_Select_extras.Select.ParentProps.md#optionshtml)

___

### optionsSelectedClass

• `Optional` **optionsSelectedClass**: `string`

CSS class name for options that are active/selected; Set it to an empty string to stop applying the default (which is text-* where * is the 'color' prop value)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[optionsSelectedClass](components_Select_extras.Select.ParentProps.md#optionsselectedclass)

___

### outlined

• `Optional` **outlined**: `boolean`

Use 'outlined' design for the field

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[outlined](components_Select_extras.Select.ParentProps.md#outlined)

___

### popupContentClass

• `Optional` **popupContentClass**: `string`

Class definitions to be attributed to the popup content

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[popupContentClass](components_Select_extras.Select.ParentProps.md#popupcontentclass)

___

### popupContentStyle

• `Optional` **popupContentStyle**: `VueStyleProp`

Style definitions to be attributed to the popup content

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[popupContentStyle](components_Select_extras.Select.ParentProps.md#popupcontentstyle)

___

### prefix

• `Optional` **prefix**: `string`

Prefix

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[prefix](components_Select_extras.Select.ParentProps.md#prefix)

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[readonly](components_Select_extras.Select.ParentProps.md#readonly)

___

### required

• `Optional` `Readonly` **required**: `booleanU`

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[required](components_Select_extras.Select.OwnProps.md#required)

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a small standard border-radius for a squared shape of the component

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[rounded](components_Select_extras.Select.ParentProps.md#rounded)

___

### rulesOnChange

• `Optional` `Readonly` **rulesOnChange**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[rulesOnChange](components_Select_extras.Select.PluginProps.md#rulesonchange)

___

### rulesOnInput

• `Optional` `Readonly` **rulesOnInput**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[rulesOnInput](components_Select_extras.Select.PluginProps.md#rulesoninput)

___

### rulesOnSubmit

• `Optional` `Readonly` **rulesOnSubmit**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[rulesOnSubmit](components_Select_extras.Select.PluginProps.md#rulesonsubmit)

___

### square

• `Optional` **square**: `boolean`

Remove border-radius so borders are squared; Overrides 'rounded' prop

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[square](components_Select_extras.Select.ParentProps.md#square)

___

### stackLabel

• `Optional` **stackLabel**: `boolean`

Label will be always shown above the field regardless of field content (if any)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[stackLabel](components_Select_extras.Select.ParentProps.md#stacklabel)

___

### standout

• `Optional` **standout**: `string` \| `boolean`

Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[standout](components_Select_extras.Select.ParentProps.md#standout)

___

### suffix

• `Optional` **suffix**: `string`

Suffix

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[suffix](components_Select_extras.Select.ParentProps.md#suffix)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[tabindex](components_Select_extras.Select.ParentProps.md#tabindex)

___

### tableColspan

• `Optional` **tableColspan**: `string` \| `number`

The number of columns in the table (you need this if you use table-layout: fixed)

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[tableColspan](components_Select_extras.Select.ParentProps.md#tablecolspan)

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration when hiding the menu/dialog (in milliseconds, without unit)
Default value: 300

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[transitionDuration](components_Select_extras.Select.ParentProps.md#transitionduration)

___

### transitionHide

• `Optional` **transitionHide**: `string`

Transition when hiding the menu/dialog; One of Quasar's embedded transitions
Default value: fade

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[transitionHide](components_Select_extras.Select.ParentProps.md#transitionhide)

___

### transitionShow

• `Optional` **transitionShow**: `string`

Transition when showing the menu/dialog; One of Quasar's embedded transitions
Default value: fade

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[transitionShow](components_Select_extras.Select.ParentProps.md#transitionshow)

___

### useChips

• `Optional` **useChips**: `boolean`

Use QChip to show what is currently selected

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[useChips](components_Select_extras.Select.ParentProps.md#usechips)

___

### useInput

• `Optional` **useInput**: `boolean`

Use an input tag where users can type

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[useInput](components_Select_extras.Select.ParentProps.md#useinput)

___

### validationLabel

• `Optional` `Readonly` **validationLabel**: `Key`<`Word`\>

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[validationLabel](components_Select_extras.Select.OwnProps.md#validationlabel)

___

### virtualScrollHorizontal

• `Optional` **virtualScrollHorizontal**: `boolean`

Make virtual list work in horizontal mode

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[virtualScrollHorizontal](components_Select_extras.Select.ParentProps.md#virtualscrollhorizontal)

___

### virtualScrollItemSize

• `Optional` **virtualScrollItemSize**: `string` \| `number`

Default size in pixels (height if vertical, width if horizontal) of an item; This value is used for rendering the initial list; Try to use a value close to the minimum size of an item
Default value: 24

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[virtualScrollItemSize](components_Select_extras.Select.ParentProps.md#virtualscrollitemsize)

___

### virtualScrollSliceRatioAfter

• `Optional` **virtualScrollSliceRatioAfter**: `string` \| `number`

Ratio of number of items in visible zone to render after it
Default value: 1

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[virtualScrollSliceRatioAfter](components_Select_extras.Select.ParentProps.md#virtualscrollsliceratioafter)

___

### virtualScrollSliceRatioBefore

• `Optional` **virtualScrollSliceRatioBefore**: `string` \| `number`

Ratio of number of items in visible zone to render before it
Default value: 1

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[virtualScrollSliceRatioBefore](components_Select_extras.Select.ParentProps.md#virtualscrollsliceratiobefore)

___

### virtualScrollSliceSize

• `Optional` **virtualScrollSliceSize**: `string` \| `number`

Minimum number of items to render in the virtual list
Default value: 30

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[virtualScrollSliceSize](components_Select_extras.Select.ParentProps.md#virtualscrollslicesize)

___

### virtualScrollStickySizeEnd

• `Optional` **virtualScrollStickySizeEnd**: `string` \| `number`

Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the end of the list; A correct value will improve scroll precision
Default value: 0

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[virtualScrollStickySizeEnd](components_Select_extras.Select.ParentProps.md#virtualscrollstickysizeend)

___

### virtualScrollStickySizeStart

• `Optional` **virtualScrollStickySizeStart**: `string` \| `number`

Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the start of the list; A correct value will improve scroll precision
Default value: 0

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[virtualScrollStickySizeStart](components_Select_extras.Select.ParentProps.md#virtualscrollstickysizestart)

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

[ParentProps](components_Select_extras.Select.ParentProps.md).[onAdd](components_Select_extras.Select.ParentProps.md#onadd)

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

[ParentProps](components_Select_extras.Select.ParentProps.md).[onClear](components_Select_extras.Select.ParentProps.md#onclear)

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

[ParentProps](components_Select_extras.Select.ParentProps.md).[onFilter](components_Select_extras.Select.ParentProps.md#onfilter)

___

### onFilterAbort

▸ `Optional` **onFilterAbort**(): `void`

Emitted when a filtering was aborted; Probably a new one was requested?

#### Returns

`void`

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[onFilterAbort](components_Select_extras.Select.ParentProps.md#onfilterabort)

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

[ParentProps](components_Select_extras.Select.ParentProps.md).[onInputValue](components_Select_extras.Select.ParentProps.md#oninputvalue)

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

[ParentProps](components_Select_extras.Select.ParentProps.md).[onNewValue](components_Select_extras.Select.ParentProps.md#onnewvalue)

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

[ParentProps](components_Select_extras.Select.ParentProps.md).[onPopupHide](components_Select_extras.Select.ParentProps.md#onpopuphide)

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

[ParentProps](components_Select_extras.Select.ParentProps.md).[onPopupShow](components_Select_extras.Select.ParentProps.md#onpopupshow)

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

[ParentProps](components_Select_extras.Select.ParentProps.md).[onRemove](components_Select_extras.Select.ParentProps.md#onremove)

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

[OwnProps](components_Select_extras.Select.OwnProps.md).[onUpdate:modelValue](components_Select_extras.Select.OwnProps.md#onupdate:modelvalue)

___

### onVirtualScroll

▸ `Optional` **onVirtualScroll**(`details`): `void`

Emitted when the virtual scroll occurs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `details` | `Object` | Object of properties on the new scroll position |
| `details.direction` | ``"increase"`` \| ``"decrease"`` | Direction of change |
| `details.from` | `number` | The index of the first list item that is rendered (0 based) |
| `details.index` | `number` | Index of the list item that was scrolled into view (0 based) |
| `details.ref` | `QSelect` | Vue reference to the QSelect |
| `details.to` | `number` | The index of the last list item that is rendered (0 based) |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Select_extras.Select.ParentProps.md).[onVirtualScroll](components_Select_extras.Select.ParentProps.md#onvirtualscroll)
