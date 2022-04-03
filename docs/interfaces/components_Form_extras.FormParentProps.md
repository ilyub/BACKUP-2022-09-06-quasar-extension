[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Form.extras](../modules/components_Form_extras.md) / FormParentProps

# Interface: FormParentProps

[components/Form.extras](../modules/components_Form_extras.md).FormParentProps

## Hierarchy

- `Omit`<`QFormProps`, ``"onSubmit"``\>

  ↳ **`FormParentProps`**

  ↳↳ [`FormProps`](components_Form_extras.FormProps.md)

## Table of contents

### Properties

- [autofocus](components_Form_extras.FormParentProps.md#autofocus)
- [greedy](components_Form_extras.FormParentProps.md#greedy)
- [noErrorFocus](components_Form_extras.FormParentProps.md#noerrorfocus)
- [noResetFocus](components_Form_extras.FormParentProps.md#noresetfocus)

### Methods

- [onReset](components_Form_extras.FormParentProps.md#onreset)
- [onValidationError](components_Form_extras.FormParentProps.md#onvalidationerror)
- [onValidationSuccess](components_Form_extras.FormParentProps.md#onvalidationsuccess)

## Properties

### autofocus

• `Optional` **autofocus**: `boolean`

Focus first focusable element on initial component render

#### Inherited from

Omit.autofocus

___

### greedy

• `Optional` **greedy**: `boolean`

Validate all fields in form (by default it stops after finding the first invalid field with synchronous validation)

#### Inherited from

Omit.greedy

___

### noErrorFocus

• `Optional` **noErrorFocus**: `boolean`

Do not try to focus on first component that has a validation error when submitting form

#### Inherited from

Omit.noErrorFocus

___

### noResetFocus

• `Optional` **noResetFocus**: `boolean`

Do not try to focus on first component when resetting form

#### Inherited from

Omit.noResetFocus

## Methods

### onReset

▸ `Optional` **onReset**(): `void`

Emitted when all validations have been reset when tethered to a reset button; It is recommended to manually reset the wrapped components models in this handler

#### Returns

`void`

#### Inherited from

Omit.onReset

___

### onValidationError

▸ `Optional` **onValidationError**(`ref`): `void`

Emitted after a validation was triggered and at least one of the inner Quasar components models are NOT valid

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `Component`<`any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\> | Vue reference to the first component that triggered the validation error |

#### Returns

`void`

#### Inherited from

Omit.onValidationError

___

### onValidationSuccess

▸ `Optional` **onValidationSuccess**(): `void`

Emitted after a validation was triggered and all inner Quasar components models are valid

#### Returns

`void`

#### Inherited from

Omit.onValidationSuccess
