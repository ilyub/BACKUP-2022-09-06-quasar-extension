<script lang="ts">
import { computed, defineComponent } from "vue";

import { compare } from "@skylib/facades/es/compare";
import type { Engine as InlineSearchEngine } from "@skylib/facades/es/inlineSearch";
import { inlineSearch } from "@skylib/facades/es/inlineSearch";
import * as a from "@skylib/functions/es/array";
import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import type { GroupItem, GroupItems } from "./Group.extras";
import { isGroupItems } from "./Group.extras";

export default defineComponent({
  name: "x-group",
  props: {
    items: propOptions.required(isGroupItems),
    notFoundLabel: propOptions(is.stringU),
    searchString: propOptions.default(is.string, "")
  },
  setup(props) {
    const filteredItems = computed<GroupItems>(() => {
      if (props.searchString.length) {
        const ids = new Set(
          searchIndex.value.search(props.searchString).map(item => item.id)
        );

        return sortedItems.value.map(item => {
          return { ...item, show: item.show && ids.has(item.id) };
        });
      }

      return sortedItems.value;
    });

    const searchIndex = computed<InlineSearchEngine<GroupItem>>(() =>
      inlineSearch.create("id", ["title"], props.items)
    );

    const sortedItems = computed<GroupItems>(() =>
      a.sort(props.items, (item1, item2) =>
        compare.strings(item1.title, item2.title)
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
