[Quasar extension](../index.md) / [Exports](../modules.md) / [components/OptionGroup.extras](../modules/components_OptionGroup_extras.md) / [OptionGroup](../modules/components_OptionGroup_extras.OptionGroup.md) / ParentSlots

# Interface: ParentSlots

[components/OptionGroup.extras](../modules/components_OptionGroup_extras.md).[OptionGroup](../modules/components_OptionGroup_extras.OptionGroup.md).ParentSlots

## Hierarchy

- `QOptionGroupSlots`

  ↳ **`ParentSlots`**

  ↳↳ [`Slots`](components_OptionGroup_extras.OptionGroup.Slots.md)

## Table of contents

### Methods

- [label](components_OptionGroup_extras.OptionGroup.ParentSlots.md#label)

## Methods

### label

▸ **label**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Generic slot for all labels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` | The corresponding option entry from the 'options' prop |
| `scope.disable?` | `boolean` | If true, the option will be disabled |
| `scope.label` | `string` | Label to display along the component |
| `scope.value` | `any` | Value of the option that will be used by the component model |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QOptionGroupSlots.label
