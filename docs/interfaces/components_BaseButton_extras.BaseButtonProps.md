[Quasar extension](../index.md) / [Exports](../modules.md) / [components/BaseButton.extras](../modules/components_BaseButton_extras.md) / BaseButtonProps

# Interface: BaseButtonProps

[components/BaseButton.extras](../modules/components_BaseButton_extras.md).BaseButtonProps

## Hierarchy

- [`BaseButtonParentProps`](components_BaseButton_extras.BaseButtonParentProps.md)

- [`BaseButtonOwnProps`](components_BaseButton_extras.BaseButtonOwnProps.md)

  ↳ **`BaseButtonProps`**

## Table of contents

### Properties

- [align](components_BaseButton_extras.BaseButtonProps.md#align)
- [asyncClick](components_BaseButton_extras.BaseButtonProps.md#asyncclick)
- [color](components_BaseButton_extras.BaseButtonProps.md#color)
- [confirmation](components_BaseButton_extras.BaseButtonProps.md#confirmation)
- [darkPercentage](components_BaseButton_extras.BaseButtonProps.md#darkpercentage)
- [dense](components_BaseButton_extras.BaseButtonProps.md#dense)
- [disable](components_BaseButton_extras.BaseButtonProps.md#disable)
- [fab](components_BaseButton_extras.BaseButtonProps.md#fab)
- [fabMini](components_BaseButton_extras.BaseButtonProps.md#fabmini)
- [flat](components_BaseButton_extras.BaseButtonProps.md#flat)
- [glossy](components_BaseButton_extras.BaseButtonProps.md#glossy)
- [href](components_BaseButton_extras.BaseButtonProps.md#href)
- [icon](components_BaseButton_extras.BaseButtonProps.md#icon)
- [iconRight](components_BaseButton_extras.BaseButtonProps.md#iconright)
- [label](components_BaseButton_extras.BaseButtonProps.md#label)
- [loading](components_BaseButton_extras.BaseButtonProps.md#loading)
- [noCaps](components_BaseButton_extras.BaseButtonProps.md#nocaps)
- [noWrap](components_BaseButton_extras.BaseButtonProps.md#nowrap)
- [outline](components_BaseButton_extras.BaseButtonProps.md#outline)
- [padding](components_BaseButton_extras.BaseButtonProps.md#padding)
- [percentage](components_BaseButton_extras.BaseButtonProps.md#percentage)
- [push](components_BaseButton_extras.BaseButtonProps.md#push)
- [replace](components_BaseButton_extras.BaseButtonProps.md#replace)
- [ripple](components_BaseButton_extras.BaseButtonProps.md#ripple)
- [round](components_BaseButton_extras.BaseButtonProps.md#round)
- [rounded](components_BaseButton_extras.BaseButtonProps.md#rounded)
- [size](components_BaseButton_extras.BaseButtonProps.md#size)
- [stack](components_BaseButton_extras.BaseButtonProps.md#stack)
- [stretch](components_BaseButton_extras.BaseButtonProps.md#stretch)
- [tabindex](components_BaseButton_extras.BaseButtonProps.md#tabindex)
- [target](components_BaseButton_extras.BaseButtonProps.md#target)
- [textColor](components_BaseButton_extras.BaseButtonProps.md#textcolor)
- [to](components_BaseButton_extras.BaseButtonProps.md#to)
- [tooltip](components_BaseButton_extras.BaseButtonProps.md#tooltip)
- [tooltipDirection](components_BaseButton_extras.BaseButtonProps.md#tooltipdirection)
- [type](components_BaseButton_extras.BaseButtonProps.md#type)
- [unelevated](components_BaseButton_extras.BaseButtonProps.md#unelevated)

### Methods

- [onClick](components_BaseButton_extras.BaseButtonProps.md#onclick)
- [onConfirmedClick](components_BaseButton_extras.BaseButtonProps.md#onconfirmedclick)

## Properties

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"around"`` \| ``"between"`` \| ``"evenly"``

Label or content alignment
Default value: center

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[align](components_BaseButton_extras.BaseButtonParentProps.md#align)

___

### asyncClick

• `Optional` `Readonly` **asyncClick**: [`AsyncClick`](components_BaseButton_extras.AsyncClick.md)

#### Inherited from

[BaseButtonOwnProps](components_BaseButton_extras.BaseButtonOwnProps.md).[asyncClick](components_BaseButton_extras.BaseButtonOwnProps.md#asyncclick)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[color](components_BaseButton_extras.BaseButtonParentProps.md#color)

___

### confirmation

• `Optional` `Readonly` **confirmation**: `stringU`

#### Inherited from

[BaseButtonOwnProps](components_BaseButton_extras.BaseButtonOwnProps.md).[confirmation](components_BaseButton_extras.BaseButtonOwnProps.md#confirmation)

___

### darkPercentage

• `Optional` **darkPercentage**: `boolean`

Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[darkPercentage](components_BaseButton_extras.BaseButtonParentProps.md#darkpercentage)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[dense](components_BaseButton_extras.BaseButtonParentProps.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[BaseButtonOwnProps](components_BaseButton_extras.BaseButtonOwnProps.md).[disable](components_BaseButton_extras.BaseButtonOwnProps.md#disable)

___

### fab

• `Optional` **fab**: `boolean`

Makes button size and shape to fit a Floating Action Button

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[fab](components_BaseButton_extras.BaseButtonParentProps.md#fab)

___

### fabMini

• `Optional` **fabMini**: `boolean`

Makes button size and shape to fit a small Floating Action Button

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[fabMini](components_BaseButton_extras.BaseButtonParentProps.md#fabmini)

___

### flat

• `Optional` **flat**: `boolean`

Use 'flat' design

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[flat](components_BaseButton_extras.BaseButtonParentProps.md#flat)

___

### glossy

• `Optional` **glossy**: `boolean`

Applies a glossy effect

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[glossy](components_BaseButton_extras.BaseButtonParentProps.md#glossy)

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to' and 'replace' props

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[href](components_BaseButton_extras.BaseButtonParentProps.md#href)

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[icon](components_BaseButton_extras.BaseButtonParentProps.md#icon)

___

### iconRight

• `Optional` **iconRight**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[iconRight](components_BaseButton_extras.BaseButtonParentProps.md#iconright)

___

### label

• `Optional` **label**: `string` \| `number`

The text that will be shown on the button

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[label](components_BaseButton_extras.BaseButtonParentProps.md#label)

___

### loading

• `Optional` **loading**: `boolean`

Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[loading](components_BaseButton_extras.BaseButtonParentProps.md#loading)

___

### noCaps

• `Optional` **noCaps**: `boolean`

Avoid turning label text into caps (which happens by default)

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[noCaps](components_BaseButton_extras.BaseButtonParentProps.md#nocaps)

___

### noWrap

• `Optional` **noWrap**: `boolean`

Avoid label text wrapping

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[noWrap](components_BaseButton_extras.BaseButtonParentProps.md#nowrap)

___

### outline

• `Optional` **outline**: `boolean`

Use 'outline' design

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[outline](components_BaseButton_extras.BaseButtonParentProps.md#outline)

___

### padding

• `Optional` **padding**: `string`

Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[padding](components_BaseButton_extras.BaseButtonParentProps.md#padding)

___

### percentage

• `Optional` **percentage**: `number`

Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[percentage](components_BaseButton_extras.BaseButtonParentProps.md#percentage)

___

### push

• `Optional` **push**: `boolean`

Use 'push' design

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[push](components_BaseButton_extras.BaseButtonParentProps.md#push)

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[replace](components_BaseButton_extras.BaseButtonParentProps.md#replace)

___

### ripple

• `Optional` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[ripple](components_BaseButton_extras.BaseButtonParentProps.md#ripple)

___

### round

• `Optional` **round**: `boolean`

Makes a circle shaped button

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[round](components_BaseButton_extras.BaseButtonParentProps.md#round)

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a more prominent border-radius for a squared shape button

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[rounded](components_BaseButton_extras.BaseButtonParentProps.md#rounded)

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[size](components_BaseButton_extras.BaseButtonParentProps.md#size)

___

### stack

• `Optional` **stack**: `boolean`

Stack icon and label vertically instead of on same line (like it is by default)

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[stack](components_BaseButton_extras.BaseButtonParentProps.md#stack)

___

### stretch

• `Optional` **stretch**: `boolean`

When used on flexbox parent, button will stretch to parent's height

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[stretch](components_BaseButton_extras.BaseButtonParentProps.md#stretch)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[tabindex](components_BaseButton_extras.BaseButtonParentProps.md#tabindex)

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only with 'to' or 'href' props

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[target](components_BaseButton_extras.BaseButtonParentProps.md#target)

___

### textColor

• `Optional` **textColor**: `string`

Overrides text color (if needed); Color name from the Quasar Color Palette

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[textColor](components_BaseButton_extras.BaseButtonParentProps.md#textcolor)

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[to](components_BaseButton_extras.BaseButtonParentProps.md#to)

___

### tooltip

• `Optional` `Readonly` **tooltip**: `stringU`

#### Inherited from

[BaseButtonOwnProps](components_BaseButton_extras.BaseButtonOwnProps.md).[tooltip](components_BaseButton_extras.BaseButtonOwnProps.md#tooltip)

___

### tooltipDirection

• `Optional` `Readonly` **tooltipDirection**: [`Direction`](../modules/components_Tooltip_extras.md#direction)

#### Inherited from

[BaseButtonOwnProps](components_BaseButton_extras.BaseButtonOwnProps.md).[tooltipDirection](components_BaseButton_extras.BaseButtonOwnProps.md#tooltipdirection)

___

### type

• `Optional` **type**: `string`

1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag
Default value: button

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[type](components_BaseButton_extras.BaseButtonParentProps.md#type)

___

### unelevated

• `Optional` **unelevated**: `boolean`

Remove shadow

#### Inherited from

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[unelevated](components_BaseButton_extras.BaseButtonParentProps.md#unelevated)

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

[BaseButtonParentProps](components_BaseButton_extras.BaseButtonParentProps.md).[onClick](components_BaseButton_extras.BaseButtonParentProps.md#onclick)

___

### onConfirmedClick

▸ `Optional` `Readonly` **onConfirmedClick**(): `void`

Emits confirmed click event.

#### Returns

`void`

#### Inherited from

[BaseButtonOwnProps](components_BaseButton_extras.BaseButtonOwnProps.md).[onConfirmedClick](components_BaseButton_extras.BaseButtonOwnProps.md#onconfirmedclick)
