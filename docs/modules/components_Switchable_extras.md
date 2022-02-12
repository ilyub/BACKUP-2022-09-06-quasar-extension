[Quasar extension](../index.md) / [Exports](../modules.md) / components/Switchable.extras

# Module: components/Switchable.extras

## Table of contents

### Interfaces

- [SwitchablePropOptions](../interfaces/components_Switchable_extras.SwitchablePropOptions.md)
- [SwitchableSettings](../interfaces/components_Switchable_extras.SwitchableSettings.md)

### Type aliases

- [Transition](components_Switchable_extras.md#transition)

### Variables

- [TransitionVO](components_Switchable_extras.md#transitionvo)

### Functions

- [injectDisable](components_Switchable_extras.md#injectdisable)
- [injectSwitchableSettings](components_Switchable_extras.md#injectswitchablesettings)
- [isTransition](components_Switchable_extras.md#istransition)
- [provideDisable](components_Switchable_extras.md#providedisable)
- [provideSwitchableSettings](components_Switchable_extras.md#provideswitchablesettings)
- [testDisable](components_Switchable_extras.md#testdisable)
- [testSwitchableSettings](components_Switchable_extras.md#testswitchablesettings)

## Type aliases

### Transition

Ƭ **Transition**: ``"slide"`` \| ``"fade"``

## Variables

### TransitionVO

• **TransitionVO**: `ValidationObject`<[`Transition`](components_Switchable_extras.md#transition)\>

## Functions

### injectDisable

▸ **injectDisable**(): `ComputedRef`<`boolean`\>

Injects settings.

#### Returns

`ComputedRef`<`boolean`\>

Settings.

___

### injectSwitchableSettings

▸ **injectSwitchableSettings**(): `ComputedRef`<[`SwitchableSettings`](../interfaces/components_Switchable_extras.SwitchableSettings.md)\>

Injects settings.

#### Returns

`ComputedRef`<[`SwitchableSettings`](../interfaces/components_Switchable_extras.SwitchableSettings.md)\>

Settings.

___

### isTransition

▸ `Const` **isTransition**(`value`): value is Transition

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Transition

___

### provideDisable

▸ **provideDisable**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => `boolean` | Settings. |

#### Returns

`void`

___

### provideSwitchableSettings

▸ **provideSwitchableSettings**(`settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | () => [`SwitchableSettings`](../interfaces/components_Switchable_extras.SwitchableSettings.md) | Settings. |

#### Returns

`void`

___

### testDisable

▸ **testDisable**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | `boolean` | Settings. |

#### Returns

`void`

___

### testSwitchableSettings

▸ **testSwitchableSettings**(`mutableProvide`, `settings`): `void`

Provide settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableProvide` | `Record`<`symbol`, `unknown`\> | Provide option. |
| `settings` | [`SwitchableSettings`](../interfaces/components_Switchable_extras.SwitchableSettings.md) | Settings. |

#### Returns

`void`
