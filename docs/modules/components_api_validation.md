[Quasar extension](../index.md) / [Exports](../modules.md) / components/api/validation

# Module: components/api/validation

## Table of contents

### Namespaces

- [validation](components_api_validation.validation.md)

### Functions

- [validation](components_api_validation.md#validation)

## Functions

### validation

▸ **validation**<`T`\>(`props`, `target`, `options`): [`Plugin`](../interfaces/components_api_validation_internal.Plugin.md)<`T`\>

Use validation plugin.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`Props`](../interfaces/components_api_validation_internal.Props.md)<`T`\> | Props. |
| `target` | `ComputedRef`<`QField` \| `QInput`\> | Target. |
| `options` | `ComputedRef`<[`Options`](../interfaces/components_api_validation_internal.Options.md)<`T`\>\> | Options. |

#### Returns

[`Plugin`](../interfaces/components_api_validation_internal.Plugin.md)<`T`\>

Validation plugin.
