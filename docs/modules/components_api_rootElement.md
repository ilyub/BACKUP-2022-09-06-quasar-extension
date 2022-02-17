[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/rootElement

# Module: components/api/rootElement

## Table of contents

### Interfaces

- [RootElementProps](../interfaces/components_api_rootElement.RootElementProps.md)

### Type aliases

- [RootElementProp](components_api_rootElement.md#rootelementprop)

### Variables

- [RootElementPropVO](components_api_rootElement.md#rootelementpropvo)
- [rootElementPropsOptions](components_api_rootElement.md#rootelementpropsoptions)

### Functions

- [isRootElementProp](components_api_rootElement.md#isrootelementprop)
- [isRootElementPropU](components_api_rootElement.md#isrootelementpropu)
- [useRootElement](components_api_rootElement.md#userootelement)

## Type aliases

### RootElementProp

Ƭ **RootElementProp**: ``"div"`` \| ``"page-section"`` \| ``"section"`` \| ``"subsection"``

## Variables

### RootElementPropVO

• **RootElementPropVO**: `ValidationObject`<[`RootElementProp`](components_api_rootElement.md#rootelementprop)\>

___

### rootElementPropsOptions

• **rootElementPropsOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rootElement` | [`PropOptions`](../interfaces/components_api.PropOptions.md)<`undefined` \| [`RootElementProp`](components_api_rootElement.md#rootelementprop)\> |

## Functions

### isRootElementProp

▸ `Const` **isRootElementProp**(`value`): value is RootElementProp

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is RootElementProp

___

### isRootElementPropU

▸ `Const` **isRootElementPropU**(`value`): value is undefined \| RootElementProp

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| RootElementProp

___

### useRootElement

▸ **useRootElement**(`props`): `ComputedRef`<`unknown`\>

Root element module.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Readonly`<[`LooseRequired`](components_api.md#looserequired)<`Readonly`<`ExtractPropTypes`<[`RootElementProps`](../interfaces/components_api_rootElement.RootElementProps.md)\>\>\>\> | Vue props. |

#### Returns

`ComputedRef`<`unknown`\>

Root component.
