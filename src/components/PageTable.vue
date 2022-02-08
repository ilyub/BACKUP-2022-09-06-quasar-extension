<script lang="ts">
import type { QTableSlots } from "quasar";
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type { Writable } from "@skylib/functions/es/types/core";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import { usePageContentHeight } from "./api/pageContentHeight";
import { isVirtualScrollEvent } from "./extras/QVirtualScroll";
import type { Columns, PageTablePropOptions } from "./PageTable.extras";
import { injectPageTableSettings, isColumnsFactory } from "./PageTable.extras";

class Helper<T> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public createComponent(guard: is.Guard<T>) {
    const isItems = is.factory(is.array.of, guard);

    return defineComponent({
      name: "x-page-table",
      props: {
        ...({} as PageTablePropOptions),
        columns: propOptions.default(isColumnsFactory<T>(), []),
        extraPageOffset: propOptions(is.stringU),
        limit: propOptions(is.numberU),
        rows: propOptions.default(isItems, []),
        selected: propOptions.default(isItems, [])
      },
      emits: {
        "update:limit": (value: number) => is.number(value),
        "update:selected": (value: readonly T[]) => isItems(value)
      },
      // eslint-disable-next-line @skylib/no-mutable-signature, @skylib/prefer-readonly
      setup(props: SetupProps<PageTablePropOptions<T>>, { emit, slots }) {
        const settings = injectPageTableSettings();

        return {
          bodyCellSlotData(data: unknown): unknown {
            return data;
          },
          height: usePageContentHeight(() => props.extraPageOffset),
          onScroll(event: unknown): void {
            assert.byGuard(event, isVirtualScrollEvent);

            if (is.not.empty(props.limit) && event.to === props.limit - 1)
              emit("update:limit", props.limit + settings.value.growPageBy);
          },
          passThroughSlots: computed<Array<keyof QTableSlots>>(
            () =>
              Object.keys(o.omit(slots, "body-cell")) as Array<
                keyof QTableSlots
              >
          ),
          tableColumns: computed<Writable<Columns<T>>>(() =>
            a.clone(props.columns)
          ),
          tableRows: computed<T[]>(() => a.clone(props.rows)),
          tableSelected: computed<T[]>(() => a.clone(props.selected))
        };
      }
    });
  }
}

// eslint-disable-next-line @skylib/prefer-readonly
const component = new Helper().createComponent(is.unknown);

// eslint-disable-next-line vue/require-direct-export
export default component;

export function PageTable<T>(
  _guard: is.Guard<T>
): ReturnType<Helper<T>["createComponent"]> {
  return component as ReturnType<Helper<T>["createComponent"]>;
}
</script>

<template>
  <q-table
    class="sticky-header-table"
    :columns="tableColumns"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :selected="tableSelected"
    :style="{
      height
    }"
    virtual-scroll
    :virtual-scroll-item-size="48"
    :virtual-scroll-sticky-size-start="48"
    @update:selected="$emit('update:selected', $event)"
    @virtual-scroll="onScroll"
  >
    <template v-for="name in passThroughSlots" #[name]>
      <slot :name="name"></slot>
    </template>
    <template v-if="$slots['body-cell']" #body-cell="data">
      <slot name="body-cell" v-bind="bodyCellSlotData(data)"></slot>
    </template>
  </q-table>
</template>
