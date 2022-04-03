[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Knob.extras](../modules/components_Knob_extras.md) / KnobParentProps

# Interface: KnobParentProps

[components/Knob.extras](../modules/components_Knob_extras.md).KnobParentProps

## Hierarchy

- `Omit`<`QKnobProps`, ``"disable"`` \| ``"modelValue"`` \| ``"onUpdate:modelValue"``\>

  ↳ **`KnobParentProps`**

  ↳↳ [`KnobProps`](components_Knob_extras.KnobProps.md)

## Table of contents

### Properties

- [angle](components_Knob_extras.KnobParentProps.md#angle)
- [centerColor](components_Knob_extras.KnobParentProps.md#centercolor)
- [color](components_Knob_extras.KnobParentProps.md#color)
- [fontSize](components_Knob_extras.KnobParentProps.md#fontsize)
- [innerMax](components_Knob_extras.KnobParentProps.md#innermax)
- [innerMin](components_Knob_extras.KnobParentProps.md#innermin)
- [instantFeedback](components_Knob_extras.KnobParentProps.md#instantfeedback)
- [max](components_Knob_extras.KnobParentProps.md#max)
- [min](components_Knob_extras.KnobParentProps.md#min)
- [name](components_Knob_extras.KnobParentProps.md#name)
- [readonly](components_Knob_extras.KnobParentProps.md#readonly)
- [reverse](components_Knob_extras.KnobParentProps.md#reverse)
- [showValue](components_Knob_extras.KnobParentProps.md#showvalue)
- [size](components_Knob_extras.KnobParentProps.md#size)
- [step](components_Knob_extras.KnobParentProps.md#step)
- [tabindex](components_Knob_extras.KnobParentProps.md#tabindex)
- [thickness](components_Knob_extras.KnobParentProps.md#thickness)
- [trackColor](components_Knob_extras.KnobParentProps.md#trackcolor)

### Methods

- [onChange](components_Knob_extras.KnobParentProps.md#onchange)
- [onDragValue](components_Knob_extras.KnobParentProps.md#ondragvalue)

## Properties

### angle

• `Optional` **angle**: `number`

Angle to rotate progress arc by

#### Inherited from

Omit.angle

___

### centerColor

• `Optional` **centerColor**: `string`

Color name for the center part of the component from the Quasar Color Palette

#### Inherited from

Omit.centerColor

___

### color

• `Optional` **color**: `string`

Color name for component from the Quasar Color Palette

#### Inherited from

Omit.color

___

### fontSize

• `Optional` **fontSize**: `string`

Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size
Default value: 0.25em

#### Inherited from

Omit.fontSize

___

### innerMax

• `Optional` **innerMax**: `number`

Inner maximum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be lower or equal to 'max' prop; Defaults to 'max' prop

#### Inherited from

Omit.innerMax

___

### innerMin

• `Optional` **innerMin**: `number`

Inner minimum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be higher or equal to 'min' prop; Defaults to 'min' prop

#### Inherited from

Omit.innerMin

___

### instantFeedback

• `Optional` **instantFeedback**: `boolean`

No animation when model changes

#### Inherited from

Omit.instantFeedback

___

### max

• `Optional` **max**: `number`

The maximum value that the model (the knob value) should go to

#### Inherited from

Omit.max

___

### min

• `Optional` **min**: `number`

The minimum value that the model (the knob value) should start at

#### Inherited from

Omit.min

___

### name

• `Optional` **name**: `string`

Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL

#### Inherited from

Omit.name

___

### readonly

• `Optional` **readonly**: `boolean`

Put component in readonly mode

#### Inherited from

Omit.readonly

___

### reverse

• `Optional` **reverse**: `boolean`

Reverses the direction of progress

#### Inherited from

Omit.reverse

___

### showValue

• `Optional` **showValue**: `boolean`

Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component

#### Inherited from

Omit.showValue

___

### size

• `Optional` **size**: `string`

Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)

#### Inherited from

Omit.size

___

### step

• `Optional` **step**: `number`

A number representing steps in the value of the model, while adjusting the knob
Default value: 1

#### Inherited from

Omit.step

___

### tabindex

• `Optional` **tabindex**: `string` \| `number`

Tabindex HTML attribute value

#### Inherited from

Omit.tabindex

___

### thickness

• `Optional` **thickness**: `number`

Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size
Default value: 0.2

#### Inherited from

Omit.thickness

___

### trackColor

• `Optional` **trackColor**: `string`

Color name for the track of the component from the Quasar Color Palette

#### Inherited from

Omit.trackColor

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

Omit.onChange

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

Omit.onDragValue
