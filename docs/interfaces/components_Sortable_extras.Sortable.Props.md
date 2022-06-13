[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Sortable.extras](../modules/components_Sortable_extras.md) / [Sortable](../modules/components_Sortable_extras.Sortable.md) / Props

# Interface: Props<T, D\>

[components/Sortable.extras](../modules/components_Sortable_extras.md).[Sortable](../modules/components_Sortable_extras.Sortable.md).Props

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |
| `D` | extends `object` = `object` |

## Hierarchy

- [`ParentProps`](components_Sortable_extras.Sortable.ParentProps.md)

- [`OwnProps`](components_Sortable_extras.Sortable.OwnProps.md)<`T`, `D`\>

  ↳ **`Props`**

## Table of contents

### Properties

- [animation](components_Sortable_extras.Sortable.Props.md#animation)
- [dataGroup](components_Sortable_extras.Sortable.Props.md#datagroup)
- [disabled](components_Sortable_extras.Sortable.Props.md#disabled)
- [ghostClass](components_Sortable_extras.Sortable.Props.md#ghostclass)
- [group](components_Sortable_extras.Sortable.Props.md#group)
- [itemClass](components_Sortable_extras.Sortable.Props.md#itemclass)
- [itemKey](components_Sortable_extras.Sortable.Props.md#itemkey)
- [itemTag](components_Sortable_extras.Sortable.Props.md#itemtag)
- [modelValue](components_Sortable_extras.Sortable.Props.md#modelvalue)
- [move](components_Sortable_extras.Sortable.Props.md#move)
- [pull](components_Sortable_extras.Sortable.Props.md#pull)
- [put](components_Sortable_extras.Sortable.Props.md#put)
- [sort](components_Sortable_extras.Sortable.Props.md#sort)
- [tag](components_Sortable_extras.Sortable.Props.md#tag)

### Methods

- [onDropped](components_Sortable_extras.Sortable.Props.md#ondropped)
- [onItemClick](components_Sortable_extras.Sortable.Props.md#onitemclick)
- [onUpdate:modelValue](components_Sortable_extras.Sortable.Props.md#onupdate:modelvalue)

## Properties

### animation

• `Optional` `Readonly` **animation**: `numberU`

#### Inherited from

[ParentProps](components_Sortable_extras.Sortable.ParentProps.md).[animation](components_Sortable_extras.Sortable.ParentProps.md#animation)

___

### dataGroup

• `Optional` `Readonly` **dataGroup**: `stringU`

#### Inherited from

[ParentProps](components_Sortable_extras.Sortable.ParentProps.md).[dataGroup](components_Sortable_extras.Sortable.ParentProps.md#datagroup)

___

### disabled

• `Optional` `Readonly` **disabled**: `booleanU`

#### Inherited from

[ParentProps](components_Sortable_extras.Sortable.ParentProps.md).[disabled](components_Sortable_extras.Sortable.ParentProps.md#disabled)

___

### ghostClass

• `Optional` `Readonly` **ghostClass**: `stringU`

#### Inherited from

[ParentProps](components_Sortable_extras.Sortable.ParentProps.md).[ghostClass](components_Sortable_extras.Sortable.ParentProps.md#ghostclass)

___

### group

• `Readonly` **group**: `string`

#### Inherited from

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[group](components_Sortable_extras.Sortable.OwnProps.md#group)

___

### itemClass

• `Optional` `Readonly` **itemClass**: `stringU`

#### Inherited from

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[itemClass](components_Sortable_extras.Sortable.OwnProps.md#itemclass)

___

### itemKey

• `Readonly` **itemKey**: `string`

#### Inherited from

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[itemKey](components_Sortable_extras.Sortable.OwnProps.md#itemkey)

___

### itemTag

• `Optional` `Readonly` **itemTag**: `unknown`

#### Inherited from

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[itemTag](components_Sortable_extras.Sortable.OwnProps.md#itemtag)

___

### modelValue

• `Readonly` **modelValue**: readonly `T`[]

#### Inherited from

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[modelValue](components_Sortable_extras.Sortable.OwnProps.md#modelvalue)

___

### move

• `Optional` `Readonly` **move**: [`Move`](components_Sortable_extras.Sortable.Move.md)

#### Inherited from

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[move](components_Sortable_extras.Sortable.OwnProps.md#move)

___

### pull

• `Optional` `Readonly` **pull**: `booleanU`

#### Inherited from

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[pull](components_Sortable_extras.Sortable.OwnProps.md#pull)

___

### put

• `Optional` `Readonly` **put**: `booleanU`

#### Inherited from

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[put](components_Sortable_extras.Sortable.OwnProps.md#put)

___

### sort

• `Optional` `Readonly` **sort**: `booleanU`

#### Inherited from

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[sort](components_Sortable_extras.Sortable.OwnProps.md#sort)

___

### tag

• `Optional` `Readonly` **tag**: `stringU`

#### Inherited from

[ParentProps](components_Sortable_extras.Sortable.ParentProps.md).[tag](components_Sortable_extras.Sortable.ParentProps.md#tag)

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

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[onDropped](components_Sortable_extras.Sortable.OwnProps.md#ondropped)

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

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[onItemClick](components_Sortable_extras.Sortable.OwnProps.md#onitemclick)

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

[OwnProps](components_Sortable_extras.Sortable.OwnProps.md).[onUpdate:modelValue](components_Sortable_extras.Sortable.OwnProps.md#onupdate:modelvalue)
