[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Menu.extras](../modules/components_Menu_extras.md) / [Menu](../modules/components_Menu_extras.Menu.md) / Props

# Interface: Props

[components/Menu.extras](../modules/components_Menu_extras.md).[Menu](../modules/components_Menu_extras.Menu.md).Props

## Hierarchy

- [`ParentProps`](components_Menu_extras.Menu.ParentProps.md)

- [`PluginProps`](components_Menu_extras.Menu.PluginProps.md)

- [`OwnProps`](components_Menu_extras.Menu.OwnProps.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [anchor](components_Menu_extras.Menu.Props.md#anchor)
- [autoClose](components_Menu_extras.Menu.Props.md#autoclose)
- [contextMenu](components_Menu_extras.Menu.Props.md#contextmenu)
- [cover](components_Menu_extras.Menu.Props.md#cover)
- [dark](components_Menu_extras.Menu.Props.md#dark)
- [direction](components_Menu_extras.Menu.Props.md#direction)
- [fit](components_Menu_extras.Menu.Props.md#fit)
- [maxHeight](components_Menu_extras.Menu.Props.md#maxheight)
- [maxWidth](components_Menu_extras.Menu.Props.md#maxwidth)
- [modelValue](components_Menu_extras.Menu.Props.md#modelvalue)
- [noFocus](components_Menu_extras.Menu.Props.md#nofocus)
- [noParentEvent](components_Menu_extras.Menu.Props.md#noparentevent)
- [noRefocus](components_Menu_extras.Menu.Props.md#norefocus)
- [noRouteDismiss](components_Menu_extras.Menu.Props.md#noroutedismiss)
- [offset](components_Menu_extras.Menu.Props.md#offset)
- [persistent](components_Menu_extras.Menu.Props.md#persistent)
- [scrollTarget](components_Menu_extras.Menu.Props.md#scrolltarget)
- [self](components_Menu_extras.Menu.Props.md#self)
- [separateClosePopup](components_Menu_extras.Menu.Props.md#separateclosepopup)
- [square](components_Menu_extras.Menu.Props.md#square)
- [target](components_Menu_extras.Menu.Props.md#target)
- [touchPosition](components_Menu_extras.Menu.Props.md#touchposition)
- [transitionDuration](components_Menu_extras.Menu.Props.md#transitionduration)
- [transitionHide](components_Menu_extras.Menu.Props.md#transitionhide)
- [transitionShow](components_Menu_extras.Menu.Props.md#transitionshow)

### Methods

- [onBeforeHide](components_Menu_extras.Menu.Props.md#onbeforehide)
- [onBeforeShow](components_Menu_extras.Menu.Props.md#onbeforeshow)
- [onEscapeKey](components_Menu_extras.Menu.Props.md#onescapekey)
- [onHide](components_Menu_extras.Menu.Props.md#onhide)
- [onShow](components_Menu_extras.Menu.Props.md#onshow)
- [onUpdate:modelValue](components_Menu_extras.Menu.Props.md#onupdate:modelvalue)

## Properties

### anchor

• `Optional` **anchor**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the starting position or anchor point of the menu relative to its target

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[anchor](components_Menu_extras.Menu.ParentProps.md#anchor)

___

### autoClose

• `Optional` `Readonly` **autoClose**: `booleanU`

#### Inherited from

[OwnProps](components_Menu_extras.Menu.OwnProps.md).[autoClose](components_Menu_extras.Menu.OwnProps.md#autoclose)

___

### contextMenu

• `Optional` **contextMenu**: `boolean`

Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[contextMenu](components_Menu_extras.Menu.ParentProps.md#contextmenu)

___

### cover

• `Optional` **cover**: `boolean`

Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[cover](components_Menu_extras.Menu.ParentProps.md#cover)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[dark](components_Menu_extras.Menu.ParentProps.md#dark)

___

### direction

• `Optional` `Readonly` **direction**: [`Direction`](../modules/components_api_direction.direction.md#direction)

#### Inherited from

[PluginProps](components_Menu_extras.Menu.PluginProps.md).[direction](components_Menu_extras.Menu.PluginProps.md#direction)

___

### fit

• `Optional` **fit**: `boolean`

Allows the menu to match at least the full width of its target

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[fit](components_Menu_extras.Menu.ParentProps.md#fit)

___

### maxHeight

• `Optional` **maxHeight**: `string`

The maximum height of the menu; Size in CSS units, including unit name

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[maxHeight](components_Menu_extras.Menu.ParentProps.md#maxheight)

___

### maxWidth

• `Optional` **maxWidth**: `string`

The maximum width of the menu; Size in CSS units, including unit name

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[maxWidth](components_Menu_extras.Menu.ParentProps.md#maxwidth)

___

### modelValue

• `Optional` **modelValue**: `boolean`

Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[modelValue](components_Menu_extras.Menu.ParentProps.md#modelvalue)

___

### noFocus

• `Optional` **noFocus**: `boolean`

(Accessibility) When Menu gets shown, do not switch focus on it

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[noFocus](components_Menu_extras.Menu.ParentProps.md#nofocus)

___

### noParentEvent

• `Optional` **noParentEvent**: `boolean`

Skips attaching events to the target DOM element (that trigger the element to get shown)

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[noParentEvent](components_Menu_extras.Menu.ParentProps.md#noparentevent)

___

### noRefocus

• `Optional` **noRefocus**: `boolean`

(Accessibility) When Menu gets hidden, do not refocus on the DOM element that previously had focus

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[noRefocus](components_Menu_extras.Menu.ParentProps.md#norefocus)

___

### noRouteDismiss

• `Optional` **noRouteDismiss**: `boolean`

Changing route app won't dismiss the popup; No need to set it if 'persistent' prop is also set

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[noRouteDismiss](components_Menu_extras.Menu.ParentProps.md#noroutedismiss)

___

### offset

• `Optional` **offset**: readonly `any`[]

An array of two numbers to offset the menu horizontally and vertically in pixels

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[offset](components_Menu_extras.Menu.ParentProps.md#offset)

___

### persistent

• `Optional` **persistent**: `boolean`

Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[persistent](components_Menu_extras.Menu.ParentProps.md#persistent)

___

### scrollTarget

• `Optional` **scrollTarget**: `string` \| `Element`

CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[scrollTarget](components_Menu_extras.Menu.ParentProps.md#scrolltarget)

___

### self

• `Optional` **self**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the menu's own position relative to its target

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[self](components_Menu_extras.Menu.ParentProps.md#self)

___

### separateClosePopup

• `Optional` **separateClosePopup**: `boolean`

Separate from parent menu, marking it as a separate closing point for v-close-popup (without this, chained menus close all together)

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[separateClosePopup](components_Menu_extras.Menu.ParentProps.md#separateclosepopup)

___

### square

• `Optional` **square**: `boolean`

Forces content to have squared borders

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[square](components_Menu_extras.Menu.ParentProps.md#square)

___

### target

• `Optional` **target**: `string` \| `boolean` \| `Element`

Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists)
Default value: true

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[target](components_Menu_extras.Menu.ParentProps.md#target)

___

### touchPosition

• `Optional` **touchPosition**: `boolean`

Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[touchPosition](components_Menu_extras.Menu.ParentProps.md#touchposition)

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration (in milliseconds, without unit)
Default value: 300

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[transitionDuration](components_Menu_extras.Menu.ParentProps.md#transitionduration)

___

### transitionHide

• `Optional` **transitionHide**: `string`

One of Quasar's embedded transitions
Default value: fade

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[transitionHide](components_Menu_extras.Menu.ParentProps.md#transitionhide)

___

### transitionShow

• `Optional` **transitionShow**: `string`

One of Quasar's embedded transitions
Default value: fade

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[transitionShow](components_Menu_extras.Menu.ParentProps.md#transitionshow)

## Methods

### onBeforeHide

▸ `Optional` **onBeforeHide**(`evt`): `void`

Emitted when component triggers hide() but before it finishes doing it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[onBeforeHide](components_Menu_extras.Menu.ParentProps.md#onbeforehide)

___

### onBeforeShow

▸ `Optional` **onBeforeShow**(`evt`): `void`

Emitted when component triggers show() but before it finishes doing it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[onBeforeShow](components_Menu_extras.Menu.ParentProps.md#onbeforeshow)

___

### onEscapeKey

▸ `Optional` **onEscapeKey**(): `void`

Emitted when ESC key is pressed; Does not get emitted if Menu is 'persistent'

#### Returns

`void`

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[onEscapeKey](components_Menu_extras.Menu.ParentProps.md#onescapekey)

___

### onHide

▸ `Optional` **onHide**(`evt`): `void`

Emitted after component has triggered hide()

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[onHide](components_Menu_extras.Menu.ParentProps.md#onhide)

___

### onShow

▸ `Optional` **onShow**(`evt`): `void`

Emitted after component has triggered show()

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[onShow](components_Menu_extras.Menu.ParentProps.md#onshow)

___

### onUpdate:modelValue

▸ `Optional` **onUpdate:modelValue**(`value`): `void`

Emitted when showing/hidden state changes; Is also used by v-model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | New state (showing/hidden) |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Menu_extras.Menu.ParentProps.md).[onUpdate:modelValue](components_Menu_extras.Menu.ParentProps.md#onupdate:modelvalue)
