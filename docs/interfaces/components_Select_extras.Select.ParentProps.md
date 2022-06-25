[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Select.extras](../modules/components_Select_extras.md) / [Select](../modules/components_Select_extras.Select.md) / ParentProps

# Interface: ParentProps

[components/Select.extras](../modules/components_Select_extras.md).[Select](../modules/components_Select_extras.Select.md).ParentProps

## Hierarchy

- `Omit`<`QSelectProps`, keyof [`OwnProps`](components_Select_extras.Select.OwnProps.md) \| keyof [`PluginProps`](components_Select_extras.Select.PluginProps.md) \| ``"lazyRules"`` \| ``"reactiveRules"`` \| ``"rules"``\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_Select_extras.Select.Props.md)

## Table of contents

### Properties

- [autocomplete](components_Select_extras.Select.ParentProps.md#autocomplete)
- [autofocus](components_Select_extras.Select.ParentProps.md#autofocus)
- [behavior](components_Select_extras.Select.ParentProps.md#behavior)
- [bgColor](components_Select_extras.Select.ParentProps.md#bgcolor)
- [borderless](components_Select_extras.Select.ParentProps.md#borderless)
- [bottomSlots](components_Select_extras.Select.ParentProps.md#bottomslots)
- [clearIcon](components_Select_extras.Select.ParentProps.md#clearicon)
- [clearable](components_Select_extras.Select.ParentProps.md#clearable)
- [color](components_Select_extras.Select.ParentProps.md#color)
- [counter](components_Select_extras.Select.ParentProps.md#counter)
- [dark](components_Select_extras.Select.ParentProps.md#dark)
- [dense](components_Select_extras.Select.ParentProps.md#dense)
- [displayValue](components_Select_extras.Select.ParentProps.md#displayvalue)
- [displayValueHtml](components_Select_extras.Select.ParentProps.md#displayvaluehtml)
- [dropdownIcon](components_Select_extras.Select.ParentProps.md#dropdownicon)
- [emitValue](components_Select_extras.Select.ParentProps.md#emitvalue)
- [error](components_Select_extras.Select.ParentProps.md#error)
- [errorMessage](components_Select_extras.Select.ParentProps.md#errormessage)
- [fillInput](components_Select_extras.Select.ParentProps.md#fillinput)
- [filled](components_Select_extras.Select.ParentProps.md#filled)
- [for](components_Select_extras.Select.ParentProps.md#for)
- [hideBottomSpace](components_Select_extras.Select.ParentProps.md#hidebottomspace)
- [hideDropdownIcon](components_Select_extras.Select.ParentProps.md#hidedropdownicon)
- [hideHint](components_Select_extras.Select.ParentProps.md#hidehint)
- [hideSelected](components_Select_extras.Select.ParentProps.md#hideselected)
- [hint](components_Select_extras.Select.ParentProps.md#hint)
- [inputClass](components_Select_extras.Select.ParentProps.md#inputclass)
- [inputDebounce](components_Select_extras.Select.ParentProps.md#inputdebounce)
- [inputStyle](components_Select_extras.Select.ParentProps.md#inputstyle)
- [itemAligned](components_Select_extras.Select.ParentProps.md#itemaligned)
- [labelColor](components_Select_extras.Select.ParentProps.md#labelcolor)
- [labelSlot](components_Select_extras.Select.ParentProps.md#labelslot)
- [loading](components_Select_extras.Select.ParentProps.md#loading)
- [mapOptions](components_Select_extras.Select.ParentProps.md#mapoptions)
- [maxValues](components_Select_extras.Select.ParentProps.md#maxvalues)
- [menuAnchor](components_Select_extras.Select.ParentProps.md#menuanchor)
- [menuOffset](components_Select_extras.Select.ParentProps.md#menuoffset)
- [menuSelf](components_Select_extras.Select.ParentProps.md#menuself)
- [menuShrink](components_Select_extras.Select.ParentProps.md#menushrink)
- [multiple](components_Select_extras.Select.ParentProps.md#multiple)
- [name](components_Select_extras.Select.ParentProps.md#name)
- [newValueMode](components_Select_extras.Select.ParentProps.md#newvaluemode)
- [noErrorIcon](components_Select_extras.Select.ParentProps.md#noerroricon)
- [optionDisable](components_Select_extras.Select.ParentProps.md#optiondisable)
- [optionLabel](components_Select_extras.Select.ParentProps.md#optionlabel)
- [optionValue](components_Select_extras.Select.ParentProps.md#optionvalue)
- [optionsCover](components_Select_extras.Select.ParentProps.md#optionscover)
- [optionsDark](components_Select_extras.Select.ParentProps.md#optionsdark)
- [optionsDense](components_Select_extras.Select.ParentProps.md#optionsdense)
- [optionsHtml](components_Select_extras.Select.ParentProps.md#optionshtml)
- [optionsSelectedClass](components_Select_extras.Select.ParentProps.md#optionsselectedclass)
- [outlined](components_Select_extras.Select.ParentProps.md#outlined)
- [popupContentClass](components_Select_extras.Select.ParentProps.md#popupcontentclass)
- [popupContentStyle](components_Select_extras.Select.ParentProps.md#popupcontentstyle)
- [prefix](components_Select_extras.Select.ParentProps.md#prefix)
- [readonly](components_Select_extras.Select.ParentProps.md#readonly)
- [rounded](components_Select_extras.Select.ParentProps.md#rounded)
- [square](components_Select_extras.Select.ParentProps.md#square)
- [stackLabel](components_Select_extras.Select.ParentProps.md#stacklabel)
- [standout](components_Select_extras.Select.ParentProps.md#standout)
- [suffix](components_Select_extras.Select.ParentProps.md#suffix)
- [tabindex](components_Select_extras.Select.ParentProps.md#tabindex)
- [tableColspan](components_Select_extras.Select.ParentProps.md#tablecolspan)
- [transitionDuration](components_Select_extras.Select.ParentProps.md#transitionduration)
- [transitionHide](components_Select_extras.Select.ParentProps.md#transitionhide)
- [transitionShow](components_Select_extras.Select.ParentProps.md#transitionshow)
- [useChips](components_Select_extras.Select.ParentProps.md#usechips)
- [useInput](components_Select_extras.Select.ParentProps.md#useinput)
- [virtualScrollHorizontal](components_Select_extras.Select.ParentProps.md#virtualscrollhorizontal)
- [virtualScrollItemSize](components_Select_extras.Select.ParentProps.md#virtualscrollitemsize)
- [virtualScrollSliceRatioAfter](components_Select_extras.Select.ParentProps.md#virtualscrollsliceratioafter)
- [virtualScrollSliceRatioBefore](components_Select_extras.Select.ParentProps.md#virtualscrollsliceratiobefore)
- [virtualScrollSliceSize](components_Select_extras.Select.ParentProps.md#virtualscrollslicesize)
- [virtualScrollStickySizeEnd](components_Select_extras.Select.ParentProps.md#virtualscrollstickysizeend)
- [virtualScrollStickySizeStart](components_Select_extras.Select.ParentProps.md#virtualscrollstickysizestart)

### Methods

- [onAdd](components_Select_extras.Select.ParentProps.md#onadd)
- [onClear](components_Select_extras.Select.ParentProps.md#onclear)
- [onFilter](components_Select_extras.Select.ParentProps.md#onfilter)
- [onFilterAbort](components_Select_extras.Select.ParentProps.md#onfilterabort)
- [onInputValue](components_Select_extras.Select.ParentProps.md#oninputvalue)
- [onNewValue](components_Select_extras.Select.ParentProps.md#onnewvalue)
- [onPopupHide](components_Select_extras.Select.ParentProps.md#onpopuphide)
- [onPopupShow](components_Select_extras.Select.ParentProps.md#onpopupshow)
- [onRemove](components_Select_extras.Select.ParentProps.md#onremove)
- [onVirtualScroll](components_Select_extras.Select.ParentProps.md#onvirtualscroll)

## Properties

### autocomplete

• `Optional` **autocomplete**: `string`

Autocomplete attribute for field

#### Inherited from

Omit.autocomplete

___

### autofocus

• `Optional` **autofocus**: `boolean`

Focus field on initial component render

#### Inherited from

Omit.autofocus

___

### behavior

• `Optional` **behavior**: ``"default"`` \| ``"dialog"`` \| ``"menu"``

Overrides the default dynamic mode of showing as menu on desktop and dialog on mobiles
Default value: default

#### Inherited from

Omit.behavior

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

### displayValue

• `Optional` **displayValue**: `string` \| `number`

Override default selection string, if not using 'selected' slot/scoped slot and if not using 'use-chips' prop

#### Inherited from

Omit.displayValue

___

### displayValueHtml

• `Optional` **displayValueHtml**: `boolean`

Force render the selected option(s) as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'selected' or 'selected-item' slots!

#### Inherited from

Omit.displayValueHtml

___

### dropdownIcon

• `Optional` **dropdownIcon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

Omit.dropdownIcon

___

### emitValue

• `Optional` **emitValue**: `boolean`

Update model with the value of the selected option instead of the whole option

#### Inherited from

Omit.emitValue

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

### fillInput

• `Optional` **fillInput**: `boolean`

Fills the input with current value; Useful along with 'hide-selected'; Does NOT works along with 'multiple' selection

#### Inherited from

Omit.fillInput

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

### hideDropdownIcon

• `Optional` **hideDropdownIcon**: `boolean`

Hides dropdown icon

#### Inherited from

Omit.hideDropdownIcon

___

### hideHint

• `Optional` **hideHint**: `boolean`

Hide the helper (hint) text when field doesn't have focus

#### Inherited from

Omit.hideHint

___

### hideSelected

• `Optional` **hideSelected**: `boolean`

Hides selection; Use the underlying input tag to hold the label (instead of showing it to the right of the input) of the selected option; Only works for non 'multiple' Selects

#### Inherited from

Omit.hideSelected

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

### inputDebounce

• `Optional` **inputDebounce**: `string` \| `number`

Debounce the input model update with an amount of milliseconds
Default value: 500

#### Inherited from

Omit.inputDebounce

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

### loading

• `Optional` **loading**: `boolean`

Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.

#### Inherited from

Omit.loading

___

### mapOptions

• `Optional` **mapOptions**: `boolean`

Try to map labels of model from 'options' Array; has a small performance penalty; If you are using emit-value you will probably need to use map-options to display the label text in the select field rather than the value;  Refer to the 'Affecting model' section above

#### Inherited from

Omit.mapOptions

___

### maxValues

• `Optional` **maxValues**: `string` \| `number`

Allow a maximum number of selections that the user can do

#### Inherited from

Omit.maxValues

___

### menuAnchor

• `Optional` **menuAnchor**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the starting position or anchor point of the options list relative to the field (only in menu mode)

#### Inherited from

Omit.menuAnchor

___

### menuOffset

• `Optional` **menuOffset**: readonly `any`[]

An array of two numbers to offset the options list horizontally and vertically in pixels (only in menu mode)

#### Inherited from

Omit.menuOffset

___

### menuSelf

• `Optional` **menuSelf**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the options list's own position relative to its target (only in menu mode)

#### Inherited from

Omit.menuSelf

___

### menuShrink

• `Optional` **menuShrink**: `boolean`

Allow the options list to be narrower than the field (only in menu mode)

#### Inherited from

Omit.menuShrink

___

### multiple

• `Optional` **multiple**: `boolean`

Allow multiple selection; Model must be Array

#### Inherited from

Omit.multiple

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists

#### Inherited from

Omit.name

___

### newValueMode

• `Optional` **newValueMode**: ``"toggle"`` \| ``"add"`` \| ``"add-unique"``

Enables creation of new values and defines behavior when a new value is added: 'add' means it adds the value (even if possible duplicate), 'add-unique' adds only unique values, and 'toggle' adds or removes the value (based on if it exists or not already); When using this prop then listening for @new-value becomes optional (only to override the behavior defined by 'new-value-mode')

#### Inherited from

Omit.newValueMode

___

### noErrorIcon

• `Optional` **noErrorIcon**: `boolean`

Hide error icon when there is an error

#### Inherited from

Omit.noErrorIcon

___

### optionDisable

• `Optional` **optionDisable**: `string` \| (`option`: `any`) => `boolean`

Property of option which tells it's disabled; The value of the property must be a Boolean; If using a function then for best performance, reference it from your scope and do not define it inline
Default value: disable

**`param`** The current option being processed

**`returns`** If true, the current option will be disabled

#### Inherited from

Omit.optionDisable

___

### optionLabel

• `Optional` **optionLabel**: `string` \| (`option`: `any`) => `string`

Property of option which holds the 'label'; If using a function then for best performance, reference it from your scope and do not define it inline
Default value: label

**`param`** The current option being processed

**`returns`** Label of the current option

#### Inherited from

Omit.optionLabel

___

### optionValue

• `Optional` **optionValue**: `string` \| (`option`: `any`) => `any`

Property of option which holds the 'value'; If using a function then for best performance, reference it from your scope and do not define it inline
Default value: value

**`param`** The current option being processed

**`returns`** Value of the current option

#### Inherited from

Omit.optionValue

___

### optionsCover

• `Optional` **optionsCover**: `boolean`

Expanded menu will cover the component (will not work along with 'use-input' prop for obvious reasons)

#### Inherited from

Omit.optionsCover

___

### optionsDark

• `Optional` **optionsDark**: `boolean`

Options menu will be colored with a dark color

#### Inherited from

Omit.optionsDark

___

### optionsDense

• `Optional` **optionsDense**: `boolean`

Dense mode for options list; occupies less space

#### Inherited from

Omit.optionsDense

___

### optionsHtml

• `Optional` **optionsHtml**: `boolean`

Force render the options as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'option' slot!

#### Inherited from

Omit.optionsHtml

___

### optionsSelectedClass

• `Optional` **optionsSelectedClass**: `string`

CSS class name for options that are active/selected; Set it to an empty string to stop applying the default (which is text-* where * is the 'color' prop value)

#### Inherited from

Omit.optionsSelectedClass

___

### outlined

• `Optional` **outlined**: `boolean`

Use 'outlined' design for the field

#### Inherited from

Omit.outlined

___

### popupContentClass

• `Optional` **popupContentClass**: `string`

Class definitions to be attributed to the popup content

#### Inherited from

Omit.popupContentClass

___

### popupContentStyle

• `Optional` **popupContentStyle**: `VueStyleProp`

Style definitions to be attributed to the popup content

#### Inherited from

Omit.popupContentStyle

___

### prefix

• `Optional` **prefix**: `string`

Prefix

#### Inherited from

Omit.prefix

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

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

Omit.tabindex

___

### tableColspan

• `Optional` **tableColspan**: `string` \| `number`

The number of columns in the table (you need this if you use table-layout: fixed)

#### Inherited from

Omit.tableColspan

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration when hiding the menu/dialog (in milliseconds, without unit)
Default value: 300

#### Inherited from

Omit.transitionDuration

___

### transitionHide

• `Optional` **transitionHide**: `string`

Transition when hiding the menu/dialog; One of Quasar's embedded transitions
Default value: fade

#### Inherited from

Omit.transitionHide

___

### transitionShow

• `Optional` **transitionShow**: `string`

Transition when showing the menu/dialog; One of Quasar's embedded transitions
Default value: fade

#### Inherited from

Omit.transitionShow

___

### useChips

• `Optional` **useChips**: `boolean`

Use QChip to show what is currently selected

#### Inherited from

Omit.useChips

___

### useInput

• `Optional` **useInput**: `boolean`

Use an input tag where users can type

#### Inherited from

Omit.useInput

___

### virtualScrollHorizontal

• `Optional` **virtualScrollHorizontal**: `boolean`

Make virtual list work in horizontal mode

#### Inherited from

Omit.virtualScrollHorizontal

___

### virtualScrollItemSize

• `Optional` **virtualScrollItemSize**: `string` \| `number`

Default size in pixels (height if vertical, width if horizontal) of an item; This value is used for rendering the initial list; Try to use a value close to the minimum size of an item
Default value: 24

#### Inherited from

Omit.virtualScrollItemSize

___

### virtualScrollSliceRatioAfter

• `Optional` **virtualScrollSliceRatioAfter**: `string` \| `number`

Ratio of number of items in visible zone to render after it
Default value: 1

#### Inherited from

Omit.virtualScrollSliceRatioAfter

___

### virtualScrollSliceRatioBefore

• `Optional` **virtualScrollSliceRatioBefore**: `string` \| `number`

Ratio of number of items in visible zone to render before it
Default value: 1

#### Inherited from

Omit.virtualScrollSliceRatioBefore

___

### virtualScrollSliceSize

• `Optional` **virtualScrollSliceSize**: `string` \| `number`

Minimum number of items to render in the virtual list
Default value: 30

#### Inherited from

Omit.virtualScrollSliceSize

___

### virtualScrollStickySizeEnd

• `Optional` **virtualScrollStickySizeEnd**: `string` \| `number`

Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the end of the list; A correct value will improve scroll precision
Default value: 0

#### Inherited from

Omit.virtualScrollStickySizeEnd

___

### virtualScrollStickySizeStart

• `Optional` **virtualScrollStickySizeStart**: `string` \| `number`

Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the start of the list; A correct value will improve scroll precision
Default value: 0

#### Inherited from

Omit.virtualScrollStickySizeStart

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

Omit.onAdd

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

Omit.onFilter

___

### onFilterAbort

▸ `Optional` **onFilterAbort**(): `void`

Emitted when a filtering was aborted; Probably a new one was requested?

#### Returns

`void`

#### Inherited from

Omit.onFilterAbort

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

Omit.onInputValue

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

Omit.onNewValue

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

Omit.onPopupHide

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

Omit.onPopupShow

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

Omit.onRemove

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

Omit.onVirtualScroll
