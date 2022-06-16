[Quasar extension](../index.md) / [Exports](../modules.md) / [components/ExpansionItem.extras](../modules/components_ExpansionItem_extras.md) / [ExpansionItem](../modules/components_ExpansionItem_extras.ExpansionItem.md) / Props

# Interface: Props

[components/ExpansionItem.extras](../modules/components_ExpansionItem_extras.md).[ExpansionItem](../modules/components_ExpansionItem_extras.ExpansionItem.md).Props

## Hierarchy

- [`ParentProps`](components_ExpansionItem_extras.ExpansionItem.ParentProps.md)

- [`PluginProps`](components_ExpansionItem_extras.ExpansionItem.PluginProps.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [activeClass](components_ExpansionItem_extras.ExpansionItem.Props.md#activeclass)
- [caption](components_ExpansionItem_extras.ExpansionItem.Props.md#caption)
- [captionLines](components_ExpansionItem_extras.ExpansionItem.Props.md#captionlines)
- [contentInsetLevel](components_ExpansionItem_extras.ExpansionItem.Props.md#contentinsetlevel)
- [dark](components_ExpansionItem_extras.ExpansionItem.Props.md#dark)
- [defaultOpened](components_ExpansionItem_extras.ExpansionItem.Props.md#defaultopened)
- [dense](components_ExpansionItem_extras.ExpansionItem.Props.md#dense)
- [denseToggle](components_ExpansionItem_extras.ExpansionItem.Props.md#densetoggle)
- [disable](components_ExpansionItem_extras.ExpansionItem.Props.md#disable)
- [duration](components_ExpansionItem_extras.ExpansionItem.Props.md#duration)
- [exact](components_ExpansionItem_extras.ExpansionItem.Props.md#exact)
- [exactActiveClass](components_ExpansionItem_extras.ExpansionItem.Props.md#exactactiveclass)
- [expandIcon](components_ExpansionItem_extras.ExpansionItem.Props.md#expandicon)
- [expandIconClass](components_ExpansionItem_extras.ExpansionItem.Props.md#expandiconclass)
- [expandIconToggle](components_ExpansionItem_extras.ExpansionItem.Props.md#expandicontoggle)
- [expandSeparator](components_ExpansionItem_extras.ExpansionItem.Props.md#expandseparator)
- [expandedIcon](components_ExpansionItem_extras.ExpansionItem.Props.md#expandedicon)
- [group](components_ExpansionItem_extras.ExpansionItem.Props.md#group)
- [headerClass](components_ExpansionItem_extras.ExpansionItem.Props.md#headerclass)
- [headerInsetLevel](components_ExpansionItem_extras.ExpansionItem.Props.md#headerinsetlevel)
- [headerStyle](components_ExpansionItem_extras.ExpansionItem.Props.md#headerstyle)
- [href](components_ExpansionItem_extras.ExpansionItem.Props.md#href)
- [icon](components_ExpansionItem_extras.ExpansionItem.Props.md#icon)
- [label](components_ExpansionItem_extras.ExpansionItem.Props.md#label)
- [labelLines](components_ExpansionItem_extras.ExpansionItem.Props.md#labellines)
- [modelValue](components_ExpansionItem_extras.ExpansionItem.Props.md#modelvalue)
- [popup](components_ExpansionItem_extras.ExpansionItem.Props.md#popup)
- [replace](components_ExpansionItem_extras.ExpansionItem.Props.md#replace)
- [switchToggleSide](components_ExpansionItem_extras.ExpansionItem.Props.md#switchtoggleside)
- [target](components_ExpansionItem_extras.ExpansionItem.Props.md#target)
- [to](components_ExpansionItem_extras.ExpansionItem.Props.md#to)

### Methods

- [onAfterHide](components_ExpansionItem_extras.ExpansionItem.Props.md#onafterhide)
- [onAfterShow](components_ExpansionItem_extras.ExpansionItem.Props.md#onaftershow)
- [onBeforeHide](components_ExpansionItem_extras.ExpansionItem.Props.md#onbeforehide)
- [onBeforeShow](components_ExpansionItem_extras.ExpansionItem.Props.md#onbeforeshow)
- [onHide](components_ExpansionItem_extras.ExpansionItem.Props.md#onhide)
- [onShow](components_ExpansionItem_extras.ExpansionItem.Props.md#onshow)
- [onUpdate:modelValue](components_ExpansionItem_extras.ExpansionItem.Props.md#onupdate:modelvalue)

## Properties

### activeClass

• `Optional` **activeClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[activeClass](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#activeclass)

___

### caption

• `Optional` **caption**: `string`

Header sub-label (unless using 'header' slot)

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[caption](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#caption)

___

### captionLines

• `Optional` **captionLines**: `string` \| `number`

Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[captionLines](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#captionlines)

___

### contentInsetLevel

• `Optional` **contentInsetLevel**: `number`

Apply an inset to content (changes content padding)

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[contentInsetLevel](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#contentinsetlevel)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[dark](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#dark)

___

### defaultOpened

• `Optional` **defaultOpened**: `boolean`

Puts expansion item into open state on initial render; Overridden by v-model if used

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[defaultOpened](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#defaultopened)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[dense](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#dense)

___

### denseToggle

• `Optional` **denseToggle**: `boolean`

Use dense mode for expand icon

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[denseToggle](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#densetoggle)

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[disable](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#disable)

___

### duration

• `Optional` **duration**: `number`

Animation duration (in milliseconds)
Default value: 300

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[duration](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#duration)

___

### exact

• `Optional` **exact**: `boolean`

Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[exact](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#exact)

___

### exactActiveClass

• `Optional` **exactActiveClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[exactActiveClass](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#exactactiveclass)

___

### expandIcon

• `Optional` **expandIcon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[expandIcon](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#expandicon)

___

### expandIconClass

• `Optional` **expandIconClass**: `VueClassProp`

Apply custom class(es) to the expand icon item section

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[expandIconClass](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#expandiconclass)

___

### expandIconToggle

• `Optional` **expandIconToggle**: `boolean`

Applies the expansion events to the expand icon only and not to the whole header

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[expandIconToggle](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#expandicontoggle)

___

### expandSeparator

• `Optional` **expandSeparator**: `boolean`

Apply a top and bottom separator when expansion item is opened

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[expandSeparator](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#expandseparator)

___

### expandedIcon

• `Optional` **expandedIcon**: `string`

Expand icon name (following Quasar convention) for when QExpansionItem is expanded; When used, it also disables the rotation animation of the expand icon; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[expandedIcon](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#expandedicon)

___

### group

• `Optional` **group**: `string`

Register expansion item into a group (unique name that must be applied to all expansion items in that group) for coordinated open/close state within the group a.k.a. 'accordion mode'

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[group](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#group)

___

### headerClass

• `Optional` **headerClass**: `VueClassProp`

Apply custom class(es) to the header

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[headerClass](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#headerclass)

___

### headerInsetLevel

• `Optional` **headerInsetLevel**: `number`

Apply an inset to header (unless using 'header' slot); Useful when header avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[headerInsetLevel](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#headerinsetlevel)

___

### headerStyle

• `Optional` **headerStyle**: `VueStyleProp`

Apply custom style to the header

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[headerStyle](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#headerstyle)

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[href](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#href)

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[icon](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#icon)

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_ExpansionItem_extras.ExpansionItem.PluginProps.md).[label](components_ExpansionItem_extras.ExpansionItem.PluginProps.md#label)

___

### labelLines

• `Optional` **labelLines**: `string` \| `number`

Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[labelLines](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#labellines)

___

### modelValue

• `Optional` **modelValue**: `boolean`

Model of the component defining 'open' state; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[modelValue](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#modelvalue)

___

### popup

• `Optional` **popup**: `boolean`

Put expansion list into 'popup' mode

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[popup](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#popup)

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[replace](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#replace)

___

### switchToggleSide

• `Optional` **switchToggleSide**: `boolean`

Switch expand icon side (from default 'right' to 'left')

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[switchToggleSide](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#switchtoggleside)

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[target](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#target)

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[to](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#to)

## Methods

### onAfterHide

▸ `Optional` **onAfterHide**(): `void`

Emitted when component hide animation is finished

#### Returns

`void`

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[onAfterHide](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#onafterhide)

___

### onAfterShow

▸ `Optional` **onAfterShow**(): `void`

Emitted when component show animation is finished

#### Returns

`void`

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[onAfterShow](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#onaftershow)

___

### onBeforeHide

▸ `Optional` **onBeforeHide**(`evt`): `void`

Emitted when component triggers hide() but before it finishes doing it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[onBeforeHide](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#onbeforehide)

___

### onBeforeShow

▸ `Optional` **onBeforeShow**(`evt`): `void`

Emitted when component triggers show() but before it finishes doing it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[onBeforeShow](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#onbeforeshow)

___

### onHide

▸ `Optional` **onHide**(`evt`): `void`

Emitted after component has triggered hide()

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[onHide](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#onhide)

___

### onShow

▸ `Optional` **onShow**(`evt`): `void`

Emitted after component has triggered show()

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `Event` | JS event object |

#### Returns

`void`

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[onShow](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#onshow)

___

### onUpdate:modelValue

▸ `Optional` **onUpdate:modelValue**(`value`): `void`

Emitted when showing/hidden state changes; Is also used by v-model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | New state (showing/hidden) |

#### Returns

`void`

#### Inherited from

[ParentProps](components_ExpansionItem_extras.ExpansionItem.ParentProps.md).[onUpdate:modelValue](components_ExpansionItem_extras.ExpansionItem.ParentProps.md#onupdate:modelvalue)
