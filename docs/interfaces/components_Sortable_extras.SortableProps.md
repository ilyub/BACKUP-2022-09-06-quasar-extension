[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Sortable.extras](../modules/components_Sortable_extras.md) / SortableProps

# Interface: SortableProps

[components/Sortable.extras](../modules/components_Sortable_extras.md).SortableProps

## Table of contents

### Properties

- [group](components_Sortable_extras.SortableProps.md#group)
- [itemComponentData](components_Sortable_extras.SortableProps.md#itemcomponentdata)
- [itemKey](components_Sortable_extras.SortableProps.md#itemkey)
- [itemTag](components_Sortable_extras.SortableProps.md#itemtag)
- [modelValue](components_Sortable_extras.SortableProps.md#modelvalue)
- [move](components_Sortable_extras.SortableProps.md#move)

### Methods

- [onDropped](components_Sortable_extras.SortableProps.md#ondropped)
- [onUpdate:modelValue](components_Sortable_extras.SortableProps.md#onupdate:modelvalue)

## Properties

### group

• `Readonly` **group**: `string`

___

### itemComponentData

• `Optional` `Readonly` **itemComponentData**: `objectU`

___

### itemKey

• `Readonly` **itemKey**: `string`

___

### itemTag

• `Optional` `Readonly` **itemTag**: `unknown`

___

### modelValue

• `Readonly` **modelValue**: `objects`

___

### move

• `Optional` `Readonly` **move**: [`Move`](components_Sortable_extras.Move.md)

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
