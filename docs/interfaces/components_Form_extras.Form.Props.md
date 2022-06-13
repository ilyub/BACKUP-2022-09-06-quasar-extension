[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Form.extras](../modules/components_Form_extras.md) / [Form](../modules/components_Form_extras.Form.md) / Props

# Interface: Props

[components/Form.extras](../modules/components_Form_extras.md).[Form](../modules/components_Form_extras.Form.md).Props

## Hierarchy

- [`ParentProps`](components_Form_extras.Form.ParentProps.md)

- [`OwnProps`](components_Form_extras.Form.OwnProps.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [asyncTaskType](components_Form_extras.Form.Props.md#asynctasktype)
- [autofocus](components_Form_extras.Form.Props.md#autofocus)
- [greedy](components_Form_extras.Form.Props.md#greedy)
- [noErrorFocus](components_Form_extras.Form.Props.md#noerrorfocus)
- [noResetFocus](components_Form_extras.Form.Props.md#noresetfocus)
- [onAsyncSubmit](components_Form_extras.Form.Props.md#onasyncsubmit)

### Methods

- [onReset](components_Form_extras.Form.Props.md#onreset)
- [onSubmit](components_Form_extras.Form.Props.md#onsubmit)
- [onValidationError](components_Form_extras.Form.Props.md#onvalidationerror)
- [onValidationSuccess](components_Form_extras.Form.Props.md#onvalidationsuccess)

## Properties

### asyncTaskType

• `Optional` `Readonly` **asyncTaskType**: `Type`

#### Inherited from

[OwnProps](components_Form_extras.Form.OwnProps.md).[asyncTaskType](components_Form_extras.Form.OwnProps.md#asynctasktype)

___

### autofocus

• `Optional` **autofocus**: `boolean`

Focus first focusable element on initial component render

#### Inherited from

[ParentProps](components_Form_extras.Form.ParentProps.md).[autofocus](components_Form_extras.Form.ParentProps.md#autofocus)

___

### greedy

• `Optional` **greedy**: `boolean`

Validate all fields in form (by default it stops after finding the first invalid field with synchronous validation)

#### Inherited from

[ParentProps](components_Form_extras.Form.ParentProps.md).[greedy](components_Form_extras.Form.ParentProps.md#greedy)

___

### noErrorFocus

• `Optional` **noErrorFocus**: `boolean`

Do not try to focus on first component that has a validation error when submitting form

#### Inherited from

[ParentProps](components_Form_extras.Form.ParentProps.md).[noErrorFocus](components_Form_extras.Form.ParentProps.md#noerrorfocus)

___

### noResetFocus

• `Optional` **noResetFocus**: `boolean`

Do not try to focus on first component when resetting form

#### Inherited from

[ParentProps](components_Form_extras.Form.ParentProps.md).[noResetFocus](components_Form_extras.Form.ParentProps.md#noresetfocus)

___

### onAsyncSubmit

• `Optional` `Readonly` **onAsyncSubmit**: [`AsyncSubmit`](components_Form_extras.Form.AsyncSubmit.md)

#### Inherited from

[OwnProps](components_Form_extras.Form.OwnProps.md).[onAsyncSubmit](components_Form_extras.Form.OwnProps.md#onasyncsubmit)

## Methods

### onReset

▸ `Optional` **onReset**(): `void`

Emitted when all validations have been reset when tethered to a reset button; It is recommended to manually reset the wrapped components models in this handler

#### Returns

`void`

#### Inherited from

[ParentProps](components_Form_extras.Form.ParentProps.md).[onReset](components_Form_extras.Form.ParentProps.md#onreset)

___

### onSubmit

▸ `Optional` `Readonly` **onSubmit**(`event`): `void`

Form submission event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Event` | DOM event. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_Form_extras.Form.OwnProps.md).[onSubmit](components_Form_extras.Form.OwnProps.md#onsubmit)

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

[ParentProps](components_Form_extras.Form.ParentProps.md).[onValidationError](components_Form_extras.Form.ParentProps.md#onvalidationerror)

___

### onValidationSuccess

▸ `Optional` **onValidationSuccess**(): `void`

Emitted after a validation was triggered and all inner Quasar components models are valid

#### Returns

`void`

#### Inherited from

[ParentProps](components_Form_extras.Form.ParentProps.md).[onValidationSuccess](components_Form_extras.Form.ParentProps.md#onvalidationsuccess)
