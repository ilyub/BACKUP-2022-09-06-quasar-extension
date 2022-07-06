[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Sortable.extras](../modules/components_Sortable_extras.md) / [Sortable](../modules/components_Sortable_extras.Sortable.md) / Slots

# Interface: Slots<T\>

[components/Sortable.extras](../modules/components_Sortable_extras.md).[Sortable](../modules/components_Sortable_extras.Sortable.md).Slots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- [`ParentSlots`](components_Sortable_extras.Sortable.ParentSlots.md)

- [`OwnSlots`](components_Sortable_extras.Sortable.OwnSlots.md)<`T`\>

  ↳ **`Slots`**

## Table of contents

### Properties

- [animation](components_Sortable_extras.Sortable.Slots.md#animation)
- [dataGroup](components_Sortable_extras.Sortable.Slots.md#datagroup)
- [disabled](components_Sortable_extras.Sortable.Slots.md#disabled)
- [footer](components_Sortable_extras.Sortable.Slots.md#footer)
- [ghostClass](components_Sortable_extras.Sortable.Slots.md#ghostclass)
- [group](components_Sortable_extras.Sortable.Slots.md#group)
- [header](components_Sortable_extras.Sortable.Slots.md#header)
- [item](components_Sortable_extras.Sortable.Slots.md#item)
- [itemKey](components_Sortable_extras.Sortable.Slots.md#itemkey)
- [modelValue](components_Sortable_extras.Sortable.Slots.md#modelvalue)
- [move](components_Sortable_extras.Sortable.Slots.md#move)
- [sort](components_Sortable_extras.Sortable.Slots.md#sort)
- [tag](components_Sortable_extras.Sortable.Slots.md#tag)

## Properties

### animation

• `Optional` `Readonly` **animation**: `numberU`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[animation](components_Sortable_extras.Sortable.ParentSlots.md#animation)

___

### dataGroup

• `Optional` `Readonly` **dataGroup**: `stringU`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[dataGroup](components_Sortable_extras.Sortable.ParentSlots.md#datagroup)

___

### disabled

• `Optional` `Readonly` **disabled**: `booleanU`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[disabled](components_Sortable_extras.Sortable.ParentSlots.md#disabled)

___

### footer

• `Readonly` **footer**: () => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (): [`VNodes`](../modules/components_api_misc.md#vnodes)

Footer slot.

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Sortable_extras.Sortable.OwnSlots.md).[footer](components_Sortable_extras.Sortable.OwnSlots.md#footer)

___

### ghostClass

• `Optional` `Readonly` **ghostClass**: `stringU`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[ghostClass](components_Sortable_extras.Sortable.ParentSlots.md#ghostclass)

___

### group

• `Optional` `Readonly` **group**: `objectU`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[group](components_Sortable_extras.Sortable.ParentSlots.md#group)

___

### header

• `Readonly` **header**: () => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header slot.

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Sortable_extras.Sortable.OwnSlots.md).[header](components_Sortable_extras.Sortable.OwnSlots.md#header)

___

### item

• `Readonly` **item**: (`data`: [`ItemSlotData`](components_Sortable_extras.Sortable.ItemSlotData.md)<`T`\>) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`data`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Item slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ItemSlotData`](components_Sortable_extras.Sortable.ItemSlotData.md)<`T`\> | Data. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Sortable_extras.Sortable.OwnSlots.md).[item](components_Sortable_extras.Sortable.OwnSlots.md#item)

___

### itemKey

• `Optional` `Readonly` **itemKey**: `stringU`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[itemKey](components_Sortable_extras.Sortable.ParentSlots.md#itemkey)

___

### modelValue

• `Optional` `Readonly` **modelValue**: `unknowns`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[modelValue](components_Sortable_extras.Sortable.ParentSlots.md#modelvalue)

___

### move

• `Optional` `Readonly` **move**: `Function`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[move](components_Sortable_extras.Sortable.ParentSlots.md#move)

___

### sort

• `Optional` `Readonly` **sort**: `booleanU`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[sort](components_Sortable_extras.Sortable.ParentSlots.md#sort)

___

### tag

• `Optional` `Readonly` **tag**: `stringU`

#### Inherited from

[ParentSlots](components_Sortable_extras.Sortable.ParentSlots.md).[tag](components_Sortable_extras.Sortable.ParentSlots.md#tag)
