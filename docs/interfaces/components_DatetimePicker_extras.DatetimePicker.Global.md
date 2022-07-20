[Quasar extension](../index.md) / [Exports](../modules.md) / [components/DatetimePicker.extras](../modules/components_DatetimePicker_extras.md) / [DatetimePicker](../modules/components_DatetimePicker_extras.DatetimePicker.md) / Global

# Interface: Global

[components/DatetimePicker.extras](../modules/components_DatetimePicker_extras.md).[DatetimePicker](../modules/components_DatetimePicker_extras.DatetimePicker.md).Global

## Hierarchy

- [`GlobalComponent`](components_api_misc.GlobalComponent.md)<[`Props`](components_DatetimePicker_extras.DatetimePicker.Props.md), [`Slots`](components_DatetimePicker_extras.DatetimePicker.Slots.md)\>

  ↳ **`Global`**

## Table of contents

### Constructors

- [constructor](components_DatetimePicker_extras.DatetimePicker.Global.md#constructor)

### Properties

- [dateOptions](components_DatetimePicker_extras.DatetimePicker.Global.md#dateoptions)
- [main](components_DatetimePicker_extras.DatetimePicker.Global.md#main)
- [timeOptions](components_DatetimePicker_extras.DatetimePicker.Global.md#timeoptions)

## Constructors

### constructor

• **new Global**()

Constructor.

#### Inherited from

[GlobalComponent](components_api_misc.GlobalComponent.md).[constructor](components_api_misc.GlobalComponent.md#constructor)

## Properties

### dateOptions

• `Readonly` **dateOptions**: (`date`: `string`) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Date options.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | Date. |

##### Returns

`boolean`

_True_ if option is enabled, _false_ otherwise.

___

### main

• `Optional` `Readonly` **main**: [`Global`](components_Field_extras.Field.Global.md)<`stringU`\>

___

### timeOptions

• `Readonly` **timeOptions**: (`hours`: `number`, `minutes`: ``null`` \| `number`) => `boolean`

#### Type declaration

▸ (`hours`, `minutes`): `boolean`

Time options.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hours` | `number` | Hours. |
| `minutes` | ``null`` \| `number` | Minutes. |

##### Returns

`boolean`

_True_ if option is enabled, _false_ otherwise.
