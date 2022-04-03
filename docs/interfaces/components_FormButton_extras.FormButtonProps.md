[Quasar extension](../index.md) / [Exports](../modules.md) / [components/FormButton.extras](../modules/components_FormButton_extras.md) / FormButtonProps

# Interface: FormButtonProps

[components/FormButton.extras](../modules/components_FormButton_extras.md).FormButtonProps

## Hierarchy

- [`FormButtonParentProps`](../modules/components_FormButton_extras.md#formbuttonparentprops)

- [`FormButtonOwnProps`](components_FormButton_extras.FormButtonOwnProps.md)

  ↳ **`FormButtonProps`**

## Table of contents

### Properties

- [align](components_FormButton_extras.FormButtonProps.md#align)
- [asyncClick](components_FormButton_extras.FormButtonProps.md#asyncclick)
- [color](components_FormButton_extras.FormButtonProps.md#color)
- [confirmation](components_FormButton_extras.FormButtonProps.md#confirmation)
- [darkPercentage](components_FormButton_extras.FormButtonProps.md#darkpercentage)
- [dense](components_FormButton_extras.FormButtonProps.md#dense)
- [disable](components_FormButton_extras.FormButtonProps.md#disable)
- [fab](components_FormButton_extras.FormButtonProps.md#fab)
- [fabMini](components_FormButton_extras.FormButtonProps.md#fabmini)
- [flat](components_FormButton_extras.FormButtonProps.md#flat)
- [glossy](components_FormButton_extras.FormButtonProps.md#glossy)
- [href](components_FormButton_extras.FormButtonProps.md#href)
- [icon](components_FormButton_extras.FormButtonProps.md#icon)
- [iconRight](components_FormButton_extras.FormButtonProps.md#iconright)
- [label](components_FormButton_extras.FormButtonProps.md#label)
- [loading](components_FormButton_extras.FormButtonProps.md#loading)
- [noCaps](components_FormButton_extras.FormButtonProps.md#nocaps)
- [noWrap](components_FormButton_extras.FormButtonProps.md#nowrap)
- [outline](components_FormButton_extras.FormButtonProps.md#outline)
- [padding](components_FormButton_extras.FormButtonProps.md#padding)
- [percentage](components_FormButton_extras.FormButtonProps.md#percentage)
- [push](components_FormButton_extras.FormButtonProps.md#push)
- [replace](components_FormButton_extras.FormButtonProps.md#replace)
- [ripple](components_FormButton_extras.FormButtonProps.md#ripple)
- [round](components_FormButton_extras.FormButtonProps.md#round)
- [rounded](components_FormButton_extras.FormButtonProps.md#rounded)
- [size](components_FormButton_extras.FormButtonProps.md#size)
- [stack](components_FormButton_extras.FormButtonProps.md#stack)
- [stretch](components_FormButton_extras.FormButtonProps.md#stretch)
- [tabindex](components_FormButton_extras.FormButtonProps.md#tabindex)
- [target](components_FormButton_extras.FormButtonProps.md#target)
- [textColor](components_FormButton_extras.FormButtonProps.md#textcolor)
- [to](components_FormButton_extras.FormButtonProps.md#to)
- [tooltip](components_FormButton_extras.FormButtonProps.md#tooltip)
- [tooltipDirection](components_FormButton_extras.FormButtonProps.md#tooltipdirection)
- [type](components_FormButton_extras.FormButtonProps.md#type)
- [unelevated](components_FormButton_extras.FormButtonProps.md#unelevated)

### Methods

- [onClick](components_FormButton_extras.FormButtonProps.md#onclick)
- [onConfirmedClick](components_FormButton_extras.FormButtonProps.md#onconfirmedclick)

## Properties

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"around"`` \| ``"between"`` \| ``"evenly"``

Label or content alignment
Default value: center

#### Inherited from

FormButtonParentProps.align

___

### asyncClick

• `Optional` `Readonly` **asyncClick**: [`AsyncClick`](components_BaseButton_extras.AsyncClick.md)

#### Inherited from

FormButtonParentProps.asyncClick

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

FormButtonParentProps.color

___

### confirmation

• `Optional` `Readonly` **confirmation**: `stringU`

#### Inherited from

FormButtonParentProps.confirmation

___

### darkPercentage

• `Optional` **darkPercentage**: `boolean`

Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props

#### Inherited from

FormButtonParentProps.darkPercentage

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

FormButtonParentProps.dense

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

FormButtonParentProps.disable

___

### fab

• `Optional` **fab**: `boolean`

Makes button size and shape to fit a Floating Action Button

#### Inherited from

FormButtonParentProps.fab

___

### fabMini

• `Optional` **fabMini**: `boolean`

Makes button size and shape to fit a small Floating Action Button

#### Inherited from

FormButtonParentProps.fabMini

___

### flat

• `Optional` **flat**: `boolean`

Use 'flat' design

#### Inherited from

FormButtonParentProps.flat

___

### glossy

• `Optional` **glossy**: `boolean`

Applies a glossy effect

#### Inherited from

FormButtonParentProps.glossy

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to' and 'replace' props

#### Inherited from

FormButtonParentProps.href

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

FormButtonParentProps.icon

___

### iconRight

• `Optional` **iconRight**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

FormButtonParentProps.iconRight

___

### label

• `Optional` **label**: `string` \| `number`

The text that will be shown on the button

#### Inherited from

FormButtonParentProps.label

___

### loading

• `Optional` **loading**: `boolean`

Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)

#### Inherited from

FormButtonParentProps.loading

___

### noCaps

• `Optional` **noCaps**: `boolean`

Avoid turning label text into caps (which happens by default)

#### Inherited from

FormButtonParentProps.noCaps

___

### noWrap

• `Optional` **noWrap**: `boolean`

Avoid label text wrapping

#### Inherited from

FormButtonParentProps.noWrap

___

### outline

• `Optional` **outline**: `boolean`

Use 'outline' design

#### Inherited from

FormButtonParentProps.outline

___

### padding

• `Optional` **padding**: `string`

Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set

#### Inherited from

FormButtonParentProps.padding

___

### percentage

• `Optional` **percentage**: `number`

Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background

#### Inherited from

FormButtonParentProps.percentage

___

### push

• `Optional` **push**: `boolean`

Use 'push' design

#### Inherited from

FormButtonParentProps.push

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

FormButtonParentProps.replace

___

### ripple

• `Optional` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

FormButtonParentProps.ripple

___

### round

• `Optional` **round**: `boolean`

Makes a circle shaped button

#### Inherited from

FormButtonParentProps.round

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a more prominent border-radius for a squared shape button

#### Inherited from

FormButtonParentProps.rounded

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

FormButtonParentProps.size

___

### stack

• `Optional` **stack**: `boolean`

Stack icon and label vertically instead of on same line (like it is by default)

#### Inherited from

FormButtonParentProps.stack

___

### stretch

• `Optional` **stretch**: `boolean`

When used on flexbox parent, button will stretch to parent's height

#### Inherited from

FormButtonParentProps.stretch

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

FormButtonParentProps.tabindex

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only with 'to' or 'href' props

#### Inherited from

FormButtonParentProps.target

___

### textColor

• `Optional` **textColor**: `string`

Overrides text color (if needed); Color name from the Quasar Color Palette

#### Inherited from

FormButtonParentProps.textColor

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

FormButtonParentProps.to

___

### tooltip

• `Optional` `Readonly` **tooltip**: `stringU`

#### Inherited from

FormButtonParentProps.tooltip

___

### tooltipDirection

• `Optional` `Readonly` **tooltipDirection**: [`Direction`](../modules/components_Tooltip_extras.md#direction)

#### Inherited from

FormButtonParentProps.tooltipDirection

___

### type

• `Optional` **type**: `string`

1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag
Default value: button

#### Inherited from

FormButtonParentProps.type

___

### unelevated

• `Optional` **unelevated**: `boolean`

Remove shadow

#### Inherited from

FormButtonParentProps.unelevated

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

FormButtonParentProps.onClick

___

### onConfirmedClick

▸ `Optional` `Readonly` **onConfirmedClick**(): `void`

Emits confirmed click event.

#### Returns

`void`

#### Inherited from

FormButtonParentProps.onConfirmedClick
