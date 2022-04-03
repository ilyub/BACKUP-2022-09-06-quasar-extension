[Quasar extension](../index.md) / [Exports](../modules.md) / [components/TabPanels.generic](../modules/components_TabPanels_generic.md) / TabPanelsProps

# Interface: TabPanelsProps<T\>

[components/TabPanels.generic](../modules/components_TabPanels_generic.md).TabPanelsProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStrU` = `NumStrU` |

## Hierarchy

- [`TabPanelsOwnProps`](components_TabPanels_generic.TabPanelsOwnProps.md)<`T`\>

- [`TabPanelsParentProps`](components_TabPanels_generic.TabPanelsParentProps.md)

  ↳ **`TabPanelsProps`**

## Table of contents

### Properties

- [animated](components_TabPanels_generic.TabPanelsProps.md#animated)
- [infinite](components_TabPanels_generic.TabPanelsProps.md#infinite)
- [keepAlive](components_TabPanels_generic.TabPanelsProps.md#keepalive)
- [keepAliveExclude](components_TabPanels_generic.TabPanelsProps.md#keepaliveexclude)
- [keepAliveInclude](components_TabPanels_generic.TabPanelsProps.md#keepaliveinclude)
- [keepAliveMax](components_TabPanels_generic.TabPanelsProps.md#keepalivemax)
- [modelValue](components_TabPanels_generic.TabPanelsProps.md#modelvalue)
- [swipeable](components_TabPanels_generic.TabPanelsProps.md#swipeable)
- [transitionDuration](components_TabPanels_generic.TabPanelsProps.md#transitionduration)
- [transitionNext](components_TabPanels_generic.TabPanelsProps.md#transitionnext)
- [transitionPrev](components_TabPanels_generic.TabPanelsProps.md#transitionprev)
- [vertical](components_TabPanels_generic.TabPanelsProps.md#vertical)

### Methods

- [onBeforeTransition](components_TabPanels_generic.TabPanelsProps.md#onbeforetransition)
- [onTransition](components_TabPanels_generic.TabPanelsProps.md#ontransition)
- [onUpdate:modelValue](components_TabPanels_generic.TabPanelsProps.md#onupdate:modelvalue)

## Properties

### animated

• `Optional` `Readonly` **animated**: `boolean`

Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[animated](components_TabPanels_generic.TabPanelsParentProps.md#animated)

___

### infinite

• `Optional` `Readonly` **infinite**: `boolean`

Makes component appear as infinite (when reaching last panel, next one will become the first one)

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[infinite](components_TabPanels_generic.TabPanelsParentProps.md#infinite)

___

### keepAlive

• `Optional` `Readonly` **keepAlive**: `boolean`

Equivalent to using Vue's native <keep-alive> component on the content

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[keepAlive](components_TabPanels_generic.TabPanelsParentProps.md#keepalive)

___

### keepAliveExclude

• `Optional` `Readonly` **keepAliveExclude**: `string` \| `RegExp` \| `any`[]

Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[keepAliveExclude](components_TabPanels_generic.TabPanelsParentProps.md#keepaliveexclude)

___

### keepAliveInclude

• `Optional` `Readonly` **keepAliveInclude**: `string` \| `RegExp` \| `any`[]

Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[keepAliveInclude](components_TabPanels_generic.TabPanelsParentProps.md#keepaliveinclude)

___

### keepAliveMax

• `Optional` `Readonly` **keepAliveMax**: `number`

Equivalent to using Vue's native max prop for <keep-alive>

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[keepAliveMax](components_TabPanels_generic.TabPanelsParentProps.md#keepalivemax)

___

### modelValue

• `Optional` **modelValue**: `T`

#### Inherited from

[TabPanelsOwnProps](components_TabPanels_generic.TabPanelsOwnProps.md).[modelValue](components_TabPanels_generic.TabPanelsOwnProps.md#modelvalue)

___

### swipeable

• `Optional` `Readonly` **swipeable**: `boolean`

Enable swipe events (may interfere with content's touch/mouse events)

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[swipeable](components_TabPanels_generic.TabPanelsParentProps.md#swipeable)

___

### transitionDuration

• `Optional` `Readonly` **transitionDuration**: `string` \| `number`

Transition duration (in milliseconds, without unit)
Default value: 300

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[transitionDuration](components_TabPanels_generic.TabPanelsParentProps.md#transitionduration)

___

### transitionNext

• `Optional` `Readonly` **transitionNext**: `string`

One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
Default value: slide-left/slide-up

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[transitionNext](components_TabPanels_generic.TabPanelsParentProps.md#transitionnext)

___

### transitionPrev

• `Optional` `Readonly` **transitionPrev**: `string`

One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
Default value: slide-right/slide-down

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[transitionPrev](components_TabPanels_generic.TabPanelsParentProps.md#transitionprev)

___

### vertical

• `Optional` `Readonly` **vertical**: `boolean`

Default transitions and swipe actions will be on the vertical axis

#### Inherited from

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[vertical](components_TabPanels_generic.TabPanelsParentProps.md#vertical)

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

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[onBeforeTransition](components_TabPanels_generic.TabPanelsParentProps.md#onbeforetransition)

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

[TabPanelsParentProps](components_TabPanels_generic.TabPanelsParentProps.md).[onTransition](components_TabPanels_generic.TabPanelsParentProps.md#ontransition)

___

### onUpdate:modelValue

▸ `Optional` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`void`

#### Inherited from

[TabPanelsOwnProps](components_TabPanels_generic.TabPanelsOwnProps.md).[onUpdate:modelValue](components_TabPanels_generic.TabPanelsOwnProps.md#onupdate:modelvalue)
