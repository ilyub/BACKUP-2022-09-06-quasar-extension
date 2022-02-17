[Quasar extension](../index.md) / [Exports](../modules.md) / components/Sortable.extras

# Module: components/Sortable.extras

## Table of contents

### Interfaces

- [Elem](../interfaces/components_Sortable_extras.Elem.md)
- [ItemSlotData](../interfaces/components_Sortable_extras.ItemSlotData.md)
- [MoveData](../interfaces/components_Sortable_extras.MoveData.md)
- [SortableProps](../interfaces/components_Sortable_extras.SortableProps.md)
- [SortableSettings](../interfaces/components_Sortable_extras.SortableSettings.md)
- [SortableSlots](../interfaces/components_Sortable_extras.SortableSlots.md)

### Type aliases

- [Elems](components_Sortable_extras.md#elems)
- [GlobalSortable](components_Sortable_extras.md#globalsortable)
- [Move](components_Sortable_extras.md#move)

### Functions

- [buildElements](components_Sortable_extras.md#buildelements)
- [injectSortableSettings](components_Sortable_extras.md#injectsortablesettings)
- [isElem](components_Sortable_extras.md#iselem)
- [isElems](components_Sortable_extras.md#iselems)
- [isHtmlElement](components_Sortable_extras.md#ishtmlelement)
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

Ƭ **GlobalSortable**: `GlobalComponentConstructor`<[`SortableProps`](../interfaces/components_Sortable_extras.SortableProps.md), [`SortableSlots`](../interfaces/components_Sortable_extras.SortableSlots.md)\>

___

### Move

Ƭ **Move**: (`destId`: `stringU`, `destGroup`: `string`, `sourceId`: `string`, `sourceGroup`: `string`) => `boolean`

#### Type declaration

▸ (`destId`, `destGroup`, `sourceId`, `sourceGroup`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `destId` | `stringU` |
| `destGroup` | `string` |
| `sourceId` | `string` |
| `sourceGroup` | `string` |

##### Returns

`boolean`

## Functions

### buildElements

▸ **buildElements**(`items`, `group`, `key`): [`Elems`](components_Sortable_extras.md#elems)

Builds vuedraggable elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | readonly `object`[] | Items. |
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

▸ `Const` **isElem**(`value`): value is Elem

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Elem

___

### isElems

▸ `Const` **isElems**(`value`): value is readonly Elem[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly Elem[]

___

### isHtmlElement

▸ `Const` **isHtmlElement**(`value`): value is HTMLElement

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is HTMLElement

___

### isMove

▸ `Const` **isMove**(`value`): value is Move

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Move

___

### isMoveData

▸ `Const` **isMoveData**(`value`): value is MoveData

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is MoveData

___

### isMoveU

▸ `Const` **isMoveU**(`value`): value is undefined \| Move

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
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`SortableSettings`](../interfaces/components_Sortable_extras.SortableSettings.md) | Settings. |

#### Returns

`void`
