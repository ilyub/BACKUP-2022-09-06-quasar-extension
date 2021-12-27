[Quasar Framework](../index.md) / [Exports](../modules.md) / components/Sortable.extras

# Module: components/Sortable.extras

## Table of contents

### Interfaces

- [Elem](../interfaces/components_Sortable_extras.Elem.md)
- [MoveData](../interfaces/components_Sortable_extras.MoveData.md)
- [SortableSettings](../interfaces/components_Sortable_extras.SortableSettings.md)

### Type aliases

- [Elems](components_Sortable_extras.md#elems)
- [InjectSortableSettings](components_Sortable_extras.md#injectsortablesettings)
- [Move](components_Sortable_extras.md#move)

### Variables

- [injectSortableSettings](components_Sortable_extras.md#injectsortablesettings)

### Functions

- [buildElements](components_Sortable_extras.md#buildelements)
- [defaultSortableSettings](components_Sortable_extras.md#defaultsortablesettings)
- [isElem](components_Sortable_extras.md#iselem)
- [isElems](components_Sortable_extras.md#iselems)
- [isHtmlElement](components_Sortable_extras.md#ishtmlelement)
- [isMove](components_Sortable_extras.md#ismove)
- [isMoveData](components_Sortable_extras.md#ismovedata)
- [isMoveU](components_Sortable_extras.md#ismoveu)

## Type aliases

### Elems

Ƭ **Elems**: readonly [`Elem`](../interfaces/components_Sortable_extras.Elem.md)[]

___

### InjectSortableSettings

Ƭ **InjectSortableSettings**: [`ComputedInjectionKey`](components_api.md#computedinjectionkey)<[`SortableSettings`](../interfaces/components_Sortable_extras.SortableSettings.md)\>

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

## Variables

### injectSortableSettings

• **injectSortableSettings**: [`InjectSortableSettings`](components_Sortable_extras.md#injectsortablesettings)

## Functions

### buildElements

▸ **buildElements**(`items`, `group`, `key`): [`Elems`](components_Sortable_extras.md#elems)

Builds vuedraggable elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | readonly `Readonly`<`IndexedObject`<`unknown`\>\>[] | Items. |
| `group` | `string` | Group. |
| `key` | `string` | Key. |

#### Returns

[`Elems`](components_Sortable_extras.md#elems)

Elements.

___

### defaultSortableSettings

▸ **defaultSortableSettings**(): [`SortableSettings`](../interfaces/components_Sortable_extras.SortableSettings.md)

Returns default settings.

#### Returns

[`SortableSettings`](../interfaces/components_Sortable_extras.SortableSettings.md)

Default settings.

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
