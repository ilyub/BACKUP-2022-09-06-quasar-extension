[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Form.extras](../modules/components_Form_extras.md) / FormProps

# Interface: FormProps

[components/Form.extras](../modules/components_Form_extras.md).FormProps

## Hierarchy

- [`FormParentProps`](components_Form_extras.FormParentProps.md)

- [`FormOwnProps`](components_Form_extras.FormOwnProps.md)

  ↳ **`FormProps`**

## Table of contents

### Properties

- [asyncTaskType](components_Form_extras.FormProps.md#asynctasktype)
- [autofocus](components_Form_extras.FormProps.md#autofocus)
- [greedy](components_Form_extras.FormProps.md#greedy)
- [noErrorFocus](components_Form_extras.FormProps.md#noerrorfocus)
- [noResetFocus](components_Form_extras.FormProps.md#noresetfocus)
- [onSubmit](components_Form_extras.FormProps.md#onsubmit)
- [onSubmitAsync](components_Form_extras.FormProps.md#onsubmitasync)

### Methods

- [onReset](components_Form_extras.FormProps.md#onreset)
- [onValidationError](components_Form_extras.FormProps.md#onvalidationerror)
- [onValidationSuccess](components_Form_extras.FormProps.md#onvalidationsuccess)

## Properties

### asyncTaskType

• `Optional` `Readonly` **asyncTaskType**: `Type`

#### Inherited from

[FormOwnProps](components_Form_extras.FormOwnProps.md).[asyncTaskType](components_Form_extras.FormOwnProps.md#asynctasktype)

___

### autofocus

• `Optional` **autofocus**: `boolean`

Focus first focusable element on initial component render

#### Inherited from

[FormParentProps](components_Form_extras.FormParentProps.md).[autofocus](components_Form_extras.FormParentProps.md#autofocus)

___

### greedy

• `Optional` **greedy**: `boolean`

Validate all fields in form (by default it stops after finding the first invalid field with synchronous validation)

#### Inherited from

[FormParentProps](components_Form_extras.FormParentProps.md).[greedy](components_Form_extras.FormParentProps.md#greedy)

___

### noErrorFocus

• `Optional` **noErrorFocus**: `boolean`

Do not try to focus on first component that has a validation error when submitting form

#### Inherited from

[FormParentProps](components_Form_extras.FormParentProps.md).[noErrorFocus](components_Form_extras.FormParentProps.md#noerrorfocus)

___

### noResetFocus

• `Optional` **noResetFocus**: `boolean`

Do not try to focus on first component when resetting form

#### Inherited from

[FormParentProps](components_Form_extras.FormParentProps.md).[noResetFocus](components_Form_extras.FormParentProps.md#noresetfocus)

___

### onSubmit

• `Optional` `Readonly` **onSubmit**: [`OnSubmit`](components_Form_extras.OnSubmit.md)

#### Inherited from

[FormOwnProps](components_Form_extras.FormOwnProps.md).[onSubmit](components_Form_extras.FormOwnProps.md#onsubmit)

___

### onSubmitAsync

• `Optional` `Readonly` **onSubmitAsync**: [`OnSubmitAsync`](components_Form_extras.OnSubmitAsync.md)

#### Inherited from

[FormOwnProps](components_Form_extras.FormOwnProps.md).[onSubmitAsync](components_Form_extras.FormOwnProps.md#onsubmitasync)

## Methods

### onReset

▸ `Optional` **onReset**(): `void`

Emitted when all validations have been reset when tethered to a reset button; It is recommended to manually reset the wrapped components models in this handler

#### Returns

`void`

#### Inherited from

[FormParentProps](components_Form_extras.FormParentProps.md).[onReset](components_Form_extras.FormParentProps.md#onreset)

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

[FormParentProps](components_Form_extras.FormParentProps.md).[onValidationError](components_Form_extras.FormParentProps.md#onvalidationerror)

___

### onValidationSuccess

▸ `Optional` **onValidationSuccess**(): `void`

Emitted after a validation was triggered and all inner Quasar components models are valid

#### Returns

`void`

#### Inherited from

[FormParentProps](components_Form_extras.FormParentProps.md).[onValidationSuccess](components_Form_extras.FormParentProps.md#onvalidationsuccess)
