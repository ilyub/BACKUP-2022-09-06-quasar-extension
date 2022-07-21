<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { extras, generic } from "..";
import { Droppable } from "./Droppable.extras";
import { dump } from "@skylib/facades";
import { useQuasar } from "quasar";

interface Item {
  readonly id: string;
  readonly name: string;
}

export default defineComponent({
  name: "sample-droppable",
  components: {
    "m-droppable__items": generic.Droppable<Item, Item>(),
    "m-sortable__items": generic.Sortable<Item, Item>()
  },
  setup: (_props, { expose }) => {
    const { lang } = Droppable;

    const lk = lang.keys;

    const $q = useQuasar();

    const disableDropping = ref(false);

    const disableSorting = ref(false);

    expose();

    extras.Sortable.provideSettings(
      computed(
        (): extras.Sortable.Settings => ({
          animationDuration: 500,
          disableDropping: disableDropping.value,
          disableSorting: disableSorting.value
        })
      )
    );

    return {
      disableDropping,
      disableSorting,
      dropped: (item: Item, group: string): void => {
        $q.notify(dump({ group, item }));
      },
      lang,
      lk,
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
    <m-sortable__items
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
    </m-sortable__items>
  </m-page-section>
  <m-page-section>
    <m-sortable__items
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
    </m-sortable__items>
  </m-page-section>
  <m-page-section>
    <m-droppable__items :class="$style.droppable" @dropped="dropped" />
  </m-page-section>
</template>

<style lang="scss" module>
@use "sass:map";

.droppable {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: $grey-5;
}

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
