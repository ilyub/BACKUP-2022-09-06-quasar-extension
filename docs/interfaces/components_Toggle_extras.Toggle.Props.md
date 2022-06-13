[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Toggle.extras](../modules/components_Toggle_extras.md) / [Toggle](../modules/components_Toggle_extras.Toggle.md) / Props

# Interface: Props

[components/Toggle.extras](../modules/components_Toggle_extras.md).[Toggle](../modules/components_Toggle_extras.Toggle.md).Props

## Hierarchy

- [`ParentProps`](components_Toggle_extras.Toggle.ParentProps.md)

- [`PluginProps`](components_Toggle_extras.Toggle.PluginProps.md)

- [`OwnProps`](components_Toggle_extras.Toggle.OwnProps.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [Label](components_Toggle_extras.Toggle.Props.md#label)
- [checkedIcon](components_Toggle_extras.Toggle.Props.md#checkedicon)
- [color](components_Toggle_extras.Toggle.Props.md#color)
- [dark](components_Toggle_extras.Toggle.Props.md#dark)
- [dense](components_Toggle_extras.Toggle.Props.md#dense)
- [disable](components_Toggle_extras.Toggle.Props.md#disable)
- [falseValue](components_Toggle_extras.Toggle.Props.md#falsevalue)
- [icon](components_Toggle_extras.Toggle.Props.md#icon)
- [iconColor](components_Toggle_extras.Toggle.Props.md#iconcolor)
- [indeterminateIcon](components_Toggle_extras.Toggle.Props.md#indeterminateicon)
- [indeterminateValue](components_Toggle_extras.Toggle.Props.md#indeterminatevalue)
- [keepColor](components_Toggle_extras.Toggle.Props.md#keepcolor)
- [label](components_Toggle_extras.Toggle.Props.md#label-1)
- [leftLabel](components_Toggle_extras.Toggle.Props.md#leftlabel)
- [modelValue](components_Toggle_extras.Toggle.Props.md#modelvalue)
- [name](components_Toggle_extras.Toggle.Props.md#name)
- [size](components_Toggle_extras.Toggle.Props.md#size)
- [tabindex](components_Toggle_extras.Toggle.Props.md#tabindex)
- [toggleIndeterminate](components_Toggle_extras.Toggle.Props.md#toggleindeterminate)
- [toggleOrder](components_Toggle_extras.Toggle.Props.md#toggleorder)
- [trueValue](components_Toggle_extras.Toggle.Props.md#truevalue)
- [uncheckedIcon](components_Toggle_extras.Toggle.Props.md#uncheckedicon)
- [val](components_Toggle_extras.Toggle.Props.md#val)

### Methods

- [onUpdate:modelValue](components_Toggle_extras.Toggle.Props.md#onupdate:modelvalue)

## Properties

### Label

• **Label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Toggle_extras.Toggle.PluginProps.md).[Label](components_Toggle_extras.Toggle.PluginProps.md#label)

___

### checkedIcon

• `Optional` **checkedIcon**: `string`

The icon to be used when the toggle is on

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[checkedIcon](components_Toggle_extras.Toggle.ParentProps.md#checkedicon)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[color](components_Toggle_extras.Toggle.ParentProps.md#color)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[dark](components_Toggle_extras.Toggle.ParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[dense](components_Toggle_extras.Toggle.ParentProps.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[OwnProps](components_Toggle_extras.Toggle.OwnProps.md).[disable](components_Toggle_extras.Toggle.OwnProps.md#disable)

___

### falseValue

• `Optional` **falseValue**: `any`

What model value should be considered as unchecked/unticked/off?

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[falseValue](components_Toggle_extras.Toggle.ParentProps.md#falsevalue)

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[icon](components_Toggle_extras.Toggle.ParentProps.md#icon)

___

### iconColor

• `Optional` **iconColor**: `string`

Override default icon color (for truthy state only); Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[iconColor](components_Toggle_extras.Toggle.ParentProps.md#iconcolor)

___

### indeterminateIcon

• `Optional` **indeterminateIcon**: `string`

The icon to be used when the model is indeterminate

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[indeterminateIcon](components_Toggle_extras.Toggle.ParentProps.md#indeterminateicon)

___

### indeterminateValue

• `Optional` **indeterminateValue**: `any`

What model value should be considered as 'indeterminate'?

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[indeterminateValue](components_Toggle_extras.Toggle.ParentProps.md#indeterminatevalue)

___

### keepColor

• `Optional` **keepColor**: `boolean`

Should the color (if specified any) be kept when the component is unticked/ off?

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[keepColor](components_Toggle_extras.Toggle.ParentProps.md#keepcolor)

___

### label

• `Optional` **label**: `string`

Label to display along the component (or use the default slot instead of this prop)

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[label](components_Toggle_extras.Toggle.ParentProps.md#label)

___

### leftLabel

• `Optional` **leftLabel**: `boolean`

Label (if any specified) should be displayed on the left side of the component

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[leftLabel](components_Toggle_extras.Toggle.ParentProps.md#leftlabel)

___

### modelValue

• `Readonly` **modelValue**: `boolean`

#### Inherited from

[OwnProps](components_Toggle_extras.Toggle.OwnProps.md).[modelValue](components_Toggle_extras.Toggle.OwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[name](components_Toggle_extras.Toggle.ParentProps.md#name)

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[size](components_Toggle_extras.Toggle.ParentProps.md#size)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[tabindex](components_Toggle_extras.Toggle.ParentProps.md#tabindex)

___

### toggleIndeterminate

• `Optional` **toggleIndeterminate**: `boolean`

When user clicks/taps on the component, should we toggle through the indeterminate state too?

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[toggleIndeterminate](components_Toggle_extras.Toggle.ParentProps.md#toggleindeterminate)

___

### toggleOrder

• `Optional` **toggleOrder**: ``"tf"`` \| ``"ft"``

Determines toggle order of the two states ('t' stands for state of true, 'f' for state of false); If 'toggle-indeterminate' is true, then the order is: indet -> first state -> second state -> indet (and repeat), otherwise: indet -> first state -> second state -> first state -> second state -> ...
Default value: tf

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[toggleOrder](components_Toggle_extras.Toggle.ParentProps.md#toggleorder)

___

### trueValue

• `Optional` **trueValue**: `any`

What model value should be considered as checked/ticked/on?
Default value: true

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[trueValue](components_Toggle_extras.Toggle.ParentProps.md#truevalue)

___

### uncheckedIcon

• `Optional` **uncheckedIcon**: `string`

The icon to be used when the toggle is off

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[uncheckedIcon](components_Toggle_extras.Toggle.ParentProps.md#uncheckedicon)

___

### val

• `Optional` **val**: `any`

Works when model ('value') is Array. It tells the component which value should add/remove when ticked/unticked

#### Inherited from

[ParentProps](components_Toggle_extras.Toggle.ParentProps.md).[val](components_Toggle_extras.Toggle.ParentProps.md#val)

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

[OwnProps](components_Toggle_extras.Toggle.OwnProps.md).[onUpdate:modelValue](components_Toggle_extras.Toggle.OwnProps.md#onupdate:modelvalue)
