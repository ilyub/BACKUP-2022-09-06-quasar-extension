[Quasar extension](../index.md) / [Exports](../modules.md) / [components/ExpansionItem.extras](../modules/components_ExpansionItem_extras.md) / ExpansionItemParentProps

# Interface: ExpansionItemParentProps

[components/ExpansionItem.extras](../modules/components_ExpansionItem_extras.md).ExpansionItemParentProps

## Hierarchy

- `QExpansionItemProps`

  ↳ **`ExpansionItemParentProps`**

  ↳↳ [`ExpansionItemProps`](components_ExpansionItem_extras.ExpansionItemProps.md)

## Table of contents

### Properties

- [activeClass](components_ExpansionItem_extras.ExpansionItemParentProps.md#activeclass)
- [caption](components_ExpansionItem_extras.ExpansionItemParentProps.md#caption)
- [captionLines](components_ExpansionItem_extras.ExpansionItemParentProps.md#captionlines)
- [contentInsetLevel](components_ExpansionItem_extras.ExpansionItemParentProps.md#contentinsetlevel)
- [dark](components_ExpansionItem_extras.ExpansionItemParentProps.md#dark)
- [defaultOpened](components_ExpansionItem_extras.ExpansionItemParentProps.md#defaultopened)
- [dense](components_ExpansionItem_extras.ExpansionItemParentProps.md#dense)
- [denseToggle](components_ExpansionItem_extras.ExpansionItemParentProps.md#densetoggle)
- [disable](components_ExpansionItem_extras.ExpansionItemParentProps.md#disable)
- [duration](components_ExpansionItem_extras.ExpansionItemParentProps.md#duration)
- [exact](components_ExpansionItem_extras.ExpansionItemParentProps.md#exact)
- [exactActiveClass](components_ExpansionItem_extras.ExpansionItemParentProps.md#exactactiveclass)
- [expandIcon](components_ExpansionItem_extras.ExpansionItemParentProps.md#expandicon)
- [expandIconClass](components_ExpansionItem_extras.ExpansionItemParentProps.md#expandiconclass)
- [expandIconToggle](components_ExpansionItem_extras.ExpansionItemParentProps.md#expandicontoggle)
- [expandSeparator](components_ExpansionItem_extras.ExpansionItemParentProps.md#expandseparator)
- [expandedIcon](components_ExpansionItem_extras.ExpansionItemParentProps.md#expandedicon)
- [group](components_ExpansionItem_extras.ExpansionItemParentProps.md#group)
- [headerClass](components_ExpansionItem_extras.ExpansionItemParentProps.md#headerclass)
- [headerInsetLevel](components_ExpansionItem_extras.ExpansionItemParentProps.md#headerinsetlevel)
- [headerStyle](components_ExpansionItem_extras.ExpansionItemParentProps.md#headerstyle)
- [href](components_ExpansionItem_extras.ExpansionItemParentProps.md#href)
- [icon](components_ExpansionItem_extras.ExpansionItemParentProps.md#icon)
- [label](components_ExpansionItem_extras.ExpansionItemParentProps.md#label)
- [labelLines](components_ExpansionItem_extras.ExpansionItemParentProps.md#labellines)
- [modelValue](components_ExpansionItem_extras.ExpansionItemParentProps.md#modelvalue)
- [popup](components_ExpansionItem_extras.ExpansionItemParentProps.md#popup)
- [replace](components_ExpansionItem_extras.ExpansionItemParentProps.md#replace)
- [switchToggleSide](components_ExpansionItem_extras.ExpansionItemParentProps.md#switchtoggleside)
- [target](components_ExpansionItem_extras.ExpansionItemParentProps.md#target)
- [to](components_ExpansionItem_extras.ExpansionItemParentProps.md#to)

### Methods

- [onAfterHide](components_ExpansionItem_extras.ExpansionItemParentProps.md#onafterhide)
- [onAfterShow](components_ExpansionItem_extras.ExpansionItemParentProps.md#onaftershow)
- [onBeforeHide](components_ExpansionItem_extras.ExpansionItemParentProps.md#onbeforehide)
- [onBeforeShow](components_ExpansionItem_extras.ExpansionItemParentProps.md#onbeforeshow)
- [onHide](components_ExpansionItem_extras.ExpansionItemParentProps.md#onhide)
- [onShow](components_ExpansionItem_extras.ExpansionItemParentProps.md#onshow)
- [onUpdate:modelValue](components_ExpansionItem_extras.ExpansionItemParentProps.md#onupdate:modelvalue)

## Properties

### activeClass

• `Optional` **activeClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

QExpansionItemProps.activeClass

___

### caption

• `Optional` **caption**: `string`

Header sub-label (unless using 'header' slot)

#### Inherited from

QExpansionItemProps.caption

___

### captionLines

• `Optional` **captionLines**: `string` \| `number`

Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!

#### Inherited from

QExpansionItemProps.captionLines

___

### contentInsetLevel

• `Optional` **contentInsetLevel**: `number`

Apply an inset to content (changes content padding)

#### Inherited from

QExpansionItemProps.contentInsetLevel

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

QExpansionItemProps.dark

___

### defaultOpened

• `Optional` **defaultOpened**: `boolean`

Puts expansion item into open state on initial render; Overridden by v-model if used

#### Inherited from

QExpansionItemProps.defaultOpened

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

QExpansionItemProps.dense

___

### denseToggle

• `Optional` **denseToggle**: `boolean`

Use dense mode for expand icon

#### Inherited from

QExpansionItemProps.denseToggle

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

QExpansionItemProps.disable

___

### duration

• `Optional` **duration**: `number`

Animation duration (in milliseconds)
Default value: 300

#### Inherited from

QExpansionItemProps.duration

___

### exact

• `Optional` **exact**: `boolean`

Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used

#### Inherited from

QExpansionItemProps.exact

___

### exactActiveClass

• `Optional` **exactActiveClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

QExpansionItemProps.exactActiveClass

___

### expandIcon

• `Optional` **expandIcon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

QExpansionItemProps.expandIcon

___

### expandIconClass

• `Optional` **expandIconClass**: `VueClassProp`

Apply custom class(es) to the expand icon item section

#### Inherited from

QExpansionItemProps.expandIconClass

___

### expandIconToggle

• `Optional` **expandIconToggle**: `boolean`

Applies the expansion events to the expand icon only and not to the whole header

#### Inherited from

QExpansionItemProps.expandIconToggle

___

### expandSeparator

• `Optional` **expandSeparator**: `boolean`

Apply a top and bottom separator when expansion item is opened

#### Inherited from

QExpansionItemProps.expandSeparator

___

### expandedIcon

• `Optional` **expandedIcon**: `string`

Expand icon name (following Quasar convention) for when QExpansionItem is expanded; When used, it also disables the rotation animation of the expand icon; Make sure you have the icon library installed unless you are using 'img:' prefix

#### Inherited from

QExpansionItemProps.expandedIcon

___

### group

• `Optional` **group**: `string`

Register expansion item into a group (unique name that must be applied to all expansion items in that group) for coordinated open/close state within the group a.k.a. 'accordion mode'

#### Inherited from

QExpansionItemProps.group

___

### headerClass

• `Optional` **headerClass**: `VueClassProp`

Apply custom class(es) to the header

#### Inherited from

QExpansionItemProps.headerClass

___

### headerInsetLevel

• `Optional` **headerInsetLevel**: `number`

Apply an inset to header (unless using 'header' slot); Useful when header avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu

#### Inherited from

QExpansionItemProps.headerInsetLevel

___

### headerStyle

• `Optional` **headerStyle**: `VueStyleProp`

Apply custom style to the header

#### Inherited from

QExpansionItemProps.headerStyle

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

QExpansionItemProps.href

___

### icon

• `Optional` **icon**: `string`

Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)

#### Inherited from

QExpansionItemProps.icon

___

### label

• `Optional` **label**: `string`

Header label (unless using 'header' slot)

#### Inherited from

QExpansionItemProps.label

___

### labelLines

• `Optional` **labelLines**: `string` \| `number`

Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!

#### Inherited from

QExpansionItemProps.labelLines

___

### modelValue

• `Optional` **modelValue**: `boolean`

Model of the component defining 'open' state; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive

#### Inherited from

QExpansionItemProps.modelValue

___

### popup

• `Optional` **popup**: `boolean`

Put expansion list into 'popup' mode

#### Inherited from

QExpansionItemProps.popup

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

QExpansionItemProps.replace

___

### switchToggleSide

• `Optional` **switchToggleSide**: `boolean`

Switch expand icon side (from default 'right' to 'left')

#### Inherited from

QExpansionItemProps.switchToggleSide

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

QExpansionItemProps.target

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

QExpansionItemProps.to

## Methods

### onAfterHide

▸ `Optional` **onAfterHide**(): `void`

Emitted when component hide animation is finished

#### Returns

`void`

#### Inherited from

QExpansionItemProps.onAfterHide

___

### onAfterShow

▸ `Optional` **onAfterShow**(): `void`

Emitted when component show animation is finished

#### Returns

`void`

#### Inherited from

QExpansionItemProps.onAfterShow

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

QExpansionItemProps.onBeforeHide

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

QExpansionItemProps.onBeforeShow

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

QExpansionItemProps.onHide

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

QExpansionItemProps.onShow

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

QExpansionItemProps.onUpdate:modelValue
