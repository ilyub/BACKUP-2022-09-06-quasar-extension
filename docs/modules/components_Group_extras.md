[Quasar extension](../index.md) / [Exports](../modules.md) / components/Group.extras

# Module: components/Group.extras

## Table of contents

### Interfaces

- [GroupItem](../interfaces/components_Group_extras.GroupItem.md)
- [GroupOwnProps](../interfaces/components_Group_extras.GroupOwnProps.md)
- [GroupParentProps](../interfaces/components_Group_extras.GroupParentProps.md)
- [GroupProps](../interfaces/components_Group_extras.GroupProps.md)

### Type aliases

- [GlobalGroup](components_Group_extras.md#globalgroup)
- [GroupItems](components_Group_extras.md#groupitems)
- [GroupSlots](components_Group_extras.md#groupslots)

## Type aliases

### GlobalGroup

Ƭ **GlobalGroup**<`T`\>: [`GlobalComponent`](../interfaces/components_api.GlobalComponent.md)<[`GroupProps`](../interfaces/components_Group_extras.GroupProps.md)<`T`\>, [`GroupSlots`](components_Group_extras.md#groupslots)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### GroupItems

Ƭ **GroupItems**<`T`\>: `ReadonlyArray`<[`GroupItem`](../interfaces/components_Group_extras.GroupItem.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### GroupSlots

Ƭ **GroupSlots**<`T`\>: `Rec`<`T`, () => readonly `VNode`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |
