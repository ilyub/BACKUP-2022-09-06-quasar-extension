[Quasar extension](../index.md) / [Exports](../modules.md) / [samples/core/types](../modules/samples_core_types.md) / DefineComponent

# Interface: DefineComponent

[samples/core/types](../modules/samples_core_types.md).DefineComponent

## Hierarchy

- `DefineComponent`<`object`, `object`, `unknown`\>

  ↳ **`DefineComponent`**

## Table of contents

### Constructors

- [constructor](samples_core_types.DefineComponent.md#constructor)

### Properties

- [\_\_defaults](samples_core_types.DefineComponent.md#__defaults)
- [\_\_differentiator](samples_core_types.DefineComponent.md#__differentiator)
- [\_\_file](samples_core_types.DefineComponent.md#__file)
- [\_\_isBuiltIn](samples_core_types.DefineComponent.md#__isbuiltin)
- [\_\_isFragment](samples_core_types.DefineComponent.md#__isfragment)
- [\_\_isSuspense](samples_core_types.DefineComponent.md#__issuspense)
- [\_\_isTeleport](samples_core_types.DefineComponent.md#__isteleport)
- [beforeRouteEnter](samples_core_types.DefineComponent.md#beforerouteenter)
- [beforeRouteLeave](samples_core_types.DefineComponent.md#beforerouteleave)
- [beforeRouteUpdate](samples_core_types.DefineComponent.md#beforerouteupdate)
- [call](samples_core_types.DefineComponent.md#call)
- [class](samples_core_types.DefineComponent.md#class)
- [compatConfig](samples_core_types.DefineComponent.md#compatconfig)
- [compilerOptions](samples_core_types.DefineComponent.md#compileroptions)
- [components](samples_core_types.DefineComponent.md#components)
- [computed](samples_core_types.DefineComponent.md#computed)
- [delimiters](samples_core_types.DefineComponent.md#delimiters)
- [directives](samples_core_types.DefineComponent.md#directives)
- [emits](samples_core_types.DefineComponent.md#emits)
- [errorCaptured](samples_core_types.DefineComponent.md#errorcaptured)
- [expose](samples_core_types.DefineComponent.md#expose)
- [extends](samples_core_types.DefineComponent.md#extends)
- [filters](samples_core_types.DefineComponent.md#filters)
- [inheritAttrs](samples_core_types.DefineComponent.md#inheritattrs)
- [inject](samples_core_types.DefineComponent.md#inject)
- [key](samples_core_types.DefineComponent.md#key)
- [methods](samples_core_types.DefineComponent.md#methods)
- [mixins](samples_core_types.DefineComponent.md#mixins)
- [name](samples_core_types.DefineComponent.md#name)
- [onVnodeBeforeMount](samples_core_types.DefineComponent.md#onvnodebeforemount)
- [onVnodeBeforeUnmount](samples_core_types.DefineComponent.md#onvnodebeforeunmount)
- [onVnodeBeforeUpdate](samples_core_types.DefineComponent.md#onvnodebeforeupdate)
- [onVnodeMounted](samples_core_types.DefineComponent.md#onvnodemounted)
- [onVnodeUnmounted](samples_core_types.DefineComponent.md#onvnodeunmounted)
- [onVnodeUpdated](samples_core_types.DefineComponent.md#onvnodeupdated)
- [preFetch](samples_core_types.DefineComponent.md#prefetch)
- [provide](samples_core_types.DefineComponent.md#provide)
- [ref](samples_core_types.DefineComponent.md#ref)
- [ref\_for](samples_core_types.DefineComponent.md#ref_for)
- [ref\_key](samples_core_types.DefineComponent.md#ref_key)
- [render](samples_core_types.DefineComponent.md#render)
- [renderTracked](samples_core_types.DefineComponent.md#rendertracked)
- [renderTriggered](samples_core_types.DefineComponent.md#rendertriggered)
- [style](samples_core_types.DefineComponent.md#style)
- [template](samples_core_types.DefineComponent.md#template)
- [watch](samples_core_types.DefineComponent.md#watch)

### Methods

- [activated](samples_core_types.DefineComponent.md#activated)
- [beforeCreate](samples_core_types.DefineComponent.md#beforecreate)
- [beforeDestroy](samples_core_types.DefineComponent.md#beforedestroy)
- [beforeMount](samples_core_types.DefineComponent.md#beforemount)
- [beforeUnmount](samples_core_types.DefineComponent.md#beforeunmount)
- [beforeUpdate](samples_core_types.DefineComponent.md#beforeupdate)
- [created](samples_core_types.DefineComponent.md#created)
- [data](samples_core_types.DefineComponent.md#data)
- [deactivated](samples_core_types.DefineComponent.md#deactivated)
- [destroyed](samples_core_types.DefineComponent.md#destroyed)
- [mounted](samples_core_types.DefineComponent.md#mounted)
- [serverPrefetch](samples_core_types.DefineComponent.md#serverprefetch)
- [setup](samples_core_types.DefineComponent.md#setup)
- [unmounted](samples_core_types.DefineComponent.md#unmounted)
- [updated](samples_core_types.DefineComponent.md#updated)

## Constructors

### constructor

• **new DefineComponent**(...`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Inherited from

Base<object, object, unknown\>.constructor

## Properties

### \_\_defaults

• `Optional` **\_\_defaults**: `Object`

#### Inherited from

Base.\_\_defaults

___

### \_\_differentiator

• `Optional` **\_\_differentiator**: `string` \| `number`

#3468

type-only, used to assist Mixin's type inference,
typescript will try to simplify the inferred `Mixin` type,
with the `__differenciator`, typescript won't be able to combine different mixins,
because the `__differenciator` will be different

#### Inherited from

Base.\_\_differentiator

___

### \_\_file

• `Optional` **\_\_file**: `string`

This one should be exposed so that devtools can make use of it

#### Inherited from

Base.\_\_file

___

### \_\_isBuiltIn

• `Optional` **\_\_isBuiltIn**: `boolean`

Compat build only, for bailing out of certain compatibility behavior

#### Inherited from

Base.\_\_isBuiltIn

___

### \_\_isFragment

• `Optional` **\_\_isFragment**: `never`

#### Inherited from

Base.\_\_isFragment

___

### \_\_isSuspense

• `Optional` **\_\_isSuspense**: `never`

#### Inherited from

Base.\_\_isSuspense

___

### \_\_isTeleport

• `Optional` **\_\_isTeleport**: `never`

#### Inherited from

Base.\_\_isTeleport

___

### beforeRouteEnter

• `Optional` **beforeRouteEnter**: `NavigationGuardWithThis`<`undefined`\>

Guard called when the router is navigating to the route that is rendering
this component from a different route. Differently from `beforeRouteUpdate`
and `beforeRouteLeave`, `beforeRouteEnter` does not have access to the
component instance through `this` because it triggers before the component
is even mounted.

**`param`** RouteLocationRaw we are navigating to

**`param`** RouteLocationRaw we are navigating from

**`param`** function to validate, cancel or modify (by redirecting) the
navigation

#### Inherited from

Base.beforeRouteEnter

___

### beforeRouteLeave

• `Optional` **beforeRouteLeave**: `NavigationGuard`

Guard called when the router is navigating away from the current route that
is rendering this component.

**`param`** RouteLocationRaw we are navigating to

**`param`** RouteLocationRaw we are navigating from

**`param`** function to validate, cancel or modify (by redirecting) the
navigation

#### Inherited from

Base.beforeRouteLeave

___

### beforeRouteUpdate

• `Optional` **beforeRouteUpdate**: `NavigationGuard`

Guard called whenever the route that renders this component has changed but
it is reused for the new route. This allows you to guard for changes in
params, the query or the hash.

**`param`** RouteLocationRaw we are navigating to

**`param`** RouteLocationRaw we are navigating from

**`param`** function to validate, cancel or modify (by redirecting) the
navigation

#### Inherited from

Base.beforeRouteUpdate

___

### call

• **call**: <T, A\>(`this`: (...`args`: `A`) => `T`, `thisArg`: `T`, ...`args`: `A`) => `void` & (`this`: `unknown`, ...`args`: `unknown`[]) => `never`

#### Inherited from

Base.call

___

### class

• `Optional` **class**: `unknown`

#### Inherited from

Base.class

___

### compatConfig

• `Optional` **compatConfig**: `CompatConfig`

#### Inherited from

Base.compatConfig

___

### compilerOptions

• `Optional` **compilerOptions**: `RuntimeCompilerOptions`

#### Inherited from

Base.compilerOptions

___

### components

• `Optional` **components**: `Record`<`string`, `Component`<`any`, `any`, `any`, `ComputedOptions`, `MethodOptions`\>\>

#### Inherited from

Base.components

___

### computed

• `Optional` **computed**: `ComputedOptions`

#### Inherited from

Base.computed

___

### delimiters

• `Optional` **delimiters**: [`string`, `string`]

runtime compile only

**`deprecated`** use `compilerOptions.delimiters` instead.

#### Inherited from

Base.delimiters

___

### directives

• `Optional` **directives**: `Record`<`string`, `Directive`<`any`, `any`\>\>

#### Inherited from

Base.directives

___

### emits

• `Optional` **emits**: `ThisType`<`void`\> & `string`[] & `ThisType`<`void`\>

#### Inherited from

Base.emits

___

### errorCaptured

• `Optional` **errorCaptured**: `ErrorCapturedHook`<`unknown`\>

#### Inherited from

Base.errorCaptured

___

### expose

• `Optional` **expose**: `string`[]

#### Inherited from

Base.expose

___

### extends

• `Optional` **extends**: `ComponentOptionsMixin`

#### Inherited from

Base.extends

___

### filters

• `Optional` **filters**: `Record`<`string`, `Function`\>

#### Inherited from

Base.filters

___

### inheritAttrs

• `Optional` **inheritAttrs**: `boolean`

#### Inherited from

Base.inheritAttrs

___

### inject

• `Optional` **inject**: `ComponentInjectOptions`

#### Inherited from

Base.inject

___

### key

• `Optional` **key**: `string` \| `number` \| `symbol`

#### Inherited from

Base.key

___

### methods

• `Optional` **methods**: `MethodOptions`

#### Inherited from

Base.methods

___

### mixins

• `Optional` **mixins**: `ComponentOptionsMixin`[]

#### Inherited from

Base.mixins

___

### name

• `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

#### Inherited from

Base.name

___

### onVnodeBeforeMount

• `Optional` **onVnodeBeforeMount**: `VNodeMountHook` \| `VNodeMountHook`[]

#### Inherited from

Base.onVnodeBeforeMount

___

### onVnodeBeforeUnmount

• `Optional` **onVnodeBeforeUnmount**: `VNodeMountHook` \| `VNodeMountHook`[]

#### Inherited from

Base.onVnodeBeforeUnmount

___

### onVnodeBeforeUpdate

• `Optional` **onVnodeBeforeUpdate**: `VNodeUpdateHook` \| `VNodeUpdateHook`[]

#### Inherited from

Base.onVnodeBeforeUpdate

___

### onVnodeMounted

• `Optional` **onVnodeMounted**: `VNodeMountHook` \| `VNodeMountHook`[]

#### Inherited from

Base.onVnodeMounted

___

### onVnodeUnmounted

• `Optional` **onVnodeUnmounted**: `VNodeMountHook` \| `VNodeMountHook`[]

#### Inherited from

Base.onVnodeUnmounted

___

### onVnodeUpdated

• `Optional` **onVnodeUpdated**: `VNodeUpdateHook` \| `VNodeUpdateHook`[]

#### Inherited from

Base.onVnodeUpdated

___

### preFetch

• `Optional` **preFetch**: `PrefetchCallback`<`any`\>

#### Inherited from

Base.preFetch

___

### provide

• `Optional` **provide**: `Function` \| `Data`

#### Inherited from

Base.provide

___

### ref

• `Optional` **ref**: `VNodeRef`

#### Inherited from

Base.ref

___

### ref\_for

• `Optional` **ref\_for**: `boolean`

#### Inherited from

Base.ref\_for

___

### ref\_key

• `Optional` **ref\_key**: `string`

#### Inherited from

Base.ref\_key

___

### render

• `Optional` **render**: `Function`

#### Inherited from

Base.render

___

### renderTracked

• `Optional` **renderTracked**: `DebuggerHook`

#### Inherited from

Base.renderTracked

___

### renderTriggered

• `Optional` **renderTriggered**: `DebuggerHook`

#### Inherited from

Base.renderTriggered

___

### style

• `Optional` **style**: `unknown`

#### Inherited from

Base.style

___

### template

• `Optional` **template**: `string` \| `object`

#### Inherited from

Base.template

___

### watch

• `Optional` **watch**: `ComponentWatchOptions`

#### Inherited from

Base.watch

## Methods

### activated

▸ `Optional` **activated**(): `void`

#### Returns

`void`

#### Inherited from

Base.activated

___

### beforeCreate

▸ `Optional` **beforeCreate**(): `void`

#### Returns

`void`

#### Inherited from

Base.beforeCreate

___

### beforeDestroy

▸ `Optional` **beforeDestroy**(): `void`

**`deprecated`** use `beforeUnmount` instead

#### Returns

`void`

#### Inherited from

Base.beforeDestroy

___

### beforeMount

▸ `Optional` **beforeMount**(): `void`

#### Returns

`void`

#### Inherited from

Base.beforeMount

___

### beforeUnmount

▸ `Optional` **beforeUnmount**(): `void`

#### Returns

`void`

#### Inherited from

Base.beforeUnmount

___

### beforeUpdate

▸ `Optional` **beforeUpdate**(): `void`

#### Returns

`void`

#### Inherited from

Base.beforeUpdate

___

### created

▸ `Optional` **created**(): `void`

#### Returns

`void`

#### Inherited from

Base.created

___

### data

▸ `Optional` **data**(`this`, `vm`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `CreateComponentPublicInstance`<`Props`, {}, {}, {}, `MethodOptions`, `Mixin`, `Extends`, {}, `Props`, {}, ``false``, `IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"P"``\> & `EnsureNonVoid`<`Props`\>, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"B"``\> & {}, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"D"``\> & {}, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"C"``\> & {}, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"M"``\> & `MethodOptions`, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"Defaults"``\> & {}\> |
| `vm` | `CreateComponentPublicInstance`<`Props`, {}, {}, {}, `MethodOptions`, `Mixin`, `Extends`, {}, `Props`, {}, ``false``, `IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"P"``\> & `EnsureNonVoid`<`Props`\>, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"B"``\> & {}, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"D"``\> & {}, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"C"``\> & {}, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"M"``\> & `MethodOptions`, `UnwrapMixinsType`<`IntersectionMixin`<`Mixin`\> & `IntersectionMixin`<`Extends`\>, ``"Defaults"``\> & {}\> |

#### Returns

`D`

#### Inherited from

Base.data

___

### deactivated

▸ `Optional` **deactivated**(): `void`

#### Returns

`void`

#### Inherited from

Base.deactivated

___

### destroyed

▸ `Optional` **destroyed**(): `void`

**`deprecated`** use `unmounted` instead

#### Returns

`void`

#### Inherited from

Base.destroyed

___

### mounted

▸ `Optional` **mounted**(): `void`

#### Returns

`void`

#### Inherited from

Base.mounted

___

### serverPrefetch

▸ `Optional` **serverPrefetch**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

Base.serverPrefetch

___

### setup

▸ `Optional` **setup**(`this`, `props`, `ctx`): `void` \| `RawBindings` \| `Promise`<`RawBindings`\> \| `RenderFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `void` |
| `props` | `Readonly`<`LooseRequired`<`Props` & `UnionToIntersection`<`ExtractOptionProp`<`Mixin`\>\> & `UnionToIntersection`<`ExtractOptionProp`<`Extends`\>\>\>\> |
| `ctx` | `SetupContext`<`E`\> |

#### Returns

`void` \| `RawBindings` \| `Promise`<`RawBindings`\> \| `RenderFunction`

#### Inherited from

Base.setup

___

### unmounted

▸ `Optional` **unmounted**(): `void`

#### Returns

`void`

#### Inherited from

Base.unmounted

___

### updated

▸ `Optional` **updated**(): `void`

#### Returns

`void`

#### Inherited from

Base.updated
