[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Knob.extras](../modules/components_Knob_extras.md) / KnobProps

# Interface: KnobProps

[components/Knob.extras](../modules/components_Knob_extras.md).KnobProps

## Hierarchy

- [`KnobParentProps`](components_Knob_extras.KnobParentProps.md)

- [`KnobOwnProps`](components_Knob_extras.KnobOwnProps.md)

  ↳ **`KnobProps`**

## Table of contents

### Properties

- [angle](components_Knob_extras.KnobProps.md#angle)
- [centerColor](components_Knob_extras.KnobProps.md#centercolor)
- [color](components_Knob_extras.KnobProps.md#color)
- [disable](components_Knob_extras.KnobProps.md#disable)
- [fontSize](components_Knob_extras.KnobProps.md#fontsize)
- [inline](components_Knob_extras.KnobProps.md#inline)
- [innerMax](components_Knob_extras.KnobProps.md#innermax)
- [innerMin](components_Knob_extras.KnobProps.md#innermin)
- [instantFeedback](components_Knob_extras.KnobProps.md#instantfeedback)
- [max](components_Knob_extras.KnobProps.md#max)
- [min](components_Knob_extras.KnobProps.md#min)
- [modelValue](components_Knob_extras.KnobProps.md#modelvalue)
- [name](components_Knob_extras.KnobProps.md#name)
- [readonly](components_Knob_extras.KnobProps.md#readonly)
- [reverse](components_Knob_extras.KnobProps.md#reverse)
- [showValue](components_Knob_extras.KnobProps.md#showvalue)
- [size](components_Knob_extras.KnobProps.md#size)
- [step](components_Knob_extras.KnobProps.md#step)
- [tabindex](components_Knob_extras.KnobProps.md#tabindex)
- [thickness](components_Knob_extras.KnobProps.md#thickness)
- [trackColor](components_Knob_extras.KnobProps.md#trackcolor)

### Methods

- [onChange](components_Knob_extras.KnobProps.md#onchange)
- [onDragValue](components_Knob_extras.KnobProps.md#ondragvalue)
- [onUpdate:modelValue](components_Knob_extras.KnobProps.md#onupdate:modelvalue)

## Properties

### angle

• `Optional` **angle**: `number`

Angle to rotate progress arc by

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[angle](components_Knob_extras.KnobParentProps.md#angle)

___

### centerColor

• `Optional` **centerColor**: `string`

Color name for the center part of the component from the Quasar Color Palette

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[centerColor](components_Knob_extras.KnobParentProps.md#centercolor)

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[color](components_Knob_extras.KnobParentProps.md#color)

___

### disable

• `Optional` `Readonly` **disable**: `booleanU`

#### Inherited from

[KnobOwnProps](components_Knob_extras.KnobOwnProps.md).[disable](components_Knob_extras.KnobOwnProps.md#disable)

___

### fontSize

• `Optional` **fontSize**: `string`

Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size
Default value: 0.25em

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[fontSize](components_Knob_extras.KnobParentProps.md#fontsize)

___

### inline

• `Optional` `Readonly` **inline**: `booleanU`

#### Inherited from

[KnobOwnProps](components_Knob_extras.KnobOwnProps.md).[inline](components_Knob_extras.KnobOwnProps.md#inline)

___

### innerMax

• `Optional` **innerMax**: `number`

Inner maximum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be lower or equal to 'max' prop; Defaults to 'max' prop

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[innerMax](components_Knob_extras.KnobParentProps.md#innermax)

___

### innerMin

• `Optional` **innerMin**: `number`

Inner minimum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be higher or equal to 'min' prop; Defaults to 'min' prop

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[innerMin](components_Knob_extras.KnobParentProps.md#innermin)

___

### instantFeedback

• `Optional` **instantFeedback**: `boolean`

No animation when model changes

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[instantFeedback](components_Knob_extras.KnobParentProps.md#instantfeedback)

___

### max

• `Optional` **max**: `number`

The maximum value that the model (the knob value) should go to

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[max](components_Knob_extras.KnobParentProps.md#max)

___

### min

• `Optional` **min**: `number`

The minimum value that the model (the knob value) should start at

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[min](components_Knob_extras.KnobParentProps.md#min)

___

### modelValue

• `Readonly` **modelValue**: `number`

#### Inherited from

[KnobOwnProps](components_Knob_extras.KnobOwnProps.md).[modelValue](components_Knob_extras.KnobOwnProps.md#modelvalue)

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[name](components_Knob_extras.KnobParentProps.md#name)

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[readonly](components_Knob_extras.KnobParentProps.md#readonly)

___

### reverse

• `Optional` **reverse**: `boolean`

Reverses the direction of progress

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[reverse](components_Knob_extras.KnobParentProps.md#reverse)

___

### showValue

• `Optional` **showValue**: `boolean`

Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[showValue](components_Knob_extras.KnobParentProps.md#showvalue)

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[size](components_Knob_extras.KnobParentProps.md#size)

___

### step

• `Optional` **step**: `number`

A number representing steps in the value of the model, while adjusting the knob
Default value: 1

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[step](components_Knob_extras.KnobParentProps.md#step)

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[tabindex](components_Knob_extras.KnobParentProps.md#tabindex)

___

### thickness

• `Optional` **thickness**: `number`

Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size
Default value: 0.2

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[thickness](components_Knob_extras.KnobParentProps.md#thickness)

___

### trackColor

• `Optional` **trackColor**: `string`

Color name for the track of the component from the Quasar Color Palette

#### Inherited from

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[trackColor](components_Knob_extras.KnobParentProps.md#trackcolor)

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

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[onChange](components_Knob_extras.KnobParentProps.md#onchange)

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

[KnobParentProps](components_Knob_extras.KnobParentProps.md).[onDragValue](components_Knob_extras.KnobParentProps.md#ondragvalue)

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

[KnobOwnProps](components_Knob_extras.KnobOwnProps.md).[onUpdate:modelValue](components_Knob_extras.KnobOwnProps.md#onupdate:modelvalue)
