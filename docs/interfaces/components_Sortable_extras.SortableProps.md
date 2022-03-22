[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Sortable.extras](../modules/components_Sortable_extras.md) / SortableProps

# Interface: SortableProps<T\>

[components/Sortable.extras](../modules/components_Sortable_extras.md).SortableProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Table of contents

### Properties

- [group](components_Sortable_extras.SortableProps.md#group)
- [itemClass](components_Sortable_extras.SortableProps.md#itemclass)
- [itemKey](components_Sortable_extras.SortableProps.md#itemkey)
- [itemTag](components_Sortable_extras.SortableProps.md#itemtag)
- [modelValue](components_Sortable_extras.SortableProps.md#modelvalue)
- [move](components_Sortable_extras.SortableProps.md#move)
- [onDropped](components_Sortable_extras.SortableProps.md#ondropped)
- [onItemClick](components_Sortable_extras.SortableProps.md#onitemclick)
- [onUpdate:modelValue](components_Sortable_extras.SortableProps.md#onupdate:modelvalue)
- [pull](components_Sortable_extras.SortableProps.md#pull)
- [put](components_Sortable_extras.SortableProps.md#put)
- [sort](components_Sortable_extras.SortableProps.md#sort)

## Properties

### group

• `Readonly` **group**: `string`

___

### itemClass

• `Optional` `Readonly` **itemClass**: `stringU`

___

### itemKey

• `Readonly` **itemKey**: `string`

___

### itemTag

• `Optional` `Readonly` **itemTag**: `unknown`

___

### modelValue

• `Readonly` **modelValue**: readonly `T`[]

___

### move

• `Optional` `Readonly` **move**: [`Move`](components_Sortable_extras.Move.md)

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

___

### onItemClick

• `Optional` `Readonly` **onItemClick**: [`ItemClickEvent`](components_Sortable_extras.ItemClickEvent.md)<`T`\>

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

___

### pull

• `Optional` `Readonly` **pull**: `boolean`

___

### put

• `Optional` `Readonly` **put**: `boolean`

___

### sort

• `Optional` `Readonly` **sort**: `boolean`
