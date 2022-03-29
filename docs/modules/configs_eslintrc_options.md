[Quasar extension](../index.md) / [Exports](../modules.md) / configs/eslintrc.options

# Module: configs/eslintrc.options

## Table of contents

### Namespaces

- [export&#x3D;](configs_eslintrc_options.export_.md)

### Properties

- [export&#x3D;](configs_eslintrc_options.md#export&#x3D;)

## Properties

### export&#x3D;

• **export=**: (`importPrefix`: `any`) => { `consistentImport`: ({ `altLocalNames`: `string`[] ; `autoImportSource`: `never` ; `localName`: `string` = "Component"; `sourcePattern`: `string` = "vue-class-component"; `type`: `string` = "default" } \| { `altLocalNames`: `never` ; `autoImportSource`: `never` ; `localName`: `string` = "Vue"; `sourcePattern`: `string` = "vue"; `type`: `string` = "default" } \| { `altLocalNames`: `string`[] ; `autoImportSource`: `never` ; `localName`: `never` = "Vue"; `sourcePattern`: `string` = "@vue/test-utils"; `type`: `string` = "wildcard" } \| { `altLocalNames`: `string`[] ; `autoImportSource`: `string` ; `localName`: `never` = "Vue"; `sourcePattern`: `string` = "@skylib/quasar-extension/*/testUtils"; `type`: `string` = "wildcard" } \| { `altLocalNames`: `never` ; `autoImportSource`: `string` ; `localName`: `never` = "Vue"; `sourcePattern`: `string` = "@skylib/quasar-extension/*/facade-implementations/reactiveStorage/vueStorage"; `type`: `string` = "wildcard" })[]  }

#### Type declaration

▸ (`importPrefix`): `Object`

Returns ESLint options.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `importPrefix` | `any` | Import prefix. |

##### Returns

`Object`

ESLint options.

| Name | Type |
| :------ | :------ |
| `consistentImport` | ({ `altLocalNames`: `string`[] ; `autoImportSource`: `never` ; `localName`: `string` = "Component"; `sourcePattern`: `string` = "vue-class-component"; `type`: `string` = "default" } \| { `altLocalNames`: `never` ; `autoImportSource`: `never` ; `localName`: `string` = "Vue"; `sourcePattern`: `string` = "vue"; `type`: `string` = "default" } \| { `altLocalNames`: `string`[] ; `autoImportSource`: `never` ; `localName`: `never` = "Vue"; `sourcePattern`: `string` = "@vue/test-utils"; `type`: `string` = "wildcard" } \| { `altLocalNames`: `string`[] ; `autoImportSource`: `string` ; `localName`: `never` = "Vue"; `sourcePattern`: `string` = "@skylib/quasar-extension/*/testUtils"; `type`: `string` = "wildcard" } \| { `altLocalNames`: `never` ; `autoImportSource`: `string` ; `localName`: `never` = "Vue"; `sourcePattern`: `string` = "@skylib/quasar-extension/*/facade-implementations/reactiveStorage/vueStorage"; `type`: `string` = "wildcard" })[] |
