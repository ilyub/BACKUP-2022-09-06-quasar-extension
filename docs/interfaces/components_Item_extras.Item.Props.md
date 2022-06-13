[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Item.extras](../modules/components_Item_extras.md) / [Item](../modules/components_Item_extras.Item.md) / Props

# Interface: Props

[components/Item.extras](../modules/components_Item_extras.md).[Item](../modules/components_Item_extras.Item.md).Props

## Hierarchy

- [`ParentProps`](components_Item_extras.Item.ParentProps.md)

- [`PluginProps`](components_Item_extras.Item.PluginProps.md)

- [`OwnProps`](components_Item_extras.Item.OwnProps.md)

  ↳ **`Props`**

  ↳↳ [`ParentProps`](components_MenuItem_extras.MenuItem.ParentProps.md)

## Table of contents

### Properties

- [active](components_Item_extras.Item.Props.md#active)
- [activeClass](components_Item_extras.Item.Props.md#activeclass)
- [caption](components_Item_extras.Item.Props.md#caption)
- [clickable](components_Item_extras.Item.Props.md#clickable)
- [dark](components_Item_extras.Item.Props.md#dark)
- [dense](components_Item_extras.Item.Props.md#dense)
- [disable](components_Item_extras.Item.Props.md#disable)
- [exact](components_Item_extras.Item.Props.md#exact)
- [exactActiveClass](components_Item_extras.Item.Props.md#exactactiveclass)
- [focused](components_Item_extras.Item.Props.md#focused)
- [href](components_Item_extras.Item.Props.md#href)
- [icon](components_Item_extras.Item.Props.md#icon)
- [insetLevel](components_Item_extras.Item.Props.md#insetlevel)
- [manualFocus](components_Item_extras.Item.Props.md#manualfocus)
- [replace](components_Item_extras.Item.Props.md#replace)
- [tabindex](components_Item_extras.Item.Props.md#tabindex)
- [tag](components_Item_extras.Item.Props.md#tag)
- [target](components_Item_extras.Item.Props.md#target)
- [to](components_Item_extras.Item.Props.md#to)

## Properties

### active

• `Optional` **active**: `boolean`

Put item into 'active' state

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[active](components_Item_extras.Item.ParentProps.md#active)

___

### activeClass

• `Optional` **activeClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[activeClass](components_Item_extras.Item.ParentProps.md#activeclass)

___

### caption

• **caption**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Item_extras.Item.PluginProps.md).[caption](components_Item_extras.Item.PluginProps.md#caption)

___

### clickable

• `Optional` **clickable**: `boolean`

Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[clickable](components_Item_extras.Item.ParentProps.md#clickable)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[dark](components_Item_extras.Item.ParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[dense](components_Item_extras.Item.ParentProps.md#dense)

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[disable](components_Item_extras.Item.ParentProps.md#disable)

___

### exact

• `Optional` **exact**: `boolean`

Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[exact](components_Item_extras.Item.ParentProps.md#exact)

___

### exactActiveClass

• `Optional` **exactActiveClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[exactActiveClass](components_Item_extras.Item.ParentProps.md#exactactiveclass)

___

### focused

• `Optional` **focused**: `boolean`

Determines focus state, ONLY if 'manual-focus' is enabled / set to true

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[focused](components_Item_extras.Item.ParentProps.md#focused)

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[href](components_Item_extras.Item.ParentProps.md#href)

___

### icon

• `Optional` `Readonly` **icon**: `stringU`

#### Inherited from

[OwnProps](components_Item_extras.Item.OwnProps.md).[icon](components_Item_extras.Item.OwnProps.md#icon)

___

### insetLevel

• `Optional` **insetLevel**: `number`

Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[insetLevel](components_Item_extras.Item.ParentProps.md#insetlevel)

___

### manualFocus

• `Optional` **manualFocus**: `boolean`

Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[manualFocus](components_Item_extras.Item.ParentProps.md#manualfocus)

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[replace](components_Item_extras.Item.ParentProps.md#replace)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[tabindex](components_Item_extras.Item.ParentProps.md#tabindex)

___

### tag

• `Optional` **tag**: `string`

HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components
Default value: div

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[tag](components_Item_extras.Item.ParentProps.md#tag)

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[target](components_Item_extras.Item.ParentProps.md#target)

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_Item_extras.Item.ParentProps.md).[to](components_Item_extras.Item.ParentProps.md#to)
