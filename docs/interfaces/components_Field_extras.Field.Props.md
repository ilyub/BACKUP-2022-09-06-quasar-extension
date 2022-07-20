[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Field.extras](../modules/components_Field_extras.md) / [Field](../modules/components_Field_extras.Field.md) / Props

# Interface: Props<T\>

[components/Field.extras](../modules/components_Field_extras.md).[Field](../modules/components_Field_extras.Field.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ParentProps`](components_Field_extras.Field.ParentProps.md)

- [`PluginProps`](components_Field_extras.Field.PluginProps.md)<`T`\>

- [`OwnProps`](components_Field_extras.Field.OwnProps.md)<`T`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [disable](components_Field_extras.Field.Props.md#disable)
- [focusableElement](components_Field_extras.Field.Props.md#focusableelement)
- [format](components_Field_extras.Field.Props.md#format)
- [label](components_Field_extras.Field.Props.md#label)
- [modelValue](components_Field_extras.Field.Props.md#modelvalue)
- [onUpdate:modelValue](components_Field_extras.Field.Props.md#onupdate:modelvalue)
- [placeholder](components_Field_extras.Field.Props.md#placeholder)
- [required](components_Field_extras.Field.Props.md#required)
- [rulesOnChange](components_Field_extras.Field.Props.md#rulesonchange)
- [rulesOnInput](components_Field_extras.Field.Props.md#rulesoninput)
- [rulesOnSubmit](components_Field_extras.Field.Props.md#rulesonsubmit)
- [validationOptions](components_Field_extras.Field.Props.md#validationoptions)

## Properties

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[disable](components_Field_extras.Field.OwnProps.md#disable)

___

### focusableElement

• `Optional` `Readonly` **focusableElement**: `HTMLElement`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[focusableElement](components_Field_extras.Field.OwnProps.md#focusableelement)

___

### format

• `Optional` `Readonly` **format**: [`Format`](components_Field_extras.Field.Format.md)<`T`\>

Formats value.

**`Param`**

Value.

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[format](components_Field_extras.Field.OwnProps.md#format)

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[label](components_Field_extras.Field.PluginProps.md#label)

___

### modelValue

• `Readonly` **modelValue**: `T`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[modelValue](components_Field_extras.Field.OwnProps.md#modelvalue)

___

### onUpdate:modelValue

• `Optional` `Readonly` **onUpdate:modelValue**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

Emits model value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

##### Returns

`void`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[onUpdate:modelValue](components_Field_extras.Field.OwnProps.md#onupdate:modelvalue)

___

### placeholder

• **placeholder**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[placeholder](components_Field_extras.Field.PluginProps.md#placeholder)

___

### required

• `Optional` `Readonly` **required**: `booleanU`

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[required](components_Field_extras.Field.OwnProps.md#required)

___

### rulesOnChange

• `Optional` `Readonly` **rulesOnChange**: [`Rules`](../modules/components_api_validation_internal.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[rulesOnChange](components_Field_extras.Field.PluginProps.md#rulesonchange)

___

### rulesOnInput

• `Optional` `Readonly` **rulesOnInput**: [`Rules`](../modules/components_api_validation_internal.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[rulesOnInput](components_Field_extras.Field.PluginProps.md#rulesoninput)

___

### rulesOnSubmit

• `Optional` `Readonly` **rulesOnSubmit**: [`Rules`](../modules/components_api_validation_internal.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Field_extras.Field.PluginProps.md).[rulesOnSubmit](components_Field_extras.Field.PluginProps.md#rulesonsubmit)

___

### validationOptions

• `Optional` `Readonly` **validationOptions**: `Optional`<[`Options`](components_api_validation_internal.Options.md)<`T`\>\>

#### Inherited from

[OwnProps](components_Field_extras.Field.OwnProps.md).[validationOptions](components_Field_extras.Field.OwnProps.md#validationoptions)
