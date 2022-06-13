[Quasar extension](../index.md) / [Exports](../modules.md) / [test-utils/core](../modules/test_utils_core.md) / DOMWrapper

# Interface: DOMWrapper

[test-utils/core](../modules/test_utils_core.md).DOMWrapper

## Hierarchy

- `DOMWrapper`<`Element`\>

  ↳ **`DOMWrapper`**

## Table of contents

### Properties

- [isDisabled](test_utils_core.DOMWrapper.md#isdisabled)
- [wrapperElement](test_utils_core.DOMWrapper.md#wrapperelement)

### Accessors

- [element](test_utils_core.DOMWrapper.md#element)

### Methods

- [attributes](test_utils_core.DOMWrapper.md#attributes)
- [classes](test_utils_core.DOMWrapper.md#classes)
- [exists](test_utils_core.DOMWrapper.md#exists)
- [find](test_utils_core.DOMWrapper.md#find)
- [findAll](test_utils_core.DOMWrapper.md#findall)
- [findAllComponents](test_utils_core.DOMWrapper.md#findallcomponents)
- [findAllDOMElements](test_utils_core.DOMWrapper.md#findalldomelements)
- [findComponent](test_utils_core.DOMWrapper.md#findcomponent)
- [get](test_utils_core.DOMWrapper.md#get)
- [getComponent](test_utils_core.DOMWrapper.md#getcomponent)
- [getCurrentComponent](test_utils_core.DOMWrapper.md#getcurrentcomponent)
- [getRootNodes](test_utils_core.DOMWrapper.md#getrootnodes)
- [html](test_utils_core.DOMWrapper.md#html)
- [isVisible](test_utils_core.DOMWrapper.md#isvisible)
- [setValue](test_utils_core.DOMWrapper.md#setvalue)
- [text](test_utils_core.DOMWrapper.md#text)
- [trigger](test_utils_core.DOMWrapper.md#trigger)

## Properties

### isDisabled

• `Protected` **isDisabled**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Inherited from

testUtils.DOMWrapper.isDisabled

___

### wrapperElement

• `Protected` `Readonly` **wrapperElement**: `VueNode`<`Element`\>

#### Inherited from

testUtils.DOMWrapper.wrapperElement

## Accessors

### element

• `get` **element**(): `VueNode`<`ElementType`\>

#### Returns

`VueNode`<`ElementType`\>

#### Inherited from

testUtils.DOMWrapper.element

## Methods

### attributes

▸ **attributes**(): `Object`

#### Returns

`Object`

#### Inherited from

testUtils.DOMWrapper.attributes

▸ **attributes**(`key`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| `string`

#### Inherited from

testUtils.DOMWrapper.attributes

___

### classes

▸ **classes**(): `string`[]

#### Returns

`string`[]

#### Inherited from

testUtils.DOMWrapper.classes

▸ **classes**(`className`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | `string` |

#### Returns

`boolean`

#### Inherited from

testUtils.DOMWrapper.classes

___

### exists

▸ **exists**(): `boolean`

#### Returns

`boolean`

#### Inherited from

testUtils.DOMWrapper.exists

___

### find

▸ **find**<`K`\>(`selector`): `DOMWrapper`<`HTMLElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`DOMWrapper`<`HTMLElementTagNameMap`[`K`]\>

#### Inherited from

testUtils.DOMWrapper.find

▸ **find**<`K`\>(`selector`): `DOMWrapper`<`SVGElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`DOMWrapper`<`SVGElementTagNameMap`[`K`]\>

#### Inherited from

testUtils.DOMWrapper.find

▸ **find**<`T`\>(`selector`): `DOMWrapper`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`DOMWrapper`<`T`\>

#### Inherited from

testUtils.DOMWrapper.find

▸ **find**<`T`\>(`selector`): `DOMWrapper`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| `RefSelector` |

#### Returns

`DOMWrapper`<`T`\>

#### Inherited from

testUtils.DOMWrapper.find

___

### findAll

▸ **findAll**<`K`\>(`selector`): `DOMWrapper`<`HTMLElementTagNameMap`[`K`]\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`DOMWrapper`<`HTMLElementTagNameMap`[`K`]\>[]

#### Inherited from

testUtils.DOMWrapper.findAll

▸ **findAll**<`K`\>(`selector`): `DOMWrapper`<`SVGElementTagNameMap`[`K`]\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`DOMWrapper`<`SVGElementTagNameMap`[`K`]\>[]

#### Inherited from

testUtils.DOMWrapper.findAll

▸ **findAll**<`T`\>(`selector`): `DOMWrapper`<`T`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`DOMWrapper`<`T`\>[]

#### Inherited from

testUtils.DOMWrapper.findAll

___

### findAllComponents

▸ **findAllComponents**(`selector`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `any` |

#### Returns

`any`

#### Inherited from

testUtils.DOMWrapper.findAllComponents

___

### findAllDOMElements

▸ `Protected` **findAllDOMElements**(`selector`): `Element`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`Element`[]

#### Inherited from

testUtils.DOMWrapper.findAllDOMElements

___

### findComponent

▸ **findComponent**<`T`\>(`selector`): [`WrapperLike`](test_utils_core.WrapperLike.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

[`WrapperLike`](test_utils_core.WrapperLike.md)

#### Inherited from

testUtils.DOMWrapper.findComponent

▸ **findComponent**<`T`\>(`selector`): `VueWrapper`<`InstanceType`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DefinedComponent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| `RefSelector` \| `DefinedComponent` \| `T` \| `NameSelector` |

#### Returns

`VueWrapper`<`InstanceType`<`T`\>\>

#### Inherited from

testUtils.DOMWrapper.findComponent

▸ **findComponent**<`T`\>(`selector`): `DOMWrapper`<`Node`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FunctionalComponent`<{}, {}, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `T` |

#### Returns

`DOMWrapper`<`Node`\>

#### Inherited from

testUtils.DOMWrapper.findComponent

▸ **findComponent**<`T`\>(`selector`): `DOMWrapper`<`Element`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FunctionalComponent`<{}, {}, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`DOMWrapper`<`Element`\>

#### Inherited from

testUtils.DOMWrapper.findComponent

▸ **findComponent**<`T`\>(`selector`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `RefSelector` \| `NameSelector` |

#### Returns

`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>

#### Inherited from

testUtils.DOMWrapper.findComponent

▸ **findComponent**<`T`\>(`selector`): `VueWrapper`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FindComponentSelector` \| `T` |

#### Returns

`VueWrapper`<`T`\>

#### Inherited from

testUtils.DOMWrapper.findComponent

▸ **findComponent**<`T`\>(`selector`): [`WrapperLike`](test_utils_core.WrapperLike.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FindComponentSelector` |

#### Returns

[`WrapperLike`](test_utils_core.WrapperLike.md)

#### Inherited from

testUtils.DOMWrapper.findComponent

___

### get

▸ **get**<`K`\>(`selector`): `Omit`<`DOMWrapper`<`HTMLElementTagNameMap`[`K`]\>, ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`Omit`<`DOMWrapper`<`HTMLElementTagNameMap`[`K`]\>, ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.get

▸ **get**<`K`\>(`selector`): `Omit`<`DOMWrapper`<`SVGElementTagNameMap`[`K`]\>, ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`Omit`<`DOMWrapper`<`SVGElementTagNameMap`[`K`]\>, ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.get

▸ **get**<`T`\>(`selector`): `Omit`<`DOMWrapper`<`T`\>, ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`Omit`<`DOMWrapper`<`T`\>, ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.get

▸ **get**<`T`\>(`selector`): `Omit`<`DOMWrapper`<`T`\>, ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| `RefSelector` |

#### Returns

`Omit`<`DOMWrapper`<`T`\>, ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.get

___

### getComponent

▸ **getComponent**<`T`\>(`selector`): `Omit`<[`WrapperLike`](test_utils_core.WrapperLike.md), ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`Omit`<[`WrapperLike`](test_utils_core.WrapperLike.md), ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.getComponent

▸ **getComponent**<`T`\>(`selector`): `Omit`<`VueWrapper`<`InstanceType`<`T`\>\>, ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DefinedComponent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| `RefSelector` \| `DefinedComponent` \| `NameSelector` \| `T` |

#### Returns

`Omit`<`VueWrapper`<`InstanceType`<`T`\>\>, ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.getComponent

▸ **getComponent**<`T`\>(`selector`): `Omit`<`DOMWrapper`<`Element`\>, ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FunctionalComponent`<{}, {}, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| `T` |

#### Returns

`Omit`<`DOMWrapper`<`Element`\>, ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.getComponent

▸ **getComponent**<`T`\>(`selector`): `Omit`<`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>, ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `RefSelector` \| `NameSelector` |

#### Returns

`Omit`<`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>, ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.getComponent

▸ **getComponent**<`T`\>(`selector`): `Omit`<`VueWrapper`<`T`\>, ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FindComponentSelector` \| `T` |

#### Returns

`Omit`<`VueWrapper`<`T`\>, ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.getComponent

▸ **getComponent**<`T`\>(`selector`): `Omit`<[`WrapperLike`](test_utils_core.WrapperLike.md), ``"exists"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FindComponentSelector` |

#### Returns

`Omit`<[`WrapperLike`](test_utils_core.WrapperLike.md), ``"exists"``\>

#### Inherited from

testUtils.DOMWrapper.getComponent

___

### getCurrentComponent

▸ **getCurrentComponent**(): `undefined` \| `ComponentInternalInstance`

#### Returns

`undefined` \| `ComponentInternalInstance`

#### Inherited from

testUtils.DOMWrapper.getCurrentComponent

___

### getRootNodes

▸ **getRootNodes**(): `VueNode`<`Element`\>[]

#### Returns

`VueNode`<`Element`\>[]

#### Inherited from

testUtils.DOMWrapper.getRootNodes

___

### html

▸ **html**(): `string`

#### Returns

`string`

#### Inherited from

testUtils.DOMWrapper.html

___

### isVisible

▸ **isVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

testUtils.DOMWrapper.isVisible

___

### setValue

▸ **setValue**(`value?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

testUtils.DOMWrapper.setValue

___

### text

▸ **text**(): `string`

#### Returns

`string`

#### Inherited from

testUtils.DOMWrapper.text

___

### trigger

▸ **trigger**(`eventString`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventString` | `DomEventNameWithModifier` |
| `options?` | `TriggerOptions` |

#### Returns

`Promise`<`void`\>

#### Inherited from

testUtils.DOMWrapper.trigger

▸ **trigger**(`eventString`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventString` | `string` |
| `options?` | `TriggerOptions` |

#### Returns

`Promise`<`void`\>

#### Inherited from

testUtils.DOMWrapper.trigger
