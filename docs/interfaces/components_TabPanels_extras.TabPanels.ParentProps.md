[Quasar extension](../index.md) / [Exports](../modules.md) / [components/TabPanels.extras](../modules/components_TabPanels_extras.md) / [TabPanels](../modules/components_TabPanels_extras.TabPanels.md) / ParentProps

# Interface: ParentProps

[components/TabPanels.extras](../modules/components_TabPanels_extras.md).[TabPanels](../modules/components_TabPanels_extras.TabPanels.md).ParentProps

## Hierarchy

- `Omit`<`QTabPanelsProps`, keyof [`OwnProps`](components_TabPanels_extras.TabPanels.OwnProps.md)\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_TabPanels_extras.TabPanels.Props.md)

## Table of contents

### Properties

- [animated](components_TabPanels_extras.TabPanels.ParentProps.md#animated)
- [infinite](components_TabPanels_extras.TabPanels.ParentProps.md#infinite)
- [keepAlive](components_TabPanels_extras.TabPanels.ParentProps.md#keepalive)
- [keepAliveExclude](components_TabPanels_extras.TabPanels.ParentProps.md#keepaliveexclude)
- [keepAliveInclude](components_TabPanels_extras.TabPanels.ParentProps.md#keepaliveinclude)
- [keepAliveMax](components_TabPanels_extras.TabPanels.ParentProps.md#keepalivemax)
- [swipeable](components_TabPanels_extras.TabPanels.ParentProps.md#swipeable)
- [transitionDuration](components_TabPanels_extras.TabPanels.ParentProps.md#transitionduration)
- [transitionNext](components_TabPanels_extras.TabPanels.ParentProps.md#transitionnext)
- [transitionPrev](components_TabPanels_extras.TabPanels.ParentProps.md#transitionprev)
- [vertical](components_TabPanels_extras.TabPanels.ParentProps.md#vertical)

### Methods

- [onBeforeTransition](components_TabPanels_extras.TabPanels.ParentProps.md#onbeforetransition)
- [onTransition](components_TabPanels_extras.TabPanels.ParentProps.md#ontransition)

## Properties

### animated

• `Optional` **animated**: `boolean`

Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)

#### Inherited from

Omit.animated

___

### infinite

• `Optional` **infinite**: `boolean`

Makes component appear as infinite (when reaching last panel, next one will become the first one)

#### Inherited from

Omit.infinite

___

### keepAlive

• `Optional` **keepAlive**: `boolean`

Equivalent to using Vue's native <keep-alive> component on the content

#### Inherited from

Omit.keepAlive

___

### keepAliveExclude

• `Optional` **keepAliveExclude**: `string` \| `RegExp` \| readonly `any`[]

Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names

#### Inherited from

Omit.keepAliveExclude

___

### keepAliveInclude

• `Optional` **keepAliveInclude**: `string` \| `RegExp` \| readonly `any`[]

Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names

#### Inherited from

Omit.keepAliveInclude

___

### keepAliveMax

• `Optional` **keepAliveMax**: `number`

Equivalent to using Vue's native max prop for <keep-alive>

#### Inherited from

Omit.keepAliveMax

___

### swipeable

• `Optional` **swipeable**: `boolean`

Enable swipe events (may interfere with content's touch/mouse events)

#### Inherited from

Omit.swipeable

___

### transitionDuration

• `Optional` **transitionDuration**: `string` \| `number`

Transition duration (in milliseconds, without unit)
Default value: 300

#### Inherited from

Omit.transitionDuration

___

### transitionNext

• `Optional` **transitionNext**: `string`

One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
Default value: slide-left/slide-up

#### Inherited from

Omit.transitionNext

___

### transitionPrev

• `Optional` **transitionPrev**: `string`

One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
Default value: slide-right/slide-down

#### Inherited from

Omit.transitionPrev

___

### vertical

• `Optional` **vertical**: `boolean`

Default transitions and swipe actions will be on the vertical axis

#### Inherited from

Omit.vertical

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

Omit.onBeforeTransition

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

Omit.onTransition
