[Quasar extension](../index.md) / [Exports](../modules.md) / [components/MenuItem.extras](../modules/components_MenuItem_extras.md) / [MenuItem](../modules/components_MenuItem_extras.MenuItem.md) / ParentProps

# Interface: ParentProps

[components/MenuItem.extras](../modules/components_MenuItem_extras.md).[MenuItem](../modules/components_MenuItem_extras.MenuItem.md).ParentProps

## Hierarchy

- [`Props`](components_Item_extras.Item.Props.md)

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_MenuItem_extras.MenuItem.Props.md)

## Table of contents

### Properties

- [active](components_MenuItem_extras.MenuItem.ParentProps.md#active)
- [activeClass](components_MenuItem_extras.MenuItem.ParentProps.md#activeclass)
- [caption](components_MenuItem_extras.MenuItem.ParentProps.md#caption)
- [clickable](components_MenuItem_extras.MenuItem.ParentProps.md#clickable)
- [dark](components_MenuItem_extras.MenuItem.ParentProps.md#dark)
- [dense](components_MenuItem_extras.MenuItem.ParentProps.md#dense)
- [disable](components_MenuItem_extras.MenuItem.ParentProps.md#disable)
- [exact](components_MenuItem_extras.MenuItem.ParentProps.md#exact)
- [exactActiveClass](components_MenuItem_extras.MenuItem.ParentProps.md#exactactiveclass)
- [focused](components_MenuItem_extras.MenuItem.ParentProps.md#focused)
- [href](components_MenuItem_extras.MenuItem.ParentProps.md#href)
- [icon](components_MenuItem_extras.MenuItem.ParentProps.md#icon)
- [insetLevel](components_MenuItem_extras.MenuItem.ParentProps.md#insetlevel)
- [manualFocus](components_MenuItem_extras.MenuItem.ParentProps.md#manualfocus)
- [replace](components_MenuItem_extras.MenuItem.ParentProps.md#replace)
- [tabindex](components_MenuItem_extras.MenuItem.ParentProps.md#tabindex)
- [tag](components_MenuItem_extras.MenuItem.ParentProps.md#tag)
- [target](components_MenuItem_extras.MenuItem.ParentProps.md#target)
- [to](components_MenuItem_extras.MenuItem.ParentProps.md#to)

## Properties

### active

• `Optional` **active**: `boolean`

Put item into 'active' state

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[active](components_Item_extras.Item.Props.md#active)

___

### activeClass

• `Optional` **activeClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[activeClass](components_Item_extras.Item.Props.md#activeclass)

___

### caption

• **caption**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[caption](components_Item_extras.Item.Props.md#caption)

___

### clickable

• `Optional` **clickable**: `boolean`

Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[clickable](components_Item_extras.Item.Props.md#clickable)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[dark](components_Item_extras.Item.Props.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[dense](components_Item_extras.Item.Props.md#dense)

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[disable](components_Item_extras.Item.Props.md#disable)

___

### exact

• `Optional` **exact**: `boolean`

Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[exact](components_Item_extras.Item.Props.md#exact)

___

### exactActiveClass

• `Optional` **exactActiveClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[exactActiveClass](components_Item_extras.Item.Props.md#exactactiveclass)

___

### focused

• `Optional` **focused**: `boolean`

Determines focus state, ONLY if 'manual-focus' is enabled / set to true

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[focused](components_Item_extras.Item.Props.md#focused)

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[href](components_Item_extras.Item.Props.md#href)

___

### icon

• `Optional` `Readonly` **icon**: `stringU`

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[icon](components_Item_extras.Item.Props.md#icon)

___

### insetLevel

• `Optional` **insetLevel**: `number`

Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[insetLevel](components_Item_extras.Item.Props.md#insetlevel)

___

### manualFocus

• `Optional` **manualFocus**: `boolean`

Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[manualFocus](components_Item_extras.Item.Props.md#manualfocus)

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[replace](components_Item_extras.Item.Props.md#replace)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[tabindex](components_Item_extras.Item.Props.md#tabindex)

___

### tag

• `Optional` **tag**: `string`

HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components
Default value: div

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[tag](components_Item_extras.Item.Props.md#tag)

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[target](components_Item_extras.Item.Props.md#target)

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

[Props](components_Item_extras.Item.Props.md).[to](components_Item_extras.Item.Props.md#to)
