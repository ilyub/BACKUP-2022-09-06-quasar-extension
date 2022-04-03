[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Button.extras](../modules/components_Button_extras.md) / ButtonProps

# Interface: ButtonProps

[components/Button.extras](../modules/components_Button_extras.md).ButtonProps

## Hierarchy

- [`ButtonParentProps`](../modules/components_Button_extras.md#buttonparentprops)

- [`ButtonOwnProps`](components_Button_extras.ButtonOwnProps.md)

  ↳ **`ButtonProps`**

## Table of contents

### Properties

- [align](components_Button_extras.ButtonProps.md#align)
- [asyncClick](components_Button_extras.ButtonProps.md#asyncclick)
- [color](components_Button_extras.ButtonProps.md#color)
- [confirmation](components_Button_extras.ButtonProps.md#confirmation)
- [darkPercentage](components_Button_extras.ButtonProps.md#darkpercentage)
- [dense](components_Button_extras.ButtonProps.md#dense)
- [disable](components_Button_extras.ButtonProps.md#disable)
- [fab](components_Button_extras.ButtonProps.md#fab)
- [fabMini](components_Button_extras.ButtonProps.md#fabmini)
- [flat](components_Button_extras.ButtonProps.md#flat)
- [glossy](components_Button_extras.ButtonProps.md#glossy)
- [href](components_Button_extras.ButtonProps.md#href)
- [icon](components_Button_extras.ButtonProps.md#icon)
- [iconRight](components_Button_extras.ButtonProps.md#iconright)
- [label](components_Button_extras.ButtonProps.md#label)
- [loading](components_Button_extras.ButtonProps.md#loading)
- [noCaps](components_Button_extras.ButtonProps.md#nocaps)
- [noWrap](components_Button_extras.ButtonProps.md#nowrap)
- [outline](components_Button_extras.ButtonProps.md#outline)
- [padding](components_Button_extras.ButtonProps.md#padding)
- [percentage](components_Button_extras.ButtonProps.md#percentage)
- [push](components_Button_extras.ButtonProps.md#push)
- [replace](components_Button_extras.ButtonProps.md#replace)
- [ripple](components_Button_extras.ButtonProps.md#ripple)
- [round](components_Button_extras.ButtonProps.md#round)
- [rounded](components_Button_extras.ButtonProps.md#rounded)
- [size](components_Button_extras.ButtonProps.md#size)
- [stack](components_Button_extras.ButtonProps.md#stack)
- [stretch](components_Button_extras.ButtonProps.md#stretch)
- [tabindex](components_Button_extras.ButtonProps.md#tabindex)
- [target](components_Button_extras.ButtonProps.md#target)
- [textColor](components_Button_extras.ButtonProps.md#textcolor)
- [to](components_Button_extras.ButtonProps.md#to)
- [tooltip](components_Button_extras.ButtonProps.md#tooltip)
- [tooltipDirection](components_Button_extras.ButtonProps.md#tooltipdirection)
- [type](components_Button_extras.ButtonProps.md#type)
- [unelevated](components_Button_extras.ButtonProps.md#unelevated)

### Methods

- [onClick](components_Button_extras.ButtonProps.md#onclick)
- [onConfirmedClick](components_Button_extras.ButtonProps.md#onconfirmedclick)

## Properties

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"around"`` \| ``"between"`` \| ``"evenly"``

Label or content alignment
Default value: center

#### Inherited from

ButtonParentProps.align

___

### asyncClick

• `Optional` `Readonly` **asyncClick**: [`AsyncClick`](components_BaseButton_extras.AsyncClick.md)

#### Inherited from

ButtonParentProps.asyncClick

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

ButtonParentProps.color

___

### confirmation

• `Optional` `Readonly` **confirmation**: `stringU`

#### Inherited from

ButtonParentProps.confirmation

___

### darkPercentage

• `Optional` **darkPercentage**: `boolean`

Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props

#### Inherited from

ButtonParentProps.darkPercentage

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

ButtonParentProps.dense

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

ButtonParentProps.disable

___

### fab

• `Optional` **fab**: `boolean`

Makes button size and shape to fit a Floating Action Button

#### Inherited from

ButtonParentProps.fab

___

### fabMini

• `Optional` **fabMini**: `boolean`

Makes button size and shape to fit a small Floating Action Button

#### Inherited from

ButtonParentProps.fabMini

___

### flat

• `Optional` **flat**: `boolean`

Use 'flat' design

#### Inherited from

ButtonParentProps.flat

___

### glossy

• `Optional` **glossy**: `boolean`

Applies a glossy effect

#### Inherited from

ButtonParentProps.glossy

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to' and 'replace' props

#### Inherited from

ButtonParentProps.href

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

ButtonParentProps.icon

___

### iconRight

• `Optional` **iconRight**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

ButtonParentProps.iconRight

___

### label

• `Optional` **label**: `string` \| `number`

The text that will be shown on the button

#### Inherited from

ButtonParentProps.label

___

### loading

• `Optional` **loading**: `boolean`

Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)

#### Inherited from

ButtonParentProps.loading

___

### noCaps

• `Optional` **noCaps**: `boolean`

Avoid turning label text into caps (which happens by default)

#### Inherited from

ButtonParentProps.noCaps

___

### noWrap

• `Optional` **noWrap**: `boolean`

Avoid label text wrapping

#### Inherited from

ButtonParentProps.noWrap

___

### outline

• `Optional` **outline**: `boolean`

Use 'outline' design

#### Inherited from

ButtonParentProps.outline

___

### padding

• `Optional` **padding**: `string`

Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set

#### Inherited from

ButtonParentProps.padding

___

### percentage

• `Optional` **percentage**: `number`

Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background

#### Inherited from

ButtonParentProps.percentage

___

### push

• `Optional` **push**: `boolean`

Use 'push' design

#### Inherited from

ButtonParentProps.push

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

ButtonParentProps.replace

___

### ripple

• `Optional` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

ButtonParentProps.ripple

___

### round

• `Optional` **round**: `boolean`

Makes a circle shaped button

#### Inherited from

ButtonParentProps.round

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a more prominent border-radius for a squared shape button

#### Inherited from

ButtonParentProps.rounded

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

ButtonParentProps.size

___

### stack

• `Optional` **stack**: `boolean`

Stack icon and label vertically instead of on same line (like it is by default)

#### Inherited from

ButtonParentProps.stack

___

### stretch

• `Optional` **stretch**: `boolean`

When used on flexbox parent, button will stretch to parent's height

#### Inherited from

ButtonParentProps.stretch

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

ButtonParentProps.tabindex

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only with 'to' or 'href' props

#### Inherited from

ButtonParentProps.target

___

### textColor

• `Optional` **textColor**: `string`

Overrides text color (if needed); Color name from the Quasar Color Palette

#### Inherited from

ButtonParentProps.textColor

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

ButtonParentProps.to

___

### tooltip

• `Optional` `Readonly` **tooltip**: `stringU`

#### Inherited from

ButtonParentProps.tooltip

___

### tooltipDirection

• `Optional` `Readonly` **tooltipDirection**: [`Direction`](../modules/components_Tooltip_extras.md#direction)

#### Inherited from

ButtonParentProps.tooltipDirection

___

### type

• `Optional` **type**: `string`

1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag
Default value: button

#### Inherited from

ButtonParentProps.type

___

### unelevated

• `Optional` **unelevated**: `boolean`

Remove shadow

#### Inherited from

ButtonParentProps.unelevated

## Methods

### onClick

▸ `Optional` **onClick**(`evt`, `navigateFn`): `void`

Emitted when component is clicked (activated)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object; If you want to cancel navigation set synchronously 'evt.navigate' to false |
| `navigateFn` | () => `void` | When you need to control the time at which the button should trigger the route navigation then set 'evt.navigate' to false and call this function; Useful if you have async work to be done before the actual route navigation |

#### Returns

`void`

#### Inherited from

ButtonParentProps.onClick

___

### onConfirmedClick

▸ `Optional` `Readonly` **onConfirmedClick**(): `void`

Emits confirmed click event.

#### Returns

`void`

#### Inherited from

ButtonParentProps.onConfirmedClick
