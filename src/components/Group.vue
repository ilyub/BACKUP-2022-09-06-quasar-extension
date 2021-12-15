<script lang="ts">
import lunr from "lunr";
import naturalCompare from "natural-compare";
import { computed, defineComponent } from "vue";

import * as a from "@skylib/functions/es/array";
import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import type { GroupItems } from "./Group.extras";
import { isGroupItems } from "./Group.extras";

export default defineComponent({
  name: "x-group",
  props: {
    items: propOptions.required(isGroupItems),
    notFoundLabel: propOptions(is.string),
    searchString: propOptions.default(is.string, "")
  },
  setup(props) {
    const filteredItems = computed<GroupItems>(() => {
      if (props.searchString.length) {
        const searchResult = searchIndex.value.search(props.searchString);

        const refs = new Set(
          a.fromIterable(searchResult).map(item => item.ref)
        );

        return sortedItems.value.map(item => {
          return { ...item, show: item.show && refs.has(item.id) };
        });
      }

      return sortedItems.value;
    });

    const searchIndex = computed<lunr.Index>(() =>
      lunr(builder => {
        builder.ref("id");
        builder.field("title");

        for (const item of props.items) builder.add(item);
      })
    );

    const sortedItems = computed<GroupItems>(() =>
      a.sort(props.items, (item1, item2) =>
        naturalCompare(item1.title, item2.title)
      )
    );

    return {
      filteredItems,
      notFoundLabelExists: computed<boolean>(() =>
        is.not.empty(props.notFoundLabel)
      ),
      notFoundLabelShow: computed<boolean>(
        () => !filteredItems.value.some(item => item.show)
      )
    };
  }
});
</script>

<template>
  <div>
    <div
      v-for="(item, index) in filteredItems"
      v-show="item.show"
      :key="item.id"
      :class="{
        'q-mt-lg': index
      }"
    >
      <slot :name="item.id"></slot>
    </div>
    <div
      v-if="notFoundLabelExists"
      v-show="notFoundLabelShow"
      class="not-found text-grey-7"
    >
      {{ notFoundLabel }}
    </div>
  </div>
</template>
