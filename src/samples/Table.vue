<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";

import type { Columns, Pagination } from "../components/Table.extras";
import { genericTable } from "../components/Table.generic";

interface TableItem {
  readonly id: number;
  readonly name: string;
}

type TableItems = readonly TableItem[];

export default defineComponent({
  name: "sample-table",
  components: {
    "generic-table": genericTable<TableItem>()
  },
  setup() {
    const pagination = ref<Pagination>({
      descending: false,
      limit: 10,
      sortBy: "name"
    });

    const loading = ref(false);

    const noData = ref(false);

    const selectByRowClick = ref(false);

    return {
      loading,
      noData,
      // eslint-disable-next-line no-warning-comments
      // fixme: Use typedef
      pageTableColumns: fn.run<Columns<TableItem>>(() => [
        {
          align: "left",
          field(row): string {
            return `${row.name}!`;
          },
          label: "Name",
          name: "name",
          sort(_value1, _value2, row1, row2): number {
            return row1.id - row2.id;
          },
          sortable: true
        }
      ]),
      pageTableRows: computed<TableItems>(() => {
        if (noData.value) return [];

        assert.not.empty(pagination.value.limit);

        const ids =
          pagination.value.descending ?? false
            ? a.fromRange(1001 - pagination.value.limit, 1000)
            : a.fromRange(1, pagination.value.limit);

        return ids.map(id => {
          return {
            id,
            name: `Item ${id}`
          };
        });
      }),
      pagination,
      selectByRowClick,
      selected: ref<TableItems>([])
    };
  }
});
</script>

<template>
  <m-page-layout :class="$style.pageLayout" title="Title">
    <template #fit>
      <generic-table
        v-model:pagination="pagination"
        v-model:selected="selected"
        class="fit"
        :columns="pageTableColumns"
        flat
        :loading="loading"
        row-key="id"
        :rows="pageTableRows"
        :select-by-row-click="selectByRowClick"
        selection="multiple"
      >
        <template #body-cell="{ row, value }">
          <q-td>{{ value }} - {{ row.id }}</q-td>
        </template>
        <template #top>
          <m-toggle v-model="loading" label="Loading" />
          <m-toggle v-model="noData" label="No data" />
          <m-toggle v-model="selectByRowClick" label="Select by row click" />
        </template>
        <template
          #steady-bottom="{ allSelected, allSelectedClick, allSelectedDisable }"
        >
          <q-checkbox
            :disable="allSelectedDisable"
            :model-value="allSelected"
            @update:model-value="allSelectedClick"
          />
          {{ selected.length }} selected
        </template>
      </generic-table>
    </template>
  </m-page-layout>
</template>

<style lang="scss" module>
.pageLayout {
  border: 1px solid red;
}
</style>
