<script lang="ts">
import type { QTableProps, QTableSlots } from "quasar";
import { computed, defineComponent, inject } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { Writable } from "@skylib/functions/es/types/core";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import { isVirtualScrollEvent } from "./extras/VirtualScroll";
import { usePageContentHeight } from "./PageLayout.extras";
import type {
  Column,
  Columns,
  Field,
  PageTableSettings
} from "./PageTable.extras";
import {
  defaultPageTableSettings,
  injectPageTableSettings,
  isAlign
} from "./PageTable.extras";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isField: is.Guard<Field<any>> = is.callable;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isColumn: is.Guard<Column<any>> = is.factory(
  is.object.of,
  {
    align: isAlign,
    field: isField,
    label: is.string,
    name: is.string
  },
  {
    sortable: is.true
  }
);

const isColumns = is.factory(is.array.of, isColumn);

export default defineComponent({
  name: "s-page-table",
  props: {
    ...({} as PropsToPropOptions<QTableProps>),
    columns: propOptions.required(isColumns),
    extraPageOffset: propOptions(is.stringU),
    limit: propOptions(is.numberU),
    rows: propOptions.required(is.factory(is.array.of, is.unknown))
  },
  emits: {
    "update:limit"(this: undefined, value: number) {
      return is.number(value);
    }
  },
  // eslint-disable-next-line @skylib/prefer-readonly
  setup(props, { emit, slots }) {
    const settings = inject(
      injectPageTableSettings,
      computed<PageTableSettings>(defaultPageTableSettings)
    );

    return {
      height: usePageContentHeight(() => props.extraPageOffset),
      onScroll(event: unknown): void {
        assert.byGuard(event, isVirtualScrollEvent);

        if (is.not.empty(props.limit) && event.to === props.limit - 1)
          emit("update:limit", props.limit + settings.value.growPageBy);
      },
      passThroughSlots: computed<Array<keyof QTableSlots>>(
        () => Object.keys(slots) as Array<keyof QTableSlots>
      ),
      tableColumns: computed<Writable<Columns<unknown>>>(() =>
        a.clone(props.columns)
      ),
      tableRows: computed<unknown[]>(() => a.clone(props.rows))
    };
  }
});
</script>

<template>
  <q-table
    class="sticky-header-table"
    :columns="tableColumns"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :style="{
      height
    }"
    virtual-scroll
    :virtual-scroll-item-size="48"
    :virtual-scroll-sticky-size-start="48"
    @virtual-scroll="onScroll"
  >
    <template v-for="name in passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-table>
</template>
