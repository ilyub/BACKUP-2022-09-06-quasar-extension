[Quasar extension](../index.md) / [Exports](../modules.md) / [components/FormButton.extras](../modules/components_FormButton_extras.md) / FormButtonProps

# Interface: FormButtonProps

[components/FormButton.extras](../modules/components_FormButton_extras.md).FormButtonProps

## Hierarchy

- [`FormButtonParentProps`](../modules/components_FormButton_extras.md#formbuttonparentprops)

- [`FormButtonOwnProps`](components_FormButton_extras.FormButtonOwnProps.md)

  ↳ **`FormButtonProps`**

## Table of contents

### Properties

- [confirmation](components_FormButton_extras.FormButtonProps.md#confirmation)
- [disable](components_FormButton_extras.FormButtonProps.md#disable)
- [modelValue](components_FormButton_extras.FormButtonProps.md#modelvalue)
- [tooltip](components_FormButton_extras.FormButtonProps.md#tooltip)
- [tooltipDirection](components_FormButton_extras.FormButtonProps.md#tooltipdirection)

### Methods

- [onConfirmedClick](components_FormButton_extras.FormButtonProps.md#onconfirmedclick)
- [onUpdate:modelValue](components_FormButton_extras.FormButtonProps.md#onupdate:modelvalue)

## Properties

### confirmation

• `Optional` `Readonly` **confirmation**: `stringU`

#### Inherited from

FormButtonParentProps.confirmation

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

FormButtonParentProps.disable

___

### modelValue

• `Optional` `Readonly` **modelValue**: `booleanU`

#### Inherited from

FormButtonParentProps.modelValue

___

### tooltip

• `Optional` `Readonly` **tooltip**: `stringU`

#### Inherited from

FormButtonParentProps.tooltip

___

### tooltipDirection

• `Optional` `Readonly` **tooltipDirection**: [`Direction`](../modules/components_Tooltip_extras.md#direction)

#### Inherited from

FormButtonParentProps.tooltipDirection

## Methods

### onConfirmedClick

▸ `Optional` `Readonly` **onConfirmedClick**(): `void`

Emits confirmed click event.

#### Returns

`void`

#### Inherited from

FormButtonParentProps.onConfirmedClick

___

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Value. |

#### Returns

`void`

#### Inherited from

FormButtonParentProps.onUpdate:modelValue
