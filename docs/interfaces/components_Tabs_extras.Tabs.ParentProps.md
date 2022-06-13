[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tabs.extras](../modules/components_Tabs_extras.md) / [Tabs](../modules/components_Tabs_extras.Tabs.md) / ParentProps

# Interface: ParentProps

[components/Tabs.extras](../modules/components_Tabs_extras.md).[Tabs](../modules/components_Tabs_extras.Tabs.md).ParentProps

## Hierarchy

- `Omit`<`QTabsProps`, keyof [`OwnProps`](components_Tabs_extras.Tabs.OwnProps.md)\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_Tabs_extras.Tabs.Props.md)

## Table of contents

### Properties

- [activeBgColor](components_Tabs_extras.Tabs.ParentProps.md#activebgcolor)
- [activeClass](components_Tabs_extras.Tabs.ParentProps.md#activeclass)
- [activeColor](components_Tabs_extras.Tabs.ParentProps.md#activecolor)
- [align](components_Tabs_extras.Tabs.ParentProps.md#align)
- [breakpoint](components_Tabs_extras.Tabs.ParentProps.md#breakpoint)
- [contentClass](components_Tabs_extras.Tabs.ParentProps.md#contentclass)
- [dense](components_Tabs_extras.Tabs.ParentProps.md#dense)
- [indicatorColor](components_Tabs_extras.Tabs.ParentProps.md#indicatorcolor)
- [inlineLabel](components_Tabs_extras.Tabs.ParentProps.md#inlinelabel)
- [leftIcon](components_Tabs_extras.Tabs.ParentProps.md#lefticon)
- [mobileArrows](components_Tabs_extras.Tabs.ParentProps.md#mobilearrows)
- [narrowIndicator](components_Tabs_extras.Tabs.ParentProps.md#narrowindicator)
- [noCaps](components_Tabs_extras.Tabs.ParentProps.md#nocaps)
- [outsideArrows](components_Tabs_extras.Tabs.ParentProps.md#outsidearrows)
- [rightIcon](components_Tabs_extras.Tabs.ParentProps.md#righticon)
- [shrink](components_Tabs_extras.Tabs.ParentProps.md#shrink)
- [stretch](components_Tabs_extras.Tabs.ParentProps.md#stretch)
- [switchIndicator](components_Tabs_extras.Tabs.ParentProps.md#switchindicator)
- [vertical](components_Tabs_extras.Tabs.ParentProps.md#vertical)

## Properties

### activeBgColor

• `Optional` **activeBgColor**: `string`

The color to be attributed to the background of the active tab

#### Inherited from

Omit.activeBgColor

___

### activeClass

• `Optional` **activeClass**: `string`

The class to be set on the active tab

#### Inherited from

Omit.activeClass

___

### activeColor

• `Optional` **activeColor**: `string`

The color to be attributed to the text of the active tab

#### Inherited from

Omit.activeColor

___

### align

• `Optional` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"justify"``

Horizontal alignment the tabs within the tabs container
Default value: center

#### Inherited from

Omit.align

___

### breakpoint

• `Optional` **breakpoint**: `string` \| `number`

Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment
Default value: 600

#### Inherited from

Omit.breakpoint

___

### contentClass

• `Optional` **contentClass**: `string`

Class definitions to be attributed to the content wrapper

#### Inherited from

Omit.contentClass

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

Omit.dense

___

### indicatorColor

• `Optional` **indicatorColor**: `string`

The color to be attributed to the indicator (the underline) of the active tab

#### Inherited from

Omit.indicatorColor

___

### inlineLabel

• `Optional` **inlineLabel**: `boolean`

Allows the text to be inline with the icon, should one be used

#### Inherited from

Omit.inlineLabel

___

### leftIcon

• `Optional` **leftIcon**: `string`

The name of an icon to replace the default arrow used to scroll through the tabs to the left, when the tabs extend past the width of the tabs container

#### Inherited from

Omit.leftIcon

___

### mobileArrows

• `Optional` **mobileArrows**: `boolean`

Force display of arrows (if needed) on mobile

#### Inherited from

Omit.mobileArrows

___

### narrowIndicator

• `Optional` **narrowIndicator**: `boolean`

Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab

#### Inherited from

Omit.narrowIndicator

___

### noCaps

• `Optional` **noCaps**: `boolean`

Turns off capitalizing all letters within the tab (which is the default)

#### Inherited from

Omit.noCaps

___

### outsideArrows

• `Optional` **outsideArrows**: `boolean`

Reserve space for arrows to place them on each side of the tabs (the arrows fade when inactive)

#### Inherited from

Omit.outsideArrows

___

### rightIcon

• `Optional` **rightIcon**: `string`

The name of an icon to replace the default arrow used to scroll through the tabs to the right, when the tabs extend past the width of the tabs container

#### Inherited from

Omit.rightIcon

___

### shrink

• `Optional` **shrink**: `boolean`

By default, QTabs is set to grow to the available space; However, you can reverse that with this prop; Useful (and required) when placing the component in a QToolbar

#### Inherited from

Omit.shrink

___

### stretch

• `Optional` **stretch**: `boolean`

When used on flexbox parent, tabs will stretch to parent's height

#### Inherited from

Omit.stretch

___

### switchIndicator

• `Optional` **switchIndicator**: `boolean`

Switches the indicator position (on left of tab for vertical mode or above the tab for default horizontal mode)

#### Inherited from

Omit.switchIndicator

___

### vertical

• `Optional` **vertical**: `boolean`

Use vertical design (tabs one on top of each other rather than one next to the other horizontally)

#### Inherited from

Omit.vertical
