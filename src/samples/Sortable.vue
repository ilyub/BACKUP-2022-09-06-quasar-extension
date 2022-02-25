<script lang="ts">
import { defineComponent, ref } from "vue";

import * as reflect from "@skylib/functions/es/reflect";

export default defineComponent({
  name: "sample-sortable",
  setup() {
    return {
      sortable1: ref([
        { id: "a", name: "A" },
        { id: "b", name: "B" },
        { id: "c", name: "C" }
      ]),
      sortable2: ref([]),
      sortableName(item: object): unknown {
        return reflect.get(item, "name");
      }
    };
  }
});
</script>

<template>
  <m-section>
    <m-sortable
      v-model="sortable1"
      :class="$style.sortable"
      group="sortable"
      :item-component-data="{
        class: `${$style.sortableItem} q-mr-sm`
      }"
      item-key="id"
    >
      <template #item="{ item }">
        {{ sortableName(item) }}
        <m-tooltip>Sample tooltip</m-tooltip>
      </template>
    </m-sortable>
  </m-section>
  <m-section>
    <m-sortable
      v-model="sortable2"
      :class="$style.sortable"
      group="sortable"
      :item-component-data="{
        class: `${$style.sortableItem} q-mr-sm`
      }"
      item-key="id"
    >
      <template #item="{ item }">
        {{ sortableName(item) }}
        <m-tooltip>Sample tooltip</m-tooltip>
      </template>
    </m-sortable>
  </m-section>
</template>

<style lang="scss" module>
.sortable {
  height: 50px;
  background: $grey-3;

  .sortableItem {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: $grey-5;
    cursor: default;
  }
}
</style>