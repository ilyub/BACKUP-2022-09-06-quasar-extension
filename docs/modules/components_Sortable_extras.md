[Quasar extension](../index.md) / [Exports](../modules.md) / components/Sortable.extras

# Module: components/Sortable.extras

## Table of contents

### Interfaces

- [Elem](../interfaces/components_Sortable_extras.Elem.md)
- [ItemAttrsFn](../interfaces/components_Sortable_extras.ItemAttrsFn.md)
- [ItemClickEvent](../interfaces/components_Sortable_extras.ItemClickEvent.md)
- [ItemSlotData](../interfaces/components_Sortable_extras.ItemSlotData.md)
- [Move](../interfaces/components_Sortable_extras.Move.md)
- [MoveData](../interfaces/components_Sortable_extras.MoveData.md)
- [SortableProps](../interfaces/components_Sortable_extras.SortableProps.md)
- [SortableSettings](../interfaces/components_Sortable_extras.SortableSettings.md)
- [SortableSlots](../interfaces/components_Sortable_extras.SortableSlots.md)

### Type aliases

- [Elems](components_Sortable_extras.md#elems)
- [GlobalSortable](components_Sortable_extras.md#globalsortable)
- [ItemAttrs](components_Sortable_extras.md#itemattrs)

### Functions

- [buildElements](components_Sortable_extras.md#buildelements)
- [injectSortableSettings](components_Sortable_extras.md#injectsortablesettings)
- [isElem](components_Sortable_extras.md#iselem)
- [isElems](components_Sortable_extras.md#iselems)
- [isHtmlElement](components_Sortable_extras.md#ishtmlelement)
- [isItemAttrs](components_Sortable_extras.md#isitemattrs)
- [isItemAttrsFn](components_Sortable_extras.md#isitemattrsfn)
- [isItemAttrsU](components_Sortable_extras.md#isitemattrsu)
- [isItemClickEvent](components_Sortable_extras.md#isitemclickevent)
- [isItemClickEventU](components_Sortable_extras.md#isitemclickeventu)
- [isMove](components_Sortable_extras.md#ismove)
- [isMoveData](components_Sortable_extras.md#ismovedata)
- [isMoveU](components_Sortable_extras.md#ismoveu)
- [provideSortableSettings](components_Sortable_extras.md#providesortablesettings)
- [testSortableSettings](components_Sortable_extras.md#testsortablesettings)

## Type aliases

### Elems

Ƭ **Elems**: readonly [`Elem`](../interfaces/components_Sortable_extras.Elem.md)[]

___

### GlobalSortable

Ƭ **GlobalSortable**<`T`\>: [`GlobalComponent`](../interfaces/components_api.GlobalComponent.md)<[`SortableProps`](../interfaces/components_Sortable_extras.SortableProps.md)<`T`\>, [`SortableSlots`](../interfaces/components_Sortable_extras.SortableSlots.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

___

### ItemAttrs

Ƭ **ItemAttrs**<`T`\>: [`ItemAttrsFn`](../interfaces/components_Sortable_extras.ItemAttrsFn.md)<`T`\> \| `object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Functions

### buildElements

▸ **buildElements**(`items`, `group`, `key`): [`Elems`](components_Sortable_extras.md#elems)

Builds vuedraggable elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `objects` | Items. |
| `group` | `string` | Group. |
| `key` | `string` | Key. |

#### Returns

[`Elems`](components_Sortable_extras.md#elems)

Elements.

___

### injectSortableSettings

▸ **injectSortableSettings**(): `ComputedRef`<[`SortableSettings`](../interfaces/components_Sortable_extras.SortableSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`SortableSettings`](../interfaces/components_Sortable_extras.SortableSettings.md)\>

Settings.

___

### isElem

▸ **isElem**(`value`): value is Elem

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Elem

___

### isElems

▸ **isElems**(`value`): value is readonly Elem[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly Elem[]

___

### isHtmlElement

▸ **isHtmlElement**(`value`): value is HTMLElement

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is HTMLElement

___

### isItemAttrs

▸ **isItemAttrs**(`value`): value is object \| Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is object \| Function

___

### isItemAttrsFn

▸ **isItemAttrsFn**(`value`): value is Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Function

___

### isItemAttrsU

▸ **isItemAttrsU**(`value`): value is undefined \| object \| Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| object \| Function

___

### isItemClickEvent

▸ **isItemClickEvent**(`value`): value is ItemClickEvent<object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is ItemClickEvent<object\>

___

### isItemClickEventU

▸ **isItemClickEventU**(`value`): value is undefined \| ItemClickEvent<object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| ItemClickEvent<object\>

___

### isMove

▸ **isMove**(`value`): value is Move

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Move

___

### isMoveData

▸ **isMoveData**(`value`): value is MoveData

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is MoveData

___

### isMoveU

▸ **isMoveU**(`value`): value is undefined \| Move

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| Move

___

### provideSortableSettings

▸ **provideSortableSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`SortableSettings`](../interfaces/components_Sortable_extras.SortableSettings.md) | Settings. |

#### Returns

`void`

___

### testSortableSettings

▸ **testSortableSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `TypedObject`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`SortableSettings`](../interfaces/components_Sortable_extras.SortableSettings.md) | Settings. |

#### Returns

`void`
