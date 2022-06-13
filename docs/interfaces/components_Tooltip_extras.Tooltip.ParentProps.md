[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tooltip.extras](../modules/components_Tooltip_extras.md) / [Tooltip](../modules/components_Tooltip_extras.Tooltip.md) / ParentProps

# Interface: ParentProps

[components/Tooltip.extras](../modules/components_Tooltip_extras.md).[Tooltip](../modules/components_Tooltip_extras.Tooltip.md).ParentProps

## Hierarchy

- `QTooltipProps`

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_Tooltip_extras.Tooltip.Props.md)

## Table of contents

### Properties

- [anchor](components_Tooltip_extras.Tooltip.ParentProps.md#anchor)
- [delay](components_Tooltip_extras.Tooltip.ParentProps.md#delay)
- [hideDelay](components_Tooltip_extras.Tooltip.ParentProps.md#hidedelay)
- [maxHeight](components_Tooltip_extras.Tooltip.ParentProps.md#maxheight)
- [maxWidth](components_Tooltip_extras.Tooltip.ParentProps.md#maxwidth)
- [modelValue](components_Tooltip_extras.Tooltip.ParentProps.md#modelvalue)
- [noParentEvent](components_Tooltip_extras.Tooltip.ParentProps.md#noparentevent)
- [offset](components_Tooltip_extras.Tooltip.ParentProps.md#offset)
- [scrollTarget](components_Tooltip_extras.Tooltip.ParentProps.md#scrolltarget)
- [self](components_Tooltip_extras.Tooltip.ParentProps.md#self)
- [target](components_Tooltip_extras.Tooltip.ParentProps.md#target)
- [transitionDuration](components_Tooltip_extras.Tooltip.ParentProps.md#transitionduration)
- [transitionHide](components_Tooltip_extras.Tooltip.ParentProps.md#transitionhide)
- [transitionShow](components_Tooltip_extras.Tooltip.ParentProps.md#transitionshow)

### Methods

- [onBeforeHide](components_Tooltip_extras.Tooltip.ParentProps.md#onbeforehide)
- [onBeforeShow](components_Tooltip_extras.Tooltip.ParentProps.md#onbeforeshow)
- [onHide](components_Tooltip_extras.Tooltip.ParentProps.md#onhide)
- [onShow](components_Tooltip_extras.Tooltip.ParentProps.md#onshow)
- [onUpdate:modelValue](components_Tooltip_extras.Tooltip.ParentProps.md#onupdate:modelvalue)

## Properties

### anchor

• `Optional` **anchor**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the starting position or anchor point of the Tooltip relative to its target
Default value: bottom middle

#### Inherited from

QTooltipProps.anchor

___

### delay

• `Optional` **delay**: `number`

Configure Tooltip to appear with delay

#### Inherited from

QTooltipProps.delay

___

### hideDelay

• `Optional` **hideDelay**: `number`

Configure Tooltip to disappear with delay

#### Inherited from

QTooltipProps.hideDelay

___

### maxHeight

• `Optional` **maxHeight**: `string`

The maximum height of the Tooltip; Size in CSS units, including unit name

#### Inherited from

QTooltipProps.maxHeight

___

### maxWidth

• `Optional` **maxWidth**: `string`

The maximum width of the Tooltip; Size in CSS units, including unit name

#### Inherited from

QTooltipProps.maxWidth

___

### modelValue

• `Optional` **modelValue**: `boolean`

Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive

#### Inherited from

QTooltipProps.modelValue

___

### noParentEvent

• `Optional` **noParentEvent**: `boolean`

Skips attaching events to the target DOM element (that trigger the element to get shown)

#### Inherited from

QTooltipProps.noParentEvent

___

### offset

• `Optional` **offset**: readonly `any`[]

An array of two numbers to offset the Tooltip horizontally and vertically in pixels
Default value: [14, 14]

#### Inherited from

QTooltipProps.offset

___

### scrollTarget

• `Optional` **scrollTarget**: `string` \| `Element`

CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one

#### Inherited from

QTooltipProps.scrollTarget

___

### self

• `Optional` **self**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the Tooltip's own position relative to its target
Default value: top middle

#### Inherited from

QTooltipProps.self

___

### target

• `Optional` **target**: `string` \| `boolean`

Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
Default value: true

#### Inherited from

QTooltipProps.target

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration (in milliseconds, without unit)
Default value: 300

#### Inherited from

QTooltipProps.transitionDuration

___

### transitionHide

• `Optional` **transitionHide**: `string`

One of Quasar's embedded transitions
Default value: jump-up

#### Inherited from

QTooltipProps.transitionHide

___

### transitionShow

• `Optional` **transitionShow**: `string`

One of Quasar's embedded transitions
Default value: jump-down

#### Inherited from

QTooltipProps.transitionShow

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

QTooltipProps.onBeforeHide

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

QTooltipProps.onBeforeShow

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

QTooltipProps.onHide

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

QTooltipProps.onShow

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

QTooltipProps.onUpdate:modelValue
