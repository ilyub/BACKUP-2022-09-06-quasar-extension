[Quasar extension](../index.md) / [Exports](../modules.md) / [components/TabPanels.extras](../modules/components_TabPanels_extras.md) / [TabPanels](../modules/components_TabPanels_extras.TabPanels.md) / Props

# Interface: Props<T\>

[components/TabPanels.extras](../modules/components_TabPanels_extras.md).[TabPanels](../modules/components_TabPanels_extras.TabPanels.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStrU` = `NumStrU` |

## Hierarchy

- [`ParentProps`](components_TabPanels_extras.TabPanels.ParentProps.md)

- [`OwnProps`](components_TabPanels_extras.TabPanels.OwnProps.md)<`T`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [animated](components_TabPanels_extras.TabPanels.Props.md#animated)
- [infinite](components_TabPanels_extras.TabPanels.Props.md#infinite)
- [keepAlive](components_TabPanels_extras.TabPanels.Props.md#keepalive)
- [keepAliveExclude](components_TabPanels_extras.TabPanels.Props.md#keepaliveexclude)
- [keepAliveInclude](components_TabPanels_extras.TabPanels.Props.md#keepaliveinclude)
- [keepAliveMax](components_TabPanels_extras.TabPanels.Props.md#keepalivemax)
- [modelValue](components_TabPanels_extras.TabPanels.Props.md#modelvalue)
- [swipeable](components_TabPanels_extras.TabPanels.Props.md#swipeable)
- [transitionDuration](components_TabPanels_extras.TabPanels.Props.md#transitionduration)
- [transitionNext](components_TabPanels_extras.TabPanels.Props.md#transitionnext)
- [transitionPrev](components_TabPanels_extras.TabPanels.Props.md#transitionprev)
- [vertical](components_TabPanels_extras.TabPanels.Props.md#vertical)

### Methods

- [onBeforeTransition](components_TabPanels_extras.TabPanels.Props.md#onbeforetransition)
- [onTransition](components_TabPanels_extras.TabPanels.Props.md#ontransition)
- [onUpdate:modelValue](components_TabPanels_extras.TabPanels.Props.md#onupdate:modelvalue)

## Properties

### animated

• `Optional` **animated**: `boolean`

Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[animated](components_TabPanels_extras.TabPanels.ParentProps.md#animated)

___

### infinite

• `Optional` **infinite**: `boolean`

Makes component appear as infinite (when reaching last panel, next one will become the first one)

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[infinite](components_TabPanels_extras.TabPanels.ParentProps.md#infinite)

___

### keepAlive

• `Optional` **keepAlive**: `boolean`

Equivalent to using Vue's native <keep-alive> component on the content

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[keepAlive](components_TabPanels_extras.TabPanels.ParentProps.md#keepalive)

___

### keepAliveExclude

• `Optional` **keepAliveExclude**: `string` \| `RegExp` \| readonly `any`[]

Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[keepAliveExclude](components_TabPanels_extras.TabPanels.ParentProps.md#keepaliveexclude)

___

### keepAliveInclude

• `Optional` **keepAliveInclude**: `string` \| `RegExp` \| readonly `any`[]

Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[keepAliveInclude](components_TabPanels_extras.TabPanels.ParentProps.md#keepaliveinclude)

___

### keepAliveMax

• `Optional` **keepAliveMax**: `number`

Equivalent to using Vue's native max prop for <keep-alive>

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[keepAliveMax](components_TabPanels_extras.TabPanels.ParentProps.md#keepalivemax)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

#### Inherited from

[OwnProps](components_TabPanels_extras.TabPanels.OwnProps.md).[modelValue](components_TabPanels_extras.TabPanels.OwnProps.md#modelvalue)

___

### swipeable

• `Optional` **swipeable**: `boolean`

Enable swipe events (may interfere with content's touch/mouse events)

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[swipeable](components_TabPanels_extras.TabPanels.ParentProps.md#swipeable)

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration (in milliseconds, without unit)
Default value: 300

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[transitionDuration](components_TabPanels_extras.TabPanels.ParentProps.md#transitionduration)

___

### transitionNext

• `Optional` **transitionNext**: `string`

One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
Default value: slide-left/slide-up

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[transitionNext](components_TabPanels_extras.TabPanels.ParentProps.md#transitionnext)

___

### transitionPrev

• `Optional` **transitionPrev**: `string`

One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
Default value: slide-right/slide-down

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[transitionPrev](components_TabPanels_extras.TabPanels.ParentProps.md#transitionprev)

___

### vertical

• `Optional` **vertical**: `boolean`

Default transitions and swipe actions will be on the vertical axis

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[vertical](components_TabPanels_extras.TabPanels.ParentProps.md#vertical)

## Methods

### onBeforeTransition

▸ `Optional` **onBeforeTransition**(`newVal`, `oldVal`): `void`

Emitted before transitioning to a new panel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newVal` | `string` \| `number` | Panel name towards transition is going |
| `oldVal` | `string` \| `number` | Panel name from which transition is happening |

#### Returns

`void`

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[onBeforeTransition](components_TabPanels_extras.TabPanels.ParentProps.md#onbeforetransition)

___

### onTransition

▸ `Optional` **onTransition**(`newVal`, `oldVal`): `void`

Emitted after component transitioned to a new panel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newVal` | `string` \| `number` | Panel name towards transition has occurred |
| `oldVal` | `string` \| `number` | Panel name from which transition has happened |

#### Returns

`void`

#### Inherited from

[ParentProps](components_TabPanels_extras.TabPanels.ParentProps.md).[onTransition](components_TabPanels_extras.TabPanels.ParentProps.md#ontransition)

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

[OwnProps](components_TabPanels_extras.TabPanels.OwnProps.md).[onUpdate:modelValue](components_TabPanels_extras.TabPanels.OwnProps.md#onupdate:modelvalue)
