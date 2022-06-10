<script lang="ts">
import { extras, generic } from "..";
import { Sortable } from "./Sortable.extras";
import { defineComponent, ref } from "vue";

interface Item {
  readonly id: string;
  readonly name: string;
}

export default defineComponent({
  name: "sample-sortable",
  components: {
    // eslint-disable-next-line vue/component-options-name-casing -- Wait for https://github.com/vuejs/eslint-plugin-vue/issues/1908
    "m-sortable__item": generic.Sortable<Item, Item>()
  },
  setup: () => {
    const disableDropping = ref(false);

    const disableSorting = ref(false);

    extras.Sortable.provideSettings(() => {
      return {
        animationDuration: 500,
        disableDropping: disableDropping.value,
        disableSorting: disableSorting.value
      };
    });

    return {
      disableDropping,
      disableSorting,
      lang: Sortable.lang,
      lk: Sortable.lang.keys,
      sortable1: ref([
        { id: "a", name: "A" },
        { id: "b", name: "B" },
        { id: "c", name: "C" }
      ]),
      sortable2: ref([]),
      sortableName: (item: Item): string => item.name
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-buttons-group>
      <m-toggle v-model="disableDropping" :label="lk.DisableDropping" />
      <m-toggle v-model="disableSorting" :label="lk.DisableSorting" />
    </m-buttons-group>
  </m-page-section>
  <m-page-section>
    <m-sortable__item
      v-model="sortable1"
      :class="$style.sortable"
      group="sortable"
      :item-class="$style['sortable-item']"
      item-key="id"
      pull
      sort
    >
      <template #item="{ item }">
        {{ sortableName(item) }}
        <m-tooltip>{{ lang.SampleTooltip }}</m-tooltip>
      </template>
    </m-sortable__item>
  </m-page-section>
  <m-page-section>
    <m-sortable__item
      v-model="sortable2"
      :class="$style.sortable"
      group="sortable"
      :item-class="$style['sortable-item']"
      item-key="id"
      put
      sort
    >
      <template #item="{ item }">
        {{ sortableName(item) }}
        <m-tooltip>{{ lang.SampleTooltip }}</m-tooltip>
      </template>
    </m-sortable__item>
  </m-page-section>
</template>

<style lang="scss" module>
@use "sass:map";

.sortable {
  height: 50px;
  background: $grey-3;

  .sortable-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-right: map.get($space-sm, "x");
    background: $grey-5;
    cursor: default;
  }
}
</style>
