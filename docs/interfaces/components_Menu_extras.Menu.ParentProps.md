[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Menu.extras](../modules/components_Menu_extras.md) / [Menu](../modules/components_Menu_extras.Menu.md) / ParentProps

# Interface: ParentProps

[components/Menu.extras](../modules/components_Menu_extras.md).[Menu](../modules/components_Menu_extras.Menu.md).ParentProps

## Hierarchy

- `Omit`<`QMenuProps`, keyof [`OwnProps`](components_Menu_extras.Menu.OwnProps.md) \| keyof [`PluginProps`](components_Menu_extras.Menu.PluginProps.md)\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_Menu_extras.Menu.Props.md)

## Table of contents

### Properties

- [anchor](components_Menu_extras.Menu.ParentProps.md#anchor)
- [contextMenu](components_Menu_extras.Menu.ParentProps.md#contextmenu)
- [cover](components_Menu_extras.Menu.ParentProps.md#cover)
- [dark](components_Menu_extras.Menu.ParentProps.md#dark)
- [fit](components_Menu_extras.Menu.ParentProps.md#fit)
- [maxHeight](components_Menu_extras.Menu.ParentProps.md#maxheight)
- [maxWidth](components_Menu_extras.Menu.ParentProps.md#maxwidth)
- [modelValue](components_Menu_extras.Menu.ParentProps.md#modelvalue)
- [noFocus](components_Menu_extras.Menu.ParentProps.md#nofocus)
- [noParentEvent](components_Menu_extras.Menu.ParentProps.md#noparentevent)
- [noRefocus](components_Menu_extras.Menu.ParentProps.md#norefocus)
- [noRouteDismiss](components_Menu_extras.Menu.ParentProps.md#noroutedismiss)
- [offset](components_Menu_extras.Menu.ParentProps.md#offset)
- [persistent](components_Menu_extras.Menu.ParentProps.md#persistent)
- [scrollTarget](components_Menu_extras.Menu.ParentProps.md#scrolltarget)
- [self](components_Menu_extras.Menu.ParentProps.md#self)
- [separateClosePopup](components_Menu_extras.Menu.ParentProps.md#separateclosepopup)
- [square](components_Menu_extras.Menu.ParentProps.md#square)
- [target](components_Menu_extras.Menu.ParentProps.md#target)
- [touchPosition](components_Menu_extras.Menu.ParentProps.md#touchposition)
- [transitionDuration](components_Menu_extras.Menu.ParentProps.md#transitionduration)
- [transitionHide](components_Menu_extras.Menu.ParentProps.md#transitionhide)
- [transitionShow](components_Menu_extras.Menu.ParentProps.md#transitionshow)

### Methods

- [onBeforeHide](components_Menu_extras.Menu.ParentProps.md#onbeforehide)
- [onBeforeShow](components_Menu_extras.Menu.ParentProps.md#onbeforeshow)
- [onEscapeKey](components_Menu_extras.Menu.ParentProps.md#onescapekey)
- [onHide](components_Menu_extras.Menu.ParentProps.md#onhide)
- [onShow](components_Menu_extras.Menu.ParentProps.md#onshow)
- [onUpdate:modelValue](components_Menu_extras.Menu.ParentProps.md#onupdate:modelvalue)

## Properties

### anchor

• `Optional` **anchor**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the starting position or anchor point of the menu relative to its target

#### Inherited from

Omit.anchor

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

### modelValue

• `Optional` **modelValue**: `boolean`

Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive

#### Inherited from

Omit.modelValue

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

### scrollTarget

• `Optional` **scrollTarget**: `string` \| `Element`

CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one

#### Inherited from

Omit.scrollTarget

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

Emitted when showing/hidden state changes; Is also used by v-model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | New state (showing/hidden) |

#### Returns

`void`

#### Inherited from

Omit.onUpdate:modelValue
