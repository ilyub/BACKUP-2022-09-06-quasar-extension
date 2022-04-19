<script lang="ts">
import { reflect } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import { components } from "..";

export default defineComponent({
  name: "sample-sortable",
  setup() {
    const disableDropping = ref(false);

    const disableSorting = ref(false);

    components.provideSortableSettings(() => {
      return {
        animationDuration: 500,
        disableDropping: disableDropping.value,
        disableSorting: disableSorting.value
      };
    });

    return {
      disableDropping,
      disableSorting,
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
    <m-toggle v-model="disableDropping" label="Disable dropping" left-label />
    <m-toggle v-model="disableSorting" label="Disable sorting" left-label />
  </m-section>
  <m-section>
    <m-sortable
      v-model="sortable1"
      :class="$style.sortable"
      group="sortable"
      :item-class="`${$style.sortableItem} q-mr-sm`"
      item-key="id"
      pull
      sort
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
      :item-class="`${$style.sortableItem} q-mr-sm`"
      item-key="id"
      put
      sort
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
