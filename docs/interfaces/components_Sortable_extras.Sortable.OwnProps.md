[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Sortable.extras](../modules/components_Sortable_extras.md) / [Sortable](../modules/components_Sortable_extras.Sortable.md) / OwnProps

# Interface: OwnProps<T, D\>

[components/Sortable.extras](../modules/components_Sortable_extras.md).[Sortable](../modules/components_Sortable_extras.Sortable.md).OwnProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |
| `D` | extends `object` = `object` |

## Hierarchy

- **`OwnProps`**

  ↳ [`Props`](components_Sortable_extras.Sortable.Props.md)

## Table of contents

### Properties

- [group](components_Sortable_extras.Sortable.OwnProps.md#group)
- [itemClass](components_Sortable_extras.Sortable.OwnProps.md#itemclass)
- [itemKey](components_Sortable_extras.Sortable.OwnProps.md#itemkey)
- [itemTag](components_Sortable_extras.Sortable.OwnProps.md#itemtag)
- [modelValue](components_Sortable_extras.Sortable.OwnProps.md#modelvalue)
- [move](components_Sortable_extras.Sortable.OwnProps.md#move)
- [onDropped](components_Sortable_extras.Sortable.OwnProps.md#ondropped)
- [onItemClick](components_Sortable_extras.Sortable.OwnProps.md#onitemclick)
- [onUpdate:modelValue](components_Sortable_extras.Sortable.OwnProps.md#onupdate:modelvalue)
- [pull](components_Sortable_extras.Sortable.OwnProps.md#pull)
- [put](components_Sortable_extras.Sortable.OwnProps.md#put)
- [sort](components_Sortable_extras.Sortable.OwnProps.md#sort)

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

• `Optional` `Readonly` **move**: [`Move`](components_Sortable_extras.Sortable.Move.md)

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

• `Optional` `Readonly` **pull**: `booleanU`

___

### put

• `Optional` `Readonly` **put**: `booleanU`

___

### sort

• `Optional` `Readonly` **sort**: `booleanU`
