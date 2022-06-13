[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/validation](../modules/components_api_validation.md) / [validation](../modules/components_api_validation.validation.md) / Rule

# Interface: Rule<T\>

[components/api/validation](../modules/components_api_validation.md).[validation](../modules/components_api_validation.validation.md).Rule

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Callable

### Rule

▸ **Rule**(`value`): ``true`` \| `Key`<`Word`\> \| `Promise`<``true`` \| `Key`<`Word`\>\>

Validates value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

``true`` \| `Key`<`Word`\> \| `Promise`<``true`` \| `Key`<`Word`\>\>

Validation result.
