[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Select.extras](../modules/components_Select_extras.md) / [Select](../modules/components_Select_extras.Select.md) / ParentSlots

# Interface: ParentSlots

[components/Select.extras](../modules/components_Select_extras.md).[Select](../modules/components_Select_extras.Select.md).ParentSlots

## Hierarchy

- `QSelectSlots`

  ↳ **`ParentSlots`**

  ↳↳ [`Slots`](components_Select_extras.Select.Slots.md)

## Table of contents

### Methods

- [after](components_Select_extras.Select.ParentSlots.md#after)
- [after-options](components_Select_extras.Select.ParentSlots.md#after-options)
- [append](components_Select_extras.Select.ParentSlots.md#append)
- [before](components_Select_extras.Select.ParentSlots.md#before)
- [before-options](components_Select_extras.Select.ParentSlots.md#before-options)
- [counter](components_Select_extras.Select.ParentSlots.md#counter)
- [default](components_Select_extras.Select.ParentSlots.md#default)
- [error](components_Select_extras.Select.ParentSlots.md#error)
- [hint](components_Select_extras.Select.ParentSlots.md#hint)
- [label](components_Select_extras.Select.ParentSlots.md#label)
- [loading](components_Select_extras.Select.ParentSlots.md#loading)
- [no-option](components_Select_extras.Select.ParentSlots.md#no-option)
- [option](components_Select_extras.Select.ParentSlots.md#option)
- [prepend](components_Select_extras.Select.ParentSlots.md#prepend)
- [selected](components_Select_extras.Select.ParentSlots.md#selected)
- [selected-item](components_Select_extras.Select.ParentSlots.md#selected-item)

## Methods

### after

▸ **after**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Append outer field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.after

___

### after-options

▸ **after-options**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Template slot for the elements that should be rendered after the list of options

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.after-options

___

### append

▸ **append**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Append to inner field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.append

___

### before

▸ **before**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Prepend outer field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.before

___

### before-options

▸ **before-options**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Template slot for the elements that should be rendered before the list of options

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.before-options

___

### counter

▸ **counter**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for counter text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.counter

___

### default

▸ **default**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Field main content

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.default

___

### error

▸ **error**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for errors; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.error

___

### hint

▸ **hint**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for hint text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.hint

___

### label

▸ **label**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for label; Used only if 'label-slot' prop is set or the 'label' prop is set; When it is used the text in the 'label' prop is ignored

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.label

___

### loading

▸ **loading**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Override default spinner when component is in loading mode; Suggestion: spinners

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.loading

___

### no-option

▸ **no-option**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

What should the menu display after filtering options and none are left to be displayed; Suggestion: <div>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.inputValue` | `string` | Input textfield value, if any (not QSelect model) |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.no-option

___

### option

▸ **option**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Customize how options are rendered; Suggestion: QItem

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.focused` | `boolean` | Is option focused? |
| `scope.index` | `number` | Option index |
| `scope.itemProps` | `any` | Computed properties passed down to QItem |
| `scope.opt` | `any` | Option -- its value is taken from 'options' prop |
| `scope.selected` | `boolean` | Is option selected? |
| `scope.setOptionIndex` | (`index`: `number`) => `void` | - |
| `scope.toggleOption` | (`opt`: `any`) => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.option

___

### prepend

▸ **prepend**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Prepend inner field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.prepend

___

### selected

▸ **selected**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Override default selection slot; Suggestion: QChip

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.selected

___

### selected-item

▸ **selected-item**(`scope`): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Override default selection slot; Suggestion: QChip

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Object` |  |
| `scope.index` | `number` | Selection index |
| `scope.opt` | `any` | Selected option -- its value is taken from model |
| `scope.selected` | `boolean` | Always true -- passed down as prop to QItem (when using QItem) |
| `scope.tabindex` | `number` | Tabindex HTML attribute value associated with respective option |
| `scope.removeAtIndex` | (`index`: `number`) => `void` | - |
| `scope.toggleOption` | (`opt`: `any`) => `void` | - |

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

QSelectSlots.selected-item
