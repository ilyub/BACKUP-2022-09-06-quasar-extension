[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/core](../modules/components_api_core.md) / InjectableSettings

# Interface: InjectableSettings<T\>

[components/api/core](../modules/components_api_core.md).InjectableSettings

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [injectSettings](components_api_core.InjectableSettings.md#injectsettings)
- [provideSettings](components_api_core.InjectableSettings.md#providesettings)
- [testProvideSettings](components_api_core.InjectableSettings.md#testprovidesettings)

## Methods

### injectSettings

▸ `Readonly` **injectSettings**(): `ComputedRef`<`T`\>

Injects settings.

#### Returns

`ComputedRef`<`T`\>

Settings.

___

### provideSettings

▸ `Readonly` **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => `T` | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ `Readonly` **testProvideSettings**(`settings`): `IndexedObject`<`unknown`\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `T` | Settings. |

#### Returns

`IndexedObject`<`unknown`\>

Provide object.
