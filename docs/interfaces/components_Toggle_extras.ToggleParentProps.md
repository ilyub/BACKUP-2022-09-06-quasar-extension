[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Toggle.extras](../modules/components_Toggle_extras.md) / ToggleParentProps

# Interface: ToggleParentProps

[components/Toggle.extras](../modules/components_Toggle_extras.md).ToggleParentProps

## Hierarchy

- `Omit`<`QToggleProps`, ``"disable"`` \| ``"modelValue"`` \| ``"onUpdate:modelValue"``\>

  ↳ **`ToggleParentProps`**

  ↳↳ [`ToggleProps`](components_Toggle_extras.ToggleProps.md)

## Table of contents

### Properties

- [checkedIcon](components_Toggle_extras.ToggleParentProps.md#checkedicon)
- [color](components_Toggle_extras.ToggleParentProps.md#color)
- [dark](components_Toggle_extras.ToggleParentProps.md#dark)
- [dense](components_Toggle_extras.ToggleParentProps.md#dense)
- [falseValue](components_Toggle_extras.ToggleParentProps.md#falsevalue)
- [icon](components_Toggle_extras.ToggleParentProps.md#icon)
- [iconColor](components_Toggle_extras.ToggleParentProps.md#iconcolor)
- [indeterminateIcon](components_Toggle_extras.ToggleParentProps.md#indeterminateicon)
- [indeterminateValue](components_Toggle_extras.ToggleParentProps.md#indeterminatevalue)
- [keepColor](components_Toggle_extras.ToggleParentProps.md#keepcolor)
- [label](components_Toggle_extras.ToggleParentProps.md#label)
- [leftLabel](components_Toggle_extras.ToggleParentProps.md#leftlabel)
- [name](components_Toggle_extras.ToggleParentProps.md#name)
- [size](components_Toggle_extras.ToggleParentProps.md#size)
- [tabindex](components_Toggle_extras.ToggleParentProps.md#tabindex)
- [toggleIndeterminate](components_Toggle_extras.ToggleParentProps.md#toggleindeterminate)
- [toggleOrder](components_Toggle_extras.ToggleParentProps.md#toggleorder)
- [trueValue](components_Toggle_extras.ToggleParentProps.md#truevalue)
- [uncheckedIcon](components_Toggle_extras.ToggleParentProps.md#uncheckedicon)
- [val](components_Toggle_extras.ToggleParentProps.md#val)

## Properties

### checkedIcon

• `Optional` **checkedIcon**: `string`

The icon to be used when the toggle is on

#### Inherited from

Omit.checkedIcon

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

Omit.color

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

Omit.dark

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

Omit.dense

___

### falseValue

• `Optional` **falseValue**: `any`

What model value should be considered as unchecked/unticked/off?

#### Inherited from

Omit.falseValue

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

Omit.icon

___

### iconColor

• `Optional` **iconColor**: `string`

Override default icon color (for truthy state only); Color name for component from the Quasar Color Palette

#### Inherited from

Omit.iconColor

___

### indeterminateIcon

• `Optional` **indeterminateIcon**: `string`

The icon to be used when the model is indeterminate

#### Inherited from

Omit.indeterminateIcon

___

### indeterminateValue

• `Optional` **indeterminateValue**: `any`

What model value should be considered as 'indeterminate'?

#### Inherited from

Omit.indeterminateValue

___

### keepColor

• `Optional` **keepColor**: `boolean`

Should the color (if specified any) be kept when the component is unticked/ off?

#### Inherited from

Omit.keepColor

___

### label

• `Optional` **label**: `string`

Label to display along the component (or use the default slot instead of this prop)

#### Inherited from

Omit.label

___

### leftLabel

• `Optional` **leftLabel**: `boolean`

Label (if any specified) should be displayed on the left side of the component

#### Inherited from

Omit.leftLabel

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL

#### Inherited from

Omit.name

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

Omit.size

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

Omit.tabindex

___

### toggleIndeterminate

• `Optional` **toggleIndeterminate**: `boolean`

When user clicks/taps on the component, should we toggle through the indeterminate state too?

#### Inherited from

Omit.toggleIndeterminate

___

### toggleOrder

• `Optional` **toggleOrder**: ``"tf"`` \| ``"ft"``

Determines toggle order of the two states ('t' stands for state of true, 'f' for state of false); If 'toggle-indeterminate' is true, then the order is: indet -> first state -> second state -> indet (and repeat), otherwise: indet -> first state -> second state -> first state -> second state -> ...
Default value: tf

#### Inherited from

Omit.toggleOrder

___

### trueValue

• `Optional` **trueValue**: `any`

What model value should be considered as checked/ticked/on?
Default value: true

#### Inherited from

Omit.trueValue

___

### uncheckedIcon

• `Optional` **uncheckedIcon**: `string`

The icon to be used when the toggle is off

#### Inherited from

Omit.uncheckedIcon

___

### val

• `Optional` **val**: `any`

Works when model ('value') is Array. It tells the component which value should add/remove when ticked/unticked

#### Inherited from

Omit.val
