[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Tabs.generic](../modules/components_Tabs_generic.md) / TabsProps

# Interface: TabsProps<T\>

[components/Tabs.generic](../modules/components_Tabs_generic.md).TabsProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NumStrU` = `NumStrU` |

## Hierarchy

- [`TabsOwnProps`](components_Tabs_generic.TabsOwnProps.md)<`T`\>

- [`TabsParentProps`](components_Tabs_generic.TabsParentProps.md)

  ↳ **`TabsProps`**

## Table of contents

### Properties

- [activeBgColor](components_Tabs_generic.TabsProps.md#activebgcolor)
- [activeClass](components_Tabs_generic.TabsProps.md#activeclass)
- [activeColor](components_Tabs_generic.TabsProps.md#activecolor)
- [align](components_Tabs_generic.TabsProps.md#align)
- [breakpoint](components_Tabs_generic.TabsProps.md#breakpoint)
- [contentClass](components_Tabs_generic.TabsProps.md#contentclass)
- [dense](components_Tabs_generic.TabsProps.md#dense)
- [indicatorColor](components_Tabs_generic.TabsProps.md#indicatorcolor)
- [inlineLabel](components_Tabs_generic.TabsProps.md#inlinelabel)
- [leftIcon](components_Tabs_generic.TabsProps.md#lefticon)
- [mobileArrows](components_Tabs_generic.TabsProps.md#mobilearrows)
- [modelValue](components_Tabs_generic.TabsProps.md#modelvalue)
- [narrowIndicator](components_Tabs_generic.TabsProps.md#narrowindicator)
- [noCaps](components_Tabs_generic.TabsProps.md#nocaps)
- [outsideArrows](components_Tabs_generic.TabsProps.md#outsidearrows)
- [rightIcon](components_Tabs_generic.TabsProps.md#righticon)
- [shrink](components_Tabs_generic.TabsProps.md#shrink)
- [stretch](components_Tabs_generic.TabsProps.md#stretch)
- [switchIndicator](components_Tabs_generic.TabsProps.md#switchindicator)
- [vertical](components_Tabs_generic.TabsProps.md#vertical)

### Methods

- [onUpdate:modelValue](components_Tabs_generic.TabsProps.md#onupdate:modelvalue)

## Properties

### activeBgColor

• `Optional` `Readonly` **activeBgColor**: `string`

The color to be attributed to the background of the active tab

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[activeBgColor](components_Tabs_generic.TabsParentProps.md#activebgcolor)

___

### activeClass

• `Optional` `Readonly` **activeClass**: `string`

The class to be set on the active tab

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[activeClass](components_Tabs_generic.TabsParentProps.md#activeclass)

___

### activeColor

• `Optional` `Readonly` **activeColor**: `string`

The color to be attributed to the text of the active tab

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[activeColor](components_Tabs_generic.TabsParentProps.md#activecolor)

___

### align

• `Optional` `Readonly` **align**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"justify"``

Horizontal alignment the tabs within the tabs container
Default value: center

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[align](components_Tabs_generic.TabsParentProps.md#align)

___

### breakpoint

• `Optional` `Readonly` **breakpoint**: `string` \| `number`

Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment
Default value: 600

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[breakpoint](components_Tabs_generic.TabsParentProps.md#breakpoint)

___

### contentClass

• `Optional` `Readonly` **contentClass**: `string`

Class definitions to be attributed to the content wrapper

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[contentClass](components_Tabs_generic.TabsParentProps.md#contentclass)

___

### dense

• `Optional` `Readonly` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[dense](components_Tabs_generic.TabsParentProps.md#dense)

___

### indicatorColor

• `Optional` `Readonly` **indicatorColor**: `string`

The color to be attributed to the indicator (the underline) of the active tab

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[indicatorColor](components_Tabs_generic.TabsParentProps.md#indicatorcolor)

___

### inlineLabel

• `Optional` `Readonly` **inlineLabel**: `boolean`

Allows the text to be inline with the icon, should one be used

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[inlineLabel](components_Tabs_generic.TabsParentProps.md#inlinelabel)

___

### leftIcon

• `Optional` `Readonly` **leftIcon**: `string`

The name of an icon to replace the default arrow used to scroll through the tabs to the left, when the tabs extend past the width of the tabs container

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[leftIcon](components_Tabs_generic.TabsParentProps.md#lefticon)

___

### mobileArrows

• `Optional` `Readonly` **mobileArrows**: `boolean`

Force display of arrows (if needed) on mobile

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[mobileArrows](components_Tabs_generic.TabsParentProps.md#mobilearrows)

___

### modelValue

• `Optional` **modelValue**: `T`

#### Inherited from

[TabsOwnProps](components_Tabs_generic.TabsOwnProps.md).[modelValue](components_Tabs_generic.TabsOwnProps.md#modelvalue)

___

### narrowIndicator

• `Optional` `Readonly` **narrowIndicator**: `boolean`

Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[narrowIndicator](components_Tabs_generic.TabsParentProps.md#narrowindicator)

___

### noCaps

• `Optional` `Readonly` **noCaps**: `boolean`

Turns off capitalizing all letters within the tab (which is the default)

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[noCaps](components_Tabs_generic.TabsParentProps.md#nocaps)

___

### outsideArrows

• `Optional` `Readonly` **outsideArrows**: `boolean`

Reserve space for arrows to place them on each side of the tabs (the arrows fade when inactive)

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[outsideArrows](components_Tabs_generic.TabsParentProps.md#outsidearrows)

___

### rightIcon

• `Optional` `Readonly` **rightIcon**: `string`

The name of an icon to replace the default arrow used to scroll through the tabs to the right, when the tabs extend past the width of the tabs container

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[rightIcon](components_Tabs_generic.TabsParentProps.md#righticon)

___

### shrink

• `Optional` `Readonly` **shrink**: `boolean`

By default, QTabs is set to grow to the available space; However, you can reverse that with this prop; Useful (and required) when placing the component in a QToolbar

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[shrink](components_Tabs_generic.TabsParentProps.md#shrink)

___

### stretch

• `Optional` `Readonly` **stretch**: `boolean`

When used on flexbox parent, tabs will stretch to parent's height

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[stretch](components_Tabs_generic.TabsParentProps.md#stretch)

___

### switchIndicator

• `Optional` `Readonly` **switchIndicator**: `boolean`

Switches the indicator position (on left of tab for vertical mode or above the tab for default horizontal mode)

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[switchIndicator](components_Tabs_generic.TabsParentProps.md#switchindicator)

___

### vertical

• `Optional` `Readonly` **vertical**: `boolean`

Use vertical design (tabs one on top of each other rather than one next to the other horizontally)

#### Inherited from

[TabsParentProps](components_Tabs_generic.TabsParentProps.md).[vertical](components_Tabs_generic.TabsParentProps.md#vertical)

## Methods

### onUpdate:modelValue

▸ `Optional` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`void`

#### Inherited from

[TabsOwnProps](components_Tabs_generic.TabsOwnProps.md).[onUpdate:modelValue](components_Tabs_generic.TabsOwnProps.md#onupdate:modelvalue)
