[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Toggle.extras](../modules/components_Toggle_extras.md) / ToggleProps

# Interface: ToggleProps

[components/Toggle.extras](../modules/components_Toggle_extras.md).ToggleProps

## Hierarchy

- [`ToggleParentProps`](components_Toggle_extras.ToggleParentProps.md)

- [`ToggleOwnProps`](components_Toggle_extras.ToggleOwnProps.md)

  ↳ **`ToggleProps`**

## Table of contents

### Properties

- [checkedIcon](components_Toggle_extras.ToggleProps.md#checkedicon)
- [color](components_Toggle_extras.ToggleProps.md#color)
- [dark](components_Toggle_extras.ToggleProps.md#dark)
- [dense](components_Toggle_extras.ToggleProps.md#dense)
- [disable](components_Toggle_extras.ToggleProps.md#disable)
- [falseValue](components_Toggle_extras.ToggleProps.md#falsevalue)
- [icon](components_Toggle_extras.ToggleProps.md#icon)
- [iconColor](components_Toggle_extras.ToggleProps.md#iconcolor)
- [indeterminateIcon](components_Toggle_extras.ToggleProps.md#indeterminateicon)
- [indeterminateValue](components_Toggle_extras.ToggleProps.md#indeterminatevalue)
- [keepColor](components_Toggle_extras.ToggleProps.md#keepcolor)
- [label](components_Toggle_extras.ToggleProps.md#label)
- [leftLabel](components_Toggle_extras.ToggleProps.md#leftlabel)
- [modelValue](components_Toggle_extras.ToggleProps.md#modelvalue)
- [name](components_Toggle_extras.ToggleProps.md#name)
- [size](components_Toggle_extras.ToggleProps.md#size)
- [tabindex](components_Toggle_extras.ToggleProps.md#tabindex)
- [toggleIndeterminate](components_Toggle_extras.ToggleProps.md#toggleindeterminate)
- [toggleOrder](components_Toggle_extras.ToggleProps.md#toggleorder)
- [trueValue](components_Toggle_extras.ToggleProps.md#truevalue)
- [uncheckedIcon](components_Toggle_extras.ToggleProps.md#uncheckedicon)
- [val](components_Toggle_extras.ToggleProps.md#val)

### Methods

- [onUpdate:modelValue](components_Toggle_extras.ToggleProps.md#onupdate:modelvalue)

## Properties

### checkedIcon

• `Optional` **checkedIcon**: `string`

The icon to be used when the toggle is on

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[checkedIcon](components_Toggle_extras.ToggleParentProps.md#checkedicon)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[color](components_Toggle_extras.ToggleParentProps.md#color)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[dark](components_Toggle_extras.ToggleParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[dense](components_Toggle_extras.ToggleParentProps.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `boolean`

#### Inherited from

[ToggleOwnProps](components_Toggle_extras.ToggleOwnProps.md).[disable](components_Toggle_extras.ToggleOwnProps.md#disable)

___

### falseValue

• `Optional` **falseValue**: `any`

What model value should be considered as unchecked/unticked/off?

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[falseValue](components_Toggle_extras.ToggleParentProps.md#falsevalue)

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[icon](components_Toggle_extras.ToggleParentProps.md#icon)

___

### iconColor

• `Optional` **iconColor**: `string`

Override default icon color (for truthy state only); Color name for component from the Quasar Color Palette

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[iconColor](components_Toggle_extras.ToggleParentProps.md#iconcolor)

___

### indeterminateIcon

• `Optional` **indeterminateIcon**: `string`

The icon to be used when the model is indeterminate

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[indeterminateIcon](components_Toggle_extras.ToggleParentProps.md#indeterminateicon)

___

### indeterminateValue

• `Optional` **indeterminateValue**: `any`

What model value should be considered as 'indeterminate'?

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[indeterminateValue](components_Toggle_extras.ToggleParentProps.md#indeterminatevalue)

___

### keepColor

• `Optional` **keepColor**: `boolean`

Should the color (if specified any) be kept when the component is unticked/ off?

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[keepColor](components_Toggle_extras.ToggleParentProps.md#keepcolor)

___

### label

• `Optional` **label**: `string`

Label to display along the component (or use the default slot instead of this prop)

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[label](components_Toggle_extras.ToggleParentProps.md#label)

___

### leftLabel

• `Optional` **leftLabel**: `boolean`

Label (if any specified) should be displayed on the left side of the component

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[leftLabel](components_Toggle_extras.ToggleParentProps.md#leftlabel)

___

### modelValue

• `Readonly` **modelValue**: `boolean`

#### Inherited from

[ToggleOwnProps](components_Toggle_extras.ToggleOwnProps.md).[modelValue](components_Toggle_extras.ToggleOwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[name](components_Toggle_extras.ToggleParentProps.md#name)

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[size](components_Toggle_extras.ToggleParentProps.md#size)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[tabindex](components_Toggle_extras.ToggleParentProps.md#tabindex)

___

### toggleIndeterminate

• `Optional` **toggleIndeterminate**: `boolean`

When user clicks/taps on the component, should we toggle through the indeterminate state too?

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[toggleIndeterminate](components_Toggle_extras.ToggleParentProps.md#toggleindeterminate)

___

### toggleOrder

• `Optional` **toggleOrder**: ``"tf"`` \| ``"ft"``

Determines toggle order of the two states ('t' stands for state of true, 'f' for state of false); If 'toggle-indeterminate' is true, then the order is: indet -> first state -> second state -> indet (and repeat), otherwise: indet -> first state -> second state -> first state -> second state -> ...
Default value: tf

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[toggleOrder](components_Toggle_extras.ToggleParentProps.md#toggleorder)

___

### trueValue

• `Optional` **trueValue**: `any`

What model value should be considered as checked/ticked/on?
Default value: true

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[trueValue](components_Toggle_extras.ToggleParentProps.md#truevalue)

___

### uncheckedIcon

• `Optional` **uncheckedIcon**: `string`

The icon to be used when the toggle is off

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[uncheckedIcon](components_Toggle_extras.ToggleParentProps.md#uncheckedicon)

___

### val

• `Optional` **val**: `any`

Works when model ('value') is Array. It tells the component which value should add/remove when ticked/unticked

#### Inherited from

[ToggleParentProps](components_Toggle_extras.ToggleParentProps.md).[val](components_Toggle_extras.ToggleParentProps.md#val)

## Methods

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Value. |

#### Returns

`void`

#### Inherited from

[ToggleOwnProps](components_Toggle_extras.ToggleOwnProps.md).[onUpdate:modelValue](components_Toggle_extras.ToggleOwnProps.md#onupdate:modelvalue)
