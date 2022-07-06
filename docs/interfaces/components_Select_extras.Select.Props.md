[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Select.extras](../modules/components_Select_extras.md) / [Select](../modules/components_Select_extras.Select.md) / Props

# Interface: Props<T\>

[components/Select.extras](../modules/components_Select_extras.md).[Select](../modules/components_Select_extras.Select.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ParentProps`](components_Select_extras.Select.ParentProps.md)

- [`PluginProps`](components_Select_extras.Select.PluginProps.md)<`T`\>

- [`OwnProps`](components_Select_extras.Select.OwnProps.md)<`T`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [disable](components_Select_extras.Select.Props.md#disable)
- [initialLabel](components_Select_extras.Select.Props.md#initiallabel)
- [label](components_Select_extras.Select.Props.md#label)
- [modelValue](components_Select_extras.Select.Props.md#modelvalue)
- [onUpdate:modelValue](components_Select_extras.Select.Props.md#onupdate:modelvalue)
- [options](components_Select_extras.Select.Props.md#options)
- [required](components_Select_extras.Select.Props.md#required)
- [rulesOnChange](components_Select_extras.Select.Props.md#rulesonchange)
- [rulesOnInput](components_Select_extras.Select.Props.md#rulesoninput)
- [rulesOnSubmit](components_Select_extras.Select.Props.md#rulesonsubmit)
- [validationLabel](components_Select_extras.Select.Props.md#validationlabel)

## Properties

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[disable](components_Select_extras.Select.OwnProps.md#disable)

___

### initialLabel

• **initialLabel**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[initialLabel](components_Select_extras.Select.PluginProps.md#initiallabel)

___

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[label](components_Select_extras.Select.PluginProps.md#label)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[modelValue](components_Select_extras.Select.OwnProps.md#modelvalue)

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

[OwnProps](components_Select_extras.Select.OwnProps.md).[onUpdate:modelValue](components_Select_extras.Select.OwnProps.md#onupdate:modelvalue)

___

### options

• `Readonly` **options**: [`Options`](../modules/components_Select_extras.Select.md#options)<`T`\>

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[options](components_Select_extras.Select.OwnProps.md#options)

___

### required

• `Optional` `Readonly` **required**: `booleanU`

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[required](components_Select_extras.Select.OwnProps.md#required)

___

### rulesOnChange

• `Optional` `Readonly` **rulesOnChange**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[rulesOnChange](components_Select_extras.Select.PluginProps.md#rulesonchange)

___

### rulesOnInput

• `Optional` `Readonly` **rulesOnInput**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[rulesOnInput](components_Select_extras.Select.PluginProps.md#rulesoninput)

___

### rulesOnSubmit

• `Optional` `Readonly` **rulesOnSubmit**: [`Rules`](../modules/components_api_validation.validation.md#rules)<`T`\>

#### Inherited from

[PluginProps](components_Select_extras.Select.PluginProps.md).[rulesOnSubmit](components_Select_extras.Select.PluginProps.md#rulesonsubmit)

___

### validationLabel

• `Optional` `Readonly` **validationLabel**: `Key`<`Word`\>

#### Inherited from

[OwnProps](components_Select_extras.Select.OwnProps.md).[validationLabel](components_Select_extras.Select.OwnProps.md#validationlabel)
