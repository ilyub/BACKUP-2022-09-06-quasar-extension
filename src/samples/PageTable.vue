<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import * as a from "@skylib/functions/es/array";
import * as fn from "@skylib/functions/es/function";

import type { Columns, GlobalPageTable } from "../components/PageTable.extras";
import PageTable from "../components/PageTable.vue";

interface TableItem {
  readonly id: number;
  readonly name: string;
}

type TableItems = readonly TableItem[];

export default defineComponent({
  name: "sample-page-table",
  components: {
    "sample-page-table-typed":
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      PageTable as unknown as GlobalPageTable<TableItem>
  },
  setup() {
    const pageTableLimit = ref(20);

    return {
      pageTableColumns: fn.run<Columns<TableItem>>(() => [
        {
          align: "left",
          field(row): string {
            return `${row.name}!`;
          },
          label: "Name",
          name: "name"
        }
      ]),
      pageTableLimit,
      pageTableRows: computed<TableItems>(() =>
        a.fromRange(1, pageTableLimit.value).map(id => {
          return {
            id,
            name: `Item ${id}`
          };
        })
      ),
      pageTableSelected: ref<TableItems>([])
    };
  }
});
</script>

<template>
  {{ pageTableSelected }}
  <m-page-layout class="page-layout" title="Title">
    <sample-page-table-typed
      v-model:limit="pageTableLimit"
      v-model:selected="pageTableSelected"
      class="page-table"
      :columns="pageTableColumns"
      flat
      :rows="pageTableRows"
      selection="multiple"
    >
      <template #body-cell="{ row, value }">
        <q-td>{{ value }} {{ row }}</q-td>
      </template>
    </sample-page-table-typed>
  </m-page-layout>
</template>

<style lang="scss" scoped>
.page-layout {
  border: 1px solid red;
}

.page-table {
  border: 1px solid blue;
}
</style>
