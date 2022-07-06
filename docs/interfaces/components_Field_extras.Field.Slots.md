[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Field.extras](../modules/components_Field_extras.md) / [Field](../modules/components_Field_extras.Field.md) / Slots

# Interface: Slots<T\>

[components/Field.extras](../modules/components_Field_extras.md).[Field](../modules/components_Field_extras.Field.md).Slots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ParentSlots`](components_Field_extras.Field.ParentSlots.md)

- [`OwnSlots`](components_Field_extras.Field.OwnSlots.md)<`T`\>

  ↳ **`Slots`**

  ↳↳ [`ParentSlots`](components_DatetimePicker_extras.DatetimePicker.ParentSlots.md)

  ↳↳ [`ParentSlots`](components_Input_extras.Input.ParentSlots.md)

  ↳↳ [`ParentSlots`](components_NumericInput_extras.NumericInput.ParentSlots.md)

## Table of contents

### Properties

- [control](components_Field_extras.Field.Slots.md#control)

## Properties

### control

• `Readonly` **control**: (`scope`: [`ControlSlotData`](components_Field_extras.Field.ControlSlotData.md)<`T`\>) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Control slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`ControlSlotData`](components_Field_extras.Field.ControlSlotData.md)<`T`\> | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Field_extras.Field.OwnSlots.md).[control](components_Field_extras.Field.OwnSlots.md#control)
