<script lang="ts">
import type { QTableSlots } from "quasar";
import { computed, defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as o from "@skylib/functions/es/object";

import type { SetupProps } from "../components/api";
import type {
  BodyCellSlotData,
  PageTableProps
} from "../components/PageTable.extras";
import { PageTableFactory } from "../components/PageTable.vue";

import type { TableItem } from "./PageTableTyped.extras";
import { isBodyCellSlotData, isTableItem } from "./PageTableTyped.extras";

type SlotKeys = ReadonlyArray<keyof QTableSlots>;

export default defineComponent({
  name: "sample-page-table-typed",
  components: {
    "m-page-table": PageTableFactory(isTableItem)
  },
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as PageTableProps<TableItem>,
  // eslint-disable-next-line @skylib/no-mutable-signature, @skylib/prefer-readonly
  setup(_props: SetupProps<PageTableProps<TableItem>>, { slots }) {
    return {
      bodyCellSlotData(data: unknown): BodyCellSlotData<TableItem> {
        assert.byGuard(data, isBodyCellSlotData);

        return data;
      },
      passThroughSlots: computed<SlotKeys>(
        // eslint-disable-next-line no-type-assertion/no-type-assertion
        () => Object.keys(o.omit(slots, "body-cell")) as SlotKeys
      )
    };
  }
});
</script>

<template>
  <m-page-table>
    <template v-for="name in passThroughSlots" #[name]>
      <slot :name="name"></slot>
    </template>
    <template v-if="$slots['body-cell']" #body-cell="data">
      <slot name="body-cell" v-bind="bodyCellSlotData(data)"></slot>
    </template>
  </m-page-table>
</template>
