[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Droppable.extras](../modules/components_Droppable_extras.md) / [Droppable](../modules/components_Droppable_extras.Droppable.md) / ParentProps

# Interface: ParentProps<T, D\>

[components/Droppable.extras](../modules/components_Droppable_extras.md).[Droppable](../modules/components_Droppable_extras.Droppable.md).ParentProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |
| `D` | extends `object` = `object` |

## Hierarchy

- `Omit`<[`Props`](components_Sortable_extras.Sortable.Props.md)<`T`, `D`\>, ``"group"`` \| ``"itemKey"`` \| ``"modelValue"``\>

  ↳ **`ParentProps`**

  ↳↳ [`Props`](components_Droppable_extras.Droppable.Props.md)

## Table of contents

### Properties

- [animation](components_Droppable_extras.Droppable.ParentProps.md#animation)
- [dataGroup](components_Droppable_extras.Droppable.ParentProps.md#datagroup)
- [disabled](components_Droppable_extras.Droppable.ParentProps.md#disabled)
- [ghostClass](components_Droppable_extras.Droppable.ParentProps.md#ghostclass)
- [itemClass](components_Droppable_extras.Droppable.ParentProps.md#itemclass)
- [itemTag](components_Droppable_extras.Droppable.ParentProps.md#itemtag)
- [move](components_Droppable_extras.Droppable.ParentProps.md#move)
- [onDropped](components_Droppable_extras.Droppable.ParentProps.md#ondropped)
- [onItemClick](components_Droppable_extras.Droppable.ParentProps.md#onitemclick)
- [onUpdate:modelValue](components_Droppable_extras.Droppable.ParentProps.md#onupdate:modelvalue)
- [pull](components_Droppable_extras.Droppable.ParentProps.md#pull)
- [put](components_Droppable_extras.Droppable.ParentProps.md#put)
- [sort](components_Droppable_extras.Droppable.ParentProps.md#sort)
- [tag](components_Droppable_extras.Droppable.ParentProps.md#tag)

## Properties

### animation

• `Optional` `Readonly` **animation**: `numberU`

#### Inherited from

Omit.animation

___

### dataGroup

• `Optional` `Readonly` **dataGroup**: `stringU`

#### Inherited from

Omit.dataGroup

___

### disabled

• `Optional` `Readonly` **disabled**: `booleanU`

#### Inherited from

Omit.disabled

___

### ghostClass

• `Optional` `Readonly` **ghostClass**: `stringU`

#### Inherited from

Omit.ghostClass

___

### itemClass

• `Optional` `Readonly` **itemClass**: `stringU`

#### Inherited from

Omit.itemClass

___

### itemTag

• `Optional` `Readonly` **itemTag**: `unknown`

#### Inherited from

Omit.itemTag

___

### move

• `Optional` `Readonly` **move**: [`Move`](components_Sortable_extras.Sortable.Move.md)

#### Inherited from

Omit.move

___

### onDropped

• `Optional` `Readonly` **onDropped**: (`item`: `D`, `group`: `string`) => `void`

#### Type declaration

▸ (`item`, `group`): `void`

Dropped event.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `D` | Item. |
| `group` | `string` | Group. |

##### Returns

`void`

#### Inherited from

Omit.onDropped

___

### onItemClick

• `Optional` `Readonly` **onItemClick**: (`item`: `T`) => `void`

#### Type declaration

▸ (`item`): `void`

Item click event.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | Item. |

##### Returns

`void`

#### Inherited from

Omit.onItemClick

___

### onUpdate:modelValue

• `Optional` `Readonly` **onUpdate:modelValue**: (`value`: readonly `T`[]) => `void`

#### Type declaration

▸ (`value`): `void`

Emits model value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | readonly `T`[] | Value. |

##### Returns

`void`

#### Inherited from

Omit.onUpdate:modelValue

___

### pull

• `Optional` `Readonly` **pull**: `booleanU`

#### Inherited from

Omit.pull

___

### put

• `Optional` `Readonly` **put**: `booleanU`

#### Inherited from

Omit.put

___

### sort

• `Optional` `Readonly` **sort**: `booleanU`

#### Inherited from

Omit.sort

___

### tag

• `Optional` `Readonly` **tag**: `stringU`

#### Inherited from

Omit.tag
