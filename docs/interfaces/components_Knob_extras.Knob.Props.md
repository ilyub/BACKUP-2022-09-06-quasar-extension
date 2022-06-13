[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Knob.extras](../modules/components_Knob_extras.md) / [Knob](../modules/components_Knob_extras.Knob.md) / Props

# Interface: Props

[components/Knob.extras](../modules/components_Knob_extras.md).[Knob](../modules/components_Knob_extras.Knob.md).Props

## Hierarchy

- [`ParentProps`](components_Knob_extras.Knob.ParentProps.md)

- [`OwnProps`](components_Knob_extras.Knob.OwnProps.md)

  ↳ **`Props`**

## Table of contents

### Properties

- [angle](components_Knob_extras.Knob.Props.md#angle)
- [centerColor](components_Knob_extras.Knob.Props.md#centercolor)
- [color](components_Knob_extras.Knob.Props.md#color)
- [disable](components_Knob_extras.Knob.Props.md#disable)
- [fontSize](components_Knob_extras.Knob.Props.md#fontsize)
- [inline](components_Knob_extras.Knob.Props.md#inline)
- [innerMax](components_Knob_extras.Knob.Props.md#innermax)
- [innerMin](components_Knob_extras.Knob.Props.md#innermin)
- [instantFeedback](components_Knob_extras.Knob.Props.md#instantfeedback)
- [max](components_Knob_extras.Knob.Props.md#max)
- [min](components_Knob_extras.Knob.Props.md#min)
- [modelValue](components_Knob_extras.Knob.Props.md#modelvalue)
- [name](components_Knob_extras.Knob.Props.md#name)
- [readonly](components_Knob_extras.Knob.Props.md#readonly)
- [reverse](components_Knob_extras.Knob.Props.md#reverse)
- [showValue](components_Knob_extras.Knob.Props.md#showvalue)
- [size](components_Knob_extras.Knob.Props.md#size)
- [step](components_Knob_extras.Knob.Props.md#step)
- [tabindex](components_Knob_extras.Knob.Props.md#tabindex)
- [thickness](components_Knob_extras.Knob.Props.md#thickness)
- [trackColor](components_Knob_extras.Knob.Props.md#trackcolor)

### Methods

- [onChange](components_Knob_extras.Knob.Props.md#onchange)
- [onDragValue](components_Knob_extras.Knob.Props.md#ondragvalue)
- [onUpdate:modelValue](components_Knob_extras.Knob.Props.md#onupdate:modelvalue)

## Properties

### angle

• `Optional` **angle**: `number`

Angle to rotate progress arc by

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[angle](components_Knob_extras.Knob.ParentProps.md#angle)

___

### centerColor

• `Optional` **centerColor**: `string`

Color name for the center part of the component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[centerColor](components_Knob_extras.Knob.ParentProps.md#centercolor)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[color](components_Knob_extras.Knob.ParentProps.md#color)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[OwnProps](components_Knob_extras.Knob.OwnProps.md).[disable](components_Knob_extras.Knob.OwnProps.md#disable)

___

### fontSize

• `Optional` **fontSize**: `string`

Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size
Default value: 0.25em

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[fontSize](components_Knob_extras.Knob.ParentProps.md#fontsize)

___

### inline

• `Optional` `Readonly` **inline**: `booleanU`

#### Inherited from

[OwnProps](components_Knob_extras.Knob.OwnProps.md).[inline](components_Knob_extras.Knob.OwnProps.md#inline)

___

### innerMax

• `Optional` **innerMax**: `number`

Inner maximum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be lower or equal to 'max' prop; Defaults to 'max' prop

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[innerMax](components_Knob_extras.Knob.ParentProps.md#innermax)

___

### innerMin

• `Optional` **innerMin**: `number`

Inner minimum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be higher or equal to 'min' prop; Defaults to 'min' prop

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[innerMin](components_Knob_extras.Knob.ParentProps.md#innermin)

___

### instantFeedback

• `Optional` **instantFeedback**: `boolean`

No animation when model changes

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[instantFeedback](components_Knob_extras.Knob.ParentProps.md#instantfeedback)

___

### max

• `Optional` **max**: `number`

The maximum value that the model (the knob value) should go to

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[max](components_Knob_extras.Knob.ParentProps.md#max)

___

### min

• `Optional` **min**: `number`

The minimum value that the model (the knob value) should start at

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[min](components_Knob_extras.Knob.ParentProps.md#min)

___

### modelValue

• `Readonly` **modelValue**: `number`

#### Inherited from

[OwnProps](components_Knob_extras.Knob.OwnProps.md).[modelValue](components_Knob_extras.Knob.OwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[name](components_Knob_extras.Knob.ParentProps.md#name)

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[readonly](components_Knob_extras.Knob.ParentProps.md#readonly)

___

### reverse

• `Optional` **reverse**: `boolean`

Reverses the direction of progress

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[reverse](components_Knob_extras.Knob.ParentProps.md#reverse)

___

### showValue

• `Optional` **showValue**: `boolean`

Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[showValue](components_Knob_extras.Knob.ParentProps.md#showvalue)

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[size](components_Knob_extras.Knob.ParentProps.md#size)

___

### step

• `Optional` **step**: `number`

A number representing steps in the value of the model, while adjusting the knob
Default value: 1

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[step](components_Knob_extras.Knob.ParentProps.md#step)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[tabindex](components_Knob_extras.Knob.ParentProps.md#tabindex)

___

### thickness

• `Optional` **thickness**: `number`

Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size
Default value: 0.2

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[thickness](components_Knob_extras.Knob.ParentProps.md#thickness)

___

### trackColor

• `Optional` **trackColor**: `string`

Color name for the track of the component from the Quasar Color Palette

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[trackColor](components_Knob_extras.Knob.ParentProps.md#trackcolor)

## Methods

### onChange

▸ `Optional` **onChange**(`value`): `void`

Fires at the end of a knob's adjustment and offers the value of the model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | New model value |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[onChange](components_Knob_extras.Knob.ParentProps.md#onchange)

___

### onDragValue

▸ `Optional` **onDragValue**(`value`): `void`

The value of the model while dragging is still in progress

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | New model value |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Knob_extras.Knob.ParentProps.md).[onDragValue](components_Knob_extras.Knob.ParentProps.md#ondragvalue)

___

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |

#### Returns

`void`

#### Inherited from

[OwnProps](components_Knob_extras.Knob.OwnProps.md).[onUpdate:modelValue](components_Knob_extras.Knob.OwnProps.md#onupdate:modelvalue)
