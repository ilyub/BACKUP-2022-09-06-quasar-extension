[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Button.extras](../modules/components_Button_extras.md) / [Button](../modules/components_Button_extras.Button.md) / Props

# Interface: Props

[components/Button.extras](../modules/components_Button_extras.md).[Button](../modules/components_Button_extras.Button.md).Props

## Hierarchy

- [`ParentProps`](components_Button_extras.Button.ParentProps.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [align](components_Button_extras.Button.Props.md#align)
- [color](components_Button_extras.Button.Props.md#color)
- [confirmation](components_Button_extras.Button.Props.md#confirmation)
- [confirmedClick](components_Button_extras.Button.Props.md#confirmedclick)
- [darkPercentage](components_Button_extras.Button.Props.md#darkpercentage)
- [dense](components_Button_extras.Button.Props.md#dense)
- [disable](components_Button_extras.Button.Props.md#disable)
- [fab](components_Button_extras.Button.Props.md#fab)
- [fabMini](components_Button_extras.Button.Props.md#fabmini)
- [flat](components_Button_extras.Button.Props.md#flat)
- [glossy](components_Button_extras.Button.Props.md#glossy)
- [href](components_Button_extras.Button.Props.md#href)
- [icon](components_Button_extras.Button.Props.md#icon)
- [iconRight](components_Button_extras.Button.Props.md#iconright)
- [label](components_Button_extras.Button.Props.md#label)
- [loading](components_Button_extras.Button.Props.md#loading)
- [noCaps](components_Button_extras.Button.Props.md#nocaps)
- [noWrap](components_Button_extras.Button.Props.md#nowrap)
- [onAsyncClick](components_Button_extras.Button.Props.md#onasyncclick)
- [outline](components_Button_extras.Button.Props.md#outline)
- [padding](components_Button_extras.Button.Props.md#padding)
- [percentage](components_Button_extras.Button.Props.md#percentage)
- [push](components_Button_extras.Button.Props.md#push)
- [replace](components_Button_extras.Button.Props.md#replace)
- [ripple](components_Button_extras.Button.Props.md#ripple)
- [round](components_Button_extras.Button.Props.md#round)
- [rounded](components_Button_extras.Button.Props.md#rounded)
- [size](components_Button_extras.Button.Props.md#size)
- [stack](components_Button_extras.Button.Props.md#stack)
- [stretch](components_Button_extras.Button.Props.md#stretch)
- [tabindex](components_Button_extras.Button.Props.md#tabindex)
- [target](components_Button_extras.Button.Props.md#target)
- [textColor](components_Button_extras.Button.Props.md#textcolor)
- [to](components_Button_extras.Button.Props.md#to)
- [tooltip](components_Button_extras.Button.Props.md#tooltip)
- [tooltipDirection](components_Button_extras.Button.Props.md#tooltipdirection)
- [type](components_Button_extras.Button.Props.md#type)
- [unelevated](components_Button_extras.Button.Props.md#unelevated)

### Methods

- [onClick](components_Button_extras.Button.Props.md#onclick)

## Properties

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"around"`` \| ``"between"`` \| ``"evenly"``

Label or content alignment
Default value: center

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[align](components_Button_extras.Button.ParentProps.md#align)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[color](components_Button_extras.Button.ParentProps.md#color)

___

### confirmation

• `Optional` `Readonly` **confirmation**: `Key`<`Word`\>

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[confirmation](components_Button_extras.Button.ParentProps.md#confirmation)

___

### confirmedClick

• `Optional` `Readonly` **confirmedClick**: [`ConfirmedClick`](components_api_confirmed_click.confirmedClick.ConfirmedClick.md)

Handles confirmed click.

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[confirmedClick](components_Button_extras.Button.ParentProps.md#confirmedclick)

___

### darkPercentage

• `Optional` **darkPercentage**: `boolean`

Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[darkPercentage](components_Button_extras.Button.ParentProps.md#darkpercentage)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[dense](components_Button_extras.Button.ParentProps.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[disable](components_Button_extras.Button.ParentProps.md#disable)

___

### fab

• `Optional` **fab**: `boolean`

Makes button size and shape to fit a Floating Action Button

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[fab](components_Button_extras.Button.ParentProps.md#fab)

___

### fabMini

• `Optional` **fabMini**: `boolean`

Makes button size and shape to fit a small Floating Action Button

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[fabMini](components_Button_extras.Button.ParentProps.md#fabmini)

___

### flat

• `Optional` **flat**: `boolean`

Use 'flat' design

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[flat](components_Button_extras.Button.ParentProps.md#flat)

___

### glossy

• `Optional` **glossy**: `boolean`

Applies a glossy effect

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[glossy](components_Button_extras.Button.ParentProps.md#glossy)

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to' and 'replace' props

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[href](components_Button_extras.Button.ParentProps.md#href)

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[icon](components_Button_extras.Button.ParentProps.md#icon)

___

### iconRight

• `Optional` **iconRight**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[iconRight](components_Button_extras.Button.ParentProps.md#iconright)

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[label](components_Button_extras.Button.ParentProps.md#label)

___

### loading

• `Optional` `Readonly` **loading**: `booleanU`

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[loading](components_Button_extras.Button.ParentProps.md#loading)

___

### noCaps

• `Optional` **noCaps**: `boolean`

Avoid turning label text into caps (which happens by default)

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[noCaps](components_Button_extras.Button.ParentProps.md#nocaps)

___

### noWrap

• `Optional` **noWrap**: `boolean`

Avoid label text wrapping

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[noWrap](components_Button_extras.Button.ParentProps.md#nowrap)

___

### onAsyncClick

• `Optional` `Readonly` **onAsyncClick**: [`AsyncClick`](components_api_async_click.asyncClick.AsyncClick.md)

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[onAsyncClick](components_Button_extras.Button.ParentProps.md#onasyncclick)

___

### outline

• `Optional` **outline**: `boolean`

Use 'outline' design

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[outline](components_Button_extras.Button.ParentProps.md#outline)

___

### padding

• `Optional` **padding**: `string`

Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[padding](components_Button_extras.Button.ParentProps.md#padding)

___

### percentage

• `Optional` **percentage**: `number`

Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[percentage](components_Button_extras.Button.ParentProps.md#percentage)

___

### push

• `Optional` **push**: `boolean`

Use 'push' design

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[push](components_Button_extras.Button.ParentProps.md#push)

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[replace](components_Button_extras.Button.ParentProps.md#replace)

___

### ripple

• `Optional` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[ripple](components_Button_extras.Button.ParentProps.md#ripple)

___

### round

• `Optional` **round**: `boolean`

Makes a circle shaped button

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[round](components_Button_extras.Button.ParentProps.md#round)

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a more prominent border-radius for a squared shape button

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[rounded](components_Button_extras.Button.ParentProps.md#rounded)

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[size](components_Button_extras.Button.ParentProps.md#size)

___

### stack

• `Optional` **stack**: `boolean`

Stack icon and label vertically instead of on same line (like it is by default)

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[stack](components_Button_extras.Button.ParentProps.md#stack)

___

### stretch

• `Optional` **stretch**: `boolean`

When used on flexbox parent, button will stretch to parent's height

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[stretch](components_Button_extras.Button.ParentProps.md#stretch)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[tabindex](components_Button_extras.Button.ParentProps.md#tabindex)

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only with 'to' or 'href' props

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[target](components_Button_extras.Button.ParentProps.md#target)

___

### textColor

• `Optional` **textColor**: `string`

Overrides text color (if needed); Color name from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[textColor](components_Button_extras.Button.ParentProps.md#textcolor)

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[to](components_Button_extras.Button.ParentProps.md#to)

___

### tooltip

• **tooltip**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[tooltip](components_Button_extras.Button.ParentProps.md#tooltip)

___

### tooltipDirection

• `Optional` `Readonly` **tooltipDirection**: [`Direction`](../modules/components_api_direction.direction.md#direction)

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[tooltipDirection](components_Button_extras.Button.ParentProps.md#tooltipdirection)

___

### type

• `Optional` `Readonly` **type**: `stringU`

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[type](components_Button_extras.Button.ParentProps.md#type)

___

### unelevated

• `Optional` **unelevated**: `boolean`

Remove shadow

#### Inherited from

[ParentProps](components_Button_extras.Button.ParentProps.md).[unelevated](components_Button_extras.Button.ParentProps.md#unelevated)

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

[ParentProps](components_Button_extras.Button.ParentProps.md).[onClick](components_Button_extras.Button.ParentProps.md#onclick)
