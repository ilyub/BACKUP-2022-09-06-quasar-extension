[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Button.extras](../modules/components_Button_extras.md) / ButtonProps

# Interface: ButtonProps

[components/Button.extras](../modules/components_Button_extras.md).ButtonProps

## Hierarchy

- [`ButtonParentProps`](../modules/components_Button_extras.md#buttonparentprops)

- [`ButtonOwnProps`](components_Button_extras.ButtonOwnProps.md)

  ↳ **`ButtonProps`**

## Table of contents

### Properties

- [confirmation](components_Button_extras.ButtonProps.md#confirmation)
- [disable](components_Button_extras.ButtonProps.md#disable)
- [modelValue](components_Button_extras.ButtonProps.md#modelvalue)
- [tooltip](components_Button_extras.ButtonProps.md#tooltip)
- [tooltipDirection](components_Button_extras.ButtonProps.md#tooltipdirection)

### Methods

- [onConfirmedClick](components_Button_extras.ButtonProps.md#onconfirmedclick)
- [onUpdate:modelValue](components_Button_extras.ButtonProps.md#onupdate:modelvalue)

## Properties

### confirmation

• `Optional` `Readonly` **confirmation**: `stringU`

#### Inherited from

ButtonParentProps.confirmation

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

ButtonParentProps.disable

___

### modelValue

• `Optional` `Readonly` **modelValue**: `booleanU`

#### Inherited from

ButtonParentProps.modelValue

___

### tooltip

• `Optional` `Readonly` **tooltip**: `stringU`

#### Inherited from

ButtonParentProps.tooltip

___

### tooltipDirection

• `Optional` `Readonly` **tooltipDirection**: [`Direction`](../modules/components_Tooltip_extras.md#direction)

#### Inherited from

ButtonParentProps.tooltipDirection

## Methods

### onConfirmedClick

▸ `Optional` `Readonly` **onConfirmedClick**(): `void`

Emits confirmed click event.

#### Returns

`void`

#### Inherited from

ButtonParentProps.onConfirmedClick

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

ButtonParentProps.onUpdate:modelValue
