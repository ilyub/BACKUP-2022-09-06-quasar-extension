[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Button.extras](../modules/components_Button_extras.md) / [Button](../modules/components_Button_extras.Button.md) / ParentProps

# Interface: ParentProps

[components/Button.extras](../modules/components_Button_extras.md).[Button](../modules/components_Button_extras.Button.md).ParentProps

## Hierarchy

- [`Props`](components_BaseButton_extras.BaseButton.Props.md)

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_Button_extras.Button.Props.md)

## Table of contents

### Properties

- [align](components_Button_extras.Button.ParentProps.md#align)
- [color](components_Button_extras.Button.ParentProps.md#color)
- [confirmation](components_Button_extras.Button.ParentProps.md#confirmation)
- [confirmedClick](components_Button_extras.Button.ParentProps.md#confirmedclick)
- [darkPercentage](components_Button_extras.Button.ParentProps.md#darkpercentage)
- [dense](components_Button_extras.Button.ParentProps.md#dense)
- [disable](components_Button_extras.Button.ParentProps.md#disable)
- [fab](components_Button_extras.Button.ParentProps.md#fab)
- [fabMini](components_Button_extras.Button.ParentProps.md#fabmini)
- [flat](components_Button_extras.Button.ParentProps.md#flat)
- [glossy](components_Button_extras.Button.ParentProps.md#glossy)
- [href](components_Button_extras.Button.ParentProps.md#href)
- [icon](components_Button_extras.Button.ParentProps.md#icon)
- [iconRight](components_Button_extras.Button.ParentProps.md#iconright)
- [label](components_Button_extras.Button.ParentProps.md#label)
- [loading](components_Button_extras.Button.ParentProps.md#loading)
- [noCaps](components_Button_extras.Button.ParentProps.md#nocaps)
- [noWrap](components_Button_extras.Button.ParentProps.md#nowrap)
- [onAsyncClick](components_Button_extras.Button.ParentProps.md#onasyncclick)
- [outline](components_Button_extras.Button.ParentProps.md#outline)
- [padding](components_Button_extras.Button.ParentProps.md#padding)
- [percentage](components_Button_extras.Button.ParentProps.md#percentage)
- [push](components_Button_extras.Button.ParentProps.md#push)
- [replace](components_Button_extras.Button.ParentProps.md#replace)
- [ripple](components_Button_extras.Button.ParentProps.md#ripple)
- [round](components_Button_extras.Button.ParentProps.md#round)
- [rounded](components_Button_extras.Button.ParentProps.md#rounded)
- [size](components_Button_extras.Button.ParentProps.md#size)
- [stack](components_Button_extras.Button.ParentProps.md#stack)
- [stretch](components_Button_extras.Button.ParentProps.md#stretch)
- [tabindex](components_Button_extras.Button.ParentProps.md#tabindex)
- [target](components_Button_extras.Button.ParentProps.md#target)
- [textColor](components_Button_extras.Button.ParentProps.md#textcolor)
- [to](components_Button_extras.Button.ParentProps.md#to)
- [tooltip](components_Button_extras.Button.ParentProps.md#tooltip)
- [tooltipDirection](components_Button_extras.Button.ParentProps.md#tooltipdirection)
- [type](components_Button_extras.Button.ParentProps.md#type)
- [unelevated](components_Button_extras.Button.ParentProps.md#unelevated)

### Methods

- [onClick](components_Button_extras.Button.ParentProps.md#onclick)

## Properties

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"around"`` \| ``"between"`` \| ``"evenly"``

Label or content alignment
Default value: center

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[align](components_BaseButton_extras.BaseButton.Props.md#align)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[color](components_BaseButton_extras.BaseButton.Props.md#color)

___

### confirmation

• `Optional` `Readonly` **confirmation**: `Key`<`Word`\>

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[confirmation](components_BaseButton_extras.BaseButton.Props.md#confirmation)

___

### confirmedClick

• `Optional` `Readonly` **confirmedClick**: [`ConfirmedClick`](components_api_confirmed_click.confirmedClick.ConfirmedClick.md)

Handles confirmed click.

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[confirmedClick](components_BaseButton_extras.BaseButton.Props.md#confirmedclick)

___

### darkPercentage

• `Optional` **darkPercentage**: `boolean`

Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[darkPercentage](components_BaseButton_extras.BaseButton.Props.md#darkpercentage)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[dense](components_BaseButton_extras.BaseButton.Props.md#dense)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[disable](components_BaseButton_extras.BaseButton.Props.md#disable)

___

### fab

• `Optional` **fab**: `boolean`

Makes button size and shape to fit a Floating Action Button

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[fab](components_BaseButton_extras.BaseButton.Props.md#fab)

___

### fabMini

• `Optional` **fabMini**: `boolean`

Makes button size and shape to fit a small Floating Action Button

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[fabMini](components_BaseButton_extras.BaseButton.Props.md#fabmini)

___

### flat

• `Optional` **flat**: `boolean`

Use 'flat' design

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[flat](components_BaseButton_extras.BaseButton.Props.md#flat)

___

### glossy

• `Optional` **glossy**: `boolean`

Applies a glossy effect

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[glossy](components_BaseButton_extras.BaseButton.Props.md#glossy)

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to' and 'replace' props

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[href](components_BaseButton_extras.BaseButton.Props.md#href)

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[icon](components_BaseButton_extras.BaseButton.Props.md#icon)

___

### iconRight

• `Optional` **iconRight**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[iconRight](components_BaseButton_extras.BaseButton.Props.md#iconright)

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[label](components_BaseButton_extras.BaseButton.Props.md#label)

___

### loading

• `Optional` `Readonly` **loading**: `booleanU`

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[loading](components_BaseButton_extras.BaseButton.Props.md#loading)

___

### noCaps

• `Optional` **noCaps**: `boolean`

Avoid turning label text into caps (which happens by default)

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[noCaps](components_BaseButton_extras.BaseButton.Props.md#nocaps)

___

### noWrap

• `Optional` **noWrap**: `boolean`

Avoid label text wrapping

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[noWrap](components_BaseButton_extras.BaseButton.Props.md#nowrap)

___

### onAsyncClick

• `Optional` `Readonly` **onAsyncClick**: [`AsyncClick`](components_api_async_click.asyncClick.AsyncClick.md)

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[onAsyncClick](components_BaseButton_extras.BaseButton.Props.md#onasyncclick)

___

### outline

• `Optional` **outline**: `boolean`

Use 'outline' design

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[outline](components_BaseButton_extras.BaseButton.Props.md#outline)

___

### padding

• `Optional` **padding**: `string`

Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[padding](components_BaseButton_extras.BaseButton.Props.md#padding)

___

### percentage

• `Optional` **percentage**: `number`

Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[percentage](components_BaseButton_extras.BaseButton.Props.md#percentage)

___

### push

• `Optional` **push**: `boolean`

Use 'push' design

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[push](components_BaseButton_extras.BaseButton.Props.md#push)

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[replace](components_BaseButton_extras.BaseButton.Props.md#replace)

___

### ripple

• `Optional` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[ripple](components_BaseButton_extras.BaseButton.Props.md#ripple)

___

### round

• `Optional` **round**: `boolean`

Makes a circle shaped button

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[round](components_BaseButton_extras.BaseButton.Props.md#round)

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a more prominent border-radius for a squared shape button

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[rounded](components_BaseButton_extras.BaseButton.Props.md#rounded)

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[size](components_BaseButton_extras.BaseButton.Props.md#size)

___

### stack

• `Optional` **stack**: `boolean`

Stack icon and label vertically instead of on same line (like it is by default)

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[stack](components_BaseButton_extras.BaseButton.Props.md#stack)

___

### stretch

• `Optional` **stretch**: `boolean`

When used on flexbox parent, button will stretch to parent's height

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[stretch](components_BaseButton_extras.BaseButton.Props.md#stretch)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[tabindex](components_BaseButton_extras.BaseButton.Props.md#tabindex)

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only with 'to' or 'href' props

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[target](components_BaseButton_extras.BaseButton.Props.md#target)

___

### textColor

• `Optional` **textColor**: `string`

Overrides text color (if needed); Color name from the Quasar Color Palette

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[textColor](components_BaseButton_extras.BaseButton.Props.md#textcolor)

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[to](components_BaseButton_extras.BaseButton.Props.md#to)

___

### tooltip

• **tooltip**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[tooltip](components_BaseButton_extras.BaseButton.Props.md#tooltip)

___

### tooltipDirection

• `Optional` `Readonly` **tooltipDirection**: [`Direction`](../modules/components_api_direction.direction.md#direction)

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[tooltipDirection](components_BaseButton_extras.BaseButton.Props.md#tooltipdirection)

___

### type

• `Optional` `Readonly` **type**: `stringU`

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[type](components_BaseButton_extras.BaseButton.Props.md#type)

___

### unelevated

• `Optional` **unelevated**: `boolean`

Remove shadow

#### Inherited from

[Props](components_BaseButton_extras.BaseButton.Props.md).[unelevated](components_BaseButton_extras.BaseButton.Props.md#unelevated)

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

[Props](components_BaseButton_extras.BaseButton.Props.md).[onClick](components_BaseButton_extras.BaseButton.Props.md#onclick)
