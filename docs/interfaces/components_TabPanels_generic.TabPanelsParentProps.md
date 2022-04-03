[Quasar extension](../index.md) / [Exports](../modules.md) / [components/TabPanels.generic](../modules/components_TabPanels_generic.md) / TabPanelsParentProps

# Interface: TabPanelsParentProps

[components/TabPanels.generic](../modules/components_TabPanels_generic.md).TabPanelsParentProps

## Hierarchy

- `Readonly`<`Omit`<`QTabPanelsProps`, keyof [`TabPanelsOwnProps`](components_TabPanels_generic.TabPanelsOwnProps.md)\>\>

  ↳ **`TabPanelsParentProps`**

  ↳↳ [`TabPanelsProps`](components_TabPanels_generic.TabPanelsProps.md)

## Table of contents

### Properties

- [animated](components_TabPanels_generic.TabPanelsParentProps.md#animated)
- [infinite](components_TabPanels_generic.TabPanelsParentProps.md#infinite)
- [keepAlive](components_TabPanels_generic.TabPanelsParentProps.md#keepalive)
- [keepAliveExclude](components_TabPanels_generic.TabPanelsParentProps.md#keepaliveexclude)
- [keepAliveInclude](components_TabPanels_generic.TabPanelsParentProps.md#keepaliveinclude)
- [keepAliveMax](components_TabPanels_generic.TabPanelsParentProps.md#keepalivemax)
- [swipeable](components_TabPanels_generic.TabPanelsParentProps.md#swipeable)
- [transitionDuration](components_TabPanels_generic.TabPanelsParentProps.md#transitionduration)
- [transitionNext](components_TabPanels_generic.TabPanelsParentProps.md#transitionnext)
- [transitionPrev](components_TabPanels_generic.TabPanelsParentProps.md#transitionprev)
- [vertical](components_TabPanels_generic.TabPanelsParentProps.md#vertical)

### Methods

- [onBeforeTransition](components_TabPanels_generic.TabPanelsParentProps.md#onbeforetransition)
- [onTransition](components_TabPanels_generic.TabPanelsParentProps.md#ontransition)

## Properties

### animated

• `Optional` `Readonly` **animated**: `boolean`

Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)

#### Inherited from

Readonly.animated

___

### infinite

• `Optional` `Readonly` **infinite**: `boolean`

Makes component appear as infinite (when reaching last panel, next one will become the first one)

#### Inherited from

Readonly.infinite

___

### keepAlive

• `Optional` `Readonly` **keepAlive**: `boolean`

Equivalent to using Vue's native <keep-alive> component on the content

#### Inherited from

Readonly.keepAlive

___

### keepAliveExclude

• `Optional` `Readonly` **keepAliveExclude**: `string` \| `RegExp` \| `any`[]

Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names

#### Inherited from

Readonly.keepAliveExclude

___

### keepAliveInclude

• `Optional` `Readonly` **keepAliveInclude**: `string` \| `RegExp` \| `any`[]

Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names

#### Inherited from

Readonly.keepAliveInclude

___

### keepAliveMax

• `Optional` `Readonly` **keepAliveMax**: `number`

Equivalent to using Vue's native max prop for <keep-alive>

#### Inherited from

Readonly.keepAliveMax

___

### swipeable

• `Optional` `Readonly` **swipeable**: `boolean`

Enable swipe events (may interfere with content's touch/mouse events)

#### Inherited from

Readonly.swipeable

___

### transitionDuration

• `Optional` `Readonly` **transitionDuration**: `string` \| `number`

Transition duration (in milliseconds, without unit)
Default value: 300

#### Inherited from

Readonly.transitionDuration

___

### transitionNext

• `Optional` `Readonly` **transitionNext**: `string`

One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
Default value: slide-left/slide-up

#### Inherited from

Readonly.transitionNext

___

### transitionPrev

• `Optional` `Readonly` **transitionPrev**: `string`

One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
Default value: slide-right/slide-down

#### Inherited from

Readonly.transitionPrev

___

### vertical

• `Optional` `Readonly` **vertical**: `boolean`

Default transitions and swipe actions will be on the vertical axis

#### Inherited from

Readonly.vertical

## Methods

### onBeforeTransition

▸ `Optional` `Readonly` **onBeforeTransition**(`newVal`, `oldVal`): `void`

Emitted before transitioning to a new panel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newVal` | `string` \| `number` | Panel name towards transition is going |
| `oldVal` | `string` \| `number` | Panel name from which transition is happening |

#### Returns

`void`

#### Inherited from

Readonly.onBeforeTransition

___

### onTransition

▸ `Optional` `Readonly` **onTransition**(`newVal`, `oldVal`): `void`

Emitted after component transitioned to a new panel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newVal` | `string` \| `number` | Panel name towards transition has occurred |
| `oldVal` | `string` \| `number` | Panel name from which transition has happened |

#### Returns

`void`

#### Inherited from

Readonly.onTransition
