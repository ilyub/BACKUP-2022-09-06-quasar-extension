[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tooltip.extras](../modules/components_Tooltip_extras.md) / [Tooltip](../modules/components_Tooltip_extras.Tooltip.md) / Props

# Interface: Props

[components/Tooltip.extras](../modules/components_Tooltip_extras.md).[Tooltip](../modules/components_Tooltip_extras.Tooltip.md).Props

## Hierarchy

- [`ParentProps`](components_Tooltip_extras.Tooltip.ParentProps.md)

- [`PluginProps`](components_Tooltip_extras.Tooltip.PluginProps.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [anchor](components_Tooltip_extras.Tooltip.Props.md#anchor)
- [delay](components_Tooltip_extras.Tooltip.Props.md#delay)
- [direction](components_Tooltip_extras.Tooltip.Props.md#direction)
- [hideDelay](components_Tooltip_extras.Tooltip.Props.md#hidedelay)
- [maxHeight](components_Tooltip_extras.Tooltip.Props.md#maxheight)
- [maxWidth](components_Tooltip_extras.Tooltip.Props.md#maxwidth)
- [modelValue](components_Tooltip_extras.Tooltip.Props.md#modelvalue)
- [noParentEvent](components_Tooltip_extras.Tooltip.Props.md#noparentevent)
- [offset](components_Tooltip_extras.Tooltip.Props.md#offset)
- [scrollTarget](components_Tooltip_extras.Tooltip.Props.md#scrolltarget)
- [self](components_Tooltip_extras.Tooltip.Props.md#self)
- [target](components_Tooltip_extras.Tooltip.Props.md#target)
- [transitionDuration](components_Tooltip_extras.Tooltip.Props.md#transitionduration)
- [transitionHide](components_Tooltip_extras.Tooltip.Props.md#transitionhide)
- [transitionShow](components_Tooltip_extras.Tooltip.Props.md#transitionshow)

### Methods

- [onBeforeHide](components_Tooltip_extras.Tooltip.Props.md#onbeforehide)
- [onBeforeShow](components_Tooltip_extras.Tooltip.Props.md#onbeforeshow)
- [onHide](components_Tooltip_extras.Tooltip.Props.md#onhide)
- [onShow](components_Tooltip_extras.Tooltip.Props.md#onshow)
- [onUpdate:modelValue](components_Tooltip_extras.Tooltip.Props.md#onupdate:modelvalue)

## Properties

### anchor

• `Optional` **anchor**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the starting position or anchor point of the Tooltip relative to its target
Default value: bottom middle

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[anchor](components_Tooltip_extras.Tooltip.ParentProps.md#anchor)

___

### delay

• `Optional` **delay**: `number`

Configure Tooltip to appear with delay

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[delay](components_Tooltip_extras.Tooltip.ParentProps.md#delay)

___

### direction

• `Optional` `Readonly` **direction**: [`Direction`](../modules/components_api_direction.direction.md#direction)

#### Inherited from

[PluginProps](components_Tooltip_extras.Tooltip.PluginProps.md).[direction](components_Tooltip_extras.Tooltip.PluginProps.md#direction)

___

### hideDelay

• `Optional` **hideDelay**: `number`

Configure Tooltip to disappear with delay

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[hideDelay](components_Tooltip_extras.Tooltip.ParentProps.md#hidedelay)

___

### maxHeight

• `Optional` **maxHeight**: `string`

The maximum height of the Tooltip; Size in CSS units, including unit name

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[maxHeight](components_Tooltip_extras.Tooltip.ParentProps.md#maxheight)

___

### maxWidth

• `Optional` **maxWidth**: `string`

The maximum width of the Tooltip; Size in CSS units, including unit name

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[maxWidth](components_Tooltip_extras.Tooltip.ParentProps.md#maxwidth)

___

### modelValue

• `Optional` **modelValue**: `boolean`

Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[modelValue](components_Tooltip_extras.Tooltip.ParentProps.md#modelvalue)

___

### noParentEvent

• `Optional` **noParentEvent**: `boolean`

Skips attaching events to the target DOM element (that trigger the element to get shown)

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[noParentEvent](components_Tooltip_extras.Tooltip.ParentProps.md#noparentevent)

___

### offset

• `Optional` **offset**: readonly `any`[]

An array of two numbers to offset the Tooltip horizontally and vertically in pixels
Default value: [14, 14]

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[offset](components_Tooltip_extras.Tooltip.ParentProps.md#offset)

___

### scrollTarget

• `Optional` **scrollTarget**: `string` \| `Element`

CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[scrollTarget](components_Tooltip_extras.Tooltip.ParentProps.md#scrolltarget)

___

### self

• `Optional` **self**: ``"bottom left"`` \| ``"bottom middle"`` \| ``"bottom right"`` \| ``"center left"`` \| ``"center right"`` \| ``"top left"`` \| ``"top middle"`` \| ``"top right"`` \| ``"top start"`` \| ``"top end"`` \| ``"center middle"`` \| ``"center start"`` \| ``"center end"`` \| ``"bottom start"`` \| ``"bottom end"``

Two values setting the Tooltip's own position relative to its target
Default value: top middle

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[self](components_Tooltip_extras.Tooltip.ParentProps.md#self)

___

### target

• `Optional` **target**: `string` \| `boolean`

Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
Default value: true

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[target](components_Tooltip_extras.Tooltip.ParentProps.md#target)

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration (in milliseconds, without unit)
Default value: 300

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[transitionDuration](components_Tooltip_extras.Tooltip.ParentProps.md#transitionduration)

___

### transitionHide

• `Optional` **transitionHide**: `string`

One of Quasar's embedded transitions
Default value: jump-up

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[transitionHide](components_Tooltip_extras.Tooltip.ParentProps.md#transitionhide)

___

### transitionShow

• `Optional` **transitionShow**: `string`

One of Quasar's embedded transitions
Default value: jump-down

#### Inherited from

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[transitionShow](components_Tooltip_extras.Tooltip.ParentProps.md#transitionshow)

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

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[onBeforeHide](components_Tooltip_extras.Tooltip.ParentProps.md#onbeforehide)

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

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[onBeforeShow](components_Tooltip_extras.Tooltip.ParentProps.md#onbeforeshow)

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

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[onHide](components_Tooltip_extras.Tooltip.ParentProps.md#onhide)

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

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[onShow](components_Tooltip_extras.Tooltip.ParentProps.md#onshow)

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

[ParentProps](components_Tooltip_extras.Tooltip.ParentProps.md).[onUpdate:modelValue](components_Tooltip_extras.Tooltip.ParentProps.md#onupdate:modelvalue)
