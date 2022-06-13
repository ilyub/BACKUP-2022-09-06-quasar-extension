[Quasar extension](../index.md) / [Exports](../modules.md) / [components/PopupProxy.extras](../modules/components_PopupProxy_extras.md) / [PopupProxy](../modules/components_PopupProxy_extras.PopupProxy.md) / ParentProps

# Interface: ParentProps

[components/PopupProxy.extras](../modules/components_PopupProxy_extras.md).[PopupProxy](../modules/components_PopupProxy_extras.PopupProxy.md).ParentProps

## Hierarchy

- `Omit`<[`QPopupProxyProps`](components_PopupProxy_extras.PopupProxy.QPopupProxyProps.md), keyof [`PluginProps`](components_PopupProxy_extras.PopupProxy.PluginProps.md)\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_PopupProxy_extras.PopupProxy.Props.md)

## Table of contents

### Properties

- [anchor](components_PopupProxy_extras.PopupProxy.ParentProps.md#anchor)
- [autoClose](components_PopupProxy_extras.PopupProxy.ParentProps.md#autoclose)
- [breakpoint](components_PopupProxy_extras.PopupProxy.ParentProps.md#breakpoint)
- [contextMenu](components_PopupProxy_extras.PopupProxy.ParentProps.md#contextmenu)
- [cover](components_PopupProxy_extras.PopupProxy.ParentProps.md#cover)
- [dark](components_PopupProxy_extras.PopupProxy.ParentProps.md#dark)
- [fit](components_PopupProxy_extras.PopupProxy.ParentProps.md#fit)
- [fullHeight](components_PopupProxy_extras.PopupProxy.ParentProps.md#fullheight)
- [fullWidth](components_PopupProxy_extras.PopupProxy.ParentProps.md#fullwidth)
- [maxHeight](components_PopupProxy_extras.PopupProxy.ParentProps.md#maxheight)
- [maxWidth](components_PopupProxy_extras.PopupProxy.ParentProps.md#maxwidth)
- [maximized](components_PopupProxy_extras.PopupProxy.ParentProps.md#maximized)
- [modelValue](components_PopupProxy_extras.PopupProxy.ParentProps.md#modelvalue)
- [noBackdropDismiss](components_PopupProxy_extras.PopupProxy.ParentProps.md#nobackdropdismiss)
- [noEscDismiss](components_PopupProxy_extras.PopupProxy.ParentProps.md#noescdismiss)
- [noFocus](components_PopupProxy_extras.PopupProxy.ParentProps.md#nofocus)
- [noParentEvent](components_PopupProxy_extras.PopupProxy.ParentProps.md#noparentevent)
- [noRefocus](components_PopupProxy_extras.PopupProxy.ParentProps.md#norefocus)
- [noRouteDismiss](components_PopupProxy_extras.PopupProxy.ParentProps.md#noroutedismiss)
- [noShake](components_PopupProxy_extras.PopupProxy.ParentProps.md#noshake)
- [offset](components_PopupProxy_extras.PopupProxy.ParentProps.md#offset)
- [persistent](components_PopupProxy_extras.PopupProxy.ParentProps.md#persistent)
- [position](components_PopupProxy_extras.PopupProxy.ParentProps.md#position)
- [scrollTarget](components_PopupProxy_extras.PopupProxy.ParentProps.md#scrolltarget)
- [seamless](components_PopupProxy_extras.PopupProxy.ParentProps.md#seamless)
- [self](components_PopupProxy_extras.PopupProxy.ParentProps.md#self)
- [separateClosePopup](components_PopupProxy_extras.PopupProxy.ParentProps.md#separateclosepopup)
- [square](components_PopupProxy_extras.PopupProxy.ParentProps.md#square)
- [target](components_PopupProxy_extras.PopupProxy.ParentProps.md#target)
- [touchPosition](components_PopupProxy_extras.PopupProxy.ParentProps.md#touchposition)
- [transitionDuration](components_PopupProxy_extras.PopupProxy.ParentProps.md#transitionduration)
- [transitionHide](components_PopupProxy_extras.PopupProxy.ParentProps.md#transitionhide)
- [transitionShow](components_PopupProxy_extras.PopupProxy.ParentProps.md#transitionshow)

### Methods

- [onBeforeHide](components_PopupProxy_extras.PopupProxy.ParentProps.md#onbeforehide)
- [onBeforeShow](components_PopupProxy_extras.PopupProxy.ParentProps.md#onbeforeshow)
- [onEscapeKey](components_PopupProxy_extras.PopupProxy.ParentProps.md#onescapekey)
- [onHide](components_PopupProxy_extras.PopupProxy.ParentProps.md#onhide)
- [onShake](components_PopupProxy_extras.PopupProxy.ParentProps.md#onshake)
- [onShow](components_PopupProxy_extras.PopupProxy.ParentProps.md#onshow)
- [onUpdate:modelValue](components_PopupProxy_extras.PopupProxy.ParentProps.md#onupdate:modelvalue)

## Properties

### anchor

• `Optional` **anchor**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the starting position or anchor point of the menu relative to its target

#### Inherited from

Omit.anchor

___

### autoClose

• `Optional` **autoClose**: `boolean`

Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap

#### Inherited from

Omit.autoClose

___

### breakpoint

• `Optional` **breakpoint**: `string` \| `number`

Breakpoint (in pixels) of window width/height (whichever is smaller) from where a Menu will get to be used instead of a Dialog
Default value: 450

#### Inherited from

Omit.breakpoint

___

### contextMenu

• `Optional` **contextMenu**: `boolean`

Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)

#### Inherited from

Omit.contextMenu

___

### cover

• `Optional` **cover**: `boolean`

Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective

#### Inherited from

Omit.cover

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

Omit.dark

___

### fit

• `Optional` **fit**: `boolean`

Allows the menu to match at least the full width of its target

#### Inherited from

Omit.fit

___

### fullHeight

• `Optional` **fullHeight**: `boolean`

Dialog will try to render with same height as the window

#### Inherited from

Omit.fullHeight

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

Dialog will try to render with same width as the window

#### Inherited from

Omit.fullWidth

___

### maxHeight

• `Optional` **maxHeight**: `string`

The maximum height of the menu; Size in CSS units, including unit name

#### Inherited from

Omit.maxHeight

___

### maxWidth

• `Optional` **maxWidth**: `string`

The maximum width of the menu; Size in CSS units, including unit name

#### Inherited from

Omit.maxWidth

___

### maximized

• `Optional` **maximized**: `boolean`

Put Dialog into maximized mode

#### Inherited from

Omit.maximized

___

### modelValue

• `Optional` **modelValue**: `boolean`

Defines the state of the component (shown/hidden); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive

#### Inherited from

Omit.modelValue

___

### noBackdropDismiss

• `Optional` **noBackdropDismiss**: `boolean`

User cannot dismiss Dialog by clicking outside of it; No need to set it if 'persistent' prop is also set

#### Inherited from

Omit.noBackdropDismiss

___

### noEscDismiss

• `Optional` **noEscDismiss**: `boolean`

User cannot dismiss Dialog by hitting ESC key; No need to set it if 'persistent' prop is also set

#### Inherited from

Omit.noEscDismiss

___

### noFocus

• `Optional` **noFocus**: `boolean`

(Accessibility) When Menu gets shown, do not switch focus on it

#### Inherited from

Omit.noFocus

___

### noParentEvent

• `Optional` **noParentEvent**: `boolean`

Skips attaching events to the target DOM element (that trigger the element to get shown)

#### Inherited from

Omit.noParentEvent

___

### noRefocus

• `Optional` **noRefocus**: `boolean`

(Accessibility) When Menu gets hidden, do not refocus on the DOM element that previously had focus

#### Inherited from

Omit.noRefocus

___

### noRouteDismiss

• `Optional` **noRouteDismiss**: `boolean`

Changing route app won't dismiss the popup; No need to set it if 'persistent' prop is also set

#### Inherited from

Omit.noRouteDismiss

___

### noShake

• `Optional` **noShake**: `boolean`

Do not shake up the Dialog to catch user's attention

#### Inherited from

Omit.noShake

___

### offset

• `Optional` **offset**: readonly `any`[]

An array of two numbers to offset the menu horizontally and vertically in pixels

#### Inherited from

Omit.offset

___

### persistent

• `Optional` **persistent**: `boolean`

Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key

#### Inherited from

Omit.persistent

___

### position

• `Optional` **position**: ``"left"`` \| ``"right"`` \| ``"standard"`` \| ``"top"`` \| ``"bottom"``

Stick dialog to one of the sides (top, right, bottom or left)
Default value: standard

#### Inherited from

Omit.position

___

### scrollTarget

• `Optional` **scrollTarget**: `string` \| `Element`

CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one

#### Inherited from

Omit.scrollTarget

___

### seamless

• `Optional` **seamless**: `boolean`

Put Dialog into seamless mode; Does not use a backdrop so user is able to interact with the rest of the page too

#### Inherited from

Omit.seamless

___

### self

• `Optional` **self**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the menu's own position relative to its target

#### Inherited from

Omit.self

___

### separateClosePopup

• `Optional` **separateClosePopup**: `boolean`

Separate from parent menu, marking it as a separate closing point for v-close-popup (without this, chained menus close all together)

#### Inherited from

Omit.separateClosePopup

___

### square

• `Optional` **square**: `boolean`

Forces content to have squared borders

#### Inherited from

Omit.square

___

### target

• `Optional` **target**: `string` \| `boolean` \| `Element`

Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists)
Default value: true

#### Inherited from

Omit.target

___

### touchPosition

• `Optional` **touchPosition**: `boolean`

Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched

#### Inherited from

Omit.touchPosition

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration (in milliseconds, without unit)
Default value: 300

#### Inherited from

Omit.transitionDuration

___

### transitionHide

• `Optional` **transitionHide**: `string`

One of Quasar's embedded transitions
Default value: fade

#### Inherited from

Omit.transitionHide

___

### transitionShow

• `Optional` **transitionShow**: `string`

One of Quasar's embedded transitions
Default value: fade

#### Inherited from

Omit.transitionShow

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

Omit.onBeforeHide

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

Omit.onBeforeShow

___

### onEscapeKey

▸ `Optional` **onEscapeKey**(): `void`

Emitted when ESC key is pressed; Does not get emitted if Menu is 'persistent'

#### Returns

`void`

#### Inherited from

Omit.onEscapeKey

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

Omit.onHide

___

### onShake

▸ `Optional` **onShake**(): `void`

Emitted when the Dialog shakes in order to catch user's attention, unless the 'no-shake' property is set

#### Returns

`void`

#### Inherited from

Omit.onShake

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

Omit.onShow

___

### onUpdate:modelValue

▸ `Optional` **onUpdate:modelValue**(`value`): `void`

Emitted when the component needs to change the model; Is also used by v-model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | New model value |

#### Returns

`void`

#### Inherited from

Omit.onUpdate:modelValue
