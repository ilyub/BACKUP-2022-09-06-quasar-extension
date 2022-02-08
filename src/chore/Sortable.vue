<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { defineComponent, ref } from "vue";

import * as reflect from "@skylib/functions/es/reflect";

import Sortable from "../components/Sortable.vue";
import Tooltip from "../components/Tooltip.vue";

export default defineComponent({
  name: "sample-sortable",
  components: {
    "x-sortable": Sortable,
    "x-tooltip": Tooltip
  },
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
  <x-sortable
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
      <x-tooltip>Sample tooltip</x-tooltip>
    </template>
  </x-sortable>
  <x-sortable
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
      <x-tooltip>Sample tooltip</x-tooltip>
    </template>
  </x-sortable>
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
