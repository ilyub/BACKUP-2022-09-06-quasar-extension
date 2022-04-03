[Quasar extension](../index.md) / [Exports](../modules.md) / [components/IconButton.extras](../modules/components_IconButton_extras.md) / IconButtonProps

# Interface: IconButtonProps

[components/IconButton.extras](../modules/components_IconButton_extras.md).IconButtonProps

## Hierarchy

- [`IconButtonParentProps`](../modules/components_IconButton_extras.md#iconbuttonparentprops)

- [`IconButtonOwnProps`](components_IconButton_extras.IconButtonOwnProps.md)

  ↳ **`IconButtonProps`**

  ↳↳ [`LanguagePickerOptions`](components_LanguagePicker_extras.LanguagePickerOptions.md)

## Table of contents

### Properties

- [align](components_IconButton_extras.IconButtonProps.md#align)
- [asyncClick](components_IconButton_extras.IconButtonProps.md#asyncclick)
- [color](components_IconButton_extras.IconButtonProps.md#color)
- [confirmation](components_IconButton_extras.IconButtonProps.md#confirmation)
- [darkPercentage](components_IconButton_extras.IconButtonProps.md#darkpercentage)
- [dense](components_IconButton_extras.IconButtonProps.md#dense)
- [disable](components_IconButton_extras.IconButtonProps.md#disable)
- [fab](components_IconButton_extras.IconButtonProps.md#fab)
- [fabMini](components_IconButton_extras.IconButtonProps.md#fabmini)
- [flat](components_IconButton_extras.IconButtonProps.md#flat)
- [glossy](components_IconButton_extras.IconButtonProps.md#glossy)
- [href](components_IconButton_extras.IconButtonProps.md#href)
- [icon](components_IconButton_extras.IconButtonProps.md#icon)
- [iconRight](components_IconButton_extras.IconButtonProps.md#iconright)
- [label](components_IconButton_extras.IconButtonProps.md#label)
- [loading](components_IconButton_extras.IconButtonProps.md#loading)
- [noCaps](components_IconButton_extras.IconButtonProps.md#nocaps)
- [noWrap](components_IconButton_extras.IconButtonProps.md#nowrap)
- [outline](components_IconButton_extras.IconButtonProps.md#outline)
- [padding](components_IconButton_extras.IconButtonProps.md#padding)
- [percentage](components_IconButton_extras.IconButtonProps.md#percentage)
- [push](components_IconButton_extras.IconButtonProps.md#push)
- [replace](components_IconButton_extras.IconButtonProps.md#replace)
- [ripple](components_IconButton_extras.IconButtonProps.md#ripple)
- [round](components_IconButton_extras.IconButtonProps.md#round)
- [rounded](components_IconButton_extras.IconButtonProps.md#rounded)
- [size](components_IconButton_extras.IconButtonProps.md#size)
- [stack](components_IconButton_extras.IconButtonProps.md#stack)
- [stretch](components_IconButton_extras.IconButtonProps.md#stretch)
- [tabindex](components_IconButton_extras.IconButtonProps.md#tabindex)
- [target](components_IconButton_extras.IconButtonProps.md#target)
- [textColor](components_IconButton_extras.IconButtonProps.md#textcolor)
- [to](components_IconButton_extras.IconButtonProps.md#to)
- [tooltip](components_IconButton_extras.IconButtonProps.md#tooltip)
- [tooltipDirection](components_IconButton_extras.IconButtonProps.md#tooltipdirection)
- [type](components_IconButton_extras.IconButtonProps.md#type)
- [unelevated](components_IconButton_extras.IconButtonProps.md#unelevated)

### Methods

- [onClick](components_IconButton_extras.IconButtonProps.md#onclick)
- [onConfirmedClick](components_IconButton_extras.IconButtonProps.md#onconfirmedclick)

## Properties

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"around"`` \| ``"between"`` \| ``"evenly"``

Label or content alignment
Default value: center

#### Inherited from

IconButtonParentProps.align

___

### asyncClick

• `Optional` `Readonly` **asyncClick**: [`AsyncClick`](components_BaseButton_extras.AsyncClick.md)

#### Inherited from

IconButtonParentProps.asyncClick

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

IconButtonParentProps.color

___

### confirmation

• `Optional` `Readonly` **confirmation**: `stringU`

#### Inherited from

IconButtonParentProps.confirmation

___

### darkPercentage

• `Optional` **darkPercentage**: `boolean`

Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props

#### Inherited from

IconButtonParentProps.darkPercentage

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

IconButtonParentProps.dense

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

IconButtonParentProps.disable

___

### fab

• `Optional` **fab**: `boolean`

Makes button size and shape to fit a Floating Action Button

#### Inherited from

IconButtonParentProps.fab

___

### fabMini

• `Optional` **fabMini**: `boolean`

Makes button size and shape to fit a small Floating Action Button

#### Inherited from

IconButtonParentProps.fabMini

___

### flat

• `Optional` **flat**: `boolean`

Use 'flat' design

#### Inherited from

IconButtonParentProps.flat

___

### glossy

• `Optional` **glossy**: `boolean`

Applies a glossy effect

#### Inherited from

IconButtonParentProps.glossy

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to' and 'replace' props

#### Inherited from

IconButtonParentProps.href

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

IconButtonParentProps.icon

___

### iconRight

• `Optional` **iconRight**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

IconButtonParentProps.iconRight

___

### label

• `Optional` **label**: `string` \| `number`

The text that will be shown on the button

#### Inherited from

IconButtonParentProps.label

___

### loading

• `Optional` **loading**: `boolean`

Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)

#### Inherited from

IconButtonParentProps.loading

___

### noCaps

• `Optional` **noCaps**: `boolean`

Avoid turning label text into caps (which happens by default)

#### Inherited from

IconButtonParentProps.noCaps

___

### noWrap

• `Optional` **noWrap**: `boolean`

Avoid label text wrapping

#### Inherited from

IconButtonParentProps.noWrap

___

### outline

• `Optional` **outline**: `boolean`

Use 'outline' design

#### Inherited from

IconButtonParentProps.outline

___

### padding

• `Optional` **padding**: `string`

Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set

#### Inherited from

IconButtonParentProps.padding

___

### percentage

• `Optional` **percentage**: `number`

Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background

#### Inherited from

IconButtonParentProps.percentage

___

### push

• `Optional` **push**: `boolean`

Use 'push' design

#### Inherited from

IconButtonParentProps.push

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

IconButtonParentProps.replace

___

### ripple

• `Optional` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

IconButtonParentProps.ripple

___

### round

• `Optional` **round**: `boolean`

Makes a circle shaped button

#### Inherited from

IconButtonParentProps.round

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a more prominent border-radius for a squared shape button

#### Inherited from

IconButtonParentProps.rounded

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

IconButtonParentProps.size

___

### stack

• `Optional` **stack**: `boolean`

Stack icon and label vertically instead of on same line (like it is by default)

#### Inherited from

IconButtonParentProps.stack

___

### stretch

• `Optional` **stretch**: `boolean`

When used on flexbox parent, button will stretch to parent's height

#### Inherited from

IconButtonParentProps.stretch

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

IconButtonParentProps.tabindex

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only with 'to' or 'href' props

#### Inherited from

IconButtonParentProps.target

___

### textColor

• `Optional` **textColor**: `string`

Overrides text color (if needed); Color name from the Quasar Color Palette

#### Inherited from

IconButtonParentProps.textColor

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

IconButtonParentProps.to

___

### tooltip

• `Optional` `Readonly` **tooltip**: `stringU`

#### Inherited from

IconButtonParentProps.tooltip

___

### tooltipDirection

• `Optional` `Readonly` **tooltipDirection**: [`Direction`](../modules/components_Tooltip_extras.md#direction)

#### Inherited from

IconButtonParentProps.tooltipDirection

___

### type

• `Optional` **type**: `string`

1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag
Default value: button

#### Inherited from

IconButtonParentProps.type

___

### unelevated

• `Optional` **unelevated**: `boolean`

Remove shadow

#### Inherited from

IconButtonParentProps.unelevated

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

IconButtonParentProps.onClick

___

### onConfirmedClick

▸ `Optional` `Readonly` **onConfirmedClick**(): `void`

Emits confirmed click event.

#### Returns

`void`

#### Inherited from

IconButtonParentProps.onConfirmedClick
