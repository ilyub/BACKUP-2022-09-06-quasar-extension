[Quasar Framework](../index.md) / [Exports](../modules.md) / components/XSortable.extras

# Module: components/XSortable.extras

## Table of contents

### Interfaces

- [Elem](../interfaces/components_XSortable_extras.Elem.md)
- [MoveData](../interfaces/components_XSortable_extras.MoveData.md)
- [SortableSettings](../interfaces/components_XSortable_extras.SortableSettings.md)

### Type aliases

- [Elems](components_XSortable_extras.md#elems)
- [Move](components_XSortable_extras.md#move)

### Functions

- [buildElements](components_XSortable_extras.md#buildelements)
- [injectSortableSettings](components_XSortable_extras.md#injectsortablesettings)
- [isElem](components_XSortable_extras.md#iselem)
- [isElems](components_XSortable_extras.md#iselems)
- [isHtmlElement](components_XSortable_extras.md#ishtmlelement)
- [isMove](components_XSortable_extras.md#ismove)
- [isMoveData](components_XSortable_extras.md#ismovedata)
- [isMoveU](components_XSortable_extras.md#ismoveu)
- [provideSortableSettings](components_XSortable_extras.md#providesortablesettings)
- [testSortableSettings](components_XSortable_extras.md#testsortablesettings)

## Type aliases

### Elems

Ƭ **Elems**: readonly [`Elem`](../interfaces/components_XSortable_extras.Elem.md)[]

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

▸ **buildElements**(`items`, `group`, `key`): [`Elems`](components_XSortable_extras.md#elems)

Builds vuedraggable elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | readonly `object`[] | Items. |
| `group` | `string` | Group. |
| `key` | `string` | Key. |

#### Returns

[`Elems`](components_XSortable_extras.md#elems)

Elements.

___

### injectSortableSettings

▸ **injectSortableSettings**(): `ComputedRef`<[`SortableSettings`](../interfaces/components_XSortable_extras.SortableSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`SortableSettings`](../interfaces/components_XSortable_extras.SortableSettings.md)\>

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
| `settings` | () => [`SortableSettings`](../interfaces/components_XSortable_extras.SortableSettings.md) | Settings. |

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
| `settings` | [`SortableSettings`](../interfaces/components_XSortable_extras.SortableSettings.md) | Settings. |

#### Returns

`void`
