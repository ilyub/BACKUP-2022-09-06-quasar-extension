[Quasar extension](../index.md) / [Exports](../modules.md) / [components/MenuItem.extras](../modules/components_MenuItem_extras.md) / [MenuItem](../modules/components_MenuItem_extras.MenuItem.md) / Props

# Interface: Props

[components/MenuItem.extras](../modules/components_MenuItem_extras.md).[MenuItem](../modules/components_MenuItem_extras.MenuItem.md).Props

## Hierarchy

- [`ParentProps`](components_MenuItem_extras.MenuItem.ParentProps.md)

- [`PluginProps`](components_MenuItem_extras.MenuItem.PluginProps.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [active](components_MenuItem_extras.MenuItem.Props.md#active)
- [activeClass](components_MenuItem_extras.MenuItem.Props.md#activeclass)
- [caption](components_MenuItem_extras.MenuItem.Props.md#caption)
- [clickable](components_MenuItem_extras.MenuItem.Props.md#clickable)
- [confirmation](components_MenuItem_extras.MenuItem.Props.md#confirmation)
- [confirmedClick](components_MenuItem_extras.MenuItem.Props.md#confirmedclick)
- [dark](components_MenuItem_extras.MenuItem.Props.md#dark)
- [dense](components_MenuItem_extras.MenuItem.Props.md#dense)
- [disable](components_MenuItem_extras.MenuItem.Props.md#disable)
- [exact](components_MenuItem_extras.MenuItem.Props.md#exact)
- [exactActiveClass](components_MenuItem_extras.MenuItem.Props.md#exactactiveclass)
- [focused](components_MenuItem_extras.MenuItem.Props.md#focused)
- [href](components_MenuItem_extras.MenuItem.Props.md#href)
- [icon](components_MenuItem_extras.MenuItem.Props.md#icon)
- [insetLevel](components_MenuItem_extras.MenuItem.Props.md#insetlevel)
- [manualFocus](components_MenuItem_extras.MenuItem.Props.md#manualfocus)
- [replace](components_MenuItem_extras.MenuItem.Props.md#replace)
- [tabindex](components_MenuItem_extras.MenuItem.Props.md#tabindex)
- [tag](components_MenuItem_extras.MenuItem.Props.md#tag)
- [target](components_MenuItem_extras.MenuItem.Props.md#target)
- [to](components_MenuItem_extras.MenuItem.Props.md#to)

## Properties

### active

• `Optional` **active**: `boolean`

Put item into 'active' state

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[active](components_MenuItem_extras.MenuItem.ParentProps.md#active)

___

### activeClass

• `Optional` **activeClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[activeClass](components_MenuItem_extras.MenuItem.ParentProps.md#activeclass)

___

### caption

• **caption**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[caption](components_MenuItem_extras.MenuItem.ParentProps.md#caption)

___

### clickable

• `Optional` **clickable**: `boolean`

Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[clickable](components_MenuItem_extras.MenuItem.ParentProps.md#clickable)

___

### confirmation

• `Optional` `Readonly` **confirmation**: `Key`<`Word`\>

#### Inherited from

[PluginProps](components_MenuItem_extras.MenuItem.PluginProps.md).[confirmation](components_MenuItem_extras.MenuItem.PluginProps.md#confirmation)

___

### confirmedClick

• `Optional` `Readonly` **confirmedClick**: [`ConfirmedClick`](components_api_confirmed_click.confirmedClick.ConfirmedClick.md)

Handles confirmed click.

#### Inherited from

[PluginProps](components_MenuItem_extras.MenuItem.PluginProps.md).[confirmedClick](components_MenuItem_extras.MenuItem.PluginProps.md#confirmedclick)

___

### dark

• `Optional` **dark**: `boolean`

Notify the component that the background is a dark color

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[dark](components_MenuItem_extras.MenuItem.ParentProps.md#dark)

___

### dense

• `Optional` **dense**: `boolean`

Dense mode; occupies less space

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[dense](components_MenuItem_extras.MenuItem.ParentProps.md#dense)

___

### disable

• `Optional` **disable**: `boolean`

Put component in disabled mode

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[disable](components_MenuItem_extras.MenuItem.ParentProps.md#disable)

___

### exact

• `Optional` **exact**: `boolean`

Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[exact](components_MenuItem_extras.MenuItem.ParentProps.md#exact)

___

### exactActiveClass

• `Optional` **exactActiveClass**: `string`

Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[exactActiveClass](components_MenuItem_extras.MenuItem.ParentProps.md#exactactiveclass)

___

### focused

• `Optional` **focused**: `boolean`

Determines focus state, ONLY if 'manual-focus' is enabled / set to true

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[focused](components_MenuItem_extras.MenuItem.ParentProps.md#focused)

___

### href

• `Optional` **href**: `string`

Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[href](components_MenuItem_extras.MenuItem.ParentProps.md#href)

___

### icon

• `Optional` `Readonly` **icon**: `stringU`

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[icon](components_MenuItem_extras.MenuItem.ParentProps.md#icon)

___

### insetLevel

• `Optional` **insetLevel**: `number`

Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[insetLevel](components_MenuItem_extras.MenuItem.ParentProps.md#insetlevel)

___

### manualFocus

• `Optional` **manualFocus**: `boolean`

Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[manualFocus](components_MenuItem_extras.MenuItem.ParentProps.md#manualfocus)

___

### replace

• `Optional` **replace**: `boolean`

Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[replace](components_MenuItem_extras.MenuItem.ParentProps.md#replace)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[tabindex](components_MenuItem_extras.MenuItem.ParentProps.md#tabindex)

___

### tag

• `Optional` **tag**: `string`

HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components
Default value: div

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[tag](components_MenuItem_extras.MenuItem.ParentProps.md#tag)

___

### target

• `Optional` **target**: `string`

Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[target](components_MenuItem_extras.MenuItem.ParentProps.md#target)

___

### to

• `Optional` **to**: `any`

Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used

#### Inherited from

[ParentProps](components_MenuItem_extras.MenuItem.ParentProps.md).[to](components_MenuItem_extras.MenuItem.ParentProps.md#to)
