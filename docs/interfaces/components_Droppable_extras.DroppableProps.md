[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Droppable.extras](../modules/components_Droppable_extras.md) / DroppableProps

# Interface: DroppableProps

[components/Droppable.extras](../modules/components_Droppable_extras.md).DroppableProps

## Hierarchy

- [`DroppableParentProps`](../modules/components_Droppable_extras.md#droppableparentprops)

- [`DroppableOwnProps`](components_Droppable_extras.DroppableOwnProps.md)

  ↳ **`DroppableProps`**

## Table of contents

### Properties

- [itemComponentData](components_Droppable_extras.DroppableProps.md#itemcomponentdata)
- [itemTag](components_Droppable_extras.DroppableProps.md#itemtag)
- [move](components_Droppable_extras.DroppableProps.md#move)

### Methods

- [onDropped](components_Droppable_extras.DroppableProps.md#ondropped)
- [onUpdate:modelValue](components_Droppable_extras.DroppableProps.md#onupdate:modelvalue)

## Properties

### itemComponentData

• `Optional` `Readonly` **itemComponentData**: `objectU`

#### Inherited from

DroppableParentProps.itemComponentData

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

## Methods

### onDropped

▸ `Optional` `Readonly` **onDropped**(`item`, `group`): `void`

Emits "dropped" event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `object` | Item. |
| `group` | `string` | Group. |

#### Returns

`void`

#### Inherited from

DroppableParentProps.onDropped

___

### onUpdate:modelValue

▸ `Optional` `Readonly` **onUpdate:modelValue**(`value`): `void`

Emits model value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Value. |

#### Returns

`void`

#### Inherited from

DroppableParentProps.onUpdate:modelValue
