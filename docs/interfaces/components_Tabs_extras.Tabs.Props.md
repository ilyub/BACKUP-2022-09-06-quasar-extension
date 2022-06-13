[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tabs.extras](../modules/components_Tabs_extras.md) / [Tabs](../modules/components_Tabs_extras.Tabs.md) / Props

# Interface: Props<T\>

[components/Tabs.extras](../modules/components_Tabs_extras.md).[Tabs](../modules/components_Tabs_extras.Tabs.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStrU` = `NumStrU` |

## Hierarchy

- [`ParentProps`](components_Tabs_extras.Tabs.ParentProps.md)

- [`OwnProps`](components_Tabs_extras.Tabs.OwnProps.md)<`T`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [activeBgColor](components_Tabs_extras.Tabs.Props.md#activebgcolor)
- [activeClass](components_Tabs_extras.Tabs.Props.md#activeclass)
- [activeColor](components_Tabs_extras.Tabs.Props.md#activecolor)
- [align](components_Tabs_extras.Tabs.Props.md#align)
- [breakpoint](components_Tabs_extras.Tabs.Props.md#breakpoint)
- [contentClass](components_Tabs_extras.Tabs.Props.md#contentclass)
- [dense](components_Tabs_extras.Tabs.Props.md#dense)
- [indicatorColor](components_Tabs_extras.Tabs.Props.md#indicatorcolor)
- [inlineLabel](components_Tabs_extras.Tabs.Props.md#inlinelabel)
- [leftIcon](components_Tabs_extras.Tabs.Props.md#lefticon)
- [mobileArrows](components_Tabs_extras.Tabs.Props.md#mobilearrows)
- [modelValue](components_Tabs_extras.Tabs.Props.md#modelvalue)
- [narrowIndicator](components_Tabs_extras.Tabs.Props.md#narrowindicator)
- [noCaps](components_Tabs_extras.Tabs.Props.md#nocaps)
- [outsideArrows](components_Tabs_extras.Tabs.Props.md#outsidearrows)
- [rightIcon](components_Tabs_extras.Tabs.Props.md#righticon)
- [shrink](components_Tabs_extras.Tabs.Props.md#shrink)
- [stretch](components_Tabs_extras.Tabs.Props.md#stretch)
- [switchIndicator](components_Tabs_extras.Tabs.Props.md#switchindicator)
- [vertical](components_Tabs_extras.Tabs.Props.md#vertical)

### Methods

- [onUpdate:modelValue](components_Tabs_extras.Tabs.Props.md#onupdate:modelvalue)

## Properties

### activeBgColor

• `Optional` **activeBgColor**: `string`

The color to be attributed to the background of the active tab

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[activeBgColor](components_Tabs_extras.Tabs.ParentProps.md#activebgcolor)

___

### activeClass

• `Optional` **activeClass**: `string`

The class to be set on the active tab

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[activeClass](components_Tabs_extras.Tabs.ParentProps.md#activeclass)

___

### activeColor

• `Optional` **activeColor**: `string`

The color to be attributed to the text of the active tab

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[activeColor](components_Tabs_extras.Tabs.ParentProps.md#activecolor)

___

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"justify"``

Horizontal alignment the tabs within the tabs container
Default value: center

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[align](components_Tabs_extras.Tabs.ParentProps.md#align)

___

### breakpoint

• `Optional` **breakpoint**: `string` \| `number`

Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment
Default value: 600

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[breakpoint](components_Tabs_extras.Tabs.ParentProps.md#breakpoint)

___

### contentClass

• `Optional` **contentClass**: `string`

Class definitions to be attributed to the content wrapper

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[contentClass](components_Tabs_extras.Tabs.ParentProps.md#contentclass)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[dense](components_Tabs_extras.Tabs.ParentProps.md#dense)

___

### indicatorColor

• `Optional` **indicatorColor**: `string`

The color to be attributed to the indicator (the underline) of the active tab

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[indicatorColor](components_Tabs_extras.Tabs.ParentProps.md#indicatorcolor)

___

### inlineLabel

• `Optional` **inlineLabel**: `boolean`

Allows the text to be inline with the icon, should one be used

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[inlineLabel](components_Tabs_extras.Tabs.ParentProps.md#inlinelabel)

___

### leftIcon

• `Optional` **leftIcon**: `string`

The name of an icon to replace the default arrow used to scroll through the tabs to the left, when the tabs extend past the width of the tabs container

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[leftIcon](components_Tabs_extras.Tabs.ParentProps.md#lefticon)

___

### mobileArrows

• `Optional` **mobileArrows**: `boolean`

Force display of arrows (if needed) on mobile

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[mobileArrows](components_Tabs_extras.Tabs.ParentProps.md#mobilearrows)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

#### Inherited from

[OwnProps](components_Tabs_extras.Tabs.OwnProps.md).[modelValue](components_Tabs_extras.Tabs.OwnProps.md#modelvalue)

___

### narrowIndicator

• `Optional` **narrowIndicator**: `boolean`

Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[narrowIndicator](components_Tabs_extras.Tabs.ParentProps.md#narrowindicator)

___

### noCaps

• `Optional` **noCaps**: `boolean`

Turns off capitalizing all letters within the tab (which is the default)

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[noCaps](components_Tabs_extras.Tabs.ParentProps.md#nocaps)

___

### outsideArrows

• `Optional` **outsideArrows**: `boolean`

Reserve space for arrows to place them on each side of the tabs (the arrows fade when inactive)

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[outsideArrows](components_Tabs_extras.Tabs.ParentProps.md#outsidearrows)

___

### rightIcon

• `Optional` **rightIcon**: `string`

The name of an icon to replace the default arrow used to scroll through the tabs to the right, when the tabs extend past the width of the tabs container

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[rightIcon](components_Tabs_extras.Tabs.ParentProps.md#righticon)

___

### shrink

• `Optional` **shrink**: `boolean`

By default, QTabs is set to grow to the available space; However, you can reverse that with this prop; Useful (and required) when placing the component in a QToolbar

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[shrink](components_Tabs_extras.Tabs.ParentProps.md#shrink)

___

### stretch

• `Optional` **stretch**: `boolean`

When used on flexbox parent, tabs will stretch to parent's height

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[stretch](components_Tabs_extras.Tabs.ParentProps.md#stretch)

___

### switchIndicator

• `Optional` **switchIndicator**: `boolean`

Switches the indicator position (on left of tab for vertical mode or above the tab for default horizontal mode)

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[switchIndicator](components_Tabs_extras.Tabs.ParentProps.md#switchindicator)

___

### vertical

• `Optional` **vertical**: `boolean`

Use vertical design (tabs one on top of each other rather than one next to the other horizontally)

#### Inherited from

[ParentProps](components_Tabs_extras.Tabs.ParentProps.md).[vertical](components_Tabs_extras.Tabs.ParentProps.md#vertical)

## Methods

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_Tabs_extras.Tabs.OwnProps.md).[onUpdate:modelValue](components_Tabs_extras.Tabs.OwnProps.md#onupdate:modelvalue)
