[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/misc.internal](../modules/components_api_misc_internal.md) / InjectableSettings

# Interface: InjectableSettings<T\>

[components/api/misc.internal](../modules/components_api_misc_internal.md).InjectableSettings

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [injectSettings](components_api_misc_internal.InjectableSettings.md#injectsettings)
- [provideSettings](components_api_misc_internal.InjectableSettings.md#providesettings)
- [testProvideSettings](components_api_misc_internal.InjectableSettings.md#testprovidesettings)

## Methods

### injectSettings

▸ `Readonly` **injectSettings**(): `T`

Injects settings.

#### Returns

`T`

Settings.

___

### provideSettings

▸ `Readonly` **provideSettings**(`settings`): `void`

Provides settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `T` | Default settings. |

#### Returns

`void`

___

### testProvideSettings

▸ `Readonly` **testProvideSettings**(`settings`): `IndexedObject`<`T`\>

Returns provide object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `T` | Settings. |

#### Returns

`IndexedObject`<`T`\>

Provide object.
