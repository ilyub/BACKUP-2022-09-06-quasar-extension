[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tooltip.extras](../modules/components_Tooltip_extras.md) / TooltipProps

# Interface: TooltipProps

[components/Tooltip.extras](../modules/components_Tooltip_extras.md).TooltipProps

## Hierarchy

- [`TooltipParentProps`](../modules/components_Tooltip_extras.md#tooltipparentprops)

- [`TooltipOwnProps`](components_Tooltip_extras.TooltipOwnProps.md)

  ↳ **`TooltipProps`**

## Table of contents

### Properties

- [anchor](components_Tooltip_extras.TooltipProps.md#anchor)
- [delay](components_Tooltip_extras.TooltipProps.md#delay)
- [direction](components_Tooltip_extras.TooltipProps.md#direction)
- [hideDelay](components_Tooltip_extras.TooltipProps.md#hidedelay)
- [maxHeight](components_Tooltip_extras.TooltipProps.md#maxheight)
- [maxWidth](components_Tooltip_extras.TooltipProps.md#maxwidth)
- [modelValue](components_Tooltip_extras.TooltipProps.md#modelvalue)
- [noParentEvent](components_Tooltip_extras.TooltipProps.md#noparentevent)
- [offset](components_Tooltip_extras.TooltipProps.md#offset)
- [scrollTarget](components_Tooltip_extras.TooltipProps.md#scrolltarget)
- [self](components_Tooltip_extras.TooltipProps.md#self)
- [target](components_Tooltip_extras.TooltipProps.md#target)
- [transitionDuration](components_Tooltip_extras.TooltipProps.md#transitionduration)
- [transitionHide](components_Tooltip_extras.TooltipProps.md#transitionhide)
- [transitionShow](components_Tooltip_extras.TooltipProps.md#transitionshow)

### Methods

- [onBeforeHide](components_Tooltip_extras.TooltipProps.md#onbeforehide)
- [onBeforeShow](components_Tooltip_extras.TooltipProps.md#onbeforeshow)
- [onHide](components_Tooltip_extras.TooltipProps.md#onhide)
- [onShow](components_Tooltip_extras.TooltipProps.md#onshow)
- [onUpdate:modelValue](components_Tooltip_extras.TooltipProps.md#onupdate:modelvalue)

## Properties

### anchor

• `Optional` **anchor**: ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center left"`` \| ``"center middle"`` \| ``"center right"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the starting position or anchor point of the Tooltip relative to its target
Default value: bottom middle

#### Inherited from

TooltipParentProps.anchor

___

### delay

• `Optional` **delay**: `number`

Configure Tooltip to appear with delay

#### Inherited from

TooltipParentProps.delay

___

### direction

• `Optional` `Readonly` **direction**: [`Direction`](../modules/components_Tooltip_extras.md#direction)

#### Inherited from

[TooltipOwnProps](components_Tooltip_extras.TooltipOwnProps.md).[direction](components_Tooltip_extras.TooltipOwnProps.md#direction)

___

### hideDelay

• `Optional` **hideDelay**: `number`

Configure Tooltip to disappear with delay

#### Inherited from

TooltipParentProps.hideDelay

___

### maxHeight

• `Optional` **maxHeight**: `string`

The maximum height of the Tooltip; Size in CSS units, including unit name

#### Inherited from

TooltipParentProps.maxHeight

___

### maxWidth

• `Optional` **maxWidth**: `string`

The maximum width of the Tooltip; Size in CSS units, including unit name

#### Inherited from

TooltipParentProps.maxWidth

___

### modelValue

• `Optional` **modelValue**: `boolean`

Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive

#### Inherited from

TooltipParentProps.modelValue

___

### noParentEvent

• `Optional` **noParentEvent**: `boolean`

Skips attaching events to the target DOM element (that trigger the element to get shown)

#### Inherited from

TooltipParentProps.noParentEvent

___

### offset

• `Optional` **offset**: `any`[]

An array of two numbers to offset the Tooltip horizontally and vertically in pixels
Default value: [14, 14]

#### Inherited from

TooltipParentProps.offset

___

### scrollTarget

• `Optional` **scrollTarget**: `string` \| `Element`

CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one

#### Inherited from

TooltipParentProps.scrollTarget

___

### self

• `Optional` **self**: ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center left"`` \| ``"center middle"`` \| ``"center right"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the Tooltip's own position relative to its target
Default value: top middle

#### Inherited from

TooltipParentProps.self

___

### target

• `Optional` **target**: `string` \| `boolean`

Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
Default value: true

#### Inherited from

TooltipParentProps.target

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration (in milliseconds, without unit)
Default value: 300

#### Inherited from

TooltipParentProps.transitionDuration

___

### transitionHide

• `Optional` **transitionHide**: `string`

One of Quasar's embedded transitions
Default value: jump-up

#### Inherited from

TooltipParentProps.transitionHide

___

### transitionShow

• `Optional` **transitionShow**: `string`

One of Quasar's embedded transitions
Default value: jump-down

#### Inherited from

TooltipParentProps.transitionShow

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

TooltipParentProps.onBeforeHide

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

TooltipParentProps.onBeforeShow

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

TooltipParentProps.onHide

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

TooltipParentProps.onShow

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

TooltipParentProps.onUpdate:modelValue
