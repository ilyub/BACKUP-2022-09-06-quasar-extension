[Quasar extension](../index.md) / [Exports](../modules.md) / [components/NumericInput.extras](../modules/components_NumericInput_extras.md) / [NumericInput](../modules/components_NumericInput_extras.NumericInput.md) / ParentSlots

# Interface: ParentSlots

[components/NumericInput.extras](../modules/components_NumericInput_extras.md).[NumericInput](../modules/components_NumericInput_extras.NumericInput.md).ParentSlots

## Hierarchy

- [`Slots`](components_Field_extras.Field.Slots.md)<`numberU`\>

  ↳ **`ParentSlots`**

  ↳↳ [`Slots`](components_NumericInput_extras.NumericInput.Slots.md)

## Table of contents

### Methods

- [after](components_NumericInput_extras.NumericInput.ParentSlots.md#after)
- [append](components_NumericInput_extras.NumericInput.ParentSlots.md#append)
- [before](components_NumericInput_extras.NumericInput.ParentSlots.md#before)
- [control](components_NumericInput_extras.NumericInput.ParentSlots.md#control)
- [counter](components_NumericInput_extras.NumericInput.ParentSlots.md#counter)
- [default](components_NumericInput_extras.NumericInput.ParentSlots.md#default)
- [error](components_NumericInput_extras.NumericInput.ParentSlots.md#error)
- [hint](components_NumericInput_extras.NumericInput.ParentSlots.md#hint)
- [label](components_NumericInput_extras.NumericInput.ParentSlots.md#label)
- [loading](components_NumericInput_extras.NumericInput.ParentSlots.md#loading)
- [prepend](components_NumericInput_extras.NumericInput.ParentSlots.md#prepend)
- [rawControl](components_NumericInput_extras.NumericInput.ParentSlots.md#rawcontrol)

## Methods

### after

▸ **after**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Append outer field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[after](components_Field_extras.Field.Slots.md#after)

___

### append

▸ **append**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Append to inner field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[append](components_Field_extras.Field.Slots.md#append)

___

### before

▸ **before**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Prepend outer field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[before](components_Field_extras.Field.Slots.md#before)

___

### control

▸ `Readonly` **control**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Control slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`ControlSlotData`](components_Field_extras.Field.ControlSlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[control](components_Field_extras.Field.Slots.md#control)

___

### counter

▸ **counter**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for counter text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[counter](components_Field_extras.Field.Slots.md#counter)

___

### default

▸ **default**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Field main content

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[default](components_Field_extras.Field.Slots.md#default)

___

### error

▸ **error**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for errors; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[error](components_Field_extras.Field.Slots.md#error)

___

### hint

▸ **hint**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for hint text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[hint](components_Field_extras.Field.Slots.md#hint)

___

### label

▸ **label**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for label; Used only if 'label-slot' prop is set or the 'label' prop is set; When it is used the text in the 'label' prop is ignored

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[label](components_Field_extras.Field.Slots.md#label)

___

### loading

▸ **loading**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Override default spinner when component is in loading mode; Use in conjunction with 'loading' prop

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[loading](components_Field_extras.Field.Slots.md#loading)

___

### prepend

▸ **prepend**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Prepend inner field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[prepend](components_Field_extras.Field.Slots.md#prepend)

___

### rawControl

▸ **rawControl**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

undefined

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[Slots](components_Field_extras.Field.Slots.md).[rawControl](components_Field_extras.Field.Slots.md#rawcontrol)