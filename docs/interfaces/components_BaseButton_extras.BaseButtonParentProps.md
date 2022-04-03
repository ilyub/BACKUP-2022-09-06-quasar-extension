[Quasar extension](../index.md) / [Exports](../modules.md) / [components/BaseButton.extras](../modules/components_BaseButton_extras.md) / BaseButtonParentProps

# Interface: BaseButtonParentProps

[components/BaseButton.extras](../modules/components_BaseButton_extras.md).BaseButtonParentProps

## Hierarchy

- `Omit`<`QBtnProps`, ``"disable"``\>

  ↳ **`BaseButtonParentProps`**

  ↳↳ [`BaseButtonProps`](components_BaseButton_extras.BaseButtonProps.md)

## Table of contents

### Properties

- [align](components_BaseButton_extras.BaseButtonParentProps.md#align)
- [color](components_BaseButton_extras.BaseButtonParentProps.md#color)
- [darkPercentage](components_BaseButton_extras.BaseButtonParentProps.md#darkpercentage)
- [dense](components_BaseButton_extras.BaseButtonParentProps.md#dense)
- [fab](components_BaseButton_extras.BaseButtonParentProps.md#fab)
- [fabMini](components_BaseButton_extras.BaseButtonParentProps.md#fabmini)
- [flat](components_BaseButton_extras.BaseButtonParentProps.md#flat)
- [glossy](components_BaseButton_extras.BaseButtonParentProps.md#glossy)
- [href](components_BaseButton_extras.BaseButtonParentProps.md#href)
- [icon](components_BaseButton_extras.BaseButtonParentProps.md#icon)
- [iconRight](components_BaseButton_extras.BaseButtonParentProps.md#iconright)
- [label](components_BaseButton_extras.BaseButtonParentProps.md#label)
- [loading](components_BaseButton_extras.BaseButtonParentProps.md#loading)
- [noCaps](components_BaseButton_extras.BaseButtonParentProps.md#nocaps)
- [noWrap](components_BaseButton_extras.BaseButtonParentProps.md#nowrap)
- [outline](components_BaseButton_extras.BaseButtonParentProps.md#outline)
- [padding](components_BaseButton_extras.BaseButtonParentProps.md#padding)
- [percentage](components_BaseButton_extras.BaseButtonParentProps.md#percentage)
- [push](components_BaseButton_extras.BaseButtonParentProps.md#push)
- [replace](components_BaseButton_extras.BaseButtonParentProps.md#replace)
- [ripple](components_BaseButton_extras.BaseButtonParentProps.md#ripple)
- [round](components_BaseButton_extras.BaseButtonParentProps.md#round)
- [rounded](components_BaseButton_extras.BaseButtonParentProps.md#rounded)
- [size](components_BaseButton_extras.BaseButtonParentProps.md#size)
- [stack](components_BaseButton_extras.BaseButtonParentProps.md#stack)
- [stretch](components_BaseButton_extras.BaseButtonParentProps.md#stretch)
- [tabindex](components_BaseButton_extras.BaseButtonParentProps.md#tabindex)
- [target](components_BaseButton_extras.BaseButtonParentProps.md#target)
- [textColor](components_BaseButton_extras.BaseButtonParentProps.md#textcolor)
- [to](components_BaseButton_extras.BaseButtonParentProps.md#to)
- [type](components_BaseButton_extras.BaseButtonParentProps.md#type)
- [unelevated](components_BaseButton_extras.BaseButtonParentProps.md#unelevated)

### Methods

- [onClick](components_BaseButton_extras.BaseButtonParentProps.md#onclick)

## Properties

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"around"`` \| ``"between"`` \| ``"evenly"``

Label or content alignment
Default value: center

#### Inherited from

Omit.align

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

Omit.color

___

### darkPercentage

• `Optional` **darkPercentage**: `boolean`

Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props

#### Inherited from

Omit.darkPercentage

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

Omit.dense

___

### fab

• `Optional` **fab**: `boolean`

Makes button size and shape to fit a Floating Action Button

#### Inherited from

Omit.fab

___

### fabMini

• `Optional` **fabMini**: `boolean`

Makes button size and shape to fit a small Floating Action Button

#### Inherited from

Omit.fabMini

___

### flat

• `Optional` **flat**: `boolean`

Use 'flat' design

#### Inherited from

Omit.flat

___

### glossy

• `Optional` **glossy**: `boolean`

Applies a glossy effect

#### Inherited from

Omit.glossy

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to' and 'replace' props

#### Inherited from

Omit.href

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

Omit.icon

___

### iconRight

• `Optional` **iconRight**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

Omit.iconRight

___

### label

• `Optional` **label**: `string` \| `number`

The text that will be shown on the button

#### Inherited from

Omit.label

___

### loading

• `Optional` **loading**: `boolean`

Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)

#### Inherited from

Omit.loading

___

### noCaps

• `Optional` **noCaps**: `boolean`

Avoid turning label text into caps (which happens by default)

#### Inherited from

Omit.noCaps

___

### noWrap

• `Optional` **noWrap**: `boolean`

Avoid label text wrapping

#### Inherited from

Omit.noWrap

___

### outline

• `Optional` **outline**: `boolean`

Use 'outline' design

#### Inherited from

Omit.outline

___

### padding

• `Optional` **padding**: `string`

Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set

#### Inherited from

Omit.padding

___

### percentage

• `Optional` **percentage**: `number`

Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background

#### Inherited from

Omit.percentage

___

### push

• `Optional` **push**: `boolean`

Use 'push' design

#### Inherited from

Omit.push

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

Omit.replace

___

### ripple

• `Optional` **ripple**: `any`

Configure material ripple (disable it by setting it to 'false' or supply a config object)
Default value: true

#### Inherited from

Omit.ripple

___

### round

• `Optional` **round**: `boolean`

Makes a circle shaped button

#### Inherited from

Omit.round

___

### rounded

• `Optional` **rounded**: `boolean`

Applies a more prominent border-radius for a squared shape button

#### Inherited from

Omit.rounded

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

Omit.size

___

### stack

• `Optional` **stack**: `boolean`

Stack icon and label vertically instead of on same line (like it is by default)

#### Inherited from

Omit.stack

___

### stretch

• `Optional` **stretch**: `boolean`

When used on flexbox parent, button will stretch to parent's height

#### Inherited from

Omit.stretch

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

Omit.tabindex

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only with 'to' or 'href' props

#### Inherited from

Omit.target

___

### textColor

• `Optional` **textColor**: `string`

Overrides text color (if needed); Color name from the Quasar Color Palette

#### Inherited from

Omit.textColor

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

Omit.to

___

### type

• `Optional` **type**: `string`

1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag
Default value: button

#### Inherited from

Omit.type

___

### unelevated

• `Optional` **unelevated**: `boolean`

Remove shadow

#### Inherited from

Omit.unelevated

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

Omit.onClick
