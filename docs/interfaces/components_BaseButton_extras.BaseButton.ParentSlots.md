[Quasar extension](../index.md) / [Exports](../modules.md) / [components/BaseButton.extras](../modules/components_BaseButton_extras.md) / [BaseButton](../modules/components_BaseButton_extras.BaseButton.md) / ParentSlots

# Interface: ParentSlots

[components/BaseButton.extras](../modules/components_BaseButton_extras.md).[BaseButton](../modules/components_BaseButton_extras.BaseButton.md).ParentSlots

## Hierarchy

- `QBtnSlots`

  ↳ **`ParentSlots`**

  ↳↳ [`Slots`](components_BaseButton_extras.BaseButton.Slots.md)

## Table of contents

### Methods

- [default](components_BaseButton_extras.BaseButton.ParentSlots.md#default)
- [loading](components_BaseButton_extras.BaseButton.ParentSlots.md#loading)

## Methods

### default

▸ **default**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Use for custom content, instead of relying on 'icon' and 'label' props

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QBtnSlots.default

___

### loading

▸ **loading**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Override the default QSpinner when in 'loading' state

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QBtnSlots.loading
