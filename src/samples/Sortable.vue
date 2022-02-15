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
  <m-sortable
    v-model="sortable1"
    class="sortable"
    group="sortable"
    :item-component-data="{
      class: 'q-mr-sm sortable-item'
    }"
    item-key="id"
  >
    <template #item="{ item }">
      {{ sortableName(item) }}
      <m-tooltip>Sample tooltip</m-tooltip>
    </template>
  </m-sortable>
  <m-sortable
    v-model="sortable2"
    class="q-mt-md sortable"
    group="sortable"
    :item-component-data="{
      class: 'q-mr-sm sortable-item'
    }"
    item-key="id"
  >
    <template #item="{ item }">
      {{ sortableName(item) }}
      <m-tooltip>Sample tooltip</m-tooltip>
    </template>
  </m-sortable>
</template>

<style lang="scss" scoped>
.sortable {
  height: 50px;
  background: $grey-3;

  :deep(.sortable-item) {
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
