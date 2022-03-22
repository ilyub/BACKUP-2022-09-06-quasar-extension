[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Droppable.extras](../modules/components_Droppable_extras.md) / DroppableProps

# Interface: DroppableProps

[components/Droppable.extras](../modules/components_Droppable_extras.md).DroppableProps

## Hierarchy

- [`DroppableParentProps`](../modules/components_Droppable_extras.md#droppableparentprops)

- [`DroppableOwnProps`](components_Droppable_extras.DroppableOwnProps.md)

  ↳ **`DroppableProps`**

## Table of contents

### Properties

- [itemClass](components_Droppable_extras.DroppableProps.md#itemclass)
- [itemTag](components_Droppable_extras.DroppableProps.md#itemtag)
- [move](components_Droppable_extras.DroppableProps.md#move)
- [onDropped](components_Droppable_extras.DroppableProps.md#ondropped)
- [onItemClick](components_Droppable_extras.DroppableProps.md#onitemclick)
- [onUpdate:modelValue](components_Droppable_extras.DroppableProps.md#onupdate:modelvalue)
- [pull](components_Droppable_extras.DroppableProps.md#pull)
- [put](components_Droppable_extras.DroppableProps.md#put)
- [sort](components_Droppable_extras.DroppableProps.md#sort)

## Properties

### itemClass

• `Optional` `Readonly` **itemClass**: `stringU`

#### Inherited from

DroppableParentProps.itemClass

___

### itemTag

• `Optional` `Readonly` **itemTag**: `unknown`

#### Inherited from

DroppableParentProps.itemTag

___

### move

• `Optional` `Readonly` **move**: [`Move`](components_Sortable_extras.Move.md)

#### Inherited from

DroppableParentProps.move

___

### onDropped

• `Optional` `Readonly` **onDropped**: (`item`: `object`, `group`: `string`) => `void`

#### Type declaration

▸ (`item`, `group`): `void`

Emits "dropped" event.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `object` | Item. |
| `group` | `string` | Group. |

##### Returns

`void`

#### Inherited from

DroppableParentProps.onDropped

___

### onItemClick

• `Optional` `Readonly` **onItemClick**: [`ItemClickEvent`](components_Sortable_extras.ItemClickEvent.md)<`object`\>

#### Inherited from

DroppableParentProps.onItemClick

___

### onUpdate:modelValue

• `Optional` `Readonly` **onUpdate:modelValue**: (`value`: readonly `object`[]) => `void`

#### Type declaration

▸ (`value`): `void`

Emits model value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | readonly `object`[] | Value. |

##### Returns

`void`

#### Inherited from

DroppableParentProps.onUpdate:modelValue

___

### pull

• `Optional` `Readonly` **pull**: `boolean`

#### Inherited from

DroppableParentProps.pull

___

### put

• `Optional` `Readonly` **put**: `boolean`

#### Inherited from

DroppableParentProps.put

___

### sort

• `Optional` `Readonly` **sort**: `boolean`

#### Inherited from

DroppableParentProps.sort
