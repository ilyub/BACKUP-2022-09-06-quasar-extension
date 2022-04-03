[Quasar extension](../index.md) / [Exports](../modules.md) / [components/ListItem.extras](../modules/components_ListItem_extras.md) / ListItemProps

# Interface: ListItemProps

[components/ListItem.extras](../modules/components_ListItem_extras.md).ListItemProps

## Hierarchy

- [`ListItemParentProps`](../modules/components_ListItem_extras.md#listitemparentprops)

- [`ListItemOwnProps`](components_ListItem_extras.ListItemOwnProps.md)

  ↳ **`ListItemProps`**

## Table of contents

### Properties

- [active](components_ListItem_extras.ListItemProps.md#active)
- [activeClass](components_ListItem_extras.ListItemProps.md#activeclass)
- [caption](components_ListItem_extras.ListItemProps.md#caption)
- [clickable](components_ListItem_extras.ListItemProps.md#clickable)
- [confirmation](components_ListItem_extras.ListItemProps.md#confirmation)
- [dark](components_ListItem_extras.ListItemProps.md#dark)
- [dense](components_ListItem_extras.ListItemProps.md#dense)
- [disable](components_ListItem_extras.ListItemProps.md#disable)
- [exact](components_ListItem_extras.ListItemProps.md#exact)
- [exactActiveClass](components_ListItem_extras.ListItemProps.md#exactactiveclass)
- [focused](components_ListItem_extras.ListItemProps.md#focused)
- [href](components_ListItem_extras.ListItemProps.md#href)
- [icon](components_ListItem_extras.ListItemProps.md#icon)
- [insetLevel](components_ListItem_extras.ListItemProps.md#insetlevel)
- [manualFocus](components_ListItem_extras.ListItemProps.md#manualfocus)
- [replace](components_ListItem_extras.ListItemProps.md#replace)
- [tabindex](components_ListItem_extras.ListItemProps.md#tabindex)
- [tag](components_ListItem_extras.ListItemProps.md#tag)
- [target](components_ListItem_extras.ListItemProps.md#target)
- [to](components_ListItem_extras.ListItemProps.md#to)

### Methods

- [onConfirmedClick](components_ListItem_extras.ListItemProps.md#onconfirmedclick)

## Properties

### active

• `Optional` **active**: `boolean`

Put item into 'active' state

#### Inherited from

ListItemParentProps.active

___

### activeClass

• `Optional` **activeClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

ListItemParentProps.activeClass

___

### caption

• `Optional` `Readonly` **caption**: `stringU`

#### Inherited from

[ListItemOwnProps](components_ListItem_extras.ListItemOwnProps.md).[caption](components_ListItem_extras.ListItemOwnProps.md#caption)

___

### clickable

• `Optional` **clickable**: `boolean`

Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events

#### Inherited from

ListItemParentProps.clickable

___

### confirmation

• `Optional` `Readonly` **confirmation**: `stringU`

#### Inherited from

[ListItemOwnProps](components_ListItem_extras.ListItemOwnProps.md).[confirmation](components_ListItem_extras.ListItemOwnProps.md#confirmation)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

ListItemParentProps.dark

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

ListItemParentProps.dense

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

ListItemParentProps.disable

___

### exact

• `Optional` **exact**: `boolean`

Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used

#### Inherited from

ListItemParentProps.exact

___

### exactActiveClass

• `Optional` **exactActiveClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

ListItemParentProps.exactActiveClass

___

### focused

• `Optional` **focused**: `boolean`

Determines focus state, ONLY if 'manual-focus' is enabled / set to true

#### Inherited from

ListItemParentProps.focused

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

ListItemParentProps.href

___

### icon

• `Optional` `Readonly` **icon**: `stringU`

#### Inherited from

[ListItemOwnProps](components_ListItem_extras.ListItemOwnProps.md).[icon](components_ListItem_extras.ListItemOwnProps.md#icon)

___

### insetLevel

• `Optional` **insetLevel**: `number`

Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu

#### Inherited from

ListItemParentProps.insetLevel

___

### manualFocus

• `Optional` **manualFocus**: `boolean`

Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states

#### Inherited from

ListItemParentProps.manualFocus

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

ListItemParentProps.replace

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

ListItemParentProps.tabindex

___

### tag

• `Optional` **tag**: `string`

HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components
Default value: div

#### Inherited from

ListItemParentProps.tag

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

ListItemParentProps.target

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

ListItemParentProps.to

## Methods

### onConfirmedClick

▸ `Optional` `Readonly` **onConfirmedClick**(): `void`

Emits confirmed click event.

#### Returns

`void`

#### Inherited from

[ListItemOwnProps](components_ListItem_extras.ListItemOwnProps.md).[onConfirmedClick](components_ListItem_extras.ListItemOwnProps.md#onconfirmedclick)
