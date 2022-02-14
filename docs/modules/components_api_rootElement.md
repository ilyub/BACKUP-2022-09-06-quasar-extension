[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/rootElement

# Module: components/api/rootElement

## Table of contents

### Interfaces

- [RootElementProps](../interfaces/components_api_rootElement.RootElementProps.md)

### Type aliases

- [RootElementProp](components_api_rootElement.md#rootelementprop)

### Variables

- [RootElementPropVO](components_api_rootElement.md#rootelementpropvo)
- [rootElementProps](components_api_rootElement.md#rootelementprops)

### Functions

- [isRootElementProp](components_api_rootElement.md#isrootelementprop)
- [useRootElement](components_api_rootElement.md#userootelement)

## Type aliases

### RootElementProp

Ƭ **RootElementProp**: ``"div"`` \| ``"page-section"`` \| ``"section"``

## Variables

### RootElementPropVO

• **RootElementPropVO**: `ValidationObject`<[`RootElementProp`](components_api_rootElement.md#rootelementprop)\>

___

### rootElementProps

• **rootElementProps**: [`RootElementProps`](../interfaces/components_api_rootElement.RootElementProps.md)

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
