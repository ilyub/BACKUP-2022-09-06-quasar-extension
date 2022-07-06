[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / [Table](../modules/components_Table_extras.Table.md) / Slots

# Interface: Slots<T\>

[components/Table.extras](../modules/components_Table_extras.md).[Table](../modules/components_Table_extras.Table.md).Slots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- [`ParentSlots`](components_Table_extras.Table.ParentSlots.md)

- [`OwnSlots`](components_Table_extras.Table.OwnSlots.md)<`T`\>

  ↳ **`Slots`**

## Table of contents

### Properties

- [body-cell](components_Table_extras.Table.Slots.md#body-cell)
- [body-cell-context](components_Table_extras.Table.Slots.md#body-cell-context)
- [body-context](components_Table_extras.Table.Slots.md#body-context)
- [body-selection](components_Table_extras.Table.Slots.md#body-selection)
- [header-cell](components_Table_extras.Table.Slots.md#header-cell)
- [header-menu-append](components_Table_extras.Table.Slots.md#header-menu-append)
- [header-menu-prepend](components_Table_extras.Table.Slots.md#header-menu-prepend)
- [header-selection](components_Table_extras.Table.Slots.md#header-selection)
- [steady-bottom](components_Table_extras.Table.Slots.md#steady-bottom)

## Properties

### body-cell

• `Readonly` **body-cell**: (`scope`: [`BodyCellSlotData`](components_Table_extras.Table.BodyCellSlotData.md)<`T`\>) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body cell slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyCellSlotData`](components_Table_extras.Table.BodyCellSlotData.md)<`T`\> | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[body-cell](components_Table_extras.Table.OwnSlots.md#body-cell)

___

### body-cell-context

• `Readonly` **body-cell-context**: (`scope`: [`BodyCellSlotData`](components_Table_extras.Table.BodyCellSlotData.md)<`T`\>) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body cell context slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyCellSlotData`](components_Table_extras.Table.BodyCellSlotData.md)<`T`\> | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[body-cell-context](components_Table_extras.Table.OwnSlots.md#body-cell-context)

___

### body-context

• `Readonly` **body-context**: (`scope`: [`BodySlotData`](components_Table_extras.Table.BodySlotData.md)<`T`\>) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body context.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodySlotData`](components_Table_extras.Table.BodySlotData.md)<`T`\> | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[body-context](components_Table_extras.Table.OwnSlots.md#body-context)

___

### body-selection

• `Readonly` **body-selection**: (`scope`: [`BodySlotData`](components_Table_extras.Table.BodySlotData.md)<`T`\>) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body selection.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodySlotData`](components_Table_extras.Table.BodySlotData.md)<`T`\> | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[body-selection](components_Table_extras.Table.OwnSlots.md#body-selection)

___

### header-cell

• `Readonly` **header-cell**: (`scope`: [`HeaderCellSlotData`](components_Table_extras.Table.HeaderCellSlotData.md)<`T`\>) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header cell slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`HeaderCellSlotData`](components_Table_extras.Table.HeaderCellSlotData.md)<`T`\> | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[header-cell](components_Table_extras.Table.OwnSlots.md#header-cell)

___

### header-menu-append

• `Readonly` **header-menu-append**: (`scope`: [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md)) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header menu append slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[header-menu-append](components_Table_extras.Table.OwnSlots.md#header-menu-append)

___

### header-menu-prepend

• `Readonly` **header-menu-prepend**: (`scope`: [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md)) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header menu prepend slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[header-menu-prepend](components_Table_extras.Table.OwnSlots.md#header-menu-prepend)

___

### header-selection

• `Readonly` **header-selection**: (`scope`: [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md)) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header selection slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[header-selection](components_Table_extras.Table.OwnSlots.md#header-selection)

___

### steady-bottom

• `Readonly` **steady-bottom**: (`scope`: [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md)) => [`VNodes`](../modules/components_api_misc.md#vnodes)

#### Type declaration

▸ (`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Steady bottom slot.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

##### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Table_extras.Table.OwnSlots.md).[steady-bottom](components_Table_extras.Table.OwnSlots.md#steady-bottom)
