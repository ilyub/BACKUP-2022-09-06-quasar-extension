[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tabs.generic](../modules/components_Tabs_generic.md) / TabsParentProps

# Interface: TabsParentProps

[components/Tabs.generic](../modules/components_Tabs_generic.md).TabsParentProps

## Hierarchy

- `Readonly`<`Omit`<`QTabsProps`, keyof [`TabsOwnProps`](components_Tabs_generic.TabsOwnProps.md)\>\>

  ↳ **`TabsParentProps`**

  ↳↳ [`TabsProps`](components_Tabs_generic.TabsProps.md)

## Table of contents

### Properties

- [activeBgColor](components_Tabs_generic.TabsParentProps.md#activebgcolor)
- [activeClass](components_Tabs_generic.TabsParentProps.md#activeclass)
- [activeColor](components_Tabs_generic.TabsParentProps.md#activecolor)
- [align](components_Tabs_generic.TabsParentProps.md#align)
- [breakpoint](components_Tabs_generic.TabsParentProps.md#breakpoint)
- [contentClass](components_Tabs_generic.TabsParentProps.md#contentclass)
- [dense](components_Tabs_generic.TabsParentProps.md#dense)
- [indicatorColor](components_Tabs_generic.TabsParentProps.md#indicatorcolor)
- [inlineLabel](components_Tabs_generic.TabsParentProps.md#inlinelabel)
- [leftIcon](components_Tabs_generic.TabsParentProps.md#lefticon)
- [mobileArrows](components_Tabs_generic.TabsParentProps.md#mobilearrows)
- [narrowIndicator](components_Tabs_generic.TabsParentProps.md#narrowindicator)
- [noCaps](components_Tabs_generic.TabsParentProps.md#nocaps)
- [outsideArrows](components_Tabs_generic.TabsParentProps.md#outsidearrows)
- [rightIcon](components_Tabs_generic.TabsParentProps.md#righticon)
- [shrink](components_Tabs_generic.TabsParentProps.md#shrink)
- [stretch](components_Tabs_generic.TabsParentProps.md#stretch)
- [switchIndicator](components_Tabs_generic.TabsParentProps.md#switchindicator)
- [vertical](components_Tabs_generic.TabsParentProps.md#vertical)

## Properties

### activeBgColor

• `Optional` `Readonly` **activeBgColor**: `string`

The color to be attributed to the background of the active tab

#### Inherited from

Readonly.activeBgColor

___

### activeClass

• `Optional` `Readonly` **activeClass**: `string`

The class to be set on the active tab

#### Inherited from

Readonly.activeClass

___

### activeColor

• `Optional` `Readonly` **activeColor**: `string`

The color to be attributed to the text of the active tab

#### Inherited from

Readonly.activeColor

___

### align

• `Optional` `Readonly` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"justify"``

Horizontal alignment the tabs within the tabs container
Default value: center

#### Inherited from

Readonly.align

___

### breakpoint

• `Optional` `Readonly` **breakpoint**: `string` \| `number`

Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment
Default value: 600

#### Inherited from

Readonly.breakpoint

___

### contentClass

• `Optional` `Readonly` **contentClass**: `string`

Class definitions to be attributed to the content wrapper

#### Inherited from

Readonly.contentClass

___

### dense

• `Optional` `Readonly` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

Readonly.dense

___

### indicatorColor

• `Optional` `Readonly` **indicatorColor**: `string`

The color to be attributed to the indicator (the underline) of the active tab

#### Inherited from

Readonly.indicatorColor

___

### inlineLabel

• `Optional` `Readonly` **inlineLabel**: `boolean`

Allows the text to be inline with the icon, should one be used

#### Inherited from

Readonly.inlineLabel

___

### leftIcon

• `Optional` `Readonly` **leftIcon**: `string`

The name of an icon to replace the default arrow used to scroll through the tabs to the left, when the tabs extend past the width of the tabs container

#### Inherited from

Readonly.leftIcon

___

### mobileArrows

• `Optional` `Readonly` **mobileArrows**: `boolean`

Force display of arrows (if needed) on mobile

#### Inherited from

Readonly.mobileArrows

___

### narrowIndicator

• `Optional` `Readonly` **narrowIndicator**: `boolean`

Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab

#### Inherited from

Readonly.narrowIndicator

___

### noCaps

• `Optional` `Readonly` **noCaps**: `boolean`

Turns off capitalizing all letters within the tab (which is the default)

#### Inherited from

Readonly.noCaps

___

### outsideArrows

• `Optional` `Readonly` **outsideArrows**: `boolean`

Reserve space for arrows to place them on each side of the tabs (the arrows fade when inactive)

#### Inherited from

Readonly.outsideArrows

___

### rightIcon

• `Optional` `Readonly` **rightIcon**: `string`

The name of an icon to replace the default arrow used to scroll through the tabs to the right, when the tabs extend past the width of the tabs container

#### Inherited from

Readonly.rightIcon

___

### shrink

• `Optional` `Readonly` **shrink**: `boolean`

By default, QTabs is set to grow to the available space; However, you can reverse that with this prop; Useful (and required) when placing the component in a QToolbar

#### Inherited from

Readonly.shrink

___

### stretch

• `Optional` `Readonly` **stretch**: `boolean`

When used on flexbox parent, tabs will stretch to parent's height

#### Inherited from

Readonly.stretch

___

### switchIndicator

• `Optional` `Readonly` **switchIndicator**: `boolean`

Switches the indicator position (on left of tab for vertical mode or above the tab for default horizontal mode)

#### Inherited from

Readonly.switchIndicator

___

### vertical

• `Optional` `Readonly` **vertical**: `boolean`

Use vertical design (tabs one on top of each other rather than one next to the other horizontally)

#### Inherited from

Readonly.vertical
