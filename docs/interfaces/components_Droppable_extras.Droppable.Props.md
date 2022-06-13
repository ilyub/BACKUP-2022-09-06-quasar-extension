[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Droppable.extras](../modules/components_Droppable_extras.md) / [Droppable](../modules/components_Droppable_extras.Droppable.md) / Props

# Interface: Props<T, D\>

[components/Droppable.extras](../modules/components_Droppable_extras.md).[Droppable](../modules/components_Droppable_extras.Droppable.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |
| `D` | extends `object` = `object` |

## Hierarchy

- [`ParentProps`](components_Droppable_extras.Droppable.ParentProps.md)<`T`, `D`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [animation](components_Droppable_extras.Droppable.Props.md#animation)
- [dataGroup](components_Droppable_extras.Droppable.Props.md#datagroup)
- [disabled](components_Droppable_extras.Droppable.Props.md#disabled)
- [ghostClass](components_Droppable_extras.Droppable.Props.md#ghostclass)
- [itemClass](components_Droppable_extras.Droppable.Props.md#itemclass)
- [itemTag](components_Droppable_extras.Droppable.Props.md#itemtag)
- [move](components_Droppable_extras.Droppable.Props.md#move)
- [pull](components_Droppable_extras.Droppable.Props.md#pull)
- [put](components_Droppable_extras.Droppable.Props.md#put)
- [sort](components_Droppable_extras.Droppable.Props.md#sort)
- [tag](components_Droppable_extras.Droppable.Props.md#tag)

### Methods

- [onDropped](components_Droppable_extras.Droppable.Props.md#ondropped)
- [onItemClick](components_Droppable_extras.Droppable.Props.md#onitemclick)
- [onUpdate:modelValue](components_Droppable_extras.Droppable.Props.md#onupdate:modelvalue)

## Properties

### animation

• `Optional` `Readonly` **animation**: `numberU`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[animation](components_Droppable_extras.Droppable.ParentProps.md#animation)

___

### dataGroup

• `Optional` `Readonly` **dataGroup**: `stringU`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[dataGroup](components_Droppable_extras.Droppable.ParentProps.md#datagroup)

___

### disabled

• `Optional` `Readonly` **disabled**: `booleanU`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[disabled](components_Droppable_extras.Droppable.ParentProps.md#disabled)

___

### ghostClass

• `Optional` `Readonly` **ghostClass**: `stringU`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[ghostClass](components_Droppable_extras.Droppable.ParentProps.md#ghostclass)

___

### itemClass

• `Optional` `Readonly` **itemClass**: `stringU`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[itemClass](components_Droppable_extras.Droppable.ParentProps.md#itemclass)

___

### itemTag

• `Optional` `Readonly` **itemTag**: `unknown`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[itemTag](components_Droppable_extras.Droppable.ParentProps.md#itemtag)

___

### move

• `Optional` `Readonly` **move**: [`Move`](components_Sortable_extras.Sortable.Move.md)

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[move](components_Droppable_extras.Droppable.ParentProps.md#move)

___

### pull

• `Optional` `Readonly` **pull**: `booleanU`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[pull](components_Droppable_extras.Droppable.ParentProps.md#pull)

___

### put

• `Optional` `Readonly` **put**: `booleanU`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[put](components_Droppable_extras.Droppable.ParentProps.md#put)

___

### sort

• `Optional` `Readonly` **sort**: `booleanU`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[sort](components_Droppable_extras.Droppable.ParentProps.md#sort)

___

### tag

• `Optional` `Readonly` **tag**: `stringU`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[tag](components_Droppable_extras.Droppable.ParentProps.md#tag)

## Methods

### onDropped

▸ `Optional` `Readonly` **onDropped**(`item`, `group`): `void`

Dropped event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `D` | Item. |
| `group` | `string` | Group. |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[onDropped](components_Droppable_extras.Droppable.ParentProps.md#ondropped)

___

### onItemClick

▸ `Optional` `Readonly` **onItemClick**(`item`): `void`

Item click event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | Item. |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[onItemClick](components_Droppable_extras.Droppable.ParentProps.md#onitemclick)

___

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | readonly `T`[] | Value. |

#### Returns

`void`

#### Inherited from

[ParentProps](components_Droppable_extras.Droppable.ParentProps.md).[onUpdate:modelValue](components_Droppable_extras.Droppable.ParentProps.md#onupdate:modelvalue)
