[Quasar extension](../index.md) / [Exports](../modules.md) / [components/TimeInput.extras](../modules/components_TimeInput_extras.md) / [TimeInput](../modules/components_TimeInput_extras.TimeInput.md) / Slots

# Interface: Slots

[components/TimeInput.extras](../modules/components_TimeInput_extras.md).[TimeInput](../modules/components_TimeInput_extras.TimeInput.md).Slots

## Hierarchy

- [`ParentSlots`](components_TimeInput_extras.TimeInput.ParentSlots.md)

  ↳ **`Slots`**

## Table of contents

### Methods

- [after](components_TimeInput_extras.TimeInput.Slots.md#after)
- [append](components_TimeInput_extras.TimeInput.Slots.md#append)
- [before](components_TimeInput_extras.TimeInput.Slots.md#before)
- [control](components_TimeInput_extras.TimeInput.Slots.md#control)
- [counter](components_TimeInput_extras.TimeInput.Slots.md#counter)
- [default](components_TimeInput_extras.TimeInput.Slots.md#default)
- [error](components_TimeInput_extras.TimeInput.Slots.md#error)
- [hint](components_TimeInput_extras.TimeInput.Slots.md#hint)
- [label](components_TimeInput_extras.TimeInput.Slots.md#label)
- [loading](components_TimeInput_extras.TimeInput.Slots.md#loading)
- [prepend](components_TimeInput_extras.TimeInput.Slots.md#prepend)
- [rawControl](components_TimeInput_extras.TimeInput.Slots.md#rawcontrol)

## Methods

### after

▸ **after**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Append outer field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[after](components_TimeInput_extras.TimeInput.ParentSlots.md#after)

___

### append

▸ **append**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Append to inner field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[append](components_TimeInput_extras.TimeInput.ParentSlots.md#append)

___

### before

▸ **before**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Prepend outer field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[before](components_TimeInput_extras.TimeInput.ParentSlots.md#before)

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

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[control](components_TimeInput_extras.TimeInput.ParentSlots.md#control)

___

### counter

▸ **counter**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for counter text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[counter](components_TimeInput_extras.TimeInput.ParentSlots.md#counter)

___

### default

▸ **default**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Field main content

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[default](components_TimeInput_extras.TimeInput.ParentSlots.md#default)

___

### error

▸ **error**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for errors; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[error](components_TimeInput_extras.TimeInput.ParentSlots.md#error)

___

### hint

▸ **hint**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for hint text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[hint](components_TimeInput_extras.TimeInput.ParentSlots.md#hint)

___

### label

▸ **label**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for label; Used only if 'label-slot' prop is set or the 'label' prop is set; When it is used the text in the 'label' prop is ignored

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[label](components_TimeInput_extras.TimeInput.ParentSlots.md#label)

___

### loading

▸ **loading**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Override default spinner when component is in loading mode; Use in conjunction with 'loading' prop

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[loading](components_TimeInput_extras.TimeInput.ParentSlots.md#loading)

___

### prepend

▸ **prepend**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Prepend inner field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[prepend](components_TimeInput_extras.TimeInput.ParentSlots.md#prepend)

___

### rawControl

▸ **rawControl**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

undefined

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_TimeInput_extras.TimeInput.ParentSlots.md).[rawControl](components_TimeInput_extras.TimeInput.ParentSlots.md#rawcontrol)
