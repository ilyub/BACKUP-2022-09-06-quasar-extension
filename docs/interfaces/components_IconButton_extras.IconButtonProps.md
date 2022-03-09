[Quasar extension](../index.md) / [Exports](../modules.md) / [components/IconButton.extras](../modules/components_IconButton_extras.md) / IconButtonProps

# Interface: IconButtonProps

[components/IconButton.extras](../modules/components_IconButton_extras.md).IconButtonProps

## Hierarchy

- [`IconButtonParentProps`](../modules/components_IconButton_extras.md#iconbuttonparentprops)

- [`IconButtonOwnProps`](components_IconButton_extras.IconButtonOwnProps.md)

  ↳ **`IconButtonProps`**

  ↳↳ [`LanguagePickerOptions`](components_LanguagePicker_extras.LanguagePickerOptions.md)

## Table of contents

### Properties

- [confirmation](components_IconButton_extras.IconButtonProps.md#confirmation)
- [disable](components_IconButton_extras.IconButtonProps.md#disable)
- [modelValue](components_IconButton_extras.IconButtonProps.md#modelvalue)
- [tooltip](components_IconButton_extras.IconButtonProps.md#tooltip)
- [tooltipDirection](components_IconButton_extras.IconButtonProps.md#tooltipdirection)

### Methods

- [onConfirmedClick](components_IconButton_extras.IconButtonProps.md#onconfirmedclick)
- [onUpdate:modelValue](components_IconButton_extras.IconButtonProps.md#onupdate:modelvalue)

## Properties

### confirmation

• `Optional` `Readonly` **confirmation**: `stringU`

#### Inherited from

IconButtonParentProps.confirmation

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

IconButtonParentProps.disable

___

### modelValue

• `Optional` `Readonly` **modelValue**: `booleanU`

#### Inherited from

IconButtonParentProps.modelValue

___

### tooltip

• `Optional` `Readonly` **tooltip**: `stringU`

#### Inherited from

IconButtonParentProps.tooltip

___

### tooltipDirection

• `Optional` `Readonly` **tooltipDirection**: [`Direction`](../modules/components_Tooltip_extras.md#direction)

#### Inherited from

IconButtonParentProps.tooltipDirection

## Methods

### onConfirmedClick

▸ `Optional` `Readonly` **onConfirmedClick**(): `void`

Emits confirmed click event.

#### Returns

`void`

#### Inherited from

IconButtonParentProps.onConfirmedClick

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

IconButtonParentProps.onUpdate:modelValue
