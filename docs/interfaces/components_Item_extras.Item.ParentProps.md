[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Item.extras](../modules/components_Item_extras.md) / [Item](../modules/components_Item_extras.Item.md) / ParentProps

# Interface: ParentProps

[components/Item.extras](../modules/components_Item_extras.md).[Item](../modules/components_Item_extras.Item.md).ParentProps

## Hierarchy

- `QItemProps`

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_Item_extras.Item.Props.md)

## Table of contents

### Properties

- [active](components_Item_extras.Item.ParentProps.md#active)
- [activeClass](components_Item_extras.Item.ParentProps.md#activeclass)
- [clickable](components_Item_extras.Item.ParentProps.md#clickable)
- [dark](components_Item_extras.Item.ParentProps.md#dark)
- [dense](components_Item_extras.Item.ParentProps.md#dense)
- [disable](components_Item_extras.Item.ParentProps.md#disable)
- [exact](components_Item_extras.Item.ParentProps.md#exact)
- [exactActiveClass](components_Item_extras.Item.ParentProps.md#exactactiveclass)
- [focused](components_Item_extras.Item.ParentProps.md#focused)
- [href](components_Item_extras.Item.ParentProps.md#href)
- [insetLevel](components_Item_extras.Item.ParentProps.md#insetlevel)
- [manualFocus](components_Item_extras.Item.ParentProps.md#manualfocus)
- [replace](components_Item_extras.Item.ParentProps.md#replace)
- [tabindex](components_Item_extras.Item.ParentProps.md#tabindex)
- [tag](components_Item_extras.Item.ParentProps.md#tag)
- [target](components_Item_extras.Item.ParentProps.md#target)
- [to](components_Item_extras.Item.ParentProps.md#to)

## Properties

### active

• `Optional` **active**: `boolean`

Put item into 'active' state

#### Inherited from

QItemProps.active

___

### activeClass

• `Optional` **activeClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

QItemProps.activeClass

___

### clickable

• `Optional` **clickable**: `boolean`

Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events

#### Inherited from

QItemProps.clickable

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

QItemProps.dark

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

QItemProps.dense

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

QItemProps.disable

___

### exact

• `Optional` **exact**: `boolean`

Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used

#### Inherited from

QItemProps.exact

___

### exactActiveClass

• `Optional` **exactActiveClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

QItemProps.exactActiveClass

___

### focused

• `Optional` **focused**: `boolean`

Determines focus state, ONLY if 'manual-focus' is enabled / set to true

#### Inherited from

QItemProps.focused

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

QItemProps.href

___

### insetLevel

• `Optional` **insetLevel**: `number`

Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu

#### Inherited from

QItemProps.insetLevel

___

### manualFocus

• `Optional` **manualFocus**: `boolean`

Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states

#### Inherited from

QItemProps.manualFocus

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

QItemProps.replace

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

QItemProps.tabindex

___

### tag

• `Optional` **tag**: `string`

HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components
Default value: div

#### Inherited from

QItemProps.tag

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

QItemProps.target

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

QItemProps.to
