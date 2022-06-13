[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Table.extras](../modules/components_Table_extras.md) / [Table](../modules/components_Table_extras.Table.md) / OwnSlots

# Interface: OwnSlots<T\>

[components/Table.extras](../modules/components_Table_extras.md).[Table](../modules/components_Table_extras.Table.md).OwnSlots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Hierarchy

- **`OwnSlots`**

  ↳ [`Slots`](components_Table_extras.Table.Slots.md)

## Table of contents

### Methods

- [body-cell](components_Table_extras.Table.OwnSlots.md#body-cell)
- [body-cell-context](components_Table_extras.Table.OwnSlots.md#body-cell-context)
- [body-context](components_Table_extras.Table.OwnSlots.md#body-context)
- [body-selection](components_Table_extras.Table.OwnSlots.md#body-selection)
- [header-cell](components_Table_extras.Table.OwnSlots.md#header-cell)
- [header-menu-append](components_Table_extras.Table.OwnSlots.md#header-menu-append)
- [header-menu-prepend](components_Table_extras.Table.OwnSlots.md#header-menu-prepend)
- [header-selection](components_Table_extras.Table.OwnSlots.md#header-selection)
- [steady-bottom](components_Table_extras.Table.OwnSlots.md#steady-bottom)

## Methods

### body-cell

▸ `Readonly` **body-cell**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body cell slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyCellSlotData`](components_Table_extras.Table.BodyCellSlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### body-cell-context

▸ `Readonly` **body-cell-context**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body cell context slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodyCellSlotData`](components_Table_extras.Table.BodyCellSlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### body-context

▸ `Readonly` **body-context**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodySlotData`](components_Table_extras.Table.BodySlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### body-selection

▸ `Readonly` **body-selection**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Body selection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`BodySlotData`](components_Table_extras.Table.BodySlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### header-cell

▸ `Readonly` **header-cell**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header cell slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`HeaderCellSlotData`](components_Table_extras.Table.HeaderCellSlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### header-menu-append

▸ `Readonly` **header-menu-append**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header menu append slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### header-menu-prepend

▸ `Readonly` **header-menu-prepend**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header menu prepend slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### header-selection

▸ `Readonly` **header-selection**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Header selection slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

___

### steady-bottom

▸ `Readonly` **steady-bottom**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Steady bottom slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`MultiSelectData`](components_Table_extras.Table.MultiSelectData.md) | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.
