<script lang="ts">
import { defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";

import type { SetupProps } from "../components/api";
import type {
  BodyCellSlotData,
  PageTablePropOptions
} from "../components/PageTable.extras";
import { PageTableFactory } from "../components/PageTable.vue";

import type { TableItem } from "./PageTable.extras";
import { isBodyCellSlotData, isTableItem } from "./PageTable.extras";

export default defineComponent({
  name: "page-table",
  components: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    "x-page-table": PageTableFactory(isTableItem)
  },
  props: {} as PageTablePropOptions<TableItem>,
  // eslint-disable-next-line @skylib/no-mutable-signature, @skylib/prefer-readonly
  setup(_props: SetupProps<PageTablePropOptions<TableItem>>) {
    return {
      bodyCellSlotData(data: unknown): BodyCellSlotData<TableItem> {
        assert.byGuard(data, isBodyCellSlotData);

        return data;
      }
    };
  }
});
</script>

<template>
  <x-page-table>
    <template v-if="$slots['body-cell']" #body-cell="data">
      <slot name="body-cell" v-bind="bodyCellSlotData(data)"></slot>
    </template>
  </x-page-table>
</template>
