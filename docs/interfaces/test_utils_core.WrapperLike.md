[Quasar extension](../index.md) / [Exports](../modules.md) / [test-utils/core](../modules/test_utils_core.md) / WrapperLike

# Interface: WrapperLike

[test-utils/core](../modules/test_utils_core.md).WrapperLike

## Table of contents

### Properties

- [element](test_utils_core.WrapperLike.md#element)

### Methods

- [attributes](test_utils_core.WrapperLike.md#attributes)
- [classes](test_utils_core.WrapperLike.md#classes)
- [exists](test_utils_core.WrapperLike.md#exists)
- [find](test_utils_core.WrapperLike.md#find)
- [findAll](test_utils_core.WrapperLike.md#findall)
- [findAllComponents](test_utils_core.WrapperLike.md#findallcomponents)
- [findComponent](test_utils_core.WrapperLike.md#findcomponent)
- [get](test_utils_core.WrapperLike.md#get)
- [getComponent](test_utils_core.WrapperLike.md#getcomponent)
- [html](test_utils_core.WrapperLike.md#html)
- [isVisible](test_utils_core.WrapperLike.md#isvisible)
- [setValue](test_utils_core.WrapperLike.md#setvalue)
- [text](test_utils_core.WrapperLike.md#text)
- [trigger](test_utils_core.WrapperLike.md#trigger)

## Properties

### element

• `Readonly` **element**: `Node`

## Methods

### attributes

▸ **attributes**(): `Object`

#### Returns

`Object`

▸ **attributes**(`key`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| `string`

▸ **attributes**(`key?`): `undefined` \| `string` \| { `[key: string]`: `string`;  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

`undefined` \| `string` \| { `[key: string]`: `string`;  }

___

### classes

▸ **classes**(): `string`[]

#### Returns

`string`[]

▸ **classes**(`className`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | `string` |

#### Returns

`boolean`

▸ **classes**(`className?`): `boolean` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `className?` | `string` |

#### Returns

`boolean` \| `string`[]

___

### exists

▸ **exists**(): `boolean`

#### Returns

`boolean`

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

▸ **findAll**(`selector`): `DOMWrapper`<`Element`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`DOMWrapper`<`Element`\>[]

___

### findAllComponents

▸ **findAllComponents**<`T`\>(`selector`): [`WrapperLike`](test_utils_core.WrapperLike.md)[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

[`WrapperLike`](test_utils_core.WrapperLike.md)[]

▸ **findAllComponents**<`T`\>(`selector`): `VueWrapper`<`InstanceType`<`T`\>\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DefinedComponent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| `DefinedComponent` \| `NameSelector` \| `T` |

#### Returns

`VueWrapper`<`InstanceType`<`T`\>\>[]

▸ **findAllComponents**<`T`\>(`selector`): `DOMWrapper`<`Element`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FunctionalComponent`<{}, {}, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`DOMWrapper`<`Element`\>[]

▸ **findAllComponents**<`T`\>(`selector`): `DOMWrapper`<`Node`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FunctionalComponent`<{}, {}, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `T` |

#### Returns

`DOMWrapper`<`Node`\>[]

▸ **findAllComponents**<`T`\>(`selector`): `VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `NameSelector` |

#### Returns

`VueWrapper`<`ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\>\>[]

▸ **findAllComponents**<`T`\>(`selector`): `VueWrapper`<`T`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ComponentPublicInstance`<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FindAllComponentsSelector` \| `T` |

#### Returns

`VueWrapper`<`T`\>[]

▸ **findAllComponents**(`selector`): [`WrapperLike`](test_utils_core.WrapperLike.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FindAllComponentsSelector` |

#### Returns

[`WrapperLike`](test_utils_core.WrapperLike.md)[]

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

▸ **findComponent**<`T`\>(`selector`): `VueWrapper`<`InstanceType`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DefinedComponent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| `RefSelector` \| `DefinedComponent` \| `NameSelector` \| `T` |

#### Returns

`VueWrapper`<`InstanceType`<`T`\>\>

▸ **findComponent**<`T`\>(`selector`): `DOMWrapper`<`Element`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FunctionalComponent`<{}, {}, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| `T` |

#### Returns

`DOMWrapper`<`Element`\>

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

▸ **findComponent**(`selector`): [`WrapperLike`](test_utils_core.WrapperLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `FindComponentSelector` |

#### Returns

[`WrapperLike`](test_utils_core.WrapperLike.md)

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

___

### html

▸ **html**(): `string`

#### Returns

`string`

___

### isVisible

▸ **isVisible**(): `boolean`

#### Returns

`boolean`

___

### setValue

▸ **setValue**(`value`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Promise`<`void`\>

___

### text

▸ **text**(): `string`

#### Returns

`string`

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

▸ **trigger**(`eventString`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventString` | `string` |
| `options?` | `TriggerOptions` |

#### Returns

`Promise`<`void`\>
