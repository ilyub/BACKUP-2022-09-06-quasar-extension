[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/misc.internal](../modules/components_api_misc_internal.md) / InjectableTrigger

# Interface: InjectableTrigger

[components/api/misc.internal](../modules/components_api_misc_internal.md).InjectableTrigger

## Table of contents

### Properties

- [provide](components_api_misc_internal.InjectableTrigger.md#provide)
- [watch](components_api_misc_internal.InjectableTrigger.md#watch)

## Properties

### provide

• `Readonly` **provide**: () => () => `void`

#### Type declaration

▸ (): () => `void`

Provides trigger.

##### Returns

`fn`

Trigger.

▸ (): `void`

##### Returns

`void`

___

### watch

• `Readonly` **watch**: (`handler`: () => `void`) => `void`

#### Type declaration

▸ (`handler`): `void`

Watches trigger.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | () => `void` | Handler. |

##### Returns

`void`
